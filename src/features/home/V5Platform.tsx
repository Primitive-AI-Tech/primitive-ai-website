import { useCopy } from "@/i18n/useCopy";
import { ChapterIcon, HomeChapter } from "./V5Chapter";

export default function V5Platform() {
  const t = useCopy();
  return (
    <>
      <HomeChapter
        id="architecture"
        className="v5-integration v5-architecture"
        titleId="platform-title"
        eyebrow={t("Architecture")}
        title={t("Integrate with existing systems")}
        lead={t("Agents work through the channels teams use and access authorized data. ERP, CRM, and other business systems remain the official records.")}
      >
        <figure className="v5-flow" aria-label={t("Core Agentic integration architecture")}>
          <div className="v5-flow-grid">
            <section className="v5-systems v5-inputs" aria-labelledby="v5-channels-title">
              <h3 id="v5-channels-title">{t("Work channels")}</h3>
              <dl>
                <div>
                  <dt>{t("Chat and applications")}</dt>
                  <dd>{t("Chat on the web or embed it in an application.")}</dd>
                </div>
                <div>
                  <dt>{t("Email and API")}</dt>
                  <dd>{t("Connect according to the configuration.")}</dd>
                </div>
                <div>
                  <dt>{t("Schedules and events")}</dt>
                  <dd>{t("Start tasks on a schedule or from a configured event.")}</dd>
                </div>
              </dl>
            </section>
            <section className="v5-core" aria-labelledby="v5-core-title">
              <h3 id="v5-core-title">Core Agentic</h3>
              <p>{t("A dedicated deployment environment for each customer.")}</p>
              <dl className="v5-engines">
                <div>
                  <dt>{t("AI agents")}</dt>
                  <dd>{t("Reason and plan.")}</dd>
                </div>
                <div>
                  <dt>{t("Workflows")}</dt>
                  <dd>{t("Run predefined steps.")}</dd>
                </div>
              </dl>
              <p className="v5-connectors">{t("Tools and connectors")}</p>
              <a className="v5-policy-link" href="#control">
                {t("Access · Approvals · Logs")}
                <span aria-hidden="true">↓</span>
              </a>
            </section>
            <section className="v5-systems v5-records" aria-labelledby="v5-records-title">
              <h3 id="v5-records-title">{t("Existing systems")}</h3>
              <dl>
                <div>
                  <dt>{t("Business applications")}</dt>
                  <dd>{t("ERP, CRM, and WMS via API.")}</dd>
                </div>
                <div>
                  <dt>{t("Databases")}</dt>
                  <dd>{t("Access within the authorized scope.")}</dd>
                </div>
                <div>
                  <dt>{t("Files and knowledge repositories")}</dt>
                  <dd>{t("Approved documents and spreadsheets.")}</dd>
                </div>
              </dl>
            </section>
            <div className="v5-model">
              <strong>{t("AI models")}</strong>
              <span>{t("Core Agentic uses models according to the deployment configuration.")}</span>
            </div>
          </div>
        </figure>
      </HomeChapter>
      <HomeChapter
        id="control"
        className="ink v5-control v5-architecture"
        titleId="v5-control-title"
        eyebrow={t("Controls")}
        title={t("Your team decides what AI can do")}
        lead={t("When agents connect to systems, your team decides which data AI can read, what actions require approval, and how to review the log.")}
      >
        <ul className="v5-controls-list">
          <li>
            <ChapterIcon name="access" />
            <div>
              <h3>{t("Limit access")}</h3>
              <p>{t("Set permissions for each source and action. Start with read-only access where appropriate.")}</p>
            </div>
          </li>
          <li>
            <ChapterIcon name="approval" />
            <div>
              <h3>{t("Approve specific actions")}</h3>
              <p>{t("When approval is required, AI pauses so the person responsible can review the proposed change before deciding.")}</p>
            </div>
          </li>
          <li>
            <ChapterIcon name="activity" />
            <div>
              <h3>{t("Review the log")}</h3>
              <p>{t("Review the run, approval decision, and actions taken.")}</p>
            </div>
          </li>
        </ul>
        <figure className="v5-approval" aria-labelledby="v5-approval-title">
          <div className="v5-approval-copy">
            <div className="v5-approval-top">
              <p className="v5-approval-ref">PR-DEMO-1042</p>
              <span className="chapter-badge status-badge">{t("Pending approval")}</span>
            </div>
            <h3 id="v5-approval-title">{t("Request to purchase 100 seals")}</h3>
            <p>{t("In this materials planning example, the agent proposes an update to the purchase quantity. The person responsible reviews the change before approving or declining it.")}</p>
          </div>
          <div className="v5-approval-crop">
            <img
              src="/images/home/v5/approval.webp"
              width={587}
              height={252}
              loading="lazy"
              decoding="async"
              alt={t("Illustrative interface showing the exact update to requisition PR-DEMO-1042 for 100 seals and the options to decline or approve.")}
            />
          </div>
        </figure>
      </HomeChapter>
    </>
  );
}
