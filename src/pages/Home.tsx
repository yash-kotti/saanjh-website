import { HeroSection } from '../components/home/HeroSection';
import { OccasionTiles } from '../components/home/OccasionTiles';
import { FeaturedHampers } from '../components/home/FeaturedHampers';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramCTA } from '../components/home/InstagramCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OccasionTiles />
      <FeaturedHampers />
      <HowItWorks />
      <Testimonials />
      <InstagramCTA />
    </>
  );
}
