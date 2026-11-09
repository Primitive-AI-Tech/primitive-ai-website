import { TextLink } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import { Check, FileText, Layers3, MessageSquare, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ActivityPreview({ full = false }: { full?: boolean }) {
  const t = useCopy();
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const run = () => {
    clearTimeout(timer.current);
    setRunning(true);
    timer.current = setTimeout(() => setRunning(false), 650);
  };
  const items = full
    ? ["Retrieve order status", "Consult delivery terms", "Prepare exceptions"]
    : [
        "Request understood",
        "Sources retrieved",
        "Report prepared",
        "Awaiting review",
      ];
  return (
    <div className={`activity-preview ${full ? "full" : ""}`}>
      <div className="preview-label">{t("Concept preview · sample data")}</div>
      <div className="activity-body">
        {full && (
          <div className="sample-request">
            <h3>
              <MessageSquare aria-hidden="true" />
              {t("Request")}
            </h3>
            <p>{t("Review overdue orders")}</p>
            <button
              className="site-button"
              type="button"
              onClick={run}
              disabled={running}
            >
              <Play size={18} aria-hidden="true" />
              {t(running ? "Running example…" : "Run example")}
            </button>
          </div>
        )}
        <div className="activity-content">
          {full && (
            <>
              <h3>
                <Layers3 aria-hidden="true" />
                {t("Reasoning & activity")}
              </h3>
              <p className="planning-summary">
                {t(
                  "Plan: check order status, verify delivery terms, and prepare exceptions for review.",
                )}
              </p>
            </>
          )}
          <ol aria-live="polite">
            {items.map((item, i) => (
              <li key={item} className={i === 3 || running ? "waiting" : ""}>
                <span className="timeline-marker">
                  {i !== 3 && !running && (
                    <Check size={14} aria-hidden="true" />
                  )}
                </span>
                <div>
                  <strong>{t(item)}</strong>
                  {!full && (
                    <small>
                      {t(
                        [
                          "Identified the task and requirements.",
                          "Collected approved data and knowledge.",
                          "Generated a draft based on the sources.",
                          "Ready for team review and next step.",
                        ][i],
                      )}
                    </small>
                  )}
                </div>
              </li>
            ))}
          </ol>
          {full && (
            <div className="result-strip">
              <FileText aria-hidden="true" />
              {t(
                running ? "Preparing the example…" : "Report ready for review",
              )}
            </div>
          )}
        </div>
      </div>
      {!full && (
        <TextLink to="/core-agentic">{t("Explore the platform")}</TextLink>
      )}
    </div>
  );
}
