import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { applicationAreas } from "@/features/home/application-areas";
import { useCopy } from "@/i18n/useCopy";

export default function ApplicationExplorer() {
  const t = useCopy();

  return (
    <div className="application-explorer">
      <p className="application-example-note">
        {t("Illustrative ways to configure one platform. Start with any workflow.")}
      </p>
      <ul className="application-grid" aria-label={t("Example work areas")}>
        {applicationAreas.map((area) => (
          <li key={area.id}>
            <Link className="application-card" to={`/contact?workflow=${area.id}`}>
              <span className="application-card-icon">
                <area.icon aria-hidden="true" />
              </span>
              <span className="application-card-copy">
                <strong>{t(area.title)}</strong>
                <span>{t(area.summary)}</span>
              </span>
              <ArrowRight className="application-card-arrow" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="application-open-invite">
        {t("Have a different workflow in mind?")} {" "}
        <Link to="/contact?interest=core-agentic">{t("Start with your work")}</Link>
      </p>
    </div>
  );
}
