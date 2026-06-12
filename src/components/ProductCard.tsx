import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status?: 'active' | 'coming-soon' | 'beta';
  className?: string;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  description,
  icon: Icon,
  href,
  status = 'active',
  className,
  children,
}) => {
  const { t } = useTranslation('common');

  return (
    <div
      className={cn(
        'group glass-card p-6 sm:p-8 flex flex-col h-full hover-lift cursor-pointer relative overflow-hidden',
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-5 relative z-10">
        <Icon className="w-7 h-7 text-purple-700" />
      </div>

      {/* Status badge */}
      {status === 'coming-soon' && (
        <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200 mb-3 relative z-10">
          {t('badge.soon')}
        </span>
      )}
      {status === 'beta' && (
        <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 mb-3 relative z-10">
          {t('badge.beta')}
        </span>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm font-medium text-purple-600 mb-3">{tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 lg:max-w-[85%]">{description}</p>

        {/* Link */}
        {href.startsWith('http') ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center self-start text-sm font-semibold text-purple-600 mt-5 group-hover:text-purple-700 transition-colors"
          >
            {t('learn_more')}
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <Link
            to={href}
            className="inline-flex items-center self-start text-sm font-semibold text-purple-600 mt-5 group-hover:text-purple-700 transition-colors"
          >
            {t('learn_more')}
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {/* Custom Art */}
      {children}
    </div>
  );
};

export default ProductCard;
