import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  BookOpen, Search, Brain, Shield, Zap, Users, FileText,
  Database, ArrowRight, ExternalLink, ChevronDown
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'AI-Powered Search',
    description: 'Semantic search that understands context and intent — not just keywords — to surface the most relevant knowledge instantly.',
  },
  {
    icon: Brain,
    title: 'Knowledge Graph',
    description: 'Automatically map relationships between documents, topics, and experts to unlock hidden connections across your organization.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Ingest PDFs, Docs, slides, wikis, and more. KnowledgeHub parses, indexes, and makes every document queryable.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share knowledge bases across teams with fine-grained access controls, version history, and collaborative annotations.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC-2 compliant with end-to-end encryption. Your proprietary knowledge never leaves your secure environment.',
  },
  {
    icon: Zap,
    title: 'Instant Answers',
    description: 'Ask questions in natural language and get precise answers with source citations — no more digging through folders.',
  },
];

const useCases = [
  {
    title: 'Internal Knowledge Base',
    description: 'Onboard new employees faster and reduce repetitive questions by making your company\'s expertise instantly accessible.',
    icon: Database,
  },
  {
    title: 'Customer Support',
    description: 'Equip support agents with instant answers from product docs, FAQs, and past resolutions to resolve cases 3× faster.',
    icon: Users,
  },
  {
    title: 'Research & Analysis',
    description: 'Synthesize insights across thousands of documents in seconds, accelerating research and competitive intelligence.',
    icon: Brain,
  },
];

const KnowledgeHub = () => {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                KnowledgeHub
              </div>
              <h1 className="hero-heading text-white">
                Your Organization's <span className="text-gradient-purple">AI Brain</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                KnowledgeHub centralizes your organization's knowledge and makes it instantly searchable with AI — turning scattered documents into a powerful, queryable intelligence layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <a href="http://knowledge-hub.space/" target="_blank" rel="noopener noreferrer">
                    Open KnowledgeHub
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
                  alt="KnowledgeHub — AI Knowledge Management"
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

      {/* ═══ FEATURES ═══ */}
      <section className="snap-section" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Features"
              title="Everything You Need to Manage Knowledge at Scale"
              subtitle="KnowledgeHub combines powerful AI with enterprise-grade reliability to make your organization's knowledge work for you"
              centered
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card p-6 sm:p-8 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="snap-section relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />

        <div className="relative z-10 section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Use Cases"
              title="Built for Every Knowledge Challenge"
              subtitle="From internal wikis to customer support — KnowledgeHub adapts to how your teams actually work"
              centered
              light
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <uc.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{uc.title}</h3>
                  <p className="text-purple-200/70 text-sm leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Button
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <a href="http://knowledge-hub.space/" target="_blank" rel="noopener noreferrer">
                  Try KnowledgeHub Free
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Ready to Unlock Your Organization's Knowledge?"
        description="Join teams using KnowledgeHub to make every document, conversation, and insight instantly accessible."
        primaryButtonText="Open KnowledgeHub"
        secondaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonLink="/contact"
        showDemoIcon={false}
      />
    </div>
  );
};

export default KnowledgeHub;
