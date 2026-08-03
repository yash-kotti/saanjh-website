import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

/**
 * Wraps any button/link with a magnetic hover effect.
 * The element gently moves toward the cursor when hovered.
 */
export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  as: Tag = 'button',
  href,
  target,
  rel,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Subtle rotation follows cursor position
  const rotateX = useTransform(springY, [-20, 20], [3, -3]);
  const rotateY = useTransform(springX, [-20, 20], [-3, 3]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const commonProps = {
    onClick,
    'aria-label': ariaLabel,
    className,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, rotateX, rotateY, transformPerspective: 600 }}
      className="inline-block"
    >
      {Tag === 'a' ? (
        <a href={href} target={target} rel={rel} aria-label={ariaLabel} className={className}>
          {children}
        </a>
      ) : (
        <button {...commonProps}>{children}</button>
      )}
    </motion.div>
  );
}
