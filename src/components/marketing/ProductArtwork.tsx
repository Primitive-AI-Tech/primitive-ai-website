import {
  BookOpen,
  Camera,
  Check,
  FileText,
  MapPin,
  MessageSquareText,
  Mic,
  Quote,
  Sparkles,
} from "lucide-react";
import { useCopy } from "@/i18n/useCopy";

type ProductArtworkProps = { type: "vision" | "family" | "assessment" };

export function ProductArtwork({ type }: ProductArtworkProps) {
  const t = useCopy();
  const labels = {
    vision: t("Illustrative industrial computer vision scene."),
    family: t("Illustration of family memories organized as stories, places and notes."),
    assessment: t("Illustration of a language prompt, spoken response and structured feedback."),
  };

  if (type === "vision") {
    return (
      <figure className="product-art product-art-vision" role="img" aria-label={labels.vision}>
        <img src="/vision-hub.png" alt="" loading="lazy" />
        <span className="product-art-badge"><Camera aria-hidden="true" />{t("VISION IN OPERATIONS")}</span>
        <span className="vision-scan-line" aria-hidden="true" />
      </figure>
    );
  }

  if (type === "family") {
    return (
      <figure className="product-art product-art-family" role="img" aria-label={labels.family}>
        <div className="family-art-orbit family-art-orbit-one" aria-hidden="true" />
        <div className="family-art-orbit family-art-orbit-two" aria-hidden="true" />
        <div className="family-memory-card family-memory-card-main" aria-hidden="true">
          <span className="family-memory-icon"><BookOpen /></span>
          <div><small>{t("FAMILY MEMORY")}</small><strong>{t("Stories worth keeping")}</strong></div>
          <Quote />
        </div>
        <div className="family-memory-tile family-memory-tile-note" aria-hidden="true"><MessageSquareText /><span>{t("Notes")}</span></div>
        <div className="family-memory-tile family-memory-tile-place" aria-hidden="true"><MapPin /><span>{t("Places")}</span></div>
        <div className="family-memory-spark" aria-hidden="true"><Sparkles /></div>
      </figure>
    );
  }

  return (
    <figure className="product-art product-art-assessment" role="img" aria-label={labels.assessment}>
      <div className="assessment-card assessment-prompt" aria-hidden="true">
        <span className="assessment-card-icon"><FileText /></span>
        <small>{t("LANGUAGE PROMPT")}</small>
        <i /><i /><i />
        <span className="assessment-prompt-mark">?</span>
      </div>
      <div className="assessment-wave" aria-hidden="true"><Mic /><svg viewBox="0 0 260 64"><path d="M0 32h17l8-13 10 27 10-38 12 46 12-26 12 8 10-19 11 30 11-44 12 56 11-32 12 11 12-24 12 31 11-17 12 3 12-14 14 17h20" /></svg></div>
      <div className="assessment-feedback" aria-hidden="true">
        <span><Check /></span>
        <div><small>{t("FEEDBACK")}</small><strong>{t("Clear next steps")}</strong></div>
        <div className="assessment-feedback-bars"><i /><i /><i /></div>
      </div>
    </figure>
  );
}
