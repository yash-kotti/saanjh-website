import { motion } from 'framer-motion';
import { InstagramIcon } from '../shared/InstagramIcon';
import { INSTAGRAM } from '../../lib/utils';

export function InstagramCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-rose">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        {['🎁', '💕', '🎂', '🪔', '👶', '✨', '🎊', '💫'].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl"
            style={{
              top: `${10 + (i * 11) % 80}%`,
              left: `${5 + (i * 13) % 90}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-instagram-gradient shadow-2xl">
              <InstagramIcon className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            See our latest creations
          </h2>
          <p className="text-white/80 text-lg mb-3">
            @saanjh.by.gayatri · 221+ followers and growing 🌸
          </p>
          <p className="text-white/60 text-sm mb-10 max-w-md mx-auto">
            Follow us on Instagram for new hampers, behind-the-scenes packing, 
            and happy customer moments every day!
          </p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-brand-rose font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            <InstagramIcon className="h-6 w-6" />
            Follow @saanjh.by.gayatri
          </a>
        </motion.div>
      </div>
    </section>
  );
}
