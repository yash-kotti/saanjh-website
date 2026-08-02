import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Simply DM us on Instagram (@saanjh.by.gayatri) or click any "Order on WhatsApp" button on the site! Tell us your occasion, budget and delivery date — and we\'ll take it from there.',
  },
  {
    q: 'Do you deliver outside Pune?',
    a: 'We currently serve Pune city and nearby areas. Reach out to discuss specific locations — we\'ll do our best to make it work!',
  },
  {
    q: 'How early should I order?',
    a: 'We recommend 2–3 days in advance for standard hampers. For large setups, balloon decor or bulk corporate orders, please give us 5–7 days. During festive seasons (Diwali, Christmas), earlier is better!',
  },
  {
    q: 'Can I choose specific items in the hamper?',
    a: 'Absolutely! That\'s our specialty — every hamper is fully customizable. Tell us the recipient\'s preferences, allergies, favorite things, and we\'ll curate accordingly.',
  },
  {
    q: 'Do you do same-day orders?',
    a: 'For urgent orders, please WhatsApp us directly and we\'ll try our best! It depends on availability. We love helping out in a crunch when possible.',
  },
  {
    q: 'What is the minimum order for corporate / bulk gifting?',
    a: 'Minimum 5 hampers for corporate bulk pricing. Special rates apply for 20+ orders. Reach out for a custom quote!',
  },
  {
    q: 'Can you add a personal message or handwritten note?',
    a: 'Always! Handwritten notes are actually one of our favorite things to add. Just tell us what you\'d like it to say and we\'ll write it with love.',
  },
  {
    q: 'Do you share a photo before delivery?',
    a: 'Yes! We always share a photo of the packed hamper on WhatsApp before delivery or collection, so you can see exactly what your loved one will receive.',
  },
  {
    q: 'Are the brownies homemade?',
    a: '100% homemade! Every brownie and cookie is made fresh for your order — no preservatives, just real ingredients and lots of love.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept UPI, Google Pay, PhonePe, and bank transfer. Payment details are shared on WhatsApp when you place your order.',
  },
  {
    q: 'Can I visit to see hampers in person?',
    a: 'We occasionally exhibit at local shopping festivals and events in Pune! Follow us on Instagram or check our Exhibitions page for upcoming dates.',
  },
  {
    q: 'Do you offer exchange or refunds?',
    a: 'Since all hampers are made to order and perishable items may be included, we do not offer refunds. However, if there\'s an issue with your order, please reach out immediately and we\'ll make it right!',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.04}>
      <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
          aria-expanded={open}
        >
          <span className="font-heading text-base font-semibold text-brand-dark pr-4">{q}</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
            <ChevronDown className="h-5 w-5 text-brand-rose" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-brand-muted text-sm leading-relaxed border-t border-gray-50 pt-4">
                {a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  return (
    <div>
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">GOT QUESTIONS?</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Everything you need to know
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
