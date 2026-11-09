import { Badge } from "@/components/marketing/primitives";
import {
  calculateWorkflow,
  defaultAssumptions,
  type WorkflowAssumptions,
} from "@/features/business-value/model";
import { useCopy } from "@/i18n/useCopy";

const number = (value: number) =>
  new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(
    Math.abs(value) < 0.00001 ? 0 : value,
  );

export function EffortTable({
  assumptions = defaultAssumptions,
}: {
  assumptions?: WorkflowAssumptions;
}) {
  const t = useCopy();
  const result = calculateWorkflow(assumptions);
  const rows = [
    ["Eligible work", result.eligibleBefore, result.remaining],
    ["Other work", result.other, result.other],
    ["Added review", 0, result.review],
    ["Total", assumptions.baseline, result.assisted],
  ] as const;
  return (
    <div className="effort-table-wrap">
      <table className="effort-table">
        <caption className="sr-only">
          {t("Human effort comparison in minutes")}
        </caption>
        <thead>
          <tr>
            <th scope="col">{t("Human effort")}</th>
            <th scope="col">{t("Before")}</th>
            <th scope="col">{t("With AI")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, before, after], i) => (
            <tr key={label} className={i === 3 ? "total-row" : ""}>
              <th scope="row">{t(label)}</th>
              <td>
                {number(before)} <span>{t("min")}</span>
              </td>
              <td>
                {number(after)} <span>{t("min")}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EffortFigure({
  assumptions = defaultAssumptions,
}: {
  assumptions?: WorkflowAssumptions;
}) {
  const t = useCopy();
  const result = calculateWorkflow(assumptions);
  const scale = Math.max(assumptions.baseline, result.assisted, 1);
  const rows = [
    {
      label: "Before",
      total: assumptions.baseline,
      segments: [
        { label: "Eligible work", value: result.eligibleBefore, kind: "eligible" },
        { label: "Other work", value: result.other, kind: "other" },
        { label: "Added review", value: 0, kind: "review" },
      ],
    },
    {
      label: "With AI",
      total: result.assisted,
      segments: [
        { label: "Eligible work", value: result.remaining, kind: "eligible" },
        { label: "Other work", value: result.other, kind: "other" },
        { label: "Added review", value: result.review, kind: "review" },
      ],
    },
  ] as const;
  return (
    <figure
      className="effort-figure"
      aria-label={t("Illustrative stacked bars showing human effort before and with AI, including review time.")}
    >
      <figcaption className="effort-figure-heading">
        <span>{t("Human time per task")}</span>
        <span>{t("Minutes")}</span>
      </figcaption>
      <div className="effort-chart" aria-hidden="true">
        {rows.map((row) => (
          <div className="effort-chart-row" key={row.label}>
            <div className="effort-chart-label"><strong>{t(row.label)}</strong><span>{number(row.total)} {t("min")}</span></div>
            <div className="effort-chart-track">
              {row.segments.map((segment) => (
                <span
                  className={`effort-chart-segment ${segment.kind}`}
                  key={segment.label}
                  style={{ width: `${Math.max(0, (segment.value / scale) * 100)}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ul className="effort-chart-legend" aria-hidden="true">
        <li className="eligible">{t("Eligible work")}</li>
        <li className="other">{t("Other work")}</li>
        <li className="review">{t("Added review")}</li>
      </ul>
      <p className="sr-only">
        {t("The comparison is illustrative and uses the assumptions shown in the adjacent table.")}
      </p>
    </figure>
  );
}

export function MiniEconomics({
  standalone = false,
}: { standalone?: boolean } = {}) {
  const t = useCopy();
  const Heading = standalone ? "h2" : "h3";
  return (
    <div className="mini-economics surface-panel">
      <div className="panel-heading">
        <Heading>{t("What could change in a 100-minute task?")}</Heading>
        <Badge>{t("Illustrative model")}</Badge>
      </div>
      <div className="mini-economics-main">
        <div className="mini-economics-visuals">
          <EffortTable />
          <EffortFigure />
        </div>
        <div className="effort-result">
          <strong>
            <span>40%</span> {t("less human effort")}
          </strong>
          <p>
            {t(
              "Including 8 minutes of review. Illustrative assumptions, not a customer result.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
