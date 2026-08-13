import { motion } from "framer-motion";
import { MessageSquareText, Youtube } from "lucide-react";
import type { CaseItem } from "@/components/cases/casesData";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

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
    <motion.article {...fadeUp} className="glass-aqua flex flex-col overflow-hidden rounded-3xl">
      <div className="flex items-start gap-4 p-8 pb-5">
        {c.photo ? (
          <img
            src={c.photo}
            alt={c.name}
            className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-violet/30"
          />
        ) : (
          <Initials name={c.name} className="h-14 w-14 text-lg" />
        )}
        <div>
          <h3 className="text-xl font-bold">{c.name}</h3>
          <p className="text-sm font-medium text-violet">{c.role}</p>
        </div>
      </div>

      {showTags && (
        <div className="flex flex-wrap gap-2 px-8 pb-5">
          {[c.market, c.area, c.timeBucket, `${c.companySize.join(" e ")} empresas`].map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[11px] font-semibold text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {logos.length > 0 && (
        <div className="mx-8 mb-5 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-ink/10 bg-white/70 px-5 py-4">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-10 w-auto max-w-[140px] object-contain"
            />
          ))}
        </div>
      )}


      <p className="px-8 pb-6 leading-relaxed text-ink/70">{c.story}</p>

      <div className="mt-auto grid grid-cols-2 border-t border-ink/10">
        <div className="border-r border-ink/10 p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink/45">Antes</div>
          <div className="mt-2 text-sm font-medium" style={{ color: "#ef6b6b" }}>
            {c.before}
          </div>
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink/45">Depois</div>
          <div className="mt-2 text-sm font-semibold" style={{ color: "#15803d" }}>
            {c.after}
          </div>
        </div>
      </div>

      {(c.details || c.videoUrl) && (
        <div className="space-y-3 border-t border-ink/10 px-8 py-5">
          {c.details && (
            <button
              type="button"
              onClick={onOpen}
              className="btn-green inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold"
            >
              <MessageSquareText className="h-4 w-4" />
              Ver case completo
            </button>
          )}
          {c.videoUrl && (
            <a
              href={c.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff0000] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d90000]"
            >
              <Youtube className="h-4 w-4" />
              Ver vídeo de depoimento
            </a>
          )}
        </div>
      )}

    </motion.article>
  );
}
