import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:4321";
const WIDTHS = [390, 768, 1024, 1440, 1920];
const PATHS = ["/cases/", "/cases/chemical-tokyo-office/"];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();

for (const p of PATHS) {
  for (const width of WIDTHS) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE + p, { waitUntil: "networkidle0" });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    });
    await new Promise((r) => setTimeout(r, 300));

    const m = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      // Count rendered lines of the visible (non-display:none) title spans.
      const spans = [...h1.querySelectorAll("span > span.block")].filter(
        (s) => s.offsetParent !== null || s.getClientRects().length > 0
      );
      const lines = spans.length
        ? spans.filter((s) => s.getClientRects().length > 0).length
        : Math.round(h1.getBoundingClientRect().height /
            parseFloat(getComputedStyle(h1).lineHeight));
      const firstChars = spans
        .filter((s) => s.getClientRects().length > 0)
        .map((s) => s.textContent.trim()[0]);
      const sections = [...document.querySelectorAll("main section, body > section")].map(
        (s) => getComputedStyle(s).backgroundColor
      );
      return {
        lines,
        firstChars,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        sections,
        rows: document.querySelectorAll("ul > li a[href*='/cases/']").length,
      };
    });
    console.log(
      `${p.padEnd(32)} ${String(width).padStart(4)}  h1lines=${m.lines}  overflowX=${m.overflow}  rows=${m.rows}  starts=${m.firstChars.join("|")}`
    );
    if (width === 1440) console.log("   sections:", m.sections.join(" → "));
  }
}

await browser.close();
