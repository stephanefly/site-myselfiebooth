import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const areas = JSON.parse(await readFile("src/data/local-seo-pages.json", "utf8"));
const routes = [
  ...areas.map((area) => ({ slug: area.slug, route: `/location-photobooth/${area.slug}/` })),
  ...["paris", "lyon", "rouen"].map((slug) => ({ slug, route: `/${slug}/` })),
];
let minimumWords = Infinity;
let maximumWords = 0;
for (const { slug, route } of routes) {
  const html = await readFile(path.join("out", route, "index.html"), "utf8");
  const main = html.match(/<main\b[^>]*id="contenu"[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main?.includes(`data-local-area="${slug}"`), `Contenu local absent : ${route}`);
  assert.ok(main.includes('data-content-ready="true"'), `Page locale non prête : ${route}`);
  assert.equal((main.match(/<h1\b/g) || []).length, 1, `Titre principal absent ou dupliqué : ${route}`);
  assert.ok(!/\bdata-reveal(?:=|\s|>)/.test(main), `Contenu local dépendant d'une animation : ${route}`);
  const text = main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  assert.ok(wordCount >= 150, `Contenu local insuffisant (${wordCount} mots) : ${route}`);
  assert.ok(wordCount <= 450, `Page locale trop longue (${wordCount} mots) : ${route}`);
  minimumWords = Math.min(minimumWords, wordCount);
  maximumWords = Math.max(maximumWords, wordCount);
  const images = main.match(/<img\b[^>]*>/g) || [];
  assert.ok(images.length >= 5, `Moins de cinq images dans la page : ${route}`);
  let authenticLocationPhotos = 0;
  for (const image of images) {
    assert.ok(/\bdata-no-load-motion(?:=|\s|>)/.test(image), `Image dépendante d'une animation : ${route}`);
    const source = image.match(/\bsrc="([^"]+)"/)?.[1].split(/[?#]/)[0];
    if (source?.startsWith("https://commons.wikimedia.org/wiki/Special:FilePath/")) {
      authenticLocationPhotos += 1;
      continue;
    }
    assert.ok(source?.startsWith("/images/"), `Source d'image absente : ${route}`);
    await access(path.join("out", source));
  }
  assert.equal(authenticLocationPhotos, 1, `Photo réelle de la zone absente ou dupliquée : ${route}`);
  assert.ok(main.includes("source et licence"), `Crédit photo local absent : ${route}`);
}
const directoryConfig = await readFile("out/location-photobooth/.htaccess", "utf8");
assert.match(directoryConfig, /^DirectoryIndex index\.html$/m);
console.log(`Pages locales OK : ${routes.length} pages courtes (${minimumWords} à ${maximumWords} mots), avec contenu HTML immédiat et cinq images chacune.`);
