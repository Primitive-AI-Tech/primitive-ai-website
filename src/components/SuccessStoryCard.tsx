import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuccessStoryCardProps {
  title: string;
  industry: string;
  summary: string;
  metric: string;
  metricLabel: string;
  href?: string;
  bgColor?: string;
  className?: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  title,
  industry,
  summary,
  metric,
  metricLabel,
  href = '#',
  bgColor = 'from-purple-600 to-purple-800',
  className,
}) => {
  return (
    <div
      className={cn(
        'group relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end',
        'transition-all duration-500 hover:-translate-y-1',
        className
      )}
    >
      {/* Background gradient */}
      <div className={cn('absolute inset-0 bg-gradient-to-br', bgColor)} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="dot-bg w-full h-full" />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
        {/* Industry badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/20 mb-4">
          {industry}
        </span>

        {/* Metric highlight */}
        <div className="mb-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">{metric}</span>
          <span className="block text-sm text-white/70 mt-1">{metricLabel}</span>
        </div>

        {/* Title & summary */}
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">{summary}</p>

        {/* Link */}
        <Link
          to={href}
          className="inline-flex items-center text-sm font-semibold text-white hover:text-purple-200 transition-colors"
        >
          Read Case Study
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
