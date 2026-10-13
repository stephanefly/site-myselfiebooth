import fs from "node:fs";
import path from "node:path";

const rootDirectory = process.cwd();
const outDirectory = path.join(rootDirectory, "out");
const publicDirectory = path.join(rootDirectory, "public");

if (!fs.existsSync(outDirectory)) {
  console.error("Contrôle des médias impossible : le dossier out est absent.");
  process.exit(1);
}

function listHtmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
  });
}

function extractMediaPaths(html) {
  const imgPaths = Array.from(html.matchAll(/<img\b[^>]*>/gi), (match) => {
    const tag = match[0];
    const srcMatch = tag.match(/\bsrc="([^"]*)"/i);
    return { type: "image", src: srcMatch ? srcMatch[1] : "", tag };
  });
  const posterPaths = Array.from(html.matchAll(/<video\b[^>]*\bposter="([^"]*)"/gi), (match) => ({ type: "poster", src: match[1] }));
  const sourcePaths = Array.from(html.matchAll(/<source\b[^>]*\bsrc="([^"]*)"/gi), (match) => ({ type: "source", src: match[1] }));
  return [...imgPaths, ...posterPaths, ...sourcePaths];
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&#x27;/gi, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, "&");
}

function normalizeLocalPath(value) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return null;
  const decodedValue = decodeHtmlEntities(value);
  const pathname = decodedValue.split(/[?#]/, 1)[0];
  if (!pathname || pathname === "/") return null;
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function localMediaExists(mediaPath) {
  const relativePath = mediaPath.replace(/^\/+/, "");
  return fs.existsSync(path.join(outDirectory, relativePath)) || fs.existsSync(path.join(publicDirectory, relativePath));
}

function isContentImage(mediaPath) {
  if (!/\.(?:avif|gif|jpe?g|png|webp)$/i.test(mediaPath)) return false;
  if (mediaPath.startsWith("/icons/")) return false;
  if (mediaPath === "/favicon.ico") return false;
  return true;
}

let mediaCount = 0;
const missingImageSources = [];
const missingPageVisuals = [];
const missingMedia = [];
const samePageDuplicates = [];
const globalImageUsage = new Map();
const htmlFiles = listHtmlFiles(outDirectory);

for (const htmlFile of htmlFiles) {
  const page = path.relative(outDirectory, htmlFile);
  const html = fs.readFileSync(htmlFile, "utf8");
  const mediaItems = extractMediaPaths(html);
  // A valid source check alone misses pages whose image markup was deleted.
  if (html.includes('class="marketing-page"') && !/<img\b/i.test(html)) {
    missingPageVisuals.push(page);
  }
  const counts = new Map();

  mediaCount += mediaItems.length;

  for (const item of mediaItems) {
    if (item.type === "image" && (!item.src || !item.src.trim())) {
      missingImageSources.push({ page, tag: item.tag || "<img>" });
      continue;
    }

    const mediaPath = normalizeLocalPath(item.src);
    if (!mediaPath) continue;

    counts.set(mediaPath, (counts.get(mediaPath) || 0) + 1);

    if ((item.type === "image" || item.type === "poster") && isContentImage(mediaPath)) {
      if (!globalImageUsage.has(mediaPath)) globalImageUsage.set(mediaPath, []);
      globalImageUsage.get(mediaPath).push(page);
    }

    if (!localMediaExists(mediaPath)) {
      missingMedia.push({ page, mediaPath });
    }
  }

  for (const [mediaPath, count] of counts.entries()) {
    if (count > 1 && isContentImage(mediaPath)) {
      samePageDuplicates.push({ page, mediaPath, count });
    }
  }
}

const globalDuplicatedImages = [...globalImageUsage.entries()]
  .map(([mediaPath, pages]) => ({ mediaPath, pages: [...new Set(pages)], count: pages.length }))
  .filter((item) => item.count > 1)
  .sort((a, b) => b.count - a.count || a.mediaPath.localeCompare(b.mediaPath));

console.log(`${htmlFiles.length} pages et ${mediaCount} médias référencés dans l'export.`);
console.log(`${globalImageUsage.size} images de contenu distinctes rendues.`);

if (missingImageSources.length) {
  console.error(`${missingImageSources.length} balise(s) image sont rendues sans source :`);
  for (const item of missingImageSources.slice(0, 150)) console.error(`- ${item.page}: ${item.tag}`);
}

if (missingMedia.length) {
  console.error(`${missingMedia.length} référence(s) média pointent vers un fichier absent :`);
  for (const item of missingMedia) console.error(`- ${item.page}: ${item.mediaPath}`);
}

if (samePageDuplicates.length) {
  console.error(`${samePageDuplicates.length} image(s) de contenu sont répétées sur une même page :`);
  for (const item of samePageDuplicates) console.error(`- ${item.page}: ${item.mediaPath} x${item.count}`);
}

if (globalDuplicatedImages.length) {
  console.error(`${globalDuplicatedImages.length} image(s) de contenu sont réutilisées sur le site complet :`);
  for (const item of globalDuplicatedImages.slice(0, 150)) {
    console.error(`- ${item.mediaPath} x${item.count} : ${item.pages.slice(0, 10).join(", ")}${item.pages.length > 10 ? ", ..." : ""}`);
  }
}

if (missingPageVisuals.length) {
  console.error(`Pages commerciales sans image : ${missingPageVisuals.join(", ")}`);
}

if (missingPageVisuals.length || missingImageSources.length || missingMedia.length || samePageDuplicates.length || globalDuplicatedImages.length) {
  console.error("ÉCHEC média : chaque image doit avoir une source valide, exister et n'apparaître qu'une seule fois sur l'ensemble du site.");
  process.exit(1);
}

console.log("Contrôle médias OK : sources présentes, fichiers disponibles et aucune image de contenu réutilisée.");
