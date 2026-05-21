import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
}) => {
  return (
    <div
      className={cn(
        'group relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md',
        'transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30 hover:-translate-y-1',
        'overflow-hidden',
        className
      )}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/20 flex items-center justify-center mb-5 group-hover:border-purple-400/40 transition-colors">
          <Icon className="w-6 h-6 text-purple-300" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-purple-200/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
