import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CompanyLogo, BRAND } from "./companyLogos";
import planetAsset from "@/assets/planet-halfmoon.png";

/* ----------------------------------------------------------- */
/*  Planet — generated half-moon image as hero background       */
/* ----------------------------------------------------------- */

function Planet() {
  // Image fills the full container width without cropping; the planet itself fades hard at the bottom.
  const mask =
    "linear-gradient(to bottom, black 0%, black 38%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.48) 62%, rgba(0,0,0,0.18) 73%, transparent 84%, transparent 100%)";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft cyan halo glow above the horizon */}
      <div
        className="absolute left-1/2 bottom-[5%] h-[120%] w-[110%] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 100%, rgba(56,189,248,0.40), rgba(59,130,246,0.18) 50%, transparent 78%)",
        }}
      />

      {/* Planet image — full width, anchored to bottom, cropped from the top */}
      <img
        src={planetAsset}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 block h-full w-full select-none object-cover object-bottom"
        style={{
          opacity: 0.96,
          maskImage: mask,
          WebkitMaskImage: mask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />


      <div
        className="absolute inset-x-0 bottom-0 h-[220px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(7,19,41,0.18) 22%, rgba(7,19,41,0.72) 58%, rgba(7,19,41,1) 100%)",
        }}
      />
    </div>
  );
}





/* ----------------------------------------------------------- */
/*  Notifications — 3 at a time, slow                          */
/* ----------------------------------------------------------- */

type Hire = {
  name: string;
  role: string;
  company: keyof typeof BRAND;
  location: string;
  when: string;
};

const HIRES: Hire[] = [
  { name: "Carlos M.",  role: "Software Engineer",      company: "google",    location: "Lisboa, Portugal",  when: "há 2 horas" },
  { name: "Ciclano S.", role: "AI Researcher",          company: "microsoft", location: "Berlim, Alemanha",  when: "há 1 hora"  },
  { name: "João P.",    role: "Machine Learning Eng.",  company: "amazon",    location: "Seattle, EUA",      when: "há 30 min"  },
  { name: "Mariana S.", role: "Engenheira de Dados",    company: "nubank",    location: "São Paulo, Brasil", when: "há 2 dias"  },
  { name: "Letícia A.", role: "Senior PM",              company: "stripe",    location: "Dublin, Irlanda",   when: "há 6 horas" },
  { name: "Bruno R.",   role: "Growth Manager",         company: "meta",      location: "Madrid, Espanha",   when: "há 1 dia"   },
];

const SLOTS = [
  "left-[1%] top-[2%]",
  "left-[36%] top-[0%]",
  "right-[1%] top-[4%]",
  "left-[3%] top-[24%]",
  "right-[2%] top-[26%]",
  "left-[38%] top-[32%]",
];

const STEP_MS = 2000;
const WINDOW = 3;

function HireCard({ h }: { h: Hire }) {
  const b = BRAND[h.company];
  return (
    <div className="glass-aqua-dark flex w-[300px] items-center gap-3 rounded-2xl p-3 text-white">
      <CompanyLogo name={h.company} size={42} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
          <span className="live-dot" /> Contratado · {h.location.split(",").pop()?.trim()}
        </div>
        <div className="mt-0.5 truncate text-sm font-semibold">
          {h.name} <span className="text-white/40">→</span>{" "}
          <span className="text-sky-200">{b.name}</span>
        </div>
        <div className="truncate text-[11px] text-white/60">
          {h.role} · {h.when}
        </div>
      </div>
    </div>
  );
}

function NotificationLayer() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), STEP_MS);
    return () => clearInterval(id);
  }, []);

  const isVisible = (hireIdx: number) => {
    for (let k = 0; k < WINDOW; k++) {
      const target = ((step - k) % HIRES.length + HIRES.length) % HIRES.length;
      if (step - k < 0) continue;
      if (target === hireIdx) return true;
    }
    return false;
  };

  return (
    <div className="pointer-events-none absolute inset-0">
      {HIRES.map((h, hireIdx) => {
        const slot = SLOTS[hireIdx % SLOTS.length];
        return (
          <div key={hireIdx} className={`absolute ${slot} w-[300px]`}>
            <AnimatePresence>
              {isVisible(hireIdx) && (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.96 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <HireCard h={h} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function PlanetScene() {
  return (
    <div className="relative h-[420px] w-full md:h-[520px]">
      <Planet />
      <NotificationLayer />
    </div>
  );
}
