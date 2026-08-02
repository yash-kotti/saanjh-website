import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/shop',         label: 'Shop' },
  { to: '/custom-order', label: 'Custom Order' },
  { to: '/corporate',    label: 'Corporate' },
  { to: '/brownies',     label: 'Brownies' },
  { to: '/about',        label: 'About' },
  { to: '/contact',      label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWhatsApp } = useWhatsApp();
  const { scrollYProgress, scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-gold/10"
        style={{ boxShadow: `0 4px 20px rgba(0,0,0,${shadowOpacity})` }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className="font-heading text-2xl font-bold text-brand-rose tracking-tight">
                Saanjh
              </span>
              <span className="text-[10px] text-brand-muted tracking-[0.2em] uppercase -mt-0.5">
                by Gayatri
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-1.5 text-sm font-medium rounded-lg transition-colors',
                      isActive
                        ? 'text-brand-rose bg-brand-rose/5'
                        : 'text-brand-dark hover:text-brand-rose hover:bg-brand-rose/5'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1EB85A] transition-all hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-cream transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white border-b border-brand-gold/20 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 text-sm font-medium rounded-xl transition-colors',
                      isActive
                        ? 'text-brand-rose bg-brand-rose/5'
                        : 'text-brand-dark hover:text-brand-rose hover:bg-brand-cream'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => { openWhatsApp(); setIsMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
