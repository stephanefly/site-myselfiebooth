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
  const imgPaths = Array.from(
    html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g),
    (match) => ({ type: "image", src: match[1] })
  );
  const posterPaths = Array.from(
    html.matchAll(/<video\b[^>]*\bposter="([^"]+)"/g),
    (match) => ({ type: "poster", src: match[1] })
  );
  const sourcePaths = Array.from(
    html.matchAll(/<source\b[^>]*\bsrc="([^"]+)"/g),
    (match) => ({ type: "source", src: match[1] })
  );

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
  const exportedPath = path.join(outDirectory, relativePath);
  const publicPath = path.join(publicDirectory, relativePath);

  return fs.existsSync(exportedPath) || fs.existsSync(publicPath);
}

let mediaCount = 0;
const missingMedia = [];
const duplicatedMedia = [];
const globalImageUsage = new Map();
const htmlFiles = listHtmlFiles(outDirectory);

for (const htmlFile of htmlFiles) {
  const page = path.relative(outDirectory, htmlFile);
  const html = fs.readFileSync(htmlFile, "utf8");
  const mediaItems = extractMediaPaths(html);
  const localItems = mediaItems
    .map((item) => ({ ...item, src: normalizeLocalPath(item.src) }))
    .filter((item) => Boolean(item.src));
  const counts = new Map();

  mediaCount += mediaItems.length;

  for (const item of localItems) {
    const mediaPath = item.src;
    counts.set(mediaPath, (counts.get(mediaPath) || 0) + 1);

    if (item.type === "image") {
      if (!globalImageUsage.has(mediaPath)) globalImageUsage.set(mediaPath, []);
      globalImageUsage.get(mediaPath).push(page);
    }

    if (!localMediaExists(mediaPath)) {
      missingMedia.push({ page, mediaPath });
    }
  }

  for (const [mediaPath, count] of counts.entries()) {
    if (count > 1) {
      duplicatedMedia.push({ page, mediaPath, count });
    }
  }
}

const globalDuplicatedImages = [...globalImageUsage.entries()]
  .map(([mediaPath, pages]) => ({ mediaPath, pages, count: pages.length }))
  .filter((item) => item.count > 1)
  .sort((a, b) => b.count - a.count || a.mediaPath.localeCompare(b.mediaPath));

console.log(`${htmlFiles.length} pages et ${mediaCount} médias référencés dans l'export.`);
console.log(`${globalImageUsage.size} fichiers image distincts rendus dans le HTML.`);

if (duplicatedMedia.length) {
  console.warn(`${duplicatedMedia.length} média(s) répété(s) au moins deux fois sur une même page :`);
  for (const item of duplicatedMedia.slice(0, 30)) {
    console.warn(`- ${item.page}: ${item.mediaPath} x${item.count}`);
  }
  if (duplicatedMedia.length > 30) {
    console.warn(`- ... ${duplicatedMedia.length - 30} répétition(s) supplémentaire(s)`);
  }
}

if (globalDuplicatedImages.length) {
  console.warn(`${globalDuplicatedImages.length} image(s) sont réutilisées sur le site complet :`);
  for (const item of globalDuplicatedImages.slice(0, 120)) {
    const uniquePages = [...new Set(item.pages)];
    console.warn(`- ${item.mediaPath} x${item.count} sur ${uniquePages.length} page(s): ${uniquePages.slice(0, 8).join(", ")}${uniquePages.length > 8 ? ", ..." : ""}`);
  }
  if (globalDuplicatedImages.length > 120) {
    console.warn(`- ... ${globalDuplicatedImages.length - 120} image(s) réutilisée(s) supplémentaire(s)`);
  }
}

if (missingMedia.length) {
  console.error(`${missingMedia.length} référence(s) média pointent vers un fichier absent :`);
  for (const item of missingMedia) {
    console.error(`- ${item.page}: ${item.mediaPath}`);
  }
  process.exit(1);
}

console.log("Contrôle médias OK : aucune image, vidéo ou source locale manquante.");
