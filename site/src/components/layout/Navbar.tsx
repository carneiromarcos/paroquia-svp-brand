import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/horarios", label: "Horarios" },
  { href: "/pastorais", label: "Pastorais" },
  { href: "/eventos", label: "Eventos" },
  { href: "/dizimo", label: "Dizimo" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 px-6 py-3 flex items-center justify-between border-b border-gold/20" style={{ background: "rgba(80,23,20,0.92)", backdropFilter: "blur(16px)" }}>
      <Link href="/" className="font-[var(--font-heading)] text-gold font-semibold tracking-wide text-sm no-underline">
        PSVP
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-5">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`text-xs font-medium tracking-widest uppercase no-underline transition-colors ${location === l.href ? "text-gold" : "text-white/70 hover:text-gold"}`}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-gold bg-transparent border-none cursor-pointer">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-6" onClick={() => setOpen(false)}>
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gold bg-transparent border-none cursor-pointer"><X size={28} /></button>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-lg font-medium tracking-widest uppercase no-underline font-[var(--font-heading)] ${location === l.href ? "text-gold" : "text-white/80"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
