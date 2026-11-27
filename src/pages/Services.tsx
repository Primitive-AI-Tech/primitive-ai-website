import { EmphasizedCopy } from "@/components/marketing/EmphasizedCopy";
import { ArrowDown } from "lucide-react";
import { EditorialIcon } from "@/components/marketing/EditorialIcon";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import { V5PageHero } from "@/components/marketing/PageHero";
import { Button, Eyebrow, TextLink } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

const projectContact = "/contact?intent=custom-development&interest=custom-ai-development";

const capabilities = [
  {
    icon: "chat",
    title: "AI Agent Development",
    description: "Design and build agents around defined tasks, approved information and the tools they are permitted to use.",
    outcome: "A scoped agent workflow with evaluation and review points.",
  },
  {
    icon: "workflows",
    title: "AI Workflow Automation",
    description: "Map repeatable work, clarify exceptions and develop automation that fits the process and its owners.",
    outcome: "A working workflow with agreed handoffs and exception handling.",
  },
  {
    icon: "embedded",
    title: "AI API Development",
    description: "Build application interfaces that make an AI capability available to approved products and systems.",
    outcome: "An API or integration with documented scope and access.",
  },
  {
    icon: "plan",
    title: "Model Training & Fine-Tuning",
    description: "Assess whether model adaptation is useful, then evaluate an approach against the task and available data.",
    outcome: "A task-specific evaluation and an adaptation plan where justified.",
  },
  {
    icon: "deliver",
    title: "AI Product Development",
    description: "Shape an AI-enabled application from an initial product question through design, engineering and handoff.",
    outcome: "A scoped product experience, implementation and operating handoff.",
  },
  {
    icon: "search",
    title: "Consulting & Strategy",
    description: "Understand the work, compare opportunities and set out a practical path for responsible delivery.",
    outcome: "A prioritized opportunity brief and a delivery roadmap.",
  },
] as const;

const process = [
  { title: "Discovery", description: "Understand the workflow, people, information, systems and constraints.", icon: "search" },
  { title: "Strategy", description: "Agree the problem, technical approach, scope and evaluation criteria.", icon: "plan" },
  { title: "Build", description: "Develop the selected capability in reviewable increments.", icon: "workflows" },
  { title: "Deploy", description: "Prepare the agreed release, documentation and operating handoff.", icon: "deliver" },
  { title: "Optimize", description: "Review real use and prioritize the next improvements together.", icon: "pilot-measure" },
] as const;

const briefTopics = [
  { icon: "workflows", title: "The work to improve" },
  { icon: "databases", title: "Existing data and systems" },
  { icon: "pilot-select", title: "The outcome you need" },
] as const;

export default function Services() {
  const t = useCopy();

  return (
    <>
      <V5PageHero
        id="service-intro"
        eyebrow={t("Custom AI Development")}
        title={<EmphasizedCopy message="services.hero.headline" fallback="Custom AI. <em>Built around your business.</em>" />}
        description={t("Primitive AI builds agents, tools and AI products with your team, shaped around your workflows and existing systems.")}
        className="services-hero"
        visual={
          <figure className="services-project-brief">
            <img src="/images/services/workshop.webp" width={1536} height={1024} decoding="async" fetchPriority="high" alt={t("Two colleagues review a diagram of their workflow.")} />
            <figcaption>
              <strong>{t("The first working session")}</strong>
              <ul className="services-brief-items" role="list">
                {briefTopics.map(({ icon, title }) => (
                  <li key={title}><EditorialIcon name={icon} /><span>{t(title)}</span></li>
                ))}
              </ul>
            </figcaption>
          </figure>
        }
      >
        <div className="button-row services-actions">
          <Button to="#next-step" arrow>{t("Discuss your project")}</Button>
          <Button to="#capabilities" secondary>
            {t("See our services")} <ArrowDown size={17} aria-hidden="true" />
          </Button>
        </div>
      </V5PageHero>

      <section id="service-paths" className="v5-page-section services-paths" aria-labelledby="service-paths-title">
        <div className="v5-page-wrap">
          <div className="v5-page-heading">
            <Eyebrow>{t("Choose a starting point")}</Eyebrow>
            <h2 id="service-paths-title">{t("Configure a platform or build a custom solution?")}</h2>
            <p>{t("Choose based on the workflow you want to improve and how closely it needs to integrate with existing systems.")}</p>
          </div>
          <div className="services-path-grid">
            <article className="services-path-card">
              <EditorialIcon name="customize" />
              <h3>{t("Configure Core Agentic")}</h3>
              <p>{t("Start from an organizational workflow and configure the platform's knowledge, agents, tools and review steps around it.")}</p>
              <TextLink to="/products#roles">{t("See how Core Agentic is configured")}</TextLink>
            </article>
            <article className="services-path-card services-path-featured">
              <EditorialIcon name="workflows" />
              <h3>{t("Develop custom AI")}</h3>
              <p>{t("Build a product, adapt a model or develop a deeper integration. Custom projects can run independently or use Core Agentic.")}</p>
              <TextLink to="#next-step">{t("Start a project conversation")}</TextLink>
            </article>
          </div>
        </div>
      </section>

      <section id="capabilities" className="v5-page-section services-capabilities" aria-labelledby="service-capabilities-title">
        <div className="v5-page-wrap">
          <div className="v5-page-heading">
            <Eyebrow>{t("What we can build")}</Eyebrow>
            <h2 id="service-capabilities-title">{t("From consulting through development and handoff")}</h2>
            <p>{t("Choose the services you need. We agree on specific deliverables for each project.")}</p>
          </div>
          <div className="services-capability-grid">
            {capabilities.map(({ icon, title, description, outcome }) => (
              <article className="services-capability-card" key={title}>
                <EditorialIcon name={icon} />
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
                <dl className="services-deliverable">
                  <dt>{t("Possible deliverable")}</dt>
                  <dd>{t(outcome)}</dd>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service-process" className="v5-page-section services-process" aria-labelledby="service-process-title">
        <div className="v5-page-wrap">
          <div className="v5-page-heading">
            <Eyebrow>{t("A practical engineering process")}</Eyebrow>
            <h2 id="service-process-title">{t("From defining the problem to putting the solution to work")}</h2>
            <p>{t("Your team helps define the outcome and reviews the solution at each stage.")}</p>
          </div>
          <ol className="services-process-list" role="list">
            {process.map(({ icon, title, description }) => (
              <li key={title}>
                <EditorialIcon name={icon} />
                <div><h3>{t(title)}</h3><p>{t(description)}</p></div>
              </li>
            ))}
          </ol>
          <p className="services-process-note">{t("Scope, evaluation, release and support are agreed to fit the project.")}</p>
        </div>
      </section>

      <InvitationCTA to={projectContact} />
    </>
  );
}
