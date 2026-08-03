import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { hampers } from '../../data/hampers';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { useHamperModal } from '../../context/HamperModalContext';
import { SectionHeader } from '../shared/SectionHeader';

const occasionLabels: Record<string, string> = {
  birthday: 'Birthday', baby: 'Baby Welcome', anniversary: 'Anniversary',
  romantic: 'Romantic', corporate: 'Corporate', festive: 'Festive', custom: 'Custom',
};

function HamperSlide({ hamper, index, openWhatsApp, onView }: {
  hamper: typeof hampers[0];
  index: number;
  openWhatsApp: (msg: string) => void;
  onView: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onClick={onView}
      role="button"
      tabIndex={0}
      aria-label={`View ${hamper.title} details`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onView(); }}
      className="group relative flex-shrink-0 w-[78vw] sm:w-[42vw] lg:w-[28vw] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-colors duration-300 cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={hamper.image}
          alt={`${hamper.title} by Saanjh by Gayatri`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-1">
          {occasionLabels[hamper.occasion]}
        </span>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">{hamper.title}</h3>
        <p className="text-white/60 text-sm mb-3">{hamper.priceRange}</p>
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onView(); }}
            className="flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 border border-white/30 hover:bg-white hover:text-brand-dark transition-colors duration-200 active:scale-95"
            aria-label={`View details of ${hamper.title}`}
          >
            View Details
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); openWhatsApp(`Hi Gayatri! I'm interested in the "${hamper.title}" hamper. Can I get more details?`); }}
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold px-4 py-2 shadow-lg active:scale-95 transition-transform"
            aria-label={`Order ${hamper.title} on WhatsApp`}
          >
            Order <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4 font-heading text-5xl font-bold text-white/10 leading-none select-none" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  );
}

export function HorizontalScrollGallery() {
  const { openWhatsApp } = useWhatsApp();
  const { openModal } = useHamperModal();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // 8 cards at ~28vw each = ~224vw track. Need to translate ~124vw to reveal all.
  // -70% of track width gives enough room at all common viewport sizes.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  return (
    <>
      {/* â”€â”€ Desktop: sticky horizontal scroll â”€â”€ */}
      <section
        ref={sectionRef}
        className="hidden sm:block relative bg-brand-dark"
        style={{ height: '420vh' }}
        aria-label="Hamper gallery"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 w-full">
            <SectionHeader
              label="ALL HAMPERS"
              title="Scroll to explore"
              center={false}
              bold
              className="mb-0 [&_h2]:text-white [&_p]:text-brand-gold"
            />
          </div>
          <motion.div className="flex gap-4 pl-8" style={{ x }}>
            {hampers.map((h, i) => (
              <HamperSlide key={h.id} hamper={h} index={i} openWhatsApp={openWhatsApp} onView={() => openModal(h)} />
            ))}
          </motion.div>
          <div className="mx-8 mt-6 h-px bg-white/10">
            <motion.div className="h-px bg-brand-gold origin-left" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </section>

      {/* â”€â”€ Mobile: swipeable horizontal scroll â”€â”€ */}
      <section className="sm:hidden bg-brand-dark py-12" aria-label="Hamper gallery">
        <div className="px-4 mb-6">
          <SectionHeader
            label="ALL HAMPERS"
            title="Explore our work"
            center={false}
            bold
            className="mb-0 [&_h2]:text-white [&_h2]:text-4xl [&_p]:text-brand-gold"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-none pl-4 pr-4 pb-4">
          {hampers.map((h, i) => (
            <HamperSlide key={h.id} hamper={h} index={i} openWhatsApp={openWhatsApp} onView={() => openModal(h)} />
          ))}
        </div>
        <p className="text-center text-white/30 text-xs mt-3">Swipe to explore</p>
      </section>
    </>
  );
}
