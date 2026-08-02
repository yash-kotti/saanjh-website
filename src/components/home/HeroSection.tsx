import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const floatingItems = [
  { emoji: '🎂', top: '10%',  right: '12%', duration: 2.2 },
  { emoji: '👶', top: '30%',  right: '5%',  duration: 3.0 },
  { emoji: '💕', top: '60%',  right: '15%', duration: 2.5 },
  { emoji: '🎁', top: '75%',  right: '3%',  duration: 1.9 },
];

export function HeroSection() {
  const { openWhatsApp } = useWhatsApp();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -80]);

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-brand-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Pune's Boutique Gifting Brand
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-dark leading-tight mb-6">
              Celebrate moments{' '}
              <span className="text-gradient-rose italic">the Saanjh way</span>{' '}
              ✨
            </h1>

            <p className="text-brand-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Thoughtfully curated hampers for every occasion — packed with love and 
              delivered across Pune. Because every moment deserves to be special.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/shop"
                className="rounded-full bg-brand-rose px-8 py-3.5 text-white font-semibold hover:bg-brand-roseLight hover:scale-105 transition-all duration-200 shadow-lg shadow-brand-rose/25"
              >
                Browse Hampers
              </Link>
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-white font-semibold hover:bg-[#1EB85A] hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </button>
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold/40 bg-white/70 backdrop-blur-sm px-5 py-2.5 shadow-sm"
            >
              <span className="text-xl">❤️</span>
              <span className="text-sm font-semibold text-brand-dark">
                221+ Happy Customers in Pune
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ y: imageY }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85"
                alt="Beautiful gift hamper curated by Saanjh by Gayatri"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rose/20 to-transparent" />
            </div>

            {/* Floating emoji badges */}
            {floatingItems.map((item, i) => (
              <motion.div
                key={i}
                className="absolute hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg text-2xl"
                style={{ top: item.top, right: item.right }}
                animate={shouldReduceMotion ? {} : { y: [-8, 8] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: item.duration,
                  ease: 'easeInOut',
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-muted"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
