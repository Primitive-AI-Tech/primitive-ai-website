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
  ArrowRight,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb,
  Award, Check, Clock, Users, Wrench, LifeBuoy, ChevronDown, Brain,
  Building2, Cpu, Activity
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const partnersList = [
  { name: 'Qualcomm', logo: '/images/partners/Qualcomm.png', website: 'https://www.qualcomm.com/' },
  { name: 'Intel', logo: '/images/partners/Intel.png', website: 'https://www.intel.vn/' },
  { name: 'Microsoft', logo: '/images/partners/Microsoft.png', website: 'https://www.microsoft.com/' },
  { name: 'Google', logo: '/images/partners/Google.png', website: 'https://startup.google.com/' },
  { name: 'Canon', logo: '/images/partners/Canon.png', website: 'https://vn.canon/' },
  { name: 'Ajinomoto', logo: '/images/partners/Ajinomoto.png', website: 'https://www.ajinomoto.com.vn/' },
  { name: 'YAZAKI', logo: '/images/partners/Yazaki.png', website: 'https://www.yev.vn/' },
  { name: 'Nidec', logo: '/images/partners/Nidec.png', website: 'https://www.nidec.com/' },
  { name: 'FPT Automotive', logo: '/images/partners/FA.png', website: 'https://fpt.auto/' },
  { name: 'HIK Robotics', logo: '/images/partners/HIK.png', website: 'https://www.hikrobotics.com/' },
  { name: 'VTI Solutions', logo: '/images/partners/vti-solutions.png', website: 'https://vti-solutions.vn/' },
  { name: 'RAIS Tech', logo: '/images/partners/RAIS.png', website: 'https://raistech.vn/' },
];

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
      <section
        className="hook-section relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
        data-theme="dark"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-background.png"
            alt="Primitive AI product ecosystem"
            className="h-full w-full object-cover object-[76%_center] sm:object-[72%_center] lg:object-right"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,5,32,0.96)_0%,rgba(8,5,32,0.9)_24%,rgba(8,5,32,0.6)_42%,rgba(8,5,32,0.2)_60%,rgba(8,5,32,0)_74%)] lg:bg-[linear-gradient(90deg,rgba(8,5,32,0.9)_0%,rgba(8,5,32,0.78)_24%,rgba(8,5,32,0.34)_46%,rgba(8,5,32,0)_68%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080520] via-[#080520]/45 to-transparent" />
        </div>

        <div className="section-container relative z-10 w-full pt-32 pb-24 md:pt-40 md:pb-32">
          {/* Left column: text sits in the image's naturally dark left area (0–40% of image) */}
          <div className="w-full max-w-[40rem] lg:max-w-[44%] space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className="hero-heading text-white font-bold leading-tight">
              {t('hero.title_1')}{' '}
              <br className="hidden md:block" />
              <span className="text-gradient-purple">{t('hero.title_2')}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-purple-200/80 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Button
                className="w-full sm:w-auto bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Static partners logo section inside Left Column (mockup style) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-300/60 mb-4">
                {t('hero.trusted_by')}
              </p>
              <div className="flex gap-6 items-center flex-wrap justify-center lg:justify-start">
                {[...partnersList].slice(0, 5).map((partner, index) => (
                  <div key={index} className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
                <div className="filter brightness-0 invert opacity-60 flex items-center justify-center font-bold text-lg tracking-widest pl-2">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: STATS COUNTER BAR (METRICS CARD)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 relative snap-section bg-gradient-to-b from-transparent to-purple-50/10 px-4 md:px-0" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_80px_-15px_rgba(109,40,217,0.3)] transition-all duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 lg:divide-x divide-purple-100">
                {/* Stat 1 */}
                <div className="flex items-center gap-5 p-2 hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <StatsCounter end={6} suffix="+" label="" />
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-snug">{t('stats.ai_products', 'Năm kinh nghiệm trong lĩnh vực AI')}</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-5 p-2 pt-6 sm:pt-2 hover:scale-105 transition-all duration-300 lg:pl-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <StatsCounter end={50} suffix="+" label="" />
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-snug">{t('stats.enterprise_clients', 'Khách hàng Doanh nghiệp')}</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-5 p-2 pt-6 sm:pt-2 hover:scale-105 transition-all duration-300 lg:pl-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <StatsCounter end={10} suffix="+" label="" />
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-snug">{t('stats.industries_served', 'Ngành nghề được phục vụ')}</div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-5 p-2 pt-6 sm:pt-2 hover:scale-105 transition-all duration-300 lg:pl-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <StatsCounter end={99} suffix=".9%" label="" />
                    </div>
                    <div className="text-sm text-gray-500 font-medium leading-snug">{t('stats.platform_uptime', 'Thời gian hoạt động của nền tảng')}</div>
                  </div>
                </div>
              </div>
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
