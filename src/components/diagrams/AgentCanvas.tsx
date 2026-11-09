import { CanvasConnections } from "@/components/diagrams/CanvasConnections";
import { Badge, GlowNode } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";
import {
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  Database,
  FileSearch,
  FileText,
  MessageSquare,
  Network,
  Settings2,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

export function AgentCanvas({ platform = false }: { platform?: boolean }) {
  const t = useCopy();
  const body = useRef<HTMLDivElement>(null);
  const nodes = platform
    ? [
        { icon: Database, label: "Organizational knowledge" },
        { icon: Network, label: "Published workflows" },
        { icon: Wrench, label: "Governed integration tools" },
        { icon: Settings2, label: "Configured agents" },
      ]
    : [
        { icon: FileSearch, label: "Research agent" },
        { icon: Settings2, label: "Operations agent" },
        { icon: ChartNoAxesColumnIncreasing, label: "Sales agent" },
      ];
  return (
    <figure
      className={`agent-canvas ${platform ? "platform-canvas" : ""}`}
      aria-label={t(
        "A request connects through Core Agentic to approved knowledge, tools and business systems.",
      )}
    >
      <div className="canvas-heading">
        <h2>{t("Your organization, connected")}</h2>
        <Badge>
          {t(platform ? "Illustrative architecture" : "Illustrative workflow")}
        </Badge>
      </div>
      <div className="canvas-body" ref={body}>
        <CanvasConnections container={body} platform={platform} />
        <GlowNode icon={MessageSquare} className="request-node">
          {platform ? (
            <>
              <small>{t("Employee request")}</small>
              <strong>{t("Review overdue orders")}</strong>
            </>
          ) : (
            t("Prepare our weekly operations review")
          )}
        </GlowNode>
        {platform && (
          <div className="core-node">{t("Core Agentic orchestrator")}</div>
        )}
        {platform && (
          <div className="feedback-label">
            {t("Results & clarification")} ↕
          </div>
        )}
        <div
          className="role-nodes"
          style={{
            gridTemplateColumns: `repeat(${nodes.length}, minmax(0,1fr))`,
          }}
        >
          {nodes.map((n) => (
            <GlowNode icon={n.icon} key={n.label}>
              {t(n.label)}
            </GlowNode>
          ))}
        </div>
        {!platform && <div className="core-node">{t("Core Agentic")}</div>}
        <div className="system-nodes">
          {[
            { icon: Database, label: "ERP" },
            { icon: UsersRound, label: "CRM" },
            {
              icon: platform ? Database : FileText,
              label: platform ? "Finance" : "Documents",
            },
            {
              icon: platform ? FileText : Database,
              label: platform ? "Documents" : "Finance",
            },
          ].map((n) => (
            <GlowNode icon={n.icon} key={n.label}>
              {t(n.label)}
            </GlowNode>
          ))}
        </div>
        {platform ? (
          <div className="control-foundation">
            {t("Permissions")} · {t("Approvals")} · {t("Operating limits")} ·{" "}
            {t("Execution history")}
          </div>
        ) : (
          <div className="weekly-output">
            <FileText aria-hidden="true" />
            <strong>{t("Weekly review")}</strong>
            <ul>
              {[
                "Sources gathered",
                "Exceptions identified",
                "Ready for review",
              ].map((s) => (
                <li key={s}>
                  <CircleCheck aria-hidden="true" />
                  {t(s)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </figure>
  );
}

export function MobileAgentCanvas() {
  const t = useCopy();
  return (
    <figure
      className="mobile-agent-canvas"
      aria-label={t(
        "A request connects through Core Agentic to approved knowledge, tools and business systems.",
      )}
    >
      <Badge>{t("Illustrative workflow")}</Badge>
      {[
        { label: "Request", icon: MessageSquare },
        { label: "Core Agentic", icon: Sparkles },
        { label: "Approved systems", icon: Database },
        { label: "Reviewable result", icon: FileText },
      ].map((n, i) => (
        <div key={n.label} className="mobile-flow-node">
          <GlowNode icon={n.icon} className={i === 1 ? "core-mobile" : ""}>
            {t(n.label)}
          </GlowNode>
          {i < 3 && <span className="vertical-connector" aria-hidden="true" />}
        </div>
      ))}
    </figure>
  );
}
