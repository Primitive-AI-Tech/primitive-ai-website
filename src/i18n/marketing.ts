import i18n from "./index";

type Dictionary = Record<string, string>;
const loaders: Record<string, () => Promise<{ default: Dictionary }>> = {
  vi: () => import("./locales/vi/marketing.json"),
  ja: () => import("./locales/ja/marketing.json"),
  zh: () => import("./locales/zh/marketing.json"),
  ko: () => import("./locales/ko/marketing.json"),
};
const pending: Record<string, Promise<void>> = {};

/** One language state and resource cache: the existing i18next instance. */
export function loadCopy(language: string): Promise<void> {
  const code = language.split("-")[0];
  if (!loaders[code] || i18n.hasResourceBundle(code, "marketing"))
    return Promise.resolve();
  return (pending[code] ??= loaders[code]()
    .then(({ default: copy }) => {
      i18n.addResourceBundle(code, "marketing", copy, true, true);
    })
    .catch((error) => {
      delete pending[code];
      throw error;
    }));
}
