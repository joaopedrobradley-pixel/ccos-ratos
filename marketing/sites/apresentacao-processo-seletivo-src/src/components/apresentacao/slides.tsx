import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/assets/parceiros";
import conectariaIcon from "@/assets/logo/conectaria-icon.png";
import conectariaStacked from "@/assets/logo/conectaria-stacked.png";
import joaoPedro from "@/assets/joao-pedro.jpg";
import caseXinguara from "@/assets/cases/case-xinguara.png";
import caseFutebol from "@/assets/cases/case-futebol.png";
import hubScreenshot from "@/assets/hub/hub-screenshot.png";
import adaptaLogo from "@/assets/parceiros/adapta.jpeg";
import jahAcaiLogo from "@/assets/parceiros/jah-acai.png";
import { BRAZIL_PATH, BRAZIL_VIEWBOX } from "@/assets/brazil-path";
import {
  Users,
  Clock,
  TrendingDown,
  Handshake,
  Radar,
  MessageSquareHeart,
  Linkedin,
  Instagram,
  Mail,
  Globe,
  Flag,
  Megaphone,
  UserSearch,
  MessagesSquare,
  ClipboardCheck,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Mic,
  Award,
  Sparkles,
  RefreshCcw,
  LayoutGrid,
  Quote,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-2xl bg-aqua-deep p-5 text-white shadow-[0_14px_34px_-20px_rgb(0_0_0/0.5)]">
      <Quote className="h-5 w-5 text-white/40" fill="currentColor" />
      <p className="mt-2 text-sm leading-relaxed text-white/90">{quote}</p>
      <p className="mt-3 text-xs font-semibold text-white/60">{author}</p>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-deep">
      {children}
    </div>
  );
}

const BRAZIL_HUBS = [
  { name: "São Paulo", x: 62, y: 78 },
  { name: "Recife", x: 88, y: 38 },
  { name: "Brasília", x: 63, y: 55 },
  { name: "Porto Alegre", x: 52, y: 92 },
];

function BrazilMap() {
  return (
    <div className="relative mx-auto aspect-[0.96/1] w-full max-w-[220px]">
      <svg viewBox={BRAZIL_VIEWBOX} className="h-full w-full text-aqua-deep/80" fill="currentColor">
        <path d={BRAZIL_PATH} />
      </svg>
      {BRAZIL_HUBS.map((hub) => (
        <span
          key={hub.name}
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-white/40"
          style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
        </span>
      ))}
    </div>
  );
}

export function Cover() {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="bg-hero-violet relative mx-auto flex max-w-4xl items-center justify-center overflow-hidden rounded-3xl px-6 py-16 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.5)] md:py-24">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.img
          {...fadeUp}
          src={conectariaIcon}
          alt="Conectaria"
          className="h-24 w-24 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:h-28 md:w-28"
        />
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-display text-5xl font-extrabold tracking-tight text-white md:text-7xl"
        >
          Conectaria
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.18 }}
          className="text-balance text-lg text-white/75 md:text-2xl"
        >
          Conectando a sua empresa aos talentos e oportunidades!
        </motion.p>
        <motion.span
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.26 }}
          className="glass-aqua-dark mt-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
        >
          Processo Seletivo · Recrutamento & Seleção
        </motion.span>
      </div>
      </div>
    </div>
  );
}

