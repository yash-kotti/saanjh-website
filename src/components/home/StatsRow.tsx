import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  emoji: string;
}

const stats: Stat[] = [
  { value: 221, suffix: '+', label: 'Happy Customers', emoji: '❤️' },
  { value: 50,  suffix: '+', label: 'Hamper Styles',   emoji: '🎁' },
  { value: 3,   suffix: ' days', label: 'Avg. Delivery',   emoji: '🚀' },
  { value: 100, suffix: '%', label: 'Made to Order',   emoji: '✨' },
];

function Counter({ target, suffix, duration = 1500 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduce) { setCount(target); return; }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsRow() {
  return (
    <section className="relative bg-brand-dark py-14 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-rose/10 via-transparent to-brand-gold/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-2" aria-hidden="true">{stat.emoji}</span>
              <p className="font-heading text-4xl md:text-5xl font-bold text-brand-gold leading-none mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-brand-muted text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
