/* ============================================================
   CONFIGURAÇÃO — edite antes de publicar no Netlify
   ============================================================ */

// Cole aqui a URL do webhook do Make (Webhooks → Custom webhook).
const WEBHOOK_URL = "https://hook.us2.make.com/6hqleqlolnlb6aksnnwnjrdi53xzje4x";

const FORM_SOURCE = "testeperfil";

/* ============================================================
   BANCO DE ITENS — IPIP-50 (Cinco Grandes Fatores), traduzido.
   "reverse: true" = pergunta com pontuação invertida no cálculo
   (6 - resposta), porque a afirmação vai no sentido contrário
   ao traço do fator.
   ============================================================ */

const FACTORS = [
  {
    key: "extroversao",
    label: "Extroversão",
    items: [
      { id: "ext_1", text: "Sou o tipo de pessoa que anima o ambiente." },
      { id: "ext_2", text: "Não falo muito.", reverse: true },
      { id: "ext_3", text: "Me sinto confortável perto de pessoas." },
      { id: "ext_4", text: "Fico mais na minha, quieto(a), em segundo plano.", reverse: true },
      { id: "ext_5", text: "Puxo conversa com facilidade." },
      { id: "ext_6", text: "Tenho pouco a dizer.", reverse: true },
      { id: "ext_7", text: "Converso com várias pessoas diferentes em eventos." },
      { id: "ext_8", text: "Não gosto de chamar atenção pra mim.", reverse: true },
      { id: "ext_9", text: "Não me incomodo em ser o centro das atenções." },
      { id: "ext_10", text: "Fico quieto(a) perto de desconhecidos.", reverse: true }
    ]
  },
  {
    key: "amabilidade",
    label: "Amabilidade",
    items: [
      { id: "ama_1", text: "Me preocupo pouco com os outros.", reverse: true },
      { id: "ama_2", text: "Tenho interesse genuíno pelas pessoas." },
      { id: "ama_3", text: "Costumo ofender as pessoas sem querer.", reverse: true },
      { id: "ama_4", text: "Sinto empatia pelos sentimentos dos outros." },
      { id: "ama_5", text: "Não me interesso muito pelos problemas alheios.", reverse: true },
      { id: "ama_6", text: "Sou uma pessoa de coração mole/sensível." },
      { id: "ama_7", text: "Não sou realmente interessado(a) nos outros.", reverse: true },
      { id: "ama_8", text: "Dedico tempo pra ajudar outras pessoas." },
      { id: "ama_9", text: "Sinto as emoções dos outros com facilidade." },
      { id: "ama_10", text: "Deixo as pessoas à vontade perto de mim." }
    ]
  },
  {
    key: "conscienciosidade",
    label: "Conscienciosidade",
    items: [
      { id: "con_1", text: "Estou sempre preparado(a)." },
      { id: "con_2", text: "Deixo minhas coisas espalhadas por aí.", reverse: true },
      { id: "con_3", text: "Presto atenção nos detalhes." },
      { id: "con_4", text: "Costumo bagunçar as coisas.", reverse: true },
      { id: "con_5", text: "Resolvo minhas tarefas assim que possível." },
      { id: "con_6", text: "Frequentemente esqueço de guardar as coisas no lugar certo.", reverse: true },
      { id: "con_7", text: "Gosto de ordem e organização." },
      { id: "con_8", text: "Deixo minhas obrigações de lado.", reverse: true },
      { id: "con_9", text: "Sigo uma rotina/agenda." },
      { id: "con_10", text: "Sou caprichoso(a) e rigoroso(a) no meu trabalho." }
    ]
  },
  {
    key: "estabilidade_emocional",
    label: "Estabilidade Emocional",
    items: [
      { id: "est_1", text: "Fico estressado(a) com facilidade.", reverse: true },
      { id: "est_2", text: "Sou uma pessoa tranquila na maior parte do tempo." },
      { id: "est_3", text: "Fico preocupado(a) com as coisas com frequência.", reverse: true },
      { id: "est_4", text: "Raramente fico pra baixo/triste." },
      { id: "est_5", text: "Me abalo com facilidade.", reverse: true },
      { id: "est_6", text: "Fico chateado(a) com facilidade.", reverse: true },
      { id: "est_7", text: "Meu humor muda bastante.", reverse: true },
      { id: "est_8", text: "Tenho oscilações de humor frequentes.", reverse: true },
      { id: "est_9", text: "Fico irritado(a) com facilidade.", reverse: true },
      { id: "est_10", text: "Frequentemente me sinto pra baixo/triste.", reverse: true }
    ]
  },
  {
    key: "abertura",
    label: "Abertura à Experiência",
    items: [
      { id: "abe_1", text: "Tenho um vocabulário rico." },
      { id: "abe_2", text: "Tenho dificuldade em entender ideias abstratas.", reverse: true },
      { id: "abe_3", text: "Tenho uma imaginação bem ativa." },
      { id: "abe_4", text: "Não me interesso por ideias abstratas.", reverse: true },
      { id: "abe_5", text: "Costumo ter ótimas ideias." },
      { id: "abe_6", text: "Não tenho muita imaginação.", reverse: true },
      { id: "abe_7", text: "Sou rápido(a) pra entender as coisas." },
      { id: "abe_8", text: "Uso palavras difíceis/rebuscadas." },
      { id: "abe_9", text: "Gosto de refletir bastante sobre as coisas." },
      { id: "abe_10", text: "Estou sempre cheio(a) de ideias." }
    ]
  }
];

