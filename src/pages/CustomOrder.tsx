import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Clock } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { SectionHeader } from '../components/shared/SectionHeader';
import { buildWhatsAppLink } from '../lib/utils';
import { occasions } from '../data/occasions';

interface FormData {
  occasion: string;
  budget: string;
  deliveryDate: string;
  recipientName: string;
  specialRequests: string;
  yourName: string;
  phone: string;
}

const budgetOptions = [
  { id: 'under1500', label: 'Under ₹1,500', desc: 'Great starter hampers' },
  { id: '1500-3000', label: '₹1,500 – ₹3,000', desc: 'Most popular range' },
  { id: '3000-5000', label: '₹3,000 – ₹5,000', desc: 'Premium curated' },
  { id: '5000plus', label: '₹5,000+', desc: 'Luxury / Grand setups' },
];

const whyCustom = [
  { emoji: '🎯', title: 'Fully Personalized', desc: 'Every item chosen to suit the recipient — their tastes, needs and occasion.' },
  { emoji: '💰', title: 'Any Budget', desc: 'From ₹500 to ₹10,000+ — we create the best hamper within your budget.' },
  { emoji: '❤️', title: 'Made with Love', desc: 'Gayatri personally curates every custom order with care and creativity.' },
];

export default function CustomOrder() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, setValue } = useForm<FormData>();
  const selectedOccasion = watch('occasion');
  const selectedBudget = watch('budget');

  const onSubmit = (data: FormData) => {
    const msg = `Hi Gayatri! I'd like to place a custom order 🎁

📌 Occasion: ${data.occasion}
💰 Budget: ${data.budget}
📅 Delivery Date: ${data.deliveryDate}
👤 Recipient: ${data.recipientName}
📝 Special requests: ${data.specialRequests || 'None'}

My name: ${data.yourName}
Phone: ${data.phone}

Looking forward to hearing from you!`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const steps = [
    { n: 1, label: 'Occasion' },
    { n: 2, label: 'Budget & Date' },
    { n: 3, label: 'Your Details' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">BESPOKE GIFTING</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Your vision, our craft ✨
            </h1>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Tell us about the occasion and we'll create something uniquely special — 
              no template, just pure thoughtfulness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why custom */}
      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCustom.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <span className="text-4xl block mb-3">{item.emoji}</span>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="py-16 bg-brand-cream px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeader label="PLACE AN ORDER" title="Tell us about your occasion" center />

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  step > s.n ? 'bg-green-500 text-white' : step === s.n ? 'bg-brand-rose text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s.n ? <Check className="h-4 w-4" /> : s.n}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step === s.n ? 'text-brand-rose' : 'text-brand-muted'}`}>
                  {s.label}
                </span>
                {i < steps.length - 1 && <ChevronRight className="h-4 w-4 text-gray-300" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark mb-6">What's the occasion?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {occasions.map((o) => (
                      <button
                        key={o.id} type="button"
                        onClick={() => setValue('occasion', o.label)}
                        className={`flex flex-col items-center gap-2 rounded-2xl border-2 px-4 py-4 transition-all ${
                          selectedOccasion === o.label ? 'border-brand-rose bg-brand-rose/5' : 'border-gray-200 bg-white hover:border-brand-rose/50'
                        }`}
                      >
                        <span className="text-3xl">{o.emoji}</span>
                        <span className="text-xs font-semibold text-brand-dark">{o.label}</span>
                      </button>
                    ))}
                  </div>
                  <button type="button" disabled={!selectedOccasion} onClick={() => setStep(2)}
                    className="w-full rounded-full bg-brand-rose py-4 text-white font-semibold disabled:opacity-40 hover:bg-brand-roseLight transition-colors">
                    Next: Budget & Date →
                  </button>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark mb-6">Budget & delivery details</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-3">Select your budget</label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetOptions.map((b) => (
                          <button key={b.id} type="button"
                            onClick={() => setValue('budget', b.label)}
                            className={`rounded-xl border-2 p-4 text-left transition-all ${
                              selectedBudget === b.label ? 'border-brand-rose bg-brand-rose/5' : 'border-gray-200 bg-white hover:border-brand-rose/50'
                            }`}>
                            <p className="font-semibold text-sm text-brand-dark">{b.label}</p>
                            <p className="text-xs text-brand-muted mt-0.5">{b.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Delivery date needed</label>
                      <input type="date" {...register('deliveryDate', { required: true })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Recipient's name</label>
                      <input type="text" placeholder="Who is this for?" {...register('recipientName', { required: true })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 rounded-full border-2 border-brand-rose py-4 text-brand-rose font-semibold hover:bg-brand-rose/5">← Back</button>
                    <button type="button" onClick={() => setStep(3)} className="flex-1 rounded-full bg-brand-rose py-4 text-white font-semibold hover:bg-brand-roseLight">Next →</button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark mb-6">Your details & special requests</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Special requests (optional)</label>
                      <textarea rows={3} placeholder="Any specific items, colors, messages you'd like included..."
                        {...register('specialRequests')}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose resize-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Your name *</label>
                      <input type="text" placeholder="Your name" {...register('yourName', { required: true })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Phone number *</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" {...register('phone', { required: true })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 rounded-full border-2 border-brand-rose py-4 text-brand-rose font-semibold">← Back</button>
                    <button type="submit" className="flex-1 rounded-full bg-[#25D366] py-4 text-white font-semibold hover:bg-[#1EB85A] flex items-center justify-center gap-2">
                      💬 Send via WhatsApp
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <Clock className="h-10 w-10 text-brand-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-3">
              From enquiry to delivery in 2–5 days 🚀
            </h2>
            <p className="text-brand-muted">
              Large setups or bulk corporate orders: 5–7 days. Contact us early for festive seasons!
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
