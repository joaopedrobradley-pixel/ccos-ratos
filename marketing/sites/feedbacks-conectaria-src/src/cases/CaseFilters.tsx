import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { cases, type CompanySize } from "@/cases/casesData";

export const ALL = "Todos";

function uniq(values: string[]) {
  return Array.from(new Set(values));
}

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
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {[ALL, ...options].map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={
                active
                  ? "btn-green rounded-full px-3 py-1.5 text-[11px] font-bold"
                  : "rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-ink/65 transition hover:border-ink/25 hover:text-ink"
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
  const [market, setMarket] = useState(ALL);
  const [area, setArea] = useState(ALL);
  const [time, setTime] = useState(ALL);
  const [size, setSize] = useState(ALL);
  const [salary, setSalary] = useState(ALL);

  const areas = useMemo(() => uniq(cases.map((c) => c.area)).sort(), []);
  const timeOrder = ["Menos de 1 mês", "1 a 2 meses", "2 a 3 meses"];
  const times = useMemo(() => timeOrder.filter((t) => cases.some((c) => c.timeBucket === t)), []);
  const sizes = ["Pequenas", "Médias", "Grandes"].filter((s) =>
    cases.some((c) => c.companySize.includes(s as CompanySize)),
  );

  const filtered = cases.filter((c) => {
    const marketOk =
      market === ALL ||
      c.market === market ||
      (market !== "Nacional e Internacional" && c.market === "Nacional e Internacional");
    return (
      marketOk &&
      (area === ALL || c.area === area) &&
      (time === ALL || c.timeBucket === time) &&
      (size === ALL || c.companySize.includes(size as CompanySize)) &&
      (salary === ALL || c.salary === salary)
    );
  });

  const hasFilters = [market, area, time, size, salary].some((v) => v !== ALL);

  const reset = () => {
    setMarket(ALL);
    setArea(ALL);
    setTime(ALL);
    setSize(ALL);
    setSalary(ALL);
  };

  const panel = (
    <div className="glass-aqua rounded-3xl p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
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

      <div className="grid gap-4 md:grid-cols-2">
        <FilterGroup
          label="Mercado"
          options={["Nacional", "Internacional", "Nacional e Internacional"]}
          value={market}
          onChange={setMarket}
        />
        <FilterGroup label="Área de trabalho" options={areas} value={area} onChange={setArea} />
        <FilterGroup label="Em quanto tempo" options={times} value={time} onChange={setTime} />
        <FilterGroup label="Tamanho da empresa" options={sizes} value={size} onChange={setSize} />
        <FilterGroup
          label="Faixa salarial"
          options={["Até R$ 10 mil", "Acima de R$ 10 mil"]}
          value={salary}
          onChange={setSalary}
        />
      </div>
    </div>
  );

  return { filtered, panel, hasFilters, reset };
}
