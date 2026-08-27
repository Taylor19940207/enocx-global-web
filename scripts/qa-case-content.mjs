import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";

const file = process.argv[2] ?? "src/lib/cases/chemical-tokyo-office.ts";
const slug = file.split("/").pop().replace(/\.ts$/, "");

// Every double-quoted Japanese string in the case data must reach the page.
// `metaTitle` / `metaDescription` are head-only, so they are excluded.
const src = readFileSync(file, "utf8").replace(/\n\s+meta(Title|Description):[\s\S]*?",/g, "");
const strings = [...src.matchAll(/"([^"\\]{6,})"/g)]
  .map((m) => m[1])
  .filter((s) => /[ぁ-んァ-ヶ一-龠]/.test(s));

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`http://localhost:4321/cases/${slug}/`, { waitUntil: "networkidle0" });
const text = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ""));
await browser.close();

const missing = strings.filter((s) => !text.includes(s.replace(/\s+/g, "")));
console.log(`${slug}: ${strings.length} strings checked`);
console.log(missing.length ? "MISSING:\n" + missing.join("\n") : "all strings rendered ✓");
process.exitCode = missing.length ? 1 : 0;
