export default function Inspiration() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: 'var(--bg, #fafafa)',
      color: 'var(--fg, #141414)',
      gap: '12px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Inspiration Board</h1>
      <p style={{ fontSize: '14px', color: 'var(--fg-secondary, #5a5a5a)' }}>Next will develop later</p>
      <a
        href="/"
        style={{
          marginTop: '24px',
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--fg-tertiary, #8a8a8a)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--edge, #d9d9d9)',
          paddingBottom: '2px',
          transition: 'color 0.15s'
        }}
      >
        ← Back to Portfolio
      </a>
    </div>
  );
}
