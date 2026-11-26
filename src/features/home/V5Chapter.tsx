import type { ReactNode } from "react";
import { useCopy } from "@/i18n/useCopy";
import { ChapterIcon } from "@/components/marketing/ChapterIcon";
export { ChapterIcon } from "@/components/marketing/ChapterIcon";

type ChapterProps = {
  id: string;
  className: string;
  titleId: string;
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  titleLang?: string;
  children: ReactNode;
};

export function HomeChapter({
  id,
  className,
  titleId,
  eyebrow,
  title,
  lead,
  titleLang,
  children,
}: ChapterProps) {
  return (
    <section className={`v5-section ${className}`} id={id} aria-labelledby={titleId}>
      <div className="v5-wrap">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={titleId} lang={titleLang}>
            {title}
          </h2>
          <p className="lead">{lead}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

type Step = { icon: string; title: string; description: string };

export function ExecutionSteps({ steps }: { steps: readonly Step[] }) {
  const t = useCopy();
  return (
    <ol className="execution-steps" role="list">
      {steps.map(({ icon, title, description }) => (
        <li key={icon}>
          <ChapterIcon name={icon} />
          <div>
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
