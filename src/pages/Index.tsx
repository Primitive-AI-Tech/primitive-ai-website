import {
  ArrowRight,
  Database,
  Eye,
  Layers3,
  Laptop,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  AgentCanvas,
  MobileAgentCanvas,
} from "@/components/diagrams/AgentCanvas";
import {
  Button,
  Eyebrow,
  IconTile,
  TextLink,
} from "@/components/marketing/primitives";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { CompactArchitecture } from "@/components/diagrams/CompactArchitecture";
import {
  DeliveryGrid,
  WorkingBrief,
} from "@/features/delivery/components/DeliveryGrid";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { HeroParticleField } from "@/components/marketing/HeroParticleField";
import { MiniEconomics } from "@/features/business-value/components/Economics";
import { ProblemVisual } from "@/features/home/ProblemVisual";
import { ActivityPreview } from "@/components/diagrams/ActivityPreview";
import { useCopy } from "@/i18n/useCopy";
import ApplicationExplorer from "@/features/home/ApplicationExplorer";
import CustomerExperience from "@/features/home/CustomerExperience";
import StoryProgress, {
  ScrollCue,
} from "@/components/layout/StoryProgress";

export default function Home() {
  const t = useCopy();
  const problems = [
    {
      title: "Scattered information",
      description:
        "Key knowledge and updates live across different tools, teams, and formats.",
    },
    {
      title: "Repeated manual work",
      description:
        "People copy, clean, and move information between systems just to keep things running.",
    },
    {
      title: "Growth adds coordination",
      description:
        "As the business grows, more steps, hand-offs, and check-ins are needed to stay aligned.",
    },
  ];
  return (
    <>
      <StoryProgress />
      <section className="home-hero dark-section" id="intro">
        <FlowBackdrop />
        <HeroParticleField />
        <div className="site-container hero-grid relative-content">
          <div className="home-hero-copy">
            <Eyebrow>{t("Core Agentic by Primitive AI")}</Eyebrow>
            <h1
              className="home-headline"
              aria-label={t("Put AI to work across your organization.")}
            >
              <span className="hero-line">
                <span>{t("Put AI to")}</span>
              </span>
              <span className="hero-line">
                <span>
                  <em>{t("work")}</em> {t("across")}
                </span>
              </span>
              <span className="hero-line">
                <span>
                  {t("your")} <em>{t("organization.")}</em>
                </span>
              </span>
            </h1>
            <p className="hero-lead">
              {t(
                "A fleet of AI agents, connected to your knowledge, systems, and workflows.",
              )}
            </p>
            <p className="hero-support">
              {t(
                "Handle sales, research, and everyday operations with less manual effort.",
              )}
            </p>
            <div className="button-row">
              <Button arrow>{t("Talk to our team")}</Button>
              <Button to="/#applications" secondary>
                {t("Explore applications")}
              </Button>
            </div>
            <Link className="hero-control-cues" to="/#control">
              {[
                { icon: Layers3, label: "Approved knowledge" },
                { icon: UsersRound, label: "Human oversight" },
                { icon: Zap, label: "Visible execution" },
              ].map((item) => (
                <span key={item.label}>
                  <item.icon aria-hidden="true" />
                  <span>{t(item.label)}</span>
                </span>
              ))}
            </Link>
          </div>
          <div className="hero-desktop-visual">
            <AgentCanvas />
          </div>
          <MobileAgentCanvas />
        </div>
        <ScrollCue />
      </section>
      <section className="problem-section light-section" id="problem">
        <div className="site-container">
          <Eyebrow>{t("The work between your systems")}</Eyebrow>
          <h2 className="section-title">
            {t("Your people spend too much time holding the process together.")}
          </h2>
          <p className="section-intro">
            {t("Searching. Copying. Chasing. Checking. Again.")}
          </p>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <article key={problem.title} className="problem-card">
                <ProblemVisual type={index} />
                <h3>{t(problem.title)}</h3>
                <p>{t(problem.description)}</p>
              </article>
            ))}
          </div>
          <p className="problem-statement">
            {t("Let AI carry more of the repeatable work.")}
          </p>
        </div>
      </section>
      <section className="home-value light-section" id="business-value">
        <div className="site-container">
          <Eyebrow>{t("Business Value")}</Eyebrow>
          <h2 className="section-title">
            {t("More work completed. Better operating economics.")}
          </h2>
          <div className="primary-value-pair surface-panel">
            <div>
              <IconTile icon={Layers3} />
              <div>
                <h3>{t("Productivity")}</h3>
                <p>{t("Increase accepted output per team hour.")}</p>
              </div>
            </div>
            <div>
              <IconTile icon={Database} />
              <div>
                <h3>{t("Economics")}</h3>
                <p>{t("Understand the full cost per accepted result.")}</p>
              </div>
            </div>
          </div>
          <div className="supporting-values">
            {[
              {
                icon: Zap,
                title: "Agility",
                description: "Move from request to result faster.",
              },
              {
                icon: UsersRound,
                title: "Capacity to scale",
                description:
                  "Grow accepted work without adding people to every repeatable step.",
              },
              {
                icon: Target,
                title: "Accuracy & consistency",
                description:
                  "Apply agreed rules with consistent processing and review.",
              },
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "See the work, understand the outcome and stay in control.",
              },
            ].map((value) => (
              <div key={value.title}>
                <IconTile icon={value.icon} />
                <div>
                  <h3>{t(value.title)}</h3>
                  <p>{t(value.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home-economics light-section" id="economics">
        <div className="site-container">
          <Eyebrow>{t("Cost perspective")}</Eyebrow>
          <MiniEconomics standalone />
        </div>
      </section>
      <section className="home-use-cases dark-section" id="applications">
        <FlowBackdrop />
        <div className="site-container relative-content">
          <Eyebrow>{t("Practical applications")}</Eyebrow>
          <h2 className="section-title">
            {t("One platform. Configured for your work.")}
          </h2>
          <p className="section-intro">
            {t("Start with a real workflow. Configure the platform around the people, information and decisions it involves.")}
          </p>
          <ApplicationExplorer />
        </div>
      </section>
      <CustomerExperience />
      <section className="home-delivery light-section" id="how-we-work">
        <div className="site-container">
          <div className="home-delivery-grid">
            <div>
              <Eyebrow>{t("How We Work")}</Eyebrow>
              <h2 className="section-title">
                {t("Your problem. Your data.")}
                <br />
                <em>{t("A working proof.")}</em>
              </h2>
              <p className="delivery-intro">
                {t(
                  "Build alongside your team. Evaluate the result. Expand what proves useful.",
                )}
              </p>
              <DeliveryGrid />
            </div>
            <WorkingBrief compact />
          </div>
        </div>
      </section>
      <section className="home-platform dark-section" id="control">
        <FlowBackdrop />
        <div className="site-container relative-content home-platform-grid">
          <div id="platform">
            <h2 className="section-title">
              {t("Knowledge. Agents. Action.")}
              <br />
              <em>{t("Under your control.")}</em>
            </h2>
            <CompactArchitecture />
          </div>
          <ActivityPreview />
        </div>
      </section>
      <section className="home-company light-section" id="story">
        <div className="site-container">
          <h2>{t("Built around a bigger productivity question.")}</h2>
          <p>
            {t(
              "From industrial systems to practical AI, our work has focused on helping organizations use their people, knowledge and systems more effectively.",
            )}
          </p>
          <div className="story-progression">
            <span>
              <Laptop aria-hidden="true" />
              {t("Practical AI")}
            </span>
            <ArrowRight aria-hidden="true" />
            <span>
              <Layers3 aria-hidden="true" />
              {t("Knowledge")}
            </span>
            <ArrowRight aria-hidden="true" />
            <span className="story-core">
              <Sparkles aria-hidden="true" />
              {t("Core Agentic")}
            </span>
            <TextLink to="/about">{t("Our story")}</TextLink>
          </div>
        </div>
      </section>
      <section className="home-services light-section" id="custom-ai">
        <div className="site-container home-services-grid">
          <div>
            <Eyebrow>{t("Custom AI Development")}</Eyebrow>
            <h2 className="section-title">{t("Custom AI, built around your work.")}</h2>
            <p>{t("When a requirement needs tailored engineering, our team can help shape, build and deploy the right AI capability around your organization.")}</p>
          </div>
          <div className="home-service-capabilities surface-panel">
            {[
              "AI agents and workflow automation",
              "AI APIs and application development",
              "Model evaluation and adaptation",
              "AI consulting and delivery strategy",
            ].map((item) => <span key={item}>{t(item)}</span>)}
            <TextLink to="/services">{t("Explore custom AI services")}</TextLink>
          </div>
        </div>
      </section>
      <section className="home-updates dark-section" id="updates">
        <FlowBackdrop />
        <div className="site-container relative-content home-updates-inner">
          <div>
            <Eyebrow>{t("From Primitive AI")}</Eyebrow>
            <h2 className="section-title">{t("Ideas and updates from our work.")}</h2>
            <p>{t("Read the latest news and perspectives from Primitive AI.")}</p>
          </div>
          <TextLink to="/update">{t("See all updates")}</TextLink>
        </div>
      </section>
      <ClosingCTA id="next-step" />
    </>
  );
}
