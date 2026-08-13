/* ============================================================
   CONFIGURAÇÃO — edite antes de publicar no Netlify
   ============================================================ */

// Cole aqui a URL do webhook do Make (Webhooks → Custom webhook,
// formato https://hook.{regiao}.make.com/{token} — NÃO é a versão
// com @, aquela é Mailhook e não aceita JSON).
// Reaproveitando o mesmo webhook dos outros formulários da Conectaria —
// lembre de criar/ajustar a rota no cenário do Make pro form_source
// "temaslive" (ver seção 5 de reference_processo_criacao_formularios).
const WEBHOOK_URL = "https://hook.us2.make.com/smle96g3cyirg5kc54blk59vjefna314";

// Link de WhatsApp da equipe — aparece no botão da tela final,
// pra quem quiser falar com a gente além de sugerir o tema.
const CINTIA_URL = "https://api.whatsapp.com/send?phone=558193914560&text=Ola,%20vim%20do%20formul%C3%A1rio%20de%20temas%20da%20live%20e%20quero%20falar%20com%20a%20equipe";

// Link do Drive com os 4 materiais do Currículo Perfeito — reaproveitado
// como "presente" de quem preenche esse formulário (mesmo link usado
// no botão final do curriculoperfeito2).
const MATERIALS_URL = "https://drive.google.com/file/d/1UphDpLVE92DmE2Zycn0BZAugmbvzlGI1/view?usp=sharing";

// Identifica de qual site/formulário o lead veio. Como o mesmo
// webhook do Make recebe requisições de vários formulários, esse
// valor é o que permite filtrar/rotear no cenário do Make.
const FORM_SOURCE = "temaslive";

/* ============================================================
   DADOS DAS ETAPAS

   Fluxo com ramificação:
   1) tema_live (pergunta aberta, sozinha) — checkpoint, garante a
      sugestão mesmo que a pessoa não continue.
   2) convite pra pesquisa: "quer me ajudar a te entender melhor?"
      - "Sim" -> segue pela pesquisa aberta (mesmo bloco de perguntas
        qualitativas usado no pós-evento: maior trava, desafios,
        problema único, meta de 12 meses)
      - "Não" -> pula direto pro contato
   3) contato (nome + whatsapp) — checkpoint final, converge os dois
      caminhos
   4) tela final única
   ============================================================ */

