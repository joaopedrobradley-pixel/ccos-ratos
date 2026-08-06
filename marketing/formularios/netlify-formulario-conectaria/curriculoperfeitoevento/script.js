/* ============================================================
   CONFIGURAÇÃO — edite antes de publicar no Netlify
   ============================================================ */

// Cole aqui a URL do webhook do Make (Webhooks → Custom webhook,
// formato https://hook.{regiao}.make.com/{token} — NÃO é a versão
// com @, aquela é Mailhook e não aceita JSON).
// Reaproveitando o mesmo webhook dos outros formulários da Conectaria —
// lembre de criar/ajustar a rota no cenário do Make pro form_source
// "curriculoperfeitoevento" (ver seção 5 de reference_processo_criacao_formularios).
const WEBHOOK_URL = "https://hook.us2.make.com/smle96g3cyirg5kc54blk59vjefna314";

// Link de WhatsApp da Cintia — aparece no botão da tela final,
// pra quem quiser adiantar o processo.
const CINTIA_URL = "https://api.whatsapp.com/send?phone=558193914560&text=Ola,%20vim%20do%20evento%20e%20quero%20garantir%20a%20condi%C3%A7%C3%A3o%20especial%20para%20ter%20o%20apoio%20do%20time%20do%20JPB";

// Identifica de qual site/formulário o lead veio. Como o mesmo
// webhook do Make recebe requisições de vários formulários, esse
// valor é o que permite filtrar/rotear no cenário do Make.
const FORM_SOURCE = "curriculoperfeitoevento";

/* ============================================================
   DADOS DAS ETAPAS

   Fluxo com ramificação:
   1) contato (nome + whatsapp + linkedin opcional) — checkpoint, garante o lead
   2) pergunta "já preencheu a pesquisa do evento?"
      - "Sim" -> pula direto pra tela final (branch abaixo), sem repetir a pesquisa
      - "Não" -> segue pelas mesmas perguntas de qualificação do curriculoperfeito1
   3) tela final única, com o convite pra falar com a Cintia
   ============================================================ */

