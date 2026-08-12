import fs from "node:fs";
import path from "node:path";


const sourceFiles = [
  path.join(process.cwd(), "src", "data", "eventArchive.js"),
  path.join(process.cwd(), "src", "data", "instagramMedia.js"),
  path.join(process.cwd(), "src", "data", "portfolioMedia.js"),
];

const sourceIds = [];
const mediaPaths = [];

for (const sourceFile of sourceFiles) {
  const content = fs.readFileSync(sourceFile, "utf8");
  sourceIds.push(...Array.from(content.matchAll(/sourceId:\s*"([^"]+)"/g), (match) => match[1]));
  mediaPaths.push(...Array.from(content.matchAll(/(?:image|video|poster):\s*"([^"]+)"/g), (match) => match[1]));
  if (sourceFile.endsWith("instagramMedia.js")) {
    const instagramFiles = Array.from(content.matchAll(/file:\s*"([^"]+)"/g), (match) => match[1]);
    sourceIds.push(...instagramFiles.map((file) => `instagram-${file}`));
    mediaPaths.push(...instagramFiles.map((file) => `/images/reel-gifs/${file}`));
  }
}

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}

const duplicateSources = duplicates(sourceIds);
const duplicateMedia = duplicates(mediaPaths);

if (duplicateSources.length || duplicateMedia.length) {
  console.error("Galeries refusées : une source ou un média est réutilisé.");
  if (duplicateSources.length) console.error(`Sources en double : ${duplicateSources.join(", ")}`);
  if (duplicateMedia.length) console.error(`Médias en double : ${duplicateMedia.join(", ")}`);
  process.exit(1);
}

console.log(`${sourceIds.length} sources de galerie uniques, aucun média réutilisé.`);
