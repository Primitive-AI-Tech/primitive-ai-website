import { useCopy } from "@/i18n/useCopy";
import {
  ArrowRight,
  CircleCheck,
  Database,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";

export function Button({
  to = "/contact",
  children,
  secondary = false,
  arrow = false,
  className = "",
}: {
  to?: string;
  children: ReactNode;
  secondary?: boolean;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`site-button ${secondary ? "secondary" : ""} ${className}`}
      to={to}
    >
      {children}
      {arrow && <ArrowRight size={20} aria-hidden="true" />}
    </Link>
  );
}

export function TextLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`text-link ${className}`} to={to}>
      {children}
      <ArrowRight size={21} aria-hidden="true" />
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="site-eyebrow">
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`site-badge ${className}`}>{children}</span>;
}

export function IconTile({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span className={`icon-tile ${className}`}>
      <Icon aria-hidden="true" strokeWidth={1.55} />
    </span>
  );
}

export function GlowNode({
  icon: Icon,
  children,
  className = "",
}: {
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glow-node ${className}`}>
      {Icon && <Icon strokeWidth={1.5} aria-hidden="true" />}
      {children}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  const t = useCopy();
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <CircleCheck aria-hidden="true" />
          <span>{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export function SourceTags({ sources }: { sources: string[] }) {
  const t = useCopy();
  return (
    <div className="source-tags">
      {sources.map((s, i) => (
        <span key={s}>
          {i === 2 ? (
            <FileText aria-hidden="true" />
          ) : (
            <Database aria-hidden="true" />
          )}
          {t(s)}
        </span>
      ))}
    </div>
  );
}
