import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Validate the production export after npm run build.
const html = readFileSync("out/realisations/index.html", "utf8");
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert.ok(main, "The portfolio must render inside main");
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Exactly one H1");
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/myselfiebooth-paris.fr\/realisations\/"/,
);
const schemas = [
  ...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]));
assert.ok(schemas.some((schema) => schema["@type"] === "CollectionPage"));
assert.ok(
  !/<video\b|<source[^>]+\.mp4/.test(main),
  "Videos must wait for visitor interaction",
);
assert.match(main, /<dialog[^>]+aria-labelledby="rl-viewer-title"/);
assert.match(
  main,
  /role="group" aria-label="Filtrer les réalisations par événement"/,
);
assert.equal(
  [...main.matchAll(/class="rl-project(?: [^"]*)?"/g)].length,
  7,
  "All selected events must be visible before filtering",
);
for (const id of ["films", "tirages", "machines", "avis-reels"]) {
  assert.ok(main.includes(`id="${id}"`), `Preserve the existing ${id} anchor`);
}
const images = [...main.matchAll(/<img\b[^>]+src="([^"]+)"/g)].map(
  (match) => match[1],
);
assert.equal(images.length, new Set(images).size, "No duplicated photograph");
assert.ok(
  !images.some((source) => /ai-from-real|ai-cards/.test(source)),
  "Use event photographs for the portfolio",
);
assert.match(main, /loading="eager" fetchPriority="high"/i);
assert.ok(!/Image IA|Mises? en scène IA|généré par IA/.test(main));
assert.ok(!main.includes("700+"), "No unnecessary commercial counter");
assert.match(main, /href="https:\/\/reservation.myselfiebooth-paris.fr\/"/);
console.log(
  `Portfolio export validated: seven events, ${images.length} unique photographs, preserved anchors, canonical and CollectionPage, accessible viewer/filter markup, and no video download before interaction.`,
);
