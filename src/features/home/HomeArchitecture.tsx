import { ArrowDown } from "lucide-react";
import { useCopy } from "@/i18n/useCopy";
import { EditorialIcon, type EditorialIconName } from "@/components/marketing/EditorialIcon";

type ArchitectureItem = {
  icon: EditorialIconName;
  title: string;
  description: string;
};

const workChannels: ArchitectureItem[] = [
  { icon: "chat", title: "Chat and applications", description: "Chat on the web or embed it in an application." },
  { icon: "email", title: "Email and API", description: "Connect according to the configuration." },
  { icon: "events", title: "Schedules and events", description: "Start tasks on a schedule or from a configured event." },
];

const platformCapabilities: ArchitectureItem[] = [
  { icon: "agents", title: "AI agents", description: "Reason and plan." },
  { icon: "workflows", title: "Workflows", description: "Run predefined steps." },
  { icon: "connectors", title: "Tools and connectors", description: "Use approved tools to read data and carry out permitted actions." },
];

const existingSystems: ArchitectureItem[] = [
  { icon: "applications", title: "Business applications", description: "ERP, CRM, and WMS via API." },
  { icon: "databases", title: "Databases", description: "Access within the authorized scope." },
  { icon: "repositories", title: "Files and knowledge repositories", description: "Approved documents and spreadsheets." },
];

function ArchitectureItems({ items }: { items: ArchitectureItem[] }) {
  const t = useCopy();

  return (
    <dl className="home-architecture-items">
      {items.map(({ icon, title, description }) => (
        <div key={title} className="home-architecture-item">
          <dt>
            <EditorialIcon name={icon} />
            {t(title)}
          </dt>
          <dd>{t(description)}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function HomeArchitecture() {
  const t = useCopy();

  return (
    <figure className="home-architecture" aria-label={t("Core Agentic integration architecture")}>
      <section className="home-architecture-node home-architecture-channels" aria-labelledby="v5-channels-title">
        <header className="home-architecture-heading">
          <EditorialIcon name="channels" />
          <h3 id="v5-channels-title">{t("Work channels")}</h3>
        </header>
        <ArchitectureItems items={workChannels} />
      </section>

      <div className="home-architecture-connection home-architecture-requests" aria-hidden="true" />

      <div className="home-architecture-center">
        <section className="home-architecture-node home-architecture-core" aria-labelledby="v5-core-title">
          <header className="home-architecture-heading">
            <EditorialIcon name="core" />
            <div>
              <h3 id="v5-core-title">Core Agentic</h3>
              <p>{t("A dedicated deployment environment for each customer.")}</p>
            </div>
          </header>
          <ArchitectureItems items={platformCapabilities} />
          <a className="home-architecture-policy" href="#control">
            <EditorialIcon name="policy" />
            <span>{t("Access · Approvals · Logs")}</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>
        <div className="home-architecture-model">
          <EditorialIcon name="models" />
          <div>
            <strong>{t("AI models")}</strong>
            <p>{t("Core Agentic uses models according to the deployment configuration.")}</p>
          </div>
        </div>
      </div>

      <div className="home-architecture-connection home-architecture-access" aria-hidden="true" />

      <section className="home-architecture-node home-architecture-records" aria-labelledby="v5-records-title">
        <header className="home-architecture-heading">
          <EditorialIcon name="systems" />
          <div>
            <h3 id="v5-records-title">{t("Existing systems")}</h3>
            <p>{t("Systems of record")}</p>
          </div>
        </header>
        <ArchitectureItems items={existingSystems} />
      </section>
    </figure>
  );
}
