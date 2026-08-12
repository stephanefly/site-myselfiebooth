import manifest from "./mediaProvenanceManifest.json";

export const MEDIA_KINDS = Object.freeze({
  REAL: "real",
  AI_FROM_REAL: "ai_from_real",
});

export const MEDIA_LABELS = Object.freeze({
  [MEDIA_KINDS.REAL]: "Image vraie",
  [MEDIA_KINDS.AI_FROM_REAL]: "Image IA issue du réel",
});

const AI_FROM_REAL_PATHS = new Set(manifest.map((item) => item.path));

const NON_CONTENT_PREFIXES = [
  "/icons/",
  "/logos/",
];

function pathname(value = "") {
  const source = String(value).split("?")[0].split("#")[0];

  if (source.startsWith("http://") || source.startsWith("https://")) {
    try {
      return new URL(source).pathname;
    } catch {
      return source;
    }
  }

  return source;
}

export function isContentMedia(value) {
  const source = pathname(value);
  return Boolean(source) && !NON_CONTENT_PREFIXES.some((prefix) => source.startsWith(prefix));
}

export function getMediaKind(value) {
  const source = pathname(value);

  if (AI_FROM_REAL_PATHS.has(source)) {
    return MEDIA_KINDS.AI_FROM_REAL;
  }

  return MEDIA_KINDS.REAL;
}

export function getMediaLabel(value) {
  return MEDIA_LABELS[getMediaKind(value)];
}
