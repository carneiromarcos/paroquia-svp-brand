import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  footerText: string;
}

export function HeroCarousel({ slides, footerText }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!activeSlide) return null;

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <section className="relative min-h-[72vh] text-white text-center px-6 overflow-hidden flex items-center justify-center bg-navy">
      {slides.map((slide, index) => (
        <div
          key={`${slide.image}-${slide.title}`}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(80, 23, 20, 0.86), rgba(46, 30, 28, 0.58)), url('${slide.image}')`,
            opacity: index === activeIndex ? 1 : 0,
          }}
          aria-hidden={index !== activeIndex}
        />
      ))}

      <motion.div
        key={activeIndex}
        className="relative z-10 max-w-3xl py-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
          {activeSlide.eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-[var(--font-heading)] text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-tight mb-4"
        >
          {activeSlide.title.replace(activeSlide.highlight, "").trim()}
          <br />
          <span className="text-gold">{activeSlide.highlight}</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="font-[var(--font-accent)] italic text-xl md:text-2xl text-white/72 max-w-xl mx-auto mb-6"
        >
          "{activeSlide.subtitle}"
        </motion.p>
        <motion.div variants={fadeInUp} className="w-15 h-0.5 bg-gold mx-auto mb-8" />
        <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
          <Link
            href={activeSlide.primaryHref}
            className="bg-gold text-navy px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide no-underline hover:brightness-110 transition"
          >
            {activeSlide.primaryLabel}
          </Link>
          <Link
            href={activeSlide.secondaryHref}
            className="border border-white/35 text-white px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide no-underline hover:border-gold hover:text-gold transition"
          >
            {activeSlide.secondaryLabel}
          </Link>
        </motion.div>
        <motion.p variants={fadeInUp} className="text-sm text-white/42 mt-6">
          {footerText}
        </motion.p>
      </motion.div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-dark/25 text-white hover:border-gold hover:text-gold transition"
            aria-label="Banner anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-dark/25 text-white hover:border-gold hover:text-gold transition"
            aria-label="Próximo banner"
          >
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={`${slide.image}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-gold" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Ir para banner ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
