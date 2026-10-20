import { useEffect, useRef, useState } from "react";
import styles from "./MachinePage.module.css";

export default function MachineMotion({ media, onOpen, suspended }) {
  const stage = useRef(null);
  const video = useRef(null);
  const [inView, setInView] = useState(false);
  const [autoAllowed, setAutoAllowed] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [intent, setIntent] = useState("auto");
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection;
    const update = () =>
      setAutoAllowed(!motion.matches && !connection?.saveData);
    const visibility = () => setPageVisible(!document.hidden);
    update();
    visibility();
    motion.addEventListener("change", update);
    connection?.addEventListener?.("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      motion.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);

  const wanted =
    inView &&
    pageVisible &&
    !suspended &&
    (intent === "play" || (intent === "auto" && autoAllowed));

  useEffect(() => {
    if (wanted) setLoaded(true);
  }, [wanted]);

  useEffect(() => {
    const element = video.current;
    if (!element) return undefined;
    if (wanted) {
      element.play().catch(() => setPlaying(false));
    } else {
      element.pause();
    }
    return () => element.pause();
  }, [loaded, wanted, intent]);

  return (
    <figure
      className={`${styles.galleryCard} ${styles.motionCard}`}
      data-reveal
      data-preview={media.preview}
      data-preview-state={playing ? "playing" : "paused"}
    >
      <p className={styles.galleryRole}>{media.label}</p>
      <div ref={stage} className={styles.motionStage}>
        <img
          src={media.src}
          alt={media.alt}
          width="480"
          height="720"
          loading="lazy"
          decoding="async"
        />
        {loaded && (
          <video
            ref={video}
            src={media.preview}
            muted
            loop
            playsInline
            preload="none"
            aria-label={media.videoLabel}
            style={{ opacity: hasFrame ? 1 : 0 }}
            onLoadedData={() => setHasFrame(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        )}
        <div className={styles.motionControls}>
          <button
            type="button"
            onClick={() => {
              setInView(true);
              setIntent(playing ? "pause" : "play");
              if (playing) video.current?.pause();
              else video.current?.play().catch(() => setPlaying(false));
            }}
            aria-label={`${playing ? "Pause" : "Lire l’aperçu"} : ${media.caption}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              {playing ? (
                <path d="M5 3h3v14H5zm7 0h3v14h-3z" />
              ) : (
                <path d="m5 3 12 7-12 7z" />
              )}
            </svg>
            {playing ? "Pause" : "Lire l’aperçu"}
          </button>
          <button
            type="button"
            onClick={() => onOpen(media)}
            aria-label={`Agrandir la vidéo : ${media.caption}`}
          >
            Agrandir <span aria-hidden="true">＋</span>
          </button>
        </div>
      </div>
      <figcaption>
        <strong>{media.caption}</strong>
      </figcaption>
    </figure>
  );
}
