/* global React, TzLogo, TzArrow, TzStar, TzNav, TzFooter */

// HOME page — desktop, 1440 width
const TzHome = () => {
  return (
    <div className="tz-root" style={{ width: 1440, minHeight: 2400, background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      {/* Nav — sits on hero image */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 }}>
        <TzNav current="home" dark />
      </div>

      {/* ─── HERO ─────────────────────────────────── */}
      <section style={{ position: 'relative', height: 860, overflow: 'hidden', background: '#1a1a18' }}>
        <img src="img/pinot-11.jpg" alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.78 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,26,24,0.55) 0%, rgba(26,26,24,0.15) 35%, rgba(26,26,24,0.75) 100%)' }} />

        {/* Hero text */}
        <div style={{ position: 'absolute', left: 56, right: 56, bottom: 80, color: '#f4efe7' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 48 }}>
            <div>
              <div className="tz-eyebrow" style={{ color: 'rgba(244,239,231,0.7)', marginBottom: 24 }}>
                <span style={{ color: 'var(--ember)' }}>●</span>&nbsp;&nbsp;Küchenchef · Restaurant Pinot · Fläsch
              </div>
              <h1 className="tz-display" style={{ fontSize: 168, margin: 0, lineHeight: 0.88, fontWeight: 300 }}>
                Authentisch.<br/>
                <span className="it" style={{ fontStyle: 'italic', fontWeight: 400 }}>Regional.</span><br/>
                <span style={{ color: 'var(--ember)' }}>Exzellent.</span>
              </h1>
            </div>
            <div style={{ textAlign: 'right', paddingBottom: 20 }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 20, fontStyle: 'italic', lineHeight: 1.4, maxWidth: 340, fontWeight: 300, margin: 0, opacity: 0.9 }}>
                Kulinarik zwischen Michelin-Stern und Bündner Bodenständigkeit.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'flex-end' }}>
                <a className="tz-btn ember" href="#philo">Meine Philosophie <TzArrow /></a>
                <a className="tz-btn ghost" href="#kontakt" style={{ borderColor: '#f4efe7', color: '#f4efe7' }}>Kontakt aufnehmen</a>
              </div>
            </div>
          </div>
        </div>

        {/* Corner marks */}
        <div style={{ position: 'absolute', top: 120, left: 56, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(244,239,231,0.55)' }}>
          46°59′N · 09°31′E
        </div>
        <div style={{ position: 'absolute', top: 120, right: 56, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(244,239,231,0.55)', textAlign: 'right' }}>
          EST. MMXXIV<br/>Nº 001
        </div>
      </section>

      {/* ─── Auszeichnungen bar ─────────────────────── */}
      <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--paper)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '36px 56px' }}>
          {[
            { big: '16', small: 'GaultMillau', sub: 'Punkte 2024' },
            { big: '1★', small: 'Michelin Stern', sub: 'Verve · Rössli · Jörg Müller' },
            { big: 'Bib', small: 'Gourmand', sub: 'Restaurant Pinot 2024' },
            { big: '20', small: 'Jahre', sub: 'in der Gourmetgastronomie' },
          ].map((a, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'baseline', gap: 20,
              paddingLeft: i === 0 ? 0 : 40,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-soft)'
            }}>
              <div className="tz-display" style={{ fontSize: 64, fontWeight: 300, lineHeight: 1 }}>{a.big}</div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic' }}>{a.small}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 4 }}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHIE ───────────────────────────── */}
      <section id="philo" style={{ padding: '140px 56px 120px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 80, marginBottom: 80 }}>
          <div>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>§ 01 — Philosophie</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.7 }}>
              Drei Worte, die alles sagen.<br/>
              Drei Prinzipien, die bleiben.
            </div>
          </div>
          <h2 className="tz-display" style={{ fontSize: 96, margin: 0, fontWeight: 300, maxWidth: 900 }}>
            Kochen ist für mich ein <span className="it" style={{ fontStyle: 'italic' }}>tiefer Respekt</span> vor dem Ursprung unserer Nahrung.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, borderTop: '1px solid var(--rule)', paddingTop: 48 }}>
          {[
            { n: '01', t: 'Authentisch', lead: 'Ehrlich und ohne Schnickschnack.', body: 'Ich koche so, wie ich bin: bodenständig und direkt. Schnörkellose Gerichte, ohne Chichi, aber mit einem echten Wow-Effekt im Mund.', img: 'img/pinot-07.jpg' },
            { n: '02', t: 'Regional', lead: 'Aus der Heimat auf den Teller.', body: 'Die besten Lebensmittel finde ich direkt hier. Enge Zusammenarbeit mit lokalen Produzenten — gekocht wird frisch und im Rhythmus der vier Jahreszeiten.', img: 'img/terroir-1.jpg' },
            { n: '03', t: 'Exzellent', lead: 'Die Natur als Massstab.', body: 'Der Goldene Schnitt. Die Fibonacci-Reihe. Natürliche Ordnung inspiriert mich beim Anrichten — bis daraus mit einem guten Glas Wein ein Erlebnis wird.', img: 'img/dish-2.jpg' },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--ember)', marginBottom: 24 }}>§ {p.n}</div>
              <div style={{ height: 300, background: 'var(--paper-2)', marginBottom: 28, overflow: 'hidden' }}>
                <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.95)' }} />
              </div>
              <h3 className="tz-display" style={{ fontSize: 40, margin: '0 0 12px', fontWeight: 400 }}>{p.t}</h3>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic', color: 'var(--ink-2)', margin: '0 0 16px', lineHeight: 1.4 }}>{p.lead}</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-3)', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EDITORIAL SPREAD — the chef ───────────── */}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '120px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ height: 620, overflow: 'hidden', position: 'relative' }}>
            <img src="img/pinot-15.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: '#f4efe7', opacity: 0.7 }}>
              FIG. 01 — In der Küche, Restaurant Pinot, Fläsch
            </div>
          </div>
          <div>
            <div className="tz-eyebrow" style={{ color: 'var(--ember)', marginBottom: 24 }}>§ 02 — Der Koch</div>
            <h2 className="tz-display" style={{ fontSize: 72, margin: 0, fontWeight: 300, lineHeight: 0.98 }}>
              Sebastian <span className="it" style={{ fontStyle: 'italic', color: 'var(--ember)' }}>Titz</span>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, marginTop: 28, marginBottom: 32, maxWidth: 520, opacity: 0.9 }}>
              Zwanzig Jahre Gourmetküche. Ein Michelin-Stern. 16 GaultMillau-Punkte. Und immer noch das Lagerfeuer aus dem Pfadilager im Kopf.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 480, opacity: 0.75 }}>
              Aufgewachsen in Graubünden, geformt in den grössten Küchen der Schweiz, zurückgekehrt in die Bündner Herrschaft. Im Restaurant Pinot kocht Sebastian Titz eine Küche, die das Terroir kennt — und den Gast respektiert.
            </p>
            <div style={{ marginTop: 48, display: 'flex', gap: 16 }}>
              <a href="#stationen" className="tz-btn ember">Stationen ansehen <TzArrow /></a>
              <a href="#philo" className="tz-btn ghost" style={{ borderColor: '#f4efe7', color: '#f4efe7' }}>Philosophie lesen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE DISHES ──────────────────────── */}
      <section style={{ padding: '120px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>§ 03 — Signature Dishes</div>
            <h2 className="tz-display" style={{ fontSize: 88, margin: 0, fontWeight: 300 }}>
              Die <span className="it" style={{ fontStyle: 'italic' }}>Sprache</span> des Tellers.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="tz-btn ghost" style={{ width: 48, height: 48, padding: 0, justifyContent: 'center' }}>←</button>
            <button className="tz-btn primary" style={{ width: 48, height: 48, padding: 0, justifyContent: 'center' }}>→</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { cat: 'signature', title: 'Milcheis mit Spekulatius', desc: 'Winterliche Aromen treffen auf Finesse. Geflämmte Meringue, Apfel, Spekulatius.', img: 'img/dish-1.jpg', tag: 'Dessert · Winter' },
            { cat: 'signature', title: 'Heusuppe', desc: 'Hommage an Stefan Wiesner. Getrocknetes Heu in einer samtigen Suppe. Natur pur.', img: 'img/moor-1.jpg', tag: 'Suppe · Ganzjährig' },
            { cat: 'starter', title: 'Angus Beef Tartare', desc: 'Hommage an die Erde. Das Rohe des Rindes trifft auf die Textur des Selleries.', img: 'img/dish-3.jpg', tag: 'Vorspeise' },
            { cat: 'signature', title: 'Kalb mit schwarzem Trüffel', desc: 'Heimat trifft Luxus. Zartes Kalb, Tiefe des Trüffels, Serviettenknödel.', img: 'img/dish-4.jpg', tag: 'Hauptgang · Winter' },
          ].map((d, i) => (
            <article key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>
                <span style={{ color: d.cat === 'signature' ? 'var(--ember)' : 'var(--ink-3)' }}>● {d.cat}</span>
                <span>№ 0{i+1}</span>
              </div>
              <div style={{ aspectRatio: '4/5', background: 'var(--paper-2)', marginBottom: 20, overflow: 'hidden' }}>
                <img src={d.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="tz-display" style={{ fontSize: 26, margin: '0 0 10px', fontWeight: 400, lineHeight: 1.1 }}>{d.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-3)', margin: '0 0 14px' }}>{d.desc}</p>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink-4)', textTransform: 'uppercase' }}>{d.tag}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── AKTUELLES ────────────────────────────── */}
      <section style={{ background: 'var(--paper-2)', padding: '120px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 80 }}>
          <div style={{ position: 'sticky', top: 40, height: 'fit-content' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>§ 04 — Aktuelles</div>
            <h2 className="tz-display" style={{ fontSize: 64, margin: '0 0 24px', fontWeight: 300, lineHeight: 0.95 }}>
              Presse &<br/><span className="it" style={{ fontStyle: 'italic' }}>Auszeichnungen</span>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-3)', maxWidth: 280 }}>
              Im Laufe der Jahre wurde meine Art zu kochen nicht nur von geschätzten Gästen, sondern auch von etablierten Kritikern honoriert.
            </p>
          </div>
          <div>
            {[
              { date: '02.01.2026', pub: 'Falstaff', title: 'Restaurants & Beizen Guide 2026', body: 'Das Restaurant Pinot wurde von Falstaff Schweiz ausgezeichnet — für regionale Küche und die kreative Handschrift von Sebastian.', tag: 'Auszeichnung' },
              { date: '21.10.2025', pub: 'Podcast · Was kochst du?!', title: 'Im Gespräch mit Andy Piesche & Felix Jarzina', body: 'Drei Chefs über Küche, Handwerk und den Mut zum Weglassen.', tag: 'Interview' },
              { date: '20.08.2025', pub: 'Porträt', title: 'Mit Leidenschaft kochen', body: 'Ein Rückblick auf 20 Jahre Erfahrung in der Gourmetgastronomie und die Liebe zum Handwerk.', tag: 'Porträt' },
              { date: '15.10.2024', pub: 'Guide Michelin', title: 'Bib Gourmand für das Restaurant Pinot', body: '„Simply brilliant." — ausgezeichnet für exzellentes Preis-Leistungs-Verhältnis.', tag: 'Auszeichnung' },
              { date: '01.10.2024', pub: 'GaultMillau', title: '16 Punkte im Guide 2024', body: 'Wir freuen uns über 16 Punkte im neuen Guide GaultMillau und die Bestätigung unserer Arbeit.', tag: 'Auszeichnung' },
            ].map((n, i) => (
              <article key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 40px', gap: 32, padding: '28px 0', borderTop: '1px solid var(--rule)', alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-2)' }}>{n.date}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember-deep)', marginTop: 6 }}>{n.tag}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-3)', marginBottom: 6 }}>{n.pub}</div>
                  <h3 className="tz-display" style={{ fontSize: 32, margin: '0 0 10px', fontWeight: 400, lineHeight: 1.1 }}>{n.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-3)', margin: 0, maxWidth: 560 }}>{n.body}</p>
                </div>
                <div style={{ alignSelf: 'center', fontSize: 22, color: 'var(--ink)' }}>→</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANGEBOTE ─────────────────────────────── */}
      <section style={{ padding: '120px 56px' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 16 }}>§ 05 — Angebote</div>
        <h2 className="tz-display" style={{ fontSize: 96, margin: '0 0 64px', fontWeight: 300 }}>
          Drei <span className="it" style={{ fontStyle: 'italic' }}>Wege</span>, gemeinsam zu kochen.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { t: 'Beratung', lead: 'Kulinarische Konzepte für Health- & Lifestyle-Resorts.', body: 'Zwanzig Jahre Gourmetgastronomie, übersetzt in tragfähige Konzepte — vom Menü-Engineering bis zur Teamführung.', cta: 'Beratung anfragen', img: 'img/pinot-18.jpg' },
            { t: 'Catering', lead: 'Nachhaltige Sternenküche für Ihren Event.', body: 'Wir bringen exzellenten Genuss zu Ihnen — vom privaten Dinner bis zum Firmen-Anlass, stets mit regionalem Fokus.', cta: 'Weitere Informationen', img: 'img/pinot-17.jpg' },
            { t: 'Restaurant Pinot', lead: 'Rückkehr zur Intimität.', body: 'Schnörkellose Gerichte mit Wow-Effekt in der Bündner Herrschaft. Täglich 09:00 – 18:00, Do abends.', cta: 'Kontakt aufnehmen', img: 'img/terrasse.jpg', featured: true },
          ].map((a, i) => (
            <div key={i} style={{
              padding: 32, border: '1px solid var(--rule)',
              background: a.featured ? 'var(--ink)' : 'var(--paper)',
              color: a.featured ? 'var(--paper)' : 'var(--ink)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 540
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: a.featured ? 'var(--ember)' : 'var(--ink-3)' }}>№ 0{i+1}</div>
                  {a.featured && <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember)' }}>● Flagship</div>}
                </div>
                <h3 className="tz-display" style={{ fontSize: 48, margin: '0 0 16px', fontWeight: 400, lineHeight: 1 }}>{a.t}</h3>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 20, fontStyle: 'italic', margin: '0 0 20px', lineHeight: 1.3, opacity: 0.9 }}>{a.lead}</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.7, margin: 0 }}>{a.body}</p>
              </div>
              <div>
                <div style={{ height: 180, background: 'var(--paper-2)', marginTop: 28, marginBottom: 24, overflow: 'hidden' }}>
                  <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <a className={`tz-btn ${a.featured ? 'ember' : 'ghost'}`} href="#kontakt"
                  style={!a.featured ? { borderColor: 'var(--ink)' } : {}}>
                  {a.cta} <TzArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── KONTAKT / PINOT ─────────────────────── */}
      <section id="kontakt" style={{ background: 'var(--paper-3)', padding: '120px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>§ 06 — Besuchen Sie uns</div>
            <h2 className="tz-display" style={{ fontSize: 88, margin: '0 0 40px', fontWeight: 300, lineHeight: 0.95 }}>
              Restaurant<br/><span className="it" style={{ fontStyle: 'italic', color: 'var(--ember-deep)' }}>Pinot.</span>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', lineHeight: 1.4, marginBottom: 48, maxWidth: 440, color: 'var(--ink-2)' }}>
              Erleben Sie meine neue Küche — in der Bündner Herrschaft, zwischen Reben und Alpen.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
              <div>
                <div className="tz-eyebrow" style={{ marginBottom: 10 }}>Adresse</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.5 }}>
                  Restaurant Pinot<br/>Steigstrasse 14<br/>7306 Fläsch
                </div>
              </div>
              <div>
                <div className="tz-eyebrow" style={{ marginBottom: 10 }}>Öffnungszeiten</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.5 }}>
                  Täglich 09:00 – 18:00<br/>Do Abend ab 18:00
                </div>
              </div>
              <div>
                <div className="tz-eyebrow" style={{ marginBottom: 10 }}>Telefon</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>+41 79 123 45 67</div>
              </div>
              <div>
                <div className="tz-eyebrow" style={{ marginBottom: 10 }}>E-Mail</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>info@titz.cooking</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a className="tz-btn primary" href="#kontakt">Kontakt aufnehmen <TzArrow /></a>
              <a className="tz-btn ghost" href="#">Anfahrt ansehen</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <img src="img/terrasse.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: '#f4efe7' }}>SOMMERTERRASSE</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ overflow: 'hidden' }}><img src="img/pinot-06.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ overflow: 'hidden' }}><img src="img/pinot-19.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE / TICKER ────────────────────── */}
      <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', overflow: 'hidden', padding: '32px 0', background: 'var(--paper)' }}>
        <div className="tz-marquee-track tz-display" style={{ fontSize: 72, fontWeight: 300 }}>
          {Array.from({ length: 2 }).flatMap((_, k) => [
            <span key={`a${k}`}>Authentisch</span>,
            <span key={`dot1${k}`} style={{ color: 'var(--ember)' }}>●</span>,
            <span key={`b${k}`} style={{ fontStyle: 'italic' }}>Regional</span>,
            <span key={`dot2${k}`} style={{ color: 'var(--ember)' }}>●</span>,
            <span key={`c${k}`}>Exzellent</span>,
            <span key={`dot3${k}`} style={{ color: 'var(--ember)' }}>●</span>,
          ])}
        </div>
      </section>

      <TzFooter />
    </div>
  );
};

window.TzHome = TzHome;
