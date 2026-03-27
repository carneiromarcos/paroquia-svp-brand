import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Heart, Users, Phone } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { parish, schedule, events, announcements, getCurrentSeason } from "@/lib/data";

export default function HomePage() {
  usePageMeta({ title: "Inicio", description: "Paroquia Sao Vicente de Paulo — Aldeota, Fortaleza/CE" });
  const featured = events.find((e) => e.featured) ?? events[0];
  const season = getCurrentSeason();

  return (
    <>
      {/* Hero */}
      <section className="relative text-white text-center py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #501714 0%, #6B2420 100%)" }}>
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-church.jpg')] bg-cover bg-center" />
        <motion.div className="relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Paroquia</motion.p>
          <motion.h1 variants={fadeInUp} className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight mb-3">
            Sao Vicente<br /><span className="text-gold">de Paulo</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-[var(--font-accent)] italic text-xl text-white/60 max-w-xl mx-auto mb-6">"{parish.tagline}"</motion.p>
          <motion.div variants={fadeInUp} className="w-15 h-0.5 bg-gold mx-auto mb-8" />
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
            <Link href="/horarios" className="bg-gold text-navy px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide no-underline hover:brightness-110 transition">Ver Horarios</Link>
            <Link href="/contato" className="border border-white/30 text-white px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide no-underline hover:border-gold hover:text-gold transition">Fale Conosco</Link>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-sm text-white/30 mt-6">Aldeota · Fortaleza/CE · {parish.instagramHandle}</motion.p>
        </motion.div>
      </section>

      <div className="divider-gold" />

      {/* Schedule */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Horarios</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Missas desta semana</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="max-w-md mx-auto bg-surface rounded-xl overflow-hidden shadow-lg border border-muted">
            <div className="bg-navy text-white py-4 px-5 text-center">
              <p className="text-xs tracking-widest uppercase text-gold">Horarios das Missas</p>
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
              <Link href="/horarios" className="text-xs font-semibold tracking-wider uppercase text-gold no-underline hover:underline">Ver todos os horarios →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Featured Event */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Eventos</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Proximo evento</h2>
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
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Ultimos comunicados</h2>
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
            { icon: <Clock size={28} />, label: "Horarios", href: "/horarios" },
            { icon: <Heart size={28} />, label: "Dizimo", href: "/dizimo" },
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
          <p className="text-gold text-sm mt-3">— Sao Vicente de Paulo</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: season.color }} />
            <span className="text-xs text-dark/40 font-[var(--font-accent)] italic">{season.label}</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
