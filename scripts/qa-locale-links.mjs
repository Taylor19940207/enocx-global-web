/**
 * Every in-site link on a locale's page must stay inside that locale's tree.
 *
 * The one exception is the language switcher, which exists to cross over and
 * is identified by its `hrefLang`. Written after three case links were built
 * from template literals and so kept their default-locale path: clicking a
 * case from /en/cases dropped the reader into Japanese.
 *
 * Run against the built export served on localhost:4321.
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const LOCALE_PREFIXES = { ja: "", en: "/en" };

const pages = execSync("find out -name index.html", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean).sort();

let failures = 0;

for (const file of pages) {
  const route = "/" + file.replace(/^out\//, "").replace(/\/?index\.html$/, "");
  const locale = route === "/en" || route.startsWith("/en/") ? "en" : "ja";
  const prefix = LOCALE_PREFIXES[locale];
  const html = readFileSync(file, "utf8");

  const bad = [];
  // <a href="/..."> that is not the switcher and not an asset.
  for (const m of html.matchAll(/<a\b([^>]*?)href="(\/[^"#]*)"/g)) {
    const [, attrs, target] = m;
    if (/hrefLang=/i.test(attrs)) continue;          // the language switcher
    if (/\.(png|jpe?g|svg|webp|mp4|ico|pdf)$/i.test(target)) continue;
    const inLocale = prefix === ""
      ? !target.startsWith("/en/") && target !== "/en"
      : target === prefix || target.startsWith(`${prefix}/`);
    if (!inLocale) bad.push(target);
  }

  if (bad.length) {
    failures++;
    console.log(`FAIL ${route}  (${locale})`);
    for (const b of [...new Set(bad)].slice(0, 6)) console.log(`       → ${b}`);
  }
}

console.log(
  failures
    ? `\n${failures} pages link out of their locale`
    : `\nEvery in-site link stays in its locale across ${pages.length} pages`
);
process.exitCode = failures ? 1 : 0;
