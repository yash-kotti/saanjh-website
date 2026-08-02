import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-rose/5 to-brand-gold/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="HAPPY CUSTOMERS"
          title="Stories of moments we helped create"
          subtitle="Over 221 happy customers in Pune and counting 🌸"
        />
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={constraintsRef}>
        <motion.div
          className="flex gap-5 px-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[380px] rounded-2xl bg-white p-7 shadow-md select-none flex-shrink-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              {/* Review */}
              <p className="font-heading italic text-brand-dark leading-relaxed mb-6 text-base">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-rose text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.occasion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-center text-brand-muted text-xs mt-6">
        ← Drag to explore more →
      </p>
    </section>
  );
}
