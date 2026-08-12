import fs from "node:fs";
import path from "node:path";


const outDirectory = path.join(process.cwd(), "out");
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

let mediaCount = 0;
const htmlFiles = listHtmlFiles(outDirectory);

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");
  const imagePaths = Array.from(html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g), (match) => match[1]);
  const posterPaths = Array.from(html.matchAll(/<video\b[^>]*\bposter="([^"]+)"/g), (match) => match[1]);
  const mediaPaths = [...imagePaths, ...posterPaths];
  mediaCount += mediaPaths.length;
}

console.log(`${htmlFiles.length} pages et ${mediaCount} médias référencés dans l'export.`);
