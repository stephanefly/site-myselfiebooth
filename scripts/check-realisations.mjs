import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import {
  availableFilters,
  automaticPlaybackAllowed,
  createPlaybackCoordinator,
  filterMedia,
  isPublishable,
  selectPortfolio,
  preparePublicShowroom,
} from "../src/components/portfolio/showroom/model.mjs";
const manifest = JSON.parse(
  readFileSync("src/data/realisationsManifest.json", "utf8"),
);
const publicShowroom = preparePublicShowroom(manifest);
assert.equal(publicShowroom.assets.length, 25);
assert.ok(
  !/sourceHash|sourcePath|editorial|rights|P:\//.test(
    JSON.stringify(publicShowroom),
  ),
  "Editorial evidence and internal paths must stay outside the public page data",
);
const selected = selectPortfolio(manifest);
assert.equal(selected.length, 20);
assert.equal(selected.filter((item) => item.type === "video").length, 14);
assert.equal(
  selected
    .slice(0, manifest.initialVisible)
    .filter((item) => item.type === "video").length,
  7,
);
assert.equal(
  new Set(selected.map((item) => item.sourceFamily)).size,
  selected.length,
  "Do not count different encodings of one source as different portfolio entries",
);
assert.equal(availableFilters(selected).length, 9);
for (const filter of availableFilters(selected)) {
  const items = filterMedia(selected, filter.id);
  assert.ok(items.length > 0);
  if (filter.id !== "all")
    assert.ok(items.every((item) => item.tags.includes(filter.id)));
}
assert.equal(filterMedia(selected, "unknown").length, 0);
assert.equal(
  isPublishable({ ...selected[0], rights: { status: "unknown" } }),
  false,
);
assert.equal(
  isPublishable({ ...selected[0], provenance: { kind: "ai_generated" } }),
  false,
);
for (const asset of manifest.assets) {
  assert.ok(
    isPublishable(asset),
    `Uncleared provenance or rights: ${asset.id}`,
  );
  for (const path of [
    asset.sourcePath,
    asset.src,
    asset.poster,
    asset.previewSrc,
    ...Object.values(asset.variants || {}),
  ].filter(Boolean))
    assert.ok(existsSync("public" + path), path);
  assert.equal(
    createHash("sha256")
      .update(readFileSync("public" + asset.sourcePath))
      .digest("hex"),
    asset.sourceHash,
    `Original modified: ${asset.sourcePath}`,
  );
  assert.ok(asset.editorial.score >= 0 && asset.editorial.score <= 100);
}
assert.ok(automaticPlaybackAllowed());
for (const setting of [
  { reducedMotion: true },
  { saveData: true },
  { effectiveType: "2g" },
  { effectiveType: "slow-2g" },
])
  assert.equal(automaticPlaybackAllowed(setting), false);
let auto = true;
const coordinator = createPlaybackCoordinator(() => auto);
const player = () => ({
  paused: true,
  ended: false,
  pauses: 0,
  pause() {
    this.paused = true;
    this.pauses++;
  },
});
const a = player(),
  b = player();
const cleanA = coordinator.register(a),
  cleanB = coordinator.register(b);
assert.ok(coordinator.claim(a));
a.paused = false;
assert.ok(coordinator.claim(b, { manual: true }));
b.paused = false;
assert.equal(a.paused, true);
assert.equal(
  coordinator.claim(a),
  false,
  "A hover must not interrupt a manual film",
);
assert.ok(coordinator.claim(a, { manual: true }));
a.paused = false;
assert.equal(b.paused, true);
coordinator.pauseAll();
assert.ok(a.paused && b.paused);
auto = false;
assert.equal(coordinator.claim(a), false);
assert.ok(coordinator.claim(a, { manual: true }));
cleanA();
cleanB();

const html = readFileSync("out/realisations/index.html", "utf8");
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert.ok(main);
assert.equal([...main.matchAll(/<h1\b/g)].length, 1);
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/myselfiebooth-paris.fr\/realisations\/"/,
);
assert.match(main, /<dialog[^>]*aria-labelledby="showroom-viewer-title"/);
for (const id of [
  "films",
  "tirages",
  "machines",
  "avis-reels",
  "coulisses",
  "histoires",
  "entreprises",
])
  assert.ok(main.includes(`id="${id}"`), `Missing anchor: ${id}`);
assert.equal(
  (main.match(/data-portfolio-entry=/g) || []).length,
  10,
  "Only the first 10 portfolio entries must be initially rendered",
);
assert.ok(
  !/<video\b|<source\b/.test(main),
  "SSR must request no video before the policy and viewport checks",
);
assert.ok(
  !/ai-from-real|ai-cards|editorial-ai|page-visuals|collection-2026/.test(main),
  "No generated media in this page",
);
assert.match(main, /Voir plus de réalisations/);
assert.match(main, /href="\/evenements\/corporates\/"/);
assert.match(main, /href="https:\/\/reservation.myselfiebooth-paris.fr\/"/);
const schemas = [
  ...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
  ),
].map((m) => JSON.parse(m[1]));
const collection = schemas.find((s) => s["@type"] === "CollectionPage");
assert.equal(collection.mainEntity.itemListElement.length, 20);
assert.ok(
  !schemas.some((s) => s["@type"] === "AggregateRating"),
  "Do not invent an aggregate rating schema",
);
console.log(
  "Portfolio checks passed: 14/20 real videos, 7/10 initially, 9 nonempty filters, cleared rights, unchanged originals, valid routes/schema, one-player budget and motion/data preferences.",
);
