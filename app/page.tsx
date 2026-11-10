
import Link from "next/link";

const services = [
  { n: "01", tag: "ΕΝΕΡΓΕΙΑ", title: "ΚΕΝΑΚ & Ενεργειακές Επιθεωρήσεις", desc: "Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης (ΠΕΑ), ενεργειακές επιθεωρήσεις και τεχνική υποστήριξη για κατοικίες και επαγγελματικά κτίρια.", href: "/ypiresies/kenak" },
  { n: "02", tag: "ΠΥΡΟΠΡΟΣΤΑΣΙΑ", title: "Μελέτες & Πιστοποιητικά Πυροπροστασίας", desc: "Μελέτες ενεργητικής και παθητικής πυροπροστασίας και υποστήριξη για την έκδοση των απαιτούμενων πιστοποιητικών.", href: "/ypiresies/pyroprostasias" },
  { n: "03", tag: "ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ ΜΕΛΕΤΕΣ", title: "ΥΔΕ & Η/Μ Μελέτες", desc: "Υπεύθυνες Δηλώσεις Εγκαταστάτη, έλεγχοι ηλεκτρικών εγκαταστάσεων και ηλεκτρομηχανολογικές μελέτες.", href: "/ypiresies/yde-ilektromixanologikes-meletes" },
  { n: "04", tag: "ΣΥΣΤΗΜΑΤΑ ΑΣΦΑΛΕΙΑΣ", title: "CCTV & Συστήματα Ασφαλείας", desc: "Μελέτη, εγκατάσταση και τεχνική υποστήριξη συστημάτων βιντεοεπιτήρησης και συναγερμού.", href: "/ypiresies/systimata-asfaleias" },
  { n: "05", tag: "ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ ΕΡΓΑΣΙΕΣ", title: "Ηλεκτρολογικές Εγκαταστάσεις", desc: "Ηλεκτρολογικές εργασίες, πίνακες, κυκλώματα φωτισμού, αυτοματισμοί και τεχνικές παρεμβάσεις.", href: "/ypiresies/ilektrologikes-ergasies" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="eyebrow">ΗΛΕΚΤΡΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ · ΘΕΣΣΑΛΟΝΙΚΗ</div>
            <h1>Τεχνικές λύσεις<br /><span>με ακρίβεια.</span></h1>
            <p className="hero-lead">Μελέτη, εγκατάσταση και πιστοποίηση ηλεκτρολογικών και ηλεκτρομηχανολογικών εφαρμογών. Υπεύθυνες τεχνικές υπηρεσίες για κατοικίες και επαγγελματικούς χώρους στη Θεσσαλονίκη και την ευρύτερη περιοχή.</p>
            <div className="actions">
              <Link className="button button-primary" href="/#epikoinonia">Ζητήστε προσφορά ↗</Link>
              <Link className="button button-ghost" href="/#ypiresies">Δείτε τις υπηρεσίες ↓</Link>
            </div>
          </div>
          <div className="hero-panel" aria-label="Βασικές υπηρεσίες">
            <div className="panel-label">ΤΕΧΝΙΚΕΣ ΥΠΗΡΕΣΙΕΣ</div><div className="panel-line" />
            {["Ενεργειακές επιθεωρήσεις & ΚΕΝΑΚ", "Μελέτες πυροπροστασίας", "ΥΔΕ & Η/Μ μελέτες", "Συστήματα ασφαλείας CCTV"].map((x, i) => <div className="panel-row" key={x}><b>0{i + 1}</b><span>{x}</span></div>)}
            <div className="panel-foot">ΜΕΛΕΤΗ · ΕΓΚΑΤΑΣΤΑΣΗ · ΠΙΣΤΟΠΟΙΗΣΗ</div>
          </div>
        </div>
      </section>

      <div className="trust"><div className="container trust-inner"><span>ΤΕΧΝΙΚΗ ΕΞΕΙΔΙΚΕΥΣΗ</span><span>ΣΥΓΧΡΟΝΟΣ ΣΧΕΔΙΑΣΜΟΣ</span><span>ΑΞΙΟΠΙΣΤΕΣ ΛΥΣΕΙΣ</span><span>ΘΕΣΣΑΛΟΝΙΚΗ &amp; ΓΥΡΩ ΠΕΡΙΟΧΕΣ</span></div></div>

      <section className="section" id="ypiresies">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow" style={{color:"#2469b2"}}>ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ</div><h2>Ολοκληρωμένες τεχνικές<br /><span>υπηρεσίες.</span></h2></div>
            <p>Από την ενεργειακή επιθεώρηση και την πυροπροστασία έως τις ηλεκτρολογικές μελέτες και τα συστήματα ασφαλείας, κάθε έργο αντιμετωπίζεται με τεχνική συνέπεια.</p>
          </div>
          <div className="services-grid">
            {services.map(s => <article className="service-card" key={s.n}>
              <div className="service-num">{s.n}<span>↗</span></div>
              <div className="service-tag">{s.tag}</div>
              <h3>{s.title}</h3><p>{s.desc}</p>
              <Link className="more" href={s.href}>Περισσότερα για την υπηρεσία <span>↗</span></Link>
            </article>)}
            <div className="service-card" style={{background:"#08294c",color:"white"}}>
              <div className="service-tag" style={{color:"#f5bd16"}}>ΕΠΙΚΟΙΝΩΝΗΣΤΕ</div>
              <h3 style={{color:"white",fontSize:25}}>Ας συζητήσουμε τις ανάγκες του έργου σας.</h3>
              <p style={{color:"#c5d5e6"}}>Επικοινωνήστε για να εξετάσουμε τις τεχνικές απαιτήσεις και την κατάλληλη λύση.</p>
              <Link className="more" style={{color:"#f5bd16"}} href="/#epikoinonia">Ζητήστε προσφορά ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="sxetika"><div className="container about-grid">
        <div className="about-art" aria-hidden="true"><strong>NI<span>.</span></strong></div>
        <div className="about-copy"><div className="eyebrow">ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ</div>
          <h2>Τεχνική γνώση<br />στην <span>πράξη.</span></h2>
          <p>Είμαι ο Νίκος Ισκής, MSc Ηλεκτρολόγος Μηχανικός. Παρέχω υπηρεσίες μελέτης, τεχνικής υποστήριξης και υλοποίησης ηλεκτρολογικών και ηλεκτρομηχανολογικών εφαρμογών.</p>
          <p>Η προσέγγισή μου βασίζεται στην κατανόηση των αναγκών κάθε έργου, στην τεχνική αρτιότητα και στη συνέπεια από την αρχική επικοινωνία έως την ολοκλήρωση.</p>
          <div className="about-points"><div><b>01</b> Τεκμηριωμένη τεχνική προσέγγιση</div><div><b>02</b> Λύσεις προσαρμοσμένες στις ανάγκες του έργου</div><div><b>03</b> Υπεύθυνη τεχνική υποστήριξη</div></div>
        </div>
      </div></section>

      <section className="section experience" id="empeiria"><div className="container experience-grid">
        <div><div className="eyebrow" style={{color:"#2469b2"}}>ΕΜΠΕΙΡΙΑ &amp; ΑΝΤΙΚΕΙΜΕΝΟ</div><h2 className="section-head" style={{display:"block",marginTop:15}}>Μελέτη με<br />τεχνική <span style={{color:"#2469b2"}}>συνέπεια.</span></h2></div>
        <div><p>Εμπειρία σε ηλεκτρομηχανολογικές μελέτες και τεχνικά έργα, με αντικείμενο ισχυρά και ασθενή ρεύματα, φωτισμό, γειώσεις, αντικεραυνική προστασία, HVAC και εγκαταστάσεις κτιρίων.</p>
          <div className="experience-list"><div><b>01</b> Ηλεκτρολογικές εγκαταστάσεις και διανομή ισχύος</div><div><b>02</b> Φωτισμός, γειώσεις και αντικεραυνική προστασία</div><div><b>03</b> HVAC και ηλεκτρομηχανολογικές εγκαταστάσεις</div><div><b>04</b> Μελέτες και τεχνική υποστήριξη έργων</div></div>
        </div>
      </div></section>

      <section className="contact" id="epikoinonia"><div className="container contact-grid">
        <div><div className="eyebrow">ΕΠΙΚΟΙΝΩΝΙΑ</div><h2>Έχετε ένα έργο<br />στο μυαλό σας;<br /><span>Ας μιλήσουμε.</span></h2></div>
        <div className="contact-copy"><p>Επικοινωνήστε για ΚΕΝΑΚ, ενεργειακά πιστοποιητικά, πυροπροστασία, ΥΔΕ, Η/Μ μελέτες και συστήματα ασφαλείας στη Θεσσαλονίκη και τις γύρω περιοχές.</p>
          <div className="contact-details"><a href="tel:+306970426048"><b>Τ</b> 697 042 6048</a><a href="mailto:nikosiski@gmail.com"><b>Ε</b> nikosiski@gmail.com</a><span><b>Π</b> Θεσσαλονίκη &amp; ευρύτερη περιοχή</span></div>
          <a className="button button-primary" href="mailto:nikosiski@gmail.com?subject=Αίτημα%20τεχνικής%20προσφοράς">Ζητήστε τεχνική προσφορά ↗</a>
        </div>
      </div></section>
    </main>
  );
}
