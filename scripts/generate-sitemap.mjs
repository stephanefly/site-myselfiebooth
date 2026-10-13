import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const staticRoutes = JSON.parse(
  await readFile(resolve(root, "src/data/sitemap-routes.json"), "utf8"),
);
const localSeoPages = JSON.parse(
  await readFile(resolve(root, "src/data/local-seo-pages.json"), "utf8"),
);
const blogSources = [
  { path: "src/data/blogArticles.js", lastmod: "2026-08-12" },
  { path: "src/data/blogWeddingPlanningGuides.js", lastmod: "2026-08-12" },
  { path: "src/data/blogWeddingReceptionGuides.js", lastmod: "2026-08-12" },
  { path: "src/data/blogWeddingGuestGuides.js", lastmod: "2026-08-12" },
  { path: "src/data/blogServiceGuides.js", lastmod: "2026-08-12" },
  { path: "src/data/blogSeoGrowthGuides.js", lastmod: "2026-10-13" },
];
const blogSlugs = new Map();

for (const source of blogSources) {
  const content = await readFile(resolve(root, source.path), "utf8");
  for (const match of content.matchAll(/slug:\s*["']([^"']+)["']/g)) {
    if (!blogSlugs.has(match[1]) || source.lastmod > blogSlugs.get(match[1])) {
      blogSlugs.set(match[1], source.lastmod);
    }
  }
}

const staticPaths = new Set(staticRoutes.map((route) => route.path));
const blogRoutes = Array.from(blogSlugs.entries())
  .map(([slug, lastmod]) => ({ path: `/blog/${slug}/`, lastmod }))
  .filter((route) => !staticPaths.has(route.path));
const localRoutes = localSeoPages
  .map((location) => ({
    path: `/location-photobooth/${location.slug}/`,
    lastmod: "2026-10-11",
  }))
  .filter((route) => !staticPaths.has(route.path));

const routes = [
  ...staticRoutes.map((route) => route.path === "/blog/"
    ? { ...route, lastmod: "2026-10-13" }
    : route),
  ...blogRoutes,
  ...localRoutes,
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
