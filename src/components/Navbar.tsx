import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Camera, MessageCircle, FileText, Brain, BookOpen, Heart,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb, ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<'dark' | 'light'>('dark');
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver;
    
    // Add small delay to ensure DOM is fully rendered
    const timeout = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const theme = entry.target.getAttribute('data-theme') as 'dark' | 'light';
              if (theme) setNavTheme(theme);
            }
          }
        },
        { rootMargin: '-10% 0px -50% 0px', threshold: 0 } // triggers when section is in top half
      );

      const sections = document.querySelectorAll('[data-theme]');
      sections.forEach((s) => observer.observe(s));
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    // Reset theme on route change if not on homepage
    if (location.pathname !== '/') {
      setNavTheme('light');
    }
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isDark = navTheme === 'dark';

  const products = [
    { name: 'SupportHub', desc: 'AI-powered customer support platform', icon: MessageCircle, path: '/solutions/chatbot' },
    { name: 'KnowledgeHub', desc: 'Enterprise knowledge management & AI retrieval', icon: BookOpen, path: '/solutions/knowledgehub' },
    { name: 'VisionHub', desc: 'Intelligent visual monitoring & Camera AI', icon: Camera, path: '/solutions/camera-ai' },
    { name: 'FamilyHub', desc: 'Family knowledge preservation & memories', icon: Heart, path: '/solutions/familyhub' },
    { name: 'LegalHub', desc: 'Legal document generation & management', icon: FileText, path: '/solutions/legalhub', badge: 'Soon' },
  ];

  const services = [
    { name: 'AI Agent Development', icon: Bot },
    { name: 'AI Workflow Automation', icon: Workflow },
    { name: 'AI API Development', icon: Code2 },
    { name: 'Model Training & Fine-Tuning', icon: GraduationCap },
    { name: 'AI Product Development', icon: Package },
    { name: 'Consulting & Strategy', icon: Lightbulb },
  ];

  const navLinks = [
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3">
      <div className={cn(
          'mx-auto max-w-5xl w-[95%] rounded-[2rem] px-4 sm:px-6 py-3 transition-all duration-300 mt-2',
          'backdrop-blur-xl shadow-lg',
          isDark 
            ? 'bg-white/10 border border-white/20' 
            : 'bg-white/60 border border-purple-900/10'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/prai-logo.png" 
              alt="Primitive AI" 
              className={cn(
                "h-10 sm:h-12 w-auto transition-all duration-300",
                isDark && "brightness-0 invert"
              )} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                isActive('/') 
                  ? (isDark ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700') 
                  : (isDark ? 'text-white hover:bg-white/20 hover:text-white' : 'text-foreground hover:bg-purple-50 hover:text-purple-700')
              )}
            >
              Home
            </Link>

            {/* Products & Services Mega Menu */}
            <div className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  (isActive('/solutions') || location.pathname.startsWith('/solutions/'))
                    ? (isDark ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700')
                    : (isDark ? 'text-white hover:bg-white/20 hover:text-white' : 'text-foreground hover:bg-purple-50 hover:text-purple-700')
                )}
              >
                Products & Services
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isProductsOpen && 'rotate-180')} />
              </button>

              {/* Mega menu dropdown */}
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                )}
              >
                <div className="w-[640px] app-panel-strong p-6 grid grid-cols-2 gap-6 text-foreground text-left">
                  {/* Products column */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">Products</h3>
                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.path}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 transition-colors group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                            <product.icon className="w-4.5 h-4.5 text-purple-600" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-foreground group-hover/item:text-purple-700 transition-colors">{product.name}</span>
                              {product.badge && (
                                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">{product.badge}</span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{product.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Services column */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">Services</h3>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to="/solutions"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 transition-colors group/item"
                        >
                          <service.icon className="w-4 h-4 text-purple-500 shrink-0" />
                          <span className="text-sm font-medium text-foreground group-hover/item:text-purple-700 transition-colors">{service.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        to="/solutions"
                        className="block px-3 py-2 rounded-xl text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        View All Solutions →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  isActive(link.path) 
                    ? (isDark ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700')
                    : (isDark ? 'text-white hover:bg-white/20 hover:text-white' : 'text-foreground hover:bg-purple-50 hover:text-purple-700')
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              className={cn(
                "hidden sm:inline-flex font-medium rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300",
                isDark 
                  ? "bg-white text-purple-900 hover:bg-white/90"
                  : "bg-purple-600 hover:bg-purple-700 text-white" 
              )}
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>

            <button
              className={cn(
                "lg:hidden p-2 rounded-full transition-colors",
                isDark ? "hover:bg-white/10 text-white" : "hover:bg-purple-50 text-foreground"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden mx-4 sm:mx-6 mt-2 rounded-2xl overflow-hidden transition-all duration-300',
          isMenuOpen
            ? 'max-h-[80vh] opacity-100 app-panel-strong'
            : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="p-4 space-y-1 max-h-[75vh] overflow-y-auto">
          <Link to="/" className={cn('block px-4 py-3 rounded-xl text-sm font-medium text-foreground', isActive('/') ? 'bg-purple-100 text-purple-700' : 'hover:bg-purple-50')}>
            Home
          </Link>

          {/* Mobile Products */}
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium hover:bg-purple-50 transition-colors text-foreground"
          >
            Products & Services
            <ChevronDown className={cn('w-4 h-4 transition-transform', isProductsOpen && 'rotate-180')} />
          </button>

          {isProductsOpen && (
            <div className="pl-4 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 pt-2 pb-1">Products</p>
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-purple-50 transition-colors text-foreground"
                >
                  <product.icon className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">{product.name}</span>
                  {product.badge && (
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">{product.badge}</span>
                  )}
                </Link>
              ))}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 pt-3 pb-1">Services</p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to="/solutions"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm hover:bg-purple-50 transition-colors text-foreground"
                >
                  <service.icon className="w-4 h-4 text-purple-400" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn('block px-4 py-3 rounded-xl text-sm font-medium text-foreground', isActive(link.path) ? 'bg-purple-100 text-purple-700' : 'hover:bg-purple-50')}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
