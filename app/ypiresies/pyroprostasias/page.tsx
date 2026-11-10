
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://nikosiskis.gr";
const pageUrl = `${siteUrl}/ypiresies/pyroprostasias`;

const title = "Μελέτες & Πιστοποιητικά Πυροπροστασίας";

const description =
  "Μελέτες ενεργητικής και παθητικής πυροπροστασίας, τεχνική υποστήριξη και πιστοποιητικά πυρασφάλειας για επαγγελματικούς χώρους στη Θεσσαλονίκη.";

export const metadata: Metadata = {
  title: "Μελέτες και πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη",
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: pageUrl,
    siteName: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
    title: "Μελέτες και πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη",
    description,
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
    title: "Μελέτες και πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη",
    description,
    images: ["/logo-nikos-iskis.png"],
  },
};

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός",
      url: siteUrl,
      telephone: "+306970426048",
      email: "info@nikosiskis.gr",
    },
    areaServed: {
      "@type": "City",
      name: "Θεσσαλονίκη",
    },
    url: pageUrl,
  };

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Αρχική</Link> /{" "}
            <Link href="/#ypiresies">Υπηρεσίες</Link> / {title}
          </div>

          <div className="eyebrow" style={{ color: "#2469b2" }}>
            ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ · ΘΕΣΣΑΛΟΝΙΚΗ
          </div>

          <h1>{title}</h1>

          <p className="lead">
            Τεχνική υποστήριξη για τη μελέτη πυροπροστασίας και τις διαδικασίες
            έκδοσης πιστοποιητικών, σύμφωνα με τις ισχύουσες απαιτήσεις για κάθε
            χρήση και εγκατάσταση.
          </p>

          <div className="actions">
            <Link className="button button-primary" href="/#epikoinonia">
              Ζητήστε προσφορά ↗
            </Link>
            <Link
              className="button"
              style={{ border: "1px solid #b9c9d9" }}
              href="/#ypiresies"
            >
              Όλες οι υπηρεσίες
            </Link>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div
          className="container"
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />

          <h2>Υπηρεσίες {title}</h2>

          <p>
            Οι απαιτήσεις πυροπροστασίας εξαρτώνται από τη χρήση, τα
            χαρακτηριστικά και το καθεστώς λειτουργίας του χώρου. Η σωστή
            τεχνική αποτύπωση βοηθά στον προσδιορισμό των απαιτούμενων μέτρων
            και δικαιολογητικών.
          </p>

          <h2 style={{ marginTop: 35 }}>Τι περιλαμβάνει</h2>

          <ul>
            <li>Έλεγχος απαιτήσεων πυροπροστασίας ανά χρήση χώρου</li>
            <li>Σχεδιασμός διαγραμμάτων διαφυγής</li>
            <li>Μελέτη ενεργητικής και παθητικής πυροπροστασίας</li>
            <li>Υποστήριξη για την έκδοση πιστοποιητικού πυροπροστασίας</li>
            <li>
              Τεχνική καθοδήγηση για τα απαιτούμενα μέσα και μέτρα
              πυροπροστασίας
            </li>
          </ul>

          <div className="service-cta">
            <p>
              Χρειάζεστε μελέτη ή πιστοποιητικό πυροπροστασίας στη Θεσσαλονίκη;
              Επικοινωνήστε για να συζητήσουμε τις ανάγκες του χώρου σας.
            </p>
            <Link className="button button-primary" href="/#epikoinonia">
              Επικοινωνία ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
