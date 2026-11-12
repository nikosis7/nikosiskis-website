
import Link from "next/link";

const services = [
  {
    n: "01",
    tag: "ΕΝΕΡΓΕΙΑ",
    title: "ΚΕΝΑΚ & Ενεργειακές Επιθεωρήσεις",
    desc: "Έκδοση Πιστοποιητικού Ενεργειακής Απόδοσης (ΠΕΑ) για κατοικίες και επαγγελματικά ακίνητα, ενεργειακές επιθεωρήσεις και τεχνική υποστήριξη στη Θεσσαλονίκη.",
    href: "/ypiresies/kenak",
  },
  {
    n: "02",
    tag: "ΠΥΡΟΠΡΟΣΤΑΣΙΑ",
    title: "Μελέτες & Πιστοποιητικά Πυροπροστασίας",
    desc: "Μελέτες ενεργητικής και παθητικής πυροπροστασίας και τεχνική υποστήριξη για την έκδοση πιστοποιητικού πυρασφάλειας και πιστοποιητικού ενεργητικής πυροπροστασίας για επαγγελματικούς χώρους.",
    href: "/ypiresies/pyroprostasias",
  },
  {
    n: "03",
    tag: "ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ ΜΕΛΕΤΕΣ",
    title: "ΥΔΕ & Η/Μ Μελέτες",
    desc: "Έλεγχοι ηλεκτρικών εγκαταστάσεων, Υπεύθυνες Δηλώσεις Εγκαταστάτη (ΥΔΕ) και ηλεκτρομηχανολογικές μελέτες.",
    href: "/ypiresies/yde-ilektromixanologikes-meletes",
  },
  {
    n: "04",
    tag: "ΣΥΣΤΗΜΑΤΑ ΑΣΦΑΛΕΙΑΣ",
    title: "CCTV & Συστήματα Ασφαλείας",
    desc: "Μελέτη, εγκατάσταση και τεχνική υποστήριξη συστημάτων βιντεοεπιτήρησης, καμερών ασφαλείας και συναγερμού.",
    href: "/ypiresies/systimata-asfaleias",
  },
  {
    n: "05",
    tag: "ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ ΕΡΓΑΣΙΕΣ",
    title: "Ηλεκτρολογικές Εγκαταστάσεις",
    desc: "Ηλεκτρολογικές εργασίες, ηλεκτρικοί πίνακες, κυκλώματα φωτισμού, αυτοματισμοί και τεχνικές παρεμβάσεις.",
    href: "/ypiresies/ilektrologikes-ergasies",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="eyebrow">
              ΗΛΕΚΤΡΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ · ΘΕΣΣΑΛΟΝΙΚΗ
            </div>

            <h1>
              Ηλεκτρολόγος Μηχανικός
              <br />
              <span>στη Θεσσαλονίκη.</span>
            </h1>

            <p className="hero-lead">
              Μελέτες, ενεργειακές επιθεωρήσεις, πυροπροστασία και
              ηλεκτρομηχανολογικές υπηρεσίες για κατοικίες και επαγγελματικούς
              χώρους. Ολοκληρωμένες τεχνικές λύσεις με συνέπεια, από τον
              σχεδιασμό έως την τεχνική υποστήριξη, στη Θεσσαλονίκη και την
              ευρύτερη περιοχή.
            </p>

            <div className="actions">
              <Link className="button button-primary" href="/#epikoinonia">
                Ζητήστε προσφορά ↗
              </Link>
              <Link className="button button-ghost" href="/#ypiresies">
                Δείτε τις υπηρεσίες ↓
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Βασικές τεχνικές υπηρεσίες">
            <div className="panel-label">ΤΕΧΝΙΚΕΣ ΥΠΗΡΕΣΙΕΣ</div>
            <div className="panel-line" />

            {[
              "Πιστοποιητικά Ενεργειακής Απόδοσης (ΠΕΑ)",
              "Πιστοποιητικά Πυρασφάλειας",
              "ΥΔΕ & Η/Μ μελέτες",
              "Συστήματα ασφαλείας CCTV",
              "Ηλεκτρολογικές εγκαταστάσεις",
            ].map((x, i) => (
              <div className="panel-row" key={x}>
                <b>0{i + 1}</b>
                <span>{x}</span>
              </div>
            ))}

            <div className="panel-foot">
              ΜΕΛΕΤΗ · ΕΓΚΑΤΑΣΤΑΣΗ · ΤΕΧΝΙΚΗ ΥΠΟΣΤΗΡΙΞΗ
            </div>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container trust-inner">
          <span>ΤΕΧΝΙΚΗ ΕΞΕΙΔΙΚΕΥΣΗ</span>
          <span>ΣΥΓΧΡΟΝΟΣ ΣΧΕΔΙΑΣΜΟΣ</span>
          <span>ΑΞΙΟΠΙΣΤΕΣ ΛΥΣΕΙΣ</span>
          <span>ΘΕΣΣΑΛΟΝΙΚΗ &amp; ΓΥΡΩ ΠΕΡΙΟΧΕΣ</span>
        </div>
      </div>

      <section className="section" id="ypiresies">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ color: "#2469b2" }}>
                ΥΠΗΡΕΣΙΕΣ ΗΛΕΚΤΡΟΛΟΓΟΥ ΜΗΧΑΝΙΚΟΥ
              </div>
              <h2>
                Ηλεκτρολογικές &amp; ηλεκτρομηχανολογικές
                <br />
                <span>υπηρεσίες στη Θεσσαλονίκη.</span>
              </h2>
            </div>

            <p>
              Παρέχονται τεχνικές υπηρεσίες για ιδιώτες και επαγγελματίες:
              από την έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης (ΠΕΑ) και
              πιστοποιητικών πυρασφάλειας έως τις ηλεκτρολογικές μελέτες,
              τις εγκαταστάσεις και τα συστήματα ασφαλείας. Κάθε έργο
              αντιμετωπίζεται με τεχνική συνέπεια και προσαρμογή στις
              πραγματικές του ανάγκες.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card" key={s.n}>
                <div className="service-num">
                  {s.n}
                  <span>↗</span>
                </div>
                <div className="service-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link className="more" href={s.href}>
                  Περισσότερα για την υπηρεσία <span>↗</span>
                </Link>
              </article>
            ))}

            <div
              className="service-card"
              style={{ background: "#08294c", color: "white" }}
            >
              <div className="service-tag" style={{ color: "#f5bd16" }}>
                ΕΠΙΚΟΙΝΩΝΗΣΤΕ
              </div>
              <h3 style={{ color: "white", fontSize: 25 }}>
                Ας συζητήσουμε τις ανάγκες του έργου σας.
              </h3>
              <p style={{ color: "#c5d5e6" }}>
                Επικοινωνήστε για να εξετάσουμε τις τεχνικές απαιτήσεις και
                την κατάλληλη λύση για τον χώρο σας.
              </p>
              <Link
                className="more"
                style={{ color: "#f5bd16" }}
                href="/#epikoinonia"
              >
                Ζητήστε προσφορά ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="sxetika">
        <div className="container about-grid">
          <div className="about-art" aria-hidden="true">
            <strong>
              NI<span>.</span>
            </strong>
          </div>

          <div className="about-copy">
            <div className="eyebrow">ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ</div>
            <h2>
              Τεχνική γνώση
              <br />
              στην <span>πράξη.</span>
            </h2>

            <p>
              Είμαι ο Νίκος Ισκής, MSc Ηλεκτρολόγος Μηχανικός, με
              αντικείμενο τις ηλεκτρολογικές και ηλεκτρομηχανολογικές
              μελέτες, την τεχνική υποστήριξη και την υλοποίηση τεχνικών
              έργων.
            </p>

            <p>
              Στόχος μου είναι η παροχή αξιόπιστων και τεκμηριωμένων
              τεχνικών λύσεων, με βάση τις ανάγκες κάθε έργου, τις
              ισχύουσες τεχνικές απαιτήσεις και τη συνέπεια σε κάθε στάδιο
              της συνεργασίας.
            </p>

            <div className="about-points">
              <div>
                <b>01</b> Τεκμηριωμένη τεχνική προσέγγιση
              </div>
              <div>
                <b>02</b> Λύσεις προσαρμοσμένες στις ανάγκες του έργου
              </div>
              <div>
                <b>03</b> Υπεύθυνη τεχνική υποστήριξη
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="empeiria">
        <div className="container experience-grid">
          <div>
            <div className="eyebrow" style={{ color: "#2469b2" }}>
              ΕΜΠΕΙΡΙΑ &amp; ΑΝΤΙΚΕΙΜΕΝΟ
            </div>
            <h2
              className="section-head"
              style={{ display: "block", marginTop: 15 }}
            >
              Μελέτη με
              <br />
              τεχνική <span style={{ color: "#2469b2" }}>συνέπεια.</span>
            </h2>
          </div>

          <div>
            <p>
              Εμπειρία σε ηλεκτρομηχανολογικές μελέτες και τεχνικά έργα,
              με αντικείμενο ισχυρά και ασθενή ρεύματα, φωτισμό, γειώσεις,
              αντικεραυνική προστασία, HVAC και ηλεκτρολογικές
              εγκαταστάσεις κτιρίων.
            </p>

            <div className="experience-list">
              <div>
                <b>01</b> Ηλεκτρολογικές εγκαταστάσεις και διανομή ισχύος
              </div>
              <div>
                <b>02</b> Φωτισμός, γειώσεις και αντικεραυνική προστασία
              </div>
              <div>
                <b>03</b> HVAC και ηλεκτρομηχανολογικές εγκαταστάσεις
              </div>
              <div>
                <b>04</b> Μελέτες και τεχνική υποστήριξη έργων
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="epikoinonia">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">ΕΠΙΚΟΙΝΩΝΙΑ</div>
            <h2>
              Έχετε ένα έργο
              <br />
              στο μυαλό σας;
              <br />
              <span>Ας μιλήσουμε.</span>
            </h2>
          </div>

          <div className="contact-copy">
            <p>
              Επικοινωνήστε για Πιστοποιητικά Ενεργειακής Απόδοσης (ΠΕΑ),
              πιστοποιητικά πυρασφάλειας, ΥΔΕ, ηλεκτρομηχανολογικές μελέτες,
              ηλεκτρολογικές εργασίες και συστήματα ασφαλείας στη
              Θεσσαλονίκη και την ευρύτερη περιοχή.
            </p>

            <div className="contact-details">
              <a href="tel:+306970426048">
                <b>Τ</b> 697 042 6048
              </a>
              <a href="mailto:info@nikosiskis.gr">
                <b>Ε</b> info@nikosiskis.gr
              </a>
              <span>
                <b>Π</b> Θεσσαλονίκη &amp; ευρύτερη περιοχή
              </span>
            </div>

            <a
              className="button button-primary"
              href="mailto:info@nikosiskis.gr?subject=Αίτημα%20τεχνικής%20προσφοράς"
            >
              Ζητήστε τεχνική προσφορά ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
