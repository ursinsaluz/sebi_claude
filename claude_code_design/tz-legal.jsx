/* global React, TzNav, TzFooter */

const TzLegal = ({ kind = 'impressum' }) => {
  const isImp = kind === 'impressum';
  return (
    <div className="tz-root" style={{ width: 1440, minHeight: 1600, background: 'var(--paper)' }}>
      <TzNav current={kind} />

      <section style={{ padding: '80px 56px 48px', borderBottom: '1px solid var(--rule)' }}>
        <div className="tz-eyebrow" style={{ marginBottom: 20 }}>{isImp ? 'Rechtliches — § Impressum' : 'Rechtliches — § Datenschutz'}</div>
        <h1 className="tz-display" style={{ fontSize: 140, margin: 0, fontWeight: 300, lineHeight: 0.9 }}>
          {isImp ? <>Impressum<span style={{ color: 'var(--ember)' }}>.</span></> : <>Daten<span style={{ fontStyle: 'italic' }} className="it">schutz</span><span style={{ color: 'var(--ember)' }}>.</span></>}
        </h1>
      </section>

      <section style={{ padding: '80px 56px 120px', display: 'grid', gridTemplateColumns: '300px 1fr', gap: 80 }}>
        {/* Sidebar TOC */}
        <aside style={{ position: 'sticky', top: 40, alignSelf: 'start' }}>
          <div className="tz-eyebrow" style={{ marginBottom: 20 }}>Inhaltsverzeichnis</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--serif)', fontSize: 16 }}>
            {(isImp
              ? ['Anbieter', 'Kontakt', 'Berufsbezeichnung', 'Umsatzsteuer', 'Verantwortlich für Inhalt', 'Haftungsausschluss', 'Urheberrecht', 'Bildnachweise']
              : ['Verantwortliche Stelle', 'Erhobene Daten', 'Kontaktformular', 'Cookies', 'Server-Logfiles', 'Analyse-Tools', 'Externe Dienste', 'Ihre Rechte', 'SSL-Verschlüsselung']
            ).map((t, i) => (
              <a key={i} href={`#s${i}`} style={{ color: 'var(--ink-3)', textDecoration: 'none', fontStyle: 'italic', display: 'flex', gap: 14 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', fontStyle: 'normal', color: 'var(--ember-deep)', width: 24 }}>§ {String(i + 1).padStart(2, '0')}</span>
                {t}
              </a>
            ))}
          </nav>
          <hr className="tz-rule" style={{ margin: '32px 0' }} />
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-4)', lineHeight: 1.8 }}>
            Zuletzt aktualisiert<br/>21. April 2026
          </div>
        </aside>

        <article style={{ maxWidth: 720 }}>
          {isImp ? (
            <>
              <LegalBlock n="01" title="Anbieter">
                Sebastian Titz<br/>Restaurant Pinot<br/>Steigstrasse 14<br/>7306 Fläsch, Schweiz
              </LegalBlock>
              <LegalBlock n="02" title="Kontakt">
                Telefon: +41 79 123 45 67<br/>E-Mail: info@titz.cooking<br/>Web: titz.cooking
              </LegalBlock>
              <LegalBlock n="03" title="Berufsbezeichnung">
                Eidgenössisch diplomierter Küchenchef (Schweiz).<br/>Zuständige Kammer: Hotel & Gastro Union, Luzern.
              </LegalBlock>
              <LegalBlock n="04" title="Umsatzsteuer-Identifikation">
                UID: CHE-123.456.789 MWST
              </LegalBlock>
              <LegalBlock n="05" title="Verantwortlich für den Inhalt">
                Sebastian Titz, Adresse wie oben.
              </LegalBlock>
              <LegalBlock n="06" title="Haftungsausschluss">
                Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </LegalBlock>
              <LegalBlock n="07" title="Urheberrecht">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
              </LegalBlock>
              <LegalBlock n="08" title="Bildnachweise">
                Food-, Porträt- und Restaurantfotografie: Cyril Kohler, sowie Eigenaufnahmen Restaurant Pinot 2025. Archivbilder Stationen: jeweilige Häuser.
              </LegalBlock>
            </>
          ) : (
            <>
              <LegalBlock n="01" title="Verantwortliche Stelle">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist Sebastian Titz, Steigstrasse 14, 7306 Fläsch. Sie können uns per E-Mail unter info@titz.cooking erreichen.
              </LegalBlock>
              <LegalBlock n="02" title="Erhobene Daten">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten Art des Webbrowsers, verwendetes Betriebssystem, Domainname Ihres Internet-Service-Providers und ähnliches.
              </LegalBlock>
              <LegalBlock n="03" title="Kontaktformular">
                Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
              </LegalBlock>
              <LegalBlock n="04" title="Cookies">
                Wir verwenden ausschliesslich technisch notwendige Cookies, um die Funktionalität unserer Website sicherzustellen. Diese werden nach Ende Ihrer Sitzung automatisch gelöscht.
              </LegalBlock>
              <LegalBlock n="05" title="Server-Logfiles">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </LegalBlock>
              <LegalBlock n="06" title="Analyse-Tools">
                Diese Website nutzt Plausible Analytics — ein datenschutzfreundliches, Cookie-freies Tool. Es werden keine personenbezogenen Daten erhoben, keine IP-Adressen gespeichert und kein Tracking über Sitzungen hinaus durchgeführt.
              </LegalBlock>
              <LegalBlock n="07" title="Externe Dienste">
                Wir binden Instagram- und OpenStreetMap-Inhalte nur nach aktiver Bestätigung durch den Nutzer ein. Bis zur Bestätigung werden keine Daten an diese Dienste übertragen.
              </LegalBlock>
              <LegalBlock n="08" title="Ihre Rechte">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch gegen die Verarbeitung Ihrer Daten. Wenden Sie sich hierzu formlos an info@titz.cooking.
              </LegalBlock>
              <LegalBlock n="09" title="SSL-Verschlüsselung">
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol Ihres Browsers.
              </LegalBlock>
            </>
          )}
        </article>
      </section>

      <TzFooter />
    </div>
  );
};

const LegalBlock = ({ n, title, children }) => (
  <section id={`s${parseInt(n) - 1}`} style={{ padding: '40px 0', borderTop: '1px solid var(--rule-soft)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--ember-deep)', paddingTop: 8 }}>§ {n}</div>
      <div>
        <h3 className="tz-display" style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 400 }}>{title}</h3>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.7, color: 'var(--ink-2)' }}>{children}</div>
      </div>
    </div>
  </section>
);

window.TzLegal = TzLegal;
