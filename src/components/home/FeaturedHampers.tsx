import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { hampers, type Hamper } from '../../data/hampers';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { useHamperModal } from '../../context/HamperModalContext';

const occasionLabels: Record<string, string> = {
  birthday: 'Birthday', baby: 'Baby Welcome', anniversary: 'Anniversary',
  romantic: 'Romantic', corporate: 'Corporate', festive: 'Festive', custom: 'Custom',
};

function HamperCard({ hamper, large = false }: { hamper: Hamper; large?: boolean }) {
  const { openWhatsApp } = useWhatsApp();
  const { openModal } = useHamperModal();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-card hover:shadow-card-hover transition-shadow duration-500 ${large ? 'row-span-2' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => openModal(hamper)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      role="button"
      tabIndex={0}
      aria-label={`View ${hamper.title} details`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(hamper); }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${large ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <img
          src={hamper.image}
          alt={`${hamper.title} - curated by Saanjh by Gayatri`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay — always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5 gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); openModal(hamper); }}
            className="flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2.5 border border-white/40 hover:bg-white hover:text-brand-dark transition-colors duration-200 active:scale-95"
            aria-label={`View details of ${hamper.title}`}
          >
            View Details
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); openWhatsApp(`Hi Gayatri! I'm interested in the "${hamper.title}" hamper. Can I get more details?`); }}
            className="flex items-center gap-2 rounded-full bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 shadow-lg active:scale-95 transition-transform"
            aria-label={`Order ${hamper.title} on WhatsApp`}
          >
            Order <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Occasion badge */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-brand-rose/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 shadow">
            {occasionLabels[hamper.occasion]}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5">
        <h3 className={`font-heading font-bold text-brand-dark mb-1 ${large ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'}`}>
          {hamper.title}
        </h3>
        <p className="text-brand-gold text-sm font-semibold mb-1">{hamper.priceRange}</p>
        <p className="text-brand-muted text-sm line-clamp-2 hidden sm:block">{hamper.description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturedHampers() {
  const featured = hampers.filter((h) => h.featured);
  const [first, ...rest] = featured;

  return (
    <section className="py-24 bg-brand-warmWhite relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FEATURED WORK"
          title="Thoughtfully curated, packed with love"
          subtitle="Every hamper is made to order - no two pieces are alike."
          bold
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {/* Large featured card */}
          {first && (
            <div className="lg:row-span-2">
              <HamperCard hamper={first} large />
            </div>
          )}
          {/* Remaining cards */}
          {rest.map((hamper) => (
            <HamperCard key={hamper.id} hamper={hamper} />
          ))}
          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl bg-gradient-to-br from-brand-rose to-brand-roseLight p-8 flex flex-col justify-between min-h-[200px] text-white"
          >
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">Custom Order</p>
              <h3 className="font-heading text-2xl font-bold leading-snug">
                Don't see your perfect hamper?
              </h3>
              <p className="text-white/80 text-sm mt-2">We build it from scratch, just for you.</p>
            </div>
            <a
              href="/custom-order"
              className="mt-6 self-start flex items-center gap-2 rounded-full bg-white text-brand-rose text-sm font-bold px-5 py-2.5 hover:bg-brand-gold hover:text-white transition-colors duration-200"
            >
              Create custom hamper <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