const steps = [
  {
    id: "intro",
    type: "intro",
    staticHtml: true,
    cta: "Quero garantir minha condição"
  },
  {
    id: "contato",
    type: "contact",
    title: "Qual o seu WhatsApp e o seu nome?",
    sub: "É por meio dele que entraremos em contato pra falar sobre a condição especial de acesso à mentoria.<br><br><strong>Se desejar, informe também o link do seu LinkedIn (opcional).</strong> Assim, poderei conhecer melhor sua trajetória profissional.",
    fields: [
      { key: "nome", placeholder: "Digite seu Nome...", type: "text", required: true, maxlength: 80 },
      { key: "whatsapp", placeholder: "Digite seu WhatsApp...", type: "tel", required: true, maxlength: 16, validate: "phone" },
      { key: "linkedin", placeholder: "Cole o link do seu LinkedIn... (Opcional)", type: "text", required: false, maxlength: 160 }
    ],
    consent: 'Ao continuar, você concorda com nossa <a href="https://docs.google.com/document/d/1OTmIfFxbMA6UQU6ZZIp92HP0718kRbWR/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e nossos <a href="https://docs.google.com/document/d/1mlfQclAIRgz5efUlEH6Iz4tqpsi_MJeN/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Termos de Uso</a>.',
    cta: "Continuar",
    checkpoint: true,
    fbEvent: "Lead"
  },
  {
    id: "ja_preencheu",
    type: "single",
    title: "Você já preencheu a nossa pesquisa do evento?",
    key: "ja_preencheu_pesquisa",
    options: [
      "Sim, já preenchi",
      "Não, ainda não preenchi"
    ],
    cta: "Continuar",
    checkpoint: true,
    // Se a pessoa já preencheu, pula direto pra tela final (não repete a pesquisa)
    // e essa etapa já conta como conclusão do formulário.
    branch: {
      "Sim, já preenchi": { to: "final", completesForm: true, fbEvent: "CompleteRegistration" }
    }
  },
  {
    id: "momento_aberto",
    type: "text",
    title: "Pra gente entender seu momento: o que você sente que mais te impede de conseguir oportunidades hoje?",
    sub: "Pode ser sincero, algo em você, no seu processo, no mercado, na sua estratégia. Escreve do seu jeito.",
    key: "momento_texto",
    label: "Momento",
    placeholder: "Digite o que mais te impede...",
    cta: "Continuar"
  },
  {
    id: "alternativas",
    type: "multi",
    title: "Entendi, agora me conta qual dessas alternativas mais descreve seu desafio hoje",
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
    id: "momento_profissional",
    type: "single",
    eyebrow: "Agora perguntas mais rápidas!",
    title: "Como você descreveria o seu momento profissional hoje?",
    key: "momento_profissional",
    options: [
      "Estou empregado(a), mas quero (ou preciso) me recolocar",
      "Estou empregado(a), mas me sinto estagnado(a) ou com medo de ser desligado(a)",
      "Fui desligado(a) recentemente e estou buscando",
      "Estou buscando uma recolocação há alguns meses",
      "Estou tentando mudar de área ou fazer uma transição de carreira",
      "Estou buscando minha primeira oportunidade profissional"
    ],
    cta: "Continuar"
  },
  {
    id: "tempo_busca",
    type: "single",
    title: "Há quanto tempo você vem buscando uma nova oportunidade?",
    key: "tempo_busca",
    options: [
      "Ainda não comecei a procurar",
      "Menos de 1 mês",
      "1 a 3 meses",
      "3 a 6 meses",
      "6 meses e 1 ano",
      "Mais de 1 ano"
    ],
    cta: "Continuar"
  },
  {
    id: "nivel",
    type: "single",
    title: "Qual é o nível da posição que você busca um emprego?",
    key: "nivel_posicao",
    options: [
      "Estágio, Assistente ou Auxiliar",
      "Analista",
      "Especialista",
      "Coordenação",
      "Supervisão",
      "Gerência",
      "Head",
      "Diretoria",
      "C-Level"
    ],
    cta: "Continuar"
  },
  {
    id: "faixa_salarial",
    type: "single",
    title: "Qual faixa salarial você busca na próxima posição?",
    key: "faixa_salarial",
    options: [
      "Até R$ 3 mil",
      "Entre R$ 3 mil e R$ 5 mil",
      "R$ 5 mil a R$ 10 mil",
      "R$ 10 mil a R$ 20 mil",
      "Acima de R$ 20 mil"
    ],
    cta: "Continuar"
  },
  {
    id: "tempo_desejado",
    type: "single",
    title: "Em quanto tempo você gostaria de estar em uma nova oportunidade?",
    key: "tempo_desejado",
    options: [
      "O mais rápido possível",
      "Nos próximos 30 dias",
      "Entre 30 e 60 dias",
      "Entre 60 e 90 dias",
      "Não tenho pressa, estou apenas pesquisando"
    ],
    cta: "Continuar",
    checkpoint: true,
    completesForm: true,
    fbEvent: "CompleteRegistration"
  },
  {
    id: "final",
    type: "final",
    title: "Recebi suas respostas! Agora é com a gente.",
    sub: "Obrigado por compartilhar o seu momento profissional com tanta sinceridade.<br><br>Vamos analisar suas respostas com calma pra entender exatamente como podemos te apoiar.<br><br>Se quiser adiantar esse processo, você pode falar agora com a <strong>Cintia</strong>, nossa mentora de carreira:",
    cta: "Falar com a Cintia agora",
    ctaUrl: CINTIA_URL
  }
];

/* ============================================================
   ESTADO
   ============================================================ */

const SESSION_KEY = "cpe_session_id";
const ANSWERS_KEY = "cpe_answers";

function getSessionId(){
  let id = localStorage.getItem(SESSION_KEY);
  if(!id){
    id = "cpe_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
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

/* A etapa 0 (intro) já está pronta no HTML — só conecta o clique
   do botão "Começar" ao form normal, sem re-renderizar nada. */