export function QuemSomos() {
  const creds = [
    { icon: UserSearch, title: "Recrutador", text: "Consultor de RH atuando há mais de 5 anos no mercado." },
    { icon: Linkedin, title: "Especialista em LinkedIn", text: "Referência em marca pessoal e branding profissional." },
    { icon: Mic, title: "Palestrante", text: "Treinamentos e palestras corporativas por todo o Brasil." },
    { icon: Award, title: "Mentor de carreira", text: "Já ajudou milhares de profissionais a conquistarem vagas." },
  ];

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Quem te acompanha nesse processo</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Quem nós <span className="font-light text-aqua">somos?</span>
          </motion.h2>
        </div>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[0.8fr_1.15fr]">
          <motion.div {...fadeUp} className="relative mx-auto w-full max-w-[200px] md:max-w-xs">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-aqua/30 to-aqua-deep/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-aqua/20">
              <img src={joaoPedro} alt="João Pedro Bradley" className="absolute inset-0 h-full w-full object-cover" />
              <div className="glass-aqua-dark absolute bottom-2 left-2 right-2 rounded-xl px-3 py-2">
                <div className="text-sm font-semibold text-white">João Pedro Bradley</div>
                <div className="text-[11px] text-white/60">Founder · Conectaria</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              Como consultoria de RH, nosso principal objetivo é conectar você aos melhores talentos
              do mercado. Trabalhamos para{" "}
              <strong className="text-ink">
                economizar seu tempo, seu dinheiro e reduzir ao máximo o turnover
              </strong>
              .
            </p>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {creds.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink/15 bg-white/70">
                    <Icon className="h-4 w-4 text-aqua-deep" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-sm font-bold leading-tight tracking-tight text-ink">{title}</h4>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-aqua/15 bg-aqua/5 p-4">
              <div className="w-16 shrink-0">
                <BrazilMap />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Atendimento em todo o Brasil</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink/60">
                  Candidatos, empresas e mentorados espalhados por diferentes estados, conectados
                  por uma rede de recrutamento 100% remota.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function EmpresasParceiras() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Provas de confiança</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Empresas onde já <span className="font-light text-aqua">atuamos</span>
          </motion.h2>
          <motion.p {...fadeUp} className="mt-2 text-sm text-muted-foreground">
            Serviços de recrutamento realizados para empresas de diferentes portes e segmentos.
          </motion.p>
        </div>

        <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-5 md:p-7">
          <div className="grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 md:grid-cols-8">
            {PARTNER_LOGOS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="h-8 w-full object-contain opacity-90 transition hover:scale-105 hover:opacity-100 md:h-10"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function OProblema() {
  const stats = [
    { icon: Users, value: "5 milhões", label: "de pessoas buscando emprego todos os dias" },
    { icon: Clock, value: "40 dias", label: "em média para uma empresa fechar uma vaga" },
    { icon: TrendingDown, value: "84%", label: "das empresas têm dificuldade em contratar" },
  ];
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div {...fadeUp}>
          <Eyebrow>O cenário hoje</Eyebrow>
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
        >
          Existem talentos <span className="font-light text-aqua">esperando por você</span>
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.35)]"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-aqua/10">
                <Icon className="h-5 w-5 text-aqua-deep" />
              </div>
              <p className="mt-3 font-display text-2xl font-extrabold text-ink">{value}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="btn-aqua mt-6 rounded-2xl px-6 py-5 text-sm font-semibold md:text-base">
          É exatamente esse tempo que queremos economizar, para que você possa focar no que
          realmente precisa enquanto encontramos os talentos para você.
        </motion.div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  const steps = [
    { icon: Flag, title: "Alinhamento de perfil", desc: "Reunião com diretoria/RH para entender o perfil e estruturar a vaga." },
    { icon: Megaphone, title: "Divulgação e prospecção", desc: "Divulgação em nossos canais e busca ativa de candidatos no mercado." },
    { icon: MessagesSquare, title: "Entrevistas", desc: "Entrevistas com os principais candidatos filtrados." },
    { icon: ClipboardCheck, title: "Entrevista com o gestor", desc: "Documento de análise para a aprovação final do gestor da vaga." },
    { icon: CheckCircle2, title: "Finalização", desc: "Escolha do candidato e acompanhamento dos próximos passos." },
  ];
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>O passo a passo</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Como o processo vai <span className="font-light text-aqua">funcionar?</span>
          </motion.h2>
          <motion.p {...fadeUp} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Serão 5 etapas que podem ser personalizadas de acordo com a demanda da empresa,
            desde o primeiro alinhamento de perfil até a finalização do processo. Você acompanha
            cada uma delas com transparência, sabendo exatamente em qual fase o processo está e
            o que esperar do próximo passo.
          </motion.p>
        </div>

        <div className="relative mt-8 space-y-4">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-aqua/20" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="relative flex items-start gap-4"
            >
              <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-aqua/30 bg-white text-aqua-deep shadow-sm">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 rounded-2xl border border-ink/10 bg-white/70 px-4 py-3">
                <p className="text-sm font-bold text-ink">{title}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mx-auto mt-6 w-fit rounded-full bg-aqua/10 px-5 py-2 text-sm font-semibold text-aqua-deep">
          Tempo médio de processo: 14 a 21 dias
        </motion.div>
      </div>
    </section>
  );
}

