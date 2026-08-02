import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export function WhatsAppButton() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-brand-dark text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Order on WhatsApp 💬
        <div className="absolute top-full right-4 border-4 border-transparent border-t-brand-dark" />
      </div>
      {/* Button */}
      <button
        onClick={() => openWhatsApp()}
        aria-label="Order on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1EB85A] hover:scale-110 transition-all duration-200"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
