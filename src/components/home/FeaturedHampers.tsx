import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { AnimatedSection } from '../shared/AnimatedSection';
import { hampers, type Hamper } from '../../data/hampers';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const occasionLabels: Record<string, string> = {
  birthday: 'Birthday', baby: 'Baby Welcome', anniversary: 'Anniversary',
  romantic: 'Romantic', corporate: 'Corporate', festive: 'Festive', custom: 'Custom',
};

function HamperCard({ hamper }: { hamper: Hamper }) {
  const { openWhatsApp } = useWhatsApp();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [5, -5]);
  const rotateY = useTransform(x, [-60, 60], [-5, 5]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <AnimatedSection>
      <motion.div
        className="rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15 }}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={hamper.image}
            alt={hamper.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-brand-rose text-white text-xs font-medium px-3 py-1">
              {occasionLabels[hamper.occasion]}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-brand-dark mb-1">{hamper.title}</h3>
          <p className="text-brand-gold text-sm font-semibold mb-2">{hamper.priceRange}</p>
          <p className="text-brand-muted text-sm line-clamp-2 mb-4">{hamper.description}</p>
          <button
            onClick={() => openWhatsApp(`Hi Gayatri! I loved your "${hamper.title}" hamper. Can I order something similar? 🎁`)}
            className="flex items-center gap-1.5 text-brand-rose text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            Order this style <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export function FeaturedHampers() {
  const featured = hampers.filter((h) => h.featured);

  return (
    <section className="py-20 bg-brand-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FEATURED WORK"
          title="Thoughtfully curated, packed with love"
          subtitle="Every hamper is made to order — no two pieces are alike."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((hamper) => (
            <HamperCard key={hamper.id} hamper={hamper} />
          ))}
        </div>
      </div>
    </section>
  );
}
