import { useState } from "react";
import { CaseModal } from "@/cases/CaseModal";
import { CaseCard } from "@/cases/CaseCard";
import { cases } from "@/cases/casesData";
import { useCaseFilters } from "@/cases/CaseFilters";

export default function App() {
  const [openCase, setOpenCase] = useState<string | null>(null);
  const { filtered, panel } = useCaseFilters();
  const activeCase = cases.find((c) => c.name === openCase)?.details;

  return (
    <main className="bg-cta-violet">
      <section className="px-4 pb-10 pt-14 md:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
            Feedbacks reais
          </p>
          <h1 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Histórias de sucesso dos nossos{" "}
            <span className="font-light text-aqua-bright">mentorados</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-ink/65">
            Temos mais de 100 feedbacks de mentorados. Então, caso não encontre o seu, fale conosco que enviaremos
            diretamente para você!
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          {panel}

          <p className="mt-6 text-sm font-semibold text-ink/55">
            {filtered.length} {filtered.length === 1 ? "case encontrado" : "cases encontrados"}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {filtered.map((c) => (
                <CaseCard key={c.name} data={c} onOpen={() => setOpenCase(c.name)} showTags />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-3xl border border-dashed border-ink/15 p-12 text-center text-ink/55">
              Nenhum case com essa combinação de filtros. Tente ajustar sua seleção.
            </div>
          )}
        </div>
      </section>

      {activeCase && (
        <CaseModal open={openCase !== null} onOpenChange={(o: boolean) => !o && setOpenCase(null)} data={activeCase} />
      )}
    </main>
  );
}
