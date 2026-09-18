import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";

const file = process.argv[2] ?? "src/lib/cases/ja/chemical-tokyo-office.ts";
const slug = file.split("/").pop().replace(/\.ts$/, "");
// Locale lives in the path: src/lib/cases/<locale>/<slug>.ts
const locale = file.split("/").at(-2);
const prefix = locale === "ja" ? "" : `/${locale}`;

// Every double-quoted Japanese string in the case data must reach the page.
// `metaTitle` / `metaDescription` are head-only, so they are excluded.
// Strip comments first: they contain prose, and quoted prose inside one would
// otherwise be looked for on the page.
const src = readFileSync(file, "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/^\s*\/\/.*$/gm, "")
  // `metaTitle` / `metaDescription` are head-only.
  .replace(/\n\s+meta(Title|Description):[\s\S]*?",/g, "");

// Match every string literal, short ones included. Skipping the short ones
// lets a closing quote open the next match, which captures the code between
// two strings rather than a string.
const strings = [...src.matchAll(/"([^"\\]*)"/g)]
  .map((m) => m[1])
  .filter((s) => s.length >= 6)
  .filter((s) => (locale === "ja" ? /[ぁ-んァ-ヶ一-龠]/.test(s) : /[a-z]{2}/.test(s) && / /.test(s)))
  .filter((s) => !s.startsWith("/"));

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`http://localhost:4321${prefix}/cases/${slug}/`, { waitUntil: "networkidle0" });
const text = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ""));
await browser.close();

const missing = strings.filter((s) => !text.includes(s.replace(/\s+/g, "")));
console.log(`${locale}/${slug}: ${strings.length} strings checked`);
console.log(missing.length ? "MISSING:\n" + missing.join("\n") : "all strings rendered ✓");
process.exitCode = missing.length ? 1 : 0;
