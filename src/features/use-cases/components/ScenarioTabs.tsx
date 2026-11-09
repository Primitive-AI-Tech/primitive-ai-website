import { scenarios } from "@/features/use-cases/content";
import { useCopy } from "@/i18n/useCopy";
import { ChevronDown, Layers3 } from "lucide-react";
import { type KeyboardEvent } from "react";

export function ScenarioTabs({
  selected,
  onChange,
  id = "use-cases",
  large = false,
}: {
  selected: string;
  onChange: (id: string) => void;
  id?: string;
  large?: boolean;
}) {
  const t = useCopy();
  const handleKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % scenarios.length;
    else if (event.key === "ArrowLeft")
      next = (index + scenarios.length - 1) % scenarios.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = scenarios.length - 1;
    else return;
    event.preventDefault();
    onChange(scenarios[next].id);
    document.getElementById(id + "-tab-" + scenarios[next].id)?.focus();
  };
  return (
    <>
      <div
        className={`scenario-tabs ${large ? "large" : ""}`}
        role="tablist"
        aria-label={t("Choose a use case")}
      >
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            id={id + "-tab-" + s.id}
            type="button"
            role="tab"
            aria-selected={selected === s.id}
            aria-controls={id + "-panel"}
            tabIndex={selected === s.id ? 0 : -1}
            className={selected === s.id ? "selected" : ""}
            onClick={() => onChange(s.id)}
            onKeyDown={(event) => handleKey(event, i)}
          >
            {large && <s.icon aria-hidden="true" />}
            {t(s.label)}
          </button>
        ))}
      </div>
      <label className="mobile-scenario-select">
        <span className="sr-only">{t("Choose a use case")}</span>
        <Layers3 aria-hidden="true" />
        <select
          value={selected}
          onChange={(event) => onChange(event.target.value)}
        >
          {scenarios.map((s) => (
            <option key={s.id} value={s.id}>
              {t(s.label)}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" />
      </label>
    </>
  );
}
