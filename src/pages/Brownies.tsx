import { motion } from 'framer-motion';
import { Package, Star } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { SectionHeader } from '../components/shared/SectionHeader';
import { brownieFlavors } from '../data/brownies';
import { buildWhatsAppLink } from '../lib/utils';

export default function Brownies() {
  const orderBrownie = (flavorName: string) => {
    const msg = `Hi Gayatri! I'd like to order ${flavorName} 🍫 — can you share the details?`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #3D1A00 0%, #6B2D0A 50%, #8B2252 100%)' }}
      >
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-goldLight mb-3">HANDMADE WITH LOVE</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            Brownies & Cookies 🍫
          </h1>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            Made fresh for every order · Perfect as a standalone gift or as an add-on to any hamper
          </p>
        </AnimatedSection>
      </section>

      {/* Flavor grid */}
      <section className="py-20 bg-brand-warmWhite px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="OUR MENU" title="Fresh baked, full of love" subtitle="Every batch is made fresh to order — no preservatives, just real ingredients." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brownieFlavors.map((flavor, i) => (
              <AnimatedSection key={flavor.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(139, 34, 82, 0.15)' }}
                  className="relative rounded-2xl bg-white border-2 border-transparent hover:border-brand-gold/50 p-7 transition-all duration-300 shadow-sm"
                >
                  {flavor.isPopular && (
                    <div className="absolute -top-3 -right-3 flex items-center gap-1 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-white shadow-md">
                      <Star className="h-3 w-3 fill-white" /> Popular
                    </div>
                  )}
                  <div className="text-5xl mb-4 text-center">{flavor.emoji}</div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2 text-center">{flavor.name}</h3>
                  <p className="text-brand-muted text-sm text-center mb-4 leading-relaxed">{flavor.description}</p>
                  <div className="flex items-center justify-between mb-5">
                    <span className="rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-sm px-4 py-2">
                      {flavor.pricePerBox}
                    </span>
                  </div>
                  <button
                    onClick={() => orderBrownie(flavor.name)}
                    className="w-full rounded-full bg-brand-rose py-3 text-white text-sm font-semibold hover:bg-brand-roseLight transition-colors"
                  >
                    Order Now 🍫
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on CTA */}
      <section className="py-16 bg-brand-cream px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <Package className="h-12 w-12 text-brand-rose mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-3">
              Add brownies to your hamper! 🎁
            </h2>
            <p className="text-brand-muted mb-6">
              Brownies & cookies can be added as an upgrade to any gift hamper — a sweet touch that everyone loves!
            </p>
            <button
              onClick={() => window.open(buildWhatsAppLink("Hi Gayatri! I'd like to add brownies to my hamper order 🍫"), '_blank', 'noopener,noreferrer')}
              className="rounded-full bg-brand-rose px-8 py-4 text-white font-semibold hover:bg-brand-roseLight transition-colors hover:scale-105 duration-200"
            >
              Add to Hamper → WhatsApp Us
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Custom packaging */}
      <section className="py-16 bg-brand-dark px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-white mb-3">
              Custom packaging for gifts & bulk 🎀
            </h2>
            <p className="text-gray-400 mb-6">
              Custom labels, branded boxes and special packaging available for corporate bulk orders and gifting.
            </p>
            <button
              onClick={() => window.open(buildWhatsAppLink("Hi Gayatri! I need custom packaged brownies for bulk/corporate gifting"), '_blank', 'noopener,noreferrer')}
              className="rounded-full border-2 border-brand-gold px-8 py-4 text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all"
            >
              Enquire about Custom Packaging
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
