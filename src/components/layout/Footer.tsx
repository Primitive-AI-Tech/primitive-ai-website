import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation } from "@/app/routes";
import { useCopy } from "@/i18n/useCopy";
import { contactEmail } from "@/config/company";

export default function Footer() {
  const t = useCopy();
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-identity">
          <Link to="/" className="footer-brand" aria-label="Primitive AI — home">
            <img src="/prai-logo.png" alt="Primitive AI" width="1788" height="641" />
          </Link>
          <p>{t("A fleet of AI agents, connected to your knowledge, systems, and workflows.")}</p>
        </div>
        <nav className="footer-nav" aria-labelledby="footer-explore-title">
          <h2 id="footer-explore-title">{t("Explore Primitive AI")}</h2>
          <ul role="list">
            {navigation.map(({ path, label }) => (
              <li key={path}><Link to={path}>{t(label)}</Link></li>
            ))}
            <li><Link to="/contact">{t("Contact")}</Link></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <span className="footer-contact-icon" aria-hidden="true"><Mail /></span>
          <div>
            <Link className="footer-contact-link" to="/contact">
              {t("Talk to our team")}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a className="footer-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>
          © {new Date().getFullYear()} Primitive AI. {t("All rights reserved.")}
        </p>
        <ul className="footer-meta" role="list">
          <li><Link to="/privacy">{t("Website Policy")}</Link></li>
          <li>
            <a href="https://www.linkedin.com/company/primitiveai" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
