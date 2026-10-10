import React from 'react';

export default function PartnerLogos() {
  const logos = Array.from({ length: 10 }, (_, i) => `/images/clients_logo/${i + 1}.webp`);
  // Duplicate for seamless infinite CSS loop
  const seamlessLogos = [...logos, ...logos];

  return (
    <div style={{
      background: '#ffffff',
      padding: '45px 0',
      borderBottom: '1px solid #f1f5f9',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes marqueeLinear {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .partner-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .partner-marquee-track {
          display: flex;
          align-items: center;
          gap: 30px;
          width: max-content;
          animation: marqueeLinear 28s linear infinite;
          will-change: transform;
        }
        .partner-marquee-track:hover {
          animation-play-state: paused;
        }
        .partner-logo-item {
          flex-shrink: 0;
          width: 150px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .partner-logo-image {
          max-height: 100%;
          max-width: 150px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .partner-logo-item:hover .partner-logo-image {
          transform: scale(1.06);
        }
      `}</style>
      <div className="container">
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '35px'
        }}>
          TRUSTED BY LEADING COMPANIES
        </p>

        <div className="partner-marquee-container">
          <div className="partner-marquee-track">
            {seamlessLogos.map((src, idx) => (
              <div key={idx} className="partner-logo-item">
                <img 
                  src={src} 
                  alt={`Partner ${(idx % 10) + 1}`} 
                  className="partner-logo-image"
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="65"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
