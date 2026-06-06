import { motion } from "framer-motion";
import { IconInstagram } from "@/components/shared/SocialIcons";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { events, parish } from "@/lib/data";

export default function EventosPage() {
  usePageMeta({ title: "Eventos", description: "Eventos e programação da Paróquia SVP." });
  const featured = events.find((e) => e.featured) ?? events[0];
  const upcoming = events.filter((e) => !e.featured);

  return (
    <>
      <PageHero title="Eventos" subtitle="Programação e atividades da paróquia" />
      <div className="divider-gold" />

      {/* Featured */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Destaque</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Evento em destaque</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="bg-navy text-white py-10 px-6 text-center relative">
              <span className="text-gold text-3xl absolute top-4 left-1/2 -translate-x-1/2">&#10013;</span>
              <p className="text-xs tracking-widest uppercase text-gold mt-6 mb-2">Evento Especial</p>
              <h3 className="font-[var(--font-heading)] text-2xl leading-snug">{featured.title}</h3>
              <p className="font-[var(--font-accent)] italic text-sm text-white/40 mt-3">{featured.desc}</p>
            </div>
            <div className="bg-surface py-6 px-6 text-center">
              <p className="text-sm text-dark/70"><strong>{featured.fullDate}</strong></p>
              <p className="text-sm text-dark/50">{featured.time} · {featured.location}</p>
              <span className="inline-block mt-4 bg-gold text-navy px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase">Saiba Mais</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Upcoming */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Próximos Eventos</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {upcoming.map((evt) => (
              <motion.div key={evt.title} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold leading-none">{evt.date.split(" ")[0]}</span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-gold">{evt.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-heading)] text-base mb-1">{evt.title}</h3>
                  <p className="text-xs text-dark/50 mb-1">{evt.time} · {evt.location}</p>
                  <p className="text-sm text-dark/60 leading-relaxed">{evt.desc}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[0.6rem] font-semibold tracking-wide uppercase bg-gold/10 text-gold">{evt.tag}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Liturgical Calendar */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Calendario Liturgico</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Datas importantes</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Advento", color: "#6B3FA0", period: "Nov-Dez" },
              { name: "Natal", color: "linear-gradient(135deg, #FFF, #CC9A1E)", period: "Dez-Jan", dark: true },
              { name: "Quaresma", color: "#6B3FA0", period: "Fev-Abr" },
              { name: "Pascoa", color: "linear-gradient(135deg, #FFF, #CC9A1E)", period: "Abr-Jun", dark: true },
            ].map((lit) => (
              <motion.div key={lit.name} variants={fadeInUp} className="rounded-xl p-5 text-center" style={{ background: lit.color, color: lit.dark ? "#501714" : "#fff" }}>
                <h4 className="font-[var(--font-heading)] text-base mb-1">{lit.name}</h4>
                <p className="text-xs opacity-70">{lit.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Instagram CTA */}
      <section className="bg-navy text-white py-14 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="font-[var(--font-heading)] text-xl mb-2">Siga-nos para atualizações</h3>
          <p className="text-white/50 text-sm mb-5">{parish.instagramHandle}</p>
          <a href={parish.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide no-underline hover:brightness-110 transition">
            <IconInstagram size={16} /> Seguir no Instagram
          </a>
        </motion.div>
      </section>
    </>
  );
}
