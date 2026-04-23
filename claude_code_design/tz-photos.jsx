/* global React, TzNav, TzFooter */

const TzPhotos = () => {
  const photos = [
    // Porträt / Chef at work
    { f: 'img/pinot-15.jpg', tags: ['Porträt', 'Klinik Gut', 'Chef at work', 'Küche'], use: ['Hero Start', 'Über mich', 'Dark Spread', 'Presse'], note: 'Portraitfoto lächelnd. Klinik-Gut-Uniform, Bärlauchblüten, Spargel.' },
    { f: 'img/pinot-14.jpg', tags: ['Porträt', 'Klinik Gut', 'Chef at work', 'Konzentriert'], use: ['Hero Porträt', 'Stationen aktuell', 'Beratung-Karte'], note: 'Chef beim Anrichten, konzentriert. Bärlauchblüten.' },
    { f: 'img/wiesner-1.jpg', tags: ['Porträt', 'Rössli/Wiesner', 'Archiv', 'Chef at work'], use: ['Stationen — Wiesner-Phase', 'Archiv-Spread'], note: 'Junger Sebastian bei Stefan Wiesner, Wiesner-Schürze. Prägende Jahre.' },
    { f: 'img/wiesner-2.jpg', tags: ['Porträt', 'Rössli/Wiesner', 'Archiv', 'Team'], use: ['Stationen — Wiesner'], note: 'Am Pass, Saucen-Station.' },
    { f: 'img/roessli-1.jpg', tags: ['Team', 'Rössli/Wiesner', 'Archiv'], use: ['Stationen — Lehre', 'Team/Kultur'], note: 'Zwei Köche im Rössli.' },
    { f: 'img/roessli-2.jpg', tags: ['Küche', 'Motion', 'Archiv'], use: ['Stationen — Arbeitsplatz', 'Bewegung'], note: 'Küchen-Motion, langzeit belichtet.' },
    { f: 'img/roessli-3.jpg', tags: ['Privat', 'Freunde', 'Archiv'], use: ['Stationen — frühe Jahre', 'Team/Kultur'], note: 'Kollegen/Freunde am Tisch, privat.' },

    // Gerichte Pinot (aktuell)
    { f: 'img/pinot-11.jpg', tags: ['Gericht', 'Pinot', 'Kabeljau', 'Signature'], use: ['Hero Start', 'Signature-Galerie', 'Pinot-Karte'], note: 'Fisch auf weißem Teller mit Kaviar, grüne Kräutersauce.' },
    { f: 'img/pinot-13.jpg', tags: ['Gericht', 'Pinot', 'Kabeljau', 'Action'], use: ['Signature-Galerie', 'Anrichten-Story'], note: 'Fisch mit Schaum, Anrichten mit Löffel.' },
    { f: 'img/pinot-12.jpg', tags: ['Gericht', 'Pinot', 'Kabeljau', 'Signature'], use: ['Signature-Galerie', 'Menü-Preview'], note: 'Fisch auf grüner Sauce, weißer Teller.' },
    { f: 'img/pinot-17.jpg', tags: ['Gericht', 'Pinot', 'Kalb', 'Spargel', 'Signature'], use: ['Signature-Galerie', 'Hauptgang'], note: 'Kalb rosa mit Spargel, Bärlauchblüten, Jus.' },
    { f: 'img/pinot-16.jpg', tags: ['Gericht', 'Pinot', 'Action', 'Finishing'], use: ['Editorial-Hero', 'Pinot-Story'], note: 'Kalb mit Bärlauchblüten, Finishing mit Streusieb.' },
    { f: 'img/pinot-18.jpg', tags: ['Gericht', 'Pinot', 'Dessert', 'Erdbeere'], use: ['Dessert-Slot', 'Menü'], note: 'Baba-ähnliches Dessert mit Erdbeeren, Sorbet, Weißwein.' },
    { f: 'img/pinot-06.jpg', tags: ['Gericht', 'Pinot', 'Amuse', 'Trilogie'], use: ['Menü-Übersicht', 'Philosophie'], note: 'Drei Amuse-Gueule auf Schieferplatte.' },
    { f: 'img/pinot-07.jpg', tags: ['Gericht', 'Pinot', 'Amuse', 'Tischsetting'], use: ['Philosophie-Karte', 'Editorial'], note: 'Selbes Amuse, weiter entfernt mit Tischset, Weinglas.' },
    { f: 'img/pinot-10.jpg', tags: ['Gericht', 'Pinot', 'Action'], use: ['Anrichten-Story'], note: 'Anrichten von Hand, aus der Perspektive.' },
    { f: 'img/pinot-19.jpg', tags: ['Ort', 'Pinot', 'Terrasse'], use: ['Pinot-Karte', 'Besuchen'], note: 'Duplikat / Terrassen-Ansicht.' },
    { f: 'img/terrasse.jpg', tags: ['Ort', 'Pinot', 'Terrasse', 'Alpenblick'], use: ['Hero Terrasse', 'Pinot-Karte', 'Kontakt'], note: 'Terrasse mit Sonnenschirm, Berge im Hintergrund.' },

    // Archiv / Wiesner-Ära Gerichte
    { f: 'img/moor-1.jpg', tags: ['Gericht', 'Wiesner', 'Archiv', 'Heusuppe', 'Rezept'], use: ['Stationen — Wiesner', 'Philosophie-Natur'], note: 'Moorhuhn-Heusuppe, Rezept-Doku mit Zutaten.' },
    { f: 'img/moor-2.jpg', tags: ['Gericht', 'Wiesner', 'Archiv', 'Moor'], use: ['Stationen — Wiesner', 'Editorial Natur'], note: 'Geräuchertes Ei auf Moos, Wiesner-Doku.' },
    { f: 'img/dish-1.jpg', tags: ['Gericht', 'Archiv', 'Fine Dining'], use: ['Signature — Archiv', 'Stationen'], note: 'Feinschmecker-Teller, weißer Spargel, Kaviar — vermutlich Verve/Bad Ragaz.' },
    { f: 'img/dish-2.jpg', tags: ['Porträt', 'Archiv', 'Chef at work'], use: ['Stationen — Le Club/Bürgenstock', 'Editorial'], note: 'Junger Chef am Pass, Saucen-Station.' },
    { f: 'img/dish-3.jpg', tags: ['Gericht', 'Archiv', 'Fine Dining', 'Amuse'], use: ['Stationen — Sylt/Müller'], note: 'Salat-Amuse, Pass-Reihe unscharf.' },
    { f: 'img/dish-4.jpg', tags: ['Privat', 'Berge', 'Skitour'], use: ['Hobbies — Skitouren'], note: 'Selfie auf Skitour, Bergkulisse.' },

    // Landschaft / Region
    { f: 'img/terroir-1.jpg', tags: ['Landschaft', 'Graubünden', 'Bike', 'Berge'], use: ['Hobbies — Mountainbike', 'Terroir-Spread'], note: 'Mountainbike-Szene in Calanda-artigem Gelände.' },
  ];

  return (
    <div className="tz-root" style={{ width: 1440, background: 'var(--paper)' }}>
      <TzNav current="photos" />

      <section style={{ padding: '80px 56px 48px', borderBottom: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 20 }}>Interne Übersicht — Bild-Inventar</div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 className="tz-display" style={{ fontSize: 140, margin: 0, fontWeight: 300, lineHeight: 0.9 }}>
            Foto-<span style={{ fontStyle: 'italic' }}>inventar</span><span style={{ color: 'var(--ember)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, color: 'var(--ink-2)', paddingBottom: 16, margin: 0 }}>
            Alle verfügbaren Fotos mit Tags und Einsatz­vorschlägen. Grundlage für alle Platzierungen auf der Seite.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section style={{ padding: '32px 56px', borderBottom: '1px solid var(--rule-soft)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {[
          { c: 'Porträt', co: '#8a5a3a' },
          { c: 'Gericht', co: 'var(--ember)' },
          { c: 'Ort', co: '#4a6b4a' },
          { c: 'Landschaft', co: '#5a6a8a' },
          { c: 'Archiv', co: '#7a7a6a' },
          { c: 'Privat', co: '#8a6a8a' },
        ].map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: 5, background: l.co }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{l.c}</span>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink-3)' }}>
          {photos.length} Fotos · Stand 04.2026
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '56px 56px 120px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {photos.map((p, i) => (
          <article key={i} style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}>
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--paper-2)' }}>
              <img src={p.f} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em' }}>
                <span style={{ color: 'var(--ink)' }}>{p.f.replace('img/', '')}</span>
                <span style={{ color: 'var(--ink-3)' }}>Nº {String(i + 1).padStart(2, '0')}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                {p.tags.map((t, j) => (
                  <span key={j} style={{
                    padding: '3px 9px', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'var(--paper-2)', border: '1px solid var(--rule)', color: 'var(--ink-2)'
                  }}>{t}</span>
                ))}
              </div>

              <p style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: 'var(--ink-2)', lineHeight: 1.5, margin: '0 0 14px' }}>
                {p.note}
              </p>

              <div style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12 }}>
                <div className="tz-eyebrow" style={{ marginBottom: 8, fontSize: 9, color: 'var(--ember-deep)' }}>Einsatz</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontSize: 12, color: 'var(--ink-2)' }}>
                  {p.use.map((u, j) => (
                    <span key={j}>→ {u}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Gaps */}
      <section style={{ padding: '80px 56px', background: 'var(--paper-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 32 }}>§ Fehlend — Foto-Wunschliste</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { t: 'Sauerteig & Backen', n: 'Handwerk, Kruste, Prozess. Für Hobbies-Grid.' },
            { t: 'Garten', n: 'Eigener Garten, Kräuter, Saison. Für Hobbies + Philosophie.' },
            { t: 'Yoga', n: 'Ausgleich, ruhiger Moment. Für Hobbies.' },
            { t: 'Pinot — Innen', n: 'Gastraum, Tische, Atmosphäre. Für Pinot-Story + Kontakt.' },
            { t: 'Team Pinot', n: 'Gruppenbild Küchenbrigade. Für „Der Koch" / Kultur.' },
            { t: 'Pinot — Wein', n: 'Bündner Herrschaft, Weinkarte, Produzenten. Für Terroir.' },
          ].map((g, i) => (
            <div key={i} style={{ padding: 24, border: '1px dashed var(--rule)', background: 'var(--paper)' }}>
              <div style={{ aspectRatio: '4/3', marginBottom: 16, background: 'repeating-linear-gradient(45deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                Foto gesucht
              </div>
              <h3 className="tz-display" style={{ fontSize: 22, margin: '0 0 8px', fontWeight: 400 }}>{g.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{g.n}</p>
            </div>
          ))}
        </div>
      </section>

      <TzFooter />
    </div>
  );
};

window.TzPhotos = TzPhotos;
