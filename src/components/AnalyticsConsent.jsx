import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "myselfiebooth-analytics-consent";
const OPEN_EVENT = "myselfiebooth:open-cookie-settings";

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState("loading");

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(STORAGE_KEY);
    setChoice(storedChoice === "accepted" || storedChoice === "refused" ? storedChoice : "pending");

    const openSettings = () => setChoice("pending");
    window.addEventListener(OPEN_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_EVENT, openSettings);
  }, []);

  const saveChoice = (nextChoice) => {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
  };

  return (
    <>
      {choice === "accepted" ? (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-4297YBLGR6"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-4297YBLGR6', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {choice === "pending" ? (
        <section className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title">
          <div>
            <strong id="cookie-consent-title">Mesure d'audience</strong>
            <p>
              Nous utilisons Google Analytics uniquement avec votre accord pour comprendre les pages consultées.
              <a href="/privacy-policy/"> En savoir plus</a>
            </p>
          </div>
          <div className="cookie-consent-actions">
            <button type="button" onClick={() => saveChoice("refused")}>Refuser</button>
            <button type="button" onClick={() => saveChoice("accepted")}>Accepter</button>
          </div>
        </section>
      ) : null}
    </>
  );
}
