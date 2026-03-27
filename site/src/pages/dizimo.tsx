import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Building, Heart, Users, BookOpen } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { parish, transparency } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={28} />, heart: <Heart size={28} />,
  users: <Users size={28} />, "book-open": <BookOpen size={28} />,
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handleCopy} className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border-none cursor-pointer hover:brightness-110 transition mt-3">
      {copied ? <><Check size={14} /> Copiado!</> : <><Copy size={14} /> {label}</>}
    </button>
  );
}

export default function DizimoPage() {
  usePageMeta({ title: "Dizimo", description: "Contribua com a missao da Paroquia SVP." });

  return (
    <>
      <PageHero title="Dizimo" subtitle="Contribua com a missao da nossa paroquia" />
      <div className="divider-gold" />

      {/* Foundation */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / O Sentido do Dizimo</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Porque contribuir</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeInUp}>
              <p className="text-dark/70 leading-relaxed mb-4">O dizimo e um gesto de fe e gratidao. Mais do que uma contribuicao financeira, e o reconhecimento de que tudo o que temos vem de Deus. Ao dizimar, participamos ativamente da missao da Igreja.</p>
              <p className="text-dark/70 leading-relaxed">Sua contribuicao sustenta as atividades pastorais, a manutencao da igreja, a acao social e o acolhimento de todos que buscam a fe em nossa comunidade.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <blockquote className="font-[var(--font-accent)] italic text-lg text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "Trazei todos os dizimos a casa do tesouro, para que haja mantimento na minha casa."
                <span className="block text-sm text-gold mt-2 not-italic">— Malaquias 3:10</span>
              </blockquote>
              <blockquote className="font-[var(--font-accent)] italic text-lg text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "Deus ama quem da com alegria."
                <span className="block text-sm text-gold mt-2 not-italic">— 2 Corintios 9:7</span>
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
              { step: 2, title: "Escolha o valor e forma", desc: "Defina o valor mensal e a forma de contribuicao: PIX, transferencia ou presencial." },
              { step: 3, title: "Contribua mensalmente", desc: "Mantenha sua contribuicao regular e acompanhe o impacto na comunidade." },
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Formas de Contribuicao</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="border border-gold/15 rounded-xl p-6">
              <h3 className="font-[var(--font-heading)] text-lg text-gold mb-3">PIX</h3>
              <p className="text-white/60 text-sm mb-1">Chave PIX (CNPJ):</p>
              <p className="text-white font-mono text-lg mb-1">{parish.pix}</p>
              <CopyButton text={parish.pix} label="Copiar chave" />
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-gold/15 rounded-xl p-6">
              <h3 className="font-[var(--font-heading)] text-lg text-gold mb-3">Transferencia Bancaria</h3>
              <p className="text-white/60 text-sm">Banco: <span className="text-white">{parish.bank.name}</span></p>
              <p className="text-white/60 text-sm">Agencia: <span className="text-white">{parish.bank.agency}</span></p>
              <p className="text-white/60 text-sm">Conta: <span className="text-white">{parish.bank.account}</span></p>
              <CopyButton text={`${parish.bank.name} | Ag: ${parish.bank.agency} | CC: ${parish.bank.account}`} label="Copiar dados" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Transparency */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">04 / Transparencia</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Para onde vai o seu dizimo</h2>
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
            "A transparencia e um ato de respeito com cada dizimista."
          </blockquote>
        </div>
      </section>
    </>
  );
}
