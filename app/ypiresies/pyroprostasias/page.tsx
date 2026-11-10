import type { Metadata } from "next";
import Link from "next/link";

const title = "Μελέτες & Πιστοποιητικά Πυροπροστασίας";
const description = "Μελέτες πυροπροστασίας και υποστήριξη για πιστοποιητικά πυρασφάλειας επαγγελματικών χώρων στη Θεσσαλονίκη.";
export const metadata: Metadata = {
  title: "Μελέτες και πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη",
  description,
  alternates: { canonical: "/ypiresies/pyroprostasias" },
  openGraph: { title: "Μελέτες και πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη", description, url: "https://nikosiskis.gr/ypiresies/pyroprostasias", locale: "el_GR", type: "website" },
};

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@type": "ProfessionalService", name: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός", url: "https://nikosiskis.gr", telephone: "+306970426048" },
    areaServed: { "@type": "City", name: "Θεσσαλονίκη" },
    url: "https://nikosiskis.gr/ypiresies/pyroprostasias"
  };
  return <main>
    <section className="service-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Αρχική</Link> / <Link href="/#ypiresies">Υπηρεσίες</Link> / {title}</div>
      <div className="eyebrow" style={{color:"#2469b2"}}>ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ · ΘΕΣΣΑΛΟΝΙΚΗ</div>
      <h1>{title}</h1><p className="lead">Τεχνική υποστήριξη για τη μελέτη πυροπροστασίας και τις διαδικασίες έκδοσης πιστοποιητικών, σύμφωνα με τις ισχύουσες απαιτήσεις για κάθε χρήση και εγκατάσταση.</p>
      <div className="actions"><Link className="button button-primary" href="/#epikoinonia">Ζητήστε προσφορά ↗</Link><Link className="button" style={{border:"1px solid #b9c9d9"}} href="/#ypiresies">Όλες οι υπηρεσίες</Link></div>
    </div></section>
    <section className="service-content"><div className="container" style={{maxWidth:"900px",marginLeft:"auto",marginRight:"auto"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}} />
      <h2>Υπηρεσίες {title}</h2><p>Οι απαιτήσεις πυροπροστασίας εξαρτώνται από τη χρήση, τα χαρακτηριστικά και το καθεστώς λειτουργίας του χώρου. Η σωστή τεχνική αποτύπωση βοηθά στον προσδιορισμό των απαιτούμενων μέτρων και δικαιολογητικών.</p>
      <h2 style={{marginTop:35}}>Τι περιλαμβάνει</h2><ul><li>Έλεγχος απαιτήσεων πυροπροστασίας ανά χρήση χώρου</li><li>Σύνταξη ή επικαιροποίηση μελετών, όπου απαιτείται</li><li>Υποστήριξη διαδικασιών για πιστοποιητικό ενεργητικής πυροπροστασίας</li><li>Τεχνική καθοδήγηση για τα απαιτούμενα μέσα και μέτρα πυροπροστασίας</li></ul>
      <div className="service-cta"><p>Χρειάζεστε μελέτες & πιστοποιητικά πυροπροστασίας στη Θεσσαλονίκη; Επικοινωνήστε για να συζητήσουμε τις ανάγκες του χώρου σας.</p><Link className="button button-primary" href="/#epikoinonia">Επικοινωνία ↗</Link></div>
    </div></section>
  </main>;
}
