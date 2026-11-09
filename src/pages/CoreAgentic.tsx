import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  FileSearch,
  FileText,
  Layers3,
  Package,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { useCopy } from "@/i18n/useCopy";
import { ActivityPreview } from "@/components/diagrams/ActivityPreview";
import { AgentCanvas } from "@/components/diagrams/AgentCanvas";
import {
  Badge,
  Button,
  Eyebrow,
  IconTile,
  TextLink,
} from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";

export default function Platform() {
  const t = useCopy();
  return (
    <>
      <section className="platform-hero dark-section">
        <FlowBackdrop />
        <div className="site-container relative-content platform-hero-grid">
          <div>
            <Eyebrow>{t("The platform")}</Eyebrow>
            <h1>
              {t("Connected intelligence.")}
              <br />
              <em>{t("Governed execution.")}</em>
            </h1>
            <p className="hero-description">
              {t(
                "AI agents work with the knowledge, software and workflows your organization approves.",
              )}
            </p>
            <nav className="anchor-links" aria-label={t("On this page")}>
              <a href="#architecture">{t("Architecture")}</a>
              <a href="#orchestration">{t("Orchestration")}</a>
              <a href="#knowledge">{t("Knowledge")}</a>
              <a href="#control">{t("Control")}</a>
            </nav>
            <div className="button-row">
              <Button arrow>{t("Talk to our team")}</Button>
              <Button to="/use-cases" secondary>
                {t("Explore use cases")}
              </Button>
            </div>
          </div>
          <div id="architecture">
            <AgentCanvas platform />
          </div>
        </div>
      </section>
      <section
        className="orchestration-section light-section"
        id="orchestration"
      >
        <div className="site-container">
          <h2 className="section-title">{t("How the next step is chosen.")}</h2>
          <div className="orchestration-grid">
            <ol className="orchestration-steps">
              {[
                "Understand the goal",
                "Select approved capabilities",
                "Inspect the result",
                "Ask or continue",
              ].map((step, i) => (
                <li key={step}>
                  <span>{i + 1}</span>
                  <strong>{t(step)}</strong>
                </li>
              ))}
            </ol>
            <ActivityPreview full />
          </div>
        </div>
      </section>
      <section className="knowledge-section light-section" id="knowledge">
        <div className="site-container">
          <h2 className="section-title">
            {t("Knowledge with a path back to the source.")}
          </h2>
          <div className="knowledge-grid">
            <div className="knowledge-graph surface-panel">
              {[
                { icon: Building2, label: "Supplier" },
                { icon: FileText, label: "Agreement" },
                { icon: Package, label: "Delivery term" },
                { icon: FileSearch, label: "Source document" },
              ].map((node, i) => (
                <div className="knowledge-relationship" key={node.label}>
                  <div>
                    <IconTile icon={node.icon} />
                    <strong>{t(node.label)}</strong>
                  </div>
                  {i < 3 && <ArrowRight aria-hidden="true" />}
                </div>
              ))}
            </div>
            <ul className="source-evidence surface-panel">
              {[
                { icon: Check, label: "Approved source" },
                { icon: FileText, label: "Document revision" },
                { icon: TriangleAlert, label: "Review required" },
              ].map((row) => (
                <li key={row.label}>
                  <row.icon aria-hidden="true" />
                  {t(row.label)}
                </li>
              ))}
            </ul>
          </div>
          <p className="knowledge-note">
            {t(
              "Approved information and relevant relationships help agents interpret organizational context. Your team can inspect the supporting evidence and review important findings.",
            )}
          </p>
          <div className="trust-link-panel" id="control">
            <ShieldCheck aria-hidden="true" />
            <h3>{t("Your organization defines the boundaries.")}</h3>
            <Button to="/trust" arrow>
              {t("Explore trust & control")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
