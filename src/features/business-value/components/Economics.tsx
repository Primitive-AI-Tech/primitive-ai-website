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
        <EffortTable />
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
