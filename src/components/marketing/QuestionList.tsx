import { useCopy } from "@/i18n/useCopy";
import { ChevronDown } from "lucide-react";

export function QuestionList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const t = useCopy();
  return (
    <div className="question-list">
      {items.map((q) => (
        <details key={q.question}>
          <summary>
            {t(q.question)}
            <ChevronDown aria-hidden="true" />
          </summary>
          <p>{t(q.answer)}</p>
        </details>
      ))}
    </div>
  );
}
