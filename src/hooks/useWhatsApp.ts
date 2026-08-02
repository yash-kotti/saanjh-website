import { buildWhatsAppLink } from '../lib/utils';

export function useWhatsApp() {
  const openWhatsApp = (message = 'Hi Gayatri! I would like to place an order 🎁') => {
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };
  return { openWhatsApp };
}
