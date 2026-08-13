import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import type { ApplyOption, Job } from "@/data/jobs";

function optionHref(opt: ApplyOption) {
  if (opt.type === "whatsapp") {
    const digits = opt.value.replace(/\D/g, "");
    const text = opt.note ? `?text=${encodeURIComponent(opt.note)}` : "";
    return `https://wa.me/${digits}${text}`;
  }
  if (opt.type === "email") {
    const subject = opt.note ? `?subject=${encodeURIComponent(opt.note)}` : "";
    return `mailto:${opt.value}${subject}`;
  }
  return opt.value;
}

function optionIcon(type: ApplyOption["type"]) {
  if (type === "whatsapp") return MessageCircle;
  if (type === "email") return Mail;
  return ExternalLink;
}

export function ApplyDialog({
  job,
  open,
  onOpenChange,
}: {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Candidatar-se: {job.title}</DialogTitle>
          <DialogDescription>Escolha como quer enviar seu currículo para essa vaga.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          {job.apply.map((opt, i) => {
            const Icon = optionIcon(opt.type);
            return (
              <a
                key={i}
                href={optionHref(opt)}
                target={opt.type === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="block"
              >
                <Button variant={i === 0 ? "default" : "outline"} className="w-full justify-start gap-2">
                  <Icon className="h-4 w-4" /> {opt.label}
                </Button>
                {opt.note && <p className="mt-1 text-xs text-muted-foreground">{opt.note}</p>}
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
