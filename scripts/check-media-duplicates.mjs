import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const extensions = new Set([".gif", ".jpeg", ".jpg", ".mp4", ".png", ".webp"]);
const root = "public";

function listMedia(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return listMedia(file);
    return entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase()) ? [file] : [];
  });
}

async function fingerprint(file) {
  const hash = createHash("sha256");
  for await (const chunk of fs.createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
}

const files = listMedia(root);
const bySize = new Map();
for (const file of files) {
  const size = fs.statSync(file).size;
  if (!bySize.has(size)) bySize.set(size, []);
  bySize.get(size).push(file);
}

// Identical files always have identical sizes. Avoid hashing unique-sized files.
const candidates = [...bySize.values()].filter((group) => group.length > 1).flat();
const byHash = new Map();
for (const file of candidates) {
  const hash = await fingerprint(file);
  if (!byHash.has(hash)) byHash.set(hash, []);
  byHash.get(hash).push(file);
}
const duplicates = [...byHash.values()].filter((group) => group.length > 1);

console.log(`Médias vérifiés : ${files.length}, candidats à taille identique : ${candidates.length}.`);
if (duplicates.length) {
  console.error("Doublons strictement identiques détectés :");
  for (const group of duplicates) console.error(group.join(" = "));
  process.exit(1);
}
console.log("Aucun doublon binaire. Les recadrages et variantes visuelles nécessitent un contrôle distinct.");
