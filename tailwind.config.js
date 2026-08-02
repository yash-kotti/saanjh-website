/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          rose:       '#8B2252',
          roseLight:  '#B5477A',
          gold:       '#C9A84C',
          goldLight:  '#E8C97A',
          cream:      '#FFF8F0',
          warmWhite:  '#FFFBF7',
          dark:       '#2D1B0E',
          muted:      '#7C6B60',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFF8F0 0%, #FCE7D8 50%, #F5D0C8 100%)',
        'instagram-gradient': 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%':  { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
