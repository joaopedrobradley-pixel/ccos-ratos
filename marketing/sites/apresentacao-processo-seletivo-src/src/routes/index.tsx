import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Cover,
  QuemSomos,
  EmpresasParceiras,
  OProblema,
  ComoFunciona,
  Garantias,
  Diferenciais,
  CasesSucesso,
  VagaAtual,
  Investimento,
  Fechamento,
} from "@/components/apresentacao/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Processo Seletivo · Conectaria" },
      {
        name: "description",
        content: "Apresentação do processo de recrutamento e seleção da Conectaria para empresas parceiras.",
      },
    ],
  }),
  component: PresentationPage,
});

type SlideDef = { id: string; label: string; render: () => React.ReactNode };

const SLIDES: SlideDef[] = [
  { id: "capa", label: "Conectaria", render: () => <Cover /> },
  { id: "quem-somos", label: "Quem somos", render: () => <QuemSomos /> },
  { id: "empresas", label: "Empresas parceiras", render: () => <EmpresasParceiras /> },
  { id: "problema", label: "O cenário hoje", render: () => <OProblema /> },
  { id: "processo", label: "Como funciona", render: () => <ComoFunciona /> },
  { id: "garantias", label: "Garantias", render: () => <Garantias /> },
  { id: "diferenciais", label: "Diferenciais", render: () => <Diferenciais /> },
  { id: "cases", label: "Cases de sucesso", render: () => <CasesSucesso /> },
  { id: "vaga", label: "A vaga em aberto", render: () => <VagaAtual /> },
  { id: "investimento", label: "Investimento", render: () => <Investimento /> },
  { id: "fechamento", label: "Vamos juntos", render: () => <Fechamento /> },
];

function PresentationPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setIndex((i) => Math.min(SLIDES.length - 1, Math.max(0, i + delta)));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = SLIDES[index];
  const isFirst = index === 0;
  const isLast = index === SLIDES.length - 1;

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-paper text-ink">
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="no-scrollbar h-full w-full overflow-y-auto"
          >
            <div className="flex min-h-full flex-col justify-center py-10">{slide.render()}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border bg-paper/95 px-6 py-3 backdrop-blur">
        <button
          onClick={() => go(-1)}
          disabled={isFirst}
          className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar
        </button>

        <div className="hidden gap-1.5 sm:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-aqua" : "w-1.5 bg-border"
              }`}
              aria-label={s.label}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={isLast}
          className="flex items-center gap-1 rounded-full bg-aqua px-4 py-2 text-sm font-medium text-white disabled:opacity-30"
        >
          Avançar <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
