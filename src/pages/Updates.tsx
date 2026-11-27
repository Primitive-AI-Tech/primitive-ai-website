import { EmphasizedCopy } from "@/components/marketing/EmphasizedCopy";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { EditorialIcon } from "@/components/marketing/EditorialIcon";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import { V5PageHero } from "@/components/marketing/PageHero";
import { Eyebrow } from "@/components/marketing/primitives";
import { useTranslation } from "react-i18next";
import { useCopy } from "@/i18n/useCopy";

const companyLinkedIn = "https://www.linkedin.com/company/primitiveai";
const eventUrl = "https://luma.com/l0ro71hq";
const eventDate = "2026-11-14";
// Responsive derivatives of the organizer's DSC04425.JPG in public/images/hackathon-112026.
const eventPhoto = "/images/updates/hackathon-hanoi-2026.webp";
const eventPhotoSmall = "/images/updates/hackathon-hanoi-2026-800.webp";

export default function Updates() {
  const t = useCopy();
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || "en";
  const date = new Date(eventDate);
  const shortDate = new Intl.DateTimeFormat(language, { dateStyle: "medium", timeZone: "UTC" }).format(date);
  const longDate = new Intl.DateTimeFormat(language, { dateStyle: "long", timeZone: "UTC" }).format(date);

  return (
    <>
      <V5PageHero
        id="update-intro"
        className="updates-hero"
        eyebrow={t("From Primitive AI")}
        title={<EmphasizedCopy message="updates.hero.headline" fallback="Updates and <em>perspectives.</em>" />}
        description={t("Product news, community events and how AI is applied to real work.")}
        visual={
          <a
            className="updates-feature"
            href="#latest-update"
          >
            <img
              src={eventPhoto}
              srcSet={`${eventPhotoSmall} 800w, ${eventPhoto} 1600w`}
              sizes="(max-width: 820px) 90vw, 44vw"
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              alt={t("Community members gather for a photo at the Codex Community Hackathon at Biblio Book Cafe in Hanoi.")}
            />
            <div className="updates-feature-caption">
              <div>
                <p>
                  {t("Community")} ·{" "}
                  <time dateTime={eventDate}>{shortDate}</time>
                </p>
                <strong>{t("Codex Community Hackathon in Hanoi")}</strong>
              </div>
              <span className="updates-feature-arrow" aria-hidden="true">
                <ArrowDownRight size={18} />
              </span>
            </div>
          </a>
        }
      >
        <a className="updates-action" href="#latest-update">
          {t("See the latest update")} <ArrowDown size={16} aria-hidden="true" />
        </a>
      </V5PageHero>

      <section className="v5-page-section updates-latest" id="latest-update" aria-labelledby="latest-update-title">
        <div className="v5-page-wrap">
          <header className="v5-page-heading">
            <Eyebrow>{t("Latest update")}</Eyebrow>
            <h2 id="latest-update-title">{t("A day of building AI apps in Hanoi.")}</h2>
          </header>
          <div className="updates-news-grid">
            <article className="updates-news-card" aria-labelledby="hackathon-title">
              <p className="updates-meta">
                <span>{t("Community")}</span>
                <time dateTime={eventDate}>
                  {longDate}
                </time>
              </p>
              <h3 id="hackathon-title">{t("Codex Community Hackathon · AI in Your Palm")}</h3>
              <p>{t("At Biblio Book Cafe, teams used Codex to prototype mobile apps with AI features. Each team started with a real user problem and demonstrated its app the same day.")}</p>
              <p>{t("Doan Nguyen organized the event as a Hanoi Codex Ambassador, with support from Apero.")}</p>
              <a className="text-link" href={eventUrl} target="_blank" rel="noreferrer">
                {t("See event details")} <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </article>
            <aside className="updates-channel" aria-labelledby="updates-channel-title">
              <EditorialIcon name="chat" />
              <h3 id="updates-channel-title">{t("Follow Primitive AI")}</h3>
              <p>{t("Get product news and team updates on LinkedIn.")}</p>
              <a className="text-link" href={companyLinkedIn} target="_blank" rel="noreferrer">
                {t("Visit Primitive AI on LinkedIn")} <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </section>
      <InvitationCTA />
    </>
  );
}
