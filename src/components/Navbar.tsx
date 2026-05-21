import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Camera, MessageCircle, FileText, Brain, BookOpen, Heart,
  Bot, Workflow, Code2, GraduationCap, Package, Lightbulb, ChevronDown, Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<'dark' | 'light'>('dark');
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation('common');

  const currentLang = LANGUAGES.find(l => l.code === i18n.language?.split('-')[0]) ?? LANGUAGES[0];

  useEffect(() => {
    const updateNavTheme = () => {
      const sections = Array.from(
        document.querySelectorAll('[data-theme], .hook-section')
      ) as HTMLElement[];
      let current: HTMLElement | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = section;
        } else {
          break;
        }
      }
      if (current) {
        const theme = (current.getAttribute('data-theme') ||
          (current.classList.contains('hook-section') ? 'dark' : null)) as 'dark' | 'light' | null;
        if (theme) setNavTheme(theme);
      }
    };

    const timeout = setTimeout(updateNavTheme, 80);
    window.addEventListener('scroll', updateNavTheme, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', updateNavTheme);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isDark = navTheme === 'dark';

  const products = [
    { name: 'SupportHub', descKey: 'nav.products_list.support_hub_desc', icon: MessageCircle, path: '/solutions/chatbot' },
    { name: 'KnowledgeHub', descKey: 'nav.products_list.knowledge_hub_desc', icon: BookOpen, path: '/solutions/knowledgehub' },
    { name: 'VisionHub', descKey: 'nav.products_list.vision_hub_desc', icon: Camera, path: '/solutions/camera-ai' },
    { name: 'FamilyHub', descKey: 'nav.products_list.family_hub_desc', icon: Heart, path: '/solutions/familyhub' },
    { name: 'LegalHub', descKey: 'nav.products_list.legal_hub_desc', icon: FileText, path: '/solutions/legalhub', badgeKey: 'badge.beta' },
  ];

  const services = [
    { key: 'ai_agent_dev', icon: Bot },
    { key: 'ai_workflow', icon: Workflow },
    { key: 'ai_api', icon: Code2 },
    { key: 'model_training', icon: GraduationCap },
    { key: 'ai_product_dev', icon: Package },
    { key: 'consulting', icon: Lightbulb },
  ];

  const navLinks = [
    { key: 'nav.success_stories', path: '/success' },
    { key: 'nav.about', path: '/about' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
      isDark
        ? 'bg-gradient-to-b from-purple-950/70 via-purple-950/30 to-transparent'
        : 'bg-transparent'
    )}>
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
              {t('nav.home')}
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
                {t('nav.products_services')}
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isProductsOpen && 'rotate-180')} />
              </button>

              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                )}
              >
                <div className="w-[640px] app-panel-strong p-6 grid grid-cols-2 gap-6 text-foreground text-left">
                  {/* Products column */}
                  <div className="flex flex-col">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">{t('nav.products')}</h3>
                    <div className="space-y-1 flex-1">
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
                              {product.badgeKey && (
                                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">{t(product.badgeKey)}</span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{t(product.descKey)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        to="/solutions"
                        className="block px-3 py-2 rounded-xl text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        {t('nav.view_all_products')}
                      </Link>
                    </div>
                  </div>

                  {/* Services column */}
                  <div className="flex flex-col">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">{t('nav.services')}</h3>
                    <div className="flex flex-col justify-between flex-1">
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          to="/services"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 transition-colors group/item"
                        >
                          <service.icon className="w-4 h-4 text-purple-500 shrink-0" />
                          <span className="text-sm font-medium text-foreground group-hover/item:text-purple-700 transition-colors">
                            {t(`nav.services_list.${service.key}`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        to="/services"
                        className="block px-3 py-2 rounded-xl text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        {t('nav.view_all_services')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  isActive(link.path)
                    ? (isDark ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700')
                    : (isDark ? 'text-white hover:bg-white/20 hover:text-white' : 'text-foreground hover:bg-purple-50 hover:text-purple-700')
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* CTA + Language Selector + Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div ref={langRef} className="relative hidden sm:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  isDark ? 'text-white/80 hover:bg-white/10' : 'text-foreground hover:bg-purple-50'
                )}
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase text-xs font-bold">{currentLang.code}</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 app-panel-strong py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors hover:bg-purple-50',
                        i18n.language?.split('-')[0] === lang.code ? 'text-purple-700 font-semibold' : 'text-foreground'
                      )}
                    >
                      <span>{lang.label}</span>
                      <span className="text-xs text-muted-foreground uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              className={cn(
                "hidden sm:inline-flex font-medium rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300",
                isDark
                  ? "bg-white text-purple-900 hover:bg-white/90"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              )}
              asChild
            >
              <Link to="/contact">{t('nav.contact_us')}</Link>
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
            ? cn(
                'max-h-[80vh] opacity-100 border shadow-2xl',
                isDark
                  ? 'bg-purple-950/95 border-white/15 backdrop-blur-xl'
                  : 'bg-white/98 border-purple-100 backdrop-blur-xl'
              )
            : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="p-3 space-y-0.5 max-h-[75vh] overflow-y-auto">
          <Link
            to="/"
            className={cn(
              'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
              isDark
                ? (isActive('/') ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10')
                : (isActive('/') ? 'bg-purple-100 text-purple-700' : 'text-foreground hover:bg-purple-50')
            )}
          >
            {t('nav.home')}
          </Link>

          {/* Mobile Products */}
          <button
            type="button"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className={cn(
              'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors',
              isDark ? 'text-white/90 hover:bg-white/10' : 'text-foreground hover:bg-purple-50'
            )}
          >
            {t('nav.products_services')}
            <ChevronDown className={cn('w-4 h-4 transition-transform', isProductsOpen && 'rotate-180', isDark ? 'text-white/60' : 'text-muted-foreground')} />
          </button>

          {isProductsOpen && (
            <div className={cn('ml-2 pl-3 border-l space-y-0.5 py-1', isDark ? 'border-white/10' : 'border-purple-100')}>
              <p className={cn('text-[10px] font-bold uppercase tracking-widest px-3 pt-1 pb-1.5', isDark ? 'text-white/40' : 'text-muted-foreground')}>{t('nav.products')}</p>
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors',
                    isDark ? 'text-white/80 hover:bg-white/10' : 'text-foreground hover:bg-purple-50'
                  )}
                >
                  <product.icon className={cn('w-4 h-4 shrink-0', isDark ? 'text-purple-300' : 'text-purple-500')} />
                  <span className="font-medium">{product.name}</span>
                  {product.badgeKey && (
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 ml-auto">{t(product.badgeKey)}</span>
                  )}
                </Link>
              ))}
              <p className={cn('text-[10px] font-bold uppercase tracking-widest px-3 pt-2 pb-1.5', isDark ? 'text-white/40' : 'text-muted-foreground')}>{t('nav.services')}</p>
              {services.map((service) => (
                <Link
                  key={service.key}
                  to="/services"
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors',
                    isDark ? 'text-white/70 hover:bg-white/10' : 'text-foreground hover:bg-purple-50'
                  )}
                >
                  <service.icon className={cn('w-4 h-4 shrink-0', isDark ? 'text-purple-400' : 'text-purple-400')} />
                  <span>{t(`nav.services_list.${service.key}`)}</span>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={cn(
                'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                isDark
                  ? (isActive(link.path) ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10')
                  : (isActive(link.path) ? 'bg-purple-100 text-purple-700' : 'text-foreground hover:bg-purple-50')
              )}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Mobile Language Selector */}
          <div className={cn('pt-2 border-t', isDark ? 'border-white/10' : 'border-purple-100')}>
            <p className={cn('text-[10px] font-bold uppercase tracking-widest px-3 py-2', isDark ? 'text-white/40' : 'text-muted-foreground')}>Language</p>
            <div className="grid grid-cols-3 gap-1 px-1 pb-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={cn(
                    'px-2 py-2 rounded-lg text-xs font-medium transition-colors text-center',
                    i18n.language?.split('-')[0] === lang.code
                      ? (isDark ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700')
                      : (isDark ? 'text-white/60 hover:bg-white/10' : 'text-muted-foreground hover:bg-purple-50')
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 pb-1">
            <Button
              className={cn(
                'w-full font-medium rounded-full',
                isDark ? 'bg-white text-purple-900 hover:bg-white/90' : 'bg-purple-600 hover:bg-purple-700 text-white'
              )}
              asChild
            >
              <Link to="/contact">{t('nav.contact_us')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
