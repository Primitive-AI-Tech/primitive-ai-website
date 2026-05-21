import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  showDemoIcon?: boolean;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/contact",
  showDemoIcon = true
}: CTASectionProps) => {
  const { t } = useTranslation('common');

  const resolvedTitle = title ?? t('cta.default_title');
  const resolvedDescription = description ?? t('cta.default_description');
  const resolvedPrimary = primaryButtonText ?? t('cta.default_primary');
  const resolvedSecondary = secondaryButtonText ?? t('cta.default_secondary');

  return (
    <section className="relative flex flex-col justify-center min-h-[70vh] lg:min-h-screen pt-24 pb-16 md:py-28 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 snap-section" data-theme="dark">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading text-white mb-6">{resolvedTitle}</h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-purple-200/80 mb-8 md:mb-10 leading-relaxed">{resolvedDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button className="bg-white text-purple-800 hover:bg-white/90 font-semibold rounded-full px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" asChild>
              <Link to={primaryButtonLink}>{resolvedPrimary}<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold rounded-full px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:-translate-y-0.5" asChild>
              <Link to={secondaryButtonLink}>{showDemoIcon && <Users className="mr-2 h-5 w-5" />}{resolvedSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
