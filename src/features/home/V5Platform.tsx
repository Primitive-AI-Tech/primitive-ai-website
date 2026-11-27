import { useCopy } from "@/i18n/useCopy";
import { HomeArtwork } from "./HomeArtwork";
import HomeArchitecture from "./HomeArchitecture";
import { EditorialIcon } from "@/components/marketing/EditorialIcon";
import { HomeChapter } from "./V5Chapter";

export default function V5Platform() {
  const t = useCopy();
  return (
    <>
      <HomeChapter
        id="architecture"
        artwork={<HomeArtwork name="architecture" />}
        className="v5-integration v5-architecture"
        titleId="platform-title"
        eyebrow={t("Architecture")}
        title={t("Integrate with existing systems")}
        lead={t("Agents work through the channels teams use and access authorized data. ERP, CRM, and other business systems remain the official records.")}
      >
        <HomeArchitecture />
      </HomeChapter>
      <HomeChapter
        id="control"
        artwork={<HomeArtwork name="control" />}
        className="v5-control v5-architecture"
        titleId="v5-control-title"
        eyebrow={t("Controls")}
        title={t("Your team decides what AI can do")}
        lead={t("When agents connect to systems, your team decides which data AI can read, what actions require approval, and how to review the log.")}
      >
        <ul className="v5-controls-list">
          <li>
            <EditorialIcon name="access" />
            <div>
              <h3>{t("Limit access")}</h3>
              <p>{t("Set permissions for each source and action. Start with read-only access where appropriate.")}</p>
            </div>
          </li>
          <li>
            <EditorialIcon name="approval" />
            <div>
              <h3>{t("Approve specific actions")}</h3>
              <p>{t("When approval is required, AI pauses so the person responsible can review the proposed change before deciding.")}</p>
            </div>
          </li>
          <li>
            <EditorialIcon name="activity" />
            <div>
              <h3>{t("Review the log")}</h3>
              <p>{t("Review the run, approval decision, and actions taken.")}</p>
            </div>
          </li>
        </ul>
        <figure className="v5-approval" aria-labelledby="v5-approval-title">
          <div className="v5-approval-copy">
            <p className="v5-approval-ref">PR-DEMO-1042</p>
            <h3 id="v5-approval-title">{t("Request to purchase 100 seals")}</h3>
            <p>{t("In this materials planning example, the agent proposes an update to the purchase quantity. The person responsible reviews the change before approving or declining it.")}</p>
          </div>
          <img
            className="v5-approval-illustration"
            src="/images/home/editorial/control-approval-cutout.webp"
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            alt={t("Illustrative interface showing the exact update to requisition PR-DEMO-1042 for 100 seals and the options to decline or approve.")}
          />
        </figure>
      </HomeChapter>
    </>
  );
}
