import { GlowNode } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import { BookOpen, Database, FileText, Layers3, Wrench } from "lucide-react";

export function CompactArchitecture() {
  const t = useCopy();
  return (
    <figure
      className="compact-architecture"
      aria-label={t(
        "Knowledge, workflows and tools connect to existing systems under shared controls.",
      )}
    >
      <div className="core-node">{t("Core Agentic")}</div>
      <div className="branch-line" aria-hidden="true" />
      <div className="capability-nodes">
        {[
          { icon: BookOpen, label: "Approved knowledge" },
          { icon: Layers3, label: "Published workflows" },
          { icon: Wrench, label: "Governed tools" },
        ].map((n) => (
          <GlowNode key={n.label} icon={n.icon}>
            {t(n.label)}
          </GlowNode>
        ))}
      </div>
      <div className="branch-line lower" aria-hidden="true" />
      <div className="system-nodes">
        {["ERP", "CRM", "Finance", "Documents"].map((s, i) => (
          <GlowNode key={s} icon={i === 3 ? FileText : Database}>
            {t(s)}
          </GlowNode>
        ))}
      </div>
      <div className="control-foundation">
        {t("Permissions")} · {t("Approvals")} · {t("Execution history")}
      </div>
    </figure>
  );
}
