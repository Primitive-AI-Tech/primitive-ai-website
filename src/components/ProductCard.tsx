import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status?: 'active' | 'coming-soon';
  gradient?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  description,
  icon: Icon,
  href,
  status = 'active',
  gradient = 'from-purple-500 to-purple-700',
  className,
}) => {
  return (
    <div
      className={cn(
        'group glass-card p-6 sm:p-8 flex flex-col h-full hover-lift cursor-pointer relative overflow-hidden',
        className
      )}
    >
      {/* Gradient accent top bar */}
      <div className={cn('absolute top-0 left-0 right-0 h-1 bg-gradient-to-r', gradient)} />

      {/* Icon */}
      <div
        className={cn(
          'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5',
          gradient
        )}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Status badge */}
      {status === 'coming-soon' && (
        <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200 mb-3">
          Coming Soon
        </span>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
      <p className="text-sm font-medium text-purple-600 mb-3">{tagline}</p>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>

      {/* Link */}
      <Link
        to={href}
        className="inline-flex items-center text-sm font-semibold text-purple-600 mt-5 group-hover:text-purple-700 transition-colors"
      >
        Learn More
        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProductCard;
