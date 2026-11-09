import { Button } from "@/components/marketing/primitives";
import { delivery } from "@/features/delivery/content";
import { useCopy } from "@/i18n/useCopy";
import {
  ChartNoAxesColumnIncreasing,
  Database,
  Network,
  UserRound,
} from "lucide-react";

export function DeliveryGrid() {
  const t = useCopy();
  return (
    <ol className="delivery-grid">
      {delivery.map((step, i) => (
        <li key={step.title}>
          <span className="step-number">{i + 1}</span>
          <step.icon
            className="step-icon"
            strokeWidth={1.6}
            aria-hidden="true"
          />
          <h3>{t(step.short)}</h3>
          <p>{t(step.summary)}</p>
        </li>
      ))}
    </ol>
  );
}

export function WorkingBrief({ compact = false }: { compact?: boolean }) {
  const t = useCopy();
  return (
    <div className={`working-brief surface-panel ${compact ? "compact" : ""}`}>
      <h3>{t(compact ? "Bring a costly workflow" : "The working brief")}</h3>
      {[
        {
          icon: Network,
          label: compact ? "Process owner" : "The process",
          text: "The team who knows the work best.",
        },
        {
          icon: UserRound,
          label: compact ? "Approved data" : "The owner",
          text: "The information we can use together.",
        },
        {
          icon: Database,
          label: compact ? "Success measures" : "Approved data",
          text: "The outcomes that define value for your organization.",
        },
        ...(!compact
          ? [
              {
                icon: ChartNoAxesColumnIncreasing,
                label: "Success measures",
                text: "",
              },
            ]
          : []),
      ].map((row) => (
        <div className="brief-row" key={row.label}>
          <row.icon strokeWidth={1.5} aria-hidden="true" />
          <div>
            <strong>{t(row.label)}</strong>
            {compact && <p>{t(row.text)}</p>}
          </div>
        </div>
      ))}
      {compact && (
        <Button to="/contact?intent=working-session" arrow>
          {t("Plan a working session")}
        </Button>
      )}
    </div>
  );
}
