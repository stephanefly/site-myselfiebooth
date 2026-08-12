import { useEffect } from "react";
import { useRouter } from "next/router";
import { getMediaKind, getMediaLabel, isContentMedia } from "../data/mediaProvenance";

const SELECTOR = "img[src], video[poster]";

function mediaSource(element) {
  return element.tagName === "VIDEO"
    ? element.getAttribute("poster")
    : element.getAttribute("src");
}

function annotateMedia(root = document) {
  root.querySelectorAll(SELECTOR).forEach((element) => {
    const source = mediaSource(element);

    if (!isContentMedia(source)) return;

    const kind = getMediaKind(source);
    const label = getMediaLabel(source);
    const host = element.parentElement;

    element.dataset.mediaProvenance = kind;
    element.dataset.mediaKind = kind;
    element.dataset.mediaLabel = label;

    if (!host) return;

    host.classList.add("media-provenance-host");

    let badge = host.querySelector(":scope > .media-provenance-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "media-provenance-badge";
      badge.setAttribute("aria-hidden", "true");
      host.appendChild(badge);
    }

    if (badge.dataset.kind !== kind) badge.dataset.kind = kind;
    if (badge.textContent !== label) badge.textContent = label;
  });
}

export default function MediaProvenanceAnnotator() {
  const router = useRouter();

  useEffect(() => {
    let frame = window.requestAnimationFrame(() => annotateMedia());
    const observer = new MutationObserver(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => annotateMedia());
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "poster"],
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [router.asPath]);

  return null;
}
