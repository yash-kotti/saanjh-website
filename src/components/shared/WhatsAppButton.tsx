import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

/** Reusable attention-grabbing WhatsApp button â€” use anywhere */
export function WhatsAppCTA({
  label = 'Order on WhatsApp',
  message,
  className = '',
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  const { openWhatsApp } = useWhatsApp();
  return (
    <motion.button
      onClick={() => openWhatsApp(message)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{
        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 },
      }}
      className={`whatsapp-shimmer relative flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-bold shadow-lg shadow-green-500/30 active:scale-95 ${className}`}
      aria-label={label}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" aria-hidden="true" />
      <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      {label}
    </motion.button>
  );
}

export function WhatsAppButton() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <>
      {/* â”€â”€ Desktop: floating circle button (bottom-right) â”€â”€ */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50 group">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" aria-hidden="true" />
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-brand-dark text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Order on WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-brand-dark" aria-hidden="true" />
        </div>
        <motion.button
          onClick={() => openWhatsApp()}
          aria-label="Order on WhatsApp"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 4 } }}
          className="whatsapp-shimmer relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </motion.button>
      </div>

      {/* â”€â”€ Mobile: sticky full-width bottom bar â”€â”€ */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
        <div className="bg-white/90 backdrop-blur-md border-t border-gray-100 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <WhatsAppCTA label="Order on WhatsApp" className="w-full py-3.5 text-base" />
        </div>
      </div>
    </>
  );
}

