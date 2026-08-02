import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, Gift } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { AnimatedSection } from '../shared/AnimatedSection';

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
    <section className="bg-brand-cream py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="HOW IT WORKS"
          title="Ordering is as easy as 1-2-3"
          subtitle="No app, no complex checkout — just a WhatsApp message and we'll handle the rest."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Connecting line */}
          <div className="absolute top-12 left-1/4 right-1/4 h-0.5 bg-brand-gold/30 hidden md:block" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="up">
              <div className="relative flex flex-col items-center text-center p-6">
                {/* Step number circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: i * 0.15 + 0.3 }}
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-rose text-white shadow-lg shadow-brand-rose/30"
                >
                  <span className="text-3xl">{step.emoji}</span>
                </motion.div>

                <div className="mb-2 text-xs font-bold tracking-widest uppercase text-brand-gold">
                  Step {step.number}
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
