export const filterDefinitions = [
  { id: "all", label: "Tout voir" },
  { id: "mariages", label: "Mariages" },
  { id: "entreprises", label: "Entreprises" },
  { id: "soirees", label: "Anniversaires & soirées" },
  { id: "photobooth", label: "Photobooth" },
  { id: "miroir", label: "Miroirbooth" },
  { id: "360", label: "360 Booth" },
  { id: "vogue", label: "VogueBooth" },
  { id: "coulisses", label: "Coulisses" },
];
export const isPublishable = (item) =>
  item?.rights?.status === "owner_confirmed" &&
  item?.provenance?.kind === "real";
export function selectPortfolio(manifest) {
  const byId = new Map(
    manifest.assets.filter(isPublishable).map((item) => [item.id, item]),
  );
  return manifest.portfolio.map((id) => byId.get(id)).filter(Boolean);
}
export const filterMedia = (items, filter = "all") =>
  items.filter((item) => filter === "all" || item.tags.includes(filter));
export const availableFilters = (items) =>
  filterDefinitions.filter(
    (filter) => filter.id === "all" || filterMedia(items, filter.id).length > 0,
  );
export const formatDuration = (seconds) =>
  seconds
    ? `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`
    : "";
export function automaticPlaybackAllowed({
  reducedMotion = false,
  saveData = false,
  effectiveType,
} = {}) {
  return (
    !reducedMotion && !saveData && !["slow-2g", "2g"].includes(effectiveType)
  );
}
export function createPlaybackCoordinator(canAutomaticallyPlay = () => true) {
  const players = new Set();
  let active = null;
  const stop = (node) => {
    node.pause();
    if (active?.node === node) active = null;
  };
  const pauseAll = () => {
    for (const node of players) node.pause();
    active = null;
  };
  return {
    register(node) {
      players.add(node);
      return () => {
        stop(node);
        players.delete(node);
      };
    },
    claim(node, { manual = false } = {}) {
      if (!manual && !canAutomaticallyPlay()) return false;
      if (
        !manual &&
        active &&
        active.node !== node &&
        active.manual &&
        !active.node.paused &&
        !active.node.ended
      )
        return false;
      for (const other of players)
        if (other !== node && !other.paused) other.pause();
      active = { node, manual };
      return true;
    },
    stop,
    pauseAll,
  };
}
export function trackPortfolio(event, label, extra = {}) {
  if (typeof window !== "undefined")
    window.mySelfieBoothTrack?.(event, {
      event_category: "portfolio",
      event_label: label,
      page_path: "/realisations/",
      ...extra,
    });
}
// Editorial evidence stays in the build manifest, outside the public client bundle.
export function preparePublicShowroom(manifest) {
  const assets = manifest.assets.filter(isPublishable).map((item) => ({
    id: item.id,
    type: item.type,
    title: item.title,
    description: item.description,
    alt: item.alt,
    tags: item.tags,
    machine: item.machine,
    duration: item.delivery.duration || item.duration,
    src: item.src,
    poster: item.poster,
    ...(item.previewSrc ? { previewSrc: item.previewSrc } : {}),
    ...(item.variants ? { variants: item.variants } : {}),
    delivery: {
      width: item.delivery.width,
      height: item.delivery.height,
      hasAudio: item.delivery.hasAudio,
    },
  }));
  const ids = new Set(assets.map((item) => item.id));
  for (const id of [
    manifest.page.hero,
    manifest.page.showreel,
    manifest.page.final,
    "sephora-extrait",
  ]) {
    if (!ids.has(id))
      throw new Error(
        `Required media is not cleared for public display: ${id}`,
      );
  }
  return {
    assets,
    portfolio: manifest.portfolio.filter((id) => ids.has(id)),
    initialVisible: manifest.initialVisible,
    page: manifest.page,
    stories: manifest.stories
      .filter((story) => ids.has(story.mediaId))
      .map((story) => ({
        ...story,
        supplements: (story.supplements || [])
          .filter(isPublishable)
          .map((photo) => ({ src: photo.src, alt: photo.alt })),
      })),
    guests: manifest.guests.filter((id) => ids.has(id)),
    backstage: manifest.backstage.filter((id) => ids.has(id)),
    experiences: manifest.experiences.filter((item) => ids.has(item.mediaId)),
  };
}
