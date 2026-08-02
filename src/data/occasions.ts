export interface Occasion {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export const occasions: Occasion[] = [
  { id: 'birthday',    label: 'Birthday',      emoji: '🎂', color: 'bg-pink-50 hover:bg-pink-100 border-pink-200 hover:border-pink-400' },
  { id: 'baby',        label: 'Baby Welcome',  emoji: '👶', color: 'bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-400' },
  { id: 'anniversary', label: 'Anniversary',   emoji: '💕', color: 'bg-rose-50 hover:bg-rose-100 border-rose-200 hover:border-rose-400' },
  { id: 'romantic',    label: 'Romantic',      emoji: '💑', color: 'bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-400' },
  { id: 'corporate',   label: 'Corporate',     emoji: '🏢', color: 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-slate-400' },
  { id: 'festive',     label: 'Festive',       emoji: '🪔', color: 'bg-amber-50 hover:bg-amber-100 border-amber-200 hover:border-amber-400' },
  { id: 'custom',      label: 'Custom ✨',     emoji: '🎁', color: 'bg-purple-50 hover:bg-purple-100 border-purple-200 hover:border-purple-400' },
];
