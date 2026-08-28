import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:4321";
const WIDTHS = [390, 768, 1024, 1440, 1920];

// CONTRACT §9: h1 / PageHero is 2 lines from 1024px, 3 at 390, and no line may
// open on a particle or a small kana.
const LINE_CAP = (width) => (width >= 1024 ? 2 : 3);
const BAD_INITIAL = new Set([
  ..."をにがはのへとでもやか",      // particles
  ..."ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮ", // small kana
  ..."。、」）",                     // closing punctuation
]);

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
      /**
       * Real rendered lines, not planned ones. Counting the wrap-unit spans
       * misses a unit that is itself too long for the column and wraps a
       * second time — which is exactly how a 3-line plan renders as 4 lines.
       * Walking the text and grouping characters by their top edge sees what
       * the reader sees.
       */
      const lines = (root) => {
        if (!root) return [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const firstByTop = new Map();
        let node;
        while ((node = walker.nextNode())) {
          for (let i = 0; i < node.length; i++) {
            if (!node.data[i].trim()) continue;
            const range = document.createRange();
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rect = range.getBoundingClientRect();
            if (rect.width < 0.5 && rect.height < 0.5) continue;
            const top = Math.round(rect.top);
            if (!firstByTop.has(top)) firstByTop.set(top, node.data[i]);
          }
        }
        return [...firstByTop.entries()].sort((a, b) => a[0] - b[0]).map((e) => e[1]);
      };

      const h1 = document.querySelector("h1");
      // PageHero renders both plans and hides one; measure the visible one.
      const visible =
        [...h1.querySelectorAll(":scope > span")].find((s) => s.getClientRects().length) || h1;

      return {
        h1: lines(visible),
        rows: [...document.querySelectorAll("ul > li h2")].map(lines),
        navTitles: [
          ...document.querySelectorAll("nav[aria-label] a > span:last-child"),
        ].map(lines),
        overflow:
          document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    });

    const bad = [];
    const cap = LINE_CAP(width);
    if (m.h1.length > cap) bad.push(`h1 ${m.h1.length} lines > ${cap}`);
    const check = (label, starts) => {
      const offender = starts.find((c) => BAD_INITIAL.has(c));
      if (offender) bad.push(`${label} line opens on "${offender}": ${starts.join("|")}`);
    };
    check("h1", m.h1);
    m.rows.forEach((s, i) => check(`row ${i}`, s));
    m.navTitles.forEach((s, i) => check(`nav ${i}`, s));
    if (m.overflow !== 0) bad.push(`overflowX=${m.overflow}`);
    if (bad.length) failures++;

    console.log(
      `${bad.length ? "FAIL" : "ok  "} ${p.padEnd(34)} ${String(width).padStart(4)}  ` +
        `h1=${m.h1.length}/${cap}(${m.h1.join("|")})  rows=${m.rows.length}  nav=${m.navTitles.length}  ovf=${m.overflow}` +
        (bad.length ? `\n       ${bad.join("; ")}` : "")
    );
  }
}

await browser.close();
console.log(failures ? `\n${failures} failing cells` : "\nall cells pass");
process.exitCode = failures ? 1 : 0;
