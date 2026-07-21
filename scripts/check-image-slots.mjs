import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const registryPath = join(root, "src", "data", "imageSlots.json");
const slots = JSON.parse(readFileSync(registryPath, "utf8"));

const ids = new Set();
const summary = {
  real: 0,
  ai: 0,
  manual: 0,
  emptyManual: 0,
};
const errors = [];
const warnings = [];

for (const slot of slots) {
  if (!slot.id) {
    errors.push("Un slot n'a pas d'identifiant.");
    continue;
  }

  if (ids.has(slot.id)) {
    errors.push(`Identifiant dupliqué: ${slot.id}`);
  }
  ids.add(slot.id);

  if (!slot.page) {
    errors.push(`${slot.id}: page manquante.`);
  }

  if (!slot.ratio) {
    errors.push(`${slot.id}: ratio manquant.`);
  }

  if (!slot.usage) {
    errors.push(`${slot.id}: description d'usage manquante.`);
  }

  if (!["real", "ai", "manual"].includes(slot.kind)) {
    errors.push(`${slot.id}: kind invalide (${slot.kind}).`);
  } else {
    summary[slot.kind] += 1;
  }

  if (slot.src) {
    const relativePath = slot.src.replace(/^\//, "");
    const absolutePath = join(root, "public", relativePath);

    if (!existsSync(absolutePath)) {
      errors.push(`${slot.id}: fichier introuvable ${slot.src}`);
    }

    if (!slot.alt && slot.kind !== "manual") {
      errors.push(`${slot.id}: alt manquant pour une image déclarée.`);
    }
  }

  if (slot.kind === "manual" && !slot.src) {
    summary.emptyManual += 1;
    warnings.push(`${slot.id}: emplacement manuel encore vide.`);
  }
}

console.log(
  `Image slots: ${slots.length} total, ${summary.real} réels, ${summary.ai} IA, ${summary.manual} manuels, ${summary.emptyManual} à fournir.`
);

for (const warning of warnings) {
  console.warn(`warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`error: ${error}`);
  }
  process.exit(1);
}
