import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loadCopy } from "./marketing";

/** Preserve the approved sentence copy while sharing the application's locale state. */
export function useCopy() {
  const { t, i18n } = useTranslation("marketing", { useSuspense: false });
  const language = i18n.resolvedLanguage || i18n.language || "en";
  useEffect(() => {
    void loadCopy(language).catch(() => {
      /* Sentence defaults remain readable if a locale asset fails. */
    });
  }, [language]);
  return useCallback(
    (text: string): string =>
      t(text, {
        defaultValue: text,
        keySeparator: false,
        nsSeparator: false,
        returnObjects: false,
      }),
    [t],
  );
}
