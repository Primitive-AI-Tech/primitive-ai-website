import { ArrowUpRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, TextLink } from "@/components/marketing/primitives";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { useCopy } from "@/i18n/useCopy";

const companyLinkedIn = "https://www.linkedin.com/company/primitiveai";

export function HomeUpdatesSection() {
  const t = useCopy();

  return (
    <section className="home-updates dark-section" id="updates">
      <FlowBackdrop />
      <div className="site-container relative-content home-updates-inner">
        <div className="home-updates-heading">
          <Eyebrow>{t("Latest from Primitive AI")}</Eyebrow>
          <h2 className="section-title">{t("Ideas and updates from our work.")}</h2>
        </div>
        <TextLink to="/update">{t("View all updates")}</TextLink>

        <div className="home-updates-empty">
          <span className="home-updates-icon">
            <Newspaper aria-hidden="true" />
          </span>
          <div>
            <span className="home-updates-overline">
              {t("The editorial archive is growing")}
            </span>
            <h3>{t("Follow Primitive AI for the latest.")}</h3>
            <p>
              {t(
                "We will share company news, product developments and perspectives here as they are published.",
              )}
            </p>
            <a href={companyLinkedIn} target="_blank" rel="noreferrer">
              {t("Visit Primitive AI on LinkedIn")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
