import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "myselfiebooth-analytics-consent";
const OPEN_EVENT = "myselfiebooth:open-cookie-settings";
const CONSENT_EVENT = "myselfiebooth:analytics-consent-changed";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PDS7XZMK";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-4297YBLGR6";
const GTM_ENABLED = /^GTM-[A-Z0-9]+$/i.test(GTM_ID);

function updateGoogleConsent(choice) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const granted = choice === "accepted" ? "granted" : "denied";

  window.gtag("consent", "update", {
    analytics_storage: granted,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.dataLayer.push({
    event: "analytics_consent_update",
    analytics_consent: choice,
  });
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState("loading");

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const storedChoice = window.localStorage.getItem(STORAGE_KEY);
    const initialChoice =
      storedChoice === "accepted" || storedChoice === "refused"
        ? storedChoice
        : "pending";

    setChoice(initialChoice);

    if (initialChoice !== "pending") {
      updateGoogleConsent(initialChoice);
    }

    const openSettings = () => setChoice("pending");
    window.addEventListener(OPEN_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_EVENT, openSettings);
  }, []);

  const saveChoice = (nextChoice) => {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    updateGoogleConsent(nextChoice);
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT, { detail: { choice: nextChoice } })
    );
    setChoice(nextChoice);
  };

  return (
    <>
      {choice === "accepted" && GTM_ENABLED ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.__mySelfieBoothAnalyticsMode = "gtm";
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      ) : null}

      {choice === "accepted" && !GTM_ENABLED ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.__mySelfieBoothAnalyticsMode = "ga4";
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
                send_page_view: true
              });
            `}
          </Script>
        </>
      ) : null}

      {choice === "pending" ? (
        <section
          className="cookie-consent"
          role="dialog"
          aria-labelledby="cookie-consent-title"
        >
          <div>
            <strong id="cookie-consent-title">Mesure d'audience</strong>
            <p>
              Nous utilisons Google Analytics uniquement avec votre accord pour comprendre les pages consultées.
              <a href="/privacy-policy/"> En savoir plus</a>
            </p>
          </div>
          <div className="cookie-consent-actions">
            <button type="button" onClick={() => saveChoice("refused")}>
              Refuser
            </button>
            <button type="button" onClick={() => saveChoice("accepted")}>
              Accepter
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
