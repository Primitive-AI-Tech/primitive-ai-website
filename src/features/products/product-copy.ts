import { useTranslation } from "react-i18next";
import { useCopy } from "@/i18n/useCopy";

export type ProductText = readonly [english: string, vietnamese: string, message?: string];

export function useProductCopy() {
  const { i18n } = useTranslation();
  const t = useCopy();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  return ([english, vietnamese, message]: ProductText): string => {
    if (message) return t(message, language.startsWith("vi") ? vietnamese : english);
    return language.startsWith("vi") ? vietnamese : t(english);
  };
}
