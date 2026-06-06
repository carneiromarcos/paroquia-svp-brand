import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Droplets, Baby, Home, Megaphone, HandHeart, Flame, Users, Star, Globe, Music, Wheat, BookOpen } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { pastorals, movements, services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={24} />, droplets: <Droplets size={24} />, baby: <Baby size={24} />,
  home: <Home size={24} />, megaphone: <Megaphone size={24} />, "hand-heart": <HandHeart size={24} />,
  flame: <Flame size={24} />, users: <Users size={24} />, star: <Star size={24} />,
  globe: <Globe size={24} />, music: <Music size={24} />, wheat: <Wheat size={24} />,
  "book-open": <BookOpen size={24} />, building: <Home size={24} />,
};

function PastoralCard({ name, desc, icon, contact }: { name: string; desc: string; icon: string; contact: string }) {
  return (
    <motion.div variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm flex flex-col">
      <div className="text-navy mb-3">{iconMap[icon] ?? <Heart size={24} />}</div>
      <h3 className="font-[var(--font-heading)] text-base mb-2">{name}</h3>
      <p className="text-sm text-dark/60 leading-relaxed flex-1">{desc}</p>
      <p className="text-xs text-dark/40 mt-3">{contact}</p>
    </motion.div>
  );
}

export default function PastoraisPage() {
  usePageMeta({ title: "Pastorais", description: "Pastorais, movimentos e serviços da Paróquia SVP." });

  return (
    <>
      <PageHero title="Pastorais & Movimentos" subtitle="Serviços e grupos de nossa comunidade" />
      <div className="divider-gold" />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Pastorais</p>
          <span className="inline-block px-3 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-gold/10 text-gold mb-4">Pastorais</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-5">
            {pastorals.map((p) => <PastoralCard key={p.name} {...p} />)}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Movimentos</p>
          <span className="inline-block px-3 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-navy/8 text-navy mb-4">Movimentos</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-5">
            {movements.map((m) => <PastoralCard key={m.name} {...m} />)}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Serviços</p>
          <span className="inline-block px-3 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-gold/10 text-gold mb-4">Serviços</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-5">
            {services.map((s) => <PastoralCard key={s.name} {...s} />)}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-navy text-white py-14 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="font-[var(--font-heading)] text-xl mb-2">Quer participar de uma pastoral?</h3>
          <p className="text-white/50 text-sm mb-5">Entre em contato conosco e encontre seu lugar na comunidade.</p>
          <Link href="/contato" className="inline-block bg-gold text-navy px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide no-underline hover:brightness-110 transition">Fale Conosco</Link>
        </motion.div>
      </section>
    </>
  );
}
