import { BookOpen, FileStack, MessageSquareText, ScanSearch } from "lucide-react";
import { Button, Eyebrow } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

const examples = [
  {
    icon: MessageSquareText,
    category: "Customer service",
    title: "Answer customer questions.",
    description:
      "Draft answers from your product information. Pass difficult questions to your team.",
  },
  {
    icon: BookOpen,
    category: "For your staff",
    title: "Find company information.",
    description:
      "Find the right policy, document or project detail without asking around.",
  },
  {
    icon: ScanSearch,
    category: "Quality checks",
    title: "Check products for defects.",
    description: "Use cameras to flag possible defects for your staff to inspect.",
  },
  {
    icon: FileStack,
    category: "Document review",
    title: "Compare contracts.",
    description:
      "See what changed between versions and what needs a person’s review.",
  },
];

export function CustomAISection() {
  const t = useCopy();

  return (
    <section className="home-services custom-ai-section light-section" id="custom-ai">
      <div className="site-container">
        <Eyebrow>{t("Custom AI Development")}</Eyebrow>
        <div className="custom-ai-intro">
          <h2 className="section-title">{t("Custom AI, built around your work.")}</h2>
          <p>
            {t(
              "Tell us the task you want to make easier. We build a solution that fits how your team works.",
            )}
          </p>
        </div>

        <div className="custom-ai-cases">
          {examples.map(({ icon: Icon, category, title, description }) => (
            <article className="custom-ai-case" key={title}>
              <div className="custom-ai-case-art">
                <Icon aria-hidden="true" />
              </div>
              <div className="custom-ai-case-copy">
                <span>{t(category)}</span>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="custom-ai-footer">
          <p>{t("Examples of business problems we can help you solve.")}</p>
          <Button to="/services" arrow>
            {t("Explore custom AI services")}
          </Button>
        </div>
      </div>
    </section>
  );
}
