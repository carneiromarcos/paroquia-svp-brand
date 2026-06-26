import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Heart, Users, Phone } from "lucide-react";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { parish, heroSlides, schedule, events, announcements, getCurrentSeason } from "@/lib/data";

export default function HomePage() {
  usePageMeta({ title: "Início", description: "Paróquia São Vicente de Paulo — Dionísio Torres, Fortaleza/CE" });
  const featured = events.find((e) => e.featured) ?? events[0];
  const season = getCurrentSeason();

  return (
    <>
      <HeroCarousel slides={heroSlides} footerText={`${parish.neighborhood} · ${parish.city} · ${parish.instagramHandle}`} />

      <div className="divider-gold" />

      {/* Schedule */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Horários</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Missas desta semana</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="max-w-md mx-auto bg-surface rounded-xl overflow-hidden shadow-lg border border-muted">
            <div className="bg-navy text-white py-4 px-5 text-center">
              <p className="text-xs tracking-widest uppercase text-gold">Horários das Missas</p>
              <h3 className="font-[var(--font-heading)] text-lg mt-1">Semana Atual</h3>
            </div>
            <div className="px-5 py-3">
              {schedule.masses.map((m) => (
                <div key={m.day} className="flex justify-between py-2.5 border-b border-dark/5 last:border-none">
                  <span className="font-semibold text-sm text-navy">{m.day}</span>
                  <span className="text-sm text-dark/50">{m.time}</span>
                </div>
              ))}
            </div>
            <div className="bg-cream py-3 text-center">
              <Link href="/horarios" className="text-xs font-semibold tracking-wider uppercase text-gold no-underline hover:underline">Ver todos os horários →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Featured Event */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Eventos</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Próximo evento</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="bg-navy text-white py-8 px-6 text-center relative">
              <span className="text-gold text-2xl absolute top-3 left-1/2 -translate-x-1/2">+</span>
              <p className="text-xs tracking-widest uppercase text-gold mt-4 mb-2">Evento Especial</p>
              <h3 className="font-[var(--font-heading)] text-xl leading-snug">{featured.title}</h3>
              <p className="font-[var(--font-accent)] italic text-sm text-white/40 mt-2">{featured.desc}</p>
            </div>
            <div className="bg-surface py-5 px-6 text-center">
              <p className="text-sm text-dark/60"><strong>{featured.fullDate}</strong></p>
              <p className="text-sm text-dark/60">{featured.time} · {featured.location}</p>
              <Link href="/eventos" className="inline-block mt-4 bg-gold text-navy px-6 py-2 rounded-full text-xs font-bold tracking-wide uppercase no-underline hover:brightness-110 transition">Saiba Mais</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Announcements */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">04 / Avisos</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Últimos comunicados</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {announcements.map((a, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm">
                <span className="inline-block px-3 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-gold/10 text-gold mb-3">{a.tag}</span>
                <h3 className="font-[var(--font-heading)] text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{a.excerpt}</p>
                <p className="text-xs text-dark/40 mt-3">{a.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Quick Links */}
      <section className="bg-navy py-14 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Clock size={28} />, label: "Horários", href: "/horarios" },
            { icon: <Heart size={28} />, label: "Dízimo", href: "/dizimo" },
            { icon: <Users size={28} />, label: "Pastorais", href: "/pastorais" },
            { icon: <Phone size={28} />, label: "Contato", href: "/contato" },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeInUp}>
              <Link href={item.href} className="flex flex-col items-center gap-3 py-6 rounded-xl border border-gold/15 text-white/70 hover:text-gold hover:border-gold/40 transition no-underline">
                {item.icon}
                <span className="text-xs font-semibold tracking-wider uppercase">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="divider-gold" />

      {/* Quote */}
      <section className="bg-cream py-14 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <p className="font-[var(--font-accent)] italic text-2xl text-navy max-w-xl mx-auto leading-relaxed">"{parish.tagline}"</p>
          <p className="text-gold text-sm mt-3">— São Vicente de Paulo</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: season.color }} />
            <span className="text-xs text-dark/40 font-[var(--font-accent)] italic">{season.label}</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
