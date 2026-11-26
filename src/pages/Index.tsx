import { Layers3, UsersRound, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  AgentCanvas,
  MobileAgentCanvas,
} from "@/components/diagrams/AgentCanvas";
import { Button, Eyebrow } from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { HeroParticleField } from "@/components/marketing/HeroParticleField";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import StoryProgress, { ScrollCue } from "@/components/layout/StoryProgress";
import V5Opening from "@/features/home/V5Opening";
import V5Platform from "@/features/home/V5Platform";
import { V5Outcomes, V5Roles } from "@/features/home/V5Outcomes";
import { useCopy } from "@/i18n/useCopy";
import "@/styles/pages/home-v5.css";

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
              <Button to="/products#product-applications" secondary>
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
      <V5Opening />
      <V5Roles />
      <V5Platform />
      <V5Outcomes />
      <InvitationCTA id="next-step" />
    </>
  );
}
