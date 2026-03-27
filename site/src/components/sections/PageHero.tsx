import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white text-center py-16 px-6" style={{ background: "linear-gradient(160deg, #501714 0%, #6B2420 100%)" }}>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-white/60 text-base max-w-lg mx-auto">{subtitle}</p>
        <div className="w-15 h-0.5 bg-gold mx-auto mt-5" />
      </motion.div>
    </section>
  );
}
