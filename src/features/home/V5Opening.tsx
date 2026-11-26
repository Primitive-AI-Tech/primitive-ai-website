import { useCopy } from "@/i18n/useCopy";
import { ChapterIcon, ExecutionSteps, HomeChapter } from "./V5Chapter";

const executionSteps = [
  { icon: "plan", title: "Reason and plan", description: "Break the objective into steps." },
  { icon: "act", title: "Carry out the work", description: "Use a tool or run a workflow." },
  { icon: "deliver", title: "Hand off the result", description: "Save results or make updates when authorized." },
];

export default function V5Opening() {
  const t = useCopy();
  return (
    <>
      <HomeChapter
        id="problem"
        className="v5-friction"
        titleId="friction-title"
        eyebrow={t("Operational challenges")}
        title={t("Work slows down when data is scattered")}
        lead={t("When information lives in several places, even a simple request takes time to research, re-enter, and report.")}
      >
        <div className="friction-grid">
          <article className="metric-card">
            <h3>
              <ChapterIcon name="search" />
              {t("Finding information")}
            </h3>
            <strong>
              9{" "}
              <small>{t("hours/week")}</small>
            </strong>
            <p>{t("Time spent finding information needed for work, according to a survey of knowledge workers.")}</p>
            <a href="https://assets.asana.biz/m/7247625de89a76e6/original/State-of-Work-Innovation-2024_Global.pdf#page=5">{t("Asana, 2024 · more than 13,000 respondents ↗")}</a>
          </article>
          <article className="metric-card amber-card">
            <h3>
              <ChapterIcon name="copy" />
              {t("Re-entering data")}
            </h3>
            <strong>{t("0.34%")}</strong>
            <p>{t("Share of fields entered incorrectly using single data entry in a study of medical data.")}</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/14500053/">{t("Kawado et al., 2003 · 104,720 fields ↗")}</a>
          </article>
          <article className="metric-card">
            <h3>
              <ChapterIcon name="report" />
              {t("Preparing reports")}
            </h3>
            <strong>47%</strong>
            <p>{t("Time financial planning and analysis teams spent gathering and checking data.")}</p>
            <a href="https://fpa-trends.com/article/closing-ai-readiness-gap-2026">{t("FP&A Trends, 2026 · 475 responses ↗")}</a>
          </article>
        </div>
        <div className="baseline">
          <div>
            <p className="chapter-badge">{t("Hypothetical example")}</p>
            <p>{t("500 records/month × 4 minutes of work/record")}</p>
          </div>
          <strong>
            ≈ 33{" "}
            <small>{t("work hours/month")}</small>
          </strong>
        </div>
      </HomeChapter>
      <HomeChapter
        id="system-handoffs"
        className="v5-systems-problem ink"
        titleId="system-handoffs-title"
        eyebrow={t("Operational challenges")}
        title={t("One workflow is split across multiple applications")}
        lead={t("Even after teams find the data, work can stall at the handoff. When sales, operations, the warehouse, and accounting use separate applications, people have to reconcile statuses and notify the next team.")}
      >
        <figure className="system-map" aria-labelledby="system-map-title">
          <figcaption>
            <p className="chapter-badge">{t("Illustrative example")}</p>
            <h3 id="system-map-title">{t("The same order at the same point in time")}</h3>
          </figcaption>
          <ul className="system-stages" aria-label={t("Status across four applications")}>
            <li>
              <div className="system-record">
                <ChapterIcon name="chat" />
                <div>
                  <h4>CRM</h4>
                  <p>{t("Request YC-184")}</p>
                </div>
              </div>
              <p className="system-status">{t("Awaiting dispatch")}</p>
            </li>
            <li>
              <div className="system-record">
                <ChapterIcon name="order" />
                <div>
                  <h4>ERP</h4>
                  <p>{t("Order DH-472")}</p>
                </div>
              </div>
              <p className="system-status">{t("Awaiting warehouse confirmation")}</p>
            </li>
            <li>
              <div className="system-record">
                <ChapterIcon name="stock" />
                <div>
                  <h4>{t("Warehouse software")}</h4>
                  <p>{t("Dispatch record PX-328")}</p>
                </div>
              </div>
              <p className="system-status is-complete">{t("Dispatched")}</p>
            </li>
            <li>
              <div className="system-record">
                <ChapterIcon name="finance-report" />
                <div>
                  <h4>{t("Accounting software")}</h4>
                  <p>{t("Reference DH-472")}</p>
                </div>
              </div>
              <p className="system-status">{t("Invoice not issued")}</p>
            </li>
          </ul>
          <div className="system-relays">
            <h4>{t("Manual handoffs")}</h4>
            <ul>
              <li>
                <strong>Email</strong>
                <span>{t("Sales emails operations to create the order.")}</span>
              </li>
              <li>
                <strong>Excel</strong>
                <span>{t("Operations records the request ID and order ID in a reconciliation spreadsheet.")}</span>
              </li>
              <li>
                <strong>{t("Phone")}</strong>
                <span>{t("Accounting calls the warehouse to confirm dispatch.")}</span>
              </li>
            </ul>
          </div>
          <p className="system-gap">
            <strong>{t("Invoice pending")}</strong>
            <span>{t("The warehouse recorded the dispatch. Accounting waits for warehouse confirmation before issuing the invoice.")}</span>
          </p>
        </figure>
      </HomeChapter>
      <HomeChapter
        id="execution"
        className="v5-work ink"
        titleId="execution-title"
        eyebrow={t("Product")}
        title={t("How does Core Agentic solve it?")}
        lead={t("The team sets the objective. AI agents look up authorized data, carry out steps across existing tools, and hand results back to the team for review.")}
      >
        <div className="work-grid">
          <ExecutionSteps steps={executionSteps} />
          <figure className="deck-capture">
            <a href="/images/home/v5/deck-trace.webp">
              <img
                src="/images/home/v5/deck-trace.webp"
                width={1384}
                height={772}
                loading="lazy"
                decoding="async"
                alt={t("Core Agentic interface showing a contract lookup, order check, and delivery schedule conclusion.")}
              />
            </a>
            <figcaption>
              <strong>{t("Delivery meets the contract terms")}</strong>
              <span>{t("In this Core Agentic example, an agent checks a sample order against its contract. The contract allows five days and delivery is scheduled for day four.")}</span>
            </figcaption>
          </figure>
        </div>
      </HomeChapter>
      <HomeChapter
        id="business-value"
        className="v5-value"
        titleId="value-title"
        eyebrow={t("Business value")}
        title={t("Handle more work with the same resources")}
        lead={t("When AI takes on routine lookups, comparisons, and data entry, teams have more time for exceptions. Measure productivity and cost on the same workflow to see the improvement.")}
      >
        <div className="value-pair">
          <article>
            <p className="value-category">
              <ChapterIcon name="deliver" />
              {t("Productivity")}
            </p>
            <h3>{t("Complete more work per hour")}</h3>
            <p>{t("Spend less time searching and entering data. Apply the same rules to each request as volume grows.")}</p>
            <dl className="value-measure">
              <div>
                <dt>{t("What to measure")}</dt>
                <dd>{t("Accepted results per team hour")}</dd>
              </div>
            </dl>
          </article>
          <article>
            <p className="value-category">
              <ChapterIcon name="report" />
              {t("Operating cost")}
            </p>
            <h3>{t("Know when to expand")}</h3>
            <p>{t("Include time spent on processing and rework, plus AI usage costs. Compare with the current approach on the same kind of work.")}</p>
            <dl className="value-measure">
              <div>
                <dt>{t("What to measure")}</dt>
                <dd>{t("Cost per accepted result")}</dd>
              </div>
            </dl>
          </article>
        </div>
      </HomeChapter>
    </>
  );
}
