import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, Users, Target, ChevronDown } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Doan Nguyen',
      role: 'Founder & CEO',
      image: '/founders/doannt.jpg',
      bio: 'Serial Entrepreneur. AI expert with 10+ years of experience. Holds two Master degrees in AI and Robotics from Northern Arizona University and National Chiao Tung University.'
    },
    {
      name: 'Tung Ngo',
      role: 'COO',
      image: '/founders/tungnt.png',
      bio: 'Over 10 years of experience in Finance and Banking with strong expertise in operational management, process optimization, and cross-functional team leadership.'
    },
    {
      name: 'An Nguyen',
      role: 'CTO',
      image: '/founders/ann.png',
      bio: 'Experienced technology leader with 20+ years in software development and multiple CTO roles. Brings deep expertise across Insurance, Finance, Retail, Logistics, and e-Commerce, with a strong track record of driving innovation and building scalable solutions.'
    }
  ];

  const milestones = [
    {
      year: 'Jan - 2020',
      title: 'Company Founded',
      description: 'Primitive AI was established with a mission to make advanced AI accessible to businesses of all sizes.'
    },
    {
      year: 'Aug - 2020',
      title: 'First Product Launch - VisionHub',
      description: 'Launched our Camera AI Platform for workplace safety, expanding into the manufacturing and construction sectors.'
    },
    {
      year: 'Jun - 2023',
      title: 'SupportHub Launch',
      description: 'Launched our advanced LLM-powered chatbot and voice bot solution for customer support and sales.'
    },
    {
      year: 'Feb - 2024',
      title: 'Intelligent Document Processing',
      description: 'Released our first AI-powered document processing solution, gaining our initial enterprise customers.'
      
    },
    {
      year: 'Feb - 2025',
      title: 'LegalHub Launch',
      description: 'Released our LegalHub Platform, bringing AI-powered document creation and management to companies.'
    }
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════ */}
      <section className="hook-section min-h-[60vh] flex items-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <Target className="w-4 h-4 text-purple-400" />
                Our Story
              </div>

              <h1 className="hero-heading text-white">
                About <span className="text-gradient-purple">Primitive AI</span>
              </h1>

              <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-xl">
                We're on a mission to transform businesses through innovative AI solutions that solve real-world problems and bring good for mankind.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-6 text-base hover:-translate-y-0.5 transition-all duration-300"
                  asChild
                >
                  <Link to="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-purple-300/20 rounded-3xl blur-xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/founders/doannt-body.png" 
                    alt="Primitive AI Team" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-medium text-lg">Doan Nguyen</p>
                    <p className="text-purple-300 text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: OUR STORY
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Origins"
              title="Our Story"
              subtitle="From an idea to a leading AI solutions provider"
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Primitive AI was founded in 2020 by Doan Nguyen, an AI expert with extensive experience in artificial intelligence and robotics. What began as a vision has quickly grown into a comprehensive AI solutions provider serving clients worldwide.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey began with a simple belief: that advanced AI technology should be accessible to businesses of all sizes. We've expanded our offerings to include solutions for workplace safety, customer support, legal operations, and document processing—all powered by cutting-edge large language models.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Primitive AI employs AI specialists, engineers, and industry experts dedicated to developing innovative solutions that drive real business value. Our company is self-funded, allowing us to maintain our vision and focus on customer success without external pressures.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100/50">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" 
                  alt="Primitive AI Office" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: OUR VALUES
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        
        <div className="relative z-10 section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Core Principles"
              title="Our Values"
              subtitle="The principles that guide everything we do and build"
              light
              centered
            />
          </ScrollReveal>
          
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Customer First</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  We prioritize customer success and build solutions that address real business challenges with measurable results.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Excellence</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  We strive for excellence in everything we do, from cutting-edge AI research to customer support and implementation.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  We continuously innovate and push the boundaries of what's possible with AI to deliver transformative solutions.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Responsibility</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  We develop and deploy AI responsibly, with a focus on ethics, security, and positive societal impact.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: LEADERSHIP TEAM
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Our People"
              title="Leadership Team"
              subtitle="Meet the experts driving our mission forward"
              centered
            />
          </ScrollReveal>
          
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="app-panel group overflow-hidden flex flex-col">
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: MILESTONES
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-purple-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Timeline"
              title="Our Journey"
              subtitle="Key milestones in our company's growth"
              centered
            />
          </ScrollReveal>
          
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-purple-300 to-transparent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-purple-500 shadow-lg group-hover:scale-125 group-hover:border-purple-600 transition-all duration-300 z-10">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    
                    {/* Content Left */}
                    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className="app-panel p-6 md:p-8 hover-lift">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Content Right (Empty for spacing) */}
                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: CTA
      ═══════════════════════════════════════════════════ */}
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
