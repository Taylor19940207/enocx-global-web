import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const page = await b.newPage();
const slugs = ["chemical-tokyo-office","dreame-japan-entry","fjd-meti-notification","sigenergy-hr-tax","ulanzi-payroll-withholding"];
for (const slug of [...slugs, ""]) {
  for (const w of [390, 768, 1024, 1440]) {
    await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:4321/cases/${slug ? slug + "/" : ""}`, { waitUntil: "networkidle0" });
    await page.evaluate(async () => { if (document.fonts?.ready) await document.fonts.ready; });
    await new Promise(r => setTimeout(r, 200));
    const r = await page.evaluate(() => {
      // True line boxes: a Range over the visible title yields one rect per line.
      const h1 = document.querySelector("h1");
      const vis = [...h1.querySelectorAll(":scope > span")].find(s => s.getClientRects().length) || h1;
      const range = document.createRange();
      range.selectNodeContents(vis);
      const tops = new Map();
      for (const rect of range.getClientRects()) {
        if (rect.width < 1 || rect.height < 1) continue;
        const k = Math.round(rect.top);
        if (!tops.has(k) || rect.left < tops.get(k)) tops.set(k, rect.left);
      }
      // first character of each line
      const lines = [];
      const walker = document.createTreeWalker(vis, NodeFilter.SHOW_TEXT);
      const seen = new Set();
      let n;
      while ((n = walker.nextNode())) {
        for (let i = 0; i < n.length; i++) {
          const rr = document.createRange();
          rr.setStart(n, i); rr.setEnd(n, i + 1);
          const rect = rr.getBoundingClientRect();
          const k = Math.round(rect.top);
          if (!seen.has(k)) { seen.add(k); lines.push([k, n.data[i]]); }
        }
      }
      lines.sort((a, b) => a[0] - b[0]);
      return { count: lines.length, starts: lines.map(l => l[1]).join("|") };
    });
    const cap = w >= 1024 ? 2 : 3;
    const flag = r.count > cap ? "  ⚠ OVER" : "";
    console.log(`${(slug || "index").padEnd(28)} ${String(w).padStart(4)}  lines=${r.count}/${cap}  ${r.starts}${flag}`);
  }
}
await b.close();
