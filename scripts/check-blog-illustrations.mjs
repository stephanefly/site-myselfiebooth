import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const publicRoot = path.resolve("public");
const blogRoot = path.resolve("out/blog");
const mapping = JSON.parse(await readFile("src/data/blogArticleIllustrations.json", "utf8"));
const manifest = JSON.parse(await readFile("src/data/mediaProvenanceManifest.json", "utf8"));
const declaredAiImages = new Set(manifest.map((entry) => entry.path));
const sourceOwners = new Map();
const contentOwners = new Map();
const articleSlugs = (await readdir(blogRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory()).map((entry) => entry.name);

assert.ok(articleSlugs.length > 0, "Aucun article exporté.");
for (const slug of articleSlugs) {
  const illustration = mapping[slug];
  assert.ok(illustration?.src && illustration.alt, `Illustration dédiée absente : ${slug}`);
  assert.ok(declaredAiImages.has(illustration.src), `Provenance IA non tracée : ${slug}`);
  assert.ok(!sourceOwners.has(illustration.src), `Image partagée entre ${sourceOwners.get(illustration.src)} et ${slug}`);
  sourceOwners.set(illustration.src, slug);

  const imageBytes = await readFile(path.join(publicRoot, illustration.src));
  const digest = createHash("sha256").update(imageBytes).digest("hex");
  assert.ok(!contentOwners.has(digest), `Même fichier image sous deux noms : ${contentOwners.get(digest)} et ${slug}`);
  contentOwners.set(digest, slug);

  const html = await readFile(path.join(blogRoot, slug, "index.html"), "utf8");
  const hero = html.match(/<header\b[^>]*class="blog-article-hero"[^>]*>([\s\S]*?)<\/header>/)?.[1];
  assert.ok(hero, `En-tête absent : ${slug}`);
  const source = hero.match(/<img\b[^>]*\bsrc="([^"]+)"/)?.[1].split(/[?#]/)[0];
  assert.equal(source, illustration.src, `L'article n'affiche pas son illustration dédiée : ${slug}`);
}

const indexHtml = await readFile(path.join(blogRoot, "index.html"), "utf8");
for (const { src } of Object.values(mapping)) {
  assert.ok(indexHtml.includes(src), `Illustration absente de la liste du blog : ${src}`);
}
assert.deepEqual(Object.keys(mapping).sort(), articleSlugs.sort(), "Le catalogue d'illustrations doit couvrir exactement les articles exportés.");
console.log(`Illustrations blog OK : ${articleSlugs.length} articles, ${sourceOwners.size} images IA distinctes et aucun fichier dupliqué.`);
