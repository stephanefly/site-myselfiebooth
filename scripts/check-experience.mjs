import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const routes = ["", "prestations/photobooth", "prestations/miroirbooth", "prestations/videobooth", "prestations/voguebooth", "options/phonebooth", "prestations", "paris", "location-photobooth/seine-et-marne"];
const decode = text => text.replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&quot;", '"').replaceAll("&amp;", "&").replaceAll("<!-- -->", "");
for (const route of routes) {
  const html = await readFile(path.join("out", route, "index.html"), "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate IDs: /${route}`);
  const breadcrumbs = [...html.matchAll(/<nav[^>]+aria-label="Fil d(?:’|&#x27;|')Ariane"/g)];
  assert.ok(breadcrumbs.length <= 1, `Duplicate breadcrumbs: /${route}`);
  const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const summaries = [...html.matchAll(/<summary[^>]*>(.*?)<\/summary>/g)].map(m => decode(m[1].replace(/<[^>]*>/g, "")));
  for (const schema of schemas.filter(s => s['@type'] === 'FAQPage')) {
    assert.deepEqual(schema.mainEntity.map(q => q.name), summaries, `FAQ markup must match visible questions: /${route}`);
  }
  if (route === 'prestations/photobooth') {
    const service = schemas.find(s => s['@type'] === 'Service');
    assert.equal(service.offers.price, '400');
    assert.ok(html.includes('400 € pour 5 h'));
    assert.ok(!html.includes('350 €') && !html.includes('450 €'));
  }
  if (route === '') {
    const heroVideo = html.match(/<video\b[^>]*>[\s\S]*?<\/video>/)?.[0];
    assert.ok(heroVideo, 'The home hero must include a video');
    for (const attribute of ['autoplay', 'loop', 'muted', 'playsinline']) {
      assert.match(heroVideo, new RegExp(`\\b${attribute}(?:[\\s=>])`, 'i'), `Hero video must have ${attribute}`);
    }
    assert.match(heroVideo, /<source[^>]+src="\/videos\/PUB_2024\.mp4"/, 'Load the hero video for automatic playback');
  }
}
console.log(`Experience check OK: ${routes.length} key pages, unique IDs, one breadcrumb, visible FAQ/schema parity and Photobooth 400 € / 5 h.`);
