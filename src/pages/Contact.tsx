import { Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import { EditorialIcon } from "@/components/marketing/EditorialIcon";
import { EmphasizedCopy } from "@/components/marketing/EmphasizedCopy";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import { V5PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/marketing/primitives";
import { companyLocations, contactEmail } from "@/config/company";
import { ContactInquiryForm } from "@/features/contact/ContactInquiryForm";
import { useCopy } from "@/i18n/useCopy";

const nextSteps = [
  {
    icon: "chat",
    title: "Understand the work",
    description: "We’ll ask about the task, who handles it, and what slows it down.",
  },
  {
    icon: "options",
    title: "Explore the options",
    description: "We’ll look at your systems and what would make the work easier.",
  },
  {
    icon: "plan",
    title: "Agree on the next step",
    description: "We’ll discuss the scope and what it would take to get started.",
  },
] as const;

export default function Contact() {
  const t = useCopy();
  const { search } = useLocation();

  return (
    <>
      <V5PageHero
        id="contact-intro"
        className="v5-contact-hero"
        eyebrow={t("Contact")}
        title={<EmphasizedCopy message="contact.hero.headline" fallback="Tell us about <em>your next project.</em>" />}
        description={t("Share a workflow, a project idea, or a pricing question. We’ll help you choose a starting point.")}
        visual={
          <div className="contact-next-card">
            <h2>{t("What happens next")}</h2>
            <ol className="contact-next-steps" role="list">
              {nextSteps.map(({ icon, title, description }) => (
                <li key={title}>
                  <EditorialIcon name={icon} />
                  <div>
                    <h3>{t(title)}</h3>
                    <p>{t(description)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        }
      >
        <div className="button-row contact-hero-actions">
          <Button to={`${search}#inquiry`} arrow>{t("Start an inquiry")}</Button>
        </div>
      </V5PageHero>

      <section id="inquiry" className="v5-page-section contact-inquiry-section" aria-labelledby="inquiry-title">
        <div className="v5-page-wrap contact-inquiry-layout">
          <ContactInquiryForm key={search} search={search} />
          <aside className="contact-direct" aria-labelledby="contact-direct-title">
            <h3 id="contact-direct-title">{t("Reach our team")}</h3>
            <a className="contact-direct-email" href={`mailto:${contactEmail}`}>
              <Mail size={19} aria-hidden="true" />
              <span>{contactEmail}</span>
            </a>
            <div className="contact-locations">
              {companyLocations.map((location) => (
                <address key={location.label}>
                  <strong>{t(location.label)}</strong>
                  <a href={`tel:${location.phoneHref}`}>{location.phone}</a>
                  <span>{location.address}</span>
                </address>
              ))}
            </div>
            <a className="contact-company-link" href="https://www.linkedin.com/company/primitiveai" target="_blank" rel="noreferrer">
              {t("Primitive AI on LinkedIn")}
            </a>
          </aside>
        </div>
      </section>
      <InvitationCTA to={`${search}#inquiry`} />
    </>
  );
}
