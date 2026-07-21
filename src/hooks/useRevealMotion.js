import { useEffect, useRef } from "react";

export default function useRevealMotion(dependency) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const elements = [...root.querySelectorAll("[data-reveal]")];
    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
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

    return () => observer.disconnect();
  }, [dependency]);

  return rootRef;
}
