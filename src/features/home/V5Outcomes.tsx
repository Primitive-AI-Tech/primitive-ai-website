import { Link } from "react-router-dom";
import { useCopy } from "@/i18n/useCopy";
import { ChapterIcon, ExecutionSteps, HomeChapter } from "./V5Chapter";

const roles = [
  {
    icon: "chat",
    title: "Knowledge chatbot",
    description: "Search approved documents, cross-check sources, and answer with citations.",
  },
  {
    icon: "internal",
    title: "Internal assistant",
    description: "Look up records, explain approved policies, and prepare onboarding checklists.",
  },
  {
    icon: "support",
    title: "Customer support",
    description: "Sort sales and support requests, draft replies, and route them to the right person.",
  },
  {
    icon: "schedule",
    title: "AI for internal operations",
    description: "Update request statuses and flag exceptions on a schedule or when an event occurs.",
  },
  {
    icon: "embedded",
    title: "Embedded assistant",
    description: "Look up data and prepare actions in the applications teams already use.",
  },
  {
    icon: "search",
    title: "Prospect research",
    description: "Summarize company profiles, cite sources, and suggest next steps for sales.",
  },
  {
    icon: "finance-overdue",
    title: "Financial reconciliation",
    description: "Compare documents and transactions, and flag discrepancies for accounting to review.",
  },
  {
    icon: "report",
    title: "Documents and legal",
    description: "Compare documents with approved templates and record differences for specialist review.",
  },
  {
    icon: "customize",
    title: "Configured for your organization",
    description: "Configure agents around each team's workflow.",
    className: "role-custom",
  },
];

const deliverySteps = [
  {
    icon: "pilot-select",
    title: "Choose the task",
    description: "Name the person responsible, record the current process, and agree on what a good result looks like.",
  },
  {
    icon: "pilot-test",
    title: "Test a real scenario",
    description: "Use sample inputs to check results and identify approval points.",
  },
  {
    icon: "pilot-measure",
    title: "Compare results",
    description: "Compare accepted results per team hour and the cost per result, including rework.",
  },
];

type Logo = { name: string; file: string; dark?: boolean };

const customerLogos: readonly Logo[] = [
  { name: "Ajinomoto", file: "Ajinomoto.png" },
  { name: "Nidec", file: "Nidec.png" },
  { name: "FPT Automotive", file: "FA.png" },
  { name: "VTI Solutions", file: "vti-solutions.png" },
  { name: "RAIS Tech", file: "RAIS.png", dark: true },
  { name: "National Economic University (NEU)", file: "NEU.svg" },
  { name: "Ymner", file: "Ymner.png" },
  { name: "Minh Việt Trans", file: "MinhVietTrans.png" },
];

const partnerLogos: readonly Logo[] = [
  { name: "Intel", file: "Intel.png" },
  { name: "Microsoft", file: "Microsoft.png" },
  { name: "Google", file: "Google.png" },
  { name: "Techvico", file: "Techvico.png" },
];

function LogoGroup({
  id,
  title,
  logos,
  className = "",
}: {
  id: string;
  title: string;
  logos: readonly Logo[];
  className?: string;
}) {
  return (
    <section className="customer-group" aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <ul className={`v5-logos ${className}`} aria-labelledby={id} role="list">
        {logos.map(({ name, file, dark }) => (
          <li className={dark ? "logo-on-dark" : undefined} key={file}>
            <img
              src={`/images/partners/${file}`}
              loading="lazy"
              decoding="async"
              alt={name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function V5Roles() {
  const t = useCopy();
  return (
    <HomeChapter
      id="roles"
      className="v5-roles"
      titleId="role-title"
      eyebrow={t("Agent roles")}
      title="One platform. Configured for your work."
      titleLang="en"
      lead={t("Core Agentic supports work from answering customers to reconciling records. Each role produces a defined result for the team to check or approve.")}
    >
      <ul className="role-grid" role="list">
        {roles.map(({ icon, title, description, className }) => (
          <li key={icon} className={className}>
            <ChapterIcon name={icon} />
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </li>
        ))}
      </ul>
      <div className="chapter-followup role-configuration">
        <p>{t("Set the channels, information sources, tools, and approval rules for each role.")}</p>
        <Link className="v5-text-link" to="/products#product-applications">
          {t("Explore application examples")}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </HomeChapter>
  );
}

export function V5Outcomes() {
  const t = useCopy();
  return (
    <>
      <HomeChapter
        id="how-we-work"
        className="v5-delivery"
        titleId="delivery-title"
        eyebrow={t("How we roll it out")}
        title={t("Test one workflow before expanding")}
        lead={t("We work with your team to choose a recurring task, agree on the expected result and which actions require approval, and compare with how you work today.")}
      >
        <div className="delivery-example">
          <ExecutionSteps steps={deliverySteps} />
          <img
            className="delivery-photo"
            src="/images/home/v5/deck-pilot.webp"
            width={1640}
            height={923}
            loading="lazy"
            decoding="async"
            alt={t("Two people discuss a workflow on a factory floor.")}
          />
        </div>
      </HomeChapter>
      <HomeChapter
        id="customer-experience"
        className="v5-customers ink"
        titleId="customer-title"
        eyebrow={t("Deployment experience")}
        title={t("Organizations that have worked with Primitive AI")}
        lead={t("Our experience spans manufacturing, logistics, technology, and education.")}
      >
        <div className="customer-groups">
          <LogoGroup id="customer-list-title" title={t("Customers")} logos={customerLogos} />
          <LogoGroup
            id="partner-list-title"
            title={t("Technology partners")}
            logos={partnerLogos}
            className="technology-partners"
          />
        </div>
      </HomeChapter>
      <HomeChapter
        id="pricing"
        className="v5-pricing"
        titleId="pricing-title"
        eyebrow={t("Costs")}
        title={t("How pricing is structured")}
        lead={t("Your quote depends on the workflow, systems to connect, deployment environment, number of accounts, and expected usage.")}
      >
        <ul className="pricing-grid">
          <li className="metric-card">
            <ChapterIcon name="pricing-setup" />
            <h3>{t("Setup fee")}</h3>
            <p>{t("Review the workflow, connect systems, configure and test the agreed processes.")}</p>
            <p className="pricing-cadence">{t("One time")}</p>
          </li>
          <li className="metric-card pricing-subscription">
            <ChapterIcon name="pricing-subscription" />
            <h3>{t("Subscription fee")}</h3>
            <p>{t("Includes access to Core Agentic and platform maintenance within the agreed scope.")}</p>
            <p className="pricing-cadence">{t("Recurring")}</p>
          </li>
          <li className="metric-card">
            <ChapterIcon name="pricing-usage" />
            <h3>{t("Usage fee")}</h3>
            <p>{t("Based on usage of AI models and agreed third-party services.")}</p>
            <p className="pricing-cadence">{t("Usage-based")}</p>
          </li>
        </ul>
        <div className="chapter-followup">
          <p className="pricing-note">{t("The quote details what the subscription includes, how usage is metered, any limits, and applicable overage charges. Custom development and advanced support are quoted separately when needed.")}</p>
        </div>
      </HomeChapter>
    </>
  );
}
