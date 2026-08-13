import { useState } from "react";
import { Filter, X } from "lucide-react";
import { cases } from "@/components/cases/casesData";

export const ALL = "Todos";

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">{label}</p>
      <div className="flex flex-wrap gap-2">
        {[ALL, ...options].map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={
                active
                  ? "btn-green rounded-full px-4 py-2 text-xs font-bold"
                  : "rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold text-ink/65 transition hover:border-ink/25 hover:text-ink"
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function useCaseFilters() {
  const [salary, setSalary] = useState(ALL);

  const filtered = cases.filter((c) => salary === ALL || c.salary === salary);

  const hasFilters = salary !== ALL;

  const reset = () => {
    setSalary(ALL);
  };

  const panel = (
    <div className="glass-aqua rounded-3xl p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-ink">
          <Filter className="h-4 w-4 text-violet" />
          Filtrar feedbacks
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/55 transition hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
            Limpar filtros
          </button>
        )}
      </div>

      <FilterGroup
        label="Faixa salarial"
        options={["Até R$ 10 mil", "Acima de R$ 10 mil"]}
        value={salary}
        onChange={setSalary}
      />
    </div>
  );

  return { filtered, panel, hasFilters, reset };
}
