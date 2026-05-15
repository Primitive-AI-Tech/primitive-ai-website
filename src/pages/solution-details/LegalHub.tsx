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
import { FileText, PenTool, Lock, Search, BarChart, CheckSquare, ChevronDown, CheckCircle } from 'lucide-react';

const LegalHub = () => {
  const dashboardImages = [
    {
      src: "/lovable-uploads/943f3048-80fe-4d3f-84fb-df0de740391c.png",
      alt: "LegalHub Dashboard",
      title: "Dashboard View",
      description: "Complete overview of your document activity, pending signatures, and recent activity"
    },
    {
      src: "/lovable-uploads/74efe076-bdd8-4da0-b32e-a92f68ce896f.png",
      alt: "LegalHub Documents View",
      title: "Documents Management",
      description: "Organize and access all your legal documents in one place"
    },
    {
      src: "/lovable-uploads/da20ed6c-425e-4f98-8f05-47de3444a629.png",
      alt: "LegalHub Templates View",
      title: "Document Templates",
      description: "Access a library of professional templates for various legal needs"
    }
  ];

  return (
    <div>
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hook-section min-h-screen flex items-center relative" data-theme="dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="section-container relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-sm">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                LegalHub
              </div>
              <h1 className="hero-heading text-white">
                AI-Powered <span className="text-gradient-purple">Legal Documents</span>
              </h1>
              <p className="text-base md:text-lg text-purple-200/80 leading-relaxed">
                Streamline legal document creation, management, and e-signing with our powerful AI-driven platform designed for legal professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                {/* <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="#pricing">View Pricing</Link>
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/40 to-purple-600/40 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
                  alt="LegalHub — AI Legal Document Platform"
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
              title="Powerful Tools for Legal Professionals"
              subtitle="Our LegalHub Platform leverages advanced AI to streamline every aspect of legal operations"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
              <FeatureCard title="AI Document Creation" description="Generate legal documents quickly using templates and AI assistance tailored to your specific requirements." icon={FileText} />
              <FeatureCard title="Electronic Signatures" description="Securely collect legally binding electronic signatures from all parties with audit trails and verification." icon={PenTool} />
              <FeatureCard title="Secure Document Storage" description="Store and organize all legal documents with enterprise-grade security and compliance features." icon={Lock} />
              <FeatureCard title="Intelligent Search" description="Quickly find specific content within your document repository using AI-powered semantic search." icon={Search} />
              <FeatureCard title="Comprehensive Analytics" description="Track document status, review cycles, and team performance with detailed analytics and reports." icon={BarChart} />
              <FeatureCard title="Compliance Monitoring" description="Ensure documents comply with relevant regulations and internal policies with automated checks." icon={CheckSquare} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 3: DASHBOARD PREVIEW ═══ */}
      <section className="snap-section bg-gradient-to-b from-purple-50/30 to-transparent" data-theme="light">
        <div className="section-container py-16 md:py-0">
          <ScrollReveal>
            <SectionHeader
              badge="Dashboard"
              title="Modern, Intuitive Interface"
              subtitle="Manage all your legal documents from one unified, beautifully designed dashboard"
              centered
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8">
              <GalleryCarousel images={dashboardImages} />
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
              title="From Draft to Signed in Four Steps"
              subtitle="Our LegalHub Platform seamlessly integrates into your legal workflow from day one"
              centered
              light
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              {[
                { step: '01', title: 'Document Creation', desc: 'Create new documents from scratch or use AI-powered templates tailored to your specific legal needs.' },
                { step: '02', title: 'Review & Collaboration', desc: 'Collaborate with team members and stakeholders to review and refine documents in real-time.' },
                { step: '03', title: 'E-Signatures', desc: 'Securely collect legally binding electronic signatures from all required parties with full audit trails.' },
                { step: '04', title: 'Storage & Management', desc: 'Securely store, organize, and manage all documents with powerful search and analytics capabilities.' },
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
              title="Versatile Across Legal Operations"
              subtitle="LegalHub powers document workflows for legal teams across industries and firm sizes"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop',
                  title: 'Contract Management',
                  desc: 'Streamline the entire contract lifecycle from creation to renewal, with automated workflows, version control, and approval tracking.',
                  points: ['Automated contract generation', 'Electronic signature collection', 'Renewal and expiration tracking'],
                },
                {
                  img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop',
                  title: 'Corporate Governance',
                  desc: 'Manage board documents, resolutions, and corporate records with secure access control, audit trails, and compliance monitoring.',
                  points: ['Board meeting management', 'Resolution tracking and approvals', 'Regulatory compliance documentation'],
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
              subtitle="Hear from legal professionals who have transformed their operations with LegalHub"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <TestimonialCard quote="The LegalHub Platform has reduced our contract processing time by 65%. The AI document generation and e-signature features have been transformative for our legal department." author="Daniel Martinez" role="General Counsel" company="Global Enterprises" rating={5} />
              <TestimonialCard quote="The platform's compliance monitoring features ensure we stay on top of regulatory requirements. It's like having an extra compliance officer on the team." author="Emily Johnson" role="Compliance Director" company="Financial Services Inc." rating={5} />
              <TestimonialCard quote="We've seen a significant ROI since implementing LegalHub. Document retrieval time has decreased by 80%, and our team can focus on high-value legal work." author="Robert Chang" role="Legal Operations Manager" company="Tech Innovations Corp" rating={5} />
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
              title="LegalHub Plans"
              subtitle="Choose the plan that works best for your legal operations"
              centered
            />
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <PricingCard title="Essential" price="$1,299" description="Ideal for small legal teams and solo practitioners" features={["Up to 5 users", "Basic document templates", "E-signature capabilities", "Secure document storage", "Basic search functionality", "Email and chat support"]} />
              <PricingCard title="Professional" price="$2,799" description="Perfect for mid-sized legal departments with advanced needs" features={["Up to 20 users", "All Essential features", "Advanced AI document generation", "Custom template creation", "Advanced search and analytics", "Compliance monitoring", "Priority support"]} isPopular />
              <PricingCard title="Enterprise" price="Custom" description="Tailored solution for large legal teams with complex requirements" features={["Unlimited users", "All Professional features", "Custom integrations", "Advanced security and compliance", "Custom workflows and automation", "Dedicated account manager", "24/7 premium support"]} />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ═══ SECTION 8: CTA ═══ */}
      <CTASection
        title="Ready to Transform Your Legal Operations?"
        description="Schedule a demo and see how LegalHub can streamline document workflows and accelerate your legal team."
        primaryButtonText="Request Demo"
        secondaryButtonText="Explore Solutions"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
};

export default LegalHub;
