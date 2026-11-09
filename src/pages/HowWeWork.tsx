import { Layers3, UsersRound } from "lucide-react";
import { Button, Eyebrow, IconTile } from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { PhotoSlice } from "@/components/marketing/PhotoSlice";
import { WorkingBrief } from "@/features/delivery/components/DeliveryGrid";
import { delivery, training } from "@/features/delivery/content";
import { useCopy } from "@/i18n/useCopy";

export default function HowWeWork() {
  const t = useCopy();
  return (
    <>
      <section className="delivery-hero dark-section">
        <FlowBackdrop />
        <div className="site-container relative-content delivery-hero-grid">
          <div>
            <Eyebrow>{t("How We Work")}</Eyebrow>
            <h1>
              {t("Your problem.")}
              <br />
              {t("Your data.")}
              <br />
              <em>{t("A working proof.")}</em>
            </h1>
            <p className="hero-description">
              {t(
                "Work alongside our team to turn a valuable bottleneck into a focused, measurable solution.",
              )}
            </p>
            <Button to="/contact?intent=working-session">
              {t("Plan a working session")}
            </Button>
          </div>
          <div className="delivery-hero-visual">
            <WorkingBrief />
            <PhotoSlice type="workshop" />
          </div>
        </div>
      </section>
      <section className="delivery-process-section light-section">
        <div className="site-container">
          <Eyebrow>{t("Our six-stage working approach")}</Eyebrow>
          <h2 className="section-title">
            {t(
              "A clear, collaborative path from opportunity to operational value.",
            )}
          </h2>
          <ol className="delivery-timeline">
            {delivery.map((step, i) => (
              <li key={step.title} className={i === 2 ? "featured-step" : ""}>
                <span className="timeline-number">{i + 1}</span>
                <IconTile icon={step.icon} />
                <div className="delivery-step-copy">
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.description)}</p>
                </div>
                <div className="deliverable">
                  <span>{t("Deliverable")}</span>
                  <strong>{t(step.deliverable)}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="training-section light-section">
        <div className="site-container">
          <Eyebrow>{t("Employee training")}</Eyebrow>
          <h2 className="section-title">
            {t("Build capability in your people, too.")}
          </h2>
          <div className="training-grid">
            {training.map((item) => (
              <div className="surface-panel" key={item.title}>
                <item.icon strokeWidth={1.5} aria-hidden="true" />
                <h3>{t(item.title)}</h3>
              </div>
            ))}
          </div>
          <div className="shared-responsibility">
            <div>
              <UsersRound aria-hidden="true" />
              <h3>{t("Your team brings process knowledge.")}</h3>
            </div>
            <div>
              <Layers3 aria-hidden="true" />
              <h3>
                {t(
                  "Primitive AI brings platform and implementation expertise.",
                )}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="working-invitation light-section">
        <div className="site-container">
          <Eyebrow>{t("Let’s make progress")}</Eyebrow>
          <h2 className="section-title">
            {t("Bring a costly or time-consuming workflow.")}
          </h2>
          <p className="section-intro">
            {t(
              "We will agree the preparation, scope, deliverables and commercial terms together.",
            )}
          </p>
          <Button to="/contact?intent=working-session" arrow>
            {t("Talk to our team")}
          </Button>
        </div>
      </section>
    </>
  );
}
