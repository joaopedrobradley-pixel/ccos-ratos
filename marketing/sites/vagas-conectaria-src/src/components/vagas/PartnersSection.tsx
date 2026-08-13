import { PARTNERS } from "@/data/partners";
import { ExternalLink } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="empresas" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Empresas parceiras
        </h2>
        <p className="mt-3 text-muted-foreground">
          Empresas que já contrataram através da Conectaria e confiam no nosso processo de
          recrutamento.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {PARTNERS.map((p) => (
          <div
            key={p.id}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center"
          >
            <img src={p.logo} alt={p.name} className="h-10 max-w-full object-contain" />
            <div>
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
            </div>
            {p.site && (
              <a
                href={p.site}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Ver vagas no site <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
