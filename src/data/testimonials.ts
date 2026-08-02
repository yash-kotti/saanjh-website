export interface Testimonial {
  id: string;
  name: string;
  occasion: string;
  review: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya S.',
    occasion: 'Birthday Hamper',
    review: 'Gayatri put so much thought into every item in the crate. My best friend literally cried happy tears when she opened it! Absolutely recommend Saanjh for anything special. 😭❤️',
    avatar: 'P',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sneha M.',
    occasion: 'Baby Welcome Setup',
    review: 'The baby room setup was absolutely magical. Every little detail was perfect. The balloon arrangement, the tiny clothes on hangers — it was picture perfect! Highly recommend.',
    avatar: 'S',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rahul K.',
    occasion: 'Anniversary Hamper',
    review: 'Ordered a surprise hamper for my wife\'s anniversary. She was so happy. The wooden crate with the flowers and chocolates was stunning. Will definitely order again for Diwali!',
    avatar: 'R',
    rating: 5,
  },
  {
    id: '4',
    name: 'Anjali P.',
    occasion: 'Corporate Gifting',
    review: 'Got 20 Diwali hampers made for our team. Each one was beautifully curated and delivered on time. Our team absolutely loved them. Loved working with Saanjh — so professional!',
    avatar: 'A',
    rating: 5,
  },
  {
    id: '5',
    name: 'Meera T.',
    occasion: 'Romantic Setup',
    review: 'The balloon wall with the photo string was everything I imagined for our anniversary. Gayatri understood exactly what I wanted just from a description. Truly a personal touch!',
    avatar: 'M',
    rating: 5,
  },
];
