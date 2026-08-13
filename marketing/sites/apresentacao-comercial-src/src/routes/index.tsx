import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { CasesSection } from "@/components/cases/CasesSection";
import albertoPhoto from "@/assets/cases/alberto/alberto-guerra.png";
import apmLogo from "@/assets/cases/alberto/apm-terminals.png";
import asaLogo from "@/assets/cases/alberto/asa.png";
import cornelioLogo from "@/assets/cases/alberto/cornelio-brennand.png";
import fiepeLogo from "@/assets/cases/alberto/fiep.png";
import testimonial1 from "@/assets/cases/alberto/testimonial-1.png";
import testimonial2 from "@/assets/cases/alberto/testimonial-2.png";
import testimonial3 from "@/assets/cases/alberto/testimonial-3.png";
import isabelPhoto from "@/assets/cases/isabel/isabel-cardoso.png";
import v4CompanyLogo from "@/assets/cases/isabel/v4-company.png";
import redeItauLogo from "@/assets/cases/isabel/rede-itau.png";
import itauIcon from "@/assets/cases/isabel/itau-icon.png";
import gupyIcon from "@/assets/cases/isabel/gupy-icon.png";
import gupyLogo from "@/assets/platforms/gupy.png";
import indeedLogo from "@/assets/platforms/indeed.png";
import vagasLogo from "@/assets/platforms/vagas.png";
import glassdoorLogo from "@/assets/platforms/glassdoor.png";
import v4Icon from "@/assets/cases/isabel/v4-icon.png";
import isabelTestimonial1 from "@/assets/cases/isabel/testimonial-1.png";
import isabelTestimonial2 from "@/assets/cases/isabel/testimonial-2.png";
import isabelTestimonial3 from "@/assets/cases/isabel/testimonial-3.png";
import gorethePhoto from "@/assets/cases/gorethe/gorethe-andrade.png";
import spainFlag from "@/assets/cases/gorethe/spain-flag.png";
import greeceFlag from "@/assets/cases/gorethe/greece-flag.png";
import wpLogo from "@/assets/cases/gorethe/wp-logo.png";
import mwLogo from "@/assets/cases/gorethe/mw-logo.png";
import goretheTestimonial1 from "@/assets/cases/gorethe/testimonial-1.png";
import goretheTestimonial2 from "@/assets/cases/gorethe/testimonial-2.png";
import goretheTestimonial3 from "@/assets/cases/gorethe/testimonial-3.png";
import goretheTestimonial4 from "@/assets/cases/gorethe/testimonial-4.png";
import goretheTestimonial5 from "@/assets/cases/gorethe/testimonial-5.png";
import goretheTestimonial6 from "@/assets/cases/gorethe/testimonial-6.png";
import goretheTestimonial7 from "@/assets/cases/gorethe/testimonial-7.png";
import thayanePhoto from "@/assets/cases/thayane/thayane-assumpcao.png";
import tripletenLogo from "@/assets/cases/thayane/tripleten.png";
import pinpeopleLogo from "@/assets/cases/thayane/pinpeople.png";
import zenviaLogo from "@/assets/cases/thayane/zenvia.png";
import aedukLogo from "@/assets/cases/thayane/aeduk.png";
import thayaneTestimonial1 from "@/assets/cases/thayane/testimonial-1.png";
import thayaneTestimonial2 from "@/assets/cases/thayane/testimonial-2.png";
import thayaneTestimonial3 from "@/assets/cases/thayane/testimonial-3.png";
import thayaneTestimonial4 from "@/assets/cases/thayane/testimonial-4.png";
import alexandrePhoto from "@/assets/cases/alexandre/alexandre-dornellas.png";
import bairesdevLogo from "@/assets/cases/alexandre/bairesdev.png";
import netcrackerLogo from "@/assets/cases/alexandre/netcracker.png";
import usaFlag from "@/assets/cases/alexandre/usa-flag.png";
import brandAmazon from "@/assets/brands/amazon.png";
import brandAmbev from "@/assets/brands/ambev.png";
import brandCocaCola from "@/assets/brands/coca_cola.png";
import brandGol from "@/assets/brands/gol.png";
import brandGoogle from "@/assets/brands/google.png";
import brandItau from "@/assets/brands/itau.png";
import brandMicrosoft from "@/assets/brands/microsoft.png";
import brandNubank from "@/assets/brands/nubank.png";
import brandSantander from "@/assets/brands/santander.png";
import brandStone from "@/assets/brands/stone.png";
import brandConectaria from "@/assets/brands/conectaria.png";

import brandMercantil from "@/assets/brands2/mercantil.png";
import brandBuzzmonitor from "@/assets/brands2/buzzmonitor.png";
import brandHeineken from "@/assets/brands2/heineken.jpg";
import brandOlx from "@/assets/brands2/olx.png";
import brandUnilever from "@/assets/brands2/unilever.jpg";
import brandXp from "@/assets/brands2/xp.jpg";

