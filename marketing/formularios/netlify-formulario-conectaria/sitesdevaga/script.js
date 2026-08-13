/* ============================================================
   CONFIGURAÇÃO — edite antes de publicar no Netlify
   ============================================================ */

// Cole aqui a URL do webhook do Make (Webhooks → Custom webhook,
// formato https://hook.{regiao}.make.com/{token} — NÃO é a versão
// com @, aquela é Mailhook e não aceita JSON).
// Reaproveitando o mesmo webhook dos outros formulários da Conectaria —
// lembre de criar/ajustar a rota no cenário do Make pro form_source
// "sitesdevaga" (ver seção 5 de reference_processo_criacao_formularios).
// O envio do material (os +50 sites) acontece do lado do Make,
// não é esse script que dispara isso.
const WEBHOOK_URL = "https://hook.us2.make.com/smle96g3cyirg5kc54blk59vjefna314";

// Link de WhatsApp da Cintia — aparece no botão da tela final
// só pra quem se qualificou como lead bom (ver isLeadQualificado abaixo).
const CINTIA_URL = "https://api.whatsapp.com/send?phone=558193914560&text=Ola,%20vim%20dos%2050%20sites%20de%20vaga%20via%20LinkedIn%20e%20gostaria%20de%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar";

// Identifica de qual site/formulário o lead veio. Como o mesmo
// webhook do Make recebe requisições de vários formulários, esse
// valor é o que permite filtrar/rotear no cenário do Make.
const FORM_SOURCE = "sitesdevaga";

/* ============================================================
   REGRA DE QUALIFICAÇÃO (lead bom vs. só material)

   Todo mundo que preenche recebe o material (os +50 sites),
   independente da resposta. A ramificação só decide se a pessoa
   TAMBÉM vê o convite direto pra falar com a Cintia sobre a mentoria.

   Pra contar como lead bom, PRECISA bater as três condições:
   1) faixa_salarial diferente de "Até R$ 5 mil"
      (sem faixa salarial boa, não tem como investir na mentoria)
   2) disposicao_investir é "Sim, quero entender como funciona!"
      OU "Talvez, preciso saber mais antes."
      (interesse real ou ainda em dúvida — as duas contam, desde
      que os outros dois requisitos também batam. Só quem marcou
      "No momento, só estou pesquisando" fica de fora aqui.)
   3) tempo_travado é "Menos de 1 mês" ou "1 a 3 meses"
      (quem tá buscando recolocação há muitos meses, sem sucesso,
      normalmente já não tem dinheiro sobrando pra investir — mesmo
      que tenha marcado faixa salarial boa e disposição "sim"/"talvez".
      Já quem tá empregado ou foi desligado recentemente é exatamente
      o lead que a gente quer priorizar.)

   Não precisa bater tudo pra receber o material — isso todo mundo
   recebe. Só afeta se aparece o convite direto pra Cintia.
   ============================================================ */

const FAIXAS_QUALIFICADAS = [
  "R$ 5 mil a R$ 10 mil",
  "R$ 10 mil a R$ 20 mil",
  "Acima de R$ 20 mil"
];

const DISPOSICOES_QUALIFICADAS = [
  "Sim, quero entender como funciona!",
  "Talvez, preciso saber mais antes."
];

const TEMPOS_QUALIFICADOS = [
  "Menos de 1 mês",
  "1 a 3 meses"
];

function isLeadQualificado(answers){
  return FAIXAS_QUALIFICADAS.includes(answers.faixa_salarial)
    && DISPOSICOES_QUALIFICADAS.includes(answers.disposicao_investir)
    && TEMPOS_QUALIFICADOS.includes(answers.tempo_travado);
}

/* ============================================================
   DADOS DAS ETAPAS

   Segue a mesma ordem do formulário de referência (Google Forms):
   momento atual -> nível do último cargo -> tempo travado ->
   principal trava -> faixa salarial -> disposição a investir ->
   contato (nome + e-mail, por último, igual ao original — o e-mail é
   por onde a gente entrega o material).

   A ramificação acontece na etapa de contato (branchFn), avaliando
   faixa_salarial + disposicao_investir já respondidas antes.

   Só existe UM checkpoint em todo o formulário: a etapa "contato",
   que é a última. Diferente dos outros formulários da Conectaria
   (que salvam progresso parcial no meio do caminho), aqui o webhook
   só dispara quando a pessoa realmente termina — não faz sentido
   registrar um lead incompleto antes dela enviar nome e e-mail.
   ============================================================ */

