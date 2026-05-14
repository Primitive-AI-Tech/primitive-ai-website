import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import StatsCounter from '@/components/StatsCounter';
import SuccessStoryCard from '@/components/SuccessStoryCard';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  ArrowRight, Camera, MessageCircle, FileText, BookOpen, Heart,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb,
  Shield, Zap, BarChart, Target, ChevronDown,
} from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO — Mission & Vision
      ═══════════════════════════════════════════════════ */}
      <section className="hook-section min-h-[100vh] flex items-center relative snap-section" data-theme="dark">
        {/* Animated decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-float" />
          {/* Dot pattern */}
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Enterprise AI Solutions
              </div>

              <h1 className="hero-heading text-white">
                AI for Good.{' '}
                <span className="text-gradient-purple">Built for Business.</span>
              </h1>

              <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-xl">
                AI is changing the world, dramatically. Our mission is to make AI bring good
                for mankind. In this journey, we build products that help businesses and
                communities thrive.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/solutions">
                    Explore Our Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>

            {/* Right: Visual element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-purple-300/20 rounded-3xl blur-xl" />

                {/* Main card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: MessageCircle, name: 'SupportHub', color: 'from-blue-500 to-blue-700' },
                      { icon: BookOpen, name: 'KnowledgeHub', color: 'from-purple-500 to-purple-700' },
                      { icon: Camera, name: 'VisionHub', color: 'from-emerald-500 to-emerald-700' },
                      { icon: Heart, name: 'FamilyHub', color: 'from-rose-500 to-rose-700' },
                    ].map((item, i) => (
                      <div
                        key={item.name}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">LegalHub</p>
                        <p className="text-xs text-purple-300">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: STATS COUNTER BAR
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 relative snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatsCounter end={5} suffix="+" label="AI Products" />
              <StatsCounter end={50} suffix="+" label="Enterprise Clients" />
              <StatsCounter end={10} suffix="+" label="Industries Served" />
              <StatsCounter end={99} suffix=".9%" label="Platform Uptime" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: OUR PRODUCTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Our Products"
              title="Enterprise AI Product Suite"
              subtitle="Purpose-built AI products designed to solve real business challenges across industries"
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="SupportHub"
                tagline="AI-Powered Customer Support"
                description="Deliver exceptional customer support with intelligent chatbot and voice bot platform. Natural language understanding, omnichannel support, and seamless escalation."
                icon={MessageCircle}
                href="/solutions/chatbot"
                gradient="from-blue-500 to-blue-700"
              />
              <ProductCard
                name="KnowledgeHub"
                tagline="Enterprise Knowledge Management"
                description="Centralize, organize, and retrieve organizational knowledge with AI-powered search, document analysis, and intelligent recommendations."
                icon={BookOpen}
                href="/solutions/knowledgehub"
                gradient="from-purple-500 to-purple-700"
              />
              <ProductCard
                name="VisionHub"
                tagline="Intelligent Visual Monitoring"
                description="Enhance workplace safety with real-time camera AI for human-robot interaction, PPE compliance, and behavior detection across facilities."
                icon={Camera}
                href="/solutions/camera-ai"
                gradient="from-emerald-500 to-emerald-700"
              />
              <ProductCard
                name="FamilyHub"
                tagline="Family Knowledge Preservation"
                description="Preserve and share family stories, memories, and wisdom across generations with AI-powered knowledge organization and storytelling."
                icon={Heart}
                href="/solutions/familyhub"
                gradient="from-rose-500 to-rose-700"
              />
              <ProductCard
                name="LegalHub"
                tagline="AI-Powered Legal Operations"
                description="Streamline legal document creation, management, and e-signing with intelligent automation, compliance checks, and template generation."
                icon={FileText}
                href="/solutions/legalhub"
                status="coming-soon"
                gradient="from-amber-500 to-orange-600"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: OUR SERVICES
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden snap-section" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Our Services"
              title="AI Development Services"
              subtitle="End-to-end AI services from strategy to deployment — we partner with you to build, train, and scale AI solutions"
              light
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <ServiceCard
                title="AI Agent Development"
                description="Build intelligent agents that automate complex workflows, handle customer interactions, and make data-driven decisions autonomously."
                icon={Bot}
              />
              <ServiceCard
                title="AI Workflow Automation"
                description="Design and implement AI-powered workflows that streamline operations, reduce manual effort, and accelerate business processes."
                icon={Workflow}
              />
              <ServiceCard
                title="AI API Development"
                description="Create robust, scalable AI APIs that integrate seamlessly into your existing systems and third-party applications."
                icon={Code2}
              />
              <ServiceCard
                title="Model Training & Fine-Tuning"
                description="Custom model training and fine-tuning on your proprietary data to achieve superior accuracy for your specific use cases."
                icon={GraduationCap}
              />
              <ServiceCard
                title="AI Product Development"
                description="Full-cycle AI product development from ideation to launch — UX design, engineering, testing, and production deployment."
                icon={Package}
              />
              <ServiceCard
                title="Consulting & Strategy"
                description="Strategic AI consulting to identify opportunities, build roadmaps, and guide your organization's AI transformation journey."
                icon={Lightbulb}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: WHY CHOOSE PRIMITIVE AI
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 snap-section" data-theme="light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Value proposition text */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 text-purple-700 border border-purple-200">
                  Why Choose Us
                </div>
                <h2 className="section-heading">
                  Technology with <span className="gradient-text">Purpose</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe AI should serve humanity — not just generate profit.
                  Every product we build, every service we deliver is guided by a
                  commitment to creating real, measurable impact for businesses and
                  the communities they serve.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From enterprise-grade security to end-to-end delivery, we partner
                  with organizations that share our vision for responsible, impactful AI.
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-6 text-base shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/why-choose-us">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Value cards */}
            <ScrollReveal direction="right" stagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FeatureCard
                  title="Mission-Driven AI"
                  description="AI that serves humanity. Every solution we build is designed to bring good for mankind and create lasting positive impact."
                  icon={Target}
                />
                <FeatureCard
                  title="Enterprise Security"
                  description="SOC-2 level security practices protect your data. We take enterprise-grade security seriously across all products."
                  icon={Shield}
                />
                <FeatureCard
                  title="End-to-End Delivery"
                  description="From strategy to deployment to ongoing support — we handle every stage of your AI journey with expertise."
                  icon={Zap}
                />
                <FeatureCard
                  title="Measurable Impact"
                  description="Data-driven results with clear ROI metrics. We measure success by the real impact we create for your business."
                  icon={BarChart}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: SUCCESS STORIES GALLERY
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50/50 to-transparent snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Success Stories"
              title="Real Impact, Real Results"
              subtitle="See how organizations across industries are transforming their operations with Primitive AI"
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SuccessStoryCard
                title="Transforming Workplace Safety in Manufacturing"
                industry="Manufacturing"
                summary="VisionHub's camera AI platform deployed across 12 facilities to monitor PPE compliance and human-robot interaction zones in real-time."
                metric="40%"
                metricLabel="Reduction in workplace incidents"
                bgColor="from-emerald-600 to-teal-800"
              />
              <SuccessStoryCard
                title="Revolutionizing Customer Support in FinTech"
                industry="Financial Services"
                summary="SupportHub's AI chatbot handles 80% of tier-1 support queries automatically, with seamless escalation for complex cases."
                metric="30%"
                metricLabel="Increase in customer satisfaction"
                bgColor="from-blue-600 to-indigo-800"
              />
              <SuccessStoryCard
                title="Accelerating Legal Operations"
                industry="Legal"
                summary="LegalHub automated contract generation and review, reducing document turnaround time from days to hours across 500+ templates."
                metric="60%"
                metricLabel="Faster document processing"
                bgColor="from-purple-600 to-purple-900"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: WHAT OUR CLIENTS SAY
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 snap-section" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Testimonials"
              title="What Our Clients Say"
              subtitle="Don't just take our word for it — hear from the leaders who trust Primitive AI"
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="The Camera AI Platform has significantly improved our workplace safety. We've seen a 40% reduction in incidents since implementation."
                author="Sarah Johnson"
                role="Safety Director"
                company="Manufacturing Co."
                rating={5}
              />
              <TestimonialCard
                quote="Our customer satisfaction scores increased by 30% after implementing the AI Chatbot. The natural conversations and quick responses have transformed our service."
                author="Michael Chen"
                role="CTO"
                company="RetailTech"
                rating={5}
              />
              <TestimonialCard
                quote="The LegalHub platform reduced our document processing time by 60% and improved accuracy. It's been a game-changer for our legal department."
                author="Jennifer Williams"
                role="General Counsel"
                company="Global Services Inc."
                rating={5}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8: CTA
      ═══════════════════════════════════════════════════ */}
      <CTASection />
    </div>
  );
};

export default Index;
