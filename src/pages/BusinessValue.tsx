import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Clock3,
  Cpu,
  FileText,
  Headphones,
  Layers3,
  RotateCcw,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import {
  Badge,
  Button,
  Eyebrow,
  IconTile,
} from "@/components/marketing/primitives";
import { EffortTable } from "@/features/business-value/components/Economics";
import { PageHero } from "@/components/marketing/PageHero";
import {
  calculateWorkflow,
  defaultAssumptions,
  type WorkflowAssumptions,
} from "@/features/business-value/model";
import { useCopy } from "@/i18n/useCopy";

const inputDefinitions = [
  {
    key: "baseline",
    label: "Current human time per task",
    unit: "min",
    min: 1,
    max: 240,
    icon: Clock3,
  },
  {
    key: "eligible",
    label: "Share eligible for automation",
    unit: "%",
    min: 0,
    max: 100,
    icon: Layers3,
  },
  {
    key: "automated",
    label: "Eligible work handled by AI",
    unit: "%",
    min: 0,
    max: 100,
    icon: Cpu,
  },
  {
    key: "review",
    label: "Added review time",
    unit: "min",
    min: 0,
    max: 60,
    icon: UserRound,
  },
] as const;
const fmt = (value: number) =>
  new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(value);
export default function BusinessValue() {
  const t = useCopy();
  const [raw, setRaw] = useState<Record<keyof WorkflowAssumptions, string>>({
    baseline: "100",
    eligible: "60",
    automated: "80",
    review: "8",
  });
  const [cost, setCost] = useState({
    hourly: "",
    tasks: "",
    solution: "",
    currency: "USD",
  });
  const assumptions = Object.fromEntries(
    Object.entries(raw).map(([k, v]) => [k, Number(v)]),
  ) as unknown as WorkflowAssumptions;
  let result: ReturnType<typeof calculateWorkflow> | null = null;
  try {
    if (Object.values(raw).every((v) => v.trim() !== ""))
      result = calculateWorkflow(assumptions);
  } catch {
    /* Invalid input is explained beside the model. */
  }
  const reset = () =>
    setRaw(
      Object.fromEntries(
        Object.entries(defaultAssumptions).map(([k, v]) => [k, String(v)]),
      ) as Record<keyof WorkflowAssumptions, string>,
    );
  const costReady =
    result &&
    cost.hourly.trim() &&
    cost.tasks.trim() &&
    cost.solution.trim() &&
    Number(cost.hourly) > 0 &&
    Number(cost.tasks) > 0 &&
    Number(cost.solution) >= 0;
  const beforeCost = (assumptions.baseline / 60) * Number(cost.hourly);
  const afterCost = result
    ? (result.assisted / 60) * Number(cost.hourly) +
      Number(cost.solution) / Number(cost.tasks)
    : 0;
  const money = (n: number) =>
    new Intl.NumberFormat("en", {
      style: "currency",
      currency: cost.currency,
      maximumFractionDigits: cost.currency === "VND" ? 0 : 2,
    }).format(n);
  return (
    <>
      <PageHero
        eyebrow="Business Value by Primitive AI"
        title={
          <>
            {t("Make the economics of")}
            <br />
            <em>{t("AI visible.")}</em>
          </>
        }
        description="Assess accepted output, human effort, quality and total operating cost."
        className="value-page-hero"
      />
      <section className="calculator-section light-section">
        <div className="site-container">
          <div className="workflow-calculator surface-panel">
            <div className="panel-heading">
              <h2>{t("Explore a workflow")}</h2>
              <Badge>{t("Illustrative model")}</Badge>
            </div>
            <div className="calculator-grid">
              <div className="calculator-controls">
                {inputDefinitions.map((field) => {
                  const invalid =
                    raw[field.key].trim() === "" ||
                    !Number.isFinite(Number(raw[field.key])) ||
                    Number(raw[field.key]) < field.min ||
                    (field.unit === "%" && Number(raw[field.key]) > 100);
                  return (
                    <div className="model-input-row" key={field.key}>
                      <IconTile icon={field.icon} />
                      <label htmlFor={"model-" + field.key}>
                        {t(field.label)}
                      </label>
                      <input
                        type="range"
                        aria-label={t(field.label) + " — " + t("slider")}
                        min={field.min}
                        max={
                          field.unit === "%"
                            ? 100
                            : Math.max(
                                field.max,
                                Number(raw[field.key]) || field.max,
                              )
                        }
                        step="1"
                        value={Math.max(
                          field.min,
                          Math.min(
                            Number(raw[field.key]) || field.min,
                            field.unit === "%"
                              ? 100
                              : Math.max(
                                  field.max,
                                  Number(raw[field.key]) || field.max,
                                ),
                          ),
                        )}
                        onChange={(event) =>
                          setRaw((value) => ({
                            ...value,
                            [field.key]: event.target.value,
                          }))
                        }
                      />
                      <div className="number-unit">
                        <input
                          id={"model-" + field.key}
                          type="number"
                          inputMode="decimal"
                          min={field.min}
                          max={field.unit === "%" ? 100 : undefined}
                          step="1"
                          value={raw[field.key]}
                          aria-invalid={invalid}
                          aria-describedby={invalid ? "model-error" : undefined}
                          onChange={(event) =>
                            setRaw((value) => ({
                              ...value,
                              [field.key]: event.target.value,
                            }))
                          }
                        />
                        <span>{t(field.unit)}</span>
                      </div>
                    </div>
                  );
                })}
                {!result && (
                  <p className="field-error" id="model-error" role="status">
                    {t(
                      "Enter a positive baseline, percentages from 0 to 100, and nonnegative review time.",
                    )}
                  </p>
                )}
              </div>
              <div
                className="calculator-result"
                aria-live="polite"
                aria-atomic="true"
              >
                <h3>{t("Human effort after assistance")}</h3>
                <strong className="result-minutes">
                  {result ? fmt(result.assisted) : "—"} <span>{t("min")}</span>
                </strong>
                <div className="result-divider" />
                <h3>
                  {t(
                    result && result.reduction < 0
                      ? "More human effort, including review"
                      : "Less human effort, including review",
                  )}
                </h3>
                <strong className="result-percentage">
                  {result ? fmt(Math.abs(result.reduction)) : "—"}%
                </strong>
                <p>
                  {t("Based on the assumptions shown.")}
                  <br />
                  {t("Not a measured customer result.")}
                </p>
                <div className="result-actions">
                  <button type="button" onClick={reset}>
                    <RotateCcw size={18} aria-hidden="true" />
                    {t("Reset example")}
                  </button>
                  <a className="site-button" href="#effort-comparison">
                    {t("Explore the result")}
                  </a>
                </div>
              </div>
            </div>
            <div className="calculator-comparison" id="effort-comparison">
              <h3>{t("Same baseline comparison")}</h3>
              {result ? (
                <EffortTable assumptions={assumptions} />
              ) : (
                <p>{t("Complete the inputs to compare human effort.")}</p>
              )}
            </div>
          </div>
          <div className="cost-section">
            <Eyebrow>{t("Cost perspective")}</Eyebrow>
            <h2 className="section-title">
              {t("Count the full cost of the result.")}
            </h2>
            <p className="section-intro">
              {t(
                "Released capacity creates value when it can be used productively.",
              )}
            </p>
            <div className="cost-panel surface-panel">
              <dl>
                {[
                  {
                    icon: SlidersHorizontal,
                    title: "Implementation",
                    text: "Set up the workflow, integrate with your systems, and prepare your data.",
                  },
                  {
                    icon: Layers3,
                    title: "Platform access",
                    text: "Access to Core Agentic and the agreed platform capabilities.",
                  },
                  {
                    icon: Cpu,
                    title: "AI & third-party usage",
                    text: "Usage of AI models and required third-party services for the workflow.",
                  },
                  {
                    icon: Headphones,
                    title: "Operations & support",
                    text: "Keep the workflow running, monitor quality, and improve it over time.",
                  },
                ].map((row) => (
                  <div key={row.title}>
                    <IconTile icon={row.icon} />
                    <dt>{t(row.title)}</dt>
                    <dd>{t(row.text)}</dd>
                  </div>
                ))}
              </dl>
              <details className="cost-assumptions">
                <summary>
                  <span>{t("Add your cost assumptions")}</span>
                  <ArrowRight aria-hidden="true" />
                </summary>
                <div className="cost-inputs">
                  {[
                    { key: "hourly", label: "Human labor cost per hour" },
                    { key: "tasks", label: "Monthly accepted tasks" },
                    { key: "solution", label: "Total monthly solution cost" },
                  ].map((field) => (
                    <label key={field.key}>
                      {t(field.label)}
                      <input
                        type="number"
                        min={field.key === "solution" ? 0 : 0.01}
                        inputMode="decimal"
                        value={cost[field.key as "hourly"]}
                        onChange={(event) =>
                          setCost((value) => ({
                            ...value,
                            [field.key]: event.target.value,
                          }))
                        }
                      />
                    </label>
                  ))}
                  <label>
                    {t("Currency")}
                    <select
                      value={cost.currency}
                      onChange={(event) =>
                        setCost((value) => ({
                          ...value,
                          currency: event.target.value,
                        }))
                      }
                    >
                      <option>USD</option>
                      <option>VND</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </label>
                </div>
                {costReady ? (
                  <div className="unit-cost-result" aria-live="polite">
                    <h4>{t("Modeled cost per accepted task")}</h4>
                    <p>
                      {t("Before")}: <strong>{money(beforeCost)}</strong>{" "}
                      <ArrowRight aria-hidden="true" /> {t("With AI")}:{" "}
                      <strong>{money(afterCost)}</strong>
                    </p>
                    <p>
                      {t(
                        "Assumes the same accepted-output quality and workload. This is an estimate, not a guarantee of cash savings.",
                      )}
                    </p>
                  </div>
                ) : (
                  <p className="cost-help">
                    {t(
                      "Add your own costs and task volume to explore the unit economics.",
                    )}
                  </p>
                )}
              </details>
            </div>
          </div>
          <div className="evidence-section">
            <Eyebrow>{t("The evidence framework")}</Eyebrow>
            <div className="evidence-grid">
              {[
                {
                  icon: FileText,
                  title: "Published research",
                  text: "Use established research to understand how AI can affect work, quality and operating cost in similar workflows.",
                },
                {
                  icon: ChartNoAxesColumnIncreasing,
                  title: "Illustrative models",
                  text: "Model the impact for your workflow using your own assumptions, such as time per task, automation share and review effort.",
                },
                {
                  icon: Layers3,
                  title: "Measured implementation results",
                  text: "After deployment, track actual accepted output, human effort and total operating cost in your environment.",
                },
              ].map((item) => (
                <article className="surface-panel" key={item.title}>
                  <IconTile icon={item.icon} />
                  <div>
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.text)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="inline-blue-cta">
            <h2>{t("Build a business case around your workflow.")}</h2>
            <Button to="/contact?intent=business-case">
              {t("Talk to our team")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
