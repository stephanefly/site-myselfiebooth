import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const staticRoutes = JSON.parse(
  await readFile(resolve(root, "src/data/sitemap-routes.json"), "utf8"),
);
const blogSources = [
  "src/data/blogArticles.js",
  "src/data/blogWeddingPlanningGuides.js",
  "src/data/blogWeddingReceptionGuides.js",
  "src/data/blogWeddingGuestGuides.js",
  "src/data/blogServiceGuides.js",
];
const blogSlugs = new Set();

for (const source of blogSources) {
  const content = await readFile(resolve(root, source), "utf8");
  for (const match of content.matchAll(/slug:\s*["']([^"']+)["']/g)) {
    blogSlugs.add(match[1]);
  }
}

const staticPaths = new Set(staticRoutes.map((route) => route.path));
const routes = [
  ...staticRoutes.map((route) => route.path === "/blog/"
    ? { ...route, lastmod: "2026-08-12" }
    : route),
  ...Array.from(blogSlugs)
    .map((slug) => ({ path: `/blog/${slug}/`, lastmod: "2026-08-12" }))
    .filter((route) => !staticPaths.has(route.path)),
];
const baseUrl = "https://myselfiebooth-paris.fr";
const escapeXml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const entries = routes.map(({ path, lastmod }) => [
  "  <url>",
  `    <loc>${escapeXml(`${baseUrl}${path}`)}</loc>`,
  `    <lastmod>${lastmod}</lastmod>`,
  "  </url>",
].join("\n"));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

await writeFile(resolve(root, "public/sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap with ${routes.length} URLs.`);
