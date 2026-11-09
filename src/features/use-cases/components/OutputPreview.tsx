import { Badge } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import { Database, FileSearch, Layers3 } from "lucide-react";

export function OutputPreview({
  title,
  rows,
  compact = false,
}: {
  title: string;
  rows: string[];
  compact?: boolean;
}) {
  const t = useCopy();
  const icons = [Layers3, Database, FileSearch];
  return (
    <div className={`output-preview ${compact ? "compact" : ""}`}>
      <div className="output-heading">
        <h3>{t(title)}</h3>
        <Badge>{t("Illustrative workflow")}</Badge>
      </div>
      {rows.map((row, i) => {
        const Icon = icons[i % 3];
        return (
          <div className="output-row" key={row}>
            <Icon aria-hidden="true" />
            <div>
              <strong>{t(row)}</strong>
              <div className="sample-lines" aria-hidden="true">
                <i />
                <i />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
