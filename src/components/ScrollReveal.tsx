import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  threshold?: number;
  className?: string;
  stagger?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  className,
  stagger = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay then add visible class
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const revealClass = stagger
    ? 'stagger-children'
    : direction === 'left'
    ? 'reveal-left'
    : direction === 'right'
    ? 'reveal-right'
    : direction === 'scale'
    ? 'reveal-scale'
    : 'reveal';

  return (
    <div ref={ref} className={cn(revealClass, className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
