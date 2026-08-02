import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../shared/SectionHeader';
import { occasions } from '../../data/occasions';

export function OccasionTiles() {
  const navigate = useNavigate();

  return (
    <section className="bg-brand-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="SHOP BY OCCASION"
          title="Every moment deserves a Saanjh touch"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {occasions.map((occasion, i) => (
            <motion.button
              key={occasion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.03 }}
              onClick={() => navigate(`/shop?occasion=${occasion.id}`)}
              className={`flex flex-col items-center gap-2 rounded-2xl border-2 px-7 py-5 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer ${occasion.color}`}
            >
              <span className="text-4xl" role="img" aria-label={occasion.label}>
                {occasion.emoji}
              </span>
              <span className="text-sm font-semibold text-brand-dark whitespace-nowrap">
                {occasion.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
