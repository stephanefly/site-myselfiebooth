import { useEffect, useRef } from "react";

export default function useRevealMotion(dependency) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const elements = [...root.querySelectorAll("[data-reveal]")];
    const revealAll = () => {
      elements.forEach((element) => element.classList.add("is-revealed"));
    };

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return undefined;
    }

    let observer;
    let safetyTimer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.08 }
      );

      elements.forEach((element) => observer.observe(element));
      root.classList.add("motion-ready");

      safetyTimer = window.setTimeout(revealAll, 1200);
    } catch (error) {
      root.classList.remove("motion-ready");
      revealAll();
    }

    return () => {
      if (safetyTimer) {
        window.clearTimeout(safetyTimer);
      }

      if (observer) {
        observer.disconnect();
      }

      root.classList.remove("motion-ready");
    };
  }, [dependency]);

  return rootRef;
}
