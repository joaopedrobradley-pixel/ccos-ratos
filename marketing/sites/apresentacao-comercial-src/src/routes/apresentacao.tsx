import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CasesSection } from "@/components/cases/CasesSection";
import {
  MentorSlide,
  MethodPath,
  ScarcityAlert,
  Deliverables,
  InvestmentPlan,
} from "@/components/apresentacao/slides";
import {
  Hero,
  Proof,
  Journey,
  RoiTable,
} from "./index";



export const Route = createFileRoute("/apresentacao")({
  head: () => ({
    meta: [
      { title: "Apresentação Comercial — Código da Contratação Imediata" },
      {
        name: "description",
        content:
          "Apresentação comercial em formato de slides do Código da Contratação Imediata: método, provas, cases e investimento.",
      },
      { property: "og:title", content: "Apresentação Comercial — Código da Contratação Imediata" },
      {
        property: "og:description",
        content:
          "Deck de vendas navegável seção por seção: método, provas, cases e investimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PresentationPage,
});

type SlideDef = { id: string; label: string; render: (ctx: Ctx) => React.ReactNode };
type Ctx = {
  investmentTier: "1" | "2";
  isInvestmentMenuOpen: boolean;
  toggleInvestmentMenu: () => void;
  selectInvestmentTier: (key: "1" | "2") => void;
};

const SLIDES: SlideDef[] = [
  {
    id: "hero",
    label: "Abertura",
    render: (c) => (
      <Hero
        investmentTier={c.investmentTier}
        isInvestmentMenuOpen={c.isInvestmentMenuOpen}
        onToggleInvestmentMenu={c.toggleInvestmentMenu}
        onSelectInvestmentTier={c.selectInvestmentTier}
        showPresentationHint={false}
      />
    ),
  },
  { id: "mentor", label: "Quem sou eu", render: () => <MentorSlide /> },
  { id: "provas", label: "Empresas e países", render: () => <Proof /> },
  { id: "metodo", label: "O método (3 fases)", render: () => <MethodPath /> },
  { id: "cases", label: "Feedbacks", render: () => <CasesSection showFilters /> },
  { id: "jornada", label: "Jornada", render: () => <Journey /> },
  { id: "roi", label: "Retorno sobre o investimento", render: () => <RoiTable /> },
  { id: "escassez", label: "Disponibilidade", render: () => <ScarcityAlert /> },
  { id: "entregaveis", label: "O que você recebe", render: () => <Deliverables /> },
  {
    id: "investimento-completa",
    label: "Investimento · Completa + Jobhunter",
    render: () => <InvestmentPlan plan="completa" />,
  },
  {
    id: "investimento-essencial",
    label: "Investimento · Mentoria essencial",
    render: () => <InvestmentPlan plan="essencial" />,
  },
  {
    id: "investimento-3-meses",
    label: "Investimento · Mentoria de 3 meses",
    render: () => <InvestmentPlan plan="tresmeses" />,
  },
  {
    id: "investimento-estruturacao",
    label: "Investimento · Estruturação",
    render: () => <InvestmentPlan plan="estruturacao" />,
  },
];

function PresentationPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [investmentTier, setInvestmentTier] = useState<"1" | "2">("1");
  const [isInvestmentMenuOpen, setIsInvestmentMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        setIndex((i) => {
          setDirection(1);
          return Math.min(SLIDES.length - 1, i + 1);
        });
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setIndex((i) => {
          setDirection(-1);
          return Math.max(0, i - 1);
        });
      } else if (e.key === "Home") {
        setDirection(-1);
        setIndex(0);
      } else if (e.key === "End") {
        setDirection(1);
        setIndex(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = SLIDES[index];
  const ctx: Ctx = {
    investmentTier,
    isInvestmentMenuOpen,
    toggleInvestmentMenu: () => setIsInvestmentMenuOpen((o) => !o),
    selectInvestmentTier: (key) => {
      setInvestmentTier(key);
      setIsInvestmentMenuOpen(false);
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-paper text-ink">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="no-scrollbar h-screen w-full overflow-y-auto overflow-x-hidden"
        >
          <div className="flex min-h-screen flex-col justify-center pb-6">
            {slide.render(ctx)}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
