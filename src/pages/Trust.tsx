import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  BookOpen,
  CircleCheck,
  Database,
  FileSearch,
  FileText,
  Info,
  Layers3,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import {
  Badge,
  Button,
  Eyebrow,
  GlowNode,
  IconTile,
  TextLink,
} from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { QuestionList } from "@/components/marketing/QuestionList";
import { useCopy } from "@/i18n/useCopy";

export default function Trust() {
  const t = useCopy();
  const [cancelled, setCancelled] = useState(false);
  const [authority, setAuthority] = useState(2);
  const stages = [
    {
      title: "Read and answer",
      icon: BookOpen,
      description:
        "Retrieve approved information and explain it. Your team validates usefulness and access boundaries.",
    },
    {
      title: "Prepare and recommend",
      icon: Layers3,
      description:
        "Analyze information and prepare a draft or proposed action. Your team reviews and decides.",
    },
    {
      title: "Execute with approval",
      icon: UsersRound,
      description:
        "Carry out the exact proposed action after the required human approval.",
    },
    {
      title: "Act within policy",
      icon: ShieldCheck,
      description:
        "Perform well-understood actions within predefined limits. People monitor exceptions and retain accountability.",
    },
  ];
  return (
    <>
      <section className="trust-hero dark-section">
        <FlowBackdrop />
        <div className="site-container relative-content trust-hero-grid">
          <div>
            <Eyebrow>{t("Trust & Control")}</Eyebrow>
            <h1>
              {t("Your organization")}
              <br />
              {t("defines the")}
              <br />
              <em>{t("boundaries.")}</em>
            </h1>
            <p className="hero-description">
              {t(
                "Set what agents may access, what they may do, and where people must decide.",
              )}
            </p>
            <div className="button-row">
              <Button arrow>{t("Talk to our team")}</Button>
              <Button to="/use-cases" secondary>
                {t("Explore use cases")}
              </Button>
            </div>
          </div>
          <div className="approval-preview">
            <div className="approval-preview-label">
              <span>{t("Concept preview · sample data")}</span>
              <Badge>{t("Illustrative workflow")}</Badge>
            </div>
            <h2>
              <FileText aria-hidden="true" />
              {t("Prepare a status update")}
            </h2>
            <GlowNode icon={Database}>
              <span>
                <small>{t("Allowed resource:")}</small>
                <strong>{t("Approved business records")}</strong>
              </span>
              <CircleCheck className="approval-check" aria-hidden="true" />
            </GlowNode>
            <GlowNode icon={ShieldCheck}>
              <span>
                <small>{t("Policy:")}</small>
                <strong>{t("Review required")}</strong>
              </span>
              <Info className="approval-info" aria-hidden="true" />
            </GlowNode>
            <div className="approval-actions">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    className="site-button"
                    type="button"
                    onClick={() => setCancelled(false)}
                  >
                    {t("Review action")}
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="example-dialog-overlay" />
                  <Dialog.Content className="example-dialog">
                    <Dialog.Close
                      className="dialog-close"
                      aria-label={t("Close example")}
                    >
                      <X aria-hidden="true" />
                    </Dialog.Close>
                    <Badge>{t("Concept preview · sample data")}</Badge>
                    <Dialog.Title>{t("Review an example action")}</Dialog.Title>
                    <Dialog.Description>
                      {t(
                        "This illustrates a review point. No business record is being changed.",
                      )}
                    </Dialog.Description>
                    <dl>
                      <div>
                        <dt>{t("Proposed change")}</dt>
                        <dd>{t("Update a record with new information")}</dd>
                      </div>
                      <div>
                        <dt>{t("Affected record")}</dt>
                        <dd>{t("Sample business record")}</dd>
                      </div>
                      <div>
                        <dt>{t("Decision")}</dt>
                        <dd>{t("Review required")}</dd>
                      </div>
                    </dl>
                    <Dialog.Close className="site-button">
                      {t("Close example")}
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
              <button
                className="site-button light-button"
                type="button"
                onClick={() => setCancelled(true)}
              >
                {t("Cancel")}
              </button>
            </div>
            {cancelled && (
              <p className="preview-status" role="status">
                {t("Example cancelled. No records were changed.")}
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="trust-principles light-section">
        <div className="site-container">
          <div className="trust-principle-list">
            {[
              {
                icon: Layers3,
                title: "Approved access",
                text: "Control which business data and systems agents can use, with access aligned to your policies.",
              },
              {
                icon: ShieldCheck,
                title: "Consequential actions",
                text: "Define which actions need human review before they can be completed, based on your operational and risk requirements.",
              },
              {
                icon: FileSearch,
                title: "Visible work",
                text: "See what agents are doing, what they used, and when people reviewed or approved the work.",
              },
            ].map((item) => (
              <article key={item.title}>
                <IconTile icon={item.icon} />
                <div>
                  <h2>{t(item.title)}</h2>
                  <p>{t(item.text)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sample-approval surface-panel">
            <div className="panel-heading">
              <h3>{t("Sample approval sheet · sample data")}</h3>
              <Badge>{t("Illustrative workflow")}</Badge>
            </div>
            <div className="approval-table-wrap">
              <table>
                <thead>
                  <tr>
                    {[
                      "Proposed change",
                      "Affected record",
                      "Requested by",
                      "Decision",
                    ].map((label) => (
                      <th key={label} scope="col">
                        {t(label)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("Update a record with new information")}</td>
                    <td>{t("Business record")}</td>
                    <td>{t("AI agent")}</td>
                    <td>
                      <Badge>{t("Review required")}</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="authority-section dark-section">
        <FlowBackdrop />
        <div className="site-container relative-content">
          <h2 className="section-title">
            {t("Human oversight at the right points.")}
          </h2>
          <div
            className="authority-stages"
            aria-label={t("Agent authority examples")}
          >
            {stages.map((stage, i) => (
              <button
                type="button"
                key={stage.title}
                aria-pressed={authority === i}
                onClick={() => setAuthority(i)}
                className={authority === i ? "selected" : ""}
              >
                <stage.icon aria-hidden="true" />
                {t(stage.title)}
              </button>
            ))}
          </div>
          <p className="authority-description" aria-live="polite">
            {t(stages[authority].description)}
          </p>
          <p className="authority-note">
            {t("Authority is configured and qualified for the use case.")}
          </p>
        </div>
      </section>
      <section className="trust-decisions light-section">
        <div className="site-container trust-decision-grid">
          <div>
            <h2 className="section-title">
              {t("Decisions we agree during solution design")}
            </h2>
            <p className="section-intro">
              {t(
                "Requirements and supported options are confirmed for the proposed deployment.",
              )}
            </p>
            <TextLink to="/contact?intent=trust">
              {t("Discuss your requirements")}
            </TextLink>
          </div>
          <QuestionList
            items={[
              {
                question: "Identity and permissions",
                answer:
                  "We agree who may use the platform, which resources each role may access, and what operations agents can perform for them.",
              },
              {
                question: "Data handling and retention",
                answer:
                  "Data sources, handling, retained files and execution history are agreed for the deployment and its connected systems.",
              },
              {
                question: "Model providers and hosting",
                answer:
                  "Model-provider use, hosting location and supported deployment options are confirmed during solution design.",
              },
              {
                question: "Operational ownership and incidents",
                answer:
                  "Named owners, support responsibilities, exception handling and incident procedures are agreed before operational rollout.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
