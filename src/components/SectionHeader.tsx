
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  gradient?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  centered = true,
  gradient = false,
  light = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-8 md:mb-14',
      centered && 'text-center',
      className
    )}>
      {badge && (
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5',
          light
            ? 'bg-white/10 text-white/80 border border-white/20'
            : 'bg-purple-100 text-purple-700 border border-purple-200'
        )}>
          {badge}
        </div>
      )}
      <h2 className={cn(
        'section-heading mb-4',
        centered && 'mx-auto max-w-4xl',
        gradient && 'gradient-text',
        light && 'text-white',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed',
          centered && 'mx-auto',
          light ? 'text-white/70' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
