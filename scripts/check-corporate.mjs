import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Run after npm run build. This checks the exported customer-facing page.
const html = readFileSync("out/evenements/corporates/index.html", "utf8");
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert.ok(main, "Corporate content must be exported inside main");
const decode = (value) =>
  value
    .replaceAll("&#x27;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("<!-- -->", "");
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Exactly one H1");
assert.match(decode(main), /Photobooth Corporate &amp;|Photobooth Corporate &/);
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/myselfiebooth-paris.fr\/evenements\/corporates\/"/,
);

const schemas = [
  ...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]));
const service = schemas.find((schema) => schema["@type"] === "Service");
assert.ok(service, "Describe the corporate service without invented offers");
assert.ok(!service.offers, "No fixed-price corporate offer");
const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
assert.ok(
  faq?.mainEntity.length >= 4,
  "A substantive corporate FAQ is required",
);
const summaries = [...main.matchAll(/<summary[^>]*>(.*?)<\/summary>/g)].map(
  (match) => decode(match[1].replace(/<span[^>]*>[\s\S]*?<\/span>/g, "")),
);
assert.deepEqual(
  faq.mainEntity.map((question) => question.name),
  summaries,
  "FAQ schema must match visible questions",
);

const sources = [...main.matchAll(/<img[^>]+src="([^"]+)"/g)].map(
  (match) => match[1],
);
assert.equal(
  sources.length,
  new Set(sources).size,
  "No repeated image on the corporate page",
);
assert.ok(
  !sources.some((source) => /mariage|wedding|maries/i.test(source)),
  "No wedding asset",
);
assert.ok(!/\b\d+\s*€/.test(main), "No fixed corporate price");
const quoteLinks = [
  ...main.matchAll(
    /<a\b[^>]+href="https:\/\/reservation.myselfiebooth-paris.fr\/"/g,
  ),
];
assert.ok(
  quoteLinks.length >= 7,
  "Quote CTAs at all strategic conversion points",
);
assert.match(main, /pas des modèles annoncés en stock/);
assert.match(main, /Visuels de projection/);
assert.match(main, /Sur le terrain — photographies réelles/);
assert.match(main, /inspirations IA issues du réel/);
console.log(
  `Corporate export validated: one H1, canonical, Service, ${summaries.length} visible/schema FAQs, ${sources.length} unique images and ${quoteLinks.length} reservation CTAs; no wedding asset or fixed price; explicit concept disclosures.`,
);
