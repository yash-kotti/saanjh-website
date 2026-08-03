import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../shared/SectionHeader';
import { occasions } from '../../data/occasions';

export function OccasionTiles() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-brand-cream py-16 sm:py-24 overflow-hidden">
      {/* Decorative background text — very faint, hidden on mobile */}
      <div
        className="absolute inset-0 items-center justify-center pointer-events-none select-none hidden sm:flex z-0"
        aria-hidden="true"
      >
        <span className="font-heading text-[12rem] font-bold text-brand-rose/[0.04] whitespace-nowrap">
          Occasions
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Regular (non-bold) header to avoid large-text wrapping gap on mobile */}
        <SectionHeader
          label="SHOP BY OCCASION"
          title="Every moment deserves a Saanjh touch"
        />

        {/* Mobile: 3-column grid so all 7 tiles are always visible.
            Desktop: flex-wrap centered row */}
        <div className="grid grid-cols-3 gap-3 sm:hidden">
          {occasions.map((occasion, i) => (
            <motion.button
              key={occasion.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => navigate(`/shop?occasion=${occasion.id}`)}
              className="flex flex-col items-center gap-2 rounded-2xl glass-card border border-white/60 px-2 py-4 cursor-pointer active:scale-95 w-full"
              aria-label={`Shop ${occasion.label} hampers`}
            >
              <span className="text-3xl" aria-hidden="true">{occasion.emoji}</span>
              <span className="text-[11px] font-semibold text-brand-dark text-center leading-tight">
                {occasion.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Desktop flex-wrap row */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {occasions.map((occasion, i) => (
            <motion.button
              key={occasion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/shop?occasion=${occasion.id}`)}
              className="group flex flex-col items-center gap-3 rounded-2xl glass-card border border-white/60 px-8 py-6 hover:shadow-rose/10 hover:shadow-xl cursor-pointer transition-shadow duration-300 active:scale-95"
              aria-label={`Shop ${occasion.label} hampers`}
            >
              <motion.span
                className="text-4xl"
                whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                aria-hidden="true"
              >
                {occasion.emoji}
              </motion.span>
              <span className="text-sm font-semibold text-brand-dark whitespace-nowrap group-hover:text-brand-rose transition-colors duration-200">
                {occasion.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