const LIKERT_LABELS = ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"];

/* ============================================================
   MONTAGEM DOS STEPS
   Ordem: intro (já no HTML) -> contato -> 5 blocos de fator -> final
   ============================================================ */

const steps = [
  { id: "intro", type: "intro", staticHtml: true, cta: "Começar" },
  {
    id: "contato",
    type: "contact",
    title: "Antes de começar, seus dados de contato",
    sub: "É por aqui que a gente retorna sobre o processo seletivo.",
    fields: [
      { key: "nome", placeholder: "Digite seu nome completo...", type: "text", required: true, maxlength: 100 },
      { key: "whatsapp", placeholder: "Digite seu WhatsApp...", type: "tel", required: true, maxlength: 16, validate: "phone" }
    ],
    cta: "Continuar",
    checkpoint: true
  },
  ...FACTORS.map((factor, i) => ({
    id: factor.key,
    type: "likert",
    eyebrow: `Bloco ${i + 1} de 5`,
    title: factor.label,
    factor,
    cta: i === FACTORS.length - 1 ? "Finalizar" : "Continuar",
    checkpoint: i === FACTORS.length - 1,
    completesForm: i === FACTORS.length - 1
  })),
  {
    id: "final",
    type: "final",
    title: "Respostas registradas. Obrigado!",
    sub: "Seu teste foi enviado com sucesso. Nossa equipe vai avaliar o seu perfil junto com o restante do processo seletivo, e entra em contato pelos dados que você deixou.",
    cta: "Fechar"
  }
];

/* ============================================================
   ESTADO
   ============================================================ */

const SESSION_KEY = "tp_session_id";
const ANSWERS_KEY = "tp_answers";

