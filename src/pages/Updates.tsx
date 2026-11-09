import { ArrowUpRight, Newspaper } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Eyebrow } from "@/components/marketing/primitives";
import { UpdatesStoryArt } from "@/components/marketing/StoryArtwork";
import { useCopy } from "@/i18n/useCopy";

const companyLinkedIn = "https://www.linkedin.com/company/primitiveai";

export default function Updates() {
  const t = useCopy();
  return (
    <>
      <PageHero
        eyebrow="From Primitive AI"
        title={<>{t("Updates and perspectives.")}</>}
        description="News and ideas about Primitive AI, Core Agentic and practical AI for organizations."
        className="updates-hero"
        visual={<UpdatesStoryArt />}
      />
      <section className="updates-index light-section">
        <div className="site-container">
          <Eyebrow>{t("Updates")}</Eyebrow>
          <div className="updates-empty-state surface-panel">
            <span className="updates-empty-icon"><Newspaper aria-hidden="true" /></span>
            <div>
              <p className="updates-overline">{t("The editorial archive is growing")}</p>
              <h2>{t("Follow Primitive AI for the latest.")}</h2>
              <p>{t("We will share company news, product developments and perspectives here as they are published.")}</p>
              <a className="text-link" href={companyLinkedIn} target="_blank" rel="noreferrer">
                {t("Visit Primitive AI on LinkedIn")}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
