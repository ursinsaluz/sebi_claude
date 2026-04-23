/* global React, TzArrow */

// ─── Mobile Nav ─────────────────────────────────────────
const MobileStatusBar = () => (
  <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', fontFamily: '-apple-system, system-ui', fontSize: 14, fontWeight: 600, background: 'var(--paper)', position: 'relative', zIndex: 10 }}>
    <span>9:41</span>
    <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor"><rect x="0" y="4" width="3" height="6" rx="0.5"/><rect x="4" y="2" width="3" height="8" rx="0.5"/><rect x="8" y="0" width="3" height="10" rx="0.5"/></svg>
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1" y="2" width="19" height="8" rx="2"/><rect x="3" y="4" width="14" height="4" rx="0.5" fill="currentColor"/><rect x="21" y="4.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
    </span>
  </div>
);

const MobileHeader = ({ back = false }) => (
  <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid var(--rule-soft)', background: 'rgba(244,239,231,0.95)', backdropFilter: 'blur(10px)' }}>
    <span style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>
      titz<span style={{ color: 'var(--ember)', fontStyle: 'italic' }}>.</span>cooking
    </span>
    {back ? (
      <span style={{ fontSize: 18, fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>← zurück</span>
    ) : (
      <button style={{ display: 'flex', flexDirection: 'column', gap: 4, background: 'transparent', border: 'none', cursor: 'pointer', padding: 6 }}>
        <span style={{ width: 22, height: 1.5, background: 'var(--ink)' }} />
        <span style={{ width: 22, height: 1.5, background: 'var(--ink)' }} />
      </button>
    )}
  </header>
);

const MobileFooter = () => (
  <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '48px 24px 28px' }}>
    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', lineHeight: 1.3, marginBottom: 32 }}>
      Authentisch.<br/>Regional.<br/>Exzellent.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 32 }}>
      <div>
        <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 10, fontSize: 9 }}>Besuchen</div>
        <div style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>
          Restaurant Pinot<br/>Steigstrasse 14<br/>7306 Fläsch, GR
        </div>
      </div>
      <div>
        <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 10, fontSize: 9 }}>Kontakt</div>
        <div style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>
          info@titz.cooking<br/>+41 79 123 45 67<br/>@titzsebastian
        </div>
      </div>
    </div>

    <div style={{ marginBottom: 24 }}>
      <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 12, fontSize: 9 }}>Navigation</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', fontSize: 13, opacity: 0.85 }}>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Stationen</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Philosophie</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Restaurant</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</a>
      </div>
    </div>

    <div style={{ borderTop: '1px solid rgba(244,239,231,0.15)', paddingTop: 20, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, lineHeight: 2 }}>
      © 2026 Sebastian Titz<br/>
      Fläsch · Bündner Herrschaft · CH<br/>
      v.2026.04
    </div>
  </footer>
);

