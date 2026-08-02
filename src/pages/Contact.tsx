import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from '../components/shared/InstagramIcon';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { INSTAGRAM, EMAIL, buildWhatsAppLink } from '../lib/utils';

const contactCards = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Order on WhatsApp',
    sublabel: 'Fastest response ⚡',
    color: 'bg-[#25D366]/10 border-[#25D366]/30 hover:border-[#25D366]',
    iconColor: 'text-[#25D366]',
    action: () => window.open(buildWhatsAppLink('Hi Gayatri! I\'d like to enquire about a hamper 🎁'), '_blank', 'noopener,noreferrer'),
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@saanjh.by.gayatri',
    sublabel: 'See our latest work',
    color: 'bg-pink-50 border-pink-200 hover:border-pink-400',
    iconColor: 'text-pink-500',
    action: () => window.open(INSTAGRAM, '_blank', 'noopener,noreferrer'),
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    sublabel: 'For detailed enquiries',
    color: 'bg-brand-rose/5 border-brand-rose/20 hover:border-brand-rose',
    iconColor: 'text-brand-rose',
    action: () => window.location.href = `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra',
    sublabel: 'Delivering with love 📍',
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400',
    iconColor: 'text-amber-500',
    action: () => {},
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">REACH OUT</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Let's create something beautiful 🎁
            </h1>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Tell us your occasion, budget and delivery date — and we'll do the rest. 
              We typically respond within a few hours!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 bg-brand-warmWhite px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={card.action}
                  className={`rounded-2xl border-2 p-7 cursor-pointer transition-all duration-200 ${card.color}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && card.action()}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm flex-shrink-0`}>
                      <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1">{card.label}</p>
                      <p className="font-heading text-lg font-bold text-brand-dark leading-tight">{card.value}</p>
                      <p className="text-brand-muted text-sm mt-1">{card.sublabel}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Hours */}
          <AnimatedSection delay={0.4} className="mt-8">
            <div className="rounded-2xl bg-brand-dark text-white p-7 text-center">
              <Clock className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold mb-2">When to reach out</h3>
              <p className="text-gray-400">
                10:00 AM – 8:00 PM · Monday to Saturday
              </p>
              <p className="text-brand-gold/80 text-sm mt-2">
                We'll get back to you as soon as possible! 🌸
              </p>
            </div>
          </AnimatedSection>

          {/* Map placeholder */}
          <AnimatedSection delay={0.5} className="mt-5">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80"
                alt="Pune city — Saanjh delivery area"
                className="w-full aspect-video object-cover"
              />
              <div className="bg-brand-cream px-6 py-4 text-center">
                <p className="text-sm text-brand-muted flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-rose" />
                  Delivering happiness across Pune with love 💕
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
