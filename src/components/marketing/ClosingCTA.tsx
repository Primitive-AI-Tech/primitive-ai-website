import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { Button } from "@/components/marketing/primitives";
import { useCopy } from "@/i18n/useCopy";

export function ClosingCTA({
  company = false,
  id,
}: {
  company?: boolean;
  id?: string;
}) {
  const t = useCopy();
  return (
    <section className="closing-cta dark-section" id={id}>
      <FlowBackdrop />
      <div className="site-container relative-content">
        <div>
          <h2>
            {t(
              company
                ? "Turn people, knowledge and systems into greater productive capacity."
                : "The next advantage is how your organization works.",
            )}
          </h2>
          {!company && (
            <p>{t("Where could your organization become more productive?")}</p>
          )}
        </div>
        <Button arrow>{t("Talk to our team")}</Button>
      </div>
    </section>
  );
}
