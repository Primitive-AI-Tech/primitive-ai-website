import type { ReactNode } from "react";
import { useCopy } from "@/i18n/useCopy";
import { EditorialIcon, type EditorialIconName } from "@/components/marketing/EditorialIcon";

type ChapterProps = {
  id: string;
  className: string;
  titleId: string;
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  artwork?: ReactNode;
  children: ReactNode;
};

export function HomeChapter({
  id,
  className,
  titleId,
  eyebrow,
  title,
  lead,
  artwork,
  children,
}: ChapterProps) {
  return (
    <section className={`v5-section ${className}`} id={id} aria-labelledby={titleId}>
      <div className="v5-wrap">
        <div className={artwork ? "chapter-opening chapter-opening--illustrated" : "chapter-opening"}>
          <div className="section-head">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={titleId}>
              {title}
            </h2>
            <p className="lead">{lead}</p>
          </div>
          {artwork}
        </div>
        {children}
      </div>
    </section>
  );
}

type Step = { icon: EditorialIconName; title: string; description: string };

export function ExecutionSteps({ steps }: { steps: readonly Step[] }) {
  const t = useCopy();
  return (
    <ol className="execution-steps" role="list">
      {steps.map(({ icon, title, description }) => (
        <li key={icon}>
          <EditorialIcon name={icon} />
          <div>
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
