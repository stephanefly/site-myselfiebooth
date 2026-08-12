import { readFile, readdir } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";

const root = process.cwd();
const outDir = resolve(root, "out");
const canonicalOrigin = "https://myselfiebooth-paris.fr";

async function walkHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkHtml(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function textMatch(html, regex) {
  const match = html.match(regex);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function attributeMatch(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, "i"));
  return match ? match[1].trim() : "";
}

function hasAttribute(tag, name) {
  return new RegExp(`\\s${name}(?:=|\\s|>)`, "i").test(tag);
}

function routeFromFile(file) {
  const rel = relative(outDir, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel === "404.html") return "/404/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel.replace(/\.html$/, "/")}`;
}

function normalizeInternalHref(href) {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return null;
  const clean = href.split(/[?#]/)[0];
  if (!clean || clean === "/") return "/";
  if (/\.(?:ico|xml|txt|json|webmanifest|png|jpe?g|webp|gif|svg|mp4|webm|pdf|css|js|woff2?)$/i.test(clean)) {
    return null;
  }
  return clean.endsWith("/") ? clean : `${clean}/`;
}

const htmlFiles = await walkHtml(outDir);
const pages = [];
const errors = [];
const warnings = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = routeFromFile(file);
  const robots = textMatch(html, /<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || textMatch(html, /<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']robots["'][^>]*>/i);
  const noindex = /\bnoindex\b/i.test(robots);
  const title = textMatch(html, /<title>([\s\S]*?)<\/title>/i);
  const description = textMatch(html, /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || textMatch(html, /<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const canonical = textMatch(html, /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
    || textMatch(html, /<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const ogImage = textMatch(html, /<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || textMatch(html, /<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["'][^>]*>/i);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (!title) errors.push(`${route}: balise <title> absente.`);
  if (!description) errors.push(`${route}: meta description absente.`);

  if (!noindex) {
    if (!canonical) {
      errors.push(`${route}: URL canonique absente.`);
    } else if (!canonical.startsWith(canonicalOrigin)) {
      errors.push(`${route}: canonique hors domaine principal (${canonical}).`);
    } else if (canonical.startsWith("https://www.")) {
      errors.push(`${route}: canonique en www alors que le domaine canonique est sans www.`);
    }

    if (!ogImage) errors.push(`${route}: image Open Graph absente.`);
    if (h1Count !== 1) warnings.push(`${route}: ${h1Count} balise(s) H1 détectée(s), 1 recommandée.`);
  }

  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  imgTags.forEach((tag, index) => {
    if (!hasAttribute(tag, "alt")) {
      errors.push(`${route}: image #${index + 1} sans attribut alt.`);
    }
  });

  const hrefs = (html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) || [])
    .map((tag) => attributeMatch(tag, "href"))
    .filter(Boolean);

  pages.push({ route, noindex, title, description, hrefs });
}

const indexablePages = pages.filter((page) => !page.noindex);
const titleOwners = new Map();
const descriptionOwners = new Map();

for (const page of indexablePages) {
  if (page.title) {
    const key = page.title.toLowerCase();
    const owner = titleOwners.get(key);
    if (owner) errors.push(`Titre dupliqué entre ${owner} et ${page.route}: “${page.title}”.`);
    else titleOwners.set(key, page.route);
  }

  if (page.description) {
    const key = page.description.toLowerCase();
    const owner = descriptionOwners.get(key);
    if (owner) warnings.push(`Meta description dupliquée entre ${owner} et ${page.route}.`);
    else descriptionOwners.set(key, page.route);
  }
}

const availableRoutes = new Set(pages.map((page) => page.route));
for (const page of pages) {
  for (const href of page.hrefs) {
    const target = normalizeInternalHref(href);
    if (target && !availableRoutes.has(target)) {
      warnings.push(`${page.route}: lien interne à vérifier → ${href}`);
    }
  }
}

console.log(`SEO check: ${pages.length} pages HTML analysées, ${indexablePages.length} indexables.`);

if (warnings.length) {
  console.warn(`\n${warnings.length} avertissement(s) SEO :`);
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error(`\n${errors.length} erreur(s) SEO bloquante(s) :`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("SEO check OK: titres, descriptions, canoniques, partage social et attributs alt présents.");
