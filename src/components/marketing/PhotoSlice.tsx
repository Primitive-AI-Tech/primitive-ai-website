import { useCopy } from "@/i18n/useCopy";

export function PhotoSlice({ type }: { type: "company" | "workshop" }) {
  const t = useCopy();
  return (
    <svg
      className={`context-photo ${type}`}
      viewBox={type === "company" ? "570 70 454 305" : "405 385 365 120"}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={t(
        type === "company"
          ? "Illustrative industrial workplace"
          : "Illustrative working-session table",
      )}
    >
      <image
        href={
          type === "company"
            ? "/images/design/company-context.png"
            : "/images/design/workshop-context.png"
        }
        width={type === "company" ? 1024 : 793}
        height={type === "company" ? 1536 : 1983}
      />
    </svg>
  );
}
