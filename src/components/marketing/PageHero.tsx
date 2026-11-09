import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  const t = useCopy();
  return (
    <section className={`page-hero dark-section ${className}`}>
      <FlowBackdrop />
      <div className="site-container relative-content">
        <Eyebrow>{t(eyebrow)}</Eyebrow>
        <h1>{title}</h1>
        {description && <p className="hero-description">{t(description)}</p>}
        {children}
      </div>
    </section>
  );
}
