import { getCurrentSeason } from "@/lib/data";

export function LiturgicalBanner() {
  const { label, color } = getCurrentSeason();
  return (
    <div className="h-7 flex items-center justify-center text-white text-xs tracking-widest uppercase" style={{ background: color, fontFamily: "var(--font-accent)" }}>
      {label}
    </div>
  );
}
