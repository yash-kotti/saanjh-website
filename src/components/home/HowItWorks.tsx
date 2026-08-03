import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, Gift } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';

const steps = [
  {
    number: '1',
    icon: ShoppingBag,
    title: 'Browse',
    description: 'Explore our hamper gallery and find your perfect style — filter by occasion, budget and recipient.',
    emoji: '🛍️',
  },
  {
    number: '2',
    icon: MessageCircle,
    title: 'WhatsApp Us',
    description: 'Send us a message with your requirements and budget. We\'ll suggest options and customize everything.',
    emoji: '💬',
  },
  {
    number: '3',
    icon: Gift,
    title: 'Receive with Love',
    description: 'We curate, pack beautifully and deliver across Pune — with a handwritten note if you\'d like.',
    emoji: '🎁',
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-brand-warmWhite py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="HOW IT WORKS"
          title="Ordering is as easy as 1-2-3"
          subtitle="No app, no complex checkout — just a WhatsApp message and we'll handle the rest."
          bold
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Animated connecting line */}
          <motion.div
            className="absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-brand-rose/30 via-brand-gold to-brand-rose/30 hidden md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full"
            >
              {/* Glass card — h-full makes all cards equal height in the grid row */}
              <div className="relative glass-card rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-card-hover transition-shadow duration-300 overflow-hidden h-full">
                {/* Large decorative number — contained inside card */}
                <div
                  className="absolute top-0 right-2 font-heading text-[6rem] font-bold text-brand-rose/[0.06] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, delay: i * 0.18 + 0.25 }}
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-roseLight text-white shadow-rose"
                >
                  <span className="text-3xl" aria-hidden="true">{step.emoji}</span>
                </motion.div>

                <p className="mb-2 text-xs font-bold tracking-widest uppercase text-brand-gold">
                  Step {step.number}
                </p>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
