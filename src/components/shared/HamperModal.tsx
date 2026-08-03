import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { type Hamper } from '../../data/hampers';
import { WhatsAppCTA } from './WhatsAppButton';

const occasionLabels: Record<string, string> = {
  birthday: 'Birthday', baby: 'Baby Welcome', anniversary: 'Anniversary',
  romantic: 'Romantic', corporate: 'Corporate', festive: 'Festive', custom: 'Custom',
};

const occasionColors: Record<string, string> = {
  birthday: 'bg-pink-100 text-pink-700',
  baby: 'bg-blue-100 text-blue-700',
  anniversary: 'bg-rose-100 text-rose-700',
  romantic: 'bg-red-100 text-red-700',
  corporate: 'bg-slate-100 text-slate-700',
  festive: 'bg-amber-100 text-amber-700',
  custom: 'bg-purple-100 text-purple-700',
};

interface HamperModalProps {
  hamper: Hamper | null;
  onClose: () => void;
}

export function HamperModal({ hamper, onClose }: HamperModalProps) {
  const [activeImg, setActiveImg] = useState(0);

  const gallery = hamper
    ? [hamper.image, ...(hamper.gallery ?? []).filter((g) => g !== hamper.image)]
    : [];

  // Reset image index when hamper changes
  useEffect(() => { setActiveImg(0); }, [hamper?.id]);

  // Close on Escape
  useEffect(() => {
    if (!hamper) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hamper, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (hamper) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [hamper]);

  const prevImg = useCallback(() => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const nextImg = useCallback(() => setActiveImg((i) => (i + 1) % gallery.length), [gallery.length]);

  return (
    <AnimatePresence>
      {hamper && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={hamper.title}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
          >
            <motion.div
              className="pointer-events-auto bg-white w-full sm:max-w-4xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row h-[92dvh] sm:h-auto sm:max-h-[85vh]"
              initial={{ opacity: 0, y: '100%', scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: '100%', scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            >
              {/* ── Left: Image Gallery ── */}
              <div className="relative w-full sm:w-[48%] bg-brand-dark flex-shrink-0">
                {/* Image: fixed height on mobile to leave room for details */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', maxHeight: '38vh' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImg}
                      src={gallery[activeImg]}
                      alt={`${hamper.title} - photo ${activeImg + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Occasion badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`rounded-full text-xs font-semibold px-3 py-1.5 ${occasionColors[hamper.occasion]}`}>
                      {occasionLabels[hamper.occasion]}
                    </span>
                  </div>

                  {/* Prev/Next arrows (only if multiple images) */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImg(); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImg(); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Image counter */}
                  {gallery.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {activeImg + 1} / {gallery.length}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {gallery.length > 1 && (
                  <div className="flex gap-2 p-3 bg-brand-dark overflow-x-auto scrollbar-none">
                    {gallery.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          i === activeImg ? 'border-brand-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`View photo ${i + 1}`}
                        aria-pressed={i === activeImg}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Right: Details ── */}
              {/* min-h-0 lets the flex child shrink below content size so overflow-y-auto works */}
              <div className="flex flex-col flex-1 min-h-0 overflow-y-auto overscroll-contain">
                {/* Close button */}
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 flex justify-end px-5 pt-4 pb-2">
                  <button
                    onClick={onClose}
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4 text-brand-dark" />
                  </button>
                </div>

                <div className="px-5 sm:px-7 pb-6 flex flex-col gap-5 flex-1">
                  {/* Title + price */}
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark leading-tight mb-2">
                      {hamper.title}
                    </h2>
                    <p className="text-brand-gold text-xl font-bold">{hamper.priceRange}</p>
                    <p className="text-brand-muted text-xs mt-1">All prices vary by customization</p>
                  </div>

                  {/* Description */}
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {hamper.description}
                  </p>

                  {/* What's included */}
                  {hamper.includes && hamper.includes.length > 0 && (
                    <div>
                      <h3 className="font-heading text-base font-bold text-brand-dark mb-3">
                        What's included
                      </h3>
                      <ul className="space-y-2">
                        {hamper.includes.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2.5 text-sm text-brand-dark"
                          >
                            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-gold/15 flex items-center justify-center">
                              <Check className="h-3 w-3 text-brand-gold" />
                            </span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Customization note */}
                  <div className="rounded-2xl bg-brand-cream px-4 py-3 text-sm text-brand-muted">
                    Every hamper is <strong className="text-brand-dark">fully customizable</strong> — tell Gayatri your budget, occasion & preferences and she'll curate it perfectly.
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 mt-auto pt-2">
                    <WhatsAppCTA
                      label="Order on WhatsApp"
                      message={`Hi Gayatri! I'm interested in the "${hamper.title}" (${hamper.priceRange}). Can you help me customise it?`}
                      className="py-3.5 text-base"
                    />
                    <button
                      onClick={onClose}
                      className="w-full flex items-center justify-center gap-1.5 rounded-full border-2 border-brand-rose py-3 text-brand-rose font-semibold text-sm hover:bg-brand-rose hover:text-white transition-colors duration-200"
                    >
                      Browse more hampers <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
