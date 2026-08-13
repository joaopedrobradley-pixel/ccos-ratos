import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Building2 } from "lucide-react";
import type { Job } from "@/data/jobs";
import conectariaBadge from "@/assets/logo/conectaria-badge.png";

export function JobDetailDialog({
  job,
  open,
  onOpenChange,
  onApply,
}: {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: () => void;
}) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-lg overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
              {job.companyLogo ? (
                <img src={job.companyLogo} alt={job.company} className="h-full w-full object-contain p-1" />
              ) : (
                <Building2 className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div>
              <DialogDescription className="text-sm font-medium text-foreground">{job.company}</DialogDescription>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{job.category}</Badge>
                {job.recruitedByConectaria && (
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 py-0.5 pl-0.5 pr-2 text-[11px] font-semibold text-primary">
                    <img src={conectariaBadge} alt="" className="h-4 w-4 rounded-full" /> Vaga trabalhada pela Conectaria
                  </span>
                )}
              </div>
            </div>
          </div>
          <DialogTitle className="mt-2 text-2xl">{job.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" /> {job.type || "—"}
          </span>
        </div>

        <div className="space-y-4">
          {job.sections.map((s, i) => (
            <div key={i}>
              <p className="text-sm font-bold text-foreground">{s.title}</p>
              {s.text && <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>}
              {s.bullets && (
                <ul className="mt-1.5 space-y-1.5 text-sm text-muted-foreground">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <Button onClick={onApply} className="w-full">
          Quero me candidatar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
