import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Building2 } from "lucide-react";
import type { Job } from "@/data/jobs";
import conectariaBadge from "@/assets/logo/conectaria-badge.png";

export function JobCard({
  job,
  onSeeMore,
  onApply,
}: {
  job: Job;
  onSeeMore: () => void;
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
          {job.companyLogo ? (
            <img src={job.companyLogo} alt={job.company} className="h-full w-full object-contain p-1" />
          ) : (
            <Building2 className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{job.company}</p>
          <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" /> {job.location}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="w-fit">
          {job.category}
        </Badge>
        {job.recruitedByConectaria && (
          <span className="flex items-center gap-1 rounded-full bg-primary/10 py-0.5 pl-0.5 pr-2 text-[11px] font-semibold text-primary">
            <img src={conectariaBadge} alt="" className="h-4 w-4 rounded-full" /> Vaga trabalhada pela Conectaria
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-bold leading-tight text-foreground">{job.title}</h3>

      <span className="mt-2 flex w-fit items-center gap-1 text-xs text-muted-foreground">
        <Briefcase className="h-3.5 w-3.5" /> {job.type || "—"}
      </span>

      <p className="mt-3 text-sm text-muted-foreground">{job.summary}</p>

      <div className="mt-5 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={onSeeMore}>
          Ver mais
        </Button>
        <Button size="sm" className="flex-1" onClick={onApply}>
          Candidatar-se
        </Button>
      </div>
    </div>
  );
}
