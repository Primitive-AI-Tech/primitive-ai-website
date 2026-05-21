import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb,
  ArrowRight, CheckCircle, ChevronDown
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const serviceIcons = [Bot, Workflow, Code2, GraduationCap, Package, Lightbulb];
const serviceGradients = [
  'from-violet-500 to-purple-700',
  'from-blue-500 to-indigo-700',
  'from-emerald-500 to-teal-700',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-700',
  'from-cyan-500 to-blue-600',
];

const Services = () => {
  const { t } = useTranslation('services');

  const services = t('list.items', { returnObjects: true }) as Array<{
    title: string; tagline: string; description: string; benefits: string[];
  }>;

  const process = t('process.steps', { returnObjects: true }) as Array<{
    step: string; title: string; description: string;
  }>;

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className="hero-heading text-white">
              {t('hero.title_1')} <br />
              <span className="text-gradient-purple">{t('hero.title_2')}</span>
            </h1>

            <p className="text-base md:text-xl text-purple-200/80 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  {t('hero.start_project')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-6 text-base hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link to="/solutions">{t('hero.view_products')}</Link>
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">{t('hero.scroll')}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('list.badge')}
              title={t('list.title')}
              subtitle={t('list.subtitle')}
              centered
            />
          </ScrollReveal>

          <div className="space-y-8 mt-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="glass-card p-6 sm:p-10 hover-lift">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${serviceGradients[index]} flex items-center justify-center mb-5`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-1">{service.tagline}</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">{t('list.whats_included')}</p>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, bi) => (
                            <li key={bi} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6 py-5 text-sm shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                          <Link to="/contact">
                            {t('list.discuss_service')}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />

        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge={t('process.badge')}
              title={t('process.title')}
              subtitle={t('process.subtitle')}
              centered
              light
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
              {process.map((step) => (
                <div key={step.step} className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center hover:bg-white/15 transition-colors">
                  <div className="text-4xl font-extrabold text-purple-400/60 mb-3">{step.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-purple-200/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
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

export default Services;
