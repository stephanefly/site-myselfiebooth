import { useEffect, useRef, useState } from "react";
import VideoSurface from "./VideoSurface";
import { Arrow } from "./icons";
import styles from "./Showroom.module.css";
export default function MediaViewer({
  selection,
  onClose,
  onMove,
  byId,
  contactUrl,
  quoteUrl,
}) {
  const dialog = useRef(null);
  const [supplement, setSupplement] = useState(null);
  const active = selection ? byId[selection.id] : null;
  const index = selection?.playlist.indexOf(selection.id) ?? -1;
  const move = (direction) => {
    if (!selection || selection.playlist.length < 2) return;
    onMove(
      selection.playlist[
        (index + direction + selection.playlist.length) %
          selection.playlist.length
      ],
    );
  };
  useEffect(() => {
    setSupplement(null);
  }, [selection?.id]);
  useEffect(() => {
    if (!selection) return undefined;
    const node = dialog.current,
      trigger = selection.trigger,
      previous = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = previous;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [Boolean(selection)]);
  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby="showroom-viewer-title"
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
      onKeyDown={(event) => {
        if (event.target.tagName === "VIDEO") return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      <div className={styles.dialogTop}>
        <h2 id="showroom-viewer-title">
          {active?.title || "Une réalisation MySelfieBooth"}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la réalisation"
          autoFocus
        >
          Fermer <span aria-hidden="true">×</span>
        </button>
      </div>
      {active && (
        <>
          <div
            className={styles.dialogMedia}
            key={`${active.id}-${supplement?.src || "main"}`}
          >
            {supplement ? (
              <img
                src={supplement.src}
                alt={supplement.alt}
                width="900"
                height="1200"
                data-no-load-motion
              />
            ) : (
              <VideoSurface
                media={active}
                mode="player"
                startOnMount={active.type === "video"}
                fit="contain"
              />
            )}
          </div>
          <div className={styles.dialogDetails}>
            <div>
              <p className={styles.eyebrow}>
                {active.machine || "Le moment en images"}
              </p>
              <p>{active.description}</p>
              {selection.supplements?.length > 0 && (
                <div className={styles.supplementButtons}>
                  <button
                    type="button"
                    aria-pressed={!supplement}
                    onClick={() => setSupplement(null)}
                  >
                    Le film
                  </button>
                  {selection.supplements.map((photo, i) => (
                    <button
                      key={photo.src}
                      type="button"
                      aria-pressed={supplement?.src === photo.src}
                      onClick={() => setSupplement(photo)}
                    >
                      Photo {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              className={styles.primaryButton}
              href={contactUrl}
              data-event="contact_click"
            >
              Imaginer mon événement <Arrow />
            </a>
          </div>
          <div className={styles.dialogNavigation}>
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={selection.playlist.length < 2}
              aria-label="Réalisation précédente"
            >
              ←
            </button>
            <span aria-live="polite">
              {index + 1} / {selection.playlist.length}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={selection.playlist.length < 2}
              aria-label="Réalisation suivante"
            >
              →
            </button>
            <a href={quoteUrl} data-event="cta_quote_click">
              Demander un devis <Arrow />
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
