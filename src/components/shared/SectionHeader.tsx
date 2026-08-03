import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  /** Renders a large bold full-width heading â€” Cuberto style */
  bold?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  className,
  bold = false,
}: SectionHeaderProps) {
  if (bold) {
    return (
      <div className={cn('mb-12 overflow-hidden', center && 'text-center', className)}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4"
        >
          {label}
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'font-heading font-bold text-brand-dark leading-[0.9] tracking-tight',
              'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
              center && 'mx-auto'
            )}
          >
            {title}
          </motion.h2>
        </div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-brand-muted text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', center && 'text-center', className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight">
        {title}
      </h2>
      <div className={cn('mt-4 h-0.5 w-16 bg-brand-gold', center && 'mx-auto')} />
      {subtitle && (
        <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
