/**
 * Snapshot or compare the rendered DOM of every exported page.
 *
 *   node scripts/dom-snapshot.mjs save <dir>      capture a baseline
 *   node scripts/dom-snapshot.mjs check <dir>     diff the current build against it
 *
 * The RSC flight payload is stripped: it serialises component structure, which
 * a refactor legitimately changes (a `.map()` adds keys). The DOM is what must
 * not move, so that is what is compared.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const [mode, dir] = process.argv.slice(2);
if (!["save", "check"].includes(mode) || !dir) {
  console.error("usage: dom-snapshot.mjs <save|check> <dir>");
  process.exit(2);
}

const pages = execSync("find out -name index.html", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean).sort();

const keyOf = (f) =>
  f.replace(/^out\//, "").replace(/\/?index\.html$/, "").replace(/\//g, "_") || "root";

const dom = (html) =>
  html
    .replace(/<script>self\.__next_f\.push\([\s\S]*?\)<\/script>/g, "")
    // Build-generated asset names change on any code change; they are not DOM.
    .replace(/\/_next\/static\/[^"']+/g, "ASSET")
    .replace(/[a-f0-9]{16,}/g, "HASH")
    .replace(/>(?=<)/g, ">\n");

if (mode === "save") {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  for (const f of pages) writeFileSync(path.join(dir, keyOf(f) + ".html"), dom(readFileSync(f, "utf8")));
  console.log(`saved ${pages.length} pages to ${dir}`);
  process.exit(0);
}

const saved = new Set(readdirSync(dir));
let failures = 0;
for (const f of pages) {
  const key = keyOf(f) + ".html";
  if (!saved.has(key)) { console.log(`NEW   ${key}`); continue; }
  saved.delete(key);
  const a = readFileSync(path.join(dir, key), "utf8").split("\n");
  const b = dom(readFileSync(f, "utf8")).split("\n");
  if (a.length === b.length && a.every((l, i) => l === b[i])) continue;
  failures++;
  console.log(`DIFF  ${key}`);
  for (let i = 0, shown = 0; i < Math.max(a.length, b.length) && shown < 6; i++) {
    if (a[i] !== b[i]) { console.log(`   -${(a[i] ?? "").slice(0, 170)}`); console.log(`   +${(b[i] ?? "").slice(0, 170)}`); shown++; }
  }
}
for (const gone of saved) console.log(`GONE  ${gone}`);
console.log(failures ? `\n${failures} pages differ` : `\nDOM identical across ${pages.length} pages`);
process.exitCode = failures ? 1 : 0;