function getSessionId(){
  let id = localStorage.getItem(SESSION_KEY);
  if(!id){
    id = "tp_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
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

/* ============================================================
   CÁLCULO DOS FATORES
   ============================================================ */

function scoreFactor(factor){
  const rawValues = [];
  let sum = 0;
  factor.items.forEach(item => {
    const raw = Number(state.answers[item.id]);
    rawValues.push(raw);
    sum += item.reverse ? (6 - raw) : raw;
  });
  const media = sum / factor.items.length;
  let faixa;
  if(media <= 1.8) faixa = "Muito baixo";
  else if(media <= 2.6) faixa = "Baixo";
  else if(media <= 3.4) faixa = "Médio";
  else if(media <= 4.2) faixa = "Alto";
  else faixa = "Muito alto";
  return { media: Math.round(media * 100) / 100, faixa, respostas: rawValues.join(",") };
}

function buildScoresPayload(){
  const scores = {};
  FACTORS.forEach(factor => {
    const allAnswered = factor.items.every(item => state.answers[item.id] !== undefined);
    if(!allAnswered) return;
    scores[factor.key] = scoreFactor(factor);
  });
  return scores;
}

/* ============================================================
   ENVIO PARA O WEBHOOK — checkpoint depois do contato e no final.
   ============================================================ */

async function sendCheckpoint(stepId, completed){
  const scores = buildScoresPayload();
  const payload = {
    form_source: FORM_SOURCE,
    session_id: state.sessionId,
    step: stepId,
    completed: !!completed,
    nome: state.answers.nome || "",
    whatsapp: state.answers.whatsapp || "",
    extroversao_media: scores.extroversao ? scores.extroversao.media : "",
    extroversao_faixa: scores.extroversao ? scores.extroversao.faixa : "",
    extroversao_respostas: scores.extroversao ? scores.extroversao.respostas : "",
    amabilidade_media: scores.amabilidade ? scores.amabilidade.media : "",
    amabilidade_faixa: scores.amabilidade ? scores.amabilidade.faixa : "",
    amabilidade_respostas: scores.amabilidade ? scores.amabilidade.respostas : "",
    conscienciosidade_media: scores.conscienciosidade ? scores.conscienciosidade.media : "",
    conscienciosidade_faixa: scores.conscienciosidade ? scores.conscienciosidade.faixa : "",
    conscienciosidade_respostas: scores.conscienciosidade ? scores.conscienciosidade.respostas : "",
    estabilidade_emocional_media: scores.estabilidade_emocional ? scores.estabilidade_emocional.media : "",
    estabilidade_emocional_faixa: scores.estabilidade_emocional ? scores.estabilidade_emocional.faixa : "",
    estabilidade_emocional_respostas: scores.estabilidade_emocional ? scores.estabilidade_emocional.respostas : "",
    abertura_media: scores.abertura ? scores.abertura.media : "",
    abertura_faixa: scores.abertura ? scores.abertura.faixa : "",
    abertura_respostas: scores.abertura ? scores.abertura.respostas : "",
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

  if(step.type === "contact"){
    html += `<div class="field">`;
    step.fields.forEach(f => {
      const val = state.answers[f.key] || "";
      const maxlen = f.maxlength ? `maxlength="${f.maxlength}"` : "";
      html += `<input type="${f.type}" id="f_${f.key}" placeholder="${f.placeholder}" value="${escapeAttr(val)}" ${maxlen} ${f.required ? "required" : ""} />`;
    });
    html += `</div>`;
  }

  if(step.type === "likert"){
    html += `<p class="likert-intro">Marque o quanto cada frase combina com você.</p>`;
    html += `<div class="likert-list">`;
    step.factor.items.forEach(item => {
      const selected = state.answers[item.id];
      html += `
        <div class="likert-item">
          <p class="likert-statement">${item.text}</p>
          <div class="likert-scale" role="radiogroup" aria-label="${escapeAttr(item.text)}">
            ${[1,2,3,4,5].map(n => `
              <label class="likert-option">
                <input type="radio" name="${item.id}" value="${n}" ${String(selected) === String(n) ? "checked" : ""} required />
                <span class="n">${n}</span>
              </label>
            `).join("")}
          </div>
          <div class="likert-endpoints">
            <span>${LIKERT_LABELS[0]}</span>
            <span>${LIKERT_LABELS[4]}</span>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  html += `<div class="actions">`;
  if(step.type !== "final"){
    html += `<button type="submit" class="btn btn-primary cta-btn">${step.cta}</button>`;
  } else {
    html += `<a href="#" onclick="window.close(); return false;" class="btn btn-primary" style="text-decoration:none; text-align:center; display:block;">${step.cta}</a>`;
  }
  html += `</div>`;

  stepBody.classList.add("animate");
  stepBody.innerHTML = html;
  poweredHint.style.display = step.type === "final" ? "none" : "block";
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function escapeAttr(str){ return escapeHtml(str); }

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
      if(val && f.validate === "email"){
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){
          el.setCustomValidity("Digite um e-mail válido (ex: nome@email.com).");
          ok = false;
        }
      }
      state.answers[f.key] = val;
    });
    return ok;
  }

  if(step.type === "likert"){
    let ok = true;
    step.factor.items.forEach(item => {
      const checked = stepBody.querySelector(`input[name="${item.id}"]:checked`);
      if(!checked){ ok = false; return; }
      state.answers[item.id] = checked.value;
    });
    return ok;
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
      if(invalidField){
        invalidField.reportValidity ? invalidField.reportValidity() : invalidField.focus();
        invalidField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    saveAnswersLocal();
  }

  await goNext(step);
});

async function goNext(step){
  stepBody.querySelectorAll(".cta-btn").forEach(b => { b.disabled = true; });

  if(step.checkpoint){
    await sendCheckpoint(step.id, !!step.completesForm);
  }

  state.current = Math.min(state.current + 1, steps.length - 1);
  window.scrollTo({ top: 0, behavior: "instant" });
  renderStep();
}

backBtn.addEventListener("click", () => {
  if(state.current === 0) return;
  state.current -= 1;
  window.scrollTo({ top: 0, behavior: "instant" });
  renderStep();
});
