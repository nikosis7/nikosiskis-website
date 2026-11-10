import type { Metadata } from "next";
import Link from "next/link";

const title = "ΚΕΝΑΚ & Ενεργειακές Επιθεωρήσεις";
const description = "Ενεργειακές επιθεωρήσεις κτιρίων και έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης (ΠΕΑ) στη Θεσσαλονίκη και την ευρύτερη περιοχή.";
export const metadata: Metadata = {
  title: "ΚΕΝΑΚ και έκδοση ΠΕΑ στη Θεσσαλονίκη",
  description,
  alternates: { canonical: "/ypiresies/kenak" },
  openGraph: { title: "ΚΕΝΑΚ και έκδοση ΠΕΑ στη Θεσσαλονίκη", description, url: "https://nikosiskis.gr/ypiresies/kenak", locale: "el_GR", type: "website" },
};

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@type": "ProfessionalService", name: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός", url: "https://nikosiskis.gr", telephone: "+306970426048" },
    areaServed: { "@type": "City", name: "Θεσσαλονίκη" },
    url: "https://nikosiskis.gr/ypiresies/kenak"
  };
  return <main>
    <section className="service-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Αρχική</Link> / <Link href="/#ypiresies">Υπηρεσίες</Link> / {title}</div>
      <div className="eyebrow" style={{color:"#2469b2"}}>ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ · ΘΕΣΣΑΛΟΝΙΚΗ</div>
      <h1>{title}</h1><p className="lead">Υπηρεσίες ΚΕΝΑΚ και ενεργειακών επιθεωρήσεων για κατοικίες και επαγγελματικά ακίνητα, με στόχο την αξιόπιστη αποτύπωση της ενεργειακής απόδοσης του κτιρίου.</p>
      <div className="actions"><Link className="button button-primary" href="/#epikoinonia">Ζητήστε προσφορά ↗</Link><Link className="button" style={{border:"1px solid #b9c9d9"}} href="/#ypiresies">Όλες οι υπηρεσίες</Link></div>
    </div></section>
    <section className="service-content"><div className="container" style={{maxWidth:"900px",marginLeft:"auto",marginRight:"auto"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}} />
      <h2>Υπηρεσίες {title}</h2><p>Η ενεργειακή επιθεώρηση αποτυπώνει την ενεργειακή συμπεριφορά ενός κτιρίου και αποτελεί βασικό βήμα για τη νόμιμη μίσθωση ή μεταβίβαση, όπου απαιτείται Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ).</p>
      <h2 style={{marginTop:35}}>Τι περιλαμβάνει</h2><ul><li>Έκδοση Πιστοποιητικού Ενεργειακής Απόδοσης (ΠΕΑ)</li><li>Ενεργειακή επιθεώρηση κατοικιών και επαγγελματικών χώρων</li><li>Αξιολόγηση ενεργειακών χαρακτηριστικών του κτιρίου</li><li>Τεχνική ενημέρωση για παρεμβάσεις βελτίωσης ενεργειακής απόδοσης</li></ul>
      <div className="service-cta"><p>Χρειάζεστε κενακ & ενεργειακές επιθεωρήσεις στη Θεσσαλονίκη; Επικοινωνήστε για να συζητήσουμε τις ανάγκες του χώρου σας.</p><Link className="button button-primary" href="/#epikoinonia">Επικοινωνία ↗</Link></div>
    </div></section>
  </main>;
}
