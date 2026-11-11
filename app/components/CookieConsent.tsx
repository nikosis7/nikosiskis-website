
"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-3J6LVVWWYW";
const CONSENT_KEY = "nikosiskis-cookie-consent";

type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
  }
}

function loadGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  if (window.__gaInitialized) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }

  // Default consent: denied
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  // Grant analytics consent only after user acceptance
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

    script.onerror = () => {
      window.__gaInitialized = false;
      script.remove();
    };

    document.head.appendChild(script);
  }
}

function disableGoogleAnalytics() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  // Remove Google Analytics cookies
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    if (
      name.startsWith("_ga") ||
      name === "_gid" ||
      name === "_gat"
    ) {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;

      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.nikosiskis.gr`;
    }
  });
}

export default function CookieConsent() {
  const [loaded, setLoaded] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted") {
      setConsent("accepted");
      setAnalyticsEnabled(true);
      loadGoogleAnalytics();
    } else if (savedConsent === "rejected") {
      setConsent("rejected");
      setAnalyticsEnabled(false);
    }

    setLoaded(true);
  }, []);

  function acceptAll() {
    localStorage.setItem(CONSENT_KEY, "accepted");

    setConsent("accepted");
    setAnalyticsEnabled(true);
    setShowSettings(false);

    loadGoogleAnalytics();
  }

  function rejectAll() {
    localStorage.setItem(CONSENT_KEY, "rejected");

    setConsent("rejected");
    setAnalyticsEnabled(false);
    setShowSettings(false);

    disableGoogleAnalytics();
  }

  function saveSettings() {
    if (analyticsEnabled) {
      acceptAll();
    } else {
      rejectAll();
    }
  }

  if (!loaded) {
    return null;
  }

  const buttonStyle: React.CSSProperties = {
    padding: "11px 17px",
    borderRadius: "7px",
    border: "1px solid #d1d5db",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const primaryButton: React.CSSProperties = {
    ...buttonStyle,
    background: "#111827",
    color: "#ffffff",
    border: "1px solid #111827",
  };

  const secondaryButton: React.CSSProperties = {
    ...buttonStyle,
    background: "#ffffff",
    color: "#111827",
  };

  return (
    <>
      {/* Cookie banner */}
      {consent === null && !showSettings && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 99999,
            width: "min(420px, calc(100% - 40px))",
            background: "#ffffff",
            color: "#111827",
            padding: 22,
            borderRadius: 12,
            boxShadow: "0 5px 30px rgba(0,0,0,0.18)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: 18, margin: "0 0 10px" }}>
            Ρυθμίσεις cookies
          </h3>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.65,
              color: "#4b5563",
              margin: "0 0 16px",
            }}
          >
            Η ιστοσελίδα χρησιμοποιεί απαραίτητες τεχνολογίες
            για τη σωστή λειτουργία της. Με τη συγκατάθεσή σας,
            χρησιμοποιούμε επίσης Google Analytics για τη
            στατιστική ανάλυση της επισκεψιμότητας.
            Μπορείτε να αποδεχτείτε ή να απορρίψετε τα
            προαιρετικά cookies.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <button
              onClick={acceptAll}
              style={primaryButton}
            >
              Αποδοχή όλων
            </button>

            <button
              onClick={rejectAll}
              style={secondaryButton}
            >
              Απόρριψη
            </button>

            <button
              onClick={() => setShowSettings(true)}
              style={secondaryButton}
            >
              Ρυθμίσεις
            </button>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100000,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 440,
              background: "#ffffff",
              color: "#111827",
              padding: 24,
              borderRadius: 12,
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ fontSize: 19, margin: "0 0 12px" }}>
              Προτιμήσεις cookies
            </h3>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "#4b5563",
                marginBottom: 20,
              }}
            >
              Επιλέξτε ποιες προαιρετικές τεχνολογίες
              επιθυμείτε να επιτρέψετε.
            </p>

            <div
              style={{
                padding: 14,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                marginBottom: 12,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 14 }}>
                Απαραίτητα cookies
              </div>

              <p
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  margin: "6px 0 0",
                }}
              >
                Απαιτούνται για τη βασική λειτουργία
                της ιστοσελίδας.
              </p>

              <div
                style={{
                  fontSize: 12,
                  color: "#15803d",
                  marginTop: 8,
                  fontWeight: 600,
                }}
              >
                Πάντα ενεργά
              </div>
            </div>

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: 14,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) =>
                  setAnalyticsEnabled(e.target.checked)
                }
                style={{
                  width: 17,
                  height: 17,
                  marginTop: 2,
                  cursor: "pointer",
                }}
              />

              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Google Analytics
                </span>

                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "#6b7280",
                    marginTop: 5,
                    lineHeight: 1.5,
                  }}
                >
                  Χρήση στατιστικών δεδομένων για την
                  ανάλυση της επισκεψιμότητας.
                </span>
              </span>
            </label>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 20,
              }}
            >
              <button
                onClick={saveSettings}
                style={primaryButton}
              >
                Αποθήκευση επιλογών
              </button>

              <button
                onClick={() => setShowSettings(false)}
                style={secondaryButton}
              >
                Κλείσιμο
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reopen cookie settings */}
      {consent !== null && !showSettings && (
        <button
          onClick={() => {
            setAnalyticsEnabled(consent === "accepted");
            setShowSettings(true);
          }}
          aria-label="Ρυθμίσεις cookies"
          title="Ρυθμίσεις cookies"
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            zIndex: 99998,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid #d1d5db",
            background: "#ffffff",
            color: "#111827",
            fontSize: 19,
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
          }}
        >
          ⚙
        </button>
      )}
    </>
  );
}
