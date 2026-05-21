
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatarUrl,
  className,
}) => {
  return (
    <div className={cn(
      'flex flex-col p-6 sm:p-8 rounded-2xl glass-card hover-lift relative overflow-hidden h-full',
      className
    )}>
      {/* Decorative quote */}
      <Quote className="absolute top-4 right-4 w-10 h-10 text-purple-200/30 rotate-180" />

      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
              )}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-base leading-relaxed text-foreground/90 mb-6 flex-1">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-200"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm ring-2 ring-purple-200">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-sm text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
