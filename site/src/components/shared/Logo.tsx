/**
 * Logo tipográfica da Paróquia São Vicente de Paulo (lockup do design system).
 * Cruz dourada + assinatura serifada + régua dourada.
 * variant "dark"  → texto burgundy (para fundos claros)
 * variant "light" → texto branco (para fundos burgundy/escuros)
 */

function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="12.25" y="0" width="3.5" height="36" rx="1.2" />
      <rect x="5" y="8" width="18" height="3.5" rx="1.2" />
    </svg>
  );
}

interface LogoProps {
  variant?: "dark" | "light";
  align?: "center" | "start";
  className?: string;
}

export function Logo({ variant = "dark", align = "center", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const alignCls = align === "start" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      <CrossMark className="text-gold h-6 w-auto mb-3" />
      <span className={`text-[0.6rem] font-semibold tracking-[0.35em] uppercase ${text}`}>Paróquia</span>
      <span className={`font-[var(--font-heading)] font-bold leading-tight text-3xl ${text}`}>São Vicente</span>
      <span className={`font-[var(--font-heading)] text-xl ${text} mt-0.5`}>de Paulo</span>
      <span className="block w-12 h-[2px] bg-gold mt-3" />
    </div>
  );
}

/** Versão compacta horizontal para a barra de navegação. */
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <CrossMark className="text-gold h-4 w-auto flex-shrink-0" />
      <span className="font-[var(--font-heading)] font-semibold text-white tracking-wide text-sm leading-none">
        São Vicente de Paulo
      </span>
    </span>
  );
}
