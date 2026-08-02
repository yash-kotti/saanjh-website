import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Heart } from 'lucide-react';
import { InstagramIcon } from '../shared/InstagramIcon';
import { INSTAGRAM, EMAIL } from '../../lib/utils';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const quickLinks = [
  { to: '/shop',         label: 'Shop Gallery' },
  { to: '/custom-order', label: 'Custom Order' },
  { to: '/corporate',    label: 'Corporate Gifting' },
  { to: '/brownies',     label: 'Brownies & Cookies' },
  { to: '/events',       label: 'Exhibitions' },
  { to: '/about',        label: 'About Gayatri' },
  { to: '/faq',          label: 'FAQs' },
];

export function Footer() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-3xl font-bold text-brand-roseLight">Saanjh</span>
              <p className="text-xs text-brand-gold tracking-[0.2em] uppercase mt-0.5">by Gayatri</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Thoughtfully curated hampers for every occasion — packed with love from Pune. 
              Celebrate moments the Saanjh way ✨
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-roseLight transition-colors group"
            >
              <InstagramIcon className="h-5 w-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
              @saanjh.by.gayatri
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-brand-roseLight transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-gold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20 group-hover:bg-[#25D366]/40 transition-colors">
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                </div>
                Order on WhatsApp
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-rose/20 group-hover:bg-brand-rose/40 transition-colors">
                  <Mail className="h-4 w-4 text-brand-roseLight" />
                </div>
                {EMAIL}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/20">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                </div>
                Delivering across Pune 📍
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© 2026 Saanjh by Gayatri · All rights reserved</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-brand-roseLight fill-brand-roseLight" /> in Pune
          </span>
        </div>
      </div>
    </footer>
  );
}