// ─── Mobile Home ─────────────────────────────────────────
const TzMobileHome = () => (
  <div className="tz-root" style={{ width: 390, background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
    <MobileStatusBar />
    <MobileHeader />

    {/* Hero */}
    <section style={{ position: 'relative', height: 640, overflow: 'hidden', background: '#1a1a18' }}>
      <img src="img/pinot-11.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.78 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,26,24,0.4) 0%, rgba(26,26,24,0.15) 40%, rgba(26,26,24,0.85) 100%)' }} />
      <div style={{ position: 'absolute', top: 20, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'rgba(244,239,231,0.6)' }}>
        <span>46°59′N · 09°31′E</span><span>Nº 001</span>
      </div>
      <div style={{ position: 'absolute', bottom: 32, left: 24, right: 24, color: '#f4efe7' }}>
        <div className="tz-eyebrow" style={{ color: 'rgba(244,239,231,0.75)', marginBottom: 18 }}>
          <span style={{ color: 'var(--ember)' }}>●</span>&nbsp;&nbsp;Küchenchef · Pinot · Fläsch
        </div>
        <h1 className="tz-display" style={{ fontSize: 64, margin: 0, lineHeight: 0.9, fontWeight: 300 }}>
          Authentisch.<br/>
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Regional.</span><br/>
          <span style={{ color: 'var(--ember)' }}>Exzellent.</span>
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.4, marginTop: 20, opacity: 0.9 }}>
          Kulinarik zwischen Michelin-Stern und Bündner Bodenständigkeit.
        </p>
        <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
          <a className="tz-btn ember" style={{ padding: '12px 18px', fontSize: 12 }}>Philosophie <TzArrow size={12} /></a>
          <a className="tz-btn ghost" style={{ padding: '12px 18px', fontSize: 12, borderColor: '#f4efe7', color: '#f4efe7' }}>Kontakt</a>
        </div>
      </div>
    </section>

    {/* Awards row */}
    <section style={{ borderBottom: '1px solid var(--rule)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between' }}>
      {[{b:'16',s:'G.Millau'},{b:'1★',s:'Michelin'},{b:'Bib',s:'Gourmand'}].map((a,i)=>(
        <div key={i} style={{textAlign:'center'}}>
          <div className="tz-display" style={{fontSize:32,fontWeight:300,lineHeight:1}}>{a.b}</div>
          <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--ink-3)',marginTop:4}}>{a.s}</div>
        </div>
      ))}
    </section>

    {/* Philosophy */}
    <section style={{ padding: '48px 24px' }}>
      <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 01 — Philosophie</div>
      <h2 className="tz-display" style={{ fontSize: 40, margin: 0, fontWeight: 300, lineHeight: 1 }}>
        Ein tiefer <span style={{ fontStyle: 'italic' }}>Respekt</span> vor dem Ursprung.
      </h2>
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', marginTop: 28, marginLeft: -24, paddingLeft: 24, paddingRight: 24, paddingBottom: 8 }}>
        {[{n:'01',t:'Authentisch',i:'img/pinot-07.jpg'},{n:'02',t:'Regional',i:'img/terrasse.jpg'},{n:'03',t:'Exzellent',i:'img/pinot-17.jpg'}].map((p,i)=>(
          <div key={i} style={{flex:'0 0 220px'}}>
            <div style={{height:280,background:'var(--paper-2)',overflow:'hidden'}}>
              <img src={p.i} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.2em',color:'var(--ember)',marginTop:12}}>§ {p.n}</div>
            <h3 className="tz-display" style={{fontSize:24,margin:'6px 0 0',fontWeight:400}}>{p.t}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Dark chef spread */}
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '56px 24px' }}>
      <div style={{ height: 400, overflow: 'hidden', marginBottom: 28 }}>
        <img src="img/pinot-15.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="tz-eyebrow" style={{ color: 'var(--ember)', marginBottom: 14 }}>§ 02 — Der Koch</div>
      <h2 className="tz-display" style={{ fontSize: 44, margin: 0, fontWeight: 300, lineHeight: 1 }}>
        Sebastian <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>Titz</span>
      </h2>
      <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.4, marginTop: 16, opacity: 0.9 }}>
        Über zwanzig Jahre Gourmetküche. Ein Michelin-Stern bei Stefan Wiesner. Immer noch das Lagerfeuer aus dem Pfadilager im Kopf.
      </p>
      <a className="tz-btn ember" style={{ marginTop: 20 }}>Stationen ansehen <TzArrow /></a>
    </section>

    {/* Signature */}
    <section style={{ padding: '48px 0 48px 24px' }}>
      <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 03 — Signature</div>
      <h2 className="tz-display" style={{ fontSize: 40, margin: 0, fontWeight: 300, lineHeight: 1 }}>
        Sprache des <span style={{ fontStyle: 'italic' }}>Tellers.</span>
      </h2>
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', marginTop: 24, paddingRight: 24, paddingBottom: 8 }}>
        {[{t:'Kabeljau · Erbse · Bärlauch',i:'img/pinot-13.jpg',c:'signature'},{t:'Amuse — Trilogie',i:'img/pinot-06.jpg',c:'starter'},{t:'Kabeljau · Kaviar',i:'img/pinot-11.jpg',c:'signature'},{t:'Bärlauchblüten · Kalb',i:'img/pinot-17.jpg',c:'signature'},{t:'Erdbeer-Dessert',i:'img/pinot-18.jpg',c:'dessert'}].map((d,i)=>(
          <article key={i} style={{flex:'0 0 240px',borderTop:'1px solid var(--ink)',paddingTop:12}}>
            <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:12}}>
              <span style={{color:d.c==='signature'?'var(--ember)':'var(--ink-3)'}}>● {d.c}</span>
              <span style={{color:'var(--ink-3)'}}>№ 0{i+1}</span>
            </div>
            <div style={{aspectRatio:'4/5',overflow:'hidden',marginBottom:14}}>
              <img src={d.i} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <h3 className="tz-display" style={{fontSize:20,margin:0,fontWeight:400,lineHeight:1.15}}>{d.t}</h3>
          </article>
        ))}
      </div>
    </section>

    {/* Aktuelles */}
    <section style={{ background: 'var(--paper-2)', padding: '48px 24px' }}>
      <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 04 — Aktuelles</div>
      <h2 className="tz-display" style={{ fontSize: 36, margin: '0 0 32px', fontWeight: 300, lineHeight: 1 }}>
        Presse & <span style={{ fontStyle: 'italic' }}>Auszeichnungen.</span>
      </h2>
      {[
        {d:'02.01.26',p:'Falstaff',t:'Guide 2026 — Pinot ausgezeichnet'},
        {d:'21.10.25',p:'Podcast',t:'Was kochst du?! mit Piesche & Jarzina'},
        {d:'15.10.24',p:'Michelin',t:'Bib Gourmand für das Restaurant Pinot'},
        {d:'01.10.24',p:'GaultMillau',t:'16 Punkte im Guide 2024'},
      ].map((n,i)=>(
        <article key={i} style={{padding:'20px 0',borderTop:'1px solid var(--rule)',display:'grid',gridTemplateColumns:'70px 1fr 20px',gap:14,alignItems:'start'}}>
          <div style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.05em'}}>{n.d}</div>
          <div>
            <div style={{fontFamily:'var(--serif)',fontStyle:'italic',fontSize:12,color:'var(--ink-3)',marginBottom:4}}>{n.p}</div>
            <h3 className="tz-display" style={{fontSize:18,margin:0,fontWeight:400,lineHeight:1.2}}>{n.t}</h3>
          </div>
          <div style={{fontSize:16}}>→</div>
        </article>
      ))}
    </section>

    {/* Pinot card */}
    <section style={{ background: 'var(--paper-3)', padding: '48px 24px' }}>
      <div className="tz-eyebrow" style={{ marginBottom: 14 }}>§ 05 — Besuchen</div>
      <h2 className="tz-display" style={{ fontSize: 56, margin: 0, fontWeight: 300, lineHeight: 0.95 }}>
        Restaurant<br/><span style={{ fontStyle: 'italic', color: 'var(--ember-deep)' }}>Pinot.</span>
      </h2>
      <div style={{ height: 240, overflow: 'hidden', margin: '28px 0' }}>
        <img src="img/terrasse.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.5 }}>
        Steigstrasse 14 · 7306 Fläsch<br/>Täglich 09:00 – 18:00 · Do Abend ab 18:00
      </div>
      <a className="tz-btn primary" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>Kontakt aufnehmen <TzArrow /></a>
    </section>

    <MobileFooter />
  </div>
);

