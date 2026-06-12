import React, { useState } from 'react';
import { BookOpen, MessageCircle, Camera, Heart, FileText, Brain, GraduationCap } from 'lucide-react';
import ProductCard from './ProductCard';
import { useTranslation } from 'react-i18next';

const PRODUCT_CONFIG = [
  { id: 'knowledgehub', solutionIdx: 1, icon: BookOpen, href: '/solutions/knowledgehub', orbitRadius: '160px', duration: '25s', delay: '0s' },
  { id: 'supporthub', solutionIdx: 0, icon: MessageCircle, href: '/solutions/chatbot', orbitRadius: '240px', duration: '35s', delay: '-10s' },
  { id: 'visionhub', solutionIdx: 2, icon: Camera, href: '/solutions/camera-ai', orbitRadius: '320px', duration: '45s', delay: '-20s' },
  { id: 'familyhub', solutionIdx: 3, icon: Heart, href: '/solutions/familyhub', orbitRadius: '160px', duration: '25s', delay: '-12.5s' },
  { id: 'legalhub', solutionIdx: 4, icon: FileText, href: '/solutions/legalhub', status: 'beta' as const, orbitRadius: '240px', duration: '35s', delay: '-27.5s' },
  { id: 'eduassess', solutionIdx: 5, icon: GraduationCap, href: '/solutions/eduassess', orbitRadius: '320px', duration: '45s', delay: '-42.5s' },
] as const;

const GalaxyProducts = () => {
  const { t } = useTranslation('home');
  const { t: tSol } = useTranslation('solutions');

  const solutionItems = tSol('products_section.items', { returnObjects: true }) as Array<{
    name: string; tagline: string; description: string;
  }>;

  const products = PRODUCT_CONFIG.map(config => ({
    ...config,
    name: solutionItems[config.solutionIdx]?.name ?? config.id,
    tagline: solutionItems[config.solutionIdx]?.tagline ?? '',
    description: solutionItems[config.solutionIdx]?.description ?? '',
  }));

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const activeProductId = hoveredProduct || selectedProduct || products[0].id;
  const activeProduct = products.find(p => p.id === activeProductId)!;

  return (
    <div className="relative w-full mt-8 md:mt-12">
      {/* Tablet/Mobile Fallback: Visual + Grid List */}
      <div className="lg:hidden">
        {/* Decorative Mini-Galaxy for Mobile */}
        <div className="relative h-36 w-full flex items-center justify-center mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute w-32 h-32 border border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-24 h-24 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full shadow-lg flex items-center justify-center z-10">
            <Brain className="w-8 h-8 text-white animate-pulse" />
          </div>
          {/* Floating Icons around the core */}
          {products.slice(0, 3).map((p, i) => (
            <div
              key={p.id}
              className="absolute w-8 h-8 bg-white border border-purple-100 rounded-full flex items-center justify-center shadow-sm"
              style={{
                transform: `rotate(${i * 120}deg) translateX(60px) rotate(-${i * 120}deg)`
              }}
            >
              <p.icon className="w-4 h-4 text-purple-600" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              icon={product.icon}
              href={product.href}
              status={'status' in product ? product.status : undefined}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Galaxy Visualization */}
      <div className="hidden lg:flex items-center justify-between gap-12 xl:gap-16 min-h-[600px] max-w-7xl mx-auto">
        {/* Left: Active Product Card Presentation */}
        <div className="w-full max-w-[400px] xl:max-w-[450px] relative z-20 shrink-0 h-[380px]">
          <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <ProductCard
            name={activeProduct.name}
            tagline={activeProduct.tagline}
            description={activeProduct.description}
            icon={activeProduct.icon}
            href={activeProduct.href}
            status={'status' in activeProduct ? activeProduct.status : undefined}
            className="h-full shadow-2xl transition-all duration-500 ease-out"
          />
        </div>

        {/* Right: The Galaxy */}
        <div className="relative flex-1 h-[600px] flex items-center justify-center pointer-events-auto scale-[0.75] xl:scale-100 transition-transform duration-500 origin-right">
          {/* Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-purple-500/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-purple-500/5" />

          {/* Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full shadow-[0_0_60px_rgba(147,51,234,0.6)] flex flex-col items-center justify-center z-10">
            <Brain className="w-8 h-8 text-white animate-pulse mb-1" />
            <span className="text-[10px] text-purple-100/80 font-bold uppercase tracking-tighter text-center px-2">{t('galaxy.click_to_explore')}</span>
          </div>

          {/* Orbiting Planets */}
          {products.map((product) => (
            <div
              key={product.id}
              className={`absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7 z-20 cursor-pointer group transition-all duration-300 ${
                activeProductId === product.id ? 'scale-110' : ''
              }`}
              style={{
                '--orbit-radius': product.orbitRadius,
                animation: `orbit ${product.duration} linear infinite`,
                animationDelay: product.delay,
                animationPlayState: hoveredProduct || selectedProduct === product.id ? 'paused' : 'running',
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div
                className="w-full h-full rounded-full bg-white border border-purple-200 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-125 group-hover:shadow-purple-500/50 group-hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <product.icon className="w-6 h-6 text-purple-700 relative z-10" />
              </div>

              {/* Product Label */}
              <div className="absolute top-[110%] left-1/2 -translate-x-1/2 text-[10px] font-bold text-purple-900/40 group-hover:text-purple-600 whitespace-nowrap transition-colors uppercase tracking-wider">
                {product.name}
              </div>

              {/* Tooltip on hover */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-[140%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-md shadow-xl font-medium"
              >
                {t('galaxy.view_details')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalaxyProducts;
