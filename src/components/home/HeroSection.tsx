import { useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { useTextScramble } from '../../hooks/useTextScramble';
import { MagneticButton } from '../shared/MagneticButton';

const floatingItems = [
  { emoji: '🎂', top: '10%',  right: '12%', duration: 2.2 },
  { emoji: '👶', top: '30%',  right: '5%',  duration: 3.0 },
  { emoji: '💕', top: '60%',  right: '15%', duration: 2.5 },
  { emoji: '🎁', top: '75%',  right: '3%',  duration: 1.9 },
];

const headlineWords = ['Celebrate', 'moments', 'the', 'Saanjh', 'way'];

export function HeroSection() {
  const { openWhatsApp } = useWhatsApp();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -80]);
  const { display: labelDisplay, scramble } = useTextScramble("Pune's Boutique Gifting Brand", 1000);

  // Auto-scramble the label on mount for a premium entrance effect
  useEffect(() => {
    const t = setTimeout(scramble, 400);
    return () => clearTimeout(t);
  }, [scramble]);

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">

      {/* â”€â”€ Animated mesh gradient blobs â”€â”€ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 animate-blob"
          style={{ background: 'radial-gradient(circle, #B5477A 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)', animationDelay: '3.5s' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #FCD0B8 0%, transparent 70%)', animationDelay: '7s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* â”€â”€ Left: Text â”€â”€ */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold font-mono"
                aria-label="Pune's Boutique Gifting Brand"
                onMouseEnter={scramble}
              >
                {labelDisplay}
              </span>
            </motion.div>

            {/* Word-by-word stagger headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-dark leading-tight mb-2" aria-label="Celebrate moments the Saanjh way">
              <span className="block overflow-hidden">
                {headlineWords.slice(0, 3).map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {headlineWords.slice(3).map((word, i) => (
                  <motion.span
                    key={word}
                    className={`inline-block mr-4 ${word === 'Saanjh' ? 'text-gradient-rose italic' : ''}`}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.46 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4, type: 'spring', stiffness: 200 }}
                  aria-hidden="true"
                > ✨</motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-brand-muted text-base md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Thoughtfully curated hampers for every occasion - packed with love and delivered across Pune.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10"
            >
              {/* WhatsApp CTA first on mobile — highest conversion */}
              <MagneticButton
                onClick={() => openWhatsApp()}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 sm:py-3.5 text-white font-bold text-base hover:bg-[#1EB85A] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-green-500/25 w-full sm:w-auto"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Order on WhatsApp
              </MagneticButton>
              <MagneticButton
                as="a"
                href="/shop"
                className="group relative flex items-center justify-center rounded-full bg-brand-rose px-8 py-4 sm:py-3.5 text-white font-semibold hover:bg-brand-roseLight transition-all duration-300 shadow-rose hover:shadow-rose hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Browse Hampers
              </MagneticButton>
            </motion.div>

            {/* Trust badge - glass morphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full glass-card px-5 py-3"
            >
              <span className="text-xl" aria-hidden="true">&#10084;&#65039;</span>
              <div>
                <p className="text-sm font-bold text-brand-dark leading-none">221+ Happy Customers</p>
                <p className="text-xs text-brand-muted mt-0.5">Delivering joy across Pune</p>
              </div>
              <div className="ml-2 flex -space-x-1.5">
                {['P', 'S', 'R', 'A'].map((l) => (
                  <div key={l} className="h-6 w-6 rounded-full bg-brand-rose text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {l}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* â”€â”€ Right: Image â”€â”€ */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ y: imageY }}
          >
            {/* Decorative ring behind image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-gold/20 to-brand-rose/20 blur-2xl" aria-hidden="true" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85"
                alt="Beautifully curated gift hamper by Saanjh by Gayatri, Pune"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rose/30 via-transparent to-transparent" aria-hidden="true" />

              {/* Bottom glass label */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl px-4 py-3">
                <p className="text-brand-dark font-heading font-semibold text-sm">Birthday Bliss Hamper ✨</p>
                <p className="text-brand-gold text-xs font-semibold mt-0.5">₹1,500 – ₹3,000 · Made to order</p>
              </div>
            </div>

            {/* Floating emoji badges */}
            {floatingItems.map((item, i) => (
              <motion.div
                key={i}
                className="absolute hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl glass-card text-2xl shadow-card"
                style={{ top: item.top, right: item.right }}
                animate={shouldReduceMotion ? {} : { y: [-8, 8] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: item.duration,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
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
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}


