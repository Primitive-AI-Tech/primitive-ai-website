import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, Users, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: 'Jan - 2020',
      title: 'Company Founded',
      description: 'Primitive AI was established with a mission to make advanced AI accessible to businesses of all sizes.',
    },
    {
      year: 'Aug - 2020',
      title: 'First Product Launch - VisionHub',
      description: 'Launched our Camera AI Platform for workplace safety, expanding into the manufacturing and construction sectors.',
    },
    {
      year: 'Jun - 2023',
      title: 'SupportHub Launch',
      description: 'Launched our advanced LLM-powered chatbot and voice bot solution for customer support and sales.',
    },
    {
      year: 'Feb - 2024',
      title: 'Intelligent Document Processing',
      description: 'Released our first AI-powered document processing solution, gaining our initial enterprise customers.',
    },
    {
      year: 'Feb - 2025',
      title: 'LegalHub Launch',
      description: 'Released our LegalHub Platform, bringing AI-powered document creation and management to companies.',
    },
  ];

  return (
    <div>
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <Target className="w-4 h-4 text-purple-400" />
                Our Story
              </div>
              <h1 className="hero-heading text-white">
                About <span className="text-gradient-purple">Primitive AI</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed max-w-xl">
                We're on a mission to transform businesses through innovative AI solutions that solve real-world problems and bring good for mankind.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-purple-300/20 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-h-[55vh]">
                <img src="/founders/doannt-body.png" alt="Doan Nguyen — Founder & CEO" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium text-lg">Doan Nguyen</p>
                  <p className="text-purple-300 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: OUR STORY ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader badge="Origins" title="Our Story" subtitle="From an idea to a leading AI solutions provider" />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8 md:mt-10">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Primitive AI was founded in 2020 by Doan Nguyen, an AI expert with extensive experience in artificial intelligence and robotics. What began as a vision has quickly grown into a comprehensive AI solutions provider serving clients worldwide.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our journey began with a simple belief: that advanced AI technology should be accessible to businesses of all sizes. We've expanded our offerings to include solutions for workplace safety, customer support, legal operations, and document processing — all powered by cutting-edge large language models.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Today, Primitive AI is self-funded and employs AI specialists, engineers, and industry experts dedicated to developing innovative solutions that drive real business value.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-purple-100/50">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" alt="Primitive AI Team" className="w-full h-56 md:h-72 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: OUR VALUES ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader badge="Core Principles" title="Our Values" subtitle="The principles that guide everything we do and build" light centered />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
              {[
                { icon: Users, color: 'from-purple-500 to-purple-700', title: 'Customer First', desc: 'We prioritize customer success and build solutions that address real business challenges with measurable results.' },
                { icon: Award, color: 'from-blue-500 to-blue-700', title: 'Excellence', desc: 'We strive for excellence in everything we do, from cutting-edge AI research to customer support and implementation.' },
                { icon: Briefcase, color: 'from-emerald-500 to-emerald-700', title: 'Innovation', desc: 'We continuously innovate and push the boundaries of what\'s possible with AI to deliver transformative solutions.' },
                { icon: GraduationCap, color: 'from-amber-500 to-orange-600', title: 'Responsibility', desc: 'We develop and deploy AI responsibly, with a focus on ethics, security, and positive societal impact.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">{title}</h3>
                  <p className="text-purple-200/70 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 4: MILESTONES ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="light">
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10" />
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader badge="Timeline" title="Our Journey" subtitle="Key milestones in our company's growth" centered />
          </ScrollReveal>
          <div className="relative mt-8 max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-purple-500 shadow-md group-hover:scale-125 group-hover:border-purple-600 transition-all z-10" />
                    <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                      <div className="glass-card p-4 md:p-5">
                        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">{milestone.year}</div>
                        <h3 className="text-sm md:text-base font-bold mb-1">{milestone.title}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: CTA ═══ */}
      <CTASection
        title="Join Us on Our Mission"
        description="We're always looking for talented individuals who share our passion for AI and our commitment to excellence."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Careers"
        primaryButtonLink="/contact"
        secondaryButtonLink="/"
      />
    </div>
  );
};

export default About;
