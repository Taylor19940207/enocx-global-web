import puppeteer from "puppeteer-core";
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3000";
const OUT_DIR = path.resolve(import.meta.dirname, "../../screenshots");
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1 };

const PAGES = [
  { slug: "home", path: "/" },
  { slug: "about", path: "/about" },
  { slug: "services", path: "/services" },
  { slug: "market-entry", path: "/market-entry" },
  { slug: "people", path: "/people" },
  { slug: "company", path: "/company" },
  { slug: "career", path: "/career" },
  { slug: "contact", path: "/contact" },
];

async function forceVisible(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
  });
  await new Promise((r) => setTimeout(r, 400));
}

async function getScrollMetrics(page) {
  return page.evaluate(() => {
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    return {
      viewportHeight: window.innerHeight,
      pageHeight,
      maxScroll: Math.max(0, pageHeight - window.innerHeight),
    };
  });
}

// 清空舊截圖
await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
  defaultViewport: VIEWPORT,
});

const page = await browser.newPage();
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);

let total = 0;

for (const { slug, path: route } of PAGES) {
  const dir = path.join(OUT_DIR, slug);
  await mkdir(dir, { recursive: true });

  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 60000 });
  await forceVisible(page);

  let { viewportHeight, maxScroll } = await getScrollMetrics(page);
  const positions = [];

  for (let y = 0; y <= maxScroll; y += viewportHeight) {
    positions.push(y);
  }
  // 確保最後一屏貼底（避免剩餘不足一屏的內容漏拍）
  if (positions.length === 0 || positions[positions.length - 1] !== maxScroll) {
    positions.push(maxScroll);
  }

  for (let i = 0; i < positions.length; i++) {
    const y = positions[i];
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise((r) => setTimeout(r, 350));

    const file = path.join(dir, `${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({ path: file, fullPage: false });
    total++;
  }

  console.log(`✓ ${slug} — ${positions.length} 張 (${route})`);
}

await browser.close();
console.log(`\nDone: ${total} 張 → ${OUT_DIR}`);
