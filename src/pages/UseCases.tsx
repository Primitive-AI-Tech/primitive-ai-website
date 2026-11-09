import {
  ArrowRight,
  CircleCheck,
  Database,
  FileText,
  Layers3,
  MessageSquare,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useCopy } from "@/i18n/useCopy";
import {
  Badge,
  Button,
  Checklist,
  Eyebrow,
  GlowNode,
  IconTile,
  SourceTags,
} from "@/components/marketing/primitives";
import { OutputPreview } from "@/features/use-cases/components/OutputPreview";
import { PageHero } from "@/components/marketing/PageHero";
import { QuestionList } from "@/components/marketing/QuestionList";
import { ScenarioTabs } from "@/features/use-cases/components/ScenarioTabs";
import { questions } from "@/features/contact/content";
import { useScenario } from "@/features/use-cases/useScenario";

export default function UseCases() {
  const t = useCopy();
  const { selected, select } = useScenario();
  return (
    <>
      <PageHero
        eyebrow="Practical applications"
        title={
          <>
            {t("Put agents where")}
            <br />
            {t("the")} <em>{t("work happens.")}</em>
          </>
        }
        description="Practical workflows that connect AI agents to your knowledge, systems, and everyday operations."
        className="use-cases-hero"
      >
        <ScenarioTabs
          large
          selected={selected.id}
          onChange={select}
          id="applications"
        />
      </PageHero>
      <section className="case-detail-section light-section">
        <div className="site-container">
          <article
            role="tabpanel"
            id="applications-panel"
            aria-labelledby={"applications-tab-" + selected.id}
            tabIndex={0}
          >
            <Badge>{t("Illustrative workflow")}</Badge>
            <h2 className="section-title">{t(selected.title)}</h2>
            <p className="section-intro">{t(selected.description)}</p>
            <div className="scenario-workspace dark-section">
              <Eyebrow>{t("Scenario")}</Eyebrow>
              <GlowNode icon={MessageSquare} className="scenario-request">
                {t(selected.request)}
              </GlowNode>
              <ol className="scenario-flow">
                {[
                  { icon: Database, label: "Retrieve approved records" },
                  { icon: Layers3, label: "Analyze exceptions" },
                  { icon: FileText, label: "Prepare the report" },
                  { icon: UsersRound, label: "Human review" },
                ].map((step, i) => (
                  <li key={step.label}>
                    <GlowNode icon={step.icon}>
                      {t(
                        selected.id === "internal-operations"
                          ? step.label
                          : [
                              "Retrieve approved information",
                              "Analyze the findings",
                              "Prepare the output",
                              "Human review",
                            ][i],
                      )}
                    </GlowNode>
                    {i < 3 && <ArrowRight aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <div className="responsibility-grid">
                <div>
                  <h3>
                    <Layers3 aria-hidden="true" />
                    {t("Agent work")}
                  </h3>
                  <Checklist items={selected.agent} />
                </div>
                <div>
                  <h3>
                    <UsersRound aria-hidden="true" />
                    {t("Your team")}
                  </h3>
                  <Checklist items={selected.human} />
                </div>
              </div>
            </div>
            <div className="example-output surface-panel">
              <div className="example-output-heading">
                <h3>{t("Example output")}</h3>
                <Badge>{t("Concept preview · sample data")}</Badge>
              </div>
              <div className="example-output-body">
                <IconTile icon={FileText} />
                <OutputPreview
                  title={selected.output}
                  rows={selected.outputs}
                  compact
                />
              </div>
              <div className="example-output-sources">
                <strong>{t("Sources (sample data)")}</strong>
                <SourceTags sources={selected.sources} />
              </div>
            </div>
            <div className="case-requirements">
              {[
                {
                  icon: Database,
                  title: "Information needed",
                  values: selected.information,
                },
                {
                  icon: ShieldCheck,
                  title: "Controls to agree",
                  values: selected.controls,
                },
                {
                  icon: Layers3,
                  title: "Measures of success",
                  values: selected.measures,
                },
              ].map((item) => (
                <section className="surface-panel" key={item.title}>
                  <h3>
                    <IconTile icon={item.icon} />
                    {t(item.title)}
                  </h3>
                  <Checklist items={item.values} />
                </section>
              ))}
            </div>
            <div className="case-detail-cta">
              <Button to={"/contact?use-case=" + selected.id} arrow>
                {t("Explore this workflow with us")}
              </Button>
            </div>
          </article>
          <QuestionList items={questions} />
        </div>
      </section>
    </>
  );
}
