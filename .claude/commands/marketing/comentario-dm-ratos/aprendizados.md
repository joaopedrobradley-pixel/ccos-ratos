# Aprendizados — Comentario DM Ratos

<!-- O Claude registra aqui erros, descobertas e regras aprendidas durante o uso.
     Formato:
     ### {DATA} — {titulo curto}
     **Regra:** {o que fazer sempre/nunca}
     **Contexto:** {o que aconteceu pra gerar esse aprendizado}
-->

### 2026-07-20 — Sempre usar arquivo JSON para payloads com acentos ou emojis
**Regra:** NUNCA passar mensagens com caracteres especiais (acentos, emojis) diretamente no -d do curl. Sempre escrever o payload em um arquivo JSON via Write tool e usar `--data-binary @arquivo.json`. Payloads inline corrompem os caracteres no bash do Windows.
**Contexto:** Ao criar automação com texto em português e emojis, os caracteres ficaram quebrados no KV. Solução foi salvar o JSON num arquivo temporário e enviar via `--data-binary`.

### 2026-07-22 — Webhook nao dispara para contas privadas nem nao seguidores
**Regra:** A automacao so funciona para usuarios que: (1) seguem o perfil @joaopedrobradley E (2) tem conta publica no Instagram. Contas privadas e nao seguidores nao geram evento de webhook — o Meta nao compartilha a atividade deles com apps de terceiros. Nao ha como contornar.
**Contexto:** Confirmado com casos reais: danirossi.c (publica + seguidora) funcionou; gaudardalexandre (publico + nao seguidor) nao funcionou; nascimentofsn (privada + seguidor) nao funcionou.

### 2026-07-22 — subscribed_apps expira em poucas horas — solucao: cron no Worker
**Regra:** O subscribed_apps nao e permanente — expira em poucas horas. A solucao definitiva e o Cron Trigger `0 */6 * * *` ja deployado no Worker, que renova automaticamente as 00h, 06h, 12h e 18h UTC. NAO precisa mais renovar manualmente.
**Contexto:** A automacao parava varias vezes ao dia porque a inscricao caiu silenciosamente. Dezenas de comentarios com keyword nao receberam DM. O cron resolve definitivamente.

### 2026-07-17 — Verificar expiracao do token a cada uso
**Regra:** No inicio de QUALQUER operacao da skill, verificar a data atual e comparar com a data de expiracao do token: **17/09/2026**. Se faltar menos de 14 dias, alertar o usuario antes de continuar:
> "Atenção: seu token do Instagram expira em X dias (17/09/2026). Quer renovar agora antes de continuar?"
**Contexto:** Token da Meta Graph API dura 60 dias. Se expirar, as automacoes param silenciosamente sem nenhum erro visivel no Instagram.

### 2026-07-17 — Inscrever conta do Instagram no app (passo obrigatorio)
**Regra:** Depois do deploy e da configuracao do webhook no Meta, SEMPRE rodar esse comando antes de testar:
```bash
curl -s -X POST "https://graph.instagram.com/v22.0/INSTAGRAM_ACCOUNT_ID/subscribed_apps?subscribed_fields=comments&access_token=TOKEN"
```
Esperar `{"success":true}` antes de declarar o setup completo.
**Contexto:** Sem esse passo, o webhook fica configurado e verificado mas o Meta nao envia nenhum evento. A conta precisa ser explicitamente inscrita no app para comecar a receber os webhooks de comentarios.
