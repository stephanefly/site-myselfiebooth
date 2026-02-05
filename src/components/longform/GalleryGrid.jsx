import Image from "next/image";

export default function GalleryGrid({ images = [] }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.src} className="tile">
          <Image
            src={image.src}
            alt={image.alt}
            width={900}
            height={700}
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
      <style jsx>{`
        .gallery {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
        .tile {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
}
