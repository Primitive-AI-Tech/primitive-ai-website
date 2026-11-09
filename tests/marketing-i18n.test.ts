import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("marketing resources share the existing language state and preserve sentence fallbacks", async () => {
  const cacheDir = await mkdtemp(join(tmpdir(), "prai-i18n-test-"));
  const server = await createServer({
    cacheDir,
    configFile: false,
    server: { middlewareMode: true, hmr: false, watch: null },
  });
  try {
    const { default: i18n } = await server.ssrLoadModule("/src/i18n/index.ts");
    const { loadCopy } = await server.ssrLoadModule("/src/i18n/marketing.ts");
    let additions = 0;
    i18n.store.on("added", (_language: string, namespace: string) => {
      if (namespace === "marketing") additions++;
    });
    for (const language of ["vi", "ja", "zh", "ko"]) {
      await loadCopy(language);
      await i18n.changeLanguage(language);
      assert.equal(i18n.language, language);
      assert.ok(i18n.hasResourceBundle(language, "common"));
      const dictionary = i18n.getResourceBundle(language, "marketing");
      assert.ok(Object.keys(dictionary).length > 100);
      const copy = i18n.getFixedT(language, "marketing");
      const key = "Connected intelligence.";
      assert.equal(
        copy(key, {
          keySeparator: false,
          nsSeparator: false,
          defaultValue: key,
        }),
        dictionary[key],
      );
      const missing = "An untranslated sentence: keep its punctuation.";
      assert.equal(
        copy(missing, {
          keySeparator: false,
          nsSeparator: false,
          defaultValue: missing,
        }),
        missing,
      );
      const before = additions;
      await loadCopy(language);
      assert.equal(
        additions,
        before,
        "already loaded dictionaries are not added a second time",
      );
    }
    assert.equal(
      additions,
      4,
      "resource additions notify React's shared store binding",
    );
    await loadCopy("en");
    await i18n.changeLanguage("en");
    assert.equal(
      i18n.getFixedT("en", "marketing")("Talk to our team", {
        defaultValue: "Talk to our team",
      }),
      "Talk to our team",
    );
  } finally {
    await server.close();
    await rm(cacheDir, { recursive: true, force: true });
  }
});
