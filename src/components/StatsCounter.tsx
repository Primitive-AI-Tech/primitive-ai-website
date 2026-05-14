import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  className,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-1.5">
        {prefix}
        <span className="tabular-nums">{hasAnimated ? count : 0}</span>
        {suffix}
      </div>
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatsCounter;
