import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const GOOGLE_REVIEW_LINK = 'https://g.page/r/YOUR_PLACE_ID/review';
const GOOGLE_MAPS_LINK   = 'https://www.google.com/maps/search/Saanjh+by+Gayatri+Pune';
const OVERALL_RATING     = 4.9;
const TOTAL_REVIEWS      = 109;

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const s = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`${s} ${star <= rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-300 fill-gray-300'}`} aria-hidden="true" />
      ))}
    </div>
  );
}

/** Shared card used in both mobile and desktop */
function ReviewCard({ review, index, variant = 'desktop' }: {
  review: typeof testimonials[0];
  index: number;
  variant?: 'mobile' | 'desktop';
}) {
  const isMobile = variant === 'mobile';

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 40, scale: isMobile ? 1 : 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: isMobile ? index * 0.07 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-rose to-brand-roseLight text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
            {review.avatar}
          </div>
          <div>
            <p className="font-bold text-brand-dark text-sm leading-tight">{review.name}</p>
            <p className="text-brand-muted text-xs">{review.occasion}</p>
          </div>
        </div>
        <GoogleLogo size={20} />
      </div>
      <StarRating rating={review.rating} />
      <Quote className="h-5 w-5 text-brand-gold/40 -mb-1" aria-hidden="true" />
      <p className="text-brand-dark text-sm leading-relaxed">{review.review}</p>
    </motion.div>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-label="Google Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-2">WHAT CUSTOMERS SAY</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
              Our Customer says...
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border-2 border-brand-dark px-6 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200"
            aria-label="Write a Google review"
          >
            Write a review
          </a>
        </div>

        {/* MOBILE: compact summary + vertical stack */}
        <div className="sm:hidden space-y-4">
          {/* Compact summary bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-cream flex items-center justify-center flex-shrink-0">
              <span className="text-2xl" aria-hidden="true">&#127873;</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-brand-dark text-sm leading-tight">Saanjh by Gayatri</p>
              {/* Stars + rating number on one line, review count BELOW */}
              <div className="flex items-center gap-1.5 mt-0.5">
                <StarRating rating={5} />
                <span className="font-bold text-brand-dark text-sm">{OVERALL_RATING}</span>
              </div>
              <p className="text-brand-muted text-xs mt-0.5">{TOTAL_REVIEWS} Google reviews</p>
            </div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold text-brand-dark flex-shrink-0"
            >
              <GoogleLogo size={12} />
              Google
            </a>
          </motion.div>

          {/* Vertical review cards */}
          {testimonials.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} variant="mobile" />
          ))}

          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-2xl border-2 border-brand-dark py-3.5 text-sm font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200"
          >
            <GoogleLogo size={16} />
            Write a Google Review
          </a>
        </div>

        {/* DESKTOP: summary card left + staggered grid right */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-5">

          {/* Summary card spans full height on left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:row-span-2 bg-gradient-to-b from-brand-cream to-white rounded-2xl p-6 border border-brand-gold/20 flex flex-col items-center justify-center text-center gap-5 shadow-sm"
          >
            <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <span className="text-3xl" aria-hidden="true">&#127873;</span>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-brand-dark text-base leading-tight">Saanjh by Gayatri</p>
              {/* Stars */}
              <div className="flex justify-center">
                <StarRating rating={5} size="lg" />
              </div>
              {/* Rating number - below stars */}
              <p className="font-bold text-brand-dark text-2xl">{OVERALL_RATING}</p>
              {/* Review count - below rating */}
              <p className="text-brand-muted text-xs">{TOTAL_REVIEWS} Google reviews</p>
            </div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 px-4 py-2 text-xs font-bold text-brand-dark hover:border-brand-rose hover:text-brand-rose transition-all duration-200"
            >
              <GoogleLogo size={14} />
              View on Google
            </a>
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-dark text-white px-4 py-2.5 text-xs font-bold hover:bg-brand-rose transition-colors duration-200"
            >
              <GoogleLogo size={14} />
              Write a review
            </a>
          </motion.div>

          {/* Review cards - staggered scroll reveal in grid */}
          {testimonials.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} variant="desktop" />
          ))}
        </div>

        <p className="text-center text-brand-muted text-xs mt-8">
          Loved your experience? Share it on Google - it helps other customers find us!
        </p>
      </div>
    </section>
  );
}

