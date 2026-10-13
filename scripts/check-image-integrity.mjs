import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

function imageFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return imageFiles(file);
    return /\.(webp|png|jpe?g|gif)$/i.test(entry.name) ? [file] : [];
  });
}

const files = imageFiles("public");
const errors = [];
for (const file of files) {
  try {
    // Decode the actual pixels: a valid filename, header or HTTP 200 is insufficient.
    await sharp(file, { failOn: "warning" }).raw().toBuffer();
  } catch (error) {
    errors.push(`${file}: ${error.message}`);
  }
}
if (errors.length) {
  console.error(`Images illisibles ou tronquées :\n${errors.join("\n")}`);
  process.exit(1);
}
console.log(`Intégrité image OK : ${files.length} fichiers entièrement décodés.`);
