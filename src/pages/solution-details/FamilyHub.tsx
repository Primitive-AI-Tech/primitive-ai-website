import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  Heart, BookOpen, Camera, Mic, Users, Shield,
  MessageCircle, ChevronDown, ExternalLink, Star
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FEATURE_ICONS = [Mic, BookOpen, Users, MessageCircle, Camera, Shield];

const FamilyHub = () => {
  const { t } = useTranslation('familyhub');

  const features = t('features.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative familyhub-hero" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-rose-200 backdrop-blur-sm">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                FamilyHub
              </div>
              <h1 className="hero-heading text-white">
                {t('hero.title_1')} <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">{t('hero.title_2')}</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <a href="https://family-hub.space/" target="_blank" rel="noopener noreferrer">
                    {t('hero.open_app')}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">{t('hero.learn_more')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop"
                  alt="FamilyHub — Preserve Family Memories"
                  className="w-full h-56 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-purple-300/50">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('features.badge')}
              title={t('features.title')}
              subtitle={t('features.subtitle')}
              centered
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {features.map((feature, i) => (
                <div key={i} className="glass-card p-6 sm:p-8 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
                    {React.createElement(FEATURE_ICONS[i], { className: 'w-6 h-6 text-rose-600' })}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ QUOTE / EMOTIONAL SECTION ═══ */}
      <section className="snap-section bg-gradient-to-b from-rose-50/40 to-transparent" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                "{t('quote.text')}"
              </blockquote>
              <p className="text-muted-foreground font-medium">— {t('quote.attribution')}</p>

              <div className="pt-4">
                <Button
                  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  asChild
                >
                  <a href="https://family-hub.space/" target="_blank" rel="noopener noreferrer">
                    {t('quote.start_preserving')}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryButtonText={t('cta.primary')}
        secondaryButtonText={t('cta.secondary')}
        primaryButtonLink="/contact"
        secondaryButtonLink="/contact"
        showDemoIcon={false}
      />
    </div>
  );
};

export default FamilyHub;
