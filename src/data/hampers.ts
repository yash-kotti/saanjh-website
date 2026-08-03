export interface Hamper {
  id: string;
  title: string;
  occasion: 'birthday' | 'baby' | 'anniversary' | 'romantic' | 'corporate' | 'festive' | 'custom';
  image: string;
  priceRange: string;
  description: string;
  featured?: boolean;
  recipient?: 'him' | 'her' | 'baby' | 'couple' | 'team';
  /** Extra images shown in the modal gallery */
  gallery?: string[];
  /** Bullet list of what's included */
  includes?: string[];
}

export const hampers: Hamper[] = [
  {
    id: '1',
    title: 'Birthday Bliss Hamper',
    occasion: 'birthday',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
    priceRange: '₹1,500 – ₹3,000',
    description: 'Chocolates, snacks, a personalized card & dried flowers in a wooden crate — packed with love.',
    featured: true,
    recipient: 'her',
    gallery: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=85',
    ],
    includes: ['Assorted chocolates & candies', 'Personalized handwritten card', 'Dried flower arrangement', 'Wooden gift crate', 'Decorative tissue & ribbon'],
  },
  {
    id: '2',
    title: 'Baby Welcome Setup',
    occasion: 'baby',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=85',
    priceRange: '₹2,500 – ₹5,000',
    description: 'Welcome the little one with balloon decor, baby clothes on mini hangers & a curated hamper.',
    featured: true,
    recipient: 'baby',
    gallery: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=85',
      'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&q=85',
    ],
    includes: ['Balloon arch / backdrop decor', 'Baby clothes on mini hangers', 'Curated baby gift hamper', 'Name tag & welcome banner', 'Personalized note from parents'],
  },
  {
    id: '3',
    title: 'Romantic Couple Setup',
    occasion: 'romantic',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=85',
    priceRange: '₹3,000 – ₹7,000',
    description: 'Balloon wall, photo string lights, roses & a curated gift hamper for two.',
    featured: true,
    recipient: 'couple',
    gallery: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
    ],
    includes: ['Balloon wall / photo backdrop', 'String lights with photos', 'Fresh rose arrangement', 'Couple gift hamper', 'Personalized message board'],
  },
  {
    id: '4',
    title: 'Diwali Premium Hamper',
    occasion: 'festive',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&q=85',
    priceRange: '₹1,000 – ₹4,000',
    description: 'Dry fruits, sweets, diyas & premium gifting in gorgeous festive packaging.',
    featured: true,
    recipient: 'her',
    gallery: [
      'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&q=85',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
    ],
    includes: ['Premium dry fruits mix', 'Assorted Indian sweets', 'Decorative diyas (set of 4)', 'Festive packaging with bow', 'Personalized Diwali card'],
  },
  {
    id: '5',
    title: 'Anniversary Wooden Crate',
    occasion: 'anniversary',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    priceRange: '₹2,000 – ₹5,000',
    description: 'Personalized wooden frame, chocolates, flowers & a handwritten note of love.',
    recipient: 'couple',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=85',
    ],
    includes: ['Personalized photo frame', 'Premium chocolates', 'Fresh flower bunch', 'Handwritten love note', 'Wooden gift crate'],
  },
  {
    id: '6',
    title: 'Corporate Gifting Box',
    occasion: 'corporate',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85',
    priceRange: '₹800 – ₹2,500',
    description: 'Branded hampers for client appreciation, onboarding & Diwali bulk gifting across Pune.',
    recipient: 'team',
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
    ],
    includes: ['Branded outer packaging', 'Assorted premium snacks', 'Company branded card', 'Dry fruits / chocolates', 'Custom label printing'],
  },
  {
    id: '7',
    title: 'Princess Baby Shower',
    occasion: 'baby',
    image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&q=85',
    priceRange: '₹3,000 – ₹6,000',
    description: 'A dreamy pink setup for the little princess — balloons, clothes, toys & a hamper.',
    recipient: 'baby',
    gallery: [
      'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&q=85',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=85',
    ],
    includes: ['Pink balloon arch & decor', 'Baby girl clothes set', 'Soft toy gift', 'Baby shower hamper', 'Welcome banner & bunting'],
  },
  {
    id: '8',
    title: 'Self-Care Birthday Box',
    occasion: 'birthday',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=85',
    priceRange: '₹1,200 – ₹2,500',
    description: 'Spa essentials, face masks, chocolates & a cozy candle — because she deserves it.',
    recipient: 'her',
    gallery: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=85',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
    ],
    includes: ['Luxury face masks (set of 3)', 'Scented soy candle', 'Premium chocolates', 'Body lotion & scrub', 'Personalized birthday card'],
  },
];
