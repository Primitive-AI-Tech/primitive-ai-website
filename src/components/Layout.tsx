import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPageMetadata } from "@/app/routes";
import { useCopy } from "@/i18n/useCopy";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const page = getPageMetadata(location.pathname);
  const { i18n } = useTranslation();
  const t = useCopy();
  useEffect(() => {
    document.title = t(page.title) + " | Primitive AI";
    document.documentElement.lang = (
      i18n.resolvedLanguage ||
      i18n.language ||
      "en"
    ).split("-")[0];
  }, [page.title, i18n.language, i18n.resolvedLanguage, t]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t("Skip to content")}
      </a>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className={
          page.surface === "legacy" ? "legacy-content" : "experience-page"
        }
        data-page={page.path}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
