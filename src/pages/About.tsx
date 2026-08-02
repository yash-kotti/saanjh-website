import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { InstagramIcon } from '../components/shared/InstagramIcon';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { SectionHeader } from '../components/shared/SectionHeader';
import { INSTAGRAM } from '../lib/utils';

const values = [
  { emoji: '💝', title: 'Personal Touch', desc: 'Every hamper is curated by Gayatri personally — not a warehouse team.' },
  { emoji: '✨', title: 'Quality First', desc: 'Only the best products make it into a Saanjh hamper. No compromises.' },
  { emoji: '🎁', title: 'Made with Love', desc: 'Every ribbon, every note, every arrangement — crafted with genuine care.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">OUR STORY</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              The woman behind Saanjh 🌸
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-brand-warmWhite px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=85"
                    alt="Gayatri curating a hamper"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Floating quote */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 max-w-[200px] rounded-2xl bg-brand-rose p-4 shadow-xl text-white text-xs font-heading italic leading-relaxed"
                >
                  "Every hamper carries a piece of my heart."
                  <div className="mt-2 text-brand-goldLight text-[10px] not-italic">— Gayatri</div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">GAYATRI'S STORY</p>
              <h2 className="font-heading text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Started with love, built on moments
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Saanjh started with a simple belief — that every celebration deserves more than just 
                  a store-bought gift. Growing up in Pune, I always loved the joy of giving. 
                  But I kept feeling that gifts could be so much more personal, more thoughtful, more <em>you</em>.
                </p>
                <p>
                  So I started curating hampers from home, pouring love into every crate, 
                  every ribbon, every handwritten note. What began as gifts for close friends and 
                  family slowly grew into something beautiful — a small business built on the belief 
                  that gifting should feel personal.
                </p>
                <p>
                  Today, Saanjh serves families, couples and businesses across Pune. 
                  Whether it's a baby welcome that makes a mother cry happy tears, 
                  or a corporate hamper that makes an employee feel truly seen — 
                  every Saanjh creation carries that same personal touch.
                </p>
                <p className="font-semibold text-brand-dark">
                  That's the Saanjh promise. 🌸
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cream px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="OUR VALUES" title="What Saanjh stands for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:border-brand-gold/50 hover:shadow-md transition-all">
                  <span className="text-5xl block mb-4">{v.emoji}</span>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">{v.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <Sparkles className="h-8 w-8 text-brand-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-3">
              Follow our journey on Instagram ✨
            </h2>
            <p className="text-brand-muted mb-6">
              Daily hamper peeks, happy customer moments & behind-the-scenes with Gayatri.
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-rose px-8 py-4 text-white font-bold hover:bg-brand-roseLight transition-all hover:scale-105">
              <InstagramIcon className="h-5 w-5" />
              @saanjh.by.gayatri
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
