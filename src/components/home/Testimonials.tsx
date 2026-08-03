import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { testimonials } from '../../data/testimonials';

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 min-w-[280px] sm:min-w-[340px] flex-shrink-0 mx-2 select-none">
      <Quote className="h-7 w-7 text-brand-gold/50 mb-3" aria-hidden="true" />
      <p className="font-heading italic text-brand-dark leading-relaxed mb-4 text-sm sm:text-[15px]">
        {t.review}
      </p>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-gold fill-brand-gold" aria-hidden="true" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-brand-gold/10">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-roseLight text-white font-bold text-sm flex-shrink-0 shadow-rose">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
          <p className="text-xs text-brand-muted">{t.occasion}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials].reverse();

  return (
    <section className="py-20 sm:py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="HAPPY CUSTOMERS"
          title="Stories of moments we helped create"
          subtitle="Over 221 happy customers in Pune and counting"
          bold
        />
      </div>

      {/* Row 1 - scrolls left */}
      <div className="overflow-hidden mb-3 marquee-track" aria-label="Customer testimonials">
        <motion.div
          className="flex marquee-inner"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={1-+i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - scrolls right, hidden on mobile */}
      <div className="hidden sm:block overflow-hidden marquee-track" aria-hidden="true">
        <motion.div
          className="flex marquee-inner"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={2-+i} t={t} />
          ))}
        </motion.div>
      </div>

      <p className="text-center text-brand-muted text-xs mt-6 font-medium tracking-wide" aria-hidden="true">
        Every review is from a real Pune customer
      </p>
    </section>
  );
}