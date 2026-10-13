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
    (match) => match[1]
  );
  const posterPaths = Array.from(
    html.matchAll(/<video\b[^>]*\bposter="([^"]+)"/g),
    (match) => match[1]
  );
  const sourcePaths = Array.from(
    html.matchAll(/<source\b[^>]*\bsrc="([^"]+)"/g),
    (match) => match[1]
  );

  return [...imgPaths, ...posterPaths, ...sourcePaths];
}

function normalizeLocalPath(value) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return null;

  const pathname = value.split(/[?#]/, 1)[0];
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
const htmlFiles = listHtmlFiles(outDirectory);

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");
  const mediaPaths = extractMediaPaths(html);
  const localPaths = mediaPaths.map(normalizeLocalPath).filter(Boolean);
  const counts = new Map();

  mediaCount += mediaPaths.length;

  for (const mediaPath of localPaths) {
    counts.set(mediaPath, (counts.get(mediaPath) || 0) + 1);

    if (!localMediaExists(mediaPath)) {
      missingMedia.push({
        page: path.relative(outDirectory, htmlFile),
        mediaPath,
      });
    }
  }

  for (const [mediaPath, count] of counts.entries()) {
    if (count > 1) {
      duplicatedMedia.push({
        page: path.relative(outDirectory, htmlFile),
        mediaPath,
        count,
      });
    }
  }
}

console.log(`${htmlFiles.length} pages et ${mediaCount} médias référencés dans l'export.`);

if (duplicatedMedia.length) {
  console.warn(`${duplicatedMedia.length} média(s) répété(s) au moins deux fois sur une même page :`);
  for (const item of duplicatedMedia.slice(0, 30)) {
    console.warn(`- ${item.page}: ${item.mediaPath} x${item.count}`);
  }
  if (duplicatedMedia.length > 30) {
    console.warn(`- ... ${duplicatedMedia.length - 30} répétition(s) supplémentaire(s)`);
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
