/**
 * No page in a non-default locale should render Japanese text.
 *
 * Written after a scan that required a leading kana let 不動産・ODI through:
 * the case category labels were hardcoded outside the dictionaries, so the
 * case navigation and breadcrumbs stayed Japanese on /en.
 *
 * Run against the built export.
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

/**
 * Exempt: the switcher names the other locale in its own language, and partner
 * and client names are proper nouns kept in their registered form — read from
 * the content file, so adding a partner does not need this list touched.
 */
const properNouns = readFileSync("src/lib/content/ja.ts", "utf8");
const listOf = (name) => {
  const block = properNouns.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\n\\];`));
  return block ? [...block[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]) : [];
};
const ALLOWED = new Set([
  "日本語",
  ...listOf("strategicPartners"),
  ...listOf("clients"),
]);
/** Company names break into runs at ASCII or punctuation; allow the pieces. */
const ALLOWED_FRAGMENTS = new Set(
  [...ALLOWED].flatMap((n) => n.split(/[^\u3040-\u30ff\u4e00-\u9fff\u30fb\u30fc]+/)).filter(Boolean)
);

const pages = execSync("find out -name index.html", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean).sort();

let failures = 0;

for (const file of pages) {
  const route = "/" + file.replace(/^out\//, "").replace(/\/?index\.html$/, "");
  if (route !== "/en" && !route.startsWith("/en/")) continue;

  const text = readFileSync(file, "utf8")
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ");

  const runs = [...new Set(text.match(/[\u3040-\u30ff\u4e00-\u9fff][\u3040-\u30ff\u4e00-\u9fff\u30fb\u30fc]*/g) ?? [])]
    .filter((r) => !ALLOWED.has(r) && !ALLOWED_FRAGMENTS.has(r));

  if (runs.length) {
    failures++;
    console.log(`FAIL ${route}  (${runs.length} runs)`);
    for (const r of runs.slice(0, 8)) console.log(`       ${r}`);
  }
}

console.log(failures ? `\n${failures} pages carry Japanese text` : "\nNo Japanese text on any /en page");
process.exitCode = failures ? 1 : 0;