export function Garantias() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Compromisso com você</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Garantias
          </motion.h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <motion.div {...fadeUp} className="glass-aqua rounded-2xl p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua-deep text-white">
              <RefreshCcw className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Reposição em até 3 meses</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Se o colaborador contratado se desligar dentro dos primeiros 3 meses após a
              contratação, fazemos a reposição sem custo adicional.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="glass-aqua rounded-2xl p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua-deep text-white">
              <Radar className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Acompanhamento do período de experiência</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Avaliações estruturadas aos 45 e 60 dias do colaborador contratado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Nosso diferencial</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            O que nos <span className="font-light text-aqua">diferencia</span>
          </motion.h2>
        </div>

        <div className="mt-8 grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div {...fadeUp}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua/10">
              <MessageSquareHeart className="h-5 w-5 text-aqua-deep" />
            </div>
            <p className="mt-3 text-base font-bold text-ink">Cuidado com o candidato</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A gente não entrega só uma lista de nomes para a sua empresa escolher. Acompanhamos
              cada candidato, damos direcionamento e entregamos materiais de apoio para eles
              chegarem melhor preparados nas entrevistas. Esse cuidado é o que faz muitas empresas
              virarem fãs do nosso processo, e é o que você vê ao lado, em mensagens reais de
              pessoas que passaram pela nossa seleção e fizeram questão de agradecer pela
              experiência, mesmo quando não foram aprovadas.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="space-y-3">
            <QuoteCard
              quote="Boa tarde João Pedro! Foi uma honra poder participar dessa etapa! Só tenho que agradecer pela experiência!"
              author="Candidato do processo seletivo"
            />
            <QuoteCard
              quote="Primeiramente quero agradecer por me permitir participar dessa etapa. Quero ser como você, que entrevista leve, dinâmica e descontraída."
              author="Candidato do processo seletivo"
            />
          </motion.div>
        </div>

        <div className="mt-10 grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <img
              src={hubScreenshot}
              alt="Hub de vagas da Conectaria"
              className="rounded-2xl border border-ink/10 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.4)]"
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="order-1 md:order-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua/10">
              <Users className="h-5 w-5 text-aqua-deep" />
            </div>
            <p className="mt-3 text-base font-bold text-ink">+9 mil contatos e mentorados</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Além da nossa expertise em recrutamento, temos uma rede ativa de mais de 9 mil
              contatos e mentorados espalhados pelo Brasil, pronta para ser acionada assim que
              abrimos uma vaga. Mantemos um hub próprio de oportunidades, onde essas vagas ficam
              visíveis para toda essa rede, o que aumenta muito a chance de encontrar o candidato
              certo em menos tempo.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.35)]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10">
            <Handshake className="h-5 w-5 text-aqua-deep" />
          </div>
          <div>
            <p className="text-sm font-bold text-ink">Você vira referência</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Como representamos a sua empresa durante todo o processo, os candidatos associam a
              experiência positiva à sua marca, mesmo aqueles que não são aprovados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CasesSucesso() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>Resultados reais</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Cases de <span className="font-light text-aqua">sucesso</span>
          </motion.h2>
          <motion.p {...fadeUp} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Alguns resultados recentes de processos que conduzimos, mostrando o tempo real de
            entrega e a economia gerada para a empresa contratante.
          </motion.p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <motion.div {...fadeUp}>
            <img
              src={caseXinguara}
              alt="Case Frigorífico Xinguara"
              className="rounded-2xl shadow-[0_24px_60px_-24px_rgb(0_0_0/0.4)]"
            />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para o <strong className="text-ink">Frigorífico Xinguara</strong>, um dos maiores
              frigoríficos do Brasil, com operação de importação e exportação para a China,
              conduzimos um processo seletivo que gerou uma economia de R$ 50 mil em apenas 7
              dias, sem deixar nenhum candidato sem retorno.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <img
              src={caseFutebol}
              alt="Case time de futebol"
              className="rounded-2xl shadow-[0_24px_60px_-24px_rgb(0_0_0/0.4)]"
            />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para um <strong className="text-ink">time de futebol</strong>, encontramos o
              candidato perfeito em menos de duas semanas, trazendo uma economia de R$ 7.500 para
              o clube em relação ao processo que eles fariam sozinhos.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <motion.div {...fadeUp} className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-white">
              <img src={adaptaLogo} alt="Adapta" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-base font-bold text-ink">Adapta</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Uma das maiores empresas de inteligência artificial do Brasil. Apoiamos a
                contratação de profissionais para as áreas de programação e consultoria de IA,
                incluindo posições técnicas de alta exigência.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-white">
              <img src={jahAcaiLogo} alt="JAH Açaí" className="h-full w-full object-contain p-1.5" />
            </div>
            <div>
              <p className="text-base font-bold text-ink">JAH Açaí</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Uma das maiores redes de açaí do Brasil, em fase de expansão acelerada. Estamos
                conduzindo diversos processos para eles, de vagas comerciais a posições de gestão
                de pessoas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export function VagaAtual() {
  const info = [
    { icon: Briefcase, label: "Modelo de contratação", value: "PJ (Pessoa Jurídica)" },
    { icon: Sparkles, label: "Remuneração", value: "R$ 10.000,00 mensais" },
    { icon: Globe, label: "Local", value: "São Paulo, modelo híbrido, remoto ou presencial, com disponibilidade para viagens" },
  ];

  const responsabilidades = [
    "Apoiar ativamente os sócios no lançamento oficial da marca, dos produtos e dos serviços no mercado",
    "Criar estratégias e executar campanhas para gerar buzz, captar leads qualificados e impulsionar as vendas B2B e B2C",
    "Fazer a gestão diária de parceiros estratégicos, como agências de publicidade, marketing digital, assessorias de imprensa e produtoras de eventos",
    "Desenvolver, redigir e diagramar apresentações institucionais, pitch decks e materiais de apoio para os sócios",
    "Utilizar ferramentas de inteligência artificial para otimizar a produção de conteúdo e ganhar escala nas operações diárias",
  ];

  const perfil = [
    "Ensino superior completo em Comunicação Social, Marketing, Publicidade e Propaganda ou Jornalismo",
    "Experiência prévia em marketing, preferencialmente nos mercados de seguros, finanças ou fintechs/insurtechs",
    "Perfil ambicioso, resiliente, com autogestão e facilidade para transitar entre estratégia e execução",
    "Domínio de ferramentas de apresentação (PowerPoint, Keynote ou Canva) e de IA generativa (ChatGPT, Claude e similares)",
    "Conhecimento sólido em inbound marketing, geração de leads e métricas de conversão",
  ];

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <motion.div {...fadeUp}>
            <Eyebrow>A vaga em aberto</Eyebrow>
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Coordenador(a) de <span className="font-light text-aqua">Marketing</span>
          </motion.h2>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {info.map(({ icon: Icon, label, value }, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
              <Icon className="h-4 w-4 text-aqua-deep" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/45">{label}</p>
              <p className="mt-0.5 text-sm font-bold leading-snug text-ink">{value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-6 rounded-2xl border border-ink/10 bg-white/70 p-5">
          <p className="text-sm font-bold text-ink">Sobre o desafio</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Uma nova insurtech em fase de pré-lançamento, com grande potencial de crescimento e
            forte capitalização, busca um(a) Coordenador(a) de Marketing para ser o braço direito
            dos sócios e da futura diretoria executiva. A pessoa será peça-chave no lançamento da
            marca, na introdução de produtos inovadores e na estruturação da máquina de geração de
            negócios da empresa.
          </p>
        </motion.div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-2xl border border-ink/10 bg-white/70 p-5">
            <p className="text-sm font-bold text-ink">Responsabilidades</p>
            <ul className="mt-2 space-y-1.5">
              {responsabilidades.map((r, i) => (
                <li key={i} className="flex gap-2 text-xs leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="rounded-2xl border border-ink/10 bg-white/70 p-5">
            <p className="text-sm font-bold text-ink">Perfil buscado</p>
            <ul className="mt-2 space-y-1.5">
              {perfil.map((p, i) => (
                <li key={i} className="flex gap-2 text-xs leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="btn-aqua mt-6 rounded-2xl px-6 py-5 text-sm leading-relaxed">
          Essa é uma oportunidade rara de participar da construção e do lançamento de uma empresa
          disruptiva desde o início, trabalhando diretamente com sócios experientes e influentes no
          mercado, com autonomia para propor ideias, testar novas tecnologias e liderar iniciativas
          que impactam diretamente o crescimento do negócio.
        </motion.div>
      </div>
    </section>
  );
}

export function Investimento() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div {...fadeUp}>
          <Eyebrow>Investimento</Eyebrow>
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
        >
          Como funciona o valor
        </motion.h2>

        <motion.div {...fadeUp} className="btn-aqua relative mt-8 overflow-hidden rounded-3xl px-8 py-10">
          <Sparkles className="absolute right-5 top-5 h-6 w-6 text-white/30" />
          <p className="font-display text-3xl font-extrabold md:text-4xl">100% do primeiro salário da vaga</p>
          <p className="mt-3 text-sm text-white/85">
            Para essa vaga, o valor é pago integralmente no início do processo, logo no
            alinhamento inicial com a Conectaria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Fechamento() {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="bg-cta-violet relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.img
          {...fadeUp}
          src={conectariaStacked}
          alt="Conectaria"
          className="mx-auto h-20 object-contain md:h-24"
        />
        <motion.h2
          {...fadeUp}
          className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
        >
          Vamos juntos atrás dos melhores talentos para a sua empresa!
        </motion.h2>

        <motion.div
          {...fadeUp}
          className="glass-aqua mx-auto mt-8 flex max-w-sm flex-col gap-3 rounded-2xl p-6 text-left"
        >
          <p className="text-sm font-bold text-ink">João Pedro Bradley</p>
          <p className="text-xs text-muted-foreground">Mentor de carreira, recrutador e especialista em LinkedIn</p>
          <span className="flex items-center gap-2 text-sm text-ink">
            <Linkedin className="h-4 w-4 text-aqua-deep" /> Joao Pedro Bradley
          </span>
          <span className="flex items-center gap-2 text-sm text-ink">
            <Instagram className="h-4 w-4 text-aqua-deep" /> @JoaoPedroBradley
          </span>
          <a href="mailto:joaopedrobradley@conectaria.com.br" className="flex items-center gap-2 text-sm text-ink hover:underline">
            <Mail className="h-4 w-4 text-aqua-deep" /> joaopedrobradley@conectaria.com.br
          </a>
          <a href="https://www.conectaria.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-ink hover:underline">
            <Globe className="h-4 w-4 text-aqua-deep" /> www.conectaria.com.br
          </a>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
