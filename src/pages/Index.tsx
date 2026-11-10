import {
  ArrowRight,
  Database,
  Eye,
  Layers3,
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
import { CompactArchitecture } from "@/components/diagrams/CompactArchitecture";
import {
  DeliveryGrid,
  WorkingBrief,
} from "@/features/delivery/components/DeliveryGrid";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { HeroParticleField } from "@/components/marketing/HeroParticleField";
import { ActivityPreview } from "@/components/diagrams/ActivityPreview";
import { useCopy } from "@/i18n/useCopy";
import ApplicationExplorer from "@/features/home/ApplicationExplorer";
import CustomerExperience from "@/features/home/CustomerExperience";
import StoryProgress, {
  ScrollCue,
} from "@/components/layout/StoryProgress";
import { FrictionSection } from "@/features/home/FrictionSection";
import { HomeEconomicsSection } from "@/features/home/HomeEconomicsSection";
import { CustomAISection } from "@/features/home/CustomAISection";
import { HomeUpdatesSection } from "@/features/home/HomeUpdatesSection";
import { HomeInvitation } from "@/features/home/HomeInvitation";

export default function Home() {
  const t = useCopy();
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
      <FrictionSection />
      <section className="home-value light-section" id="business-value">
        <div className="site-container">
          <Eyebrow>{t("We Offer")}</Eyebrow>
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
      <HomeEconomicsSection />
      <section className="home-use-cases light-section" id="applications">
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
        <div className="site-container home-story">
          <Eyebrow>{t("Our story")}</Eyebrow>
          <h2 className="section-title">
            {t("Built around a bigger productivity question.")}
          </h2>
          <p className="home-story-intro">
            {t(
              "From industrial systems to practical AI, our work has focused on helping organizations use their people, knowledge and systems more effectively.",
            )}
          </p>
          <div className="story-chapters">
            <article className="story-chapter">
              <span className="story-chapter-label">{t("Experience")}</span>
              <h3>{t("AI in real operating environments")}</h3>
              <p>{t("Computer vision and applied systems shaped an early focus on practical work.")}</p>
            </article>
            <ArrowRight aria-hidden="true" />
            <article className="story-chapter">
              <span className="story-chapter-label">{t("Learning")}</span>
              <h3>{t("Products, knowledge and custom AI")}</h3>
              <p>{t("Work across support, organizational knowledge and tailored applications.")}</p>
            </article>
            <ArrowRight aria-hidden="true" />
            <article className="story-chapter story-current">
              <span className="story-chapter-label">{t("Today")}</span>
              <h3>{t("Core Agentic")}</h3>
              <p>{t("A configurable platform to connect knowledge, agents, tools and review.")}</p>
            </article>
          </div>
          <div className="story-footer">
            <span className="story-founded">{t("Primitive AI founded in 2023")}</span>
            <p>{t("One question through every chapter: how can organizations do more with what they know?")}</p>
            <TextLink to="/about">{t("Our full journey")}</TextLink>
          </div>
        </div>
      </section>
      <CustomAISection />
      <HomeUpdatesSection />
      <HomeInvitation id="next-step" />
    </>
  );
}
