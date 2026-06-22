/**
 * Instagram DM Automation Worker — Ratos de IA
 *
 * Recebe webhooks de comentarios do Instagram.
 * Se o comentario contem a keyword configurada, envia DM (private reply) automaticamente.
 *
 * Automacoes ficam no KV namespace AUTOMATIONS:
 *   key: "post:<MEDIA_ID>" → { keyword, message, comment_replies, active, created_at }
 *   key: "index" → [{ media_id, keyword, message, comment_replies, active, created_at, label }]
 */

const IG_API = "https://graph.instagram.com/v22.0";

export default {
  // Cron: renova subscribed_apps a cada 6 horas para manter webhook ativo
  async scheduled(event, env, ctx) {
    const url = `${IG_API}/${env.INSTAGRAM_ACCOUNT_ID}/subscribed_apps?subscribed_fields=comments&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`;
    const res = await fetch(url, { method: "POST" });
    const body = await res.json();
    console.log(`[cron] subscribed_apps renovado: ${JSON.stringify(body)}`);
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // --- Política de Privacidade ---
    if (request.method === "GET" && url.pathname === "/privacy") {
      return new Response(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidade — @joaopedrobradley</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f9f9f9; color: #222; line-height: 1.7; }
    .container { max-width: 720px; margin: 60px auto; background: #fff; border-radius: 8px; padding: 48px 56px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
    h1 { font-size: 1.6rem; font-weight: 700; margin-bottom: 8px; }
    .updated { font-size: 0.85rem; color: #888; margin-bottom: 36px; }
    h2 { font-size: 1.05rem; font-weight: 600; margin: 32px 0 10px; }
    p { margin-bottom: 12px; color: #444; }
    ul { padding-left: 20px; color: #444; margin-bottom: 12px; }
    ul li { margin-bottom: 6px; }
    a { color: #0070f3; text-decoration: none; }
    a:hover { text-decoration: underline; }
    @media (max-width: 640px) { .container { margin: 24px 16px; padding: 32px 24px; } }
  </style>
</head>
<body>
  <div class="container">
    <h1>Política de Privacidade</h1>
    <p class="updated">Última atualização: 17 de julho de 2026</p>
    <p>Esta política descreve como o aplicativo de automação de mensagens vinculado ao perfil <strong>@joaopedrobradley</strong> no Instagram coleta, usa e protege as informações dos usuários que interagem com suas publicações.</p>
    <h2>1. Quem somos</h2>
    <p>Este aplicativo é operado por João Pedro Bradley, responsável pelo perfil @joaopedrobradley no Instagram. Dúvidas podem ser enviadas para <a href="mailto:joaopedrobradley@conectaria.com.br">joaopedrobradley@conectaria.com.br</a>.</p>
    <h2>2. Quais dados coletamos</h2>
    <p>Quando você comenta em uma publicação do perfil @joaopedrobradley e sua mensagem contém uma palavra-chave configurada, o aplicativo acessa:</p>
    <ul>
      <li>ID do comentário</li>
      <li>Texto do comentário</li>
      <li>Nome de usuário do Instagram (@username)</li>
    </ul>
    <p>Nenhum dado adicional (e-mail, telefone, localização) é coletado ou armazenado.</p>
    <h2>3. Como usamos os dados</h2>
    <p>Os dados são usados exclusivamente para:</p>
    <ul>
      <li>Enviar uma mensagem direta (DM) ao usuário em resposta ao comentário</li>
      <li>Responder publicamente o comentário com uma mensagem de confirmação</li>
    </ul>
    <p>Os dados não são compartilhados com terceiros, vendidos ou utilizados para fins publicitários.</p>
    <h2>4. Armazenamento</h2>
    <p>Os dados de comentários são processados em tempo real e não são armazenados de forma persistente. As configurações das automações ficam armazenadas no Cloudflare Workers KV, sem vínculo com dados pessoais dos usuários.</p>
    <h2>5. Base legal</h2>
    <p>O processamento ocorre com base no legítimo interesse do operador em responder interações públicas realizadas voluntariamente pelos usuários na plataforma Instagram, nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
    <h2>6. Seus direitos</h2>
    <p>Você pode a qualquer momento solicitar informações sobre os dados processados ou a exclusão de qualquer dado associado a você pelo e-mail <a href="mailto:joaopedrobradley@conectaria.com.br">joaopedrobradley@conectaria.com.br</a>.</p>
    <h2>7. Plataforma Instagram</h2>
    <p>Este aplicativo opera via Meta Graph API e segue os <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener">Termos de Serviço da Plataforma Meta</a>. O uso do Instagram está sujeito à <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener">Política de Privacidade do Instagram</a>.</p>
    <h2>8. Alterações</h2>
    <p>Esta política pode ser atualizada a qualquer momento. A data de última atualização será revisada a cada mudança.</p>
  </div>
</body>
</html>`, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // --- Webhook verification (GET) ---
    if (request.method === "GET" && url.pathname === "/webhook") {
      const mode = url.searchParams.get("hub.mode");
      const token = url.searchParams.get("hub.verify_token");
      const challenge = url.searchParams.get("hub.challenge");

      if (mode === "subscribe" && token === env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response(challenge, { status: 200 });
      }
      return new Response("Forbidden", { status: 403 });
    }

    // --- Webhook events (POST) ---
    if (request.method === "POST" && url.pathname === "/webhook") {
      const body = await request.json();
      // Processa em background (Meta espera resposta rapida)
      ctx.waitUntil(this.handleWebhook(body, env));
      return new Response("OK", { status: 200 });
    }

    // --- API: listar automacoes ---
    if (request.method === "GET" && url.pathname === "/automations") {
      const auth = url.searchParams.get("key");
      if (auth !== env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
      }
      const index = await env.AUTOMATIONS.get("index", "json") || [];
      return Response.json(index);
    }

    // --- API: criar/atualizar automacao ---
    if (request.method === "POST" && url.pathname === "/automations") {
      const auth = url.searchParams.get("key");
      if (auth !== env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
      }

      const { media_id, keyword, message, comment_replies, label } = await request.json();
      if (!media_id || !keyword || !message) {
        return Response.json({ error: "media_id, keyword e message sao obrigatorios" }, { status: 400 });
      }

      const automation = {
        keyword: keyword.toLowerCase().trim(),
        message,
        comment_replies: comment_replies || [
          "feito, enviado! confere tua DM 📩",
          "pronto, confere tua DM! 🐀",
          "mandei lá na DM!",
          "enviado! olha tua DM 👀",
        ],
        active: true,
        created_at: new Date().toISOString(),
        label: label || "",
      };

      // Salva no KV por media_id
      await env.AUTOMATIONS.put(`post:${media_id}`, JSON.stringify(automation));

      // Atualiza indice
      const index = await env.AUTOMATIONS.get("index", "json") || [];
      const existing = index.findIndex((a) => a.media_id === media_id);
      const entry = { media_id, ...automation };
      if (existing >= 0) {
        index[existing] = entry;
      } else {
        index.push(entry);
      }
      await env.AUTOMATIONS.put("index", JSON.stringify(index));

      return Response.json({ ok: true, automation: entry });
    }

    // --- API: deletar automacao ---
    if (request.method === "DELETE" && url.pathname === "/automations") {
      const auth = url.searchParams.get("key");
      if (auth !== env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
      }

      const { media_id } = await request.json();
      if (!media_id) {
        return Response.json({ error: "media_id obrigatorio" }, { status: 400 });
      }

      await env.AUTOMATIONS.delete(`post:${media_id}`);

      const index = await env.AUTOMATIONS.get("index", "json") || [];
      const filtered = index.filter((a) => a.media_id !== media_id);
      await env.AUTOMATIONS.put("index", JSON.stringify(filtered));

      return Response.json({ ok: true, removed: media_id });
    }

    return new Response("Instagram DM Worker — Ratos de IA", { status: 200 });
  },

  async handleWebhook(body, env) {
    if (!body.entry) return;

    for (const entry of body.entry) {
      if (!entry.changes) continue;

      for (const change of entry.changes) {
        if (change.field !== "comments") continue;

        const { text, id: commentId, media, from } = change.value;
        if (!text || !commentId || !media?.id) continue;

        // Ignora comentarios do proprio perfil
        if (from?.id === env.INSTAGRAM_ACCOUNT_ID) continue;

        // Busca automacao pra esse post
        const automation = await env.AUTOMATIONS.get(`post:${media.id}`, "json");
        if (!automation || !automation.active) continue;

        // Checa keyword (case insensitive, contem a palavra)
        const commentText = text.toLowerCase().trim();
        const keyword = automation.keyword.toLowerCase().trim();
        if (!commentText.includes(keyword)) continue;

        // Envia DM via private reply
        await this.sendPrivateReply(commentId, automation.message, env);

        // Responde o comentario com mensagem rotacionada
        if (automation.comment_replies?.length > 0) {
          const reply = this.pickRandom(automation.comment_replies);
          await this.replyToComment(commentId, reply, env);
          console.log(`Resposta no comentario: "${reply}"`);
        }

        console.log(`DM enviada: comment=${commentId}, user=${from?.username}, keyword="${keyword}"`);
      }
    }
  },

  pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  async replyToComment(commentId, text, env) {
    const url = `${IG_API}/${commentId}/replies`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.INSTAGRAM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Erro ao responder comentario: ${response.status} — ${error}`);
    }

    return response;
  },

  async sendPrivateReply(commentId, messageText, env) {
    const url = `${IG_API}/${env.INSTAGRAM_ACCOUNT_ID}/messages`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.INSTAGRAM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: { comment_id: commentId },
        message: { text: messageText },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Erro ao enviar DM: ${response.status} — ${error}`);
    }

    return response;
  },
};
