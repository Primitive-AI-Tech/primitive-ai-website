import { CalendarDays } from "lucide-react";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { Eyebrow, IconTile, TextLink } from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { companyValues, journey } from "@/features/company/content";
import { useCopy } from "@/i18n/useCopy";

export default function Company() {
  const t = useCopy();
  return (
    <>
      <section className="company-hero dark-section">
        <div className="company-photo-shade" />
        <FlowBackdrop />
        <div className="site-container relative-content company-hero-grid">
          <div className="company-hero-copy">
            <Eyebrow>{t("About Primitive AI")}</Eyebrow>
            <h1>
              {t("More potential.")}
              <br />
              <em>{t("More productive")}</em>
              <br />
              {t("organizations.")}
            </h1>
            <p className="hero-description">
              {t(
                "We build practical AI around the work organizations need to get done.",
              )}
            </p>
            <span className="company-founded-badge">
              <CalendarDays aria-hidden="true" />
              {t("Founded in 2023")}
            </span>
          </div>
          <figure className="company-founder-portrait">
            <img src="/founders/doannt-body.png" alt="Doan Nguyen, founder of Primitive AI" />
            <figcaption>
              <strong>Doan Nguyen</strong>
              <span>{t("Founder")}</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="company-conviction light-section">
        <div className="site-container">
          <Eyebrow>{t("Our conviction")}</Eyebrow>
          <h2 className="section-title">
            {t("A question that stayed with us.")}
          </h2>
          <div className="founder-question">
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>
                {t(
                  "How can AI help our organizations become productive enough to catch up?",
                )}
              </p>
              <cite>{t("Our founding conviction")}</cite>
            </blockquote>
            <p>
              {t(
                "Experience building systems for FDI and Vietnamese organizations brought operational inefficiency into focus.",
              )}
            </p>
          </div>
          <div id="journey">
            <Eyebrow>{t("Our journey")}</Eyebrow>
            <ol className="company-timeline">
              {journey.map((item, index) => (
                <li key={item.title}>
                  <span className="company-timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                  {index === 0 && (
                    <figure className="company-journey-visual">
                      <img
                        src="/vision-hub.png"
                        alt={t("Factory production line with computer vision detection markers.")}
                        loading="lazy"
                      />
                      <figcaption>{t("Computer vision in an operating environment")}</figcaption>
                    </figure>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="company-principles light-section">
        <div className="site-container">
          <Eyebrow>{t("What guides the work")}</Eyebrow>
          <h2 className="section-title">{t("What guides the work.")}</h2>
          <div className="company-principle-grid">
            {companyValues.map((item) => (
              <article className="surface-panel" key={item.title}>
                <IconTile icon={item.icon} />
                <div>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="company-links">
            <TextLink to="/products">{t("Explore our products")}</TextLink>
            <TextLink to="/services">{t("Custom AI services")}</TextLink>
          </div>
        </div>
      </section>
      <ClosingCTA company />
    </>
  );
}
