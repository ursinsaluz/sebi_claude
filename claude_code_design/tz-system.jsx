/* global React */

const TzSystem = () => (
  <div className="tz-root" style={{ width: 1440, minHeight: 2000, background: 'var(--paper)', padding: '64px 64px 96px', position: 'relative' }}>
    {/* header */}
    <div style={{ borderBottom: '1px solid var(--ink)', paddingBottom: 32, marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <div className="tz-eyebrow" style={{ marginBottom: 14 }}>Design System — v.2026.04</div>
        <h1 className="tz-display" style={{ fontSize: 120, margin: 0, fontWeight: 300, lineHeight: 0.9 }}>
          titz<span style={{ color: 'var(--ember)', fontStyle: 'italic' }}>.</span>cooking
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink-2)', marginTop: 16, maxWidth: 620 }}>
          Ein alpin-editoriales System. Papier &amp; Tinte, eine Glut aus dem Feuer, eine Schriftfamilie mit Charakter.
        </p>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', textAlign: 'right', lineHeight: 1.8 }}>
        Sebastian Titz<br/>Restaurant Pinot<br/>46°59′N · 09°31′E
      </div>
    </div>

    {/* COLOR */}
    <section style={{ marginBottom: 80 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64 }}>
        <div>
          <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 01 — Gewürze</div>
          <h2 className="tz-display" style={{ fontSize: 56, margin: 0, fontWeight: 300 }}>Farben</h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', marginTop: 16 }}>
            Jede Farbe trägt den Namen eines Gewürzes oder einer Grundzutat. Das Papier ist <em>Salz</em>, die Tinte ist <em>Pfeffer</em>, der Akzent brennt wie <em>Paprika</em>.
          </p>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-4)', marginTop: 20, lineHeight: 1.9 }}>
            oklch-basiert<br/>Chroma ≤ 0.14
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { n: 'Salz',     note: 'Grundpapier',    v: '#f4efe7',          l: 'var(--salz)',    tok: '--salz' },
            { n: 'Kümmel',   note: 'gebackene Kruste', v: '#ebe4d8',        l: 'var(--kuemmel)', tok: '--kuemmel' },
            { n: 'Muskat',   note: 'geriebene Nuss',  v: '#e2d9c8',         l: 'var(--muskat)',  tok: '--muskat' },
            { n: 'Asche',    note: 'Holzasche',       v: '#8c8578',         l: 'var(--asche)',   tok: '--asche' },
            { n: 'Pfeffer',  note: 'schwarz, gemahlen', v: '#1a1a18',       l: 'var(--pfeffer)', tok: '--pfeffer', dark: true },
            { n: 'Piment',   note: 'Nelkenpfeffer',   v: '#2d2a25',         l: 'var(--piment)',  tok: '--piment', dark: true },
            { n: 'Kardamom', note: 'grün, mild',      v: '#5a544a',         l: 'var(--kardamom)',tok: '--kardamom', dark: true },
            { n: 'Thymian',  note: 'frisch, kräutig', v: 'oklch(.38 .04 140)', l: 'var(--thymian)',tok: '--thymian', dark: true },
            { n: 'Paprika',  note: 'geröstet · Primär', v: 'oklch(.62 .14 45)', l: 'var(--paprika)',tok: '--paprika', dark: true, hero: true },
            { n: 'Safran',   note: 'dunkel · Hover',  v: 'oklch(.48 .13 40)',  l: 'var(--safran)', tok: '--safran', dark: true },
            { n: 'Chili',    note: 'mild · Hauch',    v: 'oklch(.92 .04 55)',  l: 'var(--chili-soft)', tok: '--chili-soft' },
            { n: 'Rule',     note: 'Tinte 14%',       v: 'rgba(26,26,24,.14)', l: 'var(--rule)',  tok: '--rule', onSalz: true },
          ].map((c, i) => (
            <div key={i} style={{ aspectRatio: '1/1.15', background: c.onSalz ? 'var(--salz)' : c.l, color: c.dark ? 'var(--salz)' : 'var(--pfeffer)', padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: c.onSalz ? '1px solid var(--rule)' : '1px solid var(--rule-soft)', position: 'relative' }}>
              {c.hero && <div style={{ position: 'absolute', top: 12, right: 12, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--salz)', opacity: 0.8 }}>★</div>}
              {c.onSalz && <div style={{ height: 1, background: 'var(--rule)', marginTop: 24 }} />}
              <div>
                <div className="tz-display" style={{ fontSize: 26, fontWeight: 400, lineHeight: 1 }}>{c.n}</div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, opacity: 0.75, marginTop: 4 }}>{c.note}</div>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.08em', opacity: 0.75, lineHeight: 1.5 }}>
                <div>{c.tok}</div>
                <div>{c.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TYPE */}
    <section style={{ marginBottom: 80, borderTop: '1px solid var(--rule)', paddingTop: 56 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64 }}>
        <div>
          <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 02 — Typografie</div>
          <h2 className="tz-display" style={{ fontSize: 56, margin: 0, fontWeight: 300 }}>Schrift</h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', marginTop: 16 }}>
            Fraunces für Display &amp; Editorial. Inter Tight für Text. JetBrains Mono für Meta &amp; Koordinaten. Alle drei unter der SIL Open Font License.
          </p>
        </div>
        <div>
          <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 24, marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 12 }}>Display · Fraunces · 144/88</div>
            <div className="tz-display" style={{ fontSize: 144, fontWeight: 300, lineHeight: 0.88 }}>
              Authentisch<span style={{ color: 'var(--ember)' }}>.</span>
            </div>
            <div className="tz-display it" style={{ fontSize: 72, fontStyle: 'italic', fontWeight: 400, marginTop: 8 }}>
              Regional.
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, paddingBottom: 24, borderBottom: '1px solid var(--rule)' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 8 }}>Headline · 48</div>
              <div className="tz-display" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1 }}>Bündner Herrschaft</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 8 }}>Lead · serif italic · 20</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4 }}>Kulinarik zwischen Stern und Bodenständigkeit.</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 8 }}>Body · Inter Tight · 15</div>
              <div style={{ fontSize: 15, lineHeight: 1.65 }}>Ich koche so, wie ich bin: bodenständig und direkt. Schnörkellose Gerichte, ohne Chichi, aber mit einem echten Wow-Effekt.</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, paddingTop: 20 }}>
            <div>
              <div className="tz-eyebrow">Eyebrow · 11/0.18em</div>
              <div className="tz-eyebrow" style={{ marginTop: 8 }}>§ 01 — Philosophie</div>
            </div>
            <div>
              <div className="tz-eyebrow">Mono data · 12/0.08em</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, marginTop: 8 }}>46°59′N · 09°31′E · EST. MMXXIV</div>
            </div>
            <div>
              <div className="tz-eyebrow">Tag pill · 10/0.12em</div>
              <div style={{ marginTop: 8 }}>
                <span style={{ padding: '6px 12px', border: '1px solid var(--ink)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>1★ Michelin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* COMPONENTS */}
    <section style={{ borderTop: '1px solid var(--rule)', paddingTop: 56 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64 }}>
        <div>
          <div className="tz-eyebrow" style={{ marginBottom: 12 }}>§ 03 — Komponenten</div>
          <h2 className="tz-display" style={{ fontSize: 56, margin: 0, fontWeight: 300 }}>Bausteine</h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', marginTop: 16 }}>
            Wenig, aber präzise. Jeder Button, jede Karte, jedes Paragraphen-Zeichen folgt derselben Handschrift.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* buttons */}
          <div style={{ padding: 28, border: '1px solid var(--rule)' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>Buttons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <button className="tz-btn primary">Kontakt aufnehmen <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7h10M8 3l4 4-4 4"/></svg></button>
              <button className="tz-btn ember">Philosophie lesen</button>
              <button className="tz-btn ghost">Mehr erfahren</button>
            </div>
          </div>

          {/* section mark */}
          <div style={{ padding: 28, border: '1px solid var(--rule)' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>Section Mark</div>
            <div className="tz-eyebrow" style={{ marginBottom: 10 }}>§ 04 — Aktuelles</div>
            <h3 className="tz-display" style={{ fontSize: 42, margin: 0, fontWeight: 300, lineHeight: 1 }}>Presse & <span style={{ fontStyle: 'italic' }}>Auszeichnungen.</span></h3>
          </div>

          {/* award stat */}
          <div style={{ padding: 28, border: '1px solid var(--rule)' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>Award Stat</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
              <div className="tz-display" style={{ fontSize: 72, fontWeight: 300, lineHeight: 1 }}>16</div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic' }}>GaultMillau</div>
                <div className="tz-eyebrow" style={{ marginTop: 4 }}>Punkte 2024</div>
              </div>
            </div>
          </div>

          {/* news row */}
          <div style={{ padding: 28, border: '1px solid var(--rule)' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>News Row</div>
            <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr 20px', gap: 16 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>02.01.26</div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-3)' }}>Falstaff</div>
                <div className="tz-display" style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.15, marginTop: 4 }}>Guide 2026 — Pinot ausgezeichnet</div>
              </div>
              <div style={{ fontSize: 16 }}>→</div>
            </div>
          </div>

          {/* dish tag */}
          <div style={{ padding: 28, border: '1px solid var(--rule)', gridColumn: 'span 2' }}>
            <div className="tz-eyebrow" style={{ marginBottom: 16 }}>Dish Header</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
              <span style={{ color: 'var(--ember)' }}>● signature</span>
              <span style={{ color: 'var(--ink-3)' }}>№ 01 · Dessert · Winter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

window.TzSystem = TzSystem;