import brandSephora from "@/assets/brands2/sephora.jpg";
import brandRede from "@/assets/brands2/rede.jpg";
import brandTripleten from "@/assets/brands3/tripleten.png";
import brandPinpeople from "@/assets/brands3/pinpeople.png";
import brandSwissport from "@/assets/brands3/swissport.jpg";
import brandNibo from "@/assets/brands3/nibo.jpg";
import brandAccenture from "@/assets/brands3/accenture.jpg";
import brandAdecco from "@/assets/brands3/adecco.png";
import brandAlpargatas from "@/assets/brands3/alpargatas.jpg";
import brandAppetite from "@/assets/brands3/appetite.jpg";
import brandAsa from "@/assets/brands3/asa.jpg";
import brandBairesdev from "@/assets/brands3/bairesdev.png";
import brandSolver from "@/assets/brands4/solver.jpg";
import brandDowning from "@/assets/brands4/downing.jpg";
import brandPaulistao from "@/assets/brands4/paulistao.jpg";
import brandEy from "@/assets/brands4/ey.jpg";
import brandGentia from "@/assets/brands4/gentia.jpg";
import brandSirio from "@/assets/brands4/sirio-libanes.jpg";
import brandMoura from "@/assets/brands4/moura.png";
import brandInfluency from "@/assets/brands4/influency.jpg";
import brandIntelbras from "@/assets/brands4/intelbras.png";
import brandJequiti from "@/assets/brands4/jequiti.jpg";
import brandKenvue from "@/assets/brands5/kenvue.jpg";
import brandKnowbe4 from "@/assets/brands5/knowbe4.jpg";
import brandLiferay from "@/assets/brands5/liferay.jpg";
import brandFeedz from "@/assets/brands5/feedz.jpg";
import brandPagueMenos from "@/assets/brands5/paguemenos.jpg";
import brandPraso from "@/assets/brands5/praso.jpg";
import brandScanntech from "@/assets/brands5/scanntech.jpg";
import brandMouraDubeux from "@/assets/brands5/mouradubeux.jpg";
import brandCtc from "@/assets/brands5/ctc.jpg";
import brandMovida from "@/assets/brands5/movida.jpg";
import brandVerzani from "@/assets/brands6/verzani.jpg";
import brandV4check from "@/assets/brands6/v4check.jpg";
import brandNowmed from "@/assets/brands6/nowmed.jpg";
import brandMontijo from "@/assets/brands6/montijo.jpg";
import brandBwa from "@/assets/brands6/bwa.jpg";
import brandZenvia from "@/assets/brands6/zenvia.png";
import brandFiesc from "@/assets/brands6/fiesc.jpg";
import brandMaxim from "@/assets/brands6/maxim.jpg";
import brandMichaelPage from "@/assets/brands6/michaelpage.jpg";
import brandMlabs from "@/assets/brands6/mlabs.jpg";
import brandNbc from "@/assets/brands7/nbc.jpg";
import brandNetcracker from "@/assets/brands7/netcracker.png";
import brandNissin from "@/assets/brands7/nissin.jpg";
import brandBoticario from "@/assets/brands7/boticario.jpg";
import brandLg from "@/assets/brands7/lg.jpg";
import brandPortoSeguro from "@/assets/brands7/portoseguro.jpg";
import brandRdStation from "@/assets/brands7/rdstation.jpg";
import brandReddit from "@/assets/brands7/reddit.png";
import brandRedeDor from "@/assets/brands7/rededor.jpg";
import brandRede2 from "@/assets/brands7/rede2.jpg";
import brandRumo from "@/assets/brands8/rumo.jpg";
import brandSemParar from "@/assets/brands8/semparar.jpg";
import brandSiemens from "@/assets/brands8/siemens.jpg";
import brandDataStone from "@/assets/brands8/datastone.png";
import brandSuperFrete from "@/assets/brands8/superfrete.jpg";
import brandTaniaBulhoes from "@/assets/brands8/taniabulhoes.jpg";
import brandTotvs from "@/assets/brands8/totvs.jpg";
import brandV4Company from "@/assets/brands8/v4company.jpg";
import brandVeja from "@/assets/brands8/veja.jpg";
import brandViaVarejo from "@/assets/brands8/viavarejo.jpg";
import alexandreTestimonial1 from "@/assets/cases/alexandre/testimonial-1.png";
import alexandreTestimonial2 from "@/assets/cases/alexandre/testimonial-2.png";
import otavioPhoto from "@/assets/cases/otavio/otavio-luiz.png";
import otavioBrazilFlag from "@/assets/cases/otavio/brazil-flag.png";
import otavioUsaFlag from "@/assets/cases/otavio/usa-flag.png";
import otavioPortugalFlag from "@/assets/cases/otavio/portugal-flag.png";
import otavioTestimonial1 from "@/assets/cases/otavio/testimonial-1.png";
import otavioTestimonial2 from "@/assets/cases/otavio/testimonial-2.png";
import otavioTestimonial3 from "@/assets/cases/otavio/testimonial-3.png";
import otavioTestimonial4 from "@/assets/cases/otavio/testimonial-4.png";
import otavioTestimonial5 from "@/assets/cases/otavio/testimonial-5.png";
import otavioTestimonial6 from "@/assets/cases/otavio/testimonial-6.png";
import otavioTestimonial7 from "@/assets/cases/otavio/testimonial-7.png";
import otavioTestimonial8 from "@/assets/cases/otavio/testimonial-8.png";
import otavioRecruiterMercadoLivre from "@/assets/cases/otavio/recruiters/mercadolivre.png";
import otavioRecruiterPaypal from "@/assets/cases/otavio/recruiters/paypal.png";
import otavioRecruiterStone from "@/assets/cases/otavio/recruiters/stone.png";
import otavioRecruiterAdecco from "@/assets/cases/otavio/recruiters/adecco.png";
import otavioRecruiterReddit from "@/assets/cases/otavio/recruiters/reddit.png";
import {
  ArrowRight,
  Check,
  Sparkles,
  Globe2,
  Users,
  Briefcase,
  Trophy,
  AlertCircle,
  Target,
  Rocket,
  Shield,
  Star,
  Clock,
  Zap,
  TrendingUp,
  MessageCircle,
  Award,
  GraduationCap,
  Mic,
  BookOpen,
  EyeOff,
  Dice5,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PlanetScene from "@/components/hero/PlanetScene";
import joaoAsset from "@/assets/joao-pedro.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Código da Contratação Imediata — João Pedro Bradley | Conectaria" },
      {
        name: "description",
        content:
          "Mentoria executiva para você sair da fila e conquistar a oportunidade que você merece. +5000 alunos, +1000 contratações, +R$10M em salários negociados.",
      },
      { property: "og:title", content: "Código da Contratação Imediata" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

function LandingPage() {
  const [investmentTier, setInvestmentTier] = useState<"1" | "2">(() => {
    if (typeof window === "undefined") return "1";
    return (localStorage.getItem("investmentTier") as "1" | "2") || "1";
  });
  const [isInvestmentMenuOpen, setIsInvestmentMenuOpen] = useState(false);

  const selectInvestmentTier = (key: "1" | "2") => {
    setInvestmentTier(key);
    setIsInvestmentMenuOpen(false);
    try { localStorage.setItem("investmentTier", key); } catch {}
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero
        investmentTier={investmentTier}
        isInvestmentMenuOpen={isInvestmentMenuOpen}
        onToggleInvestmentMenu={() => setIsInvestmentMenuOpen((open) => !open)}
        onSelectInvestmentTier={selectInvestmentTier}
      />
      <Mentor />
      <Problem />
      <Proof />
      <CasesSection />
      <Reflection />
      <OfferIntro />
      <ForWho />
      <HowItWorks />
      <Bonus />
      <Journey />
      <Outcome />
      <Guarantee />
      <CostAlone />
      <RoiTable />
      <Scarcity />
      <Investment tier={investmentTier} />
      <FinalCta />
      <Footer />
    </div>
  );
}



/* ---------- Shared ---------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet">
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  italic,
  children,
  light,
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  children?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <motion.p
          {...fadeUp}
          className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/60" : "text-ink/55"}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        {...fadeUp}
        className={`text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}{" "}
        {italic && (
          <span className="font-light text-aqua-bright">
            {italic}
          </span>
        )}
      </motion.h2>
      {children && (
        <motion.div
          {...fadeUp}
          className={`mx-auto mt-6 max-w-2xl text-pretty text-base md:text-lg ${light ? "text-white/70" : "text-ink/65"}`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

/* ---------- 1. HERO ---------- */
export function Hero({
  investmentTier,
  isInvestmentMenuOpen,
  onToggleInvestmentMenu,
  onSelectInvestmentTier,
  showPresentationHint = true,
}: {
  investmentTier: "1" | "2";
  isInvestmentMenuOpen: boolean;
  onToggleInvestmentMenu: () => void;
  onSelectInvestmentTier: (key: "1" | "2") => void;
  showPresentationHint?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-violet px-4 pt-20 pb-0 md:pt-28">
      <div className="absolute left-3 top-3 z-50">
        <button
          type="button"
          onClick={onToggleInvestmentMenu}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-lg font-bold leading-none text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          aria-label="Abrir menu de investimento"
          aria-expanded={isInvestmentMenuOpen}
        >
          ☰
        </button>
        {isInvestmentMenuOpen && (
          <div className="mt-2 min-w-40 overflow-hidden rounded-xl border border-white/15 bg-white/10 p-1 text-xs font-semibold shadow-xl backdrop-blur-md">
            {(["1", "2"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onSelectInvestmentTier(key)}
                className={`block w-full rounded-lg px-3 py-2 text-left transition ${
                  investmentTier === key
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                Investimento {key}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="flex justify-center">
          <img
            src={brandConectaria}
            alt="Conectaria"
            className="mb-8 h-10 w-auto object-contain md:h-12"
          />
        </motion.div>

        <motion.div {...fadeUp} className="flex justify-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
            Mentoria Executiva
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp}
          className="text-balance text-center text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
        >
          O Código da{" "}
          <span className="font-normal text-sky-300">
            Contratação Imediata
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/70 md:text-xl"
        >
          O caminho mais rápido e seguro para você conquistar a oportunidade dos seus sonhos.{" "}
          <span className="text-white">Você se posiciona. A gente te guia.</span>
        </motion.p>

        {showPresentationHint && (
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="text-center text-sm font-medium text-white/70">
              Apresentação comercial interativa — use as setas para navegar
            </div>
          </motion.div>
        )}


        <motion.div
          {...fadeUp}
          className="relative z-10 mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass-aqua-dark"
        >
          {[
            { v: "+R$ 10M", l: "em salários negociados" },
            { v: "12 países", l: "atendidos no mundo" },
          ].map((s) => (
            <div key={s.l} className="bg-black/30 p-6 md:p-8">
              <div className="text-3xl text-sky-200 md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-sm text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>

      </div>

      <motion.div
        {...fadeUp}
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-6 w-screen md:mt-8"
      >
        <PlanetScene />
      </motion.div>

    </section>
  );
}

/* ---------- 2. MENTOR ---------- */
export function Mentor() {
  const creds = [
    { icon: GraduationCap, headline: "+5.000 alunos", sub: "Comunidade global", text: "Mentorados em 9 países diferentes." },
    { icon: Users, headline: "+1.000 processos", sub: "Experiência como recrutador", text: "Seletivos conduzidos de ponta a ponta." },
    { icon: Mic, headline: "+10.000 pessoas", sub: "Palco e presença", text: "Em palestras e eventos presenciais." },
    { icon: Briefcase, headline: "Big Players", sub: "Bagagem corporativa", text: "Ex-Michael Page, XP, Voitto e Suno." },
    { icon: BookOpen, headline: "Professor convidado", sub: "Academia", text: "PUC, FMU e Uninassau." },
    { icon: TrendingUp, headline: "+R$2M/mês", sub: "Mentor de alto faturamento", text: "Operações de carreira de alta performance." },
  ];

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Quem te leva até lá" title="O arquiteto por trás do" italic="método" />
        <div className="mt-16 grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet/30 to-violet-deep/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-violet/20">
              <img
                src={joaoAsset}
                alt="João Pedro Bradley"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="glass-aqua-dark absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3">
                <div className="text-white font-semibold">João Pedro Bradley</div>
                <div className="text-white/60 text-xs">Founder · Conectaria</div>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
              João Pedro <span className="text-aqua">Bradley</span>
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ink/45">
              <span>Mentor</span>
              <span className="h-1 w-1 rounded-full bg-aqua" />
              <span>Recrutador</span>
              <span className="h-1 w-1 rounded-full bg-aqua" />
              <span>Estrategista de Carreira</span>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {creds.map(({ icon: Icon, headline, sub, text }) => (
                <div key={headline} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-ink/15">
                    <Icon className="h-[18px] w-[18px] text-ink/70" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-xl leading-tight tracking-tight text-ink">{headline}</h4>
                    <div className="mt-1 text-[14px] font-semibold text-ink">{sub}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ---------- 3. PROBLEM ---------- */
export function Problem() {
  const items = [
    {
      n: "01",
      t: "Currículo Invisível",
      d: "Você manda dezenas de currículos por semana e o silêncio é a única resposta. Não é falta de qualificação — é falta de método.",
      Icon: EyeOff,
      color: "#FFCC00", // Apple yellow
    },
    {
      n: "02",
      t: "Dependência da Sorte",
      d: "Você só avança quando alguém te indica. Você não controla o seu próximo passo — o mercado controla por você.",
      Icon: Dice5,
      color: "#FF9500", // Apple orange
    },
    {
      n: "03",
      t: "Ansiedade Constante",
      d: "Cada processo que não avança vira mais peso. Cada 'vamos te dar um retorno' que nunca chega corrói sua confiança.",
      Icon: HeartPulse,
      color: "#FF3B30", // Apple red
    },
  ];
  return (
    <section id="problema" className="bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Vamos pôr as cartas na mesa" title="Você só está aqui porque tem" italic="um problema" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-ink/65">
          Quem não é visto, não é lembrado. Quem não é lembrado, não é contratado.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map(({ n, t, d, Icon, color }) => (
            <motion.div
              key={n}
              {...fadeUp}
              className="rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-ink/15"
              style={{
                boxShadow: `0 1px 0 rgba(255,255,255,0.8) inset, 0 18px 40px -22px ${color}55`,
              }}
            >
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7" strokeWidth={2} style={{ color }} />
                <span
                  className="font-display text-2xl tracking-tight"
                  style={{ color }}
                >
                  {n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{t}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. PROOF (brands) ---------- */
export function Proof() {
  const brands = [
    "Google", "Meta", "Amazon", "Nubank", "Anthropic", "Microsoft", "Stone", "Ifood", "Itaú",
    "Santander", "Ambev", "Adobe", "PayPal", "Siemens", "EY", "Accenture", "Mercado Livre",
    "XP", "Heineken", "Coca-Cola", "LATAM", "GOL", "Azul", "Sephora", "OLX", "Volvo", "Michael Page",
  ];
  const brandLogos = [
    { src: brandGoogle, alt: "Google" },
    { src: brandMicrosoft, alt: "Microsoft" },
    { src: brandAmazon, alt: "Amazon" },
    { src: brandNubank, alt: "Nubank" },
    { src: brandItau, alt: "Itaú" },
    { src: brandSantander, alt: "Santander" },
    { src: brandStone, alt: "Stone" },
    { src: brandAmbev, alt: "Ambev" },
    { src: brandCocaCola, alt: "Coca-Cola" },
    { src: brandGol, alt: "GOL" },
    
  ];
  const brandLogos2 = [
    { src: brandMercantil, alt: "Banco Mercantil" },
    { src: brandBuzzmonitor, alt: "Buzzmonitor" },
    { src: brandHeineken, alt: "Heineken" },
    { src: brandOlx, alt: "OLX" },
    { src: brandUnilever, alt: "Unilever" },
    { src: brandXp, alt: "XP Investimentos" },
    { src: brandSephora, alt: "Sephora" },
    { src: brandRede, alt: "Rede" },
  ];
  const brandLogos3 = [
    { src: brandTripleten, alt: "Tripleten" },
    { src: brandPinpeople, alt: "PinPeople" },
    { src: brandSwissport, alt: "Swissport" },
    { src: brandNibo, alt: "Nibo" },
    { src: brandAccenture, alt: "Accenture" },
    { src: brandAdecco, alt: "Adecco" },
    { src: brandAlpargatas, alt: "Alpargatas" },
    { src: brandAppetite, alt: "Appetite Gourmet" },
    { src: brandAsa, alt: "ASA" },
    { src: brandBairesdev, alt: "BairesDev" },
  ];
  const brandLogos4 = [
    { src: brandSolver, alt: "Solver Tecnologias" },
    { src: brandDowning, alt: "Downing" },
    { src: brandPaulistao, alt: "Paulistão Atacadista" },
    { src: brandEy, alt: "EY" },
    { src: brandGentia, alt: "Gentia" },
    { src: brandSirio, alt: "Sírio-Libanês" },
    { src: brandMoura, alt: "Moura" },
    { src: brandInfluency, alt: "Influency.me" },
    { src: brandIntelbras, alt: "Intelbras" },
    { src: brandJequiti, alt: "Jequiti" },
  ];
  const brandLogos5 = [
    { src: brandKenvue, alt: "Kenvue" },
    { src: brandKnowbe4, alt: "KnowBe4" },
    { src: brandLiferay, alt: "Liferay" },
    { src: brandFeedz, alt: "Feedz" },
    { src: brandPagueMenos, alt: "Pague Menos" },
    { src: brandPraso, alt: "Praso" },
    { src: brandScanntech, alt: "Scanntech" },
    { src: brandMouraDubeux, alt: "Moura Dubeux" },
    { src: brandCtc, alt: "CTC" },
    { src: brandMovida, alt: "Movida" },
  ];
  const brandLogos6 = [
    { src: brandVerzani, alt: "Verzani & Sandrini" },
    { src: brandV4check, alt: "V4" },
    { src: brandNowmed, alt: "Nowmed" },
    { src: brandMontijo, alt: "Montijo Digital Agency" },
    { src: brandBwa, alt: "BWA Global" },
    { src: brandZenvia, alt: "Zenvia" },
    { src: brandFiesc, alt: "FIESC" },
    { src: brandMaxim, alt: "Maxim" },
    { src: brandMichaelPage, alt: "Michael Page" },
    { src: brandMlabs, alt: "mLabs" },
  ];
  const brandLogos7 = [
    { src: brandNbc, alt: "NBC Universal" },
    { src: brandNetcracker, alt: "Netcracker" },
    { src: brandNissin, alt: "Nissin" },
    { src: brandBoticario, alt: "O Boticário" },
    { src: brandLg, alt: "LG" },
    { src: brandPortoSeguro, alt: "Porto Seguro" },
    { src: brandRdStation, alt: "RD Station Marketing" },
    { src: brandReddit, alt: "Reddit" },
    { src: brandRedeDor, alt: "Rede D'Or" },
    { src: brandRede2, alt: "Rede" },
  ];
  const brandLogos8 = [
    { src: brandRumo, alt: "Rumo Logística" },
    { src: brandSemParar, alt: "Sem Parar" },
    { src: brandSiemens, alt: "Siemens" },
    { src: brandDataStone, alt: "Data Stone" },
    { src: brandSuperFrete, alt: "SuperFrete" },
    { src: brandTaniaBulhoes, alt: "Tania Bulhões" },
    { src: brandTotvs, alt: "TOTVS" },
    { src: brandV4Company, alt: "V4 Company" },
    { src: brandVeja, alt: "Veja" },
    { src: brandViaVarejo, alt: "Via Varejo" },
  ];
  return (
    <section className="overflow-hidden bg-white px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Prova social"
          title="Empresas onde"
          italic="chegamos"
        />
      </div>
      <div className="mt-14 space-y-8">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
            {[...brandLogos, ...brandLogos].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-14 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-16"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee-reverse items-center gap-10 whitespace-nowrap">
            {[...brandLogos2, ...brandLogos2].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...brandLogos3, ...brandLogos3].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee-reverse items-center gap-10 whitespace-nowrap">
            {[...brandLogos4, ...brandLogos4].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...brandLogos5, ...brandLogos5].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee-reverse items-center gap-10 whitespace-nowrap">
            {[...brandLogos6, ...brandLogos6].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...brandLogos7, ...brandLogos7].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee-reverse items-center gap-10 whitespace-nowrap">
            {[...brandLogos8, ...brandLogos8].map((b, i) => (
              <img
                key={i}
                src={b.src}
                alt={b.alt}
                className="h-9 w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 md:h-11"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}

/* ---------- 5. CASES ---------- */


/* ---------- 6. REFLECTION ---------- */
export function Reflection() {
  const qs = [
    "Se a sua carreira permanecer exatamente como está hoje, que vida você estará vivendo daqui a 1 ano?",
    "Quanto tempo e quantas oportunidades você está disposto a perder tentando descobrir isso sozinho?",
    "Que vida você poderia estar vivendo agora, se há 3 meses tivesse decidido resolver esse problema?",
  ];
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Responda com sinceridade</Eyebrow>
        <div className="mt-8 space-y-8">
          {qs.map((q, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl"
            >
              {q}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. OFFER INTRO ---------- */
export function OfferIntro() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-cta-violet p-10 md:p-16">
        <Eyebrow>O Método</Eyebrow>
        <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Código da{" "}
          <span className="font-light text-aqua-bright">
            Contratação Imediata
          </span>
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
          <p>
            Foi para resolver exatamente a falta de oportunidades e garantir que você alcance a sua tão sonhada oportunidade de emprego que criamos o <strong>Código da Contratação Imediata</strong>, um método desenvolvido para ajudar profissionais como você a sair da falta de propostas e chegar a sua nova posição <strong>sem depender de indicações, estratégias mirabolantes via LinkedIn ou de enviar 1000 currículos sem parar.</strong>
          </p>
          <p>
            <strong>O Código da Contratação Imediata</strong> não atua só em atualizar o seu Currículo, mudar o seu LinkedIn ou adaptar a sua entrevista.
          </p>
          <p>
            Ele foi estruturado para alinhar a sua experiência com o que o recrutador busca, porque é isso que realmente impede você de conseguir a sua oportunidade.
          </p>
          <p>
            Na prática, o <strong>Código da Contratação</strong> Imediata funciona em <strong>3 etapas</strong>: <strong>Profissional Memorável, Primeiro da Fileira e Candidato Irresistível.</strong>
          </p>
          <p>
            <strong>Primeiro</strong>, vamos entender a sua experiência para <strong>estruturar o Currículo</strong> no modelo ideal <strong>para os recrutadores</strong>, o seu perfil no <strong>LinkedIn</strong> que atrai oportunidades e o seu <strong>perfil nos sites de vagas (Gupy, Indeed, Vagas.com</strong>) que <strong>passa pelos filtros da IA.</strong>
          </p>
          <p>
            Depois, <strong>estruturarmos a estratégia que vai fazer você passar na frente dos seus concorrentes</strong> no processo de busca por vagas, te direcionando pelo caminho ideal para acelerar a sua busca por um emprego.
          </p>
          <p>
            E então, <strong>teremos simulações ao vivo personalizadas para as suas entrevistas para que você possa se tornar o candidato irresistível</strong>, falando exatamente o que o recrutador quer ouvir dentro da sua entrevista.
          </p>
          <p>
            É esse processo que permite que você deixe de ficar correndo atrás dos recrutadores e passe a <strong>atrair das oportunidades até você com mais velocidade, tranquilidade e segurança.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. FOR WHO ---------- */
export function ForWho() {
  const items = [
    "Você é profissional com 3+ anos de experiência e quer dar um salto real de cargo ou salário",
    "Você está empregado, mas insatisfeito — e quer trocar com inteligência, sem queimar largada",
    "Você está em transição e cansou de aplicar em vagas que nunca respondem",
    "Você quer parar de depender de sorte ou indicação para conseguir oportunidades",
    "Você quer construir um posicionamento que faça recrutadores virem até você",
    "Você está pronto para colocar método na sua carreira — não mais tentativa e erro",
  ];
  return (
    <section className="bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Para quem é"
          title="Esta mentoria é"
          italic="ideal para você se:"
        >
          O Código é feito junto com você. Você executa. A gente guia, corrige e abre os caminhos.
        </SectionHeader>
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <motion.li
              key={i}
              {...fadeUp}
              className="glass-aqua flex items-start gap-3 rounded-2xl p-5"
            >
              <div className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-violet text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
              <span className="text-ink/80">{i}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 9. HOW IT WORKS ---------- */
export function HowItWorks() {
  const phaseOneExtra = (
    <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
      {[
        { src: gupyLogo, alt: "Gupy" },
        { src: indeedLogo, alt: "Indeed" },
        { src: vagasLogo, alt: "Vagas.com" },
        { src: glassdoorLogo, alt: "Glassdoor" },
      ].map((l) => (
        <div
          key={l.alt}
          className="flex items-center justify-center rounded-xl bg-white px-5 py-3 ring-1 ring-white/10 shadow-sm"
        >
          <img src={l.src} alt={l.alt} className="h-10 sm:h-12 w-auto object-contain" />
        </div>
      ))}
    </div>
  );

  const iconChip = (label: string, svg: React.ReactNode) => (
    <div className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3.5 py-2 ring-1 ring-white/10 text-xs font-medium text-ink/80">
      <span className="text-violet">{svg}</span>
      {label}
    </div>
  );

  const phaseTwoExtra = (
    <div className="mt-5 flex flex-wrap gap-2">
      {iconChip("Busca ativa", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      ))}
      {iconChip("Vagas ocultas", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
      ))}
      {iconChip("Networking", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M15 20c0-2.2 1.8-4 4-4"/></svg>
      ))}
      {iconChip("Currículo enviado", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>
      ))}
    </div>
  );

  const phaseThreeExtra = (
    <div className="mt-5 flex flex-wrap gap-2">
      {iconChip("Entrevista", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>
      ))}
      {iconChip("Simulação ao vivo", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m22 7-5 4 5 4z"/></svg>
      ))}
      {iconChip("Feedback", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ))}
      {iconChip("Negociação", (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 6 7 2 2 7l4 4"/><path d="m13 18 4 4 5-5-4-4"/><path d="m7 11 5 5"/><path d="m12 6 6 6"/></svg>
      ))}
    </div>
  );

  const phases = [
    {
      tag: "Fase 01",
      icon: Target,
      title: "Profissional memorável",
      time: "Dia 1 ao Dia 7",
      desc: "Nos primeiros dias da mentoria, toda a base da sua recolocação é construída pela nossa equipe. Você não precisa saber o que fazer ainda. Nosso trabalho aqui é montar a estrutura que vai fazer o mercado enxergar o valor que você já tem.",
      extra: phaseOneExtra,
      items: [
        "Alinhamento individual com a equipe da Conectaria para extrair as informações da sua trajetória profissional",
        "Pesquisa completa sobre o seu cargo-alvo: palavras-chave, atividades, experiências e requisitos que o mercado exige",
        "Cruzamento de dados entre a sua experiência real e o que as empresas estão buscando no seu setor",
        "Currículo totalmente estruturado e formatado pela nossa equipe, incluindo versões adicionais se os seus objetivos exigirem",
        "Documento completo do LinkedIn pronto para você atualizar o perfil com tudo já escrito e posicionado",
        "Material completo para a Gupy e demais sites de vagas, pronto para você enviar nas oportunidades do mercado",
      ],
    },
    {
      tag: "Fase 02",
      icon: Rocket,
      title: "Primeiro da Fileira",
      time: "Dia 7 ao Dia 21",
      desc: "Com o seu perfil estruturado, começa a parte prática. Nessa fase, a nossa equipe vai acompanhar de perto a sua busca por oportunidades e montar com você um plano de ação personalizado para que você pare de esperar o mercado te encontrar e comece a aparecer na frente dos seus concorrentes desde o primeiro envio.",
      extra: phaseTwoExtra,
      items: [
        "Acesso ao nosso sistema de acompanhamento para suporte durante toda a sua busca ativa",
        "Plano de ação personalizado com o caminho exato que você vai seguir para acelerar sua recolocação",
        "Lista de sites estratégicos de vagas, incluindo os menos conhecidos onde a concorrência é menor",
        "Acesso à estratégia de vagas ocultas, para encontrar oportunidades que nunca chegam a ser publicadas",
        "Listas de empresas e recrutadores do seu setor para que você possa se posicionar de forma ativa no mercado",
        "Estratégias práticas para extrair ao máximo o seu LinkedIn e atrair recrutadores organicamente",
        "Passo a passo para ser a primeira opção sempre que seu currículo chegar nas mãos de um recrutador",
      ],
    },
    {
      tag: "Fase 03",
      icon: Award,
      title: "Candidato Irresistível",
      time: "A partir da primeira entrevista",
      desc: "Com o perfil estruturado e a estratégia de busca em andamento, chega o momento de garantir que cada entrevista vire uma oferta. Nessa fase, a nossa equipe de recrutadores vai simular, treinar e orientar você em cada etapa do processo seletivo para que você entre em qualquer entrevista sabendo exatamente o que dizer, para quem dizer e como negociar o que você merece.",
      extra: phaseThreeExtra,
      items: [
        "Simulação de entrevista ao vivo personalizada para a vaga específica que você foi chamado, feita com a nossa equipe de recrutadores",
        "Feedback individual sobre a sua comunicação, com o que dizer, o que evitar e como se posicionar em cada situação",
        "As principais perguntas que você pode fazer ao recrutador durante a entrevista, que aumentam em mais de 50% a sua chance de passar para a próxima etapa",
        "Mensagens estratégicas para enviar após a entrevista e continuar encantando o recrutador mesmo depois que a conversa termina",
        "Estratégias personalizadas de acordo com o perfil de quem vai te entrevistar, seja recrutador, gerente, diretor ou CEO",
        "Orientação completa para todas as etapas do processo seletivo, incluindo cases de sucesso, testes comportamentais e testes racionais",
        "Como falar sobre salário de forma que você amplie sua margem de negociação sem comprometer sua candidatura",
      ],
    },
  ];
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Como funciona"
          title="Como o Código da Contratação Imediata funciona na prática:"
        >
          E então você finalmente para de depender da sorte no processo seletivo e começa a escolher onde quer trabalhar, porque as oportunidades passam a vir até você.
        </SectionHeader>
        <div className="mt-16 space-y-6">
          {phases.map((p, idx) => (
            <motion.div
              key={p.tag}
              {...fadeUp}
              className="glass-aqua overflow-hidden rounded-3xl"
            >
              <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.5fr] md:p-12">
                <div>
                  <div className="flex items-center gap-3 text-violet">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-violet/10">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {p.tag} · {p.time}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink/65 leading-relaxed">{p.desc}</p>
                  {p.extra}
                </div>
                <div className="glass-aqua rounded-2xl p-6 md:p-8">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink/45">
                    O QUE VOCÊ RECEBE NESSA FASE
                  </div>
                  <ul className="space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-ink/80">
                        <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {idx < phases.length - 1 && <div className="h-px bg-ink/5" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. BONUS ---------- */
export function Bonus() {
  const bonuses = [
    {
      n: "Bônus 01",
      icon: BookOpen,
      title: "Acesso Vitalício à Plataforma de Estratégias de Carreira",
      desc: "Todas as nossas estratégias atualizadas, disponíveis para você acessar daqui a um ano ou dez.",
      items: [
        "Estratégias sempre atualizadas de currículo, LinkedIn e busca por vagas",
        "Bastidores exclusivos com a visão dos nossos recrutadores sobre o mercado",
        "Módulos sobre inteligência artificial no processo seletivo",
        "Acesso completo a todo o conteúdo gravado da mentoria, sem prazo de expiração",
      ],
    },
    {
      n: "Bônus 02",
      icon: Zap,
      title: "IA Treinada no Seu Perfil",
      desc: "Prepare-se para qualquer entrevista a qualquer hora, sem precisar de ninguém disponível para te ajudar.",
      items: [
        "Inteligência artificial configurada com a sua experiência, seu cargo-alvo e seus objetivos de carreira",
        "Simule entrevistas completas, adapte respostas para diferentes empresas e se prepare para qualquer processo em minutos",
        "Disponível 24 horas por dia durante toda a sua busca, para que nenhuma oportunidade te pegue despreparado",
      ],
    },
    {
      n: "Bônus 03",
      icon: MessageCircle,
      title: "3 Meses de Conteúdo no LinkedIn",
      desc: "Enquanto você busca vagas ativamente, o seu LinkedIn trabalha por você atraindo oportunidades de forma passiva.",
      items: [
        "3 meses de conteúdo produzido pela nossa equipe de produção, baseado na sua experiência, no seu cargo-alvo e nos seus objetivos de carreira",
        "Cada conteúdo criado com o olhar de recrutador, para que o que aparece no seu perfil seja exatamente o que atrai a atenção de quem contrata",
        "Uma lista de materiais prontos para você publicar e acelerar sua visibilidade no mercado sem precisar saber o que escrever",
      ],
    },
  ];
  return (
    <section className="bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Bônus Exclusivos"
          title="3 ativos estratégicos que"
          italic="acompanham a mentoria"
        >
          Ao começar o nosso processo hoje, você leva de graça 3 ativos estratégicos que sozinhos já valem mais do que o próprio investimento.
        </SectionHeader>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {bonuses.map((b) => (
            <motion.div
              key={b.n}
              {...fadeUp}
              className="glass-aqua rounded-3xl p-8 ring-1 ring-aqua/30"
            >
              <div className="flex items-center gap-3 text-violet">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-violet text-white">
                  <b.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">{b.n}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold leading-tight">{b.title}</h3>
              <p className="mt-3 text-ink/65">{b.desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-6">
                {b.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet" strokeWidth={2.5} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. JOURNEY ---------- */
export function Journey() {
  const steps = [
    "Você preenche nosso formulário de onboarding com sua experiência, seus objetivos e o cargo que está buscando no mercado",
    "Nossa equipe faz o alinhamento individual com você para extrair tudo o que precisa saber sobre a sua trajetória profissional",
    "Nossa equipe estrutura seu currículo, seu perfil completo no LinkedIn e todo o seu material para os sites de vagas",
    "Você revisa, aprova e já entra no mercado com tudo posicionado e pronto para atrair oportunidades",
    "Apresentamos seu plano de ação personalizado e ativamos junto com você a estratégia para ser o primeiro da fila",
    "Você começa a aplicar e a receber as vagas certas com nossa orientação e acompanhamento direto em cada etapa",
    "Quando a entrevista aparecer, simulamos com você ao vivo antes de qualquer processo para que você chegue preparado",
    "Acompanhamos você em todas as fases do processo seletivo, orientando cada resposta e decisão",
    "Você negocia o salário e o cargo com nossa orientação e fecha na posição que você realmente merece",
  ];
  return (
    <section className="relative overflow-hidden bg-hero-violet px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Essa será a sua jornada"
          title="Do diagnóstico ao"
          italic="contrato assinado"
          light
        />

        <div className="relative mt-20">
          {/* central dashed vertical path */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 top-2 bottom-2 md:left-1/2 md:-translate-x-1/2"
            style={{
              width: "1px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, color-mix(in oklab, var(--aqua-bright) 65%, transparent) 0 6px, transparent 6px 12px)",
            }}
          />

          <ol className="space-y-12 md:space-y-16">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={i}
                  {...fadeUp}
                  className="relative grid grid-cols-[3rem_1fr] items-center gap-4 md:grid-cols-[1fr_3rem_1fr] md:gap-0"
                >
                  {/* card */}
                  <div
                    className={[
                      "col-start-2 md:row-start-1",
                      isLeft
                        ? "md:col-start-1 md:justify-self-end md:pr-10 md:text-right"
                        : "md:col-start-3 md:justify-self-start md:pl-10 md:text-left",
                    ].join(" ")}
                  >
                    <div className="glass-aqua-dark inline-block max-w-[18rem] rounded-2xl p-5 md:p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-bright">
                        Passo {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 font-medium leading-snug text-white/90">
                        {s}
                      </div>
                    </div>
                  </div>

                  {/* node on the path */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2 md:row-start-1">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full font-display text-base font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.42 0.16 250) 0%, oklch(0.28 0.14 255) 100%)",
                        border:
                          "1px solid color-mix(in oklab, var(--aqua-bright) 70%, transparent)",
                        boxShadow:
                          "inset 0 1px 0 color-mix(in oklab, var(--aqua-bright) 40%, transparent), 0 8px 22px -8px color-mix(in oklab, var(--aqua-bright) 50%, transparent)",
                      }}


                    >
                      {i + 1}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}


/* ---------- 12. OUTCOME ---------- */
export function Outcome() {
  const have = [
    "Currículo, LinkedIn e perfil nos sites de vagas estruturados pela nossa equipe e prontos para atrair oportunidades",
    "Um plano de ação personalizado com o caminho exato que você precisa seguir para conseguir a vaga certa",
    "Recrutadores chegando até você de forma ativa, sem você precisar ficar esperando o mercado te encontrar",
    "Propostas de emprego para avaliar e escolher onde quer trabalhar",
    "Salário negociado acima do que você teria aceitado sem estratégia",
  ];
  const be = [
    "Livre da ansiedade de mandar currículo e não receber nenhum retorno",
    "Confiante para entrar em qualquer entrevista sabendo exatamente o que dizer e para quem",
    "Com clareza sobre quanto você vale e o que o mercado está disposto a pagar por você",
    "De volta ao controle da sua carreira, sem depender da sorte para ser chamado",
    "Pronto para crescer no novo cargo sabendo como se posicionar desde o primeiro dia",
  ];
  return (
    <section className="bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Resumindo, ao final desse processo"
          title="Você"
          italic="terá"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="glass-aqua rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold">
              <span className="font-light text-aqua-bright">Você terá</span>
            </h3>
            <ul className="mt-6 space-y-3">
              {have.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/80">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="glass-aqua rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold">
              <span className="font-light text-aqua-bright">E estará</span>
            </h3>
            <ul className="mt-6 space-y-3">
              {be.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/80">
                  <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 13. GUARANTEE ---------- */
export function Guarantee() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-hero-violet p-10 text-center md:p-16">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-violet text-white">
          <Shield className="h-7 w-7" />
        </div>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
          A nossa garantia
        </p>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
          "O risco do outro lado da mesa{" "}
          <span className="font-light text-sky-200">é todo nosso."</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Se em 6 meses você seguir o método e não conseguir avançar como o esperado, nós continuamos com você
          — sem cobrar nada — até o seu próximo contrato ser assinado.
        </p>
        <p className="mt-4 text-sm text-white/55">Você entra tranquilo. O resto é com a gente.</p>
      </div>
    </section>
  );
}

/* ---------- 14. COST ALONE ---------- */
export function CostAlone() {
  const rows = [
    ["Consultor de carreira sênior", "R$ 3.500"],
    ["Especialista de LinkedIn", "R$ 2.000"],
    ["Coach de entrevistas (4h/mês)", "R$ 2.400"],
    ["Redator de currículo executivo", "R$ 1.500"],
    ["Headhunter por hora (10h/mês)", "R$ 3.000"],
    ["Mentor de negociação salarial", "R$ 2.000"],
  ];
  return (
    <section className="bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Antes do investimento"
          title="O custo de tentar fazer isso"
          italic="sozinho"
        >
          Se você fosse contratar separadamente cada peça desse método, o que você gastaria é isso:
        </SectionHeader>
        <motion.div {...fadeUp} className="mt-12 glass-aqua overflow-hidden rounded-3xl">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-6 py-5 md:px-8 ${i > 0 ? "border-t border-ink/10" : ""}`}
            >
              <span className="text-ink/80">{k}</span>
              <span className="font-semibold text-ink">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between bg-violet/5 px-6 py-6 md:px-8">
            <span className="font-semibold text-ink">Total mensal</span>
            <span className="text-3xl text-violet">R$ 14.400</span>
          </div>
          <div className="flex items-center justify-between border-t border-ink/10 bg-violet px-6 py-6 text-white md:px-8">
            <span className="font-semibold">Em 6 meses</span>
            <span className="text-3xl">R$ 86.400</span>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-ink/65">
          E ainda assim — sem método, sem integração, sem garantia de resultado.
        </p>
      </div>
    </section>
  );
}

/* ---------- COMPARISON ---------- */
function Comparison() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p {...fadeUp} className="text-lg leading-relaxed text-ink/70 md:text-xl">
          Consultorias tradicionais cobram em média dois salários pelo resultado que você vai ter, sem suporte personalizado, sem simulação de entrevista e sem acompanhamento real. Aqui você paga uma fração disso e tem um processo completo do início ao fim, até conseguir o emprego.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- ROI TABLE ---------- */
export function RoiTable() {
  const rows = [
    { salary: "R$ 30.000", year: "R$ 360.000", invest: "R$ 60.000", roi: "+600%" },
    { salary: "R$ 25.000", year: "R$ 300.000", invest: "R$ 50.000", roi: "+600%" },
    { salary: "R$ 20.000", year: "R$ 240.000", invest: "R$ 40.000", roi: "+600%" },
    { salary: "R$ 15.000", year: "R$ 180.000", invest: "R$ 30.000", roi: "+600%" },
    { salary: "R$ 10.000", year: "R$ 120.000", invest: "R$ 20.000", roi: "+600%" },
  ];
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Antes de te falar sobre o investimento"
          title="O retorno sobre o que você"
          italic="vai investir"
        >
          Se você olhar pelo ângulo do resultado que vai ter, o cálculo é simples.
        </SectionHeader>
        <motion.div {...fadeUp} className="mt-12 overflow-hidden rounded-3xl border border-ink/10">
          <div className="grid grid-cols-4 bg-violet/10 px-4 py-4 text-xs font-semibold uppercase tracking-wider text-ink/70 md:px-8 md:text-sm">
            <div>Salário/mês</div>
            <div>Salário em 12 meses</div>
            <div>Investimento em 2 salários</div>
            <div className="text-right">Retorno</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.salary}
              className={`grid grid-cols-4 px-4 py-4 text-sm md:px-8 md:text-base ${i > 0 ? "border-t border-ink/10" : ""} ${i % 2 === 0 ? "bg-white" : "bg-card"}`}
            >
              <div className="font-medium text-ink">{r.salary}</div>
              <div className="text-ink/75">{r.year}</div>
              <div className="text-ink/75">{r.invest}</div>
              <div className="text-right font-bold text-violet">{r.roi}</div>
            </div>
          ))}
        </motion.div>
        <motion.p {...fadeUp} className="mx-auto mt-8 max-w-3xl text-center text-base text-ink/65 md:text-lg">
          Consultorias tradicionais cobram em média dois salários pelo resultado que você vai ter, sem suporte personalizado, sem simulação de entrevista e sem acompanhamento real. Aqui você paga uma fração disso e tem um processo completo do início ao fim, até conseguir o emprego.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- 15. SCARCITY ---------- */
export function Scarcity() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="glass-aqua rounded-3xl p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-violet text-white">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet">
                Um aviso importante sobre disponibilidade
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
            <p>
              Nossa mentoria não é escalável como um curso. Cada cliente recebe atendimento direto do JP Bradley, do time de recrutamento, de processo seletivo, de estratégia e de carreira.
            </p>
            <p>
              Por isso, abrimos apenas 10 vagas de implementação por mês para garantir que cada cliente receba o padrão de entrega que nos trouxe até aqui.
            </p>
            <p>
              Tudo que construímos com você — Currículo, LinkedIn, Entrevista, Estratégia, IAs, Sistemas — fica com você pra sempre.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 16. INVESTMENT ---------- */
const INVESTMENT_TIERS = {
  "1": {
    label: "Investimento 1",
    intro:
      "A condição de fechamento hoje só existe nessa conversa. Se você sair daqui e voltar amanhã, ela não se repete. E antes de te mostrar os valores, tem um detalhe importante que a gente ainda não tinha falado: você terá 6 meses de suporte completo com a nossa equipe ao longo de toda a jornada, até você conseguir o emprego certo.",

    plans: [
      {
        tag: "CONDIÇÃO 01",
        sub: "Sem bônus. Apenas a mentoria.",
        price: "R$ 5.997",
        pix: "R$ 5.997,00",
        card: "12x de R$ 613,38",
        cardTotal: "R$ 7.360,56",
        desc: "Os bônus não estão inclusos nessa condição.",
        featured: false,
      },
      {
        tag: "CONDIÇÃO 02",
        sub: "Melhor condição",
        originalPrice: "R$ 5.997",
        price: "R$ 3.997",
        pix: "R$ 3.997,00",
        card: "12x de R$ 413,38",
        cardTotal: "R$ 4.960,56",
        desc: "Com os 3 bônus inclusos. Decidir agora te economiza R$ 2.000 de cara.",
        featured: true,
      },
    ],
  },
  "2": {
    label: "Investimento 2",
    intro:
      "Duas condições. Você escolhe. A condição de fechamento hoje só existe nessa conversa — se você sair daqui e voltar amanhã, ela não se repete. E antes dos valores: você terá 6 meses de suporte completo com a nossa equipe ao longa de toda a jornada, até conseguir o emprego certo.",
    plans: [
      {
        tag: "CONDIÇÃO 01",
        sub: "Investimento cheio. Sem bônus. Apenas a mentoria.",
        price: "R$ 29.997",
        pix: "R$ 29.997,00",
        card: "12x de R$ 3.102,38",
        cardTotal: "R$ 37.228,56",
        desc: "Os bônus não estão inclusos nessa condição.",
        featured: false,
      },
      {
        tag: "CONDIÇÃO 02",
        sub: "Melhor condição",
        originalPrice: "R$ 29.997",
        price: "R$ 19.997",
        pix: "R$ 17.997,00",
        card: "12x de R$ 2.068,15",
        cardTotal: "R$ 24.817,80",
        desc: "Com os 3 bônus inclusos. Decidir agora te economiza R$ 10.000 de cara.",
        featured: true,
      },
    ],
  },
} as const;

type InvestmentKey = keyof typeof INVESTMENT_TIERS;

export function Investment({ tier = "1" }: { tier?: InvestmentKey }) {
  const current = INVESTMENT_TIERS[tier];
  return (
    <section id="investimento" className="bg-hero-violet px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          light
          eyebrow="O investimento"
          title="Sobre o investimento."
        >
          <span className="text-white/70">{current.intro}</span>
        </SectionHeader>
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {current.plans.map((p) => (
            <motion.div
              key={p.tag}
              {...fadeUp}
              className={`flex flex-col rounded-3xl p-8 ${
                p.featured
                  ? "scale-[1.02] border-2 border-sky-200 bg-gradient-to-b from-violet to-violet-deep text-white shadow-[0_24px_60px_-18px_rgb(56_170_255/0.55)]"
                  : "glass-aqua-dark text-white"
              }`}
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                {p.tag}
              </div>
              {p.featured && (
                <div className="mb-5 inline-flex w-fit items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <Trophy className="h-3 w-3" /> {p.sub}
                </div>
              )}
              {!p.featured && <div className="mb-5 text-sm opacity-60">{p.sub}</div>}

              <div className="mb-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider opacity-60">
                  Parcelado no cartão
                </div>
                <div className="text-3xl font-bold tracking-tight md:text-4xl">
                  {p.card}
                </div>
                <div className="mt-1 text-lg font-semibold opacity-85">
                  {p.cardTotal}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider opacity-60">
                  À vista no Pix
                </div>
                <div className="text-2xl font-bold tracking-tight opacity-90">
                  {p.pix}
                </div>
              </div>

              <p className="mb-8 text-sm opacity-80 leading-relaxed">{p.desc}</p>
              <Button
                asChild
                size="lg"
                className={`mt-auto h-12 rounded-full font-semibold ${
                  p.featured ? "btn-aqua-light" : "btn-aqua"
                }`}
              >
                <a href="#contato">
                  Quero fechar hoje <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 17. FINAL CTA ---------- */
export function FinalCta() {
  return (
    <section id="contato" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          A gente gera o link.{" "}
          <span className="font-light text-aqua-bright">Você confirma.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/65">
          Em até 24h, nossa equipe está com você no WhatsApp para começar a construir o seu Código da Contratação Imediata.
        </p>
        <Button
          asChild
          size="lg"
          className="btn-aqua mt-10 h-14 rounded-full px-8 text-base font-semibold"
        >
          <a href="#investimento">
            Quero fechar hoje <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-card px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <img
          src={brandConectaria}
          alt="Conectaria"
          className="h-9 w-auto object-contain md:h-10"
        />

        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Conectaria · João Pedro Bradley · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
