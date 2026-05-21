import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import StatsCounter from '@/components/StatsCounter';
import SuccessStoryCard from '@/components/SuccessStoryCard';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import GalaxyProducts from '@/components/GalaxyProducts';
import Partners from '@/components/Partners';
import {
  ArrowRight, Camera, MessageCircle, BookOpen,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb,
  Award, Check, Clock, Users, Wrench, LifeBuoy, ChevronDown, Brain
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const serviceIcons = [Bot, Workflow, Code2, GraduationCap, Package, Lightbulb];
const featureIcons = [Award, Check, Clock, Users, Wrench, LifeBuoy];
const successBgColors = [
  'from-emerald-600 to-teal-800',
  'from-blue-600 to-indigo-800',
  'from-purple-600 to-purple-900',
];

const Index = () => {
  const { t } = useTranslation('home');
  const { t: tC } = useTranslation('common');

  React.useLayoutEffect(() => {
    document.documentElement.classList.add('snap-active');
    return () => {
      document.documentElement.classList.remove('snap-active');
    };
  }, []);

  const serviceCards = t('services_section.cards', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const whyCards = t('why_reasons.cards', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const stories = t('success_section.stories', { returnObjects: true }) as Array<{
    title: string; industry: string; summary: string; metric: string; metric_label: string;
  }>;
  const testimonials = t('testimonials_section.items', { returnObjects: true }) as Array<{
    quote: string; author: string; role: string; company: string;
  }>;

  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO — Mission & Vision
      ═══════════════════════════════════════════════════ */}
      <section className="hook-section min-h-[100vh] flex items-center relative snap-section" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-float" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 pt-24 pb-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="space-y-5 md:space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t('hero.badge')}
              </div>

              <h1 className="hero-heading text-white">
                {t('hero.title_1')}{' '}
                <span className="text-gradient-purple">{t('hero.title_2')}</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-purple-200/80 leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  className="w-full sm:w-auto bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/solutions">
                    {t('hero.explore_products')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/contact">{t('hero.talk_to_team')}</Link>
                </Button>
              </div>
            </div>

            {/* Right: Premium Visual element */}
            <div className="w-full max-w-[480px] mx-auto mt-8 lg:mt-0 lg:flex-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />

              {/* Desktop: Artful Overlapping Layout */}
              <div className="hidden lg:block relative h-[500px]">
                {/* Central Dashboard Card (KnowledgeHub) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-white/5 border border-white/10 rounded-2xl p-6 z-10 animate-float shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">KnowledgeHub</h4>
                        <p className="text-xs text-purple-200/60">Enterprise AI Engine</p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">{tC('badge.optimal')}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-purple-400/50 flex-shrink-0" />
                      <span className="text-xs text-purple-200/80 font-medium">Analyze Q3 financial reports...</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Brain className="w-3.5 h-3.5 text-purple-300" />
                        </div>
                        <div>
                          <p className="text-xs text-white font-medium">Extracted 42 key insights</p>
                          <p className="text-[10px] text-purple-200/60 mt-0.5">Cross-referencing 15 documents. Confidence: 98%</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="w-3.5 h-3.5 text-blue-300" />
                        </div>
                        <div>
                          <p className="text-xs text-white font-medium">Executive summary generated</p>
                          <p className="text-[10px] text-purple-200/60 mt-0.5">Ready for review and distribution.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 (VisionHub) */}
                <div className="absolute top-1/2 left-1/2 ml-[20px] -mt-[180px] w-[240px] bg-black/60 border border-white/10 rounded-2xl p-4 z-0 animate-float-delayed rotate-[6deg] hover:rotate-0 transition-transform cursor-pointer shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-white">VisionHub</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 font-bold">{tC('badge.live')}</span>
                  </div>
                  <div className="h-24 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative shadow-inner">
                    <img src="/vision-hub.png" alt="Vision AI Feed" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-scan-lines opacity-20 pointer-events-none" />
                    <div className="absolute top-4 left-6 w-16 h-12 border border-emerald-400/60 bg-emerald-400/10 rounded-sm shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                    <div className="absolute bottom-2 left-2 z-10">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-mono bg-black/60 text-emerald-400 px-1 rounded inline-block w-max">ZONE 1: SECURE</span>
                        <span className="text-[8px] font-mono bg-black/60 text-white/80 px-1 rounded inline-block w-max">Subject tracking active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 2 (SupportHub) */}
                <div className="absolute top-1/2 left-1/2 -ml-[250px] mt-[60px] w-[260px] bg-[#2a134a]/90 border border-purple-500/30 rounded-2xl p-4 z-20 animate-float -rotate-[4deg] hover:rotate-0 transition-transform cursor-pointer shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">SupportHub</p>
                      <p className="text-[10px] text-blue-200/80 font-medium">AI Agent typing...</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-purple-500/20 border border-purple-400/20 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-2.5 w-[85%] ml-auto">
                      <p className="text-[10px] text-purple-100/90 leading-tight text-right">How to reset my password?</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-tr-xl rounded-bl-xl rounded-br-xl p-2.5 w-[90%]">
                      <p className="text-[11px] text-white/90 leading-relaxed">
                        To reset your password, please go to the login page, click on the <span className="text-blue-300 font-semibold">'Forgot Password'</span> link...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet: Full Content Cards */}
              <div className="lg:hidden flex flex-col gap-3 relative z-10">
                <div className="bg-black/45 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-xs">KnowledgeHub</h4>
                        <p className="text-[10px] text-purple-200/60">Enterprise AI Engine</p>
                      </div>
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-green-400 uppercase tracking-wider">{tC('badge.optimal')}</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-purple-400/50 flex-shrink-0" />
                      <span className="text-[10px] text-purple-200/80 font-medium">Analyze Q3 financial reports...</span>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Brain className="w-3 h-3 text-purple-300" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white font-medium">Extracted 42 key insights</p>
                        <p className="text-[9px] text-purple-200/60 mt-0.5">Cross-referencing 15 documents. Confidence: 98%</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3 h-3 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white font-medium">Executive summary generated</p>
                        <p className="text-[9px] text-purple-200/60 mt-0.5">Ready for review and distribution.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-semibold text-white">VisionHub</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 font-bold">{tC('badge.live')}</span>
                  </div>
                  <div className="h-28 rounded-xl bg-black/40 border border-white/5 overflow-hidden relative shadow-inner">
                    <img src="/vision-hub.png" alt="Vision AI Feed" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-scan-lines opacity-20 pointer-events-none" />
                    <div className="absolute top-3 left-6 w-16 h-10 border border-emerald-400/60 bg-emerald-400/10 rounded-sm shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                    <div className="absolute bottom-2 left-2 z-10 flex flex-col gap-0.5">
                      <span className="text-[8px] font-mono bg-black/60 text-emerald-400 px-1 rounded inline-block w-max">ZONE 1: SECURE</span>
                      <span className="text-[8px] font-mono bg-black/60 text-white/80 px-1 rounded inline-block w-max">Subject tracking active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2a134a]/90 border border-purple-500/30 rounded-2xl p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 mb-3 border-b border-white/10 pb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">SupportHub</p>
                      <p className="text-[10px] text-blue-200/80 font-medium">AI Agent typing...</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="bg-purple-500/20 border border-purple-400/20 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-2.5 w-[80%] ml-auto">
                      <p className="text-[10px] text-purple-100/90 leading-tight text-right">How to reset my password?</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-tr-xl rounded-bl-xl rounded-br-xl p-2.5 w-[90%]">
                      <p className="text-[10px] text-white/90 leading-relaxed">
                        To reset your password, please go to the login page, click on the <span className="text-blue-300 font-semibold">'Forgot Password'</span> link...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">{t('hero.scroll')}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: STATS COUNTER BAR
      ═══════════════════════════════════════════════════ */}
      <section className="pt-24 pb-20 relative snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatsCounter end={5} suffix="+" label={t('stats.ai_products')} />
              <StatsCounter end={50} suffix="+" label={t('stats.enterprise_clients')} />
              <StatsCounter end={10} suffix="+" label={t('stats.industries_served')} />
              <StatsCounter end={99} suffix=".9%" label={t('stats.platform_uptime')} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: OUR PRODUCTS
      ═══════════════════════════════════════════════════ */}
      <section className="pt-24 pb-10 md:py-28 snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge={t('products_section.badge')}
              title={t('products_section.title')}
              subtitle={t('products_section.subtitle')}
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <GalaxyProducts />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: OUR SERVICES
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-10 md:py-28 overflow-hidden snap-section" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 section-container">
          <ScrollReveal>
            <SectionHeader
              badge={t('services_section.badge')}
              title={t('services_section.title')}
              subtitle={t('services_section.subtitle')}
              light
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceCards.map((card, i) => (
                <ServiceCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  icon={serviceIcons[i]}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5A: WHY CHOOSE US — HERO QUESTION
      ═══════════════════════════════════════════════════ */}
      <section className="snap-section relative overflow-hidden" data-theme="light">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl" />
        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-xs font-semibold uppercase tracking-wider text-purple-700">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                {t('why_hero.badge')}
              </div>
              <h2 className="hero-heading">
                {t('why_hero.title_1')} <span className="text-gradient-purple">{t('why_hero.title_2')}</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                {t('why_hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">{t('why_hero.get_started')}</Link>
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/solutions">{t('why_hero.our_solutions')}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5B: WHY CHOOSE US — REASONS
      ═══════════════════════════════════════════════════ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('why_reasons.badge')}
              title={t('why_reasons.title')}
              subtitle={t('why_reasons.subtitle')}
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              {whyCards.map((card, i) => (
                <FeatureCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  icon={featureIcons[i]}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: SUCCESS STORIES GALLERY
      ═══════════════════════════════════════════════════ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('success_section.badge')}
              title={t('success_section.title')}
              subtitle={t('success_section.subtitle')}
              light
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {stories.map((story, i) => (
                <SuccessStoryCard
                  key={i}
                  title={story.title}
                  industry={story.industry}
                  summary={story.summary}
                  metric={story.metric}
                  metricLabel={story.metric_label}
                  bgColor={successBgColors[i]}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Button
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 text-base shadow-md hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link to="/success">
                  {t('success_section.view_all')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: OUR PARTNERS & CLIENTS
      ═══════════════════════════════════════════════════ */}
      <Partners />

      {/* ═══════════════════════════════════════════════════
          SECTION 8: WHAT OUR CLIENTS SAY
      ═══════════════════════════════════════════════════ */}
      <section className="pt-24 pb-10 md:py-24 snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge={t('testimonials_section.badge')}
              title={t('testimonials_section.title')}
              subtitle={t('testimonials_section.subtitle')}
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <TestimonialCard
                  key={i}
                  quote={item.quote}
                  author={item.author}
                  role={item.role}
                  company={item.company}
                  rating={5}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 9: CTA
      ═══════════════════════════════════════════════════ */}
      <CTASection />
    </div>
  );
};

export default Index;
