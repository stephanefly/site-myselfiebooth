import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith(".html") ? [file] : [];
  });
}

// A CDN can cache a 404 if a visitor requests a new asset during deployment.
// Give the exported HTML a content version that avoids that stale response.
const versions = new Map();
for (const file of htmlFiles("out")) {
  const html = fs.readFileSync(file, "utf8");
  const updated = html.replace(/\b(src|href)="(\/_next\/[^"?]+\.(?:css|js))"/g, (match, attribute, url) => {
    if (!versions.has(url)) {
      const asset = path.join("out", decodeURIComponent(url.slice(1)));
      versions.set(url, createHash("sha256").update(fs.readFileSync(asset)).digest("hex").slice(0, 16));
    }
    return `${attribute}="${url}?v=${versions.get(url)}"`;
  });
  fs.writeFileSync(file, updated);
}
console.log(`Static asset URLs versioned: ${versions.size} local CSS/JS files.`);
