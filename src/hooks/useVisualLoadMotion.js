import { useEffect } from "react";

const motionOffsets = ["-8px", "0px", "8px", "0px"];

export default function useVisualLoadMotion(routeKey) {
  useEffect(() => {
    const media = [...document.querySelectorAll("img, video")].filter(
      (element) => !element.hasAttribute("data-no-load-motion")
    );
    const cleanups = [];
    const timeoutIds = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    media.forEach((element, index) => {
      element.classList.add("visual-loading");
      element.style.setProperty("--visual-load-delay", `${(index % 6) * 45}ms`);
      element.style.setProperty("--visual-load-x", motionOffsets[index % motionOffsets.length]);

      let revealed = false;

      const reveal = () => {
        if (revealed) {
          return;
        }

        revealed = true;

        if (reducedMotion) {
          element.classList.add("is-visual-loaded");
          return;
        }

        const timeoutId = window.setTimeout(() => {
          element.classList.add("is-visual-loaded");
        }, 40);
        timeoutIds.push(timeoutId);
      };

      const isReady =
        element.tagName === "IMG"
          ? element.complete && element.naturalWidth > 0
          : element.readyState >= 2 || Boolean(element.poster);

      if (isReady) {
        reveal();
      } else {
        const readyEvent = element.tagName === "IMG" ? "load" : "loadeddata";
        element.addEventListener(readyEvent, reveal, { once: true });
        element.addEventListener("error", reveal, { once: true });
        cleanups.push(() => {
          element.removeEventListener(readyEvent, reveal);
          element.removeEventListener("error", reveal);
        });
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [routeKey]);
}
