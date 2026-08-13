import { MessageSquareText, Youtube } from "lucide-react";
import type { CaseItem } from "@/cases/casesData";

export function Initials({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div
      className={`grid flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-deep text-white ${className}`}
    >
      <span className="font-bold">
        {name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </span>
    </div>
  );
}

type Props = {
  data: CaseItem;
  onOpen: () => void;
  showTags?: boolean;
};

export function CaseCard({ data: c, onOpen, showTags = false }: Props) {
  const logos: { src: string; alt: string }[] = [];
  const push = (l: { src: string; alt: string }) => {
    if (!logos.some((x) => x.alt === l.alt)) logos.push(l);
  };
  if (c.hiredLogo) push(c.hiredLogo);
  const companies = c.details?.companies;
  if (companies && !companies.label.startsWith("Países")) companies.logos.forEach(push);
  c.details?.recruiters?.logos.forEach(push);

  return (
    <article className="glass-aqua flex flex-col overflow-hidden rounded-3xl">
      <div className="flex items-start gap-3 p-5 pb-4">
        {c.photo ? (
          <img
            src={c.photo}
            alt={c.name}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-violet/30"
          />
        ) : (
          <Initials name={c.name} className="h-12 w-12 text-base" />
        )}
        <div>
          <h3 className="text-base font-bold">{c.name}</h3>
          <p className="text-xs font-medium text-violet">{c.role}</p>
        </div>
      </div>

      {showTags && (
        <div className="flex flex-wrap gap-1.5 px-5 pb-4">
          {[c.market, c.area, c.timeBucket, `${c.companySize.join(" e ")} empresas`].map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-0.5 text-[10px] font-semibold text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {logos.length > 0 && (
        <div className="mx-5 mb-4 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border border-ink/10 bg-white/70 px-4 py-3">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto max-w-[110px] object-contain"
            />
          ))}
        </div>
      )}


      <p className="px-5 pb-4 text-sm leading-relaxed text-ink/70">{c.story}</p>

      <div className="mt-auto grid grid-cols-2 border-t border-ink/10">
        <div className="border-r border-ink/10 p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink/45">Antes</div>
          <div className="mt-1 text-xs font-medium" style={{ color: "#ef6b6b" }}>
            {c.before}
          </div>
        </div>
        <div className="p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink/45">Depois</div>
          <div className="mt-1 text-xs font-semibold" style={{ color: "#15803d" }}>
            {c.after}
          </div>
        </div>
      </div>

      {(c.details || c.videoUrl) && (
        <div className="space-y-2 border-t border-ink/10 px-5 py-4">
          {c.details && (
            <button
              type="button"
              onClick={onOpen}
              className="btn-green inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold"
            >
              <MessageSquareText className="h-3.5 w-3.5" />
              Ver case completo
            </button>
          )}
          {c.videoUrl && (
            <a
              href={c.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff0000] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#d90000]"
            >
              <Youtube className="h-3.5 w-3.5" />
              Ver vídeo de depoimento
            </a>
          )}
        </div>
      )}

    </article>
  );
}
