import React from 'react';

export default function AboutCredentials() {
  const credentials = [
    {
      title: 'BUREAU OF INDIAN STANDARDS',
      sub: 'PRODUCT CERTIFICATION',
      logo: (
        <svg viewBox="0 0 100 60" width="100%" height="45" style={{ fill: '#1e293b' }}>
          {/* ISI Stamp Shape */}
          <polygon points="50,6 80,24 80,48 50,42 20,48 20,24" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <line x1="20" y1="24" x2="80" y2="24" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="50" y="20" textAnchor="middle" fontWeight="800" fontSize="11" fontFamily="sans-serif">IS:269</text>
          <text x="50" y="36" textAnchor="middle" fontWeight="800" fontSize="13" fontFamily="sans-serif">ISI</text>
        </svg>
      )
    },
    {
      title: 'MSME',
      sub: 'MICRO, SMALL & MEDIUM ENTERPRISES',
      logo: (
        <svg viewBox="0 0 100 60" width="100%" height="45">
          {/* Blocks */}
          <rect x="15" y="15" width="20" height="20" rx="2" fill="var(--accent)" />
          <rect x="40" y="15" width="20" height="20" rx="2" fill="#475569" />
          <rect x="65" y="15" width="20" height="20" rx="2" fill="#94a3b8" />
          <text x="25" y="30" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="12" fontFamily="sans-serif">M</text>
          <text x="50" y="30" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="12" fontFamily="sans-serif">S</text>
          <text x="75" y="30" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="12" fontFamily="sans-serif">M</text>
          <text x="50" y="48" textAnchor="middle" fill="#1e293b" fontWeight="800" fontSize="9" fontFamily="sans-serif">REGISTERED</text>
        </svg>
      )
    },
    {
      title: 'MAKE IN INDIA',
      sub: 'NATIONAL INITIATIVE',
      logo: (
        <svg viewBox="0 0 100 60" width="100%" height="45" style={{ fill: '#1e293b' }}>
          {/* Simple Silhouette of Lion gears */}
          <path d="M15,30 Q25,12 45,18 Q55,10 70,20 Q85,25 80,38 Q65,48 45,40 Q25,48 15,30" fill="none" stroke="#475569" strokeWidth="2" />
          <circle cx="35" cy="28" r="4" fill="var(--accent)" />
          <circle cx="50" cy="26" r="3" fill="var(--accent)" />
          <circle cx="65" cy="30" r="4" fill="var(--accent)" />
          <text x="50" y="52" textAnchor="middle" fontWeight="800" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">MAKE IN INDIA</text>
        </svg>
      )
    }
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '80px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em'
          }}>
            Certifications & Accreditations
          </h2>
        </div>

        {/* Credentials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '24px'
        }} className="credentials-logos-grid">
          {credentials.map((cred, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '24px 16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.01)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '160px',
                transition: 'var(--transition)'
              }}
              className="cred-card"
            >
              {/* Graphic Logo */}
              <div style={{ width: '100%', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {cred.logo}
              </div>

              {/* Title & Sub */}
              <h3 style={{
                fontSize: '13px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.2
              }}>
                {cred.title}
              </h3>
              <p style={{
                fontSize: '9px',
                fontWeight: 700,
                color: 'var(--text-muted)',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                maxWidth: '140px'
              }}>
                {cred.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
