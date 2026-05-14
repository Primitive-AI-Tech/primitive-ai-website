import React from 'react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

const partners = [
  { name: 'Qualcomm', logo: '/images/partners/Qualcomm.png', website: 'https://www.qualcomm.com/' },
  { name: 'Intel', logo: '/images/partners/Intel.png', website: 'https://www.intel.vn/' },
  { name: 'Microsoft', logo: '/images/partners/Microsoft.png', website: 'https://www.microsoft.com/' },
  { name: 'Google', logo: '/images/partners/Google.png', website: 'https://startup.google.com/' },
  { name: 'Canon', logo: '/images/partners/Canon.png', website: 'https://vn.canon/' },
  { name: 'Ajinomoto', logo: '/images/partners/Ajinomoto.png', website: 'https://www.ajinomoto.com.vn/' },
  { name: 'YAZAKI', logo: '/images/partners/Yazaki.png', website: 'https://www.yev.vn/' },
  { name: 'Nidec', logo: '/images/partners/Nidec.png', website: 'https://www.nidec.com/' },
  { name: 'FPT Automotive', logo: '/images/partners/FA.png', website: 'https://fpt.auto/' },
  { name: 'HIK Robotics', logo: '/images/partners/HIK.png', website: 'https://www.hikrobotics.com/' },
  { name: 'VTI Solutions', logo: '/images/partners/vti-solutions.png', website: 'https://vti-solutions.vn/' },
  { name: 'RAIS Tech', logo: '/images/partners/RAIS.png', website: 'https://raistech.vn/' },
];

const Partners = () => {
  // Split partners into 3 groups for the rows
  const row1 = [...partners.slice(0, 4), ...partners.slice(0, 4), ...partners.slice(0, 4)];
  const row2 = [...partners.slice(4, 8), ...partners.slice(4, 8), ...partners.slice(4, 8)];
  const row3 = [...partners.slice(8, 12), ...partners.slice(8, 12), ...partners.slice(8, 12)];

  const LogoRow = ({ items, reverse = false }: { items: typeof partners, reverse?: boolean }) => (
    <div className="relative flex overflow-hidden py-3">
      <div className={`flex whitespace-nowrap min-w-full ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} hover:[animation-play-state:paused]`}>
        {items.map((partner, index) => (
          <div key={index} className="flex-shrink-0 px-8 md:px-12">
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 w-40 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent snap-section" data-theme="light">
      <div className="section-container mb-12">
        <ScrollReveal>
          <SectionHeader
            badge="Institutional Trust"
            title="Trusted by Industry Leaders"
            subtitle="Partnering with global technology pioneers to drive the future of Enterprise AI"
            centered
          />
        </ScrollReveal>
      </div>

      <div className="space-y-4">
        <div className="relative">
          {/* Fading Edges Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent" />
          </div>

          <LogoRow items={row1} />
          <LogoRow items={row2} reverse />
          <LogoRow items={row3} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
