import { ArrowDown } from "lucide-react";
import { ChapterIcon } from "@/components/marketing/ChapterIcon";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import { V5PageHero } from "@/components/marketing/PageHero";
import { Eyebrow, TextLink } from "@/components/marketing/primitives";
import { companyValues, journey } from "@/features/company/content";
import { useCompanyCopy } from "@/features/company/copy";

export default function Company() {
  const { t } = useCompanyCopy();

  return (
    <>
      <V5PageHero
        id="about-intro"
        className="about-hero"
        eyebrow={t("About Primitive AI")}
        title={
          <>
            {t("More potential.")}{" "}
            <em>
              {t("More productive")} {t("organizations.")}
            </em>
          </>
        }
        description={t("We build practical AI around the work organizations need to get done.")}
        visual={
          <figure className="about-founder">
            <img
              src="/founders/doannt-body.png"
              width={1365}
              height={2048}
              fetchPriority="high"
              decoding="async"
              alt={t("Doan Nguyen, founder of Primitive AI.")}
            />
            <figcaption>
              <strong>Doan Nguyen</strong>
              <span>{t("Founder of Primitive AI")}</span>
            </figcaption>
          </figure>
        }
      >
        <div className="about-hero-actions">
          <a className="about-action" href="#journey">
            {t("Explore the Primitive AI journey")} <ArrowDown size={16} aria-hidden="true" />
          </a>
          <span className="about-founded">{t("Founded in 2023")}</span>
        </div>
      </V5PageHero>

      <section className="v5-page-section about-journey" id="journey" aria-labelledby="journey-title">
        <div className="v5-page-wrap">
          <header className="v5-page-heading">
            <Eyebrow>{t("Our story")}</Eyebrow>
            <h2 id="journey-title">{t("Our journey")}</h2>
            <p>{t("Experience building systems for FDI and Vietnamese organizations brought operational inefficiency into focus.")}</p>
          </header>
          <figure className="about-conviction">
            <blockquote>
              “{t("How can AI help our organizations become productive enough to catch up?")}”
            </blockquote>
            <figcaption>{t("Our founding conviction")}</figcaption>
          </figure>
          <ol className="about-timeline" role="list">
            {journey.map(({ title, text, year, image }) => (
              <li key={title}>
                <div className="about-timeline-copy">
                  {year && <time dateTime={year}>{year}</time>}
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </div>
                {image && (
                  <figure className="about-timeline-media">
                    <img
                      src={image.src}
                      alt={t(image.alt)}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{t(image.caption)}</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v5-page-section about-principles" id="principles" aria-labelledby="principles-title">
        <div className="v5-page-wrap">
          <header className="v5-page-heading">
            <Eyebrow>{t("How we work")}</Eyebrow>
            <h2 id="principles-title">{t("What guides the work.")}</h2>
          </header>
          <div className="about-values">
            {companyValues.map(({ icon, title, text }) => (
              <article key={title}>
                <ChapterIcon name={icon} />
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
          <div className="about-links">
            <TextLink to="/products">{t("Explore our products")}</TextLink>
            <TextLink to="/services">{t("Custom AI services")}</TextLink>
          </div>
        </div>
      </section>
      <InvitationCTA id="next-step" />
    </>
  );
}
