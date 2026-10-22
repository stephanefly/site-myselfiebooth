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
  if (!item.path || !["ai_from_real", "ai_generated"].includes(item.kind)) {
    errors.push("Chaque entrée du manifeste doit déclarer path et une provenance IA reconnue.");
    continue;
  }

  if (manifestPaths.has(item.path)) errors.push(`Entrée dupliquée : ${item.path}`);
  manifestPaths.add(item.path);

  const expectedPrefix = item.kind === "ai_generated" ? "/images/editorial-ai/" : "/images/ai-from-real/";
  if (!item.path.startsWith(expectedPrefix)) {
    errors.push(`Dérivé IA hors du dossier canonique : ${item.path}`);
  }
  if (!fs.existsSync(publicFile(item.path))) errors.push(`Dérivé IA introuvable : ${item.path}`);
  if (item.kind === "ai_generated") {
    if (!item.prompt || !item.generatedAt) errors.push(`Illustration IA sans prompt ou date : ${item.path}`);
    if (item.sources?.length) errors.push(`Une illustration générée ne doit pas déclarer de fausses sources réelles : ${item.path}`);
    continue;
  }
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

const aiFiles = ["ai-from-real", "editorial-ai"].flatMap((folder) => {
  const directory = path.join(publicRoot, "images", folder);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => `/images/${folder}/${entry.name}`);
});

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
    if ((mediaPath.startsWith("/images/ai-from-real/") || mediaPath.startsWith("/images/editorial-ai/")) && !manifestPaths.has(mediaPath)) {
      errors.push(`${path.relative(root, file)} référence un dérivé IA non tracé : ${mediaPath}`);
    }
  }
}

if (errors.length) {
  console.error(`Contrôle provenance refusé : ${errors.length} erreur(s).`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Provenance média validée : ${manifest.filter((item) => item.kind === "ai_from_real").length} dérivés de photos réelles et ${manifest.filter((item) => item.kind === "ai_generated").length} illustrations IA éditoriales tracés.`);
