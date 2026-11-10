import { Button, Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

export function HomeInvitation({ id }: { id: string }) {
  const t = useCopy();

  return (
    <section className="home-invitation dark-section" id={id}>
      <div className="home-invitation-image" aria-hidden="true">
        <img src="/images/earth-sunrise-iss070-full.jpg" alt="" />
      </div>
      <div className="home-invitation-overlay" aria-hidden="true" />
      <div className="site-container relative-content home-invitation-content">
        <Eyebrow>{t("Your next step")}</Eyebrow>
        <h2>{t("The next advantage is how your organization works.")}</h2>
        <p>
          {t(
            "Where could your people spend less time coordinating—and more time moving the work forward?",
          )}
        </p>
        <Button arrow>{t("Talk to our team")}</Button>
      </div>
      <p className="home-invitation-note">
        {t("Start with one workflow. See what becomes possible.")}
      </p>
      <a
        className="home-invitation-credit"
        href="https://science.nasa.gov/earth/earth-observatory/sunrise-from-the-station-152259/"
        target="_blank"
        rel="noreferrer"
      >
        {t("Earth sunrise · NASA / Expedition 70")}
      </a>
    </section>
  );
}
