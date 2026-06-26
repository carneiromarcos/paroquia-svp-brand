import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SobrePage() {
  usePageMeta({ title: "Sobre", description: "Conheca a Paróquia São Vicente de Paulo — historia, missão, visão e valores." });

  return (
    <>
      <PageHero title="Sobre Nos" subtitle="Conheca a Paróquia São Vicente de Paulo" />
      <div className="divider-gold" />

      {/* History */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Historia</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Nossa caminhada</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <img src="/images/hero-church.jpg" alt="Igreja Matriz de São Vicente de Paulo, Dionísio Torres" className="rounded-xl w-full aspect-[3/2] object-cover mb-8" />
            <div className="max-w-3xl">
              <p className="text-dark/70 leading-relaxed mb-4">Desmembrada da Paróquia da Piedade, a Paróquia de São Vicente de Paulo foi criada pelo Arcebispo de Fortaleza, Dom José de Medeiros Delgado, que sentiu a imperiosa necessidade de atender espiritualmente os habitantes do bairro Dionísio Torres, que se expandia aceleradamente. No coração do bairro residiam — e ainda residem — as Filhas da Caridade, cuja capela, na Avenida Desembargador Moreira, oferecia aos fiéis a oportunidade de participar das celebrações, presididas pelos diretores espirituais das Irmãs e, muitas vezes, pelos jesuítas residentes no vizinho Colégio Santo Inácio.</p>
              <p className="text-dark/70 leading-relaxed mb-4">Dom Miguel Fenelon Câmara, Bispo Auxiliar, dirigiu-se à Ir. Cals, então Visitadora das Filhas da Caridade, pedindo-lhe a cessão temporária da capela, a fim de que a paróquia recém-criada tivesse ali a sua matriz. Dotadas de ilimitada benevolência, as Irmãs cederam não somente o templo, mas todo o material litúrgico, os vasos sagrados e o material de apoio de que a capela dispunha.</p>
              <p className="text-dark/70 leading-relaxed mb-4">Em 27 de março de 1971 foi erigida a Paróquia de São Vicente de Paulo, sendo nomeado seu primeiro pároco o Pe. Antônio Souto Ribeiro da Silva. Sucederam-lhe os párocos Pe. Francisco Benedito de Albuquerque, Pe. Eduardo Bezerra Fialho e Pe. Mariano Rocha Matos. Este último, afastado das atividades paroquiais por motivos de saúde, foi substituído primeiramente pelo Pe. Clairton Alexandrino de Oliveira e, posteriormente, pelo Pe. Raimundo Nonato de Oliveira Neto, em cuja administração os paroquianos viram realizado seu grande sonho: o de que a paróquia tivesse sede própria.</p>
              <p className="text-dark/70 leading-relaxed mb-6">Nossa Igreja Matriz, após a reforma, foi inaugurada em 18 de setembro de 2001, tornando-se referência para toda a cidade. Atualmente, o pároco é o Pe. José Sávio Xavier Pereira.</p>
              <blockquote className="font-[var(--font-accent)] italic text-xl text-navy border-l-3 border-gold pl-5 leading-relaxed">
                "A caridade é o amor posto em ação."
                <span className="block text-sm text-gold mt-2 not-italic">— São Vicente de Paulo</span>
              </blockquote>
            </div>
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
              { title: "Missão", text: "Evangelizar, acolher e servir à comunidade do Dionísio Torres e região, promovendo a caridade cristã como caminho de transformação espiritual e social." },
              { title: "Visão", text: "Ser referência de paróquia acolhedora, moderna e engajada, onde a fé se traduz em ações concretas de amor ao próximo." },
              { title: "Valores", text: "Caridade · Acolhimento · Reverência · Comunidade · Transparência · Serviço · Esperança" },
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
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">O legado de São Vicente de Paulo</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-navy border border-gold/15 rounded-xl p-8 border-l-3 border-l-gold">
            <p className="text-white/60 leading-relaxed mb-4">São Vicente de Paulo (1581–1660) dedicou sua vida aos pobres, doentes e abandonados. Fundou as Damas da Caridade e a Congregação da Missão, revolucionando a assistência social na França.</p>
            <p className="text-white/60 leading-relaxed mb-6">Seu vitral em nossa igreja — com o vermelho vibrante da moldura, o dourado sagrado dos arabescos, o verde esperança do manto e o azul celestial do céu — inspira toda a identidade visual da paróquia.</p>
            <blockquote className="font-[var(--font-accent)] italic text-lg text-white/80 border-l-3 border-gold pl-5">
              "Dai-me um homem de oração e ele sera capaz de tudo."
              <span className="block text-sm text-gold mt-2 not-italic">— São Vicente de Paulo</span>
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
              <h3 className="font-[var(--font-heading)] text-xl mb-1">Pe. José Sávio Xavier Pereira</h3>
              <p className="text-gold text-sm mb-4">Pároco desde novembro de 2025</p>
              <p className="text-dark/60 leading-relaxed mb-3">Ordenado sacerdote em 29 de junho de 2002, o Pe. José Sávio assumiu a Paróquia São Vicente de Paulo em novembro de 2025. Ao longo de seu ministério, foi Diretor Espiritual do Seminário Arquidiocesano São José, vigário paroquial na Paróquia Jesus, Maria e José e pároco nas paróquias Nossa Senhora Mãe da Igreja (Parque Rio Branco) e São José (Maracanaú).</p>
              <p className="text-dark/60 leading-relaxed">Conduz a paróquia com acolhimento e dedicação pastoral, sempre inspirado pela caridade de seu padroeiro, contando com o auxílio do vigário paroquial, Pe. Raimundo Nonato de Oliveira Neto.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Gallery */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">05 / Galeria</p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-6">Nossa paróquia em imagens</h2>
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
