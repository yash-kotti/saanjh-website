import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = '7420825461'; // Replace with real number
export const EMAIL = 'Saanjhbygayatri011@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/saanjh.by.gayatri/';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
