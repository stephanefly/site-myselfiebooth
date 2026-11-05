import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Contract for currently approved public prices. Update only after validating the CRM catalogue.
// A draft SEO change must never silently change commercial rates or pack discounts.
function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}
function contains(source, snippet, label) {
  assert.ok(source.includes(snippet), `${label}: expected public price ${JSON.stringify(snippet)}`);
}
const catalog = read("src/data/catalog.js");
const machineContent = read("src/components/machines/content.js");
const home = read("src/data/home.js");
const landing = read("src/pages/prix-photobooth-ile-de-france-2026.jsx");
const local = read("src/pages/location-photobooth/[slug].jsx");
const localPage = read("src/components/local/LocalAreaPage.jsx");

function catalogItem(key) {
  const start = catalog.indexOf(`key: "${key}",`);
  assert.ok(start >= 0, `Catalogue: missing ${key}`);
  const end = catalog.indexOf("bookingUrl:", start);
  assert.ok(end > start, `Catalogue: missing booking URL for ${key}`);
  return catalog.slice(start, end);
}

const machinePrices = [
  { key: "photobooth", first: 400, display: "5 h : 400 €", next: "miroirbooth", rates: [["5 heures", 400]] },
  { key: "miroirbooth", first: 450, display: "3 h : 450 € · 5 h : 500 €", next: "videobooth", rates: [["3 heures", 450], ["5 heures", 500]] },
  { key: "voguebooth", first: 550, display: "5 h : 550 €", next: "ipadbooth", rates: [["5 heures", 550]] },
];

for (const entry of machinePrices) {
  const item = catalogItem(entry.key);
  contains(item, `priceFrom: ${entry.first}`, `Catalogue ${entry.key}`);
  contains(item, `catalogPrice: "${entry.display}"`, `Catalogue ${entry.key}`);
  const start = machineContent.indexOf(`  ${entry.key}: {`);
  const end = machineContent.indexOf(`\n  ${entry.next}: {`, start);
  assert.ok(start >= 0 && end > start, `Fiche machine: missing ${entry.key}`);
  const machine = machineContent.slice(start, end);
  for (const [duration, price] of entry.rates) {
    assert.match(
      machine,
      new RegExp(`duration: "${duration}",\\s*price: ${price},`),
      `Fiche ${entry.key}: mismatch for ${duration}`,
    );
  }
}

const voguePack = catalogItem("vogue-premium");
contains(voguePack, 'price: "À partir de 700 euros"', "Pack Vogue Premium");
contains(voguePack, 'oldPrice: "800 € séparément"', "Pack Vogue Premium");
contains(voguePack, 'saving: "100 € économisés"', "Pack Vogue Premium");
contains(home, 'photobooth: "400 € pour 5 h"', "Accueil");
contains(home, 'miroirbooth: "À partir de 450 euros"', "Accueil");
contains(home, 'voguebooth: "À partir de 550 euros"', "Accueil");
contains(landing, '"Photobooth — 400 € / 5 h"', "Page tarifs");
contains(landing, '"Miroirbooth — dès 450 €"', "Page tarifs");
contains(landing, '"Vogue Booth — dès 550 €"', "Page tarifs");
contains(local, "Photobooth : 400 € / 5 h", "Fiches locales");
contains(localPage, "Photobooth : 400 € pour 5 h", "FAQ locale");
console.log("Public prices check OK: Photobooth, Miroirbooth, Vogue Booth and Vogue Premium pack.");
