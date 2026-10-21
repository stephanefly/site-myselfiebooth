import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { siteConfig } from "../data/site";

export default function MobileQuoteBar() {
  const { asPath } = useRouter();
  const [atPageEnd, setAtPageEnd] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setAtPageEnd(visible.size > 0);
    });
    document
      .querySelectorAll("[data-page-conclusion], .prefooter, footer#contact")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [asPath]);

  return (
    <div
      className="mobile-quote-bar"
      aria-label="Actions rapides"
      hidden={atPageEnd}
    >
      <a href={siteConfig.quoteUrl} data-event="cta_quote_click">
        {siteConfig.primaryCtaLabel}
      </a>
      <a href={siteConfig.phoneHref} data-event="phone_click">
        Appeler
      </a>

      <style jsx>{`
        .mobile-quote-bar {
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 1200;
          display: none;
          gap: 8px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(16px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
        }

        .mobile-quote-bar[hidden] {
          display: none;
        }

        a {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          border-radius: 999px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 900;
          line-height: 1.12;
          text-align: center;
          text-decoration: none;
        }

        a:first-child {
          color: #17130a;
          background: #e4cf91;
        }

        a:last-child {
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 760px) {
          .mobile-quote-bar {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
