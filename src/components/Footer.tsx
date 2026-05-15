import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const products = [
    { name: 'SupportHub', path: '/solutions/chatbot' },
    { name: 'KnowledgeHub', path: '/solutions/knowledgehub' },
    { name: 'VisionHub', path: '/solutions/camera-ai' },
    { name: 'FamilyHub', path: '/solutions/familyhub' },
    { name: 'LegalHub', path: '/solutions/legalhub' },
  ];

  const services = [
    'AI Agent Development',
    'AI Workflow Automation',
    'AI API Development',
    'Model Training & Fine-Tuning',
    'AI Product Development',
    'Consulting & Strategy',
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative flex flex-col justify-center min-h-[100vh] bg-purple-950 text-white pt-20 pb-8 overflow-hidden snap-section" data-theme="dark">
      {/* Decorative blur */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-5">
            <img src="/prai-logo.png" alt="Primitive AI" className="h-12 w-auto brightness-0 invert" />
            <p className="text-purple-200/80 text-sm leading-relaxed max-w-sm">
              AI is changing the world. Our mission is to make AI bring good for mankind — building products that help businesses and communities thrive.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/primitiveai" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
              </a>
              <a href="mailto:nguyentrongdoan.0@gmail.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.name}>
                  <Link to={p.path} className="text-sm text-purple-200/70 hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/solutions" className="text-sm text-purple-200/70 hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 mb-6">
              {company.map((c) => (
                <li key={c.name}>
                  <Link to={c.path} className="text-sm text-purple-200/70 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2.5 text-sm text-purple-200/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>2261 Market Street STE 22919, San Francisco, CA 94114</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+1 (415) 634-3858</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 shrink-0" />
                <a href="https://www.prai.tech" className="hover:text-white transition-colors">www.prai.tech</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-700/40 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-purple-300/60">
            <p>&copy; {new Date().getFullYear()} Primitive AI. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