const steps = [
  {
    id: "intro",
    type: "intro",
    staticHtml: true,
    cta: "Quero receber o material"
  },
  {
    id: "momento_atual",
    type: "single",
    title: "Como você descreveria seu momento hoje?",
    key: "momento_atual",
    options: [
      "Estou empregado(a), mas quero (ou preciso) me recolocar",
      "Fui desligado(a) recentemente e estou buscando",
      "Busco recolocação há meses e sinto que travei",
      "Estou empregado(a), mas estagnado(a) / com medo de perder"
    ],
    cta: "Continuar"
  },
  {
    id: "nivel_cargo",
    type: "single",
    title: "Qual foi o nível do seu último cargo?",
    key: "nivel_cargo",
    options: [
      "Analista / Especialista",
      "Coordenação / Supervisão",
      "Gerência",
      "Head / Diretoria",
      "C-level (CEO, CFO, CTO…)"
    ],
    cta: "Continuar"
  },
  {
    id: "tempo_travado",
    type: "single",
    title: "Há quanto tempo você sente que não avança na sua busca por um emprego?",
    key: "tempo_travado",
    options: [
      "Menos de 1 mês",
      "1 a 3 meses",
      "3 a 6 meses",
      "Mais de 6 meses"
    ],
    cta: "Continuar"
  },
  {
    id: "trava_principal",
    type: "single",
    title: "O que você MAIS sente que te trava hoje?",
    key: "trava_principal",
    options: [
      "Envio currículos e só recebo silêncio",
      "Meu currículo / LinkedIn não comunica o meu valor",
      "Travo ou não me destaco nas entrevistas",
      "Não sei como chegar nas vagas boas (as que não aparecem)",
      "Sinto que é a minha idade ou o tempo fora do mercado"
    ],
    cta: "Continuar"
  },
  {
    id: "faixa_salarial",
    type: "single",
    title: "Qual faixa salarial você busca na próxima posição?",
    key: "faixa_salarial",
    options: [
      "Até R$ 5 mil",
      "R$ 5 mil a R$ 10 mil",
      "R$ 10 mil a R$ 20 mil",
      "Acima de R$ 20 mil"
    ],
    cta: "Continuar"
  },
  {
    id: "disposicao_investir",
    type: "single",
    titleClass: "step-title--sm",
    title: "Se existir um caminho estruturado, com acompanhamento humano até a sua nova oportunidade, você estaria disposto(a) a investir em você pra destravar isso?",
    key: "disposicao_investir",
    options: [
      "Sim, quero entender como funciona!",
      "Talvez, preciso saber mais antes.",
      "No momento, só estou pesquisando."
    ],
    cta: "Continuar"
  },
  {
    id: "contato",
    type: "contact",
    title: "Qual o seu nome, e-mail e WhatsApp?",
    sub: "Preenche com atenção, porque é por aqui que a gente te manda o material completo e, se fizer sentido, continua te ajudando a estruturar sua candidatura.",
    fields: [
      { key: "nome", placeholder: "Digite seu Nome...", type: "text", required: true, maxlength: 80 },
      { key: "email", placeholder: "Digite seu melhor e-mail...", type: "email", required: true, maxlength: 120 },
      { key: "whatsapp", placeholder: "Digite seu WhatsApp...", type: "tel", required: true, maxlength: 16, validate: "phone" }
    ],
    consent: 'Ao enviar, você concorda com nossa <a href="https://docs.google.com/document/d/1OTmIfFxbMA6UQU6ZZIp92HP0718kRbWR/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e nossos <a href="https://docs.google.com/document/d/1mlfQclAIRgz5efUlEH6Iz4tqpsi_MJeN/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Termos de Uso</a>.',
    cta: "Enviar",
    checkpoint: true,
    completesForm: true,
    fbEvent: "Lead",
    // Decide, com base nas respostas já dadas, se essa pessoa vê o
    // convite direto pra Cintia (lead bom) ou a tela final padrão,
    // sem nenhum botão de CTA.
    branchFn: (answers) => isLeadQualificado(answers) ? "final_apoio" : "final"
  },
  {
    id: "final",
    type: "final",
    title: "Prontinho! Seu material está a caminho.",
    // Sem CTA pra falar com a Cintia aqui de propósito — esse convite
    // só aparece pra quem se qualificou (ver "final_apoio" abaixo).
    sub: "Em alguns minutos você recebe o guia completo com os +50 sites de vagas remotas, direto no seu e-mail.<br><br>Se não aparecer, dá uma olhada na caixa de spam/promoções.<br><br>Qualquer dúvida, é só chamar a gente em <a href=\"mailto:joaopedrobradley@conectaria.com.br\">joaopedrobradley@conectaria.com.br</a> — será um prazer te ajudar."
  },
  {
    id: "final_apoio",
    type: "final",
    title: "Prontinho! Seu material está a caminho — e vamos te ajudar a ir além.",
    sub: "Em alguns minutos você recebe o guia completo com os +50 sites de vagas remotas.<br><br>Pelas suas respostas, faz sentido você conhecer nosso acompanhamento humano até a sua nova oportunidade. Fala agora com a <strong>Cintia</strong>, nossa mentora de carreira:",
    cta: "Fale com a Cinthia para saber mais!",
    ctaUrl: CINTIA_URL,
    // Galeria de depoimentos reais, só nessa tela (lead qualificado),
    // pra reforçar confiança logo antes do CTA pra Cintia.
    showProof: true
  }
];

