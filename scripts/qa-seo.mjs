/**
 * SEO checks that only the built export can answer.
 *
 * Written after the sitemap listed /about while the page's canonical said
 * /about/ — `trailingSlash: true` reaches metadata but not sitemap entries,
 * so the two disagreed about which URL is the real one.
 */
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const pages = execSync("find out -name index.html", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean).sort()
  .filter((f) => !/\/(404|_not-found)\//.test(f) && f !== "out/404.html");

let failures = 0;
const fail = (msg) => { failures++; console.log(`FAIL ${msg}`); };

if (!existsSync("out/sitemap.xml")) fail("sitemap.xml missing");
if (!existsSync("out/robots.txt")) fail("robots.txt missing");

const sitemap = existsSync("out/sitemap.xml") ? readFileSync("out/sitemap.xml", "utf8") : "";
const listed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const route = "/" + file.replace(/^out\//, "").replace(/index\.html$/, "");

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) { fail(`${route}: no canonical`); continue; }

  // Every canonical must appear in the sitemap, and vice versa.
  if (!listed.has(canonical)) fail(`${route}: canonical ${canonical} not in sitemap`);
  listed.delete(canonical);

  const alternates = [...html.matchAll(/hrefLang="([^"]+)" href="([^"]+)"/g)];
  if (alternates.length < 3) fail(`${route}: ${alternates.length} hreflang links, expected 3`);

  for (const tag of ["og:title", "og:description", "og:url", "og:image", "og:locale"]) {
    if (!html.includes(`property="${tag}"`)) fail(`${route}: no ${tag}`);
  }
  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
  if (ogUrl && ogUrl !== canonical) fail(`${route}: og:url ${ogUrl} != canonical ${canonical}`);
}

for (const orphan of listed) fail(`sitemap lists ${orphan}, which no page claims as canonical`);

console.log(failures ? `\n${failures} SEO problems` : `\nSEO checks pass across ${pages.length} pages`);
process.exitCode = failures ? 1 : 0;
