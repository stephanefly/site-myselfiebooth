import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicRoot = path.join(root, "public");
const manifestPath = path.join(root, "src", "data", "mediaProvenanceManifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const forbiddenPrefixes = [
  "/images/ai/",
  "/images/blog-ai/",
  "/images/generated/",
  "/images/machines-ai/",
  "/images/ai-faithful/",
  "/images/ai-fusions/",
  "/images/selector/",
  "/images/ia/",
];

function publicFile(publicPath) {
  return path.join(publicRoot, publicPath.replace(/^\//, ""));
}

function listSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listSourceFiles(entryPath);
    return /\.(?:css|js|jsx|json)$/.test(entry.name) ? [entryPath] : [];
  });
}

const errors = [];
const manifestPaths = new Set();

for (const item of manifest) {
  if (!item.path || item.kind !== "ai_from_real") {
    errors.push("Chaque entrée du manifeste doit déclarer path et kind=ai_from_real.");
    continue;
  }

  if (manifestPaths.has(item.path)) errors.push(`Entrée dupliquée : ${item.path}`);
  manifestPaths.add(item.path);

  if (!item.path.startsWith("/images/ai-from-real/")) {
    errors.push(`Dérivé IA hors du dossier canonique : ${item.path}`);
  }
  if (!fs.existsSync(publicFile(item.path))) errors.push(`Dérivé IA introuvable : ${item.path}`);
  if (!Array.isArray(item.sources) || item.sources.length === 0) {
    errors.push(`Source réelle manquante : ${item.path}`);
  } else {
    for (const source of item.sources) {
      if (!fs.existsSync(publicFile(source))) errors.push(`Source réelle introuvable : ${source}`);
      if (manifestPaths.has(source) || source.startsWith("/images/ai-from-real/")) {
        errors.push(`Une source doit être réelle, pas un dérivé IA : ${source}`);
      }
    }
  }
}

const aiFiles = fs.readdirSync(path.join(publicRoot, "images", "ai-from-real"), { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => `/images/ai-from-real/${entry.name}`);

for (const aiFile of aiFiles) {
  if (!manifestPaths.has(aiFile)) errors.push(`Dérivé IA absent du manifeste : ${aiFile}`);
}
for (const manifestMedia of manifestPaths) {
  if (!aiFiles.includes(manifestMedia)) errors.push(`Entrée sans fichier canonique : ${manifestMedia}`);
}

const mediaPattern = /["'(]((?:\/images\/)[^"')]+\.(?:gif|jpe?g|png|webp))/gi;
for (const file of listSourceFiles(path.join(root, "src"))) {
  if (file === manifestPath) continue;
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(mediaPattern)) {
    const mediaPath = match[1];
    if (forbiddenPrefixes.some((prefix) => mediaPath.startsWith(prefix))) {
      errors.push(`${path.relative(root, file)} référence un ancien visuel 100 % IA : ${mediaPath}`);
    }
    if (mediaPath.startsWith("/images/ai-from-real/") && !manifestPaths.has(mediaPath)) {
      errors.push(`${path.relative(root, file)} référence un dérivé IA non tracé : ${mediaPath}`);
    }
  }
}

if (errors.length) {
  console.error(`Contrôle provenance refusé : ${errors.length} erreur(s).`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Provenance média validée : ${manifest.length} dérivés IA tracés, 0 image 100 % IA.`);
