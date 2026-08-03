const items = [
  '🎁 Birthday Hampers',
  '✨ Custom Gifting',
  '👶 Baby Welcome Setups',
  '💕 Anniversary Surprises',
  '🪔 Festive Hampers',
  '🏢 Corporate Gifting',
  '🍫 Homemade Brownies',
  '💑 Romantic Setups',
  '🎊 Celebrations, big & small',
  '📍 Delivering across Pune',
];

interface MarqueeBandProps {
  variant?: 'rose' | 'gold' | 'dark';
  reverse?: boolean;
}

export function MarqueeBand({ variant = 'rose', reverse = false }: MarqueeBandProps) {
  const doubled = [...items, ...items];

  const bgClass =
    variant === 'gold'
      ? 'bg-brand-gold text-brand-dark'
      : variant === 'dark'
      ? 'bg-brand-dark text-brand-cream'
      : 'bg-brand-rose text-white';

  return (
    <div className={`py-3 overflow-hidden ${bgClass} marquee-track`} aria-hidden="true">
      <div
        className={`marquee-inner flex gap-0 whitespace-nowrap ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-1 text-sm font-semibold px-6 opacity-90">
            {item}
            <span className="mx-2 opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
