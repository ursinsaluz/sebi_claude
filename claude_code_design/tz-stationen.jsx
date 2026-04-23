/* global React, TzNav, TzFooter */

const TzStationen = () => {
  // Chronologisch rückwärts — aktuellste zuerst
  const stations = [
    {
      year: 'seit 2025',
      title: 'Klinik Gut & Restaurant Pinot',
      place: 'Fläsch, Graubünden',
      role: 'Küchenchef',
      awards: ['aktuell'],
      body: 'Rückkehr zur Intimität. Schnörkellose Gerichte mit Wow-Effekt in der Bündner Herrschaft. Zwischen Reben, Rheintal und Alpstein.',
      img: 'img/pinot-11.jpg',
      current: true,
    },
    {
      year: '2019 – 2025',
      title: 'Restaurant Verve by Sven',
      place: 'Grand Resort Bad Ragaz',
      role: 'Küchenchef · Executive Sous Chef',
      awards: ['1★ Michelin', '15 GaultMillau', 'Manager of the Quarter 2022'],
      body: 'Verantwortung für 15 GaultMillau-Punkte und einen Michelin-Stern. Konzeption und Umsetzung des Lifestyle- und Health-Konzepts. Führung von 16 Mitarbeitenden, Ausbildung von Lernenden.',
      img: 'img/pinot-15.jpg',
    },
    {
      year: '2015 – 2018',
      title: 'Hotel Villa Honegg',
      place: 'Ennetbürgen',
      role: 'Küchenchef',
      awards: ['14 GaultMillau'],
      body: 'Verantwortung für 14 GaultMillau-Punkte. Führung von 12 Mitarbeitenden und Ausbildung von zwei Lernenden. Bühne mit Panorama auf den Vierwaldstättersee.',
      img: 'img/pinot-10.jpg',
    },
    {
      year: '2008 – 2015',
      title: 'Gasthof Rössli',
      place: 'Escholzmatt, Entlebuch',
      role: 'Küchenchef bei Stefan Wiesner',
      awards: ['1★ Michelin', '17 GaultMillau', 'Lehrmeister-Nomination 2013'],
      body: 'Sieben Jahre mit dem „Hexer aus dem Entlebuch". Heusuppe, Moor, Natur pur. Führung von 6 Mitarbeitenden und drei Lernenden. Nomination „Zukunftsträger — Lehrmeister des Jahres" 2013.',
      img: 'img/wiesner-1.jpg',
    },
    {
      year: '2007 – 2008',
      title: 'Hotel Restaurant Jörg Müller',
      place: 'Westerland, Sylt',
      role: 'Chef de Partie · Garde Manger',
      awards: ['1★ Michelin', '18 GaultMillau'],
      body: 'Prägende Inselzeit. Nordische Klarheit, französisches Handwerk, Meer — auf höchstem Niveau.',
      img: 'img/dish-3.jpg',
    },
    {
      year: '2006 – 2007',
      title: 'Tschuggen Grand Hotel',
      place: 'Arosa',
      role: 'Chef de Partie Entremetier · Pasta',
      awards: ['14 GaultMillau'],
      body: 'Grand Restaurant & La Vetta. Alpine Grande-Hotellerie, Disziplin, Tempo.',
      img: 'img/dish-2.jpg',
    },
    {
      year: '2006',
      title: 'Le Club by Armin Amrein',
      place: 'Bürgenstock Resorts',
      role: 'Demi-Chef Saucier',
      awards: ['17 GaultMillau'],
      body: 'Saucenwerkstatt in einer der präzisesten Küchen der Schweiz.',
      img: 'img/dish-1.jpg',
    },
    {
      year: '2005 – 2006',
      title: 'Tschuggen Grand Hotel',
      place: 'Arosa',
      role: 'Commis Tournant · Garde Manger / La Vetta',
      awards: [],
      body: 'Rückkehr auf vertrautes Parkett — diesmal als Commis auf Wanderschaft durch alle Posten.',
      img: 'img/roessli-1.jpg',
    },
    {
      year: '2002 – 2005',
      title: 'Frühe Stationen',
      place: 'Zermatt · Davos · Küssnacht',
      role: 'Chef de Partie',
      awards: [],
      body: 'Seiler Hotels Schweizerhof (Zermatt), Sheraton Derby (Davos), Hirschen (Küssnacht). Die Jahre, in denen man lernt, dass Disziplin das Fundament jeder Kreativität ist.',
      img: 'img/roessli-3.jpg',
    },
  ];

  // Aus- und Weiterbildung
  const education = [
    { year: '2014 – 2016', title: 'HFP — Eidg. Dipl. Küchenchef', place: 'Hotel & Gastro Formation Weggis', note: 'Höchster Bildungsabschluss im Schweizer Gastgewerbe.' },
    { year: '2011 – 2012', title: 'Chefkoch mit Eidg. Fachausweis', place: 'Weggis', note: 'Weiterbildung zum Chefkoch.' },
    { year: '2003 – 2004', title: 'Militärischer Küchenchef · Unteroffizier', place: 'Schweizer Armee', note: 'Dienstpflicht erfüllt.' },
    { year: '1999 – 2002', title: 'Koch EFZ', place: 'Restaurant Schneggen, Buchs SG', note: 'Grundbildung — 14 GaultMillau.' },
  ];

  // Besondere Qualifikationen & Projekte
  const qualifications = [
    { kind: 'Publikation', year: '2011', title: '„Avantgardistische Naturküche"', note: 'Mitautor von Stefan Wiesner. Rezeptentwicklung und Dokumentation.' },
    { kind: 'Weiterbildung', year: '—', title: 'Gewaltfreie Kommunikation', note: 'Kommunikationstraining für Kaderkräfte.' },
    { kind: 'Qualifikation', year: '—', title: 'IT & Sprachen', note: 'Branchensoftware (Mirus, Eurotime, Kochtopf) · DE, EN, FR.' },
  ];

  // Hobbies & Interessen — mit korrekten Fotos
  const hobbies = [
    { title: 'Trailrunning', note: 'Auf den Bündner Bergen. Der ideale Ausgleich zum Küchenalltag — und Quelle neuer Inspiration.', img: 'img/dish-1.jpg' },
    { title: 'Skitouren', note: 'Die Berge abseits der Pisten erkunden.', img: 'img/dish-4.jpg' },
    { title: 'Mountainbiken', note: 'In der freien Natur, am liebsten auf alpinem Terrain.', img: 'img/terroir-1.jpg' },
    { title: 'Sauerteig & Backen', note: 'Langsame Fermentation, perfekte Kruste, einzigartiger Geschmack — handwerkliche Prozesse als pure Magie.', img: null, placeholder: 'Platzhalter — Sauerteigbrot' },
    { title: 'Garten', note: 'Pflege und Anbau im eigenen Garten. Bezug zur Natur bewahren — und zur Saison.', img: null, placeholder: 'Platzhalter — Garten' },
    { title: 'Yoga', note: 'Zum Ausgleich, zur Konzentration.', img: null, placeholder: 'Platzhalter — Yoga' },
    { title: 'Pfadfinder & Lagerkoch', note: 'Früh entdeckt: das Arbeiten im Team und die Liebe zum Kochen über offenem Feuer. Diese Wurzeln prägen den Führungsstil bis heute.', img: 'img/dish-2.jpg' },
  ];

  return (
    <div className="tz-root" style={{ width: 1440, background: 'var(--paper)' }}>
      <TzNav current="stationen" />

      {/* Hero */}
      <section style={{ padding: '100px 56px 80px', borderBottom: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 20 }}>Werdegang — Sebastian Titz</div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 className="tz-display" style={{ fontSize: 168, margin: 0, fontWeight: 300, lineHeight: 0.88 }}>
            Stationen<span style={{ color: 'var(--ember)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: 'var(--ink-2)', paddingBottom: 20, margin: 0 }}>
            Über zwanzig Jahre, ein Dutzend Küchen, ein roter Faden: Respekt vor dem Produkt, vor dem Ursprung, vor dem Handwerk.
          </p>
        </div>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid var(--rule-soft)', paddingTop: 32 }}>
          {[
            ['2002', 'Eintritt in die Küche'],
            ['12', 'Stationen insgesamt'],
            ['17', 'GaultMillau-Punkte (max.)'],
            ['2', 'Michelin-Sterne-Häuser'],
          ].map(([v, l], i) => (
            <div key={i}>
              <div className="tz-display" style={{ fontSize: 56, fontWeight: 300, lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline — Stationen */}
      <section style={{ padding: '80px 56px 60px', position: 'relative' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 48 }}>§ 01 — Stationen · chronologisch</div>
        <div style={{ position: 'absolute', left: 376, top: 180, bottom: 60, width: 1, background: 'var(--rule)' }} />

        {stations.map((s, i) => (
          <article key={i} style={{ display: 'grid', gridTemplateColumns: '260px 60px 1fr 480px', gap: 40, padding: '44px 0', borderBottom: i < stations.length - 1 ? '1px solid var(--rule-soft)' : 'none', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: 8 }}>{s.year}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember-deep)' }}>Nº {String(stations.length - i).padStart(2, '0')}</div>
              {s.current && <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember)' }}><span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--ember)' }} />&nbsp;aktuell</div>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: s.current ? 'var(--ember)' : 'var(--ink)', border: '3px solid var(--paper)', boxShadow: '0 0 0 1px ' + (s.current ? 'var(--ember)' : 'var(--ink)') }} />
            </div>
            <div>
              <h2 className="tz-display" style={{ fontSize: 44, margin: 0, fontWeight: 400, lineHeight: 1.05 }}>{s.title}</h2>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--ink-2)', marginTop: 8 }}>{s.place}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 12 }}>{s.role}</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginTop: 20, maxWidth: 440 }}>{s.body}</p>
              {s.awards.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {s.awards.map((a, j) => (
                    <span key={j} style={{ padding: '6px 12px', border: '1px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {a}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div style={{ height: 280, overflow: 'hidden', background: 'var(--paper-2)' }}>
              <img src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </article>
        ))}
      </section>

      {/* Aus- und Weiterbildung */}
      <section style={{ padding: '80px 56px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 48 }}>§ 02 — Aus- und Weiterbildung</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 64px' }}>
          {education.map((e, i) => (
            <div key={i} style={{ paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--ember-deep)', marginBottom: 12 }}>{e.year}</div>
              <h3 className="tz-display" style={{ fontSize: 28, margin: '0 0 6px', fontWeight: 400, lineHeight: 1.2 }}>{e.title}</h3>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-3)', marginBottom: 12 }}>{e.place}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{e.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Besondere Qualifikationen & Projekte */}
      <section style={{ padding: '80px 56px' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 48 }}>§ 03 — Besondere Qualifikationen & Projekte</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {qualifications.map((q, i) => (
            <div key={i} style={{ padding: 32, border: '1px solid var(--rule)', background: 'var(--paper)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember-deep)', marginBottom: 20 }}>
                <span>{q.kind}</span><span>{q.year}</span>
              </div>
              <h3 className="tz-display" style={{ fontSize: 26, margin: '0 0 14px', fontWeight: 400, lineHeight: 1.25 }}>{q.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{q.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies & Interessen */}
      <section style={{ padding: '80px 56px', background: 'var(--paper-3)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div className="tz-eyebrow">§ 04 — Hobbies & Interessen</div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--ink-3)', maxWidth: 460 }}>
            „Am liebsten jede freie Minute in der Natur." — Natur, Handwerk und Bewegung als Gegengewicht zum hektischen Küchenalltag.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {hobbies.map((h, i) => (
            <div key={i} style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}>
              <div style={{ aspectRatio: '4 / 5', background: 'var(--paper-2)', position: 'relative', overflow: 'hidden' }}>
                {h.img ? (
                  <img src={h.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }} />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, background: 'repeating-linear-gradient(45deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)', color: 'var(--ink-3)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Foto fehlt</div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, textAlign: 'center', padding: '0 16px' }}>{h.placeholder}</div>
                  </div>
                )}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember-deep)', marginBottom: 10 }}>Nº {String(i + 1).padStart(2, '0')}</div>
                <h3 className="tz-display" style={{ fontSize: 22, margin: '0 0 10px', fontWeight: 400 }}>{h.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{h.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote block */}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '120px 56px', textAlign: 'center' }}>
        <div className="tz-eyebrow" style={{ color: 'var(--ember)', marginBottom: 32 }}>Roter Faden</div>
        <blockquote className="tz-display" style={{ fontSize: 72, margin: '0 auto', maxWidth: 1100, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.08 }}>
          „Jede Station war eine Küche — und jede Küche war eine Lektion in <span style={{ color: 'var(--ember)' }}>Demut</span>."
        </blockquote>
        <div style={{ marginTop: 40, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>
          — Sebastian Titz
        </div>
      </section>

      <TzFooter />
    </div>
  );
};

window.TzStationen = TzStationen;
