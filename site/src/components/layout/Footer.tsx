import { Link } from "wouter";
import { IconInstagram, IconYoutube, IconFacebook } from "@/components/shared/SocialIcons";
import { Logo } from "@/components/shared/Logo";
import { parish } from "@/lib/data";

export function Footer() {
  return (
    <>
      <div className="divider-gold" />
      <footer className="bg-navy text-white/50 py-12 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo variant="light" align="start" className="mb-4" />
            <p className="text-sm italic font-[var(--font-accent)] text-white/40">"{parish.tagline}"</p>
            <p className="text-xs mt-3 text-white/30">Dionísio Torres · Fortaleza/CE</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Navegação</p>
            <div className="flex flex-col gap-1.5">
              {["Início:/", "Sobre:/sobre", "Horários:/horarios", "Pastorais:/pastorais", "Eventos:/eventos", "Dízimo:/dizimo", "Contato:/contato"].map((item) => {
                const [label, href] = item.split(":");
                return <Link key={href} href={href} className="text-sm text-white/50 hover:text-gold no-underline transition-colors">{label}</Link>;
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Contato</p>
            <p className="text-sm mb-1">{parish.address}</p>
            <p className="text-sm mb-1">{parish.neighborhood}, {parish.city}</p>
            <p className="text-sm mb-3">{parish.phone}</p>
            <div className="flex gap-3 mt-2">
              <a href={parish.instagram} target="_blank" rel="noopener" className="text-white/50 hover:text-gold transition-colors"><IconInstagram /></a>
              <a href={parish.youtube} target="_blank" rel="noopener" className="text-white/50 hover:text-gold transition-colors"><IconYoutube /></a>
              <a href={parish.facebook} target="_blank" rel="noopener" className="text-white/50 hover:text-gold transition-colors"><IconFacebook /></a>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-8 mb-4" />
        <p className="text-center text-xs text-white/30">&copy; 2026 Paróquia São Vicente de Paulo. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