const steps = [
  {
    // A pergunta do tema já vem embutida na própria tela de intro
    // (hardcoded no HTML, ver comentário lá) — direto ao ponto, sem
    // uma etapa "Começar" antes. `staticHtml` é só documentação aqui;
    // o textarea "f_tema_live" no HTML já corresponde à key abaixo.
    id: "tema_live",
    type: "text",
    staticHtml: true,
    key: "tema_live",
    label: "Tema sugerido",
    checkpoint: true
  },
  {
    id: "quer_ajudar",
    type: "single",
    title: "Quer me ajudar a te entender ainda mais?",
    sub: "Se você quiser, responda mais algumas perguntas rápidas pra eu entender melhor sua área, seus desafios e o que você vem vivendo — assim consigo te apoiar de verdade, não só na live.<br><br>De qualquer forma, ao final você recebe os <strong>4 materiais exclusivos</strong> que preparei. 🎁",
    key: "quer_ajudar",
    options: [
      "Sim, quero contar mais",
      "Não, só isso mesmo"
    ],
    cta: "Continuar",
    // Quem não quer continuar pula direto pro contato, sem passar
    // pelas perguntas abertas abaixo.
    branch: {
      "Não, só isso mesmo": { to: "contato" }
    }
  },
  {
    id: "momento_aberto",
    type: "text",
    title: "Pra eu te entender melhor: o que você sente que mais te impede de conseguir oportunidades hoje?",
    sub: "Pode ser sincero, algo em você, no seu processo, no mercado, na sua estratégia. Escreve do seu jeito.",
    key: "momento_texto",
    label: "Momento",
    placeholder: "Digite o que mais te impede...",
    cta: "Continuar"
  },
  {
    id: "alternativas",
    type: "multi",
    title: "Qual dessas alternativas mais descreve seu desafio hoje?",
    sub: "Pode escolher mais de uma alternativa.",
    key: "desafios",
    options: [
      "Envio currículos, mas quase nunca recebo retorno",
      "Meu LinkedIn está invisível para recrutadores",
      "Não consigo avançar nos processos da Gupy e de outras plataformas",
      "Não sei onde encontrar vagas compatíveis com o meu perfil",
      "Até consigo entrevistas, mas não avanço para as próximas etapas",
      "Não sei exatamente o que estou fazendo de errado"
    ],
    cta: "Continuar"
  },
  {
    id: "problema_unico",
    type: "text",
    title: "Agora imagina que você pudesse sentar comigo hoje e resolver UM único problema, qualquer um. Qual seria?",
    sub: "O que mais te incomoda / te tira o sono na sua busca por novas oportunidades hoje?",
    key: "problema_unico",
    label: "Problema",
    placeholder: "Digite o único problema...",
    cta: "Continuar"
  },
  {
    id: "onde_chegar",
    type: "text",
    title: "Por último: onde você quer chegar com a sua carreira nos próximos 12 meses?",
    sub: "(tipo de empresa, cargo, emprego, salário...)",
    key: "meta_12_meses",
    label: "Meta",
    placeholder: "Digite onde você quer chegar",
    cta: "Continuar",
    checkpoint: true
  },
  {
    id: "contato",
    type: "contact",
    title: "Qual o seu nome, e-mail e WhatsApp?",
    sub: "É por aqui que eu te aviso quando o tema que você pediu entrar no ar, te mando o presente e, se fizer sentido pelo que você contou, a gente continua essa conversa.",
    fields: [
      { key: "nome", placeholder: "Digite seu Nome...", type: "text", required: true, maxlength: 80 },
      { key: "email", placeholder: "Digite seu melhor e-mail...", type: "email", required: true, maxlength: 120 },
      { key: "whatsapp", placeholder: "Digite seu WhatsApp...", type: "tel", required: true, maxlength: 16, validate: "phone" }
    ],
    consent: 'Ao enviar, você concorda com nossa <a href="https://docs.google.com/document/d/1OTmIfFxbMA6UQU6ZZIp92HP0718kRbWR/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e nossos <a href="https://docs.google.com/document/d/1mlfQclAIRgz5efUlEH6Iz4tqpsi_MJeN/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Termos de Uso</a>.',
    cta: "Enviar e receber meu presente 🎁",
    checkpoint: true,
    completesForm: true,
    fbEvent: "Lead"
  },
  {
    id: "final",
    type: "final",
    title: "Prontinho! Anotei sua sugestão — e tenho um presente pra você 🎁",
    sub: "Muito obrigado por compartilhar isso comigo — vou usar pra preparar a próxima aula ao vivo.<br><br>De brinde, libera agora esses <strong>4 materiais exclusivos</strong> que preparei:",
    // Materiais do Currículo Perfeito, reaproveitados como presente
    // por preencher esse formulário.
    showMaterials: true,
    cta: "Quero receber meus 4 materiais",
    ctaUrl: MATERIALS_URL,
    note: 'Se quiser adiantar e já falar com a nossa equipe, é só <a href="' + CINTIA_URL + '" target="_blank" rel="noopener noreferrer">clicar aqui</a>.'
  }
];

/* ============================================================
   ESTADO
   ============================================================ */

const SESSION_KEY = "tlv_session_id";
const ANSWERS_KEY = "tlv_answers";

function getSessionId(){
  let id = localStorage.getItem(SESSION_KEY);
  if(!id){
    id = "tlv_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

const state = {
  sessionId: getSessionId(),
  current: 0,
  answers: JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}")
};

function saveAnswersLocal(){
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers));
}

function findStepIndexById(id){
  return steps.findIndex(s => s.id === id);
}

/* ============================================================
   ENVIO PARA O WEBHOOK — só nos checkpoints marcados acima,
   não a cada etapa. Cada chamada é uma execução nova do cenário
   no Make; pra não gerar linhas duplicadas na planilha, o cenário
   do lado de lá precisa localizar o registro pelo session_id
   (Search Rows -> Update se achou, Add Row se não achou).
   ============================================================ */

async function sendCheckpoint(stepId, completed){
  const payload = {
    form_source: FORM_SOURCE,
    session_id: state.sessionId,
    step: stepId,
    completed: !!completed,
    answers: state.answers,
    timestamp: new Date().toISOString()
  };

  if(!WEBHOOK_URL){
    console.log("[webhook não configurado] payload que seria enviado:", payload);
    return;
  }

  try{
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
  }catch(err){
    console.warn("Falha ao enviar pro webhook (seguindo o fluxo mesmo assim):", err);
  }
}

