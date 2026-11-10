
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.nikosiskis.gr";
const pageUrl = `${siteUrl}/ypiresies/yde-ilektromixanologikes-meletes`;

const title = "ΥΔΕ & Η/Μ Μελέτες";

const description =
  "Υπεύθυνες Δηλώσεις Εγκαταστάτη (ΥΔΕ), έλεγχοι ηλεκτρικών εγκαταστάσεων και ηλεκτρομηχανολογικές μελέτες στη Θεσσαλονίκη.";

export const metadata: Metadata = {
  title: "ΥΔΕ και ηλεκτρομηχανολογικές μελέτες στη Θεσσαλονίκη",
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
    title: "ΥΔΕ και ηλεκτρομηχανολογικές μελέτες στη Θεσσαλονίκη",
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
    title: "ΥΔΕ και ηλεκτρομηχανολογικές μελέτες στη Θεσσαλονίκη",
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
            Υπηρεσίες ΥΔΕ και ηλεκτρομηχανολογικών μελετών για κατοικίες,
            επαγγελματικούς χώρους και τεχνικά έργα.
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
            Η Υπεύθυνη Δήλωση Εγκαταστάτη (ΥΔΕ) συνδέεται με τον έλεγχο της
            ηλεκτρικής εγκατάστασης και την τεκμηρίωση της κατάστασής της
            σύμφωνα με τις εφαρμοστέες απαιτήσεις. Το αντικείμενο κάθε ελέγχου
            ή μελέτης προσδιορίζεται με βάση την εγκατάσταση και τις ανάγκες
            του έργου.
          </p>

          <h2 style={{ marginTop: 35 }}>Τι περιλαμβάνει</h2>

          <ul>
            <li>Έλεγχοι ηλεκτρικών εγκαταστάσεων και διαδικασία ΥΔΕ</li>
            <li>Ηλεκτρολογικές μελέτες ισχυρών και ασθενών ρευμάτων</li>
            <li>Μελέτες φωτισμού, γειώσεων και αντικεραυνικής προστασίας</li>
            <li>Μελέτες θέρμανσης, ψύξης και αερισμού (HVAC)</li>
            <li>Ηλεκτρομηχανολογικές μελέτες και τεχνική τεκμηρίωση</li>
          </ul>

          <div className="service-cta">
            <p>
              Χρειάζεστε ΥΔΕ ή ηλεκτρομηχανολογικές μελέτες στη Θεσσαλονίκη;
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
