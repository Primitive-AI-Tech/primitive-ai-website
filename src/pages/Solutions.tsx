import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  Camera, MessageCircle, FileText, BookOpen, Heart,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb,
  ChevronDown
} from 'lucide-react';

const Solutions = () => {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════ */}
      <section className="hook-section min-h-[60vh] flex items-center relative">
        {/* Animated decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          {/* Dot pattern */}
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Products & Services
            </div>

            <h1 className="hero-heading text-white">
              AI Solutions for <br />
              <span className="text-gradient-purple">Modern Businesses</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed">
              Our comprehensive suite of AI-powered solutions helps businesses improve safety, enhance customer experiences, streamline operations, and drive innovation.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/50">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: OUR PRODUCTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
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
          SECTION 3: OUR SERVICES
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
          SECTION 4: CTA
      ═══════════════════════════════════════════════════ */}
      <CTASection 
        title="Ready to Enhance Your Business with AI?"
        description="Contact us today to schedule a demo and learn how our AI solutions can transform your operations."
        primaryButtonText="Request Demo"
        secondaryButtonText="Why Choose Us?"
        primaryButtonLink="/contact"
        secondaryButtonLink="/why-choose-us"
      />
    </div>
  );
};

export default Solutions;
