import { HeroSection } from '../components/home/HeroSection';
import { OccasionTiles } from '../components/home/OccasionTiles';
import { FeaturedHampers } from '../components/home/FeaturedHampers';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { GoogleReviews } from '../components/home/GoogleReviews';
import { InstagramCTA } from '../components/home/InstagramCTA';
import { StatsRow } from '../components/home/StatsRow';
import { HorizontalScrollGallery } from '../components/home/HorizontalScrollGallery';
import { MarqueeBand } from '../components/shared/MarqueeBand';
import { WhatsAppChips } from '../components/shared/WhatsAppChips';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Quick-reply chips — let visitors jump straight to WhatsApp with one tap */}
      <section className="bg-brand-warmWhite py-8 sm:py-10 border-b border-brand-gold/10">
        <WhatsAppChips />
      </section>
      <MarqueeBand variant="rose" />
      <StatsRow />
      <OccasionTiles />
      <FeaturedHampers />
      <MarqueeBand variant="gold" reverse />
      <HorizontalScrollGallery />
      <HowItWorks />
      <Testimonials />
      <GoogleReviews />
      <InstagramCTA />
    </>
  );
}

