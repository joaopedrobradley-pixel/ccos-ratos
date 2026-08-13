import { useState } from "react";
import { motion } from "framer-motion";
import { CaseModal } from "@/components/cases/CaseModal";
import { CaseCard } from "@/components/cases/CaseCard";
import { cases } from "@/components/cases/casesData";
import { useCaseFilters } from "@/components/cases/CaseFilters";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

type CasesSectionProps = {
  eyebrow?: string;
  title?: string;
  italic?: string;
  className?: string;
  showFilters?: boolean;
};

export function CasesSection({
  eyebrow = "Resultados que falam por nós",
  title = "Quem já passou pelo",
  italic = "Código",
  className = "bg-card px-4 py-24 md:py-32",
  showFilters = false,
}: CasesSectionProps = {}) {
  const [openCase, setOpenCase] = useState<string | null>(null);
  const activeCase = cases.find((c) => c.name === openCase)?.details;
  const { filtered, panel } = useCaseFilters();
  const list = showFilters ? filtered : cases;

  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.p {...fadeUp} className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            {...fadeUp}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl"
          >
            {title} {italic && <span className="font-light text-aqua-bright">{italic}</span>}
          </motion.h2>
        </div>

        {showFilters && (
          <div className="mt-12">
            {panel}
            <p className="mt-6 text-sm font-semibold text-ink/55">
              {list.length} {list.length === 1 ? "case encontrado" : "cases encontrados"}
            </p>
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((c) => (
            <CaseCard key={c.name} data={c} onOpen={() => setOpenCase(c.name)} showTags={showFilters} />
          ))}
        </div>

        {showFilters && list.length === 0 && (
          <div className="mt-6 rounded-3xl border border-dashed border-ink/15 p-16 text-center text-ink/55">
            Nenhum case com essa combinação de filtros. Tente ajustar sua seleção.
          </div>
        )}
      </div>

      {activeCase && (
        <CaseModal open={openCase !== null} onOpenChange={(o: boolean) => !o && setOpenCase(null)} data={activeCase} />
      )}
    </section>
  );
}
