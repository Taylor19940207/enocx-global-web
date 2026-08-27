import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:4321";
const WIDTHS = [390, 768, 1024, 1440, 1920];

const barrel = readFileSync("src/lib/cases/index.ts", "utf8");
// Only default-imported case modules — not ./types or ./layout.
const slugs = [...barrel.matchAll(/^import (\w+) from "\.\/([a-z0-9-]+)";$/gm)].map(
  (m) => m[2]
);
const paths = ["/cases/", ...slugs.map((s) => `/cases/${s}/`)];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
let failures = 0;

for (const p of paths) {
  for (const width of WIDTHS) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE + p, { waitUntil: "networkidle0" });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    });
    await new Promise((r) => setTimeout(r, 250));

    const m = await page.evaluate(() => {
      // Visual line starts: group the title's wrap units by their rendered top.
      const lineStarts = (heading) => {
        const units = [...heading.querySelectorAll("span")].filter(
          (s) => !s.querySelector("span") && s.getClientRects().length
        );
        const byTop = new Map();
        for (const u of units) {
          const top = Math.round(u.getBoundingClientRect().top);
          if (!byTop.has(top)) byTop.set(top, u.textContent.trim()[0]);
        }
        return [...byTop.values()];
      };
      const h1 = document.querySelector("h1");
      const rows = [...document.querySelectorAll("ul > li h2")].map(lineStarts);
      return {
        h1Lines: lineStarts(h1),
        rows,
        overflow:
          document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    });

    // CONTRACT §9: h1 is 2 lines from 1024px, 3 at 390, never particle-initial.
    const PARTICLES = new Set(["を", "に", "が", "は", "の", "へ", "と", "で", "も", "や", "か"]);
    const cap = width >= 1024 ? 2 : 3;
    const bad = [];
    if (m.h1Lines.length > cap) bad.push(`h1 ${m.h1Lines.length} lines > ${cap}`);
    if (m.h1Lines.some((c) => PARTICLES.has(c))) bad.push(`h1 particle-initial: ${m.h1Lines.join("|")}`);
    for (const [i, starts] of m.rows.entries())
      if (starts.some((c) => PARTICLES.has(c))) bad.push(`row ${i} particle-initial: ${starts.join("|")}`);
    if (m.overflow !== 0) bad.push(`overflowX=${m.overflow}`);
    if (bad.length) failures++;

    console.log(
      `${bad.length ? "FAIL" : "ok  "} ${p.padEnd(34)} ${String(width).padStart(4)}  ` +
        `h1=${m.h1Lines.length}(${m.h1Lines.join("|")})  rows=${m.rows.length}  ovf=${m.overflow}` +
        (bad.length ? `\n       ${bad.join("; ")}` : "")
    );
  }
}

await browser.close();
console.log(failures ? `\n${failures} failing cells` : "\nall cells pass");
process.exitCode = failures ? 1 : 0;
