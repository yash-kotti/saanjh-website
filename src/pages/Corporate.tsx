import { useForm } from 'react-hook-form';
import { Building2, Users, Truck, Heart, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { SectionHeader } from '../components/shared/SectionHeader';
import { buildWhatsAppLink } from '../lib/utils';

interface BulkFormData {
  companyName: string;
  contactPerson: string;
  quantity: string;
  occasion: string;
  budgetPerHamper: string;
  message: string;
}

const corporateOccasions = [
  { emoji: '🪔', label: 'Diwali Gifting' },
  { emoji: '🙏', label: 'Client Appreciation' },
  { emoji: '🎉', label: 'Employee Welcome' },
  { emoji: '🎊', label: 'Event Gifting' },
  { emoji: '💼', label: 'Thank You Boxes' },
  { emoji: '🏆', label: 'Achievement Awards' },
];

const usps = [
  { icon: Users,     title: 'Bulk Orders',          desc: 'Minimum 5 hampers for corporate pricing. Special rates for 20+ orders.' },
  { icon: Heart,     title: 'Personal Touch',        desc: 'Each hamper curated with care — not factory-packed.' },
  { icon: Truck,     title: 'On-time Delivery',      desc: 'Delivered across Pune on your schedule. Advance booking ensures priority.' },
  { icon: Building2, title: 'Custom Branding',       desc: 'Add your company logo, branded notes & custom packaging.' },
];

export default function Corporate() {
  const { register, handleSubmit } = useForm<BulkFormData>();

  const onSubmit = (data: BulkFormData) => {
    const msg = `Hi Gayatri! Corporate gifting enquiry 🏢

🏢 Company: ${data.companyName}
👤 Contact: ${data.contactPerson}
📦 Quantity: ${data.quantity} hampers
🎯 Occasion: ${data.occasion}
💰 Budget per hamper: ₹${data.budgetPerHamper}
📝 Additional info: ${data.message || 'None'}

Looking forward to discussing!`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">FOR BUSINESSES</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Thoughtful Corporate Gifting
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Make your team, clients and partners feel truly valued — with hampers that carry a personal touch no mass-market brand can replicate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-brand-cream px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="OCCASIONS WE SERVE" title="Gifting for every business milestone" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {corporateOccasions.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:border-brand-gold/50 hover:shadow-md transition-all">
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-semibold text-brand-dark text-sm">{o.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="WHY SAANJH" title="Why businesses choose us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((u, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-rose/10 mx-auto mb-4">
                    <u.icon className="h-6 w-6 text-brand-rose" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">{u.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed">{u.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Inquiry Form */}
      <section className="py-16 bg-brand-cream px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeader label="BULK ENQUIRY" title="Let's discuss your order" />
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Company Name *</label>
                <input {...register('companyName', { required: true })} type="text" placeholder="Your company"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Contact Person *</label>
                <input {...register('contactPerson', { required: true })} type="text" placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Quantity Required *</label>
                <input {...register('quantity', { required: true })} type="number" min="5" placeholder="Min. 5 hampers"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Budget per Hamper</label>
                <input {...register('budgetPerHamper')} type="text" placeholder="e.g. 1500"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Occasion *</label>
              <input {...register('occasion', { required: true })} type="text" placeholder="e.g. Diwali gifting for 50 employees"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Additional info</label>
              <textarea {...register('message')} rows={3} placeholder="Any specific requirements, branding needs, delivery timeline..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-rose resize-none" />
            </div>
            <button type="submit"
              className="w-full rounded-full bg-[#25D366] py-4 text-white font-bold hover:bg-[#1EB85A] transition-colors flex items-center justify-center gap-2">
              💬 Send Enquiry via WhatsApp
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-brand-muted">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Already serving businesses in Pune 🏙️
          </div>
        </div>
      </section>
    </div>
  );
}
