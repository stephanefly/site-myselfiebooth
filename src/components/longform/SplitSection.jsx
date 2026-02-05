import Image from "next/image";

export default function SplitSection({
  title,
  text,
  image,
  imageAlt,
  reverse = false,
  cta,
}) {
  return (
    <div className={`split ${reverse ? "reverse" : ""}`}>
      <div className="split-text">
        <h3>{title}</h3>
        <p>{text}</p>
        {cta && (
          <a
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            className="split-cta"
          >
            {cta.label}
          </a>
        )}
      </div>
      <div className="split-image">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <style jsx>{`
        .split {
          display: grid;
          gap: 2rem;
          align-items: center;
        }
        .split h3 {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          margin-bottom: 0.6rem;
        }
        .split p {
          color: #555;
          font-size: 1.05rem;
        }
        .split-image {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
        }
        .split-cta {
          display: inline-block;
          margin-top: 1.2rem;
          color: #2b2100;
          background: linear-gradient(to right, #ffef96, #caa85f);
          padding: 10px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
        }
        @media (min-width: 900px) {
          .split {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .split.reverse {
            direction: rtl;
          }
          .split.reverse > * {
            direction: ltr;
          }
        }
      `}</style>
    </div>
  );
}
