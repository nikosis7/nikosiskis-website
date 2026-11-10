
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://nikosiskis.gr";
const pageUrl = `${siteUrl}/ypiresies/kenak`;

const title = "ΚΕΝΑΚ & Ενεργειακές Επιθεωρήσεις";

const description =
  "Ενεργειακό πιστοποιητικό (ΠΕΑ), ΚΕΝΑΚ και ενεργειακές επιθεωρήσεις κατοικιών και επαγγελματικών ακινήτων στη Θεσσαλονίκη και την ευρύτερη περιοχή.";

export const metadata: Metadata = {
  title: "ΚΕΝΑΚ και έκδοση ΠΕΑ στη Θεσσαλονίκη",
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
    title: "ΚΕΝΑΚ και έκδοση ΠΕΑ στη Θεσσαλονίκη",
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
    title: "ΚΕΝΑΚ και έκδοση ΠΕΑ στη Θεσσαλονίκη",
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
            Υπηρεσίες ΚΕΝΑΚ και ενεργειακών επιθεωρήσεων για κατοικίες και
            επαγγελματικά ακίνητα, με στόχο την αξιόπιστη αποτύπωση της
            ενεργειακής απόδοσης του κτιρίου.
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
            Η ενεργειακή επιθεώρηση αποτυπώνει την ενεργειακή συμπεριφορά ενός
            κτιρίου και αποτελεί βασικό βήμα για τη νόμιμη μίσθωση ή μεταβίβαση,
            όπου απαιτείται Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ).
          </p>

          <h2 style={{ marginTop: 35 }}>Τι περιλαμβάνει</h2>

          <ul>
            <li>Έκδοση Πιστοποιητικού Ενεργειακής Απόδοσης (ΠΕΑ)</li>
            <li>Ενεργειακή επιθεώρηση κατοικιών και επαγγελματικών χώρων</li>
            <li>Αξιολόγηση ενεργειακών χαρακτηριστικών του κτιρίου</li>
            <li>
              Τεχνική ενημέρωση για παρεμβάσεις βελτίωσης ενεργειακής απόδοσης
            </li>
          </ul>

          <div className="service-cta">
            <p>
              Χρειάζεστε ΚΕΝΑΚ ή ενεργειακή επιθεώρηση στη Θεσσαλονίκη;
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
