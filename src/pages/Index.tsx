import { Link } from "react-router-dom";
import { Button, Eyebrow } from "@/components/marketing/primitives";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import StoryProgress, { ScrollCue } from "@/components/layout/StoryProgress";
import { HomeArtwork } from "@/features/home/HomeArtwork";
import { HomeIcon } from "@/features/home/HomeIcon";
import V5Opening from "@/features/home/V5Opening";
import V5Platform from "@/features/home/V5Platform";
import { V5Outcomes, V5Roles } from "@/features/home/V5Outcomes";
import { useCopy } from "@/i18n/useCopy";
import "@/styles/pages/home-v5.css";
import "@/styles/pages/home-editorial.css";

export default function Home() {
  const t = useCopy();
  return (
    <>
      <StoryProgress />
      <section className="home-hero" id="intro">
        <div className="site-container hero-grid relative-content">
          <div className="home-hero-copy">
            <Eyebrow>{t("Core Agentic by Primitive AI")}</Eyebrow>
            <h1
              className="home-headline"
              aria-label={t("Put AI to work across your organization.")}
            >
              {t("Put AI to")}{" "}
              <span className="home-headline-accent">{t("work")}</span>{" "}
              {t("across")} {t("your")}{" "}
              <span className="home-headline-accent">{t("organization.")}</span>
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
              {([
                { icon: "knowledge", label: "Approved knowledge" },
                { icon: "oversight", label: "Human oversight" },
                { icon: "execution", label: "Visible execution" },
              ] as const).map((item) => (
                <span key={item.label}>
                  <HomeIcon name={item.icon} />
                  <span>{t(item.label)}</span>
                </span>
              ))}
            </Link>
          </div>
          <div className="home-hero-visual">
            <HomeArtwork
              name="hero"
              alt={t(
                "Core Agentic checks a contract, order, and schedule with AI agents, workflows, and connectors. The illustration shows its access, approvals, and logs layer and confirms day-four delivery within the five-day allowance.",
              )}
            />
          </div>
        </div>
        <ScrollCue />
      </section>
      <V5Opening />
      <V5Roles />
      <V5Platform />
      <V5Outcomes />
      <InvitationCTA id="next-step" artwork={<HomeArtwork name="next" />} />
    </>
  );
}
