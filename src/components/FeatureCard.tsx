
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  animationDelay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  animationDelay = 0
}) => {
  return (
    <div
      className={cn(
        'flex flex-col p-6 sm:p-8 rounded-2xl h-full',
        'glass-card hover-lift',
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-5 shadow-md">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
