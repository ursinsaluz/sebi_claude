/* global React */
// Reusable components for titz.cooking

const TzLogo = ({ size = 20, color = 'currentColor' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20 L12 4 L20 20 Z" />
      <path d="M8 14 L16 14" />
    </svg>
    <span style={{ fontFamily: 'var(--serif)', fontSize: size * 0.9, letterSpacing: '-0.02em', fontWeight: 500 }}>
      titz<span style={{ color: 'var(--ember)', fontStyle: 'italic' }}>.</span>cooking
    </span>
  </span>
);

const TzArrow = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const TzStar = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ color: 'var(--ember)' }}>
    <path d="M5 0l1.2 3.5H10l-3 2.2L8.2 9.5 5 7.3 1.8 9.5 3 5.7 0 3.5h3.8z"/>
  </svg>
);

const TzNav = ({ current = 'home', dark = false, compact = false }) => {
  const ink = dark ? '#f4efe7' : 'var(--ink)';
  const items = [
    { id: 'home', label: 'Start', href: '#home' },
    { id: 'stationen', label: 'Stationen', href: '#stationen' },
    { id: 'philosophie', label: 'Philosophie', href: '#philo' },
    { id: 'pinot', label: 'Restaurant', href: '#pinot' },
    { id: 'kontakt', label: 'Kontakt', href: '#kontakt' },
  ];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: compact ? '18px 32px' : '28px 56px', color: ink,
      borderBottom: dark ? '1px solid rgba(244,239,231,0.15)' : '1px solid var(--rule-soft)'
    }}>
      <TzLogo size={compact ? 17 : 19} color={ink} />
      <div style={{ display: 'flex', gap: 34, fontFamily: 'var(--sans)', fontSize: 13, letterSpacing: '0.01em' }}>
        {items.map(it => (
          <a key={it.id} href={it.href} style={{
            color: ink, textDecoration: 'none',
            opacity: current === it.id ? 1 : 0.7,
            borderBottom: current === it.id ? `1px solid ${dark ? 'var(--ember)' : 'var(--ink)'}` : '1px solid transparent',
            paddingBottom: 3
          }}>{it.label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a href="#kontakt" className="tz-btn primary" style={{
          padding: '10px 18px', fontSize: 12,
          background: dark ? 'var(--ember)' : 'var(--ink)',
          color: dark ? '#f4efe7' : 'var(--paper)'
        }}>
          Kontakt aufnehmen <TzArrow size={12} />
        </a>
      </div>
    </nav>
  );
};

const TzFooter = () => (
  <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '80px 56px 32px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, paddingBottom: 56 }}>
      <div>
        <TzLogo size={22} color="var(--paper)" />
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3, marginTop: 28, maxWidth: 320, opacity: 0.9 }}>
          Authentisch.<br/>Regional.<br/>Exzellent.
        </p>
      </div>
      <div>
        <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 14 }}>Besuchen</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
          Restaurant Pinot<br/>Steigstrasse 14<br/>7306 Fläsch, GR
        </div>
      </div>
      <div>
        <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 14 }}>Kontakt</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
          info@titz.cooking<br/>+41 79 123 45 67<br/>@titzsebastian
        </div>
      </div>
      <div>
        <div className="tz-eyebrow" style={{ color: '#8c8578', marginBottom: 14 }}>Navigation</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, opacity: 0.85 }}>
          <a href="#stationen" style={{ color: 'inherit', textDecoration: 'none' }}>Stationen</a>
          <a href="#philo" style={{ color: 'inherit', textDecoration: 'none' }}>Philosophie</a>
          <a href="#pinot" style={{ color: 'inherit', textDecoration: 'none' }}>Restaurant Pinot</a>
          <a href="#impressum" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</a>
          <a href="#datenschutz" style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(244,239,231,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>
      <span>© 2026 Sebastian Titz</span>
      <span>Fläsch · Bündner Herrschaft · CH</span>
      <span>v.2026.04</span>
    </div>
  </footer>
);

Object.assign(window, { TzLogo, TzArrow, TzStar, TzNav, TzFooter });
