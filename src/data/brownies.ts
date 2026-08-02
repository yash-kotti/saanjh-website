export interface BrownieFlavor {
  id: string;
  name: string;
  description: string;
  emoji: string;
  pricePerBox: string;
  isPopular?: boolean;
}

export const brownieFlavors: BrownieFlavor[] = [
  {
    id: '1',
    name: 'Classic Fudge Brownie',
    description: 'Rich dark chocolate, dense and fudgy with a crackly top',
    emoji: '🍫',
    pricePerBox: '₹300 / box of 6',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Nutella Swirl Brownie',
    description: 'Loaded with Nutella ribbons swirled inside every bite',
    emoji: '🌰',
    pricePerBox: '₹350 / box of 6',
    isPopular: true,
  },
  {
    id: '3',
    name: 'White Chocolate Brownie',
    description: 'Creamy white chocolate with a gorgeous golden crust',
    emoji: '🤍',
    pricePerBox: '₹320 / box of 6',
  },
  {
    id: '4',
    name: 'Cookies & Cream Brownie',
    description: 'Oreo chunks baked inside each brownie for a crunch surprise',
    emoji: '🍪',
    pricePerBox: '₹330 / box of 6',
  },
  {
    id: '5',
    name: 'Belgian Chocolate Cookies',
    description: 'Crispy outside, chewy inside, loaded with Belgian chips',
    emoji: '🍪',
    pricePerBox: '₹280 / box of 12',
    isPopular: true,
  },
  {
    id: '6',
    name: 'Assorted Gift Box',
    description: 'A mix of 3 brownie flavors — the perfect gifting combo',
    emoji: '🎁',
    pricePerBox: '₹450 / box of 12',
  },
];
