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

const services = [
  {
    icon: Bot,
    title: 'AI Agent Development',
    tagline: 'Autonomous AI that works for you',
    description: 'We design and build intelligent agents that automate complex multi-step workflows, handle customer interactions, make data-driven decisions, and operate autonomously across your business systems.',
    benefits: [
      'Custom agents trained on your data and processes',
      'Seamless integration with existing tools (CRM, ERP, etc.)',
      'Human-in-the-loop oversight and escalation paths',
      'Continuous monitoring and improvement',
    ],
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    tagline: 'Eliminate repetitive work at scale',
    description: 'We map, redesign, and automate your manual workflows using AI — from data entry and document routing to approvals and reporting. Free your team to focus on high-value work.',
    benefits: [
      'End-to-end workflow analysis and optimization',
      'AI-powered document processing and routing',
      'Automated reporting and decision triggers',
      'Integration with 100+ enterprise platforms',
    ],
    gradient: 'from-blue-500 to-indigo-700',
  },
  {
    icon: Code2,
    title: 'AI API Development',
    tagline: 'Scalable AI infrastructure for your products',
    description: 'We build robust, production-ready AI APIs that integrate seamlessly into your existing systems and third-party applications — giving your products AI superpowers without the complexity.',
    benefits: [
      'RESTful and GraphQL API design and implementation',
      'LLM integration (OpenAI, Anthropic, Gemini, local models)',
      'Scalable cloud-native architecture',
      'Comprehensive documentation and support',
    ],
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    icon: GraduationCap,
    title: 'Model Training & Fine-Tuning',
    tagline: 'AI precision-built for your domain',
    description: 'Generic AI models often miss the nuance of your industry. We fine-tune and train models on your proprietary data to achieve superior accuracy, domain expertise, and business-specific performance.',
    benefits: [
      'Domain-specific fine-tuning on your datasets',
      'RAG (Retrieval-Augmented Generation) pipelines',
      'Model evaluation, benchmarking, and optimization',
      'On-premise or private cloud deployment options',
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Package,
    title: 'AI Product Development',
    tagline: 'From idea to production-ready AI product',
    description: 'Full-cycle AI product development — we partner with you from ideation through UX design, engineering, testing, and production deployment to build AI-powered products your users will love.',
    benefits: [
      'AI product strategy and roadmap development',
      'UX/UI design optimized for AI interactions',
      'Agile development with regular demos',
      'Post-launch support and iteration',
    ],
    gradient: 'from-rose-500 to-pink-700',
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    tagline: 'AI transformation with a clear roadmap',
    description: 'Not sure where to start with AI? Our experts help you identify the highest-value opportunities, build practical roadmaps, and guide your organization through a successful AI transformation journey.',
    benefits: [
      'AI readiness assessment and gap analysis',
      'Use case identification and ROI modeling',
      'Technology selection and vendor evaluation',
      'Change management and team enablement',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We learn your business, goals, and pain points through in-depth workshops.' },
  { step: '02', title: 'Strategy', description: 'We define the AI approach, architecture, and success metrics.' },
  { step: '03', title: 'Build', description: 'Our engineers design, build, and test your solution in iterative sprints.' },
  { step: '04', title: 'Deploy', description: 'We launch to production with monitoring, security reviews, and handoff documentation.' },
  { step: '05', title: 'Optimize', description: 'Ongoing support, model retraining, and continuous improvement to maximize ROI.' },
];

const Services = () => {
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
              AI Development Services
            </div>

            <h1 className="hero-heading text-white">
              End-to-End AI <br />
              <span className="text-gradient-purple">Built for Your Business</span>
            </h1>

            <p className="text-base md:text-xl text-purple-200/80 leading-relaxed">
              From strategy to deployment — we partner with you to design, build, train, and scale AI solutions that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-6 text-base hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link to="/solutions">View Products</Link>
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">Our services</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="What We Do"
              title="AI Services Across the Full Stack"
              subtitle="We cover every phase of the AI journey — from identifying opportunities to building and running production systems"
              centered
            />
          </ScrollReveal>

          <div className="space-y-8 mt-2">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card p-6 sm:p-10 hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-1">{service.tagline}</p>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">What's included</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6 py-5 text-sm shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                        <Link to="/contact">
                          Discuss This Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              badge="How We Work"
              title="Our Delivery Process"
              subtitle="A proven 5-step process that takes you from idea to production with confidence"
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
        title="Ready to Build Something Meaningful with AI?"
        description="Tell us about your project and we'll show you how our team can bring it to life."
        primaryButtonText="Start a Conversation"
        secondaryButtonText="View Our Products"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
        showDemoIcon={false}
      />
    </div>
  );
};

export default Services;