// Prints reais de conversas de mentorados (mesmas imagens usadas na
// página de menu de links da Conectaria), pra seção "Provas reais".
const PROOF_IMAGES = [
  "assets/prova-1.webp",
  "assets/prova-2.webp",
  "assets/prova-3.webp",
  "assets/prova-4.webp",
  "assets/prova-5.webp",
  "assets/prova-6.webp"
];

/* ============================================================
   ESTADO
   ============================================================ */

const SESSION_KEY = "sdv_session_id";
const ANSWERS_KEY = "sdv_answers";

function getSessionId(){
  let id = localStorage.getItem(SESSION_KEY);
  if(!id){
    id = "sdv_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
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
  // Tem duas telas finais possíveis ("final" e "final_apoio") em índices
  // diferentes do array — sem esse caso especial, cair na primeira delas
  // nunca preenchia 100% da barra. Qualquer tela final conta como completo.
  const progressPct = step.type === "final" ? 100 : Math.round((state.current / (steps.length - 1)) * 100);
  progressFill.style.width = progressPct + "%";
  backBtn.classList.toggle("visible", state.current > 0);

  let html = "";

  if(step.eyebrow){ html += `<p class="eyebrow">${step.eyebrow}</p>`; }
  html += `<h1 class="step-title${step.titleClass ? " " + step.titleClass : ""}">${step.title}</h1>`;
  if(step.sub){ html += `<p class="step-sub">${step.sub}</p>`; }

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

  if(step.showProof){
    html += `
      <div class="proof-section">
        <p class="proof-eyebrow">Provas reais</p>
        <h2 class="proof-title">O que estão conquistando com o nosso método</h2>
        <div class="proof-scroll">
          ${PROOF_IMAGES.map(src => `<img src="${src}" alt="Depoimento de mentorado" loading="lazy" />`).join("")}
        </div>
      </div>
    `;
  }

  // Etapa "final" só ganha um botão de CTA quando tem ctaUrl definido —
  // a tela final padrão (lead não qualificado) fica só com o texto,
  // sem nenhum link pra falar com a Cintia.
  if(step.type !== "final"){
    html += `<div class="actions"><button type="submit" class="btn btn-primary cta-btn">${step.cta}</button></div>`;
  } else if(step.ctaUrl){
    html += `<p class="tap-hint">👇 Clique aqui 👇</p>`;
    html += `<div class="actions"><a href="${step.ctaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration:none; text-align:center; display:block;">${step.cta}</a></div>`;
  }

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

  // Ramificação fixa: se a resposta dessa etapa tiver um destino
  // mapeado em `branch`, pula direto pra lá.
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

  // Ramificação calculada: quando o destino depende de uma combinação
  // de respostas (não só a dessa etapa), usa `branchFn(answers)`.
  if(step.branchFn){
    const targetId = step.branchFn(state.answers);
    if(targetId){
      const idx = findStepIndexById(targetId);
      if(idx !== -1) nextIndex = idx;
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
