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
  const bgOpacity = useTransform(scrollY, [0, 60], [0.7, 0.95]);
  const blurAmount = useTransform(scrollY, [0, 60], [8, 20]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 border-b border-white/30"
        style={{
          backgroundColor: bgOpacity.get() < 0.95 ? `rgba(255,251,247,${bgOpacity.get()})` : 'rgba(255,251,247,0.95)',
          backdropFilter: `blur(${blurAmount.get()}px)`,
          WebkitBackdropFilter: `blur(${blurAmount.get()}px)`,
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-rose via-brand-gold to-brand-rose origin-left"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight group" aria-label="Saanjh by Gayatri - Home">
              <span className="font-heading text-2xl font-bold text-gradient-rose tracking-tight group-hover:opacity-80 transition-opacity">
                Saanjh
              </span>
              <span className="text-[10px] text-brand-muted tracking-[0.25em] uppercase -mt-0.5">
                by Gayatri
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors group',
                      isActive
                        ? 'text-brand-rose'
                        : 'text-brand-dark hover:text-brand-rose'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center">
              <motion.button
                onClick={() => openWhatsApp()}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1EB85A] transition-colors shadow-lg shadow-green-500/20"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Order on WhatsApp
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-cream transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
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
            className="fixed top-16 inset-x-0 z-40 glass-card border-b border-white/30 shadow-card md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
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
                        ? 'text-brand-rose bg-brand-rose/5 font-semibold'
                        : 'text-brand-dark hover:text-brand-rose hover:bg-brand-rose/5'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => { openWhatsApp(); setIsMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Order on WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


