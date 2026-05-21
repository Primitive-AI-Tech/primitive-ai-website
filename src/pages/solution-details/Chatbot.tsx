import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTA';
import GalleryCarousel from '@/components/GalleryCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Clock, BarChart, Headphones, Zap, Palette, Code, ChevronDown, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FEATURE_ICONS = [Globe, MessageCircle, Headphones, Headphones, Clock, BarChart, Palette, Code, Zap];

const Chatbot = () => {
  const { t } = useTranslation('supporthub');

  const dashboardImgSrcs = [
    '/lovable-uploads/46cf1a4f-859d-4c73-9cc8-5fd496e2ae80.png',
    '/lovable-uploads/b8b1f634-740d-46da-a6a7-74b7488fd3d4.png',
    '/lovable-uploads/51cfee29-f2f5-45d1-b1bc-6273fb432132.png',
    '/lovable-uploads/33b37c77-db0f-44c7-9281-18a94b010538.png',
    '/lovable-uploads/5f9395b2-7d5f-4b1e-8dab-d966c5fd751f.png',
  ];
  const dashboardImgAlts = [
    'SupportHub Analytics Dashboard',
    'SupportHub Ticket Management',
    'SupportHub Communication Channels',
    'SupportHub Customer Management',
    'SupportHub AI Scenarios',
  ];

  const dashboardImgData = t('dashboard.images', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const dashboardImages = dashboardImgData.map((img, i) => ({
    src: dashboardImgSrcs[i],
    alt: dashboardImgAlts[i],
    title: img.title,
    description: img.description,
  }));

  const features = t('features.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const steps = t('how_it_works.steps', { returnObjects: true }) as Array<{ step: string; title: string; description: string }>;
  const useCases = t('use_cases.items', { returnObjects: true }) as Array<{ title: string; description: string; points: string[] }>;

  const useCaseImgs = [
    'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2666&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2670&auto=format&fit=crop',
  ];

  return (
    <div>
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                SupportHub
              </div>
              <h1 className="hero-heading text-white">
                {t('hero.title_1')} <span className="text-gradient-purple">{t('hero.title_2')}</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">{t('hero.request_demo')}</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="#pricing">{t('hero.view_pricing')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                  alt="SupportHub — AI Chatbot & Voice Bot"
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

      {/* ═══ SECTION 2: DASHBOARD PREVIEW ═══ */}
      <section className="snap-section bg-gradient-to-b from-purple-50/30 to-transparent" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('dashboard.badge')}
              title={t('dashboard.title')}
              subtitle={t('dashboard.subtitle')}
              centered
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8">
              <GalleryCarousel images={dashboardImages} />
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5 shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                <Link to="/contact">{t('dashboard.schedule_demo')}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 3: KEY FEATURES ═══ */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
              {features.map((feature, i) => (
                <FeatureCard key={i} title={feature.title} description={feature.description} icon={FEATURE_ICONS[i]} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 4: HOW IT WORKS ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('how_it_works.badge')}
              title={t('how_it_works.title')}
              subtitle={t('how_it_works.subtitle')}
              centered
              light
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {steps.map((s) => (
                <div key={s.step} className="bg-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 transition-colors">
                  <div className="text-4xl font-extrabold text-purple-400/60 mb-4">{s.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-purple-200/70 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 5: USE CASES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('use_cases.badge')}
              title={t('use_cases.title')}
              subtitle={t('use_cases.subtitle')}
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {useCases.map((uc, i) => (
                <div key={i} className="glass-card overflow-hidden hover-lift">
                  <img src={useCaseImgs[i]} alt={uc.title} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{uc.description}</p>
                    <ul className="space-y-2">
                      {uc.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 6: CTA ═══ */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryButtonText={t('cta.primary')}
        secondaryButtonText={t('cta.secondary')}
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
};

export default Chatbot;
