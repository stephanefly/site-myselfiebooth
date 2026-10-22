import { useEffect, useRef, useState } from "react";
import { useVideoPolicy } from "./VideoProvider";
import { trackPortfolio } from "./model.mjs";
import { Play, Pause, Sound } from "./icons";
import styles from "./Showroom.module.css";

export default function VideoSurface({
  media,
  poster,
  mode = "preview",
  hovered = false,
  priority = false,
  startOnMount = false,
  fit = "cover",
  className = "",
}) {
  const host = useRef(null),
    player = useRef(null),
    manual = useRef(startOnMount),
    tracked = useRef(false);
  const [visible, setVisible] = useState(false),
    [attached, setAttached] = useState(false),
    [playing, setPlaying] = useState(false),
    [ready, setReady] = useState(false),
    [failed, setFailed] = useState(false),
    [muted, setMuted] = useState(true),
    [stopped, setStopped] = useState(false);
  const { automatic, hover, coordinator } = useVideoPolicy();
  const isVideo = media.type === "video";
  const autoRequested =
    mode === "background"
      ? automatic && !stopped
      : mode === "preview" && hovered && hover && automatic;
  const shouldPlay = visible && !failed && (manual.current || autoRequested);
  const source = mode === "player" ? media.src : media.previewSrc || media.src;
  useEffect(() => {
    const target = host.current;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(entry.isIntersecting && entry.intersectionRatio > 0.08),
      { threshold: [0, 0.1, 0.3] },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isVideo && shouldPlay) setAttached(true);
  }, [isVideo, shouldPlay]);
  useEffect(() => {
    if (!attached || !player.current) return undefined;
    const node = player.current,
      unregister = coordinator.register(node);
    return () => {
      unregister();
      node.removeAttribute("src");
      node.load();
    };
  }, [attached, coordinator, source]);
  useEffect(() => {
    const node = player.current;
    if (!node || !attached) return;
    if (!shouldPlay) {
      coordinator.stop(node);
      return;
    }
    if (coordinator.claim(node, { manual: manual.current }))
      node.play().catch(() => {
        setPlaying(false);
      });
  }, [attached, shouldPlay, coordinator]);
  const start = () => {
    manual.current = true;
    setStopped(false);
    if (attached && player.current) {
      if (coordinator.claim(player.current, { manual: true }))
        player.current.play().catch(() => setPlaying(false));
    } else setAttached(true);
  };
  const toggle = () => {
    if (playing) {
      manual.current = false;
      setStopped(true);
      coordinator.stop(player.current);
    } else start();
  };
  const onPlay = () => {
    if (mode === "player") manual.current = true;
    if (!coordinator.claim(player.current, { manual: manual.current })) {
      player.current.pause();
      return;
    }
    setPlaying(true);
    if (manual.current && !tracked.current) {
      tracked.current = true;
      trackPortfolio("portfolio_video_play", media.title, {
        media_id: media.id,
      });
    }
  };
  return (
    <div
      ref={host}
      className={`${styles.surface} ${className}`}
      data-media-id={media.id}
      data-media-type={media.type}
      style={{ "--media-fit": fit }}
    >
      <img
        className={styles.poster}
        src={poster || media.poster || media.src}
        alt={media.alt || media.description}
        width={media.delivery?.width || media.width}
        height={media.delivery?.height || media.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        data-no-load-motion
      />
      {isVideo && attached && !failed && (
        <video
          ref={player}
          className={`${styles.video} ${ready ? styles.ready : ""}`}
          src={source}
          preload="none"
          playsInline
          muted={muted}
          loop={mode !== "player"}
          controls={mode === "player"}
          aria-label={media.title}
          onLoadedData={() => setReady(true)}
          onPlay={onPlay}
          onPause={() => setPlaying(false)}
          onVolumeChange={() => setMuted(player.current?.muted ?? true)}
          onEnded={() => {
            setPlaying(false);
            manual.current = false;
          }}
          onError={() => {
            setFailed(true);
            setPlaying(false);
            coordinator.stop(player.current);
          }}
          data-no-load-motion
        />
      )}
      {isVideo && mode === "player" && !attached && !failed && (
        <button
          type="button"
          className={styles.largePlay}
          onClick={start}
          aria-label={`Lire : ${media.title}`}
        >
          <Play />
          <span>Lire le film</span>
        </button>
      )}
      {isVideo &&
        mode === "player" &&
        attached &&
        muted &&
        playing &&
        media.delivery?.hasAudio && (
          <button
            type="button"
            className={styles.sound}
            onClick={() => {
              setMuted(false);
              player.current.muted = false;
            }}
          >
            <Sound />
            Activer le son
          </button>
        )}
      {isVideo && mode === "background" && !failed && (
        <button
          type="button"
          className={styles.motionControl}
          onClick={toggle}
          aria-label={
            playing ? "Mettre la vidéo en pause" : "Lire l’aperçu vidéo"
          }
        >
          {playing ? <Pause /> : <Play />}
          <span>{playing ? "Pause" : "Lire l’aperçu"}</span>
        </button>
      )}
      {failed && mode === "player" && (
        <div className={styles.videoError} role="status">
          Lecture indisponible ici.{" "}
          <a href={media.src} target="_blank" rel="noopener noreferrer">
            Ouvrir la vidéo
          </a>
        </div>
      )}
    </div>
  );
}
