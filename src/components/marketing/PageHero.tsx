import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  visual,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  visual?: ReactNode;
  className?: string;
}) {
  const t = useCopy();
  return (
    <section className={`page-hero dark-section ${className}`}>
      <FlowBackdrop />
      <div className={`site-container relative-content${visual ? " page-hero-layout" : ""}`}>
        <div className={visual ? "page-hero-copy" : undefined}>
          <Eyebrow>{t(eyebrow)}</Eyebrow>
          <h1>{title}</h1>
          {description && <p className="hero-description">{t(description)}</p>}
          {children}
        </div>
        {visual && <div className="page-hero-art">{visual}</div>}
      </div>
    </section>
  );
}

export function V5PageHero({
  id,
  className = "",
  eyebrow,
  title,
  description,
  visual,
  children,
}: {
  id: string;
  className?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  visual: ReactNode;
  children?: ReactNode;
}) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className={`v5-page-hero dark-section ${className}`} aria-labelledby={titleId}>
      <FlowBackdrop />
      <div className="v5-page-wrap v5-hero-layout">
        <div className="v5-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id={titleId}>{title}</h1>
          {description && <p className="v5-hero-description">{description}</p>}
          {children}
        </div>
        {visual}
      </div>
    </section>
  );
}
