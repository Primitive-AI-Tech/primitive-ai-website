import { Button, Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

export function InvitationCTA({ to }: { to?: string }) {
  const t = useCopy();

  return (
    <section className="invitation-cta" id="next-step" aria-labelledby="invitation-title">
      <div className="site-container relative-content invitation-cta-content">
        <Eyebrow>{t("invitation.eyebrow", "Your next step")}</Eyebrow>
        <h2 id="invitation-title">{t("invitation.headline", "The next advantage is how your organization works.")}</h2>
        <p>
          {t(
            "invitation.description",
            "Where could your people spend less time coordinating—and more time moving the work forward?",
          )}
        </p>
        <Button to={to} arrow>{t("invitation.contact", "Talk to our team")}</Button>
      </div>
      <figure className="invitation-cta-artwork" aria-hidden="true">
        <img src="/images/home/photography/next.webp" alt="" width={1320} height={880} loading="lazy" decoding="async" />
      </figure>
      <p className="invitation-cta-note">
        {t("invitation.note", "Start with one workflow. See what becomes possible.")}
      </p>
    </section>
  );
}
