import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

const frictionSteps = [
  { title: "Search", detail: "Find the right version across tools and teams" },
  { title: "Copy", detail: "Move information from system to system" },
  { title: "Chase", detail: "Check status and follow up on handoffs" },
  { title: "Check again", detail: "Reconcile details before work can move" },
];

export function FrictionSection() {
  const t = useCopy();

  return (
    <section className="problem-section friction-section light-section" id="problem">
      <div className="site-container friction-layout">
        <div className="friction-copy">
          <Eyebrow>{t("The work between your systems")}</Eyebrow>
          <h2 className="section-title">
            {t("Your people spend")}{" "}
            <span className="friction-highlight">{t("too much time")}</span>{" "}
            {t("holding the process together.")}
          </h2>
          <p className="friction-intro">
            {t(
              "Knowledge is scattered. Routine tasks repeat. Every handoff adds more coordination to the day.",
            )}
          </p>
        </div>

        <ol className="friction-steps" aria-label={t("Repeated work across systems")}>
          {frictionSteps.map((step, index) => (
            <li className="friction-step" key={step.title}>
              <span className="friction-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{t(step.title)}</strong>
              <span className="friction-detail">{t(step.detail)}</span>
            </li>
          ))}
        </ol>

        <div className="friction-footer">
          <Link to="/#business-value">
            {t("Let AI carry more of the repeatable work")}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
