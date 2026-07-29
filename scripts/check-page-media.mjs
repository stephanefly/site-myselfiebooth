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

const findings = [];
let mediaCount = 0;
const htmlFiles = listHtmlFiles(outDirectory);

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");
  const imagePaths = Array.from(html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g), (match) => match[1]);
  const posterPaths = Array.from(html.matchAll(/<video\b[^>]*\bposter="([^"]+)"/g), (match) => match[1]);
  const mediaPaths = [...imagePaths, ...posterPaths];
  const counts = new Map();
  mediaCount += mediaPaths.length;

  for (const mediaPath of mediaPaths) {
    counts.set(mediaPath, (counts.get(mediaPath) || 0) + 1);
  }

  for (const [mediaPath, count] of counts.entries()) {
    if (count > 1) {
      findings.push({
        page: path.relative(outDirectory, htmlFile).replaceAll("\\", "/"),
        mediaPath,
        count,
      });
    }
  }
}

if (findings.length) {
  console.error("Export refusé : un même fichier visuel apparaît plusieurs fois sur une page.");
  for (const finding of findings) {
    console.error(`${finding.page} : ${finding.count} × ${finding.mediaPath}`);
  }
  process.exit(1);
}

console.log(`${htmlFiles.length} pages et ${mediaCount} médias contrôlés, aucun fichier répété sur une page.`);
