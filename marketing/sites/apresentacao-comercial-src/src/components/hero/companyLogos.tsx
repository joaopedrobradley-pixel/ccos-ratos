import type { SVGProps } from "react";

/* Brand-colored tile with company monogram.
   Lightweight stand-in for inline brand SVGs — recognizable + zero bundle cost. */

type LogoProps = SVGProps<SVGSVGElement> & { size?: number };

export const BRAND: Record<
  string,
  { bg: string; fg: string; mono: string; name: string }
> = {
  google:    { bg: "#FFFFFF", fg: "#4285F4", mono: "G",  name: "Google" },
  meta:      { bg: "#0866FF", fg: "#FFFFFF", mono: "M",  name: "Meta" },
  nubank:    { bg: "#820AD1", fg: "#FFFFFF", mono: "N",  name: "Nubank" },
  stripe:    { bg: "#635BFF", fg: "#FFFFFF", mono: "S",  name: "Stripe" },
  microsoft: { bg: "#FFFFFF", fg: "#0078D4", mono: "▦",  name: "Microsoft" },
  amazon:    { bg: "#232F3E", fg: "#FF9900", mono: "a",  name: "Amazon" },
};

export function CompanyLogo({ name, size = 40, ...rest }: LogoProps & { name: keyof typeof BRAND }) {
  const b = BRAND[name];
  if (name === "google") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...rest}>
        <rect width="40" height="40" rx="10" fill="#FFFFFF" />
        <g transform="translate(8,8) scale(0.96)">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
        </g>
      </svg>
    );
  }
  if (name === "microsoft") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...rest}>
        <rect width="40" height="40" rx="10" fill="#FFFFFF" />
        <g transform="translate(8,8)">
          <rect x="0" y="0"  width="11" height="11" fill="#F25022"/>
          <rect x="13" y="0" width="11" height="11" fill="#7FBA00"/>
          <rect x="0" y="13" width="11" height="11" fill="#00A4EF"/>
          <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>
        </g>
      </svg>
    );
  }
  if (name === "amazon") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...rest}>
        <rect width="40" height="40" rx="10" fill="#232F3E" />
        <text x="20" y="22" textAnchor="middle" fontFamily="-apple-system, Inter, sans-serif"
              fontWeight="800" fontSize="14" fill="#FFFFFF">amazon</text>
        <path d="M10 28 Q20 33 30 28" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    );
  }
  // Default monogram tile
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" {...rest}>
      <rect width="40" height="40" rx="10" fill={b.bg} />
      <text x="20" y="27" textAnchor="middle" fontFamily="-apple-system, Inter, sans-serif"
            fontWeight="800" fontSize="22" fill={b.fg}>{b.mono}</text>
    </svg>
  );
}
