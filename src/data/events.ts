export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  isUpcoming: boolean;
  stall?: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Wadgaon Sheri Shopping Festival 2026',
    date: '1st & 2nd August 2026',
    venue: 'Ramchandra Sabhagruha, Wadgaon Sheri, Pune – 14',
    description: 'Our very FIRST exhibition! ✨ Discover beautiful hampers for every occasion, freshly baked brownies & cookies. Free entry for all visitors!',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
    isUpcoming: false,
    stall: 'B-5',
  },
];
