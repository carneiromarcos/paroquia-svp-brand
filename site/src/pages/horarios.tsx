import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { schedule, parish } from "@/lib/data";

export default function HoráriosPage() {
  usePageMeta({ title: "Horários", description: "Horários de missas, confissões e adoração da Paróquia SVP." });

  return (
    <>
      <PageHero title="Horários" subtitle="Programação completa da paróquia" />
      <div className="divider-gold" />

      {/* Masses */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Santas Missas</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Horários dàs celebrações</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="max-w-lg mx-auto bg-surface rounded-xl overflow-hidden shadow-lg border border-muted">
            <div className="bg-navy text-white py-5 px-6 text-center">
              <p className="text-xs tracking-widest uppercase text-gold">Igreja Matriz</p>
              <h3 className="font-[var(--font-heading)] text-lg mt-1">Horários das Missas</h3>
            </div>
            <div className="px-6 py-4">
              {schedule.masses.map((m) => (
                <div key={m.day} className="flex justify-between py-3 border-b border-dark/5 last:border-none">
                  <span className="font-semibold text-sm text-navy">{m.day}</span>
                  <span className="text-sm text-dark/50">{m.time}</span>
                </div>
              ))}
            </div>
            <div className="bg-cream py-3 text-center">
              <p className="text-xs text-gold font-semibold tracking-wider">{parish.instagramHandle} · Aldeota, Fortaleza/CE</p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Conféssions & Adoration */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Sacramentos & Devocao</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm border-l-3 border-l-gold">
              <h3 className="font-[var(--font-heading)] text-lg mb-3">Confissões</h3>
              <p className="text-sm text-dark/60 mb-2">{schedule.confessions}</p>
              <p className="text-xs text-dark/40">Não é necessário agendamento.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm border-l-3 border-l-gold">
              <h3 className="font-[var(--font-heading)] text-lg mb-3">Adoração ao Santissimo</h3>
              <p className="text-sm text-dark/60 mb-2">{schedule.adoration}</p>
              <p className="text-xs text-dark/40">Venha passar um momento com Jesus Eucaristico.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Office */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Secretaria Paróquial</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Atendimento ao publico</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-lg mx-auto bg-surface border border-muted rounded-xl p-6 shadow-sm">
            <p className="text-sm text-dark/70 mb-1">{schedule.office.weekdays}</p>
            <p className="text-sm text-dark/70 mb-1">{schedule.office.saturday}</p>
            <p className="text-sm text-dark/70 mb-4">{schedule.office.sunday}</p>
            <p className="text-xs text-dark/50">Serviços: Batizado, Matrimônio, Certidões, Intenções de Missa, Dízimo.</p>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* WhatsApp CTA */}
      <section className="bg-navy text-white py-14 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="font-[var(--font-heading)] text-xl mb-2">Dúvidas sobre horários?</h3>
          <p className="text-white/50 text-sm mb-5">Fale com a secretaria pelo WhatsApp</p>
          <a href={`https://wa.me/${parish.whatsapp}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide no-underline hover:brightness-110 transition">
            Chamar no WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
}
