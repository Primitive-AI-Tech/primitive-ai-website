import { useCopy } from "@/i18n/useCopy";

const customers = [
  { name: "Ajinomoto", src: "/images/partners/Ajinomoto.png" },
  { name: "Nidec", src: "/images/partners/Nidec.png" },
  { name: "FPT Automotive", src: "/images/partners/FA.png" },
  { name: "VTI Solutions", src: "/images/partners/vti-solutions.png" },
  { name: "RAIS Tech", src: "/images/partners/RAIS.png" },
  { name: "NEU — National Economics University", src: "/images/partners/NEU.svg" },
];

const customersWithoutArtwork = ["Ymner", "TNE"];
const partners = ["Intel", "Microsoft", "Google", "Techvico"].map((name) => ({
  name,
  src: "/images/partners/" + name + ".png",
}));

function LogoCard({ name, src }: { name: string; src?: string }) {
  return (
    <li className={"relationship-card" + (src ? "" : " relationship-card-text")}>
      {src ? <img src={src} alt={name} loading="lazy" /> : <span>{name}</span>}
    </li>
  );
}

export default function CustomerExperience() {
  const t = useCopy();
  return (
    <section
      className="customer-experience light-section"
      id="customer-experience"
      aria-labelledby="customer-experience-title"
    >
      <div className="site-container">
        <div className="customer-experience-heading">
          <div>
            <p className="site-eyebrow">
              <span aria-hidden="true" /> {t("Customer experience")}
            </p>
            <h2 className="section-title" id="customer-experience-title">
              {t("Experience across real organizations.")}
            </h2>
          </div>
        </div>
        <div className="relationship-group">
          <h3>{t("Customers")}</h3>
          <ul className="relationship-grid" aria-label={t("Customers")}>
            {customers.map((customer) => (
              <LogoCard key={customer.name} {...customer} />
            ))}
            {customersWithoutArtwork.map((name) => (
              <LogoCard key={name} name={name} />
            ))}
          </ul>
        </div>
        <div className="relationship-group partner-group">
          <h3>{t("Partners")}</h3>
          <ul className="relationship-grid partner-grid" aria-label={t("Partners")}>
            {partners.map((partner) => (
              <LogoCard key={partner.name} {...partner} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
