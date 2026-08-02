import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { hampers, type Hamper } from '../data/hampers';
import { useWhatsApp } from '../hooks/useWhatsApp';

const occasionFilters = [
  { id: 'all', label: 'All' },
  { id: 'birthday', label: '🎂 Birthday' },
  { id: 'baby', label: '👶 Baby Welcome' },
  { id: 'anniversary', label: '💕 Anniversary' },
  { id: 'romantic', label: '💑 Romantic' },
  { id: 'corporate', label: '🏢 Corporate' },
  { id: 'festive', label: '🪔 Festive' },
];

function HamperCard({ hamper }: { hamper: Hamper }) {
  const { openWhatsApp } = useWhatsApp();
  const occasionLabels: Record<string, string> = {
    birthday: 'Birthday', baby: 'Baby Welcome', anniversary: 'Anniversary',
    romantic: 'Romantic', corporate: 'Corporate', festive: 'Festive', custom: 'Custom',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={hamper.image}
          alt={hamper.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 rounded-full bg-brand-rose text-white text-xs font-medium px-3 py-1">
          {occasionLabels[hamper.occasion]}
        </span>
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
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const urlOccasion = searchParams.get('occasion') ?? 'all';
  const [occasion, setOccasion] = useState(urlOccasion);
  const [budget] = useState('all');

  const filtered = useMemo(() => {
    return hampers.filter((h) => {
      const matchOccasion = occasion === 'all' || h.occasion === occasion;
      return matchOccasion;
    });
  }, [occasion, budget]);

  function FilterPill({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
          active
            ? 'bg-brand-rose text-white border-brand-rose shadow-sm'
            : 'bg-white border-gray-200 text-brand-dark hover:border-brand-rose hover:text-brand-rose'
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">OUR GALLERY</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Our Hamper Gallery
            </h1>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Every piece is made to order — tell us your occasion and budget and we'll create something perfect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <SlidersHorizontal className="h-4 w-4 text-brand-muted" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Occasion</span>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {occasionFilters.map((f) => (
              <FilterPill key={f.id} active={occasion === f.id} label={f.label} onClick={() => setOccasion(f.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-brand-muted mb-6">
            Showing <span className="font-semibold text-brand-dark">{filtered.length}</span> hampers
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🎁</span>
              <p className="text-brand-dark font-heading text-xl mb-2">No hampers found</p>
              <p className="text-brand-muted mb-6">Try a different filter or request a custom order!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((h) => <HamperCard key={h.id} hamper={h} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
