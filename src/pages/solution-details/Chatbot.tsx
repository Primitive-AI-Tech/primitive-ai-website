import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTA';
import GalleryCarousel from '@/components/GalleryCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Clock, BarChart, Headphones, Zap, Palette, Code, ChevronDown, CheckCircle } from 'lucide-react';

const Chatbot = () => {
  const dashboardImages = [
    { src: '/lovable-uploads/46cf1a4f-859d-4c73-9cc8-5fd496e2ae80.png', alt: 'SupportHub Analytics Dashboard', title: 'Analytics Dashboard', description: 'Get a complete overview of your customer support performance with real-time metrics and visualizations' },
    { src: '/lovable-uploads/b8b1f634-740d-46da-a6a7-74b7488fd3d4.png', alt: 'SupportHub Ticket Management', title: 'Ticket Management', description: 'Efficiently manage support tickets with status tracking, priority flags, and AI-assisted responses' },
    { src: '/lovable-uploads/51cfee29-f2f5-45d1-b1bc-6273fb432132.png', alt: 'SupportHub Communication Channels', title: 'Multi-Channel Support', description: 'Connect with customers across multiple channels — website, email, social media, and more' },
    { src: '/lovable-uploads/33b37c77-db0f-44c7-9281-18a94b010538.png', alt: 'SupportHub Customer Management', title: 'Customer Management', description: 'Keep track of all customer interactions and history in one unified interface' },
    { src: '/lovable-uploads/5f9395b2-7d5f-4b1e-8dab-d966c5fd751f.png', alt: 'SupportHub AI Scenarios', title: 'AI Scenarios Management', description: 'Create and manage AI knowledge base scenarios to automate responses to common customer inquiries' },
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
                AI Chatbot & <span className="text-gradient-purple">Voice Bot</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                Transform customer support and sales with a fully customizable conversational AI platform that delivers natural, helpful interactions across text and voice channels.
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
              badge="Dashboard"
              title="Powerful, Intuitive Interface"
              subtitle="Manage all customer communications across every channel from one unified dashboard"
              centered
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8">
              <GalleryCarousel images={dashboardImages} />
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5 shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                <Link to="/contact">Schedule a Live Demo</Link>
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
              badge="Features"
              title="Everything You Need to Delight Customers"
              subtitle="An AI-powered platform with extensive customization options for exceptional customer experiences"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
              <FeatureCard title="Omnichannel Support" description="Provide consistent support across web, mobile, social media, and voice channels with a unified experience." icon={Globe} />
              <FeatureCard title="Natural Conversations" description="Leverage advanced LLMs for human-like conversations that understand context, nuance, and user intent." icon={MessageCircle} />
              <FeatureCard title="Voice Interaction" description="Enable natural voice interactions with speech recognition and text-to-speech for phone support." icon={Headphones} />
              <FeatureCard title="Human Handoff" description="Seamlessly transfer complex conversations to human agents with complete context and history." icon={Headphones} />
              <FeatureCard title="24/7 Availability" description="Provide round-the-clock support to customers regardless of time zone or business hours." icon={Clock} />
              <FeatureCard title="Analytics Dashboard" description="Track performance metrics, conversation quality, and customer satisfaction to continuously improve." icon={BarChart} />
              <FeatureCard title="Fully Customizable" description="Tailor the look and feel to match your brand with custom colors, fonts, and interface elements." icon={Palette} />
              <FeatureCard title="Integration Options" description="Connect SupportHub to your existing CRM, help desk, and other business systems via robust API." icon={Code} />
              <FeatureCard title="No-Code Configuration" description="Set up and modify chatbot flows without technical knowledge using our intuitive drag-and-drop interface." icon={Zap} />
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
              badge="How It Works"
              title="Live in Three Steps"
              subtitle="SupportHub integrates seamlessly with your existing systems and is live within days"
              centered
              light
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { step: '01', title: 'Customization & Setup', desc: 'We tailor SupportHub to your products, services, policies, and customer interactions for accurate, helpful responses.' },
                { step: '02', title: 'Integration', desc: 'We integrate with your existing support systems, website, mobile apps, and phone systems seamlessly.' },
                { step: '03', title: 'Continuous Improvement', desc: 'The system learns from every interaction and improves over time with regular updates and capability enhancements.' },
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

      {/* ═══ SECTION 5: USE CASES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Use Cases"
              title="Versatile Across Every Industry"
              subtitle="SupportHub powers customer support, sales, and engagement for businesses of all sizes"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2666&auto=format&fit=crop',
                  title: 'Customer Support',
                  desc: 'Provide instant, accurate responses to common queries, troubleshoot issues, and escalate complex problems to human agents.',
                  points: ['Instant response to FAQs', 'Technical troubleshooting', 'Order status and tracking'],
                },
                {
                  img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2670&auto=format&fit=crop',
                  title: 'Sales Assistance',
                  desc: 'Guide potential customers through the sales process, recommend products, answer questions, and facilitate purchases.',
                  points: ['Product recommendations', 'Pricing and feature comparisons', 'Guided checkout process'],
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

      {/* ═══ SECTION 6: TESTIMONIALS ═══ */}
      {/* <section className="snap-section bg-gradient-to-b from-purple-50/40 to-transparent" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Client Stories"
              title="What Our Clients Say"
              subtitle="Hear from businesses that have transformed their customer interactions with SupportHub"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <TestimonialCard quote="Our customer satisfaction scores increased by 35% after implementing SupportHub. The natural conversations and customization have been game-changing." author="Sarah Thompson" role="Customer Experience Director" company="RetailGiant Inc." rating={5} />
              <TestimonialCard quote="The voice bot reduced our call wait times by 70% while maintaining high-quality interactions. Our team can now focus on complex issues that truly need human attention." author="Michael Rodriguez" role="Support Operations Manager" company="TechSolutions Corp" rating={5} />
              <TestimonialCard quote="Integration with our existing systems was seamless and the bot keeps getting smarter. The customization options let us align it perfectly with our brand voice." author="Jennifer Wu" role="CTO" company="E-Commerce Leaders" rating={5} />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ═══ SECTION 7: PRICING ═══ */}
      {/* <section id="pricing" className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Pricing"
              title="SupportHub Plans"
              subtitle="Choose the plan that works best for your business needs"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <PricingCard title="Basic" price="$999" description="Ideal for small businesses with standard customer support needs" features={["SupportHub chatbot for website", "5,000 conversations/month", "Basic customization", "Pre-built templates", "Email support", "Standard analytics", "Business hours support"]} />
              <PricingCard title="Business" price="$2,499" description="Perfect for growing companies with multi-channel support requirements" features={["All Basic features", "Chatbot & voice bot", "25,000 conversations/month", "Advanced customization", "Custom training", "CRM integration", "Advanced analytics", "24/7 support"]} isPopular />
              <PricingCard title="Enterprise" price="Custom" description="Tailored solution for large organizations with complex support needs" features={["All Business features", "Unlimited conversations", "Full white-label", "Multi-language support", "Custom integrations", "Dedicated account manager", "Enterprise security", "99.9% uptime SLA"]} />
            </div>
          </ScrollReveal>
        </div> */}
      {/* </section> */}

      {/* ═══ SECTION 8: CTA ═══ */}
      <CTASection
        title="Ready to Transform Customer Support?"
        description="Schedule a demo and see how SupportHub can deliver exceptional customer experiences at scale."
        primaryButtonText="Request Demo"
        secondaryButtonText="Explore Solutions"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
};

export default Chatbot;
