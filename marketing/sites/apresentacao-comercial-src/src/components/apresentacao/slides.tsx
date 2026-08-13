import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  GraduationCap,
  Bot,
  Linkedin,
  Mic,
  QrCode,
  Rocket,
  Target,
  Users,
  Map,
  MessagesSquare,
  AlertTriangle,
  ArrowRight,
  MonitorPlay,
  Search,
  KeyRound,
  ClipboardList,
  EyeOff,
  Building2,
  Compass,
  LineChart,
  HelpCircle,
  HandCoins,
  Flag,
  Trophy,
  PartyPopper,
  CalendarCheck,
  Gift,
  TrendingDown,
  X,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import joaoAsset from "@/assets/joao-pedro.jpg";
import gupyLogo from "@/assets/platforms/gupy.png";
import vagasLogo from "@/assets/platforms/vagas.png";
import glassdoorLogo from "@/assets/platforms/glassdoor-2023.webp";
import indeed2Logo from "@/assets/platforms/indeed-2023.webp";
import linkedinLogo from "@/assets/platforms/linkedin.svg";
import cathoLogo from "@/assets/platforms/catho.jpg";
import infojobsLogo from "@/assets/platforms/infojobs.webp";
import solidesLogo from "@/assets/platforms/solides.webp";
import geekhunterLogo from "@/assets/platforms/geekhunter.png";
import workanaLogo from "@/assets/platforms/workana.png";
import kenobyLogo from "@/assets/platforms/kenoby.png";
import mockupMateriais from "@/assets/apresentacao/mockup-materiais.webp";
import mockupEntrevista from "@/assets/apresentacao/mockup-entrevista.png";
import mockupEntregaveis from "@/assets/apresentacao/mockup-entregaveis.png";
import qrPix from "@/assets/pagamento/qr-pix.png";
import qrCartao from "@/assets/pagamento/qr-cartao.png";
import pix1997 from "@/assets/pagamento/pix-1997.jpeg";
import pix2497 from "@/assets/pagamento/pix-2497.jpeg";
import pix3997 from "@/assets/pagamento/pix-3997.jpeg";
import pix9997 from "@/assets/pagamento/pix-9997.jpeg";
import cartao1997 from "@/assets/pagamento/cartao-1997.jpg";
import cartao2497 from "@/assets/pagamento/cartao-2497.jpg";
import cartao3997 from "@/assets/pagamento/cartao-3997.jpg";
import cartao9997 from "@/assets/pagamento/cartao-9997.png";

import seloDourado from "@/assets/apresentacao/selo-garantia-dourado.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet">
      {children}
    </div>
  );
}

