import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCopy } from "@/i18n/useCopy";

export function PolicyLayout({
  title,
  updated,
  introduction,
  contents,
  children,
}: {
  title: string;
  updated: string;
  introduction: string;
  contents: { id: string; title: string }[];
  children: ReactNode;
}) {
  const t = useCopy();
  return (
    <div className="policy-page">
      <section className="policy-title-panel" aria-labelledby="policy-title">
        <div className="policy-wrap">
          <Link to="/" className="policy-back">
            <ChevronLeft size={17} aria-hidden="true" />
            {t("policy.back", "Back to Home")}
          </Link>
          <h1 id="policy-title">{title}</h1>
          <p>{updated}</p>
          <p>{introduction}</p>
          <nav className="policy-contents" aria-label={t("policy.contents", "On this page")}>
            <ul role="list">
              {contents.map(({ id, title }) => <li key={id}><Link to={`#${id}`}>{title}</Link></li>)}
            </ul>
          </nav>
        </div>
      </section>
      <div className="policy-wrap policy-sections">{children}</div>
    </div>
  );
}
