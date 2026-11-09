import {
  Bot,
  Boxes,
  Braces,
  Compass,
  Cpu,
  Gauge,
  Rocket,
  Search,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { Button, Eyebrow, IconTile, TextLink } from "@/components/marketing/primitives";
import { PageHero } from "@/components/marketing/PageHero";
import { ServiceStoryArt } from "@/components/marketing/StoryArtwork";
import { useCopy } from "@/i18n/useCopy";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Design and build agents around defined tasks, approved information and the tools they are permitted to use.",
    outcome: "A scoped agent workflow with evaluation and review points.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Map repeatable work, clarify exceptions and develop automation that fits the process and its owners.",
    outcome: "A working workflow with agreed handoffs and exception handling.",
  },
  {
    icon: Braces,
    title: "AI API Development",
    description:
      "Build application interfaces that make an AI capability available to approved products and systems.",
    outcome: "An API or integration with documented scope and access.",
  },
  {
    icon: Cpu,
    title: "Model Training & Fine-Tuning",
    description:
      "Assess whether model adaptation is useful, then evaluate an approach against the task and available data.",
    outcome: "A task-specific evaluation and an adaptation plan where justified.",
  },
  {
    icon: Boxes,
    title: "AI Product Development",
    description:
      "Shape an AI-enabled application from an initial product question through design, engineering and handoff.",
    outcome: "A scoped product experience, implementation and operating handoff.",
  },
  {
    icon: Compass,
    title: "Consulting & Strategy",
    description:
      "Understand the work, compare opportunities and set out a practical path for responsible delivery.",
    outcome: "A prioritized opportunity brief and a delivery roadmap.",
  },
];

const process = [
  { number: "01", title: "Discovery", description: "Understand the workflow, people, information, systems and constraints.", icon: Search },
  { number: "02", title: "Strategy", description: "Agree the problem, technical approach, scope and evaluation criteria.", icon: Compass },
  { number: "03", title: "Build", description: "Develop the selected capability in reviewable increments.", icon: Braces },
  { number: "04", title: "Deploy", description: "Prepare the agreed release, documentation and operating handoff.", icon: Rocket },
  { number: "05", title: "Optimize", description: "Review real use and prioritize the next improvements together.", icon: Gauge },
];

export default function Services() {
  const t = useCopy();
  return (
    <>
      <PageHero
        eyebrow="Custom AI Development"
        title={
          <>
            {t("Custom AI.")} <em>{t("Built around your business.")}</em>
          </>
        }
        description="We work with your team to shape and build AI capabilities for requirements that call for tailored engineering."
        className="services-hero"
        visual={<ServiceStoryArt />}
      >
        <div className="button-row">
          <Button to="/contact?intent=custom-development&interest=custom-ai-development" arrow>
            {t("Discuss your project")}
          </Button>
          <Button to="/products" secondary>{t("Explore our products")}</Button>
        </div>
      </PageHero>

      <section className="service-paths light-section">
        <div className="site-container">
          <Eyebrow>{t("Choose a starting point")}</Eyebrow>
          <h2 className="section-title">{t("Configure a platform, or build a tailored capability.")}</h2>
          <div className="service-path-grid">
            <article className="surface-panel">
              <span className="service-path-number">01</span>
              <h3>{t("Configure Core Agentic")}</h3>
              <p>{t("Start from an organizational workflow and configure the platform's knowledge, agents, tools and review steps around it.")}</p>
              <TextLink to="/products">{t("Explore Core Agentic")}</TextLink>
            </article>
            <article className="surface-panel service-path-featured">
              <span className="service-path-number">02</span>
              <h3>{t("Develop custom AI")}</h3>
              <p>{t("For a product, model or integration that needs a tailored approach. A custom engagement does not have to use Core Agentic.")}</p>
              <Link className="text-link" to="/contact?intent=custom-development&interest=custom-ai-development">
                {t("Start a project conversation")}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="service-capabilities light-section" id="capabilities">
        <div className="site-container">
          <Eyebrow>{t("What we can build")}</Eyebrow>
          <h2 className="section-title">{t("AI services across the full development lifecycle.")}</h2>
          <div className="service-capability-grid">
            {capabilities.map((item, index) => (
              <article className="service-capability-card surface-panel" key={item.title}>
                <IconTile icon={item.icon} />
                <span className="service-capability-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(item.title)}</h3>
                <p>{t(item.description)}</p>
                <div>
                  <strong>{t("Possible deliverable")}</strong>
                  <span>{t(item.outcome)}</span>
                </div>
                <Link to={`/contact?intent=custom-development&interest=custom-ai-development&service=${encodeURIComponent(item.title)}`} className="text-link">
                  {t("Discuss this capability")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process dark-section" id="service-process">
        <FlowBackdrop />
        <div className="site-container relative-content">
          <Eyebrow>{t("A practical engineering process")}</Eyebrow>
          <h2 className="section-title">{t("From the first question to an operating solution.")}</h2>
          <ol className="service-process-list">
            {process.map((step) => (
              <li key={step.number}>
                <div className="service-process-topline">
                  <span>{step.number}</span>
                  <step.icon aria-hidden="true" />
                </div>
                <h3>{t(step.title)}</h3>
                <p>{t(step.description)}</p>
              </li>
            ))}
          </ol>
          <p className="service-process-note">
            {t("Scope, evaluation, release and support are agreed to fit the project.")}
          </p>
        </div>
      </section>

      <section className="service-contact-band light-section">
        <div className="site-container service-contact-content">
          <div>
            <Eyebrow>{t("Bring us the challenge")}</Eyebrow>
            <h2 className="section-title">{t("Start with the work you want to improve.")}</h2>
          </div>
          <Button to="/contact?intent=custom-development&interest=custom-ai-development" arrow>
            {t("Discuss your project")}
          </Button>
        </div>
      </section>
      <ClosingCTA company />
    </>
  );
}
