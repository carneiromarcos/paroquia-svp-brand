import { motion } from "framer-motion";
import { Building, Heart, Users, BookOpen } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { CopyButton } from "@/components/shared/CopyButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { parish, transparency } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={28} />, heart: <Heart size={28} />,
  users: <Users size={28} />, "book-open": <BookOpen size={28} />,
};

export default function DízimoPage() {
  usePageMeta({ title: "Dízimo", description: "Contribua com a missão da Paróquia SVP." });

  return (
    <>
      <PageHero title="Dízimo" subtitle="Contribua com a missão da nossa paróquia" />
      <div className="divider-gold" />

      {/* Foundation */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / O Sentido do Dízimo</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Porque contribuir</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeInUp}>
              <p className="text-dark/70 leading-relaxed mb-4">O dízimo é um gesto de fé e gratidão. Mais do que uma contribuição financeira, é o reconhecimento de que tudo o que temos vem de Deus. Ao dizimar, participamos ativamente da missão da Igreja.</p>
              <p className="text-dark/70 leading-relaxed">Sua contribuição sustenta as atividades pastorais, a manutenção da igreja, a ação social e o acolhimento de todos que buscam a fé em nossa comunidade.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <blockquote className="font-[var(--font-accent)] italic text-lg text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa."
                <span className="block text-sm text-gold mt-2 not-italic">— Malaquias 3:10</span>
              </blockquote>
              <blockquote className="font-[var(--font-accent)] italic text-lg text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "Deus ama quem dá com alegria."
                <span className="block text-sm text-gold mt-2 not-italic">— 2 Coríntios 9:7</span>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Steps */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Como Contribuir</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Passos para se tornar dizimista</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Procure a secretaria", desc: "Visite a secretaria paroquial ou entre em contato pelo WhatsApp." },
              { step: 2, title: "Escolha o valor e forma", desc: "Defina o valor mensal e a forma de contribuição: PIX, transferência ou presencial." },
              { step: 3, title: "Contribua mensalmente", desc: "Mantenha sua contribuição regular e acompanhe o impacto na comunidade." },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mx-auto mb-3">{s.step}</div>
                <h3 className="font-[var(--font-heading)] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Payment */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Formas de Contribuição</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-md mx-auto">
            <motion.div variants={fadeInUp} className="border border-gold/15 rounded-xl p-6">
              <h3 className="font-[var(--font-heading)] text-lg text-gold mb-3">PIX</h3>
              <p className="text-white/60 text-sm mb-1">Chave PIX (CNPJ):</p>
              <p className="text-white font-mono text-lg mb-1">{parish.pix}</p>
              <CopyButton text={parish.pix} label="Copiar chave" />
              <p className="text-white/40 text-xs mt-4">Você também pode contribuir por carnê ou presencialmente na secretaria. Envie o comprovante pelo WhatsApp da paróquia.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Transparency */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">04 / Transparência</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Para onde vai o seu dízimo</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {transparency.map((t) => (
              <motion.div key={t.label} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-5 text-center shadow-sm">
                <div className="text-navy mb-2 flex justify-center">{iconMap[t.icon]}</div>
                <p className="text-2xl font-bold text-gold">{t.pct}%</p>
                <p className="text-xs text-dark/60 mt-1">{t.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <blockquote className="font-[var(--font-accent)] italic text-lg text-navy border-l-3 border-gold pl-5 leading-relaxed max-w-xl mx-auto text-center">
            "A transparência é um ato de respeito com cada dizimista."
          </blockquote>
        </div>
      </section>
    </>
  );
}
