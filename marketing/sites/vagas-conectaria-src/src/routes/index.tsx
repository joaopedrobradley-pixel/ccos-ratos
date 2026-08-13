import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/vagas/JobCard";
import { JobDetailDialog } from "@/components/vagas/JobDetailDialog";
import { ApplyDialog } from "@/components/vagas/ApplyDialog";
import { PartnersSection } from "@/components/vagas/PartnersSection";
import { JOBS, type Job } from "@/data/jobs";
import logoWordmark from "@/assets/logo/conectaria-wordmark.png";
import logoStacked from "@/assets/logo/conectaria-stacked.png";
import { Search } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagas — Conectaria" },
      {
        name: "description",
        content: "Vagas de empresas parceiras da Conectaria, direto para mentorados e clientes.",
      },
    ],
  }),
  component: VagasPage,
});

const CATEGORIES = ["Todas", "Marketing", "Comercial", "RH", "Educação", "Logística"] as const;

function VagasPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Todas");
  const [detailJob, setDetailJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(
    () => (category === "Todas" ? JOBS : JOBS.filter((j) => j.category === category)),
    [category],
  );

  const handleApply = (job: Job) => setApplyJob(job);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <img src={logoWordmark} alt="Conectaria" className="h-7 object-contain" />
          <a href="#empresas" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Empresas parceiras
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 text-center md:pt-20">
        <img src={logoStacked} alt="Conectaria" className="mx-auto h-24 object-contain md:h-28" />
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl">
          Vagas conectadas a você
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Um hub de oportunidades das empresas parceiras da Conectaria — feito para os nossos
          mentorados e clientes darem o próximo passo.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        {filteredJobs.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
            <Search className="h-6 w-6" />
            <p>Nenhuma vaga nessa categoria no momento.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onSeeMore={() => setDetailJob(job)}
                onApply={() => handleApply(job)}
              />
            ))}
          </div>
        )}
      </section>

      <div className="border-t border-border">
        <PartnersSection />
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Conectaria — conectando sua empresa aos talentos e oportunidades.
      </footer>

      <JobDetailDialog
        job={detailJob}
        open={!!detailJob}
        onOpenChange={(o) => !o && setDetailJob(null)}
        onApply={() => {
          if (detailJob) handleApply(detailJob);
          setDetailJob(null);
        }}
      />

      <ApplyDialog job={applyJob} open={!!applyJob} onOpenChange={(o) => !o && setApplyJob(null)} />
    </div>
  );
}
