import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { IconInstagram, IconYoutube, IconFacebook } from "@/components/shared/SocialIcons";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/sections/PageHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { parish, schedule } from "@/lib/data";

export default function ContatoPage() {
  usePageMeta({ title: "Contato", description: "Entre em contato com a Paroquia SVP." });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <PageHero title="Contato" subtitle="Fale com a Paroquia Sao Vicente de Paulo" />
      <div className="divider-gold" />

      {/* Info */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">01 / Informacoes</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-navy">Endereco</p>
                  <p className="text-sm text-dark/60">{parish.address}</p>
                  <p className="text-sm text-dark/60">{parish.neighborhood}, {parish.city}</p>
                  <p className="text-sm text-dark/60">CEP {parish.cep}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-sm text-navy mb-1">Secretaria</p>
                <p className="text-sm text-dark/60">{schedule.office.weekdays}</p>
                <p className="text-sm text-dark/60">{schedule.office.saturday}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <a href={`https://wa.me/${parish.whatsapp}`} target="_blank" rel="noopener" className="flex items-center gap-3 bg-whatsapp text-white px-5 py-3 rounded-xl no-underline font-semibold text-sm hover:brightness-110 transition">
                <Phone size={18} /> WhatsApp: {parish.whatsappDisplay}
              </a>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <p className="text-sm text-dark/70">{parish.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <p className="text-sm text-dark/70">{parish.email}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={parish.instagram} target="_blank" rel="noopener" className="text-navy hover:text-gold transition"><IconInstagram size={22} /></a>
                <a href={parish.youtube} target="_blank" rel="noopener" className="text-navy hover:text-gold transition"><IconYoutube size={22} /></a>
                <a href={parish.facebook} target="_blank" rel="noopener" className="text-navy hover:text-gold transition"><IconFacebook size={22} /></a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Map */}
      <section className="bg-surface py-8 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-xl overflow-hidden shadow-md" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.51!3d-3.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAldeota%2C+Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Mapa"
            />
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Form */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[600px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">03 / Envie uma Mensagem</p>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold mb-6">Teremos prazer em atende-lo</h2>
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider block mb-1">Nome Completo</label>
              <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-muted bg-surface text-sm focus:outline-none focus:border-gold transition" />
            </div>
            <div>
              <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider block mb-1">E-mail</label>
              <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-muted bg-surface text-sm focus:outline-none focus:border-gold transition" />
            </div>
            <div>
              <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider block mb-1">Telefone</label>
              <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-muted bg-surface text-sm focus:outline-none focus:border-gold transition" />
            </div>
            <div>
              <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider block mb-1">Assunto</label>
              <select required className="w-full px-4 py-2.5 rounded-lg border border-muted bg-surface text-sm focus:outline-none focus:border-gold transition">
                <option value="">Selecione...</option>
                <option>Dizimo</option>
                <option>Pastoral</option>
                <option>Batizado</option>
                <option>Matrimonio</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider block mb-1">Mensagem</label>
              <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-muted bg-surface text-sm focus:outline-none focus:border-gold transition resize-none" />
            </div>
            <button type="submit" className="w-full bg-gold text-navy py-3 rounded-full text-sm font-bold uppercase tracking-wide border-none cursor-pointer hover:brightness-110 transition">
              {sent ? "Mensagem Enviada!" : "Enviar Mensagem"}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
