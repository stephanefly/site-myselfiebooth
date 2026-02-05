import Head from "next/head";

export default function FAQAccordion({ items = [] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {items.length > 0 && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
      )}
      <div className="faq">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
        <style jsx>{`
          .faq {
            display: grid;
            gap: 1rem;
          }
          details {
            background: #fff;
            border-radius: 14px;
            padding: 1rem 1.2rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }
          summary {
            font-weight: 600;
            cursor: pointer;
          }
          summary::-webkit-details-marker {
            display: none;
          }
          p {
            margin-top: 0.7rem;
            color: #555;
          }
        `}</style>
      </div>
    </>
  );
}
