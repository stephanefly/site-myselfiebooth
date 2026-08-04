import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GTM_ENABLED = /^GTM-[A-Z0-9]+$/i.test(GTM_ID);

export default function AnalyticsEvents() {
  return (
    <Script id="analytics-events" strategy="afterInteractive">
      {`
        (function () {
          if (window.__mySelfieBoothEventsBound) return;
          window.__mySelfieBoothEventsBound = true;

          var storageKey = "myselfiebooth-analytics-consent";
          var gtmEnabled = ${GTM_ENABLED ? "true" : "false"};

          function analyticsAccepted() {
            try {
              return window.localStorage.getItem(storageKey) === "accepted";
            } catch (error) {
              return false;
            }
          }

          function sendEvent(eventName, parameters) {
            if (!analyticsAccepted()) return;

            window.dataLayer = window.dataLayer || [];

            if (gtmEnabled) {
              window.dataLayer.push(Object.assign({ event: eventName }, parameters));
              return;
            }

            if (typeof window.gtag === "function") {
              window.gtag("event", eventName, parameters);
            }
          }

          function automaticEventName(target) {
            var href = target.href || target.getAttribute("href") || "";
            var normalizedHref = href.toLowerCase();

            if (normalizedHref.indexOf("reservation.myselfiebooth-paris.fr") !== -1) {
              if (normalizedHref.indexOf("brochure") !== -1) return "download_brochure";
              return "click_devis";
            }
            if (normalizedHref.indexOf("tel:") === 0) return "click_phone";
            if (normalizedHref.indexOf("mailto:") === 0) return "click_email";
            if (
              normalizedHref.indexOf("wa.me") !== -1 ||
              normalizedHref.indexOf("whatsapp.com") !== -1
            ) {
              return "click_whatsapp";
            }

            return "";
          }

          document.addEventListener("click", function (event) {
            var target = event.target && event.target.closest
              ? event.target.closest("a, button, [data-event]")
              : null;
            if (!target) return;

            var eventName =
              target.getAttribute("data-event") || automaticEventName(target);
            if (!eventName) return;

            var label =
              target.getAttribute("data-event-label") ||
              target.getAttribute("aria-label") ||
              (target.textContent || "").trim().slice(0, 90) ||
              target.getAttribute("href") ||
              "interaction";

            sendEvent(eventName, {
              event_category: "conversion",
              event_label: label,
              link_url: target.href || target.getAttribute("href") || "",
              page_location: window.location.href,
              page_path: window.location.pathname,
            });
          });

          window.mySelfieBoothTrack = sendEvent;
        })();
      `}
    </Script>
  );
}