/* ---------- Pausa de reflexão (reutilizável em vários pontos) ---------- */
export function ReflectionPause({
  eyebrow = "Pausa para reflexão",
  questions,
}: {
  eyebrow?: string;
  questions: string[];
}) {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <div className="mt-10 space-y-8">
          {questions.map((q, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-4xl"
            >
              {q}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

import palestraMichaelPage from "@/assets/palestras/michael-page.png";
import palestraXp from "@/assets/palestras/xp-investimentos.png";
import palestraVoitto from "@/assets/palestras/voittologothumb-1.png";
import palestraCiti from "@/assets/palestras/citi.png";
import palestraFmu from "@/assets/palestras/logo-fmu-1.png";
import palestraEjUnicap from "@/assets/palestras/ej-unicap.png";
import palestraPmiPernambuco from "@/assets/palestras/pmi_pernambuco-1.png";
import palestraBerlimDigital from "@/assets/palestras/logo-berlimdigital-home.png";
import palestraDownload from "@/assets/palestras/download.png";
import palestraE106ef from "@/assets/palestras/e106ef_mv2.png";
import palestraFrame258 from "@/assets/palestras/frame-258-1.png";
import palestraImage192 from "@/assets/palestras/image-192.png";
import palestraImage215 from "@/assets/palestras/image-215.png";
import palestraLayoutSetLogo from "@/assets/palestras/layout_set_logo-1.png";
import palestraLogoHeader1 from "@/assets/palestras/logo-header1-1.png";
import palestraLogodarkretina from "@/assets/palestras/logodarkretina-1-1.png";

const PALESTRA_LOGOS: { url: string; alt: string }[] = [
  { url: palestraMichaelPage, alt: "Michael Page" },
  { url: palestraXp, alt: "XP Investimentos" },
  { url: palestraVoitto, alt: "Voitto" },
  { url: palestraCiti, alt: "Citi" },
  { url: palestraFmu, alt: "FMU" },
  { url: palestraEjUnicap, alt: "EJ Unicap" },
  { url: palestraPmiPernambuco, alt: "PMI Pernambuco" },
  { url: palestraBerlimDigital, alt: "Berlim Digital" },
  { url: palestraDownload, alt: "Instituição parceira" },
  { url: palestraE106ef, alt: "Instituição parceira" },
  { url: palestraFrame258, alt: "Instituição parceira" },
  { url: palestraImage192, alt: "Instituição parceira" },
  { url: palestraImage215, alt: "Instituição parceira" },
  { url: palestraLayoutSetLogo, alt: "Instituição parceira" },
  { url: palestraLogoHeader1, alt: "Instituição parceira" },
  { url: palestraLogodarkretina, alt: "Instituição parceira" },
];

/* ---------- Quem sou eu (versão expandida) ---------- */

export function MentorSlide() {
  const creds = [
    { icon: Users, headline: "Recrutador", sub: "Especialista em recrutamento & seleção", text: "Viveu os dois lados da mesa: quem contrata e quem é contratado." },
    { icon: GraduationCap, headline: "+5.000 alunos", sub: "Comunidade global", text: "Mentorados recolocados em 9 países diferentes." },
    { icon: Briefcase, headline: "Big Players", sub: "Bagagem corporativa", text: "Ex-Michael Page, XP Inc., Voitto e Suno Research." },
    { icon: BookOpen, headline: "Professor convidado", sub: "Academia", text: "PUC, FMU e Uninassau, em carreira e recrutamento." },
    { icon: Mic, headline: "+10 milhões", sub: "em palestras, eventos e conteúdos presenciais e online", text: "Alcance acumulado em lives, treinamentos e palcos." },
  ];

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fadeUp} className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
            Quem te leva até lá
          </motion.p>
          <motion.h2 {...fadeUp} className="text-balance text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl">
            O arquiteto por trás do <span className="font-light text-aqua-bright">método</span>
          </motion.h2>
        </div>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-[0.85fr_1.2fr]">
          <motion.div {...fadeUp} className="relative mx-auto w-full max-w-[220px] md:max-w-xs">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet/30 to-violet-deep/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-violet/20">
              <img src={joaoAsset} alt="João Pedro Bradley" className="absolute inset-0 h-full w-full object-cover" />
              <div className="glass-aqua-dark absolute bottom-2 left-2 right-2 rounded-xl px-3 py-2">
                <div className="text-sm font-semibold text-white">João Pedro Bradley</div>
                <div className="text-[11px] text-white/60">Founder · Conectaria</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              João Pedro <span className="text-aqua">Bradley</span>
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ink/45">
              <span>Mentor</span>
              <span className="h-1 w-1 rounded-full bg-aqua" />
              <span>Recrutador</span>
              <span className="h-1 w-1 rounded-full bg-aqua" />
              <span>Estrategista de Carreira</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {creds.map(({ icon: Icon, headline, sub, text }) => (
                <div key={headline} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-ink/15">
                    <Icon className="h-[15px] w-[15px] text-ink/70" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-sm font-bold leading-tight tracking-tight text-ink">{headline}</h4>
                    <div className="mt-0.5 text-[11px] font-semibold text-ink/70">{sub}</div>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-ink/10 bg-white/60 p-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/45">
                Palcos, empresas e instituições por onde passou
              </p>
              <div className="mt-2 grid grid-cols-6 items-center gap-x-4 gap-y-2 sm:grid-cols-8">
                {PALESTRA_LOGOS.map((logo) => (
                  <img
                    key={logo.url}
                    src={logo.url}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-5 w-full object-contain transition hover:scale-105"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Método em carrossel de etapas (sem texto corrido) ---------- */
const PLATFORM_LOGOS: { src: string; alt: string; zoom?: boolean }[] = [
  { src: gupyLogo, alt: "Gupy", zoom: true },
  { src: linkedinLogo, alt: "LinkedIn" },
  { src: indeed2Logo, alt: "Indeed" },
  { src: vagasLogo, alt: "Vagas.com", zoom: true },
  { src: glassdoorLogo, alt: "Glassdoor" },
  { src: cathoLogo, alt: "Catho" },
  { src: infojobsLogo, alt: "InfoJobs" },
  { src: solidesLogo, alt: "Sólides" },
  { src: geekhunterLogo, alt: "GeekHunter" },
  { src: workanaLogo, alt: "Workana" },
  { src: kenobyLogo, alt: "Kenoby" },
];

type Step = {
  tag: string;
  icon: typeof Target;
  title: string;
  short: string;
  lead: string;
  quote?: string;
  bullets: { icon: typeof Target; text: string }[];
  chips: string[];
  media?: "logos" | { image: string; caption: string } | "celebrate";
};

const STEPS: Step[] = [
  {
    tag: "Ponto de partida",
    icon: Flag,
    title: "Reunião de alinhamento inicial",
    short: "Ponto de partida",
    lead: "O primeiro encontro para calibrar tudo antes de começar.",
    bullets: [
      { icon: Map, text: "Alinhar o passo a passo da Mentoria" },
      { icon: Target, text: "Entender o desejo e o objetivo" },
      { icon: ClipboardList, text: "Apresentar o processo da nossa metodologia" },
      { icon: Compass, text: "Mapear os principais desafios" },
    ],
    chips: ["Diagnóstico", "Objetivo claro", "Plano combinado"],
  },
  {
    tag: "Fase 01",
    icon: Target,
    title: "Profissional Memorável",
    short: "Profissional Memorável",
    lead: "A base da sua recolocação, construída pela nossa equipe.",
    quote: "Quem não é visto não é lembrado.",
    bullets: [
      { icon: Search, text: "Diagnóstico individual da sua trajetória" },
      { icon: KeyRound, text: "Pesquisa do cargo-alvo: palavras-chave e requisitos" },
      { icon: FileText, text: "Currículo estruturado e formatado pela equipe" },
      { icon: Linkedin, text: "Documento completo de LinkedIn pronto para publicar" },
      { icon: Bot, text: "Perfil otimizado para os filtros de IA das plataformas" },
    ],
    chips: ["Currículo", "LinkedIn", "Sites de vagas", "Filtros de IA"],
    media: "logos",
  },
  {
    tag: "Fase 02",
    icon: Rocket,
    title: "Primeiro da Fileira",
    short: "Primeiro da Fileira",
    lead: "Você para de esperar o mercado e passa na frente dos concorrentes.",
    bullets: [
      { icon: ClipboardList, text: "Plano de ação personalizado de busca ativa" },
      { icon: EyeOff, text: "Estratégia de vagas ocultas (nunca publicadas)" },
      { icon: Building2, text: "Listas de empresas e recrutadores do seu setor" },
      { icon: Compass, text: "Sites estratégicos com menos concorrência" },
      { icon: LineChart, text: "Sistema de acompanhamento com nosso time" },
    ],
    chips: ["Busca ativa", "Vagas ocultas", "Networking", "Envio certeiro"],
    media: { image: mockupMateriais, caption: "Materiais e estratégias que você recebe em formato de apresentação" },
  },
  {
    tag: "Fase 03",
    icon: Award,
    title: "Candidato Irresistível",
    short: "Candidato Irresistível",
    lead: "Cada entrevista vira oferta — e cada oferta vira negociação.",
    bullets: [
      { icon: MonitorPlay, text: "Simulação de entrevista ao vivo para a vaga real" },
      { icon: MessagesSquare, text: "Feedback individual de comunicação e postura" },
      { icon: HelpCircle, text: "Perguntas que aumentam sua chance de avançar" },
      { icon: Users, text: "Estratégia por perfil de entrevistador" },
      { icon: HandCoins, text: "Negociação salarial sem queimar a candidatura" },
    ],
    chips: ["Simulação ao vivo", "Feedback", "Cases e testes", "Negociação"],
    media: { image: mockupEntrevista, caption: "Treino real, feedback personalizado e materiais de apoio" },
  },
  {
    tag: "Contratado",
    icon: Trophy,
    title: "Contratado 🎉",
    short: "Contratado",
    lead: "A oferta assinada não é o fim: é o começo do próximo capítulo.",
    bullets: [
      { icon: PartyPopper, text: "Comemoração da conquista com a gente" },
      { icon: CalendarCheck, text: "Reunião de pós-oportunidade para orientar os próximos passos" },
      { icon: Users, text: "Você segue fazendo parte da nossa rede" },
    ],
    chips: ["Oferta assinada", "Onboarding", "Próximos passos"],
    media: "celebrate",
  },
];

/* ---------- Mapa do caminho (trilha visual das etapas) ---------- */
function JourneyMap({ index, onSelect }: { index: number; onSelect: (i: number) => void }) {
  const count = STEPS.length;
  const progress = ((index + 0.5) / count) * 100;

  return (
    <div className="mt-4">
      <div className="relative">
        <div className="absolute left-0 right-0 top-[18px] h-[3px] rounded-full bg-ink/10" />
        <motion.div
          className="absolute left-0 top-[18px] h-[3px] rounded-full bg-violet"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="relative grid grid-cols-5 gap-2">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const reached = idx <= index;
            return (
              <button
                key={s.tag}
                type="button"
                onClick={() => onSelect(idx)}
                className="flex cursor-pointer flex-col items-center gap-1 text-center"
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 transition ${
                    reached
                      ? "border-violet bg-violet text-white"
                      : "border-ink/15 bg-white text-ink/40"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${reached ? "text-ink" : "text-ink/40"}`}>
                  {s.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export function MethodPath() {
  const [i, setI] = useState(0);
  const p = STEPS[i];
  const Icon = p.icon;

  return (
    <section className="px-4 py-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Eyebrow>O Método</Eyebrow>
          <h2 className="mt-2 text-balance text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            Código da <span className="font-light text-aqua-bright">Contratação Imediata</span>
          </h2>
          <p className="mx-auto mt-1 max-w-xl text-sm text-ink/60">Do alinhamento inicial à oferta assinada.</p>
        </div>

        {/* Trilha */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {STEPS.map((ph, idx) => (
            <button
              key={ph.tag}
              type="button"
              onClick={() => setI(idx)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                idx === i ? "bg-violet text-white" : "border border-ink/15 text-ink/50 hover:border-ink/30"
              }`}
            >
              <span>{ph.tag}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-aqua mt-4 rounded-3xl p-4 md:p-6"
          >
            <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
              <div>
                <div className="flex items-center gap-2 text-violet">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-violet/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{p.tag}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">{p.title}</h3>
                {p.quote && (
                  <div className="mt-2 rounded-2xl border-2 border-violet/30 bg-violet/10 px-4 py-3">
                    <p className="text-lg font-extrabold leading-snug text-violet md:text-xl">“{p.quote}”</p>
                  </div>
                )}
                <p className="mt-2 text-sm leading-snug text-ink/65">{p.lead}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-ink/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-1.5">
                {p.bullets.map(({ icon: BIcon, text }) => (
                  <li key={text} className="glass-aqua flex items-start gap-2.5 rounded-xl px-3 py-2 text-[13px] leading-snug text-ink/80">
                    <div className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-lg bg-violet/10 text-violet">
                      <BIcon className="h-3.5 w-3.5" strokeWidth={1.9} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

            </div>

            {p.media === "logos" && (
              <div className="mt-3">
                <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
                  Sua carreira e o seu perfil ajustados para
                </p>
                <div className="mt-2 grid grid-cols-4 items-center gap-2 lg:grid-cols-8">
                  {PLATFORM_LOGOS.map((l) => (
                    <div
                      key={l.alt}
                      className="grid h-12 place-items-center overflow-hidden rounded-xl bg-white px-3 shadow-sm ring-1 ring-black/5"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        loading="lazy"
                        className={`w-auto max-w-full object-contain ${l.zoom ? "max-h-12 scale-[1.7]" : "max-h-6"}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {typeof p.media === "object" && p.media !== null && (
              <div className="mt-3">
                <img
                  src={p.media.image}
                  alt={p.media.caption}
                  loading="lazy"
                  className="mx-auto max-h-40 w-auto object-contain"
                />
                <p className="mt-1 text-center text-xs text-ink/55">{p.media.caption}</p>
              </div>
            )}

            {p.media === "celebrate" && (
              <div className="mt-3 rounded-2xl border border-violet/20 bg-violet/5 p-4 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-violet text-white">
                  <PartyPopper className="h-5 w-5" />
                </div>
                <h4 className="mt-2 text-lg font-bold tracking-tight">Reunião de pós-oportunidade</h4>
                <p className="mx-auto mt-1 max-w-2xl text-sm text-ink/65">
                  Comemoramos juntos a nova vaga e sentamos mais uma vez para orientar os próximos passos com o seu plano para gerar ainda mais oportunidades a partir daqui.
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setI((v) => Math.max(0, v - 1))}
                disabled={i === 0}
                className="btn-aqua-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Etapa anterior
              </button>
              {i < STEPS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setI((v) => Math.min(STEPS.length - 1, v + 1))}
                  className="btn-green inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold"
                >
                  Próxima etapa <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>



        <JourneyMap index={i} onSelect={setI} />
      </div>

    </section>
  );
}

/* ---------- Aviso de disponibilidade (tom de alerta) ---------- */
export function ScarcityAlert() {
  return (
    <section className="px-4 py-6 md:py-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border-2 p-5 md:p-7"
          style={{
            borderColor: "#E11D2E",
            background: "linear-gradient(180deg, rgba(225,29,46,0.12), rgba(225,29,46,0.03))",
            boxShadow: "0 24px 70px -28px rgba(225,29,46,0.6)",
          }}
        >
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full text-white"
              style={{ background: "#E11D2E" }}
            >
              <AlertTriangle className="h-5 w-5" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                Cada semana parado é <span style={{ color: "#E11D2E" }}>oportunidade perdida</span>
              </h3>
            </div>
          </div>

          <div
            className="mt-3 rounded-2xl border-2 p-4"
            style={{ borderColor: "rgba(225,29,46,0.35)", background: "rgba(225,29,46,0.07)" }}
          >
            <div className="flex items-start gap-3">
              <TrendingDown className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "#E11D2E" }} />
              <div>
                <p className="text-sm leading-snug text-ink/75">
                  Quanto mais o tempo passa, <strong style={{ color: "#E11D2E" }}>mais vagas boas você deixa escapar</strong> —
                  processos que fecham, recrutadores que seguem com outro candidato e propostas que nunca chegam
                  porque ninguém está te direcionando dentro do processo. Sem apoio, o ciclo se repete: envia
                  currículo, não é chamado, perde confiança e recomeça do zero.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              { icon: Users, t: "Atendimento direto", d: "JP Bradley e o time de recrutamento, estratégia e carreira." },
              { icon: Clock, t: "Não é escalável", d: "Cada implementação ocupa agenda real da equipe." },
              { icon: Check, t: "Fica com você", d: "Currículo, LinkedIn, IAs e sistemas — para sempre." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-ink/10 bg-white/75 p-3">
                <Icon className="h-4 w-4" style={{ color: "#E11D2E" }} />
                <div className="mt-1.5 text-sm font-bold text-ink">{t}</div>
                <p className="mt-0.5 text-xs leading-snug text-ink/60">{d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}

/* ---------- Mock-up dos entregáveis (revelação por clique) ---------- */
type RevealItem = {
  icon: typeof FileText;
  t: string;
  d: string;
  kind?: "bonus" | "guarantee";
};

export function Deliverables() {
  const items: RevealItem[] = [
    { icon: FileText, t: "Currículo pronto", d: "Estruturado e formatado pela nossa equipe, em versões para cada objetivo." },
    { icon: Linkedin, t: "LinkedIn completo", d: "Documento com todos os textos prontos para publicar no seu perfil." },
    { icon: Target, t: "Perfil para Gupy & cia", d: "Material otimizado para passar pelos filtros de IA dos sites de vaga." },
    { icon: Map, t: "Mapa das vagas ocultas", d: "Listas de empresas, recrutadores e canais fora dos portais tradicionais." },
    { icon: MessagesSquare, t: "Simulações ao vivo", d: "Entrevistas simuladas com recrutadores reais e feedback individual." },
    { icon: Bot, t: "IAs treinadas", d: "Assistentes configurados para currículo, candidatura e entrevista." },
    { icon: MonitorPlay, t: "Plataforma vitalícia", d: "Todas as estratégias gravadas e atualizadas, sem prazo de expiração." },
    { icon: Users, t: "Time ao seu lado", d: "Acompanhamento direto durante toda a sua busca ativa." },
  ];
  const bonusItem: RevealItem = {
    icon: Gift,
    t: "Bônus: acesso vitalício",
    d: "Plataforma “No Topo da Sua Carreira” liberada para sempre, sempre atualizada.",
    kind: "bonus",
  };

  const [revealed, setRevealed] = useState(false);
  const showGuarantee = revealed;

  return (
    <section className="px-4 py-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>O que fica na sua mão</Eyebrow>
          <h2 className="mt-2 text-balance text-2xl font-bold leading-[1.05] tracking-tight md:text-3xl">
            Tudo o que você vai <span className="font-light text-aqua-bright">receber</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-ink/65">
            Antes de falar de valor, veja o que sai da mentoria com você — na prática.
          </p>
        </div>

        <div className="mt-4 grid items-center gap-6 lg:grid-cols-[0.9fr_1fr]">
          <motion.img
            {...fadeUp}
            src={mockupEntregaveis}
            alt="Mockup com todos os materiais da mentoria: plataforma, currículo, LinkedIn e treinamentos"
            className="mx-auto max-h-72 w-auto object-contain drop-shadow-[0_24px_60px_rgb(0_0_0/0.18)] lg:max-h-96"
            loading="lazy"
          />

          <div>
            <div className="grid gap-2 sm:grid-cols-2">
              {items.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-xl border border-violet/20 bg-white/80 p-2.5 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.35)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet/10 text-violet">
                      <Icon className="h-[14px] w-[14px]" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xs font-bold leading-tight tracking-tight text-ink">{t}</h3>
                  </div>
                </div>
              ))}

              <div
                className={`rounded-xl border p-2.5 transition-all duration-500 sm:col-span-2 ${
                  revealed
                    ? "border-amber-400/50 bg-amber-50/80 shadow-[0_12px_34px_-18px_rgb(180_120_0/0.6)]"
                    : "border-dashed border-ink/10 bg-white/30 opacity-40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                      revealed ? "bg-amber-400/20 text-amber-600" : "bg-ink/5 text-ink/30"
                    }`}
                  >
                    <bonusItem.icon className="h-[14px] w-[14px]" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xs font-bold tracking-tight text-ink">{bonusItem.t}</h3>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showGuarantee && (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-2 overflow-hidden rounded-2xl border border-amber-300/60 bg-gradient-to-br from-[#3b2a06] via-[#6b4c07] to-[#241a04] p-3 shadow-[0_24px_60px_-24px_rgb(180_120_0/0.8)]"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={seloDourado}
                      alt="Selo dourado da garantia"
                      width={768}
                      height={768}
                      loading="lazy"
                      className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_8px_20px_rgb(0_0_0/0.45)]"
                    />
                    <div>
                      <h3 className="text-sm font-bold leading-tight text-amber-50">
                        Bônus: Garantia
                      </h3>
                      <p className="text-xs leading-snug text-amber-100/80">
                        Estendemos por mais 6 meses se você não for contratado.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-3 flex items-center gap-4">
              <Button
                type="button"
                size="lg"
                onClick={() => setRevealed((r) => !r)}
                className="btn-aqua h-10 rounded-full px-5 text-sm font-bold"
              >
                {revealed ? "Ocultar" : "Revelar bônus e garantia"}
                {!revealed && <ArrowRight className="ml-1 h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Investimento por formato de mentoria ---------- */
const PLAN_HIGHLIGHTS = [
  "Profissional Memorável",
  "Estratégia do Primeiro da Fila",
  "Candidato Irresistível",
  "Robô Personalizado",
  "Bônus: acesso vitalício à plataforma",
];

export type PlanKey = "completa" | "essencial" | "tresmeses" | "estruturacao";

const PLANS: Record<
  PlanKey,
  {
    tag: string;
    name: string;
    card: string;
    cardTotal: string;
    cash: string;
    later: string;
    save?: string;
    support: string;
    guarantee: string;
    deliveries: string[];
    qrPix: string;
    qrCartao: string;
  }
> = {
  completa: {
    tag: "Recomendado",
    name: "Mentoria completa — 6 meses + Jobhunter",
    card: "R$ 833,14",
    cardTotal: "R$ 9.997,68",
    cash: "R$ 9.997,00",
    later: "R$ 14.997,00",
    qrPix: pix9997,
    qrCartao: cartao9997,
    support: "6 meses de suporte via WhatsApp e reuniões",
    guarantee: "Bônus: garantia de 6 meses se não for contratado",
    deliveries: [
      "Perfil Magnético: currículo, LinkedIn e sites de vagas (Gupy, Indeed...)",
      "Primeiro da fila: estratégia personalizada para ser chamado",
      "Candidato Irresistível: simulações e alinhamento com o idioma do recrutador",
      "Headhunter: conexão com recrutadores, indicações diretas e conexões",
      "Acesso vitalício à plataforma “No Topo da Sua Carreira”",
      "6 meses de suporte de carreira",
    ],
  },
  essencial: {
    tag: "Recomendado",
    name: "Mentoria essencial — 6 meses",
    card: "R$ 413,38",
    cardTotal: "R$ 4.960,56",
    cash: "R$ 3.997,00",
    later: "R$ 8.997,00",
    save: "R$ 963,56",
    qrPix: pix3997,
    qrCartao: cartao3997,
    support: "6 meses de suporte via WhatsApp e reuniões",
    guarantee: "Bônus: garantia de 6 meses se não for contratado",
    deliveries: [
      "Perfil Magnético: currículo, LinkedIn e sites de vagas (Gupy, Indeed...)",
      "Primeiro da fila: estratégia personalizada para ser chamado",
      "Candidato Irresistível: simulações e alinhamento com o idioma do recrutador",
      "Acesso vitalício à plataforma “No Topo da Sua Carreira”",
      "6 meses de suporte de carreira",
    ],
  },
  tresmeses: {
    tag: "Mentoria de 3 meses",
    name: "Mentoria de 3 meses",
    card: "R$ 258,25",
    cardTotal: "R$ 3.099,00",
    cash: "R$ 2.497,00",
    later: "R$ 7.497,00",
    save: "R$ 602,00",
    qrPix: pix2497,
    qrCartao: cartao2497,
    support: "3 meses de suporte via WhatsApp e reuniões",
    guarantee: "Bônus: garantia de 3 meses se não conseguir uma entrevista",
    deliveries: [
      "Perfil Magnético: currículo, LinkedIn e sites de vagas (Gupy, Indeed...)",
      "Primeiro da fila: estratégia personalizada para ser chamado",
      "Candidato Irresistível: simulações e alinhamento com o idioma do recrutador",
      "Acesso vitalício à plataforma “No Topo da Sua Carreira”",
      "3 meses de suporte de carreira",
    ],
  },
  estruturacao: {
    tag: "Estruturação",
    name: "Estruturação",
    card: "R$ 206,54",
    cardTotal: "R$ 2.478,48",
    cash: "R$ 1.997,00",
    later: "R$ 6.997,00",
    save: "R$ 481,48",
    qrPix: pix1997,
    qrCartao: cartao1997,
    support: "1 mês de suporte via WhatsApp e reuniões",
    guarantee: "Bônus: garantia de 2 meses se não conseguir uma entrevista pós-implementação",
    deliveries: [
      "Perfil Magnético: currículo, LinkedIn e sites de vagas (Gupy, Indeed...)",
      "Primeiro da fila: estratégia personalizada para ser chamado",
      "Acesso vitalício à plataforma “No Topo da Sua Carreira”",
      "1 mês de suporte de carreira",
    ],
  },
};

/* ---------- Modal de pagamento (Pix/Cartão), reutilizado em cada plano ---------- */
function PaymentQrModal({
  open,
  onClose,
  pixSrc = qrPix,
  cardSrc = qrCartao,
}: {
  open: null | "pix" | "card";
  onClose: () => void;
  pixSrc?: string;
  cardSrc?: string;
}) {
  const qr =
    open === "pix"
      ? { title: "Pague com Pix", hint: "Aponte a câmera do seu banco para o QR Code abaixo.", src: pixSrc }
      : open === "card"
        ? { title: "Pague com cartão", hint: "Escaneie o QR Code para abrir o checkout parcelado.", src: cardSrc }
        : null;

  return (
    <AnimatePresence>
      {qr && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl"
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink/60 transition hover:bg-ink/10"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-bold tracking-tight text-ink">{qr.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{qr.hint}</p>
            <img
              src={qr.src}
              alt={qr.title}
              className="mx-auto mt-5 w-full max-w-[280px] rounded-2xl border border-ink/10 bg-white p-3"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PaymentButtons({ onOpen }: { onOpen: (kind: "pix" | "card") => void }) {
  return (
    <div className="mt-3 flex gap-2">
      <button
        type="button"
        onClick={() => onOpen("pix")}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/80 px-3 py-2.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-500/30 transition hover:bg-white"
      >
        <QrCode className="h-4 w-4" /> Pagar com Pix
      </button>
      <button
        type="button"
        onClick={() => onOpen("card")}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/80 px-3 py-2.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-500/30 transition hover:bg-white"
      >
        <CreditCard className="h-4 w-4" /> Pagar com cartão
      </button>
    </div>
  );
}

export function InvestmentPlan({ plan }: { plan: PlanKey }) {
  const p = PLANS[plan];
  const [open, setOpen] = useState<null | "pix" | "card">(null);
  return (
    <section className="px-4 py-6 md:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[0.8fr_1.05fr]">
        <motion.img
          {...fadeUp}
          src={mockupEntregaveis}
          alt="Materiais da mentoria Código da Contratação Imediata"
          className="mx-auto hidden max-h-96 w-auto object-contain drop-shadow-[0_24px_60px_rgb(0_0_0/0.18)] lg:block"
          loading="lazy"
        />

        <motion.div {...fadeUp} className="glass-aqua overflow-hidden rounded-3xl">
          <div className="btn-green px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            {p.tag}
          </div>
          <div className="p-4 md:p-5">
            <div className="text-base font-bold text-violet">{p.name}</div>

            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-emerald-500/40 bg-emerald-500/5 p-3">
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Pagar agora · fechando hoje
                </div>
                <div className="mt-1 text-xl font-bold tracking-tight text-violet">{p.cash}</div>
                <div className="text-xs text-ink/60">à vista no Pix ou transferência</div>
                <div className="mt-1.5 rounded-lg bg-white/70 px-2 py-1 text-xs font-semibold text-ink/75">
                  ou 12x de {p.card} · total {p.cardTotal}
                </div>
                <div className="mt-1 text-xs font-semibold text-emerald-700">
                  {p.save ? `Economia de ${p.save}` : "Melhor condição hoje"}
                </div>
                <PaymentButtons onOpen={setOpen} />
              </div>

              <div
                className="rounded-xl border-2 p-3"
                style={{ borderColor: "rgba(225,29,46,0.35)", background: "rgba(225,29,46,0.06)" }}
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: "#B00E1D" }}>
                  Pagar depois
                </div>
                <div className="mt-1 text-xl font-bold tracking-tight" style={{ color: "#E11D2E" }}>
                  {p.later}
                </div>
                <div className="text-xs text-ink/60">valor sem a condição de hoje</div>
                <p className="mt-1.5 text-xs leading-snug" style={{ color: "#B00E1D" }}>
                  Depois não conseguimos garantir a sua vaga na agenda, nem esse valor e as condições
                  apresentadas aqui.
                </p>
              </div>
            </div>

            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">Entregas</div>
            <ul className="mt-1.5 space-y-1">
              {p.deliveries.map((d) => (
                <li key={d} className="flex gap-2 text-xs leading-snug text-ink/75">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 grid gap-1.5">
              <div className="rounded-xl bg-violet/5 px-3 py-1.5 text-xs font-semibold text-ink/80">{p.support}</div>
              <div className="rounded-xl bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                {p.guarantee}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {PLAN_HIGHLIGHTS.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-violet/15 bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-violet"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <PaymentQrModal open={open} onClose={() => setOpen(null)} pixSrc={p.qrPix} cardSrc={p.qrCartao} />
    </section>
  );
}
