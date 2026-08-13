import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

export type CaseLogo = { src: string; alt: string };
export type CaseTestimonial = { src: string; alt: string };

export type CaseDetails = {
  name: string;
  role: string;
  headline: string;
  photo?: string;
  paragraphs: string[];
  companies?: { label: string; logos: CaseLogo[] };
  recruiters?: { label: string; logos: CaseLogo[] };
  testimonials?: { label: string; items: CaseTestimonial[] };
  highlights?: { label: string; value: string }[];
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: CaseDetails;
};

export function CaseModal({ open, onOpenChange, data }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[92vh] max-w-3xl overflow-hidden rounded-3xl border-ink/10 bg-paper p-0 [&>button.absolute]:hidden"
      >
        <VisuallyHidden>
          <DialogTitle>{data.name} — Case completo</DialogTitle>
        </VisuallyHidden>

        <DialogClose
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/25 text-white/90 backdrop-blur-sm transition hover:bg-black/40 hover:text-white focus:outline-none"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </DialogClose>

        <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
        {/* Hero */}
        <div className="relative overflow-hidden bg-hero-violet px-8 pt-10 pb-8 md:px-12 md:pt-14 md:pb-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-aqua-bright/40 to-aqua-deep/30 blur-md" />
              {data.photo ? (
                <img
                  src={data.photo}
                  alt={data.name}
                  className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white/30 md:h-28 md:w-28"
                />
              ) : (
                <div className="relative grid h-24 w-24 place-items-center rounded-full bg-white/10 text-2xl font-bold text-white ring-2 ring-white/30 md:h-28 md:w-28">
                  {data.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-aqua-bright">
                Case completo
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                {data.name}
              </h2>
              <p className="mt-1 text-sm text-white/70">{data.role}</p>
            </div>
          </div>

          <p className="mt-7 max-w-2xl text-balance text-lg leading-snug text-white/90 md:text-xl">
            {data.headline}
          </p>

          {data.highlights && data.highlights.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {data.highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass-aqua-dark rounded-2xl p-4"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-aqua-bright">
                    {h.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="space-y-10 px-8 py-10 md:px-12 md:py-12">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink/80">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {data.companies && data.companies.logos.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                {data.companies.label}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
                {data.companies.logos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto object-contain transition md:h-12"
                  />
                ))}
              </div>
            </div>
          )}

          {data.recruiters && data.recruiters.logos.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                {data.recruiters.label}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
                {data.recruiters.logos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto object-contain transition md:h-10"
                  />
                ))}
              </div>
            </div>
          )}


          {data.testimonials && data.testimonials.items.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                {data.testimonials.label}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {data.testimonials.items.map((t) => (
                  <div
                    key={t.alt}
                    className="overflow-hidden rounded-2xl border border-ink/10 bg-card"
                  >
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="block h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
