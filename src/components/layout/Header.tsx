import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Dialog from "@radix-ui/react-dialog";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import {
  Menu,
  X,
  Globe2,
  ChevronDown,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react";
import { navigation } from "@/app/routes";
import { useCopy } from "@/i18n/useCopy";
import { loadCopy } from "@/i18n/marketing";

const languages = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
];

export default function Navigation() {
  const t = useCopy();
  const { i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const current =
    languages.find(
      (l) => l.code === (i18n.resolvedLanguage || i18n.language).split("-")[0],
    ) || languages[0];
  const changeLanguage = (code: string) => {
    void loadCopy(code).then(() => i18n.changeLanguage(code));
  };
  return (
    <header className="site-header">
      <div className="nav-capsule">
        <Link
          className="site-brand"
          to="/"
          aria-label="Primitive AI — home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/prai-logo.png"
            alt="Primitive AI"
            width="1788"
            height="641"
          />
        </Link>
        <nav className="desktop-navigation" aria-label={t("Main navigation")}>
          {navigation.map((item) => {
            const productDetail =
              item.path === "/products" &&
              location.pathname.startsWith("/solutions/");
            return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive || productDetail ? "active" : ""
              }
            >
              {t(item.label)}
            </NavLink>
            );
          })}
        </nav>
        <div className="desktop-nav-actions">
          <Dropdown.Root modal={false}>
            <Dropdown.Trigger asChild>
              <button
                type="button"
                className="language-trigger"
                aria-label={`${current.code.toUpperCase()} ${t("Change language")}`}
              >
                <Globe2 size={19} aria-hidden="true" />
                <span>{current.code.toUpperCase()}</span>
                <ChevronDown size={13} aria-hidden="true" />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="language-menu"
                sideOffset={12}
                align="end"
              >
                {languages.map((language) => (
                  <Dropdown.Item
                    key={language.code}
                    className="language-item"
                    onSelect={() => changeLanguage(language.code)}
                  >
                    <span>{language.label}</span>
                    {current.code === language.code && (
                      <Check size={16} aria-hidden="true" />
                    )}
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
          <Link className="site-button nav-contact" to="/contact">
            {t("Talk to our team")}
          </Link>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="mobile-menu-trigger"
              aria-label={t("Open navigation")}
            >
              <Menu aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay" />
            <Dialog.Content className="mobile-menu">
              <Dialog.Title className="sr-only">
                {t("Main navigation")}
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                {t("Choose a page or language.")}
              </Dialog.Description>
              <div className="mobile-menu-top">
                <Link
                  to="/"
                  className="site-brand"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src="/prai-logo.png"
                    alt="Primitive AI"
                    width="1788"
                    height="641"
                  />
                </Link>
                <Dialog.Close
                  className="mobile-menu-close"
                  aria-label={t("Close navigation")}
                >
                  <X aria-hidden="true" />
                </Dialog.Close>
              </div>
              <div className="mobile-menu-scroll">
                <nav aria-label={t("Main navigation")}>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      {t(item.label)}
                      <ChevronRight aria-hidden="true" />
                    </NavLink>
                  ))}
                </nav>
                <div className="mobile-nav-section">
                  <span>{t("Language")}</span>
                  <button
                    className="mobile-language-trigger"
                    type="button"
                    aria-expanded={languagesOpen}
                    onClick={() => setLanguagesOpen((value) => !value)}
                  >
                    <Globe2 aria-hidden="true" />
                    {current.label}
                    <ChevronDown aria-hidden="true" />
                  </button>
                  {languagesOpen && (
                    <ul className="mobile-language-list">
                      {languages.map((language) => (
                        <li key={language.code}>
                          <button
                            type="button"
                            onClick={() => changeLanguage(language.code)}
                            aria-pressed={current.code === language.code}
                          >
                            {current.code === language.code && (
                              <Check aria-hidden="true" />
                            )}
                            {language.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="mobile-menu-bottom">
                <Link
                  to="/contact"
                  className="site-button"
                  onClick={() => setOpen(false)}
                >
                  {t("Talk to our team")}
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <div>
                  <Link to="/privacy" onClick={() => setOpen(false)}>
                    {t("Website Policy")}
                  </Link>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
