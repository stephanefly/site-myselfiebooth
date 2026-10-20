import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";

// Guard commercial distinctions as well as the exported SEO and lazy media.
const offers = {
  photobooth: [400, "400 € pour 5 h", "Photobooth"],
  miroirbooth: [450, "450 € pour 3 h", "Miroirbooth"],
  videobooth: [400, "400 € pour 3 h", "360Booth"],
  air360booth: [400, "400 € pour 3 h", "360Airbooth"],
  voguebooth: [500, "500 € pour 5 h", "Voguebooth"],
  ipadbooth: [250, "250 € pour 24 à 48 h", "Ipadbooth"],
};
const decode = (s) =>
  s
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("<!-- -->", "");
const heroSources = new Set();

for (const [key, [price, label, booking]] of Object.entries(offers)) {
  const html = await readFile(`out/prestations/${key}/index.html`, "utf8");
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
  assert.equal([...main.matchAll(/<h1\b/g)].length, 1, `${key}: one H1`);
  assert.ok(
    html.includes(`href="https://myselfiebooth-paris.fr/prestations/${key}/"`),
    `${key}: canonical`,
  );
  assert.ok(main.includes(label), `${key}: advertised duration and price`);
  assert.ok(
    main.includes(`?prestations=${booking}`),
    `${key}: selected machine in quote link`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${key}: unique IDs`);
  for (const [, fragment] of main.matchAll(/href="#([^\"]+)"/g))
    assert.ok(ids.includes(fragment), `${key}: working fragment ${fragment}`);
  assert.ok(
    !/<video\b|<source\b/.test(main),
    `${key}: no video resource in the initial HTML`,
  );
  const images = [...main.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  assert.ok(
    images.length === 6,
    `${key}: hero and five gallery images without recommendation cards`,
  );
  const gallery = main.match(
    /<section id="experience"[^>]*>([\s\S]*?)<\/section>/,
  )?.[1];
  assert.ok(gallery, `${key}: machine gallery exists`);
  assert.equal(
    [...gallery.matchAll(/<figure\b/g)].length,
    5,
    `${key}: one gallery including personalization`,
  );
  assert.equal(
    [...main.matchAll(/<section\b/g)].length,
    3,
    `${key}: three main sections only`,
  );
  for (const anchor of [
    "personnalisation",
    "formules",
    "installation",
    "questions",
    "autres-experiences",
  ])
    assert.ok(
      ids.includes(anchor),
      `${key}: preserve existing anchor ${anchor}`,
    );
  const previews = [...gallery.matchAll(/data-preview="([^"]+)"/g)];
  assert.equal(
    previews.length,
    ["ipadbooth", "air360booth"].includes(key) ? 0 : 1,
    `${key}: only use verified motion footage`,
  );
  if (previews.length) {
    assert.equal(
      previews[0][1],
      `/videos/machines-premium/${key}-apercu.mp4`,
      `${key}: machine-specific preview`,
    );
    assert.ok(
      (await stat(`public${previews[0][1]}`)).size <= 350_000,
      `${key}: lightweight preview`,
    );
    await access(`public/videos/machines-premium/${key}-sequence.mp4`);
  }
  const wordCount = main
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  assert.ok(
    wordCount <= 550,
    `${key}: keep copy concise, including FAQ (${wordCount} words)`,
  );
  assert.ok(
    /fetchPriority="high"/.test(images[0]) && /srcSet=/.test(images[0]),
    `${key}: responsive priority hero`,
  );
  const src = images[0].match(/src="([^"]+)"/)[1];
  assert.ok(!heroSources.has(src), `${key}: unique hero`);
  heroSources.add(src);
  for (const image of images)
    assert.match(image, /alt="[^"]{15,}"/, `${key}: descriptive alt`);
  for (const image of images.slice(1))
    assert.ok(image.includes('loading="lazy"'), `${key}: lazy secondary media`);
  const schemas = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
    ),
  ].map((m) => JSON.parse(m[1]));
  assert.equal(
    schemas.find((s) => s["@type"] === "Service").offers.price,
    String(price),
    `${key}: catalogue price in schema`,
  );
  const questions = [...main.matchAll(/<summary[^>]*>(.*?)<\/summary>/g)].map(
    (m) => decode(m[1].replace(/<[^>]*>/g, "")),
  );
  assert.equal(questions.length, 5, `${key}: dedicated FAQ`);
  assert.deepEqual(
    schemas.find((s) => s["@type"] === "FAQPage").mainEntity.map((q) => q.name),
    questions,
    `${key}: visible FAQ and schema agree`,
  );
  if (key === "ipadbooth")
    assert.match(
      main,
      /sans tirages|sans impression photo/,
      "iPad: digital offer is explicit",
    );
  if (key === "voguebooth") {
    assert.match(
      main,
      /Photographe, impressions et décoration additionnelle en option/,
      "Vogue: optional photography is explicit",
    );
    assert.match(
      main,
      /900 € HT/,
      "Vogue: preserve existing corporate starting price",
    );
  }
  if (["videobooth", "air360booth"].includes(key))
    assert.match(
      main,
      /selon configuration|selon la configuration/,
      "360: qualify capacity",
    );
  assert.doesNotMatch(
    main,
    /Mises en scène IA|Image IA|images? générées? par|témoignage fictif/i,
    `${key}: customer-facing copy`,
  );
}
console.log(
  "Machine pages OK: 6 offers, three sections, unified galleries, lightweight previews, SEO, FAQ, anchors and concise copy.",
);
