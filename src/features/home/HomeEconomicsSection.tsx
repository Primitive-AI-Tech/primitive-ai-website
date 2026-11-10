import { Badge, Eyebrow } from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import {
  calculateWorkflow,
  defaultAssumptions,
} from "@/features/business-value/model";
import { useCopy } from "@/i18n/useCopy";

const number = (value: number) =>
  new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(value);

export function HomeEconomicsSection() {
  const t = useCopy();
  const result = calculateWorkflow(defaultAssumptions);
  const rows = [
    {
      label: "Before",
      total: defaultAssumptions.baseline,
      segments: [
        { label: "Eligible work", value: result.eligibleBefore, type: "eligible" },
        { label: "Other work", value: result.other, type: "other" },
      ],
    },
    {
      label: "With AI",
      total: result.assisted,
      segments: [
        { label: "Eligible work", value: result.remaining, type: "eligible" },
        { label: "Other work", value: result.other, type: "other" },
        { label: "Review", value: result.review, type: "review" },
      ],
    },
  ] as const;

  return (
    <section className="home-economics economics-story dark-section" id="economics">
      <FlowBackdrop />
      <div className="site-container economics-layout">
        <div className="economics-copy">
          <Eyebrow>{t("Cost perspective")}</Eyebrow>
          <h2>{t("Start with a workflow. Count all the effort.")}</h2>
          <p className="economics-lead">
            {t(
              "A simple example makes the trade-offs visible—including the human review AI still needs.",
            )}
          </p>
          <p className="economics-question">
            <span>{t("The question is not “How much AI?”")}</span>
            <strong>{t("It is “What does an accepted result take?”")}</strong>
          </p>
        </div>

        <div className="economics-panel">
          <div className="economics-panel-head">
            <h3>{t("Human time in a 100-minute task")}</h3>
            <Badge>{t("Illustrative model")}</Badge>
          </div>

          <div
            className="economics-bars"
            role="img"
            aria-label={t(
              "Illustrative comparison: 100 minutes before AI and 60 minutes with AI, including 8 minutes of review.",
            )}
          >
            {rows.map((row) => (
              <div className="economics-bar-row" key={row.label}>
                <strong className="economics-bar-label">{t(row.label)}</strong>
                <div className="economics-track">
                  {row.segments.map((segment) => (
                    <span
                      aria-hidden="true"
                      className={`economics-segment ${segment.type}`}
                      key={segment.label}
                      style={{
                        width: `${(segment.value / defaultAssumptions.baseline) * 100}%`,
                      }}
                    />
                  ))}
                </div>
                <strong className="economics-total">
                  {number(row.total)} {t("min")}
                </strong>
              </div>
            ))}
          </div>

          <ul className="economics-legend" aria-hidden="true">
            <li className="eligible">{t("Eligible work")}</li>
            <li className="other">{t("Other work")}</li>
            <li className="review">{t("Review")}</li>
          </ul>

          <div className="economics-result">
            <strong>{number(result.reduction)}%</strong>
            <p>
              {t("less human effort in this example,")}
              <br />
              {t("including 8 minutes of review")}
            </p>
          </div>
          <p className="economics-footnote">
            {t(
              "Illustrative assumptions, not a customer result. Validate against your own workflow and outcome quality.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
