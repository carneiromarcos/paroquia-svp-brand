import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SobrePage() {
  usePageMeta({ title: "Sobre", description: "Conheca a Paroquia Sao Vicente de Paulo — historia, missao, visao e valores." });

  return (
    <>
      <PageHero title="Sobre Nos" subtitle="Conheca a Paroquia Sao Vicente de Paulo" />
      <div className="divider-gold" />

      {/* History */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Historia</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Nossa caminhada</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeInUp}>
              <img src="/images/hero-church.jpg" alt="Fachada da igreja" className="rounded-xl w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-dark/70 leading-relaxed mb-4">A Paroquia Sao Vicente de Paulo, situada no coracao da Aldeota em Fortaleza, e uma comunidade de fe que une tradicao e acolhimento. Fundada ha decadas, nossa igreja e um marco de caridade e esperanca no bairro.</p>
              <p className="text-dark/70 leading-relaxed mb-6">Inspirada pelo legado de Sao Vicente de Paulo — padroeiro da caridade — nossa missao e ser ponte entre a fe e a acao social, servindo a todos com reverencia e amor.</p>
              <blockquote className="font-[var(--font-accent)] italic text-xl text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "A caridade e o amor posto em acao."
                <span className="block text-sm text-gold mt-2 not-italic">— Sao Vicente de Paulo</span>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Mission Vision Values */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">02 / Identidade</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">O que nos move</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Missao", text: "Evangelizar, acolher e servir a comunidade da Aldeota e regiao, promovendo a caridade crista como caminho de transformacao espiritual e social." },
              { title: "Visao", text: "Ser referencia de paroquia acolhedora, moderna e engajada, onde a fe se traduz em acoes concretas de amor ao proximo." },
              { title: "Valores", text: "Caridade · Acolhimento · Reverencia · Comunidade · Transparencia · Servico · Esperanca" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="bg-surface border border-muted rounded-xl p-6 shadow-sm">
                <h3 className="font-[var(--font-heading)] text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* SVP Legacy */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Padroeiro</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">O legado de Sao Vicente de Paulo</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-navy border border-gold/15 rounded-xl p-8 border-l-3 border-l-gold">
            <p className="text-white/60 leading-relaxed mb-4">Sao Vicente de Paulo (1581–1660) dedicou sua vida aos pobres, doentes e abandonados. Fundou as Damas da Caridade e a Congregacao da Missao, revolucionando a assistencia social na Franca.</p>
            <p className="text-white/60 leading-relaxed mb-6">Seu vitral em nossa igreja — com o vermelho vibrante da moldura, o dourado sagrado dos arabescos, o verde esperanca do manto e o azul celestial do ceu — inspira toda a identidade visual da paroquia.</p>
            <blockquote className="font-[var(--font-accent)] italic text-lg text-white/80 border-l-3 border-gold pl-5">
              "Dai-me um homem de oracao e ele sera capaz de tudo."
              <span className="block text-sm text-gold mt-2 not-italic">— Sao Vicente de Paulo</span>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Pastor */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">04 / Paroco</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Nosso pastor</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeInUp}>
              <img src="/images/priest-placeholder.jpg" alt="Paroco" className="rounded-xl w-full max-w-sm mx-auto aspect-[3/4] object-cover" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-[var(--font-heading)] text-xl mb-1">Pe. Nome Sobrenome</h3>
              <p className="text-gold text-sm mb-4">Paroco desde 2020</p>
              <p className="text-dark/60 leading-relaxed">Ordenado em 2005, Pe. Nome dedica sua vida ao servico pastoral. Com formacao em Teologia pela Universidade Catolica, ele conduz a paroquia com acolhimento e compromisso comunitario, sempre inspirado pela caridade de Sao Vicente.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Gallery */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">05 / Galeria</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Nossa paroquia em imagens</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["hero-church.jpg", "interior-church.jpg", "altar.jpg", "stained-glass.jpg", "community.jpg", "prayer.jpg"].map((img) => (
              <motion.div key={img} variants={fadeInUp} className="overflow-hidden rounded-xl">
                <img src={`/images/${img}`} alt="" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-sm text-dark/40 mt-4">Siga {/* @saovicentealdeota */} para mais fotos</p>
        </div>
      </section>
    </>
  );
}
