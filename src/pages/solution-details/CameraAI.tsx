import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Camera, Shield, Clock, BarChart, Bell, UserCheck, ChevronDown, CheckCircle } from 'lucide-react';

const CameraAI = () => {
  return (
    <div>
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <Camera className="w-3.5 h-3.5 text-emerald-400" />
                VisionHub
              </div>
              <h1 className="hero-heading text-white">
                AI-Powered <span className="text-gradient-purple">Workplace Safety</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                Enhance workplace safety with intelligent visual monitoring that ensures compliance, prevents accidents, and protects your workforce — in real time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                  alt="VisionHub — Camera AI for Workplace Safety"
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

      {/* ═══ SECTION 2: KEY FEATURES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Key Features"
              title="Intelligent Safety, Always On"
              subtitle="Our Camera AI Platform uses computer vision and deep learning to keep your workforce safe around the clock"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              <FeatureCard title="Robot-Human Safety" description="Monitor interactions between robots and humans to prevent accidents and ensure safe coworking environments." icon={Shield} />
              <FeatureCard title="PPE Compliance" description="Automatically detect whether workers are wearing required protective equipment such as helmets, gloves, and safety vests." icon={UserCheck} />
              <FeatureCard title="Facial Recognition" description="Secure facility access with facial recognition for check-in/check-out and authorized personnel verification." icon={Camera} />
              <FeatureCard title="Behavior Detection" description="Identify abnormal behaviors or movements that may indicate safety risks or security concerns." icon={Bell} />
              <FeatureCard title="Real-time Alerts" description="Receive instant notifications when safety violations or potential hazards are detected." icon={Clock} />
              <FeatureCard title="Analytics Dashboard" description="Track safety metrics, identify trends, and generate reports for continuous improvement." icon={BarChart} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 3: HOW IT WORKS ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="How It Works"
              title="Up and Running in Days"
              subtitle="Our Camera AI Platform integrates seamlessly with your existing security infrastructure"
              centered
              light
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { step: '01', title: 'Installation & Setup', desc: 'Our team integrates AI-powered cameras with your existing security infrastructure or installs new hardware as needed.' },
                { step: '02', title: 'AI Configuration', desc: 'We configure the system to monitor specific safety parameters based on your workplace requirements and industry regulations.' },
                { step: '03', title: 'Continuous Monitoring', desc: 'The system continuously monitors operations, providing real-time alerts and generating insights to improve workplace safety.' },
              ].map((s) => (
                <div key={s.step} className="bg-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 transition-colors">
                  <div className="text-4xl font-extrabold text-purple-400/60 mb-4">{s.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-purple-200/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 4: USE CASES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Use Cases"
              title="Built for High-Stakes Environments"
              subtitle="VisionHub is trusted across manufacturing, construction, logistics, and more"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
                  title: 'Manufacturing',
                  desc: 'Ensure worker safety in environments with heavy machinery, robots, and automated systems. Monitor PPE compliance and prevent unauthorized access.',
                  points: ['Robot-human interaction safety', 'PPE compliance monitoring', 'Restricted area access control'],
                },
                {
                  img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2670&auto=format&fit=crop',
                  title: 'Construction',
                  desc: 'Monitor construction sites for safety compliance, PPE usage, and unauthorized personnel. Detect potential hazards before they cause accidents.',
                  points: ['Safety gear compliance', 'Hazard zone monitoring', 'Worker check-in/check-out'],
                },
              ].map((uc) => (
                <div key={uc.title} className="glass-card overflow-hidden hover-lift">
                  <img src={uc.img} alt={uc.title} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{uc.desc}</p>
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

      {/* ═══ SECTION 5: TESTIMONIALS ═══ */}
      {/* <section className="snap-section bg-gradient-to-b from-purple-50/40 to-transparent" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Client Stories"
              title="What Our Clients Say"
              subtitle="Hear from businesses that have transformed their workplace safety with VisionHub"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <TestimonialCard quote="Since implementing VisionHub, we've seen a 45% reduction in safety incidents and improved compliance with safety regulations." author="Robert Chen" role="Safety Manager" company="Global Manufacturing Inc." rating={5} />
              <TestimonialCard quote="The real-time alerts have been a game-changer for our construction sites. We can address safety issues immediately before they become serious problems." author="Lisa Johnson" role="Operations Director" company="BuildRight Construction" rating={5} />
              <TestimonialCard quote="The facial recognition feature has streamlined our access control process while improving security. VisionHub has exceeded our expectations." author="David Wilson" role="Security Director" company="TechManufacturing Co." rating={5} />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ═══ SECTION 6: PRICING ═══ */}
      {/* <section id="pricing" className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Pricing"
              title="Plans for Every Facility"
              subtitle="Choose the plan that works best for your business needs"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <PricingCard title="Starter" price="$1,499" description="Perfect for small facilities with basic safety monitoring needs" features={["Up to 5 camera integrations", "PPE compliance detection", "Basic facial recognition", "Email alerts", "8/5 support", "Weekly safety reports"]} ctaText="Get Started" ctaLink="/contact" />
              <PricingCard title="Professional" price="$2,999" description="Ideal for medium-sized facilities with advanced safety requirements" features={["Up to 15 camera integrations", "All Starter features", "Robot-human safety monitoring", "Abnormal behavior detection", "SMS & email alerts", "24/7 support", "Daily safety reports"]} isPopular ctaText="Get Started" ctaLink="/contact" />
              <PricingCard title="Enterprise" price="Custom" description="Tailored solution for large facilities with complex safety needs" features={["Unlimited camera integrations", "All Professional features", "Custom safety protocols", "Advanced analytics dashboard", "API integration", "Dedicated account manager", "Custom reporting"]} ctaText="Contact Us" ctaLink="/contact" />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ═══ SECTION 7: CTA ═══ */}
      <CTASection
        title="Ready to Enhance Workplace Safety?"
        description="Schedule a demo and learn how VisionHub can protect your workforce and improve compliance."
        primaryButtonText="Request Demo"
        secondaryButtonText="Explore Solutions"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
};

export default CameraAI;
