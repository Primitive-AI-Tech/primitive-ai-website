import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import SuccessStoryCard from '@/components/SuccessStoryCard';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const bgColors = [
  'from-emerald-600 to-teal-800',
  'from-blue-600 to-indigo-800',
  'from-purple-600 to-purple-900',
  'from-violet-600 to-purple-800',
  'from-cyan-600 to-teal-800',
  'from-rose-500 to-pink-800',
];

const highlightIcons = [TrendingUp, Users, Zap];

const industryKeys = ['all', 'manufacturing', 'financial_services', 'legal', 'retail', 'healthcare'] as const;
const industryValues = ['All', 'Manufacturing', 'Financial Services', 'Legal', 'Retail', 'Healthcare'];

const Success = () => {
  const { t } = useTranslation('success');
  const [activeIndex, setActiveIndex] = useState(0);

  React.useLayoutEffect(() => {
    document.documentElement.classList.add('snap-active');
    return () => {
      document.documentElement.classList.remove('snap-active');
    };
  }, []);

  const stories = t('stories', { returnObjects: true }) as Array<{
    title: string; industry: string; client: string; product: string;
    summary: string; challenge: string; solution: string;
    metric: string; metric_label: string;
    stats: Array<{ value: string; label: string }>;
  }>;

  const highlights = t('hero.highlights', { returnObjects: true }) as Array<{
    value: string; label: string;
  }>;

  const activeIndustry = industryValues[activeIndex];
  const filtered = activeIndex === 0
    ? stories.map((s, i) => ({ ...s, bgColor: bgColors[i] }))
    : stories
        .map((s, i) => ({ ...s, bgColor: bgColors[i] }))
        .filter(s => s.industry === activeIndustry);

  const spotlight = { ...stories[0], bgColor: bgColors[0] };

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-[100vh] flex items-center relative snap-section" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-float" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 pt-24 pb-16 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className="hero-heading text-white">
              {t('hero.title_1')} <br />
              <span className="text-gradient-purple">{t('hero.title_2')}</span>
            </h1>

            <p className="text-base md:text-xl text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4">
              {highlights.map((h, i) => {
                const Icon = highlightIcons[i];
                return (
                  <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-sm text-center">
                    <Icon className="w-5 h-5 text-purple-300 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{h.value}</div>
                    <div className="text-[10px] sm:text-xs text-purple-300/70 leading-tight">{h.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER + STORIES ═══ */}
      <section className="py-16 md:py-24 snap-section" data-theme="light">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industryKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeIndex === i
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-foreground hover:bg-purple-50 hover:border-purple-200'
                }`}
              >
                {t(`filters.${key}`)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((story, i) => (
              <SuccessStoryCard
                key={i}
                title={story.title}
                industry={story.industry}
                summary={story.summary}
                metric={story.metric}
                metricLabel={story.metric_label}
                bgColor={story.bgColor}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">{t('no_stories')}</p>
              <Button className="mt-4" variant="outline" onClick={() => setActiveIndex(0)}>
                {t('show_all')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ DETAIL SPOTLIGHT (first story expanded) ═══ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-purple-50/40 to-transparent snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge={t('spotlight.badge')}
              title={spotlight.title}
              subtitle={`${spotlight.client} · ${spotlight.product}`}
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">{t('spotlight.challenge')}</p>
                  <p className="text-muted-foreground leading-relaxed">{spotlight.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">{t('spotlight.solution')}</p>
                  <p className="text-muted-foreground leading-relaxed">{spotlight.solution}</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5 shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">
                    {t('spotlight.discuss')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 content-start">
                {spotlight.stats.map((stat, i) => (
                  <div key={i} className={`rounded-2xl bg-gradient-to-br ${spotlight.bgColor} p-6 text-center`}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
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
        secondaryButtonLink="/solutions"
        showDemoIcon={false}
      />
    </div>
  );
};

export default Success;
