
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "./components/CookieConsent";

const siteUrl = "https://www.nikosiskis.gr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Νίκος Ισκής | Ηλεκτρολόγος Μηχανικός στη Θεσσαλονίκη",
    template: "%s | Νίκος Ισκής",
  },
  description:
    "Νίκος Ισκής, MSc Ηλεκτρολόγος Μηχανικός στη Θεσσαλονίκη. ΚΕΝΑΚ, ενεργειακά πιστοποιητικά, μελέτες πυροπροστασίας, ΥΔΕ, Η/Μ μελέτες και συστήματα ασφαλείας.",
  applicationName: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: siteUrl,
    siteName: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
    title: "Νίκος Ισκής | Ηλεκτρολόγος Μηχανικός στη Θεσσαλονίκη",
    description:
      "ΚΕΝΑΚ, ενεργειακές επιθεωρήσεις, πυροπροστασία, ΥΔΕ, Η/Μ μελέτες και συστήματα ασφαλείας στη Θεσσαλονίκη.",
    images: [
      {
        url: "/logo-nikos-iskis.png",
        width: 666,
        height: 210,
        alt: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Νίκος Ισκής | Ηλεκτρολόγος Μηχανικός",
    description:
      "ΚΕΝΑΚ, πυροπροστασία, ΥΔΕ και Η/Μ μελέτες στη Θεσσαλονίκη.",
    images: ["/logo-nikos-iskis.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "engineering",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061d38",
};

const navItems = [
  ["Υπηρεσίες", "/#ypiresies"],
  ["Σχετικά", "/#sxetika"],
  ["Εμπειρία", "/#empeiria"],
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
    url: siteUrl,
    image: `${siteUrl}/logo-nikos-iskis.png`,
    telephone: "+306970426048",
    email: "info@nikosiskis.gr",
    description:
      "Υπηρεσίες ηλεκτρολόγου μηχανικού, ΚΕΝΑΚ, ενεργειακές επιθεωρήσεις, πυροπροστασία, ΥΔΕ, Η/Μ μελέτες και συστήματα ασφαλείας.",
    areaServed: [
      { "@type": "City", name: "Θεσσαλονίκη" },
      {
        "@type": "AdministrativeArea",
        name: "Ευρύτερη περιοχή Θεσσαλονίκης",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Θεσσαλονίκη",
      addressCountry: "GR",
    },
    priceRange: "Κατόπιν επικοινωνίας",
    knowsAbout: [
      "ΚΕΝΑΚ",
      "Ενεργειακές επιθεωρήσεις",
      "Πιστοποιητικά πυροπροστασίας",
      "ΥΔΕ",
      "Ηλεκτρομηχανολογικές μελέτες",
      "CCTV",
      "Ηλεκτρολογικές εγκαταστάσεις",
    ],
  };

  return (
    <html lang="el">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" aria-label="Αρχική σελίδα Νίκος Ισκής">
              <img
                className="brand-logo"
                src="/logo-nikos-iskis.png"
                alt="Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός"
                width="666"
                height="210"
              />
            </Link>

            <nav className="nav" aria-label="Κύρια πλοήγηση">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <Link className="nav-cta" href="/#epikoinonia">
                Επικοινωνία ↗
              </Link>
            </nav>
          </div>

          <details className="mobile-nav container">
            <summary>ΜΕΝΟΥ ☰</summary>
            <nav aria-label="Κινητή πλοήγηση">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <Link href="/#epikoinonia">Επικοινωνία</Link>
            </nav>
          </details>
        </header>

        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <Link href="/" aria-label="Αρχική">
                <img
                  className="footer-logo"
                  src="/logo-nikos-iskis.png"
                  alt="Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός"
                  width="666"
                  height="210"
                />
              </Link>
              <span>Θεσσαλονίκη &amp; ευρύτερη περιοχή</span>
              <Link href="/#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ ↑</Link>
            </div>

            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} Νίκος Ισκής. Με επιφύλαξη παντός
                δικαιώματος.
              </span>
              <span>
                MSc Ηλεκτρολόγος Μηχανικός · Μελέτη · Εγκατάσταση · Πιστοποίηση
              </span>
            </div>
          </div>
        </footer>

        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
