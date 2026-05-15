import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTA';
import {
  Heart, BookOpen, Camera, Mic, Users, Shield,
  MessageCircle, ChevronDown, ExternalLink, Star
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Story Recording',
    description: 'Capture family stories and memories through natural voice conversations — AI transcribes, organizes, and preserves every word.',
  },
  {
    icon: BookOpen,
    title: 'Family Knowledge Book',
    description: 'Automatically compile recorded stories, photos, and memories into a beautiful, shareable digital family book.',
  },
  {
    icon: Users,
    title: 'Multi-Generation Access',
    description: 'Invite family members of all ages to contribute and explore — simple enough for grandparents, engaging for grandchildren.',
  },
  {
    icon: MessageCircle,
    title: 'AI Conversation Guide',
    description: 'AI-guided questions help family members share meaningful stories they might not think to tell on their own.',
  },
  {
    icon: Camera,
    title: 'Photo & Memory Vault',
    description: 'Upload photos, videos, and documents. AI organizes them by people, places, and events automatically.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your family stories are private by default. End-to-end encryption ensures only invited family members can access your memories.',
  },
];

const FamilyHub = () => {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative familyhub-hero" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-rose-200 backdrop-blur-sm">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                FamilyHub
              </div>
              <h1 className="hero-heading text-white">
                Preserve What <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Matters Most</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                FamilyHub uses AI to help families capture, preserve, and share their stories, memories, and wisdom — so the things that matter most are never lost.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <a href="https://family-hub.space/" target="_blank" rel="noopener noreferrer">
                    Open FamilyHub
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop"
                  alt="FamilyHub — Preserve Family Memories"
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
              title="Keep Your Family's Story Alive"
              subtitle="Simple, beautiful tools that make preserving family memories as easy as having a conversation"
              centered
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card p-6 sm:p-8 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ QUOTE / EMOTIONAL SECTION ═══ */}
      <section className="snap-section bg-gradient-to-b from-rose-50/40 to-transparent" data-theme="light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                "The stories our grandparents told us are the foundation of who we are. FamilyHub makes sure those stories are never lost."
              </blockquote>
              <p className="text-muted-foreground font-medium">— FamilyHub User</p>

              <div className="pt-4">
                <Button
                  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full px-8 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  asChild
                >
                  <a href="https://family-hub.space/" target="_blank" rel="noopener noreferrer">
                    Start Preserving Memories
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Give Your Family the Gift of Preserved Memories"
        description="Start capturing stories today — free to try, easy to use, and built to last generations."
        primaryButtonText="Open FamilyHub"
        secondaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonLink="/contact"
        showDemoIcon={false}
      />
    </div>
  );
};

export default FamilyHub;
