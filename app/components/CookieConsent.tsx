
"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-3J6LVVWWYW";
const CONSENT_KEY = "nikosiskis-cookie-consent";

type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
  }
}

function loadGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

  if (window.__gaInitialized) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
    return;
  }

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  window.__gaInitialized = true;

  if (!document.getElementById("google-analytics-script")) {
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    document.head.appendChild(script);
  }
}

function disableGoogleAnalytics() {
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  // Διαγραφή των cookies του Google Analytics.
  const cookies = document.cookie.split(";");

  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    ".nikosiskis.gr",
  ];

  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    if (
      name.startsWith("_ga") ||
      name.startsWith("_gid") ||
      name.startsWith("_gat")
    ) {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
      });

      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      setAnalyticsEnabled(saved === "accepted");
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (consent === "rejected") {
      disableGoogleAnalytics();
    }
  }, [consent, ready]);

  function saveConsent(value: Consent) {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setAnalyticsEnabled(value === "accepted");
    setShowSettings(false);
  }

  function openSettings() {
    setAnalyticsEnabled(consent === "accepted");
    setShowSettings(true);
  }

  if (!ready) return null;

  const buttonStyle = {
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    padding: "10px 15px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  } as const;

  return (
    <>
      {consent === null && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            right: "20px",
            zIndex: 99999,
            maxWidth: "720px",
            margin: "0 auto",
            padding: "22px",
            background: "#ffffff",
            color: "#172033",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            boxShadow: "0 8px 35px rgba(0,0,0,0.18)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              fontSize: "17px",
              fontWeight: 700,
            }}
          >
            Ρυθμίσεις cookies
          </h3>

          <p
            style={{
              margin: "0 0 18px",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#475569",
            }}
          >
            Ο ιστότοπος χρησιμοποιεί απαραίτητες τεχνολογίες για τη σωστή
            λειτουργία του. Με τη συγκατάθεσή σας μπορούμε επίσης να
            χρησιμοποιήσουμε το Google Analytics για να κατανοούμε καλύτερα
            την επισκεψιμότητα. Μπορείτε να αποδεχτείτε ή να απορρίψετε
            τα προαιρετικά cookies.
          </p>

          {showSettings && (
            <div
              style={{
                padding: "14px",
                marginBottom: "16px",
                background: "#f8fafc",
                borderRadius: "8px",
              }}
            >
              <p style={{ margin: "0 0 12px", fontSize: "14px" }}>
                <strong>Απαραίτητες τεχνολογίες</strong>
                <br />
                <span style={{ color: "#64748b" }}>
                  Ενεργές πάντα για τη λειτουργία του ιστοτόπου.
                </span>
              </p>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                />
                <span>
                  <strong>Στατιστικά επισκεψιμότητας</strong>
                  <br />
                  <span style={{ color: "#64748b" }}>
                    Google Analytics
                  </span>
                </span>
              </label>
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {!showSettings ? (
              <>
                <button
                  onClick={() => saveConsent("accepted")}
                  style={{
                    ...buttonStyle,
                    background: "#0b3158",
                    color: "#ffffff",
                    borderColor: "#0b3158",
                  }}
                >
                  Αποδοχή όλων
                </button>

                <button
                  onClick={() => saveConsent("rejected")}
                  style={{
                    ...buttonStyle,
                    background: "#ffffff",
                    color: "#172033",
                  }}
                >
                  Απόρριψη
                </button>

                <button
                  onClick={openSettings}
                  style={{
                    ...buttonStyle,
                    background: "#f1f5f9",
                    color: "#172033",
                  }}
                >
                  Ρυθμίσεις
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() =>
                    saveConsent(analyticsEnabled ? "accepted" : "rejected")
                  }
                  style={{
                    ...buttonStyle,
                    background: "#0b3158",
                    color: "#ffffff",
                    borderColor: "#0b3158",
                  }}
                >
                  Αποθήκευση επιλογών
                </button>

                <button
                  onClick={() => setShowSettings(false)}
                  style={{
                    ...buttonStyle,
                    background: "#ffffff",
                    color: "#172033",
                  }}
                >
                  Πίσω
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {consent !== null && (
        <button
          onClick={openSettings}
          aria-label="Αλλαγή ρυθμίσεων cookies"
          style={{
            position: "fixed",
            bottom: "15px",
            left: "15px",
            zIndex: 99998,
            background: "#0b3158",
            color: "#ffffff",
            border: "none",
            borderRadius: "7px",
            padding: "9px 13px",
            fontSize: "12px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
        >
          Ρυθμίσεις cookies
        </button>
      )}

      {showSettings && consent !== null && (
        <div
          style={{
            position: "fixed",
            bottom: "65px",
            left: "20px",
            right: "20px",
            zIndex: 99999,
            maxWidth: "720px",
            margin: "0 auto",
            padding: "22px",
            background: "#ffffff",
            color: "#172033",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            boxShadow: "0 8px 35px rgba(0,0,0,0.18)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h3 style={{ margin: "0 0 14px", fontSize: "17px" }}>
            Ρυθμίσεις cookies
          </h3>

          <p style={{ fontSize: "14px", color: "#475569" }}>
            Επιλέξτε αν επιθυμείτε τη χρήση του Google Analytics.
            Οι απαραίτητες τεχνολογίες παραμένουν ενεργές.
          </p>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
            />
            Στατιστικά επισκεψιμότητας (Google Analytics)
          </label>

          <div style={{ display: "flex", gap: "9px", flexWrap: "wrap" }}>
            <button
              onClick={() =>
                saveConsent(analyticsEnabled ? "accepted" : "rejected")
              }
              style={{
                ...buttonStyle,
                background: "#0b3158",
                color: "#ffffff",
                borderColor: "#0b3158",
              }}
            >
              Αποθήκευση επιλογών
            </button>

            <button
              onClick={() => setShowSettings(false)}
              style={{
                ...buttonStyle,
                background: "#ffffff",
                color: "#172033",
              }}
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}
    </>
  );
}
