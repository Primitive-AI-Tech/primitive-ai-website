import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import SuccessStoryCard from '@/components/SuccessStoryCard';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const industries = ['All', 'Manufacturing', 'Financial Services', 'Legal', 'Retail', 'Healthcare'];

const successStories = [
  {
    id: '1',
    title: 'Transforming Workplace Safety in Manufacturing',
    industry: 'Manufacturing',
    client: 'Global Auto Parts Manufacturer',
    product: 'VisionHub',
    summary: 'VisionHub\'s camera AI platform deployed across 12 facilities to monitor PPE compliance and human-robot interaction zones in real-time — preventing incidents before they happen.',
    challenge: 'With hundreds of workers operating alongside industrial robots across 12 facilities, manual safety audits were reactive, inconsistent, and unable to scale. Incidents were costly in both human and financial terms.',
    solution: 'Deployed VisionHub across all facilities with real-time PPE detection, restricted zone monitoring, and behavioral anomaly alerts sent directly to safety managers via mobile.',
    metric: '40%',
    metricLabel: 'Reduction in workplace incidents',
    stats: [
      { value: '40%', label: 'Fewer incidents' },
      { value: '12', label: 'Facilities covered' },
      { value: '98%', label: 'PPE detection accuracy' },
    ],
    bgColor: 'from-emerald-600 to-teal-800',
  },
  {
    id: '2',
    title: 'Revolutionizing Customer Support in FinTech',
    industry: 'Financial Services',
    client: 'Leading Digital Bank',
    product: 'SupportHub',
    summary: 'SupportHub\'s AI chatbot now handles 80% of tier-1 support queries automatically, with seamless escalation for complex cases and dramatically improved CSAT scores.',
    challenge: 'A rapidly growing digital bank was struggling with support volume — long wait times, agent burnout, and inconsistent answer quality were driving customer churn.',
    solution: 'Integrated SupportHub across web chat, mobile app, and WhatsApp. The AI handles account queries, transaction questions, and FAQs, escalating edge cases to human agents with full context.',
    metric: '30%',
    metricLabel: 'Increase in customer satisfaction',
    stats: [
      { value: '80%', label: 'Queries automated' },
      { value: '30%', label: 'CSAT increase' },
      { value: '4×', label: 'Faster resolution' },
    ],
    bgColor: 'from-blue-600 to-indigo-800',
  },
  {
    id: '3',
    title: 'Accelerating Legal Operations at Scale',
    industry: 'Legal',
    client: 'Top-Tier Law Firm',
    product: 'LegalHub',
    summary: 'LegalHub automated contract generation and review, reducing document turnaround from days to hours across 500+ contract templates.',
    challenge: 'Junior associates were spending 60%+ of their time on routine contract drafting and review, limiting the firm\'s capacity for high-value advisory work.',
    solution: 'Deployed LegalHub with the firm\'s 500+ contract templates, clause libraries, and compliance rules. Attorneys review AI-generated drafts rather than drafting from scratch.',
    metric: '60%',
    metricLabel: 'Faster document processing',
    stats: [
      { value: '60%', label: 'Faster turnaround' },
      { value: '500+', label: 'Templates automated' },
      { value: '3×', label: 'More cases handled' },
    ],
    bgColor: 'from-purple-600 to-purple-900',
  },
  {
    id: '4',
    title: 'Enterprise Knowledge Management Transformation',
    industry: 'Retail',
    client: 'Regional Retail Chain',
    product: 'KnowledgeHub',
    summary: 'KnowledgeHub consolidated 10 years of product knowledge, supplier data, and operational procedures into a single AI-searchable system accessible to all 2,000+ employees.',
    challenge: 'Knowledge was siloed across SharePoint, email threads, and individual employees\' heads. New staff spent weeks ramping up, and experienced staff spent hours answering the same questions repeatedly.',
    solution: 'KnowledgeHub ingested all existing documents and wikis. Staff now ask questions in natural language and get instant, cited answers — from store policies to supplier contacts.',
    metric: '70%',
    metricLabel: 'Reduction in knowledge search time',
    stats: [
      { value: '70%', label: 'Less search time' },
      { value: '2,000+', label: 'Employees enabled' },
      { value: '50%', label: 'Faster onboarding' },
    ],
    bgColor: 'from-violet-600 to-purple-800',
  },
  {
    id: '5',
    title: 'AI-Powered Quality Control in Electronics',
    industry: 'Manufacturing',
    client: 'Electronics Component Manufacturer',
    product: 'VisionHub',
    summary: 'Visual AI inspection replaced manual QC checks, detecting defects 10× faster with higher accuracy than human inspectors on the production line.',
    challenge: 'Manual QC was a bottleneck on the production line — slow, expensive, and prone to inspector fatigue causing missed defects in high-volume runs.',
    solution: 'VisionHub cameras monitor every unit on the production line, detecting micro-defects in real-time and triggering automatic rejection with full defect logging.',
    metric: '99.2%',
    metricLabel: 'Defect detection accuracy',
    stats: [
      { value: '99.2%', label: 'Detection accuracy' },
      { value: '10×', label: 'Faster than manual QC' },
      { value: '35%', label: 'Reduction in defect escapes' },
    ],
    bgColor: 'from-cyan-600 to-teal-800',
  },
  {
    id: '6',
    title: 'Family Story Preservation for a National Foundation',
    industry: 'Healthcare',
    client: 'Senior Care Foundation',
    product: 'FamilyHub',
    summary: 'FamilyHub was deployed across senior care facilities to help residents record life stories, share memories with families, and maintain cognitive engagement through reminiscence.',
    challenge: 'Many residents had rich life stories at risk of being lost. Families wanted to connect but lived far away. Staff lacked time for structured storytelling sessions.',
    solution: 'FamilyHub\'s guided AI conversations helped residents record stories in their own words. Families received beautifully formatted memory books and could add their own contributions remotely.',
    metric: '92%',
    metricLabel: 'Family satisfaction score',
    stats: [
      { value: '92%', label: 'Family satisfaction' },
      { value: '1,200+', label: 'Stories preserved' },
      { value: '85%', label: 'Resident engagement rate' },
    ],
    bgColor: 'from-rose-500 to-pink-800',
  },
];

