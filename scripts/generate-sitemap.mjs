import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const routes = JSON.parse(
  await readFile(resolve(root, "src/data/sitemap-routes.json"), "utf8"),
);
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
