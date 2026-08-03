import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const chips = [
  { emoji: '🎂', label: 'Birthday hamper under ₹2,000',   message: 'Hi Gayatri! I need a birthday hamper under ₹2,000. Can you help? 🎂' },
  { emoji: '🪔', label: 'Diwali hampers (bulk)',           message: 'Hi Gayatri! I\'m looking for Diwali hampers in bulk. Can you share options? 🪔' },
  { emoji: '🏢', label: '10+ corporate hampers',          message: 'Hi Gayatri! I need 10+ corporate hampers for our team. Can you share details? 🏢' },
  { emoji: '👶', label: 'Baby welcome setup',             message: 'Hi Gayatri! I need a baby welcome setup. What are the options? 👶' },
  { emoji: '💕', label: 'Anniversary surprise',           message: 'Hi Gayatri! I want to plan an anniversary surprise hamper. Can you help? 💕' },
  { emoji: '⚡', label: 'Same-day delivery',              message: 'Hi Gayatri! I need a hamper delivered today. Is that possible? ⚡' },
  { emoji: '✨', label: 'Custom hamper',                  message: 'Hi Gayatri! I want to create a fully custom hamper. Can we discuss? ✨' },
];

interface WhatsAppChipsProps {
  title?: string;
  className?: string;
}

export function WhatsAppChips({ title = 'Quick enquiry — tap to message Gayatri instantly', className = '' }: WhatsAppChipsProps) {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-brand-muted mb-4">
          {title}
        </p>
      )}

      {/* Chips row — horizontal scroll on mobile, wrap on desktop */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none px-4 sm:px-0 pb-1">
        {chips.map((chip, i) => (
          <motion.button
            key={chip.label}
            onClick={() => openWhatsApp(chip.message)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-white border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 px-4 py-2 text-sm font-medium text-brand-dark hover:text-[#128C7E] transition-all duration-200 shadow-sm whitespace-nowrap group"
            aria-label={`Send WhatsApp message: ${chip.message}`}
          >
            <span aria-hidden="true">{chip.emoji}</span>
            {chip.label}
            <MessageCircle className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#25D366] transition-colors flex-shrink-0" aria-hidden="true" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
