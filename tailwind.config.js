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
        'rose-gold-gradient': 'linear-gradient(135deg, #8B2252 0%, #C9A84C 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFFBF7 0%, #FFF8F0 100%)',
      },
      boxShadow: {
        'rose':    '0 8px 32px rgba(139,34,82,0.18)',
        'gold':    '0 8px 32px rgba(201,168,76,0.18)',
        'glass':   '0 8px 32px rgba(139,34,82,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'card':    '0 2px 8px rgba(45,27,14,0.06), 0 16px 48px rgba(45,27,14,0.08)',
        'card-hover': '0 4px 16px rgba(45,27,14,0.08), 0 24px 64px rgba(45,27,14,0.12)',
      },
      animation: {
        'float':          'float 3s ease-in-out infinite',
        'float-slow':     'float 4.5s ease-in-out infinite',
        'pulse-slow':     'pulse 3s ease-in-out infinite',
        'marquee':        'marquee 28s linear infinite',
        'marquee-reverse':'marquee-reverse 28s linear infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'blob':           'blob 10s ease-in-out infinite',
        'count-up':       'count-up 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'scale(1) rotate(0deg)' },
          '33%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'scale(1.05) rotate(60deg)' },
          '66%':      { borderRadius: '50% 60% 40% 50% / 30% 40% 60% 50%', transform: 'scale(0.97) rotate(120deg)' },
        },
      },
    },
  },
  plugins: [],
};