function trackFb(eventName){
  if(typeof fbq === "function" && typeof PIXEL_ID !== "undefined" && PIXEL_ID){
    try{ fbq("track", eventName); }catch(err){ /* pixel ainda não carregou, tudo bem */ }
  }
}

/* ============================================================
   RENDER
   ============================================================ */

const stepBody = document.getElementById("stepBody");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const form = document.getElementById("quizForm");
const poweredHint = document.getElementById("poweredHint");

function renderStep(){
  const step = steps[state.current];
  progressFill.style.width = Math.round((state.current / (steps.length - 1)) * 100) + "%";
  backBtn.classList.toggle("visible", state.current > 0);

  let html = "";

  if(step.eyebrow){ html += `<p class="eyebrow">${step.eyebrow}</p>`; }
  html += `<h1 class="step-title">${step.title}</h1>`;
  if(step.sub){ html += `<p class="step-sub">${step.sub}</p>`; }

  if(step.showMaterials){
    html += `
      <div class="materials">
        <div class="material">
          <img src="assets/material-modelo.webp" alt="" width="170" height="80" loading="lazy" />
          <h3>Modelo de Currículo Perfeito</h3>
          <p>organize suas experiências de uma forma que destaque resultados e chame a atenção dos recrutadores</p>
        </div>
        <div class="material">
          <img src="assets/material-banco.webp" alt="" width="170" height="113" loading="lazy" />
          <h3>Banco de Currículos Aprovados</h3>
          <p>veja currículos reais que já foram aprovados e aplique o mesmo padrão no seu, por área</p>
        </div>
        <div class="material">
          <img src="assets/material-vagas.webp" alt="" width="170" height="113" loading="lazy" />
          <h3>Vagas Ocultas™</h3>
          <p>descubra onde estão as oportunidades que nunca chegam aos portais de emprego</p>
        </div>
        <div class="material">
          <img src="assets/material-venda.webp" alt="" width="170" height="113" loading="lazy" />
          <h3>Se Venda Melhor</h3>
          <p>cole sua experiência e deixe a IA reorganizar tudo na forma que mais chama atenção do recrutador</p>
        </div>
      </div>
    `;
  }

  if(step.type === "contact"){
    html += `<div class="field">`;
    step.fields.forEach(f => {
      const val = state.answers[f.key] || "";
      const maxlen = f.maxlength ? `maxlength="${f.maxlength}"` : "";
      html += `<input type="${f.type}" id="f_${f.key}" placeholder="${f.placeholder}" value="${escapeAttr(val)}" ${maxlen} ${f.required ? "required" : ""} />`;
    });
    html += `</div>`;
    if(step.consent){ html += `<p class="consent">${step.consent}</p>`; }
  }

  if(step.type === "text"){
    const val = state.answers[step.key] || "";
    html += `
      <div class="field">
        <label class="sr-only" for="f_${step.key}">${step.label}</label>
        <textarea id="f_${step.key}" rows="3" placeholder="${step.placeholder}" required>${escapeHtml(val)}</textarea>
      </div>
    `;
  }

  if(step.type === "single" || step.type === "multi"){
    const selected = state.answers[step.key] || (step.type === "multi" ? [] : "");
    html += `<fieldset><legend class="sr-only">${step.title}</legend><div class="options">`;
    step.options.forEach((opt, i) => {
      const isChecked = step.type === "multi" ? selected.includes(opt) : selected === opt;
      html += `
        <label class="option ${isChecked ? "selected" : ""}" data-opt-index="${i}">
          <input type="${step.type === "multi" ? "checkbox" : "radio"}" name="opt_${step.id}" value="${escapeAttr(opt)}" ${isChecked ? "checked" : ""} />
          <span>${opt}</span>
        </label>
      `;
    });
    html += `</div></fieldset>`;
  }

  html += `<div class="actions">`;
  if(step.type !== "final"){
    html += `<button type="submit" class="btn btn-primary cta-btn">${step.cta}</button>`;
  } else {
    html += `<a href="${step.ctaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration:none; text-align:center; display:block;">${step.cta}</a>`;
  }
  html += `</div>`;

  if(step.note){ html += `<div class="final-note">${step.note}</div>`; }

  stepBody.classList.add("animate");
  stepBody.innerHTML = html;
  poweredHint.style.display = step.type === "final" ? "none" : "block";

  wireStepEvents(step);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function escapeAttr(str){ return escapeHtml(str); }

function wireStepEvents(step){
  if(step.type === "single" || step.type === "multi"){
    stepBody.querySelectorAll(".option").forEach(label => {
      label.addEventListener("click", () => {
        if(step.type === "single"){
          stepBody.querySelectorAll(".option").forEach(l => l.classList.remove("selected"));
          label.classList.add("selected");
        } else {
          label.classList.toggle("selected");
        }
      });
    });
  }

  if(step.type === "contact"){
    step.fields.forEach(f => {
      if(f.validate !== "phone") return;
      const el = document.getElementById("f_" + f.key);
      el.addEventListener("input", () => {
        const digits = el.value.replace(/\D/g, "").slice(0, 11);
        let formatted = digits;
        if(digits.length > 10){
          formatted = `${digits.slice(0,2)} ${digits.slice(2,7)}-${digits.slice(7)}`;
        } else if(digits.length > 6){
          formatted = `${digits.slice(0,2)} ${digits.slice(2,6)}-${digits.slice(6)}`;
        } else if(digits.length > 2){
          formatted = `${digits.slice(0,2)} ${digits.slice(2)}`;
        }
        el.value = formatted;
        el.setCustomValidity("");
      });
    });
  }
}

/* ============================================================
   NAVEGAÇÃO
   ============================================================ */

function collectStepAnswer(step){
  if(step.type === "contact"){
    let ok = true;
    step.fields.forEach(f => {
      const el = document.getElementById("f_" + f.key);
      const val = el.value.trim();
      el.setCustomValidity("");

      if(f.required && !val){ ok = false; }

      if(val && f.validate === "phone"){
        const digits = val.replace(/\D/g, "");
        if(digits.length < 10 || digits.length > 13){
          el.setCustomValidity("Digite um WhatsApp válido, com DDD (ex: 11 91234-5678).");
          ok = false;
        }
      }

      if(val && f.type === "email" && !el.checkValidity()){
        ok = false;
      }

      state.answers[f.key] = val;
    });
    return ok;
  }

  if(step.type === "text"){
    const el = document.getElementById("f_" + step.key);
    const val = el.value.trim();
    if(!val) return false;
    state.answers[step.key] = val;
    return true;
  }

  if(step.type === "single"){
    const checked = stepBody.querySelector(`input[name="opt_${step.id}"]:checked`);
    if(!checked) return false;
    state.answers[step.key] = checked.value;
    return true;
  }

  if(step.type === "multi"){
    const checked = [...stepBody.querySelectorAll(`input[name="opt_${step.id}"]:checked`)];
    if(checked.length === 0) return false;
    state.answers[step.key] = checked.map(c => c.value);
    return true;
  }

  return true;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const step = steps[state.current];

  if(step.type !== "intro"){
    const ok = collectStepAnswer(step);
    if(!ok){
      const invalidField = stepBody.querySelector(":invalid") || stepBody.querySelector("input, textarea");
      if(invalidField) invalidField.reportValidity ? invalidField.reportValidity() : invalidField.focus();
      return;
    }
    saveAnswersLocal();
  }

  await goNext(step);
});

async function goNext(step){
  stepBody.querySelectorAll(".cta-btn").forEach(b => { b.disabled = true; });

  let nextIndex = state.current + 1;
  let isCheckpoint = !!step.checkpoint;
  let completesForm = !!step.completesForm;
  let fbEvent = step.fbEvent;

  // Ramificação: se a resposta dessa etapa tiver um destino mapeado
  // em `branch`, pula direto pra lá em vez de ir pra próxima etapa da fila.
  if(step.branch){
    const answer = state.answers[step.key];
    const target = step.branch[answer];
    if(target){
      const targetId = typeof target === "string" ? target : target.to;
      const idx = findStepIndexById(targetId);
      if(idx !== -1) nextIndex = idx;
      if(typeof target === "object"){
        if(target.completesForm) completesForm = true;
        if(target.fbEvent) fbEvent = target.fbEvent;
        isCheckpoint = true;
      }
    }
  }

  if(isCheckpoint){
    sendCheckpoint(step.id, completesForm);
    if(fbEvent){ trackFb(fbEvent); }
  }

  state.current = Math.min(nextIndex, steps.length - 1);
  renderStep();
}

backBtn.addEventListener("click", () => {
  if(state.current === 0) return;
  state.current -= 1;
  renderStep();
});
