import Script from "next/script";

export default function AnalyticsEvents() {
  return (
    <Script id="analytics-events" strategy="afterInteractive">
      {`
        (function () {
          if (window.__mySelfieBoothEventsBound) return;
          window.__mySelfieBoothEventsBound = true;

          document.addEventListener("click", function (event) {
            var target = event.target && event.target.closest
              ? event.target.closest("[data-event]")
              : null;
            if (!target || typeof window.gtag !== "function") return;

            var eventName = target.getAttribute("data-event");
            if (!eventName) return;

            var label = target.getAttribute("data-event-label") ||
              target.getAttribute("aria-label") ||
              (target.textContent || "").trim().slice(0, 90) ||
              target.getAttribute("href") ||
              "interaction";

            window.gtag("event", eventName, {
              event_category: "conversion",
              event_label: label,
              link_url: target.href || target.getAttribute("href") || "",
              page_location: window.location.href,
              page_path: window.location.pathname
            });
          });
        })();
      `}
    </Script>
  );
}
