import { getImageSlot } from "../data/imageSlots";

export default function ImageSlot({ slotId, className = "", loading = "lazy" }) {
  const slot = getImageSlot(slotId);

  if (!slot) {
    return null;
  }

  const style = { aspectRatio: slot.ratio };

  if (!slot.src) {
    return (
      <div
        className={`image-slot is-empty ${className}`}
        style={style}
        aria-label={slot.usage}
      >
        <span>Visuel réel à ajouter</span>

        <style jsx>{`
          .image-slot {
            position: relative;
            display: grid;
            place-items: center;
            width: 100%;
            overflow: hidden;
            border: 1px solid rgba(184, 145, 63, 0.28);
            border-radius: 8px;
            background:
              linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(228, 207, 145, 0.18)),
              #f7f3ea;
          }

          span {
            max-width: 72%;
            color: #5d5a52;
            font-size: 0.88rem;
            font-weight: 900;
            line-height: 1.35;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <figure className={`image-slot ${className}`} style={style}>
      <img src={slot.src} alt={slot.alt} loading={loading} />
      {slot.note && <figcaption>{slot.note}</figcaption>}

      <style jsx>{`
        .image-slot {
          position: relative;
          width: 100%;
          margin: 0;
          overflow: hidden;
          border-radius: 8px;
          background: #111;
        }

        img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        figcaption {
          position: absolute;
          right: 12px;
          bottom: 12px;
          max-width: calc(100% - 24px);
          padding: 7px 10px;
          border-radius: 999px;
          color: #fff;
          background: rgba(0, 0, 0, 0.62);
          font-size: 0.75rem;
          line-height: 1.25;
        }
      `}</style>
    </figure>
  );
}
