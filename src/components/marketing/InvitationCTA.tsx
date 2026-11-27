import type { ReactNode } from "react";
import { Button, Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

export function InvitationCTA({ id, to, artwork }: { id?: string; to?: string; artwork?: ReactNode }) {
  const t = useCopy();

  return (
    <section className={`invitation-cta ${artwork ? "invitation-cta--illustrated" : "dark-section"}`} id={id}>
      {!artwork && (
        <>
          <div className="invitation-cta-image" aria-hidden="true">
            <img
              src="/images/earth-sunrise-iss070-full.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="invitation-cta-overlay" aria-hidden="true" />
        </>
      )}
      <div className="site-container relative-content invitation-cta-content">
        <Eyebrow>{t("Your next step")}</Eyebrow>
        <h2>{t("The next advantage is how your organization works.")}</h2>
        <p>
          {t(
            "Where could your people spend less time coordinating—and more time moving the work forward?",
          )}
        </p>
        <Button to={to} arrow>{t("Talk to our team")}</Button>
      </div>
      {artwork}
      <p className="invitation-cta-note">
        {t("Start with one workflow. See what becomes possible.")}
      </p>
      {!artwork && (
        <a
          className="invitation-cta-credit"
          href="https://science.nasa.gov/earth/earth-observatory/sunrise-from-the-station-152259/"
          target="_blank"
          rel="noreferrer"
        >
          {t("Earth sunrise · NASA / Expedition 70")}
        </a>
      )}
    </section>
  );
}
