import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDirectory = path.join(root, "public");
const outDirectory = path.join(root, "out");
const mediaExtensions = new Set([".gif", ".jpeg", ".jpg", ".mp4", ".png", ".webp"]);

function listFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  });
}

if (!fs.existsSync(outDirectory)) {
  console.error("Contrôle des médias inutilisés impossible : le dossier out est absent.");
  process.exit(1);
}

const exportCorpus = listFiles(outDirectory)
  .filter((file) => !mediaExtensions.has(path.extname(file).toLowerCase()))
  .map((file) => {
    try {
      return fs.readFileSync(file, "utf8");
    } catch {
      return "";
    }
  })
  .join("\n");

const unusedMedia = listFiles(publicDirectory)
  .filter((file) => mediaExtensions.has(path.extname(file).toLowerCase()))
  .map((file) => ({
    file,
    publicPath: `/${path.relative(publicDirectory, file).replaceAll("\\", "/")}`,
  }))
  .filter(({ publicPath }) => (
    !exportCorpus.includes(publicPath)
    && !exportCorpus.includes(publicPath.replaceAll(" ", "%20"))
  ));

if (unusedMedia.length) {
  const totalBytes = unusedMedia.reduce((sum, item) => sum + fs.statSync(item.file).size, 0);
  console.warn(
    `${unusedMedia.length} médias restent dans la banque sans être affichés (${(totalBytes / 1024 / 1024).toFixed(2)} Mo).`,
  );
  for (const item of unusedMedia.slice(0, 40)) {
    console.warn(item.publicPath);
  }
  if (unusedMedia.length > 40) {
    console.warn(`... ${unusedMedia.length - 40} média(s) supplémentaire(s) conservé(s) dans la banque.`);
  }
}

console.log("Banque média conservée : les fichiers non affichés sont autorisés.");