const highlights = [
  { icon: TrendingUp, value: '40–70%', label: 'Efficiency gains across engagements' },
  { icon: Users, value: '50+', label: 'Enterprise clients served' },
  { icon: Zap, value: '10+', label: 'Industries transformed' },
];

const Success = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filtered = activeIndustry === 'All'
    ? successStories
    : successStories.filter(s => s.industry === activeIndustry);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-[60vh] flex items-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Success Stories
            </div>

            <h1 className="hero-heading text-white">
              Real Impact, <br />
              <span className="text-gradient-purple">Real Results</span>
            </h1>

            <p className="text-base md:text-xl text-purple-200/80 leading-relaxed">
              See how organizations across industries are using Primitive AI to reduce costs, accelerate operations, and transform their businesses.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-white mb-1">{h.value}</div>
                  <div className="text-[10px] sm:text-xs text-purple-300/70 leading-tight">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER + STORIES ═══ */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          {/* Industry filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeIndustry === ind
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-foreground hover:bg-purple-50 hover:border-purple-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Story cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((story) => (
              <SuccessStoryCard
                key={story.id}
                title={story.title}
                industry={story.industry}
                summary={story.summary}
                metric={story.metric}
                metricLabel={story.metricLabel}
                bgColor={story.bgColor}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No stories found for this industry yet.</p>
              <Button className="mt-4" variant="outline" onClick={() => setActiveIndustry('All')}>
                Show All Stories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ DETAIL SPOTLIGHT (first story expanded) ═══ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-purple-50/40 to-transparent">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeader
              badge="Featured Case Study"
              title={successStories[0].title}
              subtitle={`${successStories[0].client} · ${successStories[0].product}`}
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">The Challenge</p>
                  <p className="text-muted-foreground leading-relaxed">{successStories[0].challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">Our Solution</p>
                  <p className="text-muted-foreground leading-relaxed">{successStories[0].solution}</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5 shadow-md hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">
                    Discuss Your Challenge
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 content-start">
                {successStories[0].stats.map((stat) => (
                  <div key={stat.label} className={`rounded-2xl bg-gradient-to-br ${successStories[0].bgColor} p-6 text-center`}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Ready to Write Your Own Success Story?"
        description="Contact us to explore how Primitive AI can create measurable impact for your organization."
        primaryButtonText="Start a Conversation"
        secondaryButtonText="View Our Solutions"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
        showDemoIcon={false}
      />
    </div>
  );
};

export default Success;
