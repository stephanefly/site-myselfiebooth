import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

// Enrich the canonical sitemap from the HTML users and search engines actually receive.
const root = path.resolve("out");
const origin = "https://myselfiebooth-paris.fr";
const escape = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
let xml = await readFile(path.join(root, "sitemap.xml"), "utf8");
xml = xml.replace('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
let count = 0;
for (const match of [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]) {
  const url = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!url) continue;
  const pathname = new URL(url).pathname;
  const html = await readFile(path.join(root, pathname, "index.html"), "utf8");
  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) throw new Error(`Noindex URL in sitemap: ${url}`);
  const images = [...new Set([...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(m => decode(m[1])).filter(src => src.startsWith('/images/')))].slice(0, 30);
  for (const src of images) {
    await access(path.join(root, decodeURIComponent(src.split(/[?#]/)[0])));
  }
  const entries = images.map(src => `    <image:image><image:loc>${escape(new URL(src, origin).href)}</image:loc></image:image>`).join('\n');
  xml = xml.replace(match[0], `<url>${match[1]}${entries ? entries+'\n  ' : ''}</url>`);
  count += images.length;
}
await writeFile(path.join(root, "sitemap.xml"), xml);
console.log(`Sitemap images: ${count} images tied to their canonical pages.`);
