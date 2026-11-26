import {
  ArrowDownRight,
  BookOpen,
  Check,
  FileCheck2,
  FileText,
  Layers3,
  MessageSquareText,
  Network,
  Search,
  Sparkles,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";
import { useCopy } from "@/i18n/useCopy";

export function PlatformStoryArt() {
  const t = useCopy();
  return (
    <figure
      className="story-art story-art-platform"
      role="img"
      aria-label={t(
        "Illustration of approved knowledge, tools and people connecting through Core Agentic to reviewable work.",
      )}
    >
      <div className="art-grid" aria-hidden="true" />
      <div className="art-orbit art-orbit-one" aria-hidden="true" />
      <div className="art-orbit art-orbit-two" aria-hidden="true" />
      <svg className="art-connections" viewBox="0 0 620 450" aria-hidden="true">
        <path d="M132 218 C195 218 207 178 260 178" />
        <path d="M365 178 C424 178 436 124 490 124" />
        <path d="M365 218 C420 218 437 290 490 290" />
        <circle cx="194" cy="207" r="4" />
        <circle cx="428" cy="161" r="4" />
        <circle cx="425" cy="268" r="4" />
      </svg>
      <div className="art-panel art-organization" aria-hidden="true">
        <span className="art-kicker">{t("YOUR ORGANIZATION")}</span>
        <div className="art-list-row"><BookOpen /><span>{t("Approved knowledge")}</span><Check /></div>
        <div className="art-list-row"><Workflow /><span>{t("Existing workflows")}</span><Check /></div>
        <div className="art-list-row"><UsersRound /><span>{t("Your team")}</span><Check /></div>
      </div>
      <div className="art-core" aria-hidden="true">
        <span className="art-core-icon"><Network /></span>
        <strong>Core Agentic</strong>
        <span>{t("Configured for the work")}</span>
        <i className="art-core-pulse" />
      </div>
      <div className="art-panel art-tools" aria-hidden="true">
        <span className="art-kicker">{t("CONNECTED TOOLS")}</span>
        <div className="art-tool-icons"><span><FileText /></span><span><MessageSquareText /></span><span><Wrench /></span></div>
        <p>{t("Scoped access. Clear boundaries.")}</p>
      </div>
      <div className="art-panel art-output" aria-hidden="true">
        <span className="art-kicker">{t("REVIEWABLE OUTPUT")}</span>
        <div><FileCheck2 /><span>{t("Prepared for review")}</span><Check /></div>
        <div className="art-output-line"><i /><i /><i /></div>
      </div>
      <span className="art-spark art-spark-one" aria-hidden="true"><Sparkles /></span>
      <span className="art-spark art-spark-two" aria-hidden="true"><ArrowDownRight /></span>
      <figcaption className="sr-only">{t("Concept illustration. Actual workflows, data access and review steps are configured with each organization.")}</figcaption>
    </figure>
  );
}

export function ServiceStoryArt() {
  const t = useCopy();
  const steps = ["Discovery", "Strategy", "Build", "Deploy", "Optimize"];
  return (
    <figure
      className="story-art story-art-services"
      role="img"
      aria-label={t("Illustration of a custom AI project moving from discovery through deployment and optimization.")}
    >
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="blueprint-window" aria-hidden="true">
        <div className="blueprint-window-top">
          <span><i /><i /><i /></span>
          <strong>{t("PROJECT BLUEPRINT")}</strong>
          <small>{t("CUSTOM AI")}</small>
        </div>
        <div className="blueprint-scope">
          <div className="blueprint-scope-icon"><Search /></div>
          <div>
            <span>{t("Starting point")}</span>
            <strong>{t("A workflow worth improving")}</strong>
          </div>
          <ArrowDownRight aria-hidden="true" />
        </div>
        <div className="blueprint-path" aria-hidden="true">
          {steps.map((step, index) => (
            <div className="blueprint-path-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
              <small>{t(step)}</small>
            </div>
          ))}
        </div>
        <div className="blueprint-deliverable">
          <span className="blueprint-check"><Check /></span>
          <div><small>{t("BUILT WITH YOUR TEAM")}</small><strong>{t("A capability shaped around the work")}</strong></div>
          <Layers3 aria-hidden="true" />
        </div>
      </div>
      <div className="blueprint-orbit" aria-hidden="true"><span /><span /><span /></div>
      <figcaption className="sr-only">{t("Illustrative project map; scope and deliverables are agreed for each engagement.")}</figcaption>
    </figure>
  );
}

export function UpdatesStoryArt() {
  const t = useCopy();
  return (
    <figure
      className="story-art story-art-updates"
      role="img"
      aria-label={t("Illustration of a growing editorial collection for company news, product updates and practical AI perspectives.")}
    >
      <div className="updates-halo updates-halo-one" aria-hidden="true" />
      <div className="updates-halo updates-halo-two" aria-hidden="true" />
      <div className="updates-sheet updates-sheet-back" aria-hidden="true"><i /><i /><i /></div>
      <div className="updates-sheet updates-sheet-front" aria-hidden="true">
        <div className="updates-sheet-brand"><span>PrAI</span><span>{t("FIELD NOTES")}</span></div>
        <div className="updates-sheet-mark"><BookOpen /></div>
        <div className="updates-sheet-lines"><i /><i /><i /><i /></div>
        <div className="updates-sheet-footer"><span /><span /></div>
      </div>
      <div className="updates-topic updates-topic-company" aria-hidden="true"><UsersRound /><span>{t("Company")}</span></div>
      <div className="updates-topic updates-topic-product" aria-hidden="true"><Layers3 /><span>{t("Products")}</span></div>
      <div className="updates-topic updates-topic-practice" aria-hidden="true"><Sparkles /><span>{t("Practical AI")}</span></div>
      <figcaption className="sr-only">{t("Editorial illustration. No article or publication is represented here.")}</figcaption>
    </figure>
  );
}