// ─── Mobile Stationen — real CV ─────────────────────────
const TzMobileStationen = () => {
  const items = [
    { y: 'seit 2025', t: 'Klinik Gut & Pinot', p: 'Fläsch', r: 'Küchenchef', a: ['aktuell'], i: 'img/pinot-11.jpg', cur: true },
    { y: '2019 – 25', t: 'Verve by Sven', p: 'Grand Resort Bad Ragaz', r: 'Küchenchef', a: ['1★', '15 GM'], i: 'img/pinot-15.jpg' },
    { y: '2015 – 18', t: 'Villa Honegg', p: 'Ennetbürgen', r: 'Küchenchef', a: ['14 GM'], i: 'img/pinot-10.jpg' },
    { y: '2008 – 15', t: 'Gasthof Rössli', p: 'Escholzmatt · Wiesner', r: 'Küchenchef', a: ['1★', '17 GM'], i: 'img/wiesner-1.jpg' },
    { y: '2007 – 08', t: 'Jörg Müller', p: 'Sylt', r: 'Chef de Partie', a: ['1★', '18 GM'], i: 'img/dish-3.jpg' },
    { y: '2006 – 07', t: 'Tschuggen Grand', p: 'Arosa', r: 'Chef de Partie', a: ['14 GM'], i: 'img/dish-2.jpg' },
    { y: '2006', t: 'Le Club · Amrein', p: 'Bürgenstock', r: 'Demi-Chef Saucier', a: ['17 GM'], i: 'img/dish-1.jpg' },
    { y: '2002 – 05', t: 'Frühe Stationen', p: 'Zermatt · Davos · Küssnacht', r: 'Chef de Partie', a: [], i: 'img/roessli-3.jpg' },
  ];
  return (
    <div className="tz-root" style={{ width: 390, background: 'var(--paper)', position: 'relative' }}>
      <MobileStatusBar />
      <MobileHeader back />

      <section style={{ padding: '40px 24px 24px', borderBottom: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 12 }}>Werdegang</div>
        <h1 className="tz-display" style={{ fontSize: 72, margin: 0, fontWeight: 300, lineHeight: 0.88 }}>
          Stationen<span style={{ color: 'var(--ember)' }}>.</span>
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-2)', marginTop: 16 }}>
          Über zwanzig Jahre, ein Dutzend Küchen, ein roter Faden.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--rule-soft)' }}>
          {[['2002', 'Eintritt'], ['12', 'Stationen'], ['17', 'GM-Punkte max.'], ['2', '★-Häuser']].map(([v, l], i) => (
            <div key={i}>
              <div className="tz-display" style={{ fontSize: 34, fontWeight: 300, lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '32px 24px 24px', position: 'relative' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 24 }}>§ 01 — Stationen</div>
        <div style={{ position: 'absolute', left: 36, top: 76, bottom: 24, width: 1, background: 'var(--rule)' }} />
        {items.map((s, i) => (
          <article key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 20, paddingBottom: 32, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: s.cur ? 'var(--ember)' : 'var(--ink)', border: '2px solid var(--paper)', boxShadow: '0 0 0 1px ' + (s.cur ? 'var(--ember)' : 'var(--ink)'), zIndex: 1 }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', marginBottom: 4 }}>{s.y}</div>
              <h3 className="tz-display" style={{ fontSize: 26, margin: 0, fontWeight: 400, lineHeight: 1.05 }}>{s.t}</h3>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-3)', marginTop: 4 }}>{s.p}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 8 }}>{s.r}</div>
              <div style={{ height: 180, background: 'var(--paper-2)', overflow: 'hidden', marginTop: 14 }}>
                <img src={s.i} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {s.a.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                  {s.a.map((a, j) => (
                    <span key={j} style={{ padding: '4px 10px', border: '1px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Ausbildung */}
      <section style={{ padding: '32px 24px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 20 }}>§ 02 — Aus- & Weiterbildung</div>
        {[
          { y: '2014 – 16', t: 'HFP — Eidg. Dipl. Küchenchef', p: 'Weggis' },
          { y: '2011 – 12', t: 'Chefkoch · Eidg. FA', p: 'Weggis' },
          { y: '2003 – 04', t: 'Militärischer Küchenchef', p: 'Schweizer Armee' },
          { y: '1999 – 02', t: 'Koch EFZ', p: 'Schneggen, Buchs SG · 14 GM' },
        ].map((e, i) => (
          <div key={i} style={{ padding: '18px 0', borderTop: '1px solid var(--rule)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ember-deep)', marginBottom: 6 }}>{e.y}</div>
            <h3 className="tz-display" style={{ fontSize: 20, margin: '0 0 4px', fontWeight: 400 }}>{e.t}</h3>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-3)' }}>{e.p}</div>
          </div>
        ))}
      </section>

      {/* Hobbies */}
      <section style={{ padding: '32px 24px', background: 'var(--paper-3)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 20 }}>§ 03 — Hobbies & Interessen</div>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.4, margin: '0 0 24px' }}>
          „Am liebsten jede freie Minute in der Natur."
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {[
            { t: 'Trailrunning', i: 'img/dish-1.jpg' },
            { t: 'Skitouren', i: 'img/dish-4.jpg' },
            { t: 'Mountainbike', i: 'img/terroir-1.jpg' },
            { t: 'Pfadfinder', i: 'img/dish-2.jpg' },
            { t: 'Sauerteig', i: null },
            { t: 'Garten', i: null },
          ].map((h, i) => (
            <div key={i} style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}>
              <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', background: 'var(--paper-2)', position: 'relative' }}>
                {h.i ? (
                  <img src={h.i} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'repeating-linear-gradient(45deg, var(--paper-2) 0 8px, var(--paper-3) 8px 16px)', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--ink-3)' }}>
                    Foto folgt
                  </div>
                )}
              </div>
              <div style={{ padding: '10px 12px', fontFamily: 'var(--serif)', fontSize: 14, fontWeight: 500 }}>{h.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '56px 24px', textAlign: 'center' }}>
        <div className="tz-eyebrow" style={{ color: 'var(--ember)', marginBottom: 20 }}>Roter Faden</div>
        <blockquote className="tz-display" style={{ fontSize: 28, margin: 0, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }}>
          „Jede Station war eine Küche — und jede Küche war eine Lektion in <span style={{ color: 'var(--ember)' }}>Demut</span>."
        </blockquote>
        <div style={{ marginTop: 28, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>
          — Sebastian Titz
        </div>
      </section>

      <MobileFooter />
    </div>
  );
};

Object.assign(window, { TzMobileHome, TzMobileStationen });
