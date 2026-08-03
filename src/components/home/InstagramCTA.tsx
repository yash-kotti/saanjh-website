import { motion } from 'framer-motion';
import { InstagramIcon } from '../shared/InstagramIcon';
import { INSTAGRAM } from '../../lib/utils';

const previewImages = [
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&q=70',
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&q=70',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=200&q=70',
  'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=200&q=70',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&q=70',
];

export function InstagramCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-dark">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #8B2252, #C9A84C, #B5477A, #8B2252)',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 8s ease infinite',
        }}
        aria-hidden="true"
      />
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Instagram preview grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-3 gap-2 w-full max-w-xs flex-shrink-0"
            aria-hidden="true"
          >
            {previewImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 opacity-80 hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: CTA content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
              >
                <InstagramIcon className="h-10 w-10 text-white" aria-hidden="true" />
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                  style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)' }}
                  aria-hidden="true"
                />
              </div>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              See our latest<br />
              <span className="text-gradient-gold">creations daily</span>
            </h2>
            <p className="text-white/70 text-base mb-2">@saanjh.by.gayatri</p>
            <p className="text-white/50 text-sm mb-8 max-w-sm">
              New hampers, behind-the-scenes packing, and happy customer moments - every day.
            </p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white font-bold text-base hover:scale-105 hover:shadow-2xl transition-all duration-200"
              style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              Follow @saanjh.by.gayatri
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


