import { motion } from "framer-motion";
import { IconInstagram } from "@/components/shared/SocialIcons";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { festa, parish } from "@/lib/data";

export default function EventosPage() {
  usePageMeta({ title: "Eventos", description: "Festa do Padroeiro e programação da Paróquia São Vicente de Paulo." });

  return (
    <>
      <PageHero title="Eventos" subtitle="Programação e atividades da paróquia" />
      <div className="divider-gold" />

      {/* Festa do Padroeiro — intro */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / {festa.title}</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">{festa.title}</h2>
          <p className="font-[var(--font-accent)] italic text-lg text-navy mb-4">"{festa.theme}"</p>
          <span className="inline-block px-3 py-0.5 rounded-full text-[0.7rem] font-semibold tracking-wide uppercase bg-gold/10 text-gold mb-6">{festa.period}</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl space-y-4">
            {festa.intro.map((p, i) => (
              <p key={i} className="text-dark/70 leading-relaxed">{p}</p>
            ))}
            <p className="text-sm text-dark/50">{festa.info}</p>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Parte Religiosa / Sócio-Cultural */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="border border-gold/15 rounded-xl p-6">
              <h3 className="font-[var(--font-heading)] text-lg text-gold mb-4">Parte Religiosa</h3>
              <ul className="space-y-2">
                {festa.religiosa.map((r) => (
                  <li key={r} className="text-white/70 text-sm flex gap-2"><span className="text-gold">&#10013;</span>{r}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-gold/15 rounded-xl p-6">
              <h3 className="font-[var(--font-heading)] text-lg text-gold mb-4">Parte Sócio-Cultural</h3>
              <ul className="space-y-2">
                {festa.social.map((s) => (
                  <li key={s} className="text-white/70 text-sm flex gap-2"><span className="text-gold">&#9670;</span>{s}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-6 text-center font-[var(--font-accent)] italic text-gold/90">{festa.festaDay}</motion.p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Programação do Novenário */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Programação do Novenário</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Dia a dia da festa</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
            {festa.days.map((d) => (
              <motion.div key={d.date} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-5 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-base font-bold leading-none">{d.date.split("/")[0]}</span>
                  <span className="text-[0.55rem] uppercase tracking-wider text-gold">Set</span>
                </div>
                <div className="flex-1">
                  <p className="text-[0.65rem] uppercase tracking-wider text-gold font-semibold mb-1">{d.weekday}</p>
                  <h3 className="font-[var(--font-heading)] text-sm leading-snug mb-2">{d.title}</h3>
                  <p className="text-xs text-dark/55 leading-relaxed">{d.schedule}</p>
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Calendário Litúrgico</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Datas importantes</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Advento", color: "#6B3FA0", period: "Nov-Dez" },
              { name: "Natal", color: "linear-gradient(135deg, #FFF, #CC9A1E)", period: "Dez-Jan", dark: true },
              { name: "Quaresma", color: "#6B3FA0", period: "Fev-Abr" },
              { name: "Páscoa", color: "linear-gradient(135deg, #FFF, #CC9A1E)", period: "Abr-Jun", dark: true },
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
