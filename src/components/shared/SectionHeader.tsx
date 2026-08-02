import { cn } from '../../lib/utils';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn('mb-12', center && 'text-center', className)}>
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
    </AnimatedSection>
  );
}
