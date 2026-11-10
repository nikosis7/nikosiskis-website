import type { Metadata } from "next";
import Link from "next/link";

const title = "CCTV & Συστήματα Ασφαλείας";
const description = "Μελέτη, εγκατάσταση και τεχνική υποστήριξη συστημάτων CCTV, καμερών και συναγερμών στη Θεσσαλονίκη.";
export const metadata: Metadata = {
  title: "Κάμερες CCTV και συστήματα ασφαλείας στη Θεσσαλονίκη",
  description,
  alternates: { canonical: "/ypiresies/systimata-asfaleias" },
  openGraph: { title: "Κάμερες CCTV και συστήματα ασφαλείας στη Θεσσαλονίκη", description, url: "https://nikosiskis.gr/ypiresies/systimata-asfaleias", locale: "el_GR", type: "website" },
};

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@type": "ProfessionalService", name: "Νίκος Ισκής – Ηλεκτρολόγος Μηχανικός", url: "https://nikosiskis.gr", telephone: "+306970426048" },
    areaServed: { "@type": "City", name: "Θεσσαλονίκη" },
    url: "https://nikosiskis.gr/ypiresies/systimata-asfaleias"
  };
  return <main>
    <section className="service-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Αρχική</Link> / <Link href="/#ypiresies">Υπηρεσίες</Link> / {title}</div>
      <div className="eyebrow" style={{color:"#2469b2"}}>ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ · ΘΕΣΣΑΛΟΝΙΚΗ</div>
      <h1>{title}</h1><p className="lead">Σχεδιασμός λύσεων βιντεοεπιτήρησης και συναγερμού για κατοικίες και επαγγελματικούς χώρους, με βάση τις ανάγκες κάλυψης και προστασίας κάθε εγκατάστασης.</p>
      <div className="actions"><Link className="button button-primary" href="/#epikoinonia">Ζητήστε προσφορά ↗</Link><Link className="button" style={{border:"1px solid #b9c9d9"}} href="/#ypiresies">Όλες οι υπηρεσίες</Link></div>
    </div></section>
    <section className="service-content"><div className="container" style={{maxWidth:"900px",marginLeft:"auto",marginRight:"auto"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}} />
      <h2>Υπηρεσίες {title}</h2><p>Η σωστή επιλογή και χωροθέτηση εξοπλισμού ασφαλείας ξεκινά από την κατανόηση του χώρου, των σημείων πρόσβασης και των απαιτήσεων επιτήρησης. Η λύση προσαρμόζεται στις πραγματικές ανάγκες της εγκατάστασης.</p>
      <h2 style={{marginTop:35}}>Τι περιλαμβάνει</h2><ul><li>Μελέτη και χωροθέτηση καμερών CCTV</li><li>Εγκατάσταση και ρύθμιση συστημάτων βιντεοεπιτήρησης</li><li>Τεχνική υποστήριξη και συντήρηση συστημάτων</li></ul>
      <div className="service-cta"><p>Χρειάζεστε cctv & συστήματα ασφαλείας στη Θεσσαλονίκη; Επικοινωνήστε για να συζητήσουμε τις ανάγκες του χώρου σας.</p><Link className="button button-primary" href="/#epikoinonia">Επικοινωνία ↗</Link></div>
    </div></section>
  </main>;
}
