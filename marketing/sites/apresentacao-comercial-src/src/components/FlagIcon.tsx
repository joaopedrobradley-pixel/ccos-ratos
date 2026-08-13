import type { ReactNode } from "react";

export type FlagKey =
  | "Brasil"
  | "Canadá"
  | "Estados Unidos"
  | "França"
  | "Grécia"
  | "Inglaterra"
  | "Irlanda"
  | "Itália"
  | "México"
  | "Portugal"
  | "Reino Unido"
  | "Espanha";

type Props = {
  country: FlagKey;
  className?: string;
};

export function FlagIcon({ country, className = "h-6 w-auto" }: Props) {
  const svg = FLAG_SVGS[country];
  if (!svg) return null;
  return (
    <span className={`inline-block ${className}`} aria-label={country}>
      {svg}
    </span>
  );
}

const BRASIL = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#009C3B" />
    <path d="M18 4 L32 12 L18 20 L4 12 Z" fill="#FFDF00" />
    <circle cx="18" cy="12" r="5.5" fill="#002776" />
  </svg>
);

const CANADA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#FFFFFF" />
    <rect width="9" height="24" fill="#FF0000" />
    <rect x="27" width="9" height="24" fill="#FF0000" />
    <path d="M18 5 L15 10 L16.5 10 L15.5 13.5 L17 13 L17 15 L19 15 L19 13 L20.5 13.5 L19.5 10 L21 10 Z" fill="#FF0000" />
  </svg>
);

const USA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#FFFFFF" />
    {[0, 2, 4, 6, 8, 10, 12].map((y) => (
      <rect key={y} y={y * (24 / 13)} width="36" height={24 / 13} fill="#B22234" />
    ))}
    <rect width="14.4" height="9.23" fill="#3C3B6E" />
    {Array.from({ length: 50 }).map((_, i) => {
      const row = Math.floor(i / 10);
      const col = i % 10;
      const cx = 0.72 + col * 1.44;
      const cy = 0.46 + row * 0.82;
      return <circle key={i} cx={cx} cy={cy} r="0.23" fill="#FFFFFF" />;
    })}
  </svg>
);

const FRANCA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="12" height="24" fill="#0055A4" />
    <rect x="12" width="12" height="24" fill="#FFFFFF" />
    <rect x="24" width="12" height="24" fill="#EF4135" />
  </svg>
);

const GRECIA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#FFFFFF" />
    {[0, 2, 4, 6, 8, 10].map((y) => (
      <rect key={y} y={y * 2} width="36" height="2" fill="#0D5EAF" />
    ))}
    <rect width="14" height="12" fill="#0D5EAF" />
    <rect x="5" width="4" height="12" fill="#FFFFFF" />
    <rect y="4" width="14" height="4" fill="#FFFFFF" />
  </svg>
);

const INGLATERRA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#FFFFFF" />
    <rect x="16" width="4" height="24" fill="#CF142B" />
    <rect y="10" width="36" height="4" fill="#CF142B" />
  </svg>
);

const IRLANDA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="12" height="24" fill="#169B62" />
    <rect x="12" width="12" height="24" fill="#FFFFFF" />
    <rect x="24" width="12" height="24" fill="#FF883E" />
  </svg>
);

const ITALIA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="12" height="24" fill="#009246" />
    <rect x="12" width="12" height="24" fill="#FFFFFF" />
    <rect x="24" width="12" height="24" fill="#CE2B37" />
  </svg>
);

const MEXICO = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="12" height="24" fill="#006847" />
    <rect x="12" width="12" height="24" fill="#FFFFFF" />
    <rect x="24" width="12" height="24" fill="#CE1126" />
  </svg>
);

const PORTUGAL = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="14" height="24" fill="#006600" />
    <rect x="14" width="22" height="24" fill="#FF0000" />
    <circle cx="14" cy="12" r="5" fill="#FFFF00" />
    <circle cx="14" cy="12" r="3.5" fill="#FFFFFF" opacity="0.15" />
  </svg>
);

const REINO_UNIDO = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="24" fill="#012169" />
    <path d="M0 0 L36 24 M36 0 L0 24" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M0 0 L36 24 M36 0 L0 24" stroke="#C8102E" strokeWidth="2.5" />
    <rect x="16.5" width="3" height="24" fill="#FFFFFF" />
    <rect y="10.5" width="36" height="3" fill="#FFFFFF" />
    <rect x="17" width="2" height="24" fill="#C8102E" />
    <rect y="11" width="36" height="2" fill="#C8102E" />
  </svg>
);

const ESPANHA = (
  <svg viewBox="0 0 36 24" className="h-full w-auto" aria-hidden>
    <rect width="36" height="6" fill="#AA151B" />
    <rect y="6" width="36" height="12" fill="#F1BF00" />
    <rect y="18" width="36" height="6" fill="#AA151B" />
  </svg>
);

const FLAG_SVGS: Record<FlagKey, React.ReactNode> = {
  Brasil: BRASIL,
  "Canadá": CANADA,
  "Estados Unidos": USA,
  França: FRANCA,
  Grécia: GRECIA,
  Inglaterra: INGLATERRA,
  Irlanda: IRLANDA,
  Itália: ITALIA,
  México: MEXICO,
  Portugal: PORTUGAL,
  "Reino Unido": REINO_UNIDO,
  Espanha: ESPANHA,
};
