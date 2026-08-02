export interface Hamper {
  id: string;
  title: string;
  occasion: 'birthday' | 'baby' | 'anniversary' | 'romantic' | 'corporate' | 'festive' | 'custom';
  image: string;
  priceRange: string;
  description: string;
  featured?: boolean;
  recipient?: 'him' | 'her' | 'baby' | 'couple' | 'team';
}

export const hampers: Hamper[] = [
  {
    id: '1',
    title: 'Birthday Bliss Hamper',
    occasion: 'birthday',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
    priceRange: '₹1,500 – ₹3,000',
    description: 'Chocolates, snacks, a personalized card & dried flowers in a wooden crate — packed with love.',
    featured: true,
    recipient: 'her',
  },
  {
    id: '2',
    title: 'Baby Welcome Setup',
    occasion: 'baby',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    priceRange: '₹2,500 – ₹5,000',
    description: 'Welcome the little one with balloon decor, baby clothes on mini hangers & a curated hamper.',
    featured: true,
    recipient: 'baby',
  },
  {
    id: '3',
    title: 'Romantic Couple Setup',
    occasion: 'romantic',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80',
    priceRange: '₹3,000 – ₹7,000',
    description: 'Balloon wall, photo string lights, roses & a curated gift hamper for two.',
    featured: true,
    recipient: 'couple',
  },
  {
    id: '4',
    title: 'Diwali Premium Hamper',
    occasion: 'festive',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80',
    priceRange: '₹1,000 – ₹4,000',
    description: 'Dry fruits, sweets, diyas & premium gifting in gorgeous festive packaging.',
    featured: true,
    recipient: 'her',
  },
  {
    id: '5',
    title: 'Anniversary Wooden Crate',
    occasion: 'anniversary',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    priceRange: '₹2,000 – ₹5,000',
    description: 'Personalized wooden frame, chocolates, flowers & a handwritten note of love.',
    recipient: 'couple',
  },
  {
    id: '6',
    title: 'Corporate Gifting Box',
    occasion: 'corporate',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    priceRange: '₹800 – ₹2,500',
    description: 'Branded hampers for client appreciation, onboarding & Diwali bulk gifting across Pune.',
    recipient: 'team',
  },
  {
    id: '7',
    title: 'Princess Baby Shower',
    occasion: 'baby',
    image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&q=80',
    priceRange: '₹3,000 – ₹6,000',
    description: 'A dreamy pink setup for the little princess — balloons, clothes, toys & a hamper.',
    recipient: 'baby',
  },
  {
    id: '8',
    title: 'Self-Care Birthday Box',
    occasion: 'birthday',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    priceRange: '₹1,200 – ₹2,500',
    description: 'Spa essentials, face masks, chocolates & a cozy candle — because she deserves it.',
    recipient: 'her',
  },
];
