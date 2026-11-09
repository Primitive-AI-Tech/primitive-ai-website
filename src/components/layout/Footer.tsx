import { Link } from "react-router-dom";
import { useCopy } from "@/i18n/useCopy";
import { contactEmail } from "@/config/company";

export default function Footer() {
  const t = useCopy();
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <Link to="/" className="footer-brand" aria-label="Primitive AI — home">
          <img
            src="/prai-logo.png"
            alt="Primitive AI"
            width="1788"
            height="641"
          />
        </Link>
        <div>
          <h2>{t("Explore Primitive AI")}</h2>
          <Link to="/">{t("Home")}</Link>
          <Link to="/products">{t("Products")}</Link>
          <Link to="/services">{t("Services")}</Link>
          <Link to="/about">{t("About")}</Link>
          <Link to="/update">{t("Updates")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
          <a className="footer-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
        <div>
          <h2>{t("Legal")}</h2>
          <Link to="/privacy">{t("Privacy")}</Link>
          <Link to="/terms">{t("Terms")}</Link>
          <a href="https://www.linkedin.com/company/primitiveai" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>
          © {new Date().getFullYear()} Primitive AI. {t("All rights reserved.")}
        </span>
        <Link to="/contact">{t("Talk to our team")}</Link>
      </div>
    </footer>
  );
}
