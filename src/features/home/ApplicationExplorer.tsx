import { ArrowRight, Check, FileSearch, UserRoundCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { applicationAreas } from "@/features/home/application-areas";
import { useCopy } from "@/i18n/useCopy";

export default function ApplicationExplorer() {
  const t = useCopy();
  const location = useLocation();
  const [selectedId, setSelectedId] = useState(
    applicationAreas.find((area) => area.id === location.hash.slice(1))?.id ??
      applicationAreas.find((area) => area.id === "sales-support")?.id ??
      applicationAreas[0].id,
  );
  useEffect(() => {
    const targetId = location.hash.slice(1);
    if (applicationAreas.some((area) => area.id === targetId)) {
      setSelectedId(targetId);
    }
  }, [location.hash]);
  const selected =
    applicationAreas.find((area) => area.id === selectedId) ??
    applicationAreas[0];

  return (
    <div className="application-explorer">
      <p className="application-example-note">
        {t("Illustrative ways to configure one platform. Start with any workflow.")}
      </p>
      <div className="application-grid" aria-label={t("Example work areas")}>
        {applicationAreas.map((area) => (
          <button
            key={area.id}
            id={area.id}
            type="button"
            className="application-card"
            aria-pressed={selectedId === area.id}
            aria-controls="application-detail"
            onClick={() => setSelectedId(area.id)}
          >
            <span className="application-card-icon">
              <area.icon aria-hidden="true" />
            </span>
            <span className="application-card-copy">
              <strong>{t(area.title)}</strong>
              <span>{t(area.summary)}</span>
            </span>
            <ArrowRight className="application-card-arrow" aria-hidden="true" />
          </button>
        ))}
      </div>
      <article
        className="application-detail surface-panel"
        id="application-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="application-detail-heading">
          <span className="site-badge">{t("Example configuration")}</span>
          <h3>{t(selected.title)}</h3>
        </div>
        <dl className="application-flow">
          <div>
            <dt>
              <FileSearch aria-hidden="true" /> {t("Approved information")}
            </dt>
            <dd>{t(selected.sources)}</dd>
          </div>
          <div>
            <dt>
              <Check aria-hidden="true" /> {t("Agent work")}
            </dt>
            <dd>{t(selected.agentWork)}</dd>
          </div>
          <div>
            <dt>
              <UserRoundCheck aria-hidden="true" /> {t("Human checkpoint")}
            </dt>
            <dd>{t(selected.review)}</dd>
          </div>
        </dl>
        <div className="application-detail-footer">
          <p>
            <strong>{t("Possible output")}</strong> {t(selected.output)}
          </p>
          <Link to={"/contact?workflow=" + selected.id} className="text-link">
            {t("Discuss this workflow")}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <p className="application-scope-note">
          {t("Example configuration only. Scope, information access and reviews are agreed with each organization.")}
        </p>
      </article>
      <p className="application-open-invite">
        {t("Have a different workflow in mind?")} {" "}
        <Link to="/contact?interest=core-agentic">{t("Start with your work")}</Link>
      </p>
    </div>
  );
}
