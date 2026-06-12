import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  Camera, MessageCircle, FileText, BookOpen, Heart, GraduationCap,
  Bot, Workflow, Code2, Package, Lightbulb,
  ChevronDown
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const productIcons = [MessageCircle, BookOpen, Camera, Heart, FileText, GraduationCap];
const productGradients = [
  'from-blue-500 to-blue-700',
  'from-purple-500 to-purple-700',
  'from-emerald-500 to-emerald-700',
  'from-rose-500 to-rose-700',
  'from-amber-500 to-orange-600',
  'from-cyan-500 to-teal-600',
];
const productPaths = [
  '/solutions/chatbot',
  '/solutions/knowledgehub',
  '/solutions/camera-ai',
  '/solutions/familyhub',
  '/solutions/legalhub',
  '/solutions/eduassess',
];
const productStatuses: Array<'active' | 'coming-soon' | 'beta' | undefined> = [
  undefined, undefined, undefined, undefined, 'beta', undefined,
];

const serviceIcons = [Bot, Workflow, Code2, GraduationCap, Package, Lightbulb];

const Solutions = () => {
  const { t } = useTranslation('solutions');

  const products = t('products_section.items', { returnObjects: true }) as Array<{
    name: string; tagline: string; description: string;
  }>;

  const services = t('services_section.cards', { returnObjects: true }) as Array<{
    title: string; description: string;
  }>;

  return (
    <div>
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className="hero-heading text-white">
              {t('hero.title_1')} <br />
              <span className="text-gradient-purple">{t('hero.title_2')}</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">{t('hero.scroll')}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: OUR PRODUCTS ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('products_section.badge')}
              title={t('products_section.title')}
              subtitle={t('products_section.subtitle')}
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  tagline={product.tagline}
                  description={product.description}
                  icon={productIcons[i]}
                  href={productPaths[i]}
                  gradient={productGradients[i]}
                  status={productStatuses[i]}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 3: OUR SERVICES ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
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
              {services.map((service, i) => (
                <ServiceCard
                  key={i}
                  title={service.title}
                  description={service.description}
                  icon={serviceIcons[i]}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 4: CTA ═══ */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryButtonText={t('cta.primary')}
        secondaryButtonText={t('cta.secondary')}
        primaryButtonLink="/contact"
        secondaryButtonLink="/why-choose-us"
      />
    </div>
  );
};

export default Solutions;
