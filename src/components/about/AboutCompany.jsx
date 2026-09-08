import React from 'react';

const BrickIcon = ({ size = 18, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="14" width="20" height="6" rx="1" />
    <rect x="2" y="6" width="9" height="6" rx="1" />
    <rect x="13" y="6" width="9" height="6" rx="1" />
  </svg>
);

export default function AboutCompany() {
  const bullets = [
    { text: 'Fly Ash Bricks', icon: <BrickIcon size={18} color="var(--accent)" /> },
    { text: 'Fly Ash Blocks', icon: <BrickIcon size={18} color="var(--accent)" /> },
    { text: 'Paver Blocks', icon: <BrickIcon size={18} color="var(--accent)" /> },
    { text: 'Interlocking Bricks', icon: <BrickIcon size={18} color="var(--accent)" /> },
    { text: 'Solid Blocks', icon: <BrickIcon size={18} color="var(--accent)" /> },
    { text: 'AAC Blocks', icon: <BrickIcon size={18} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: '#ffffff',
      paddingBottom: '60px',
      borderBottom: '1px solid var(--border)'
    }}>
      <style>{`
        .ac-section {
          background: #ffffff;
        }

        /* Desktop: Two-column grid */
        .ac-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
          align-items: stretch;
          padding: 80px 24px 0 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ac-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Desktop: flex column so wrapper fills full stretched height */
        .ac-img-col {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 440px;
        }

        .ac-img-wrapper {
          flex: 1;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
          position: relative;
        }

        .ac-img-wrapper img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .ac-badge {
          position: absolute;
          bottom: -15px;
          right: 20px;
          background: var(--accent);
          color: #ffffff;
          border-radius: 10px;
          padding: 16px 24px;
          box-shadow: 0 10px 25px rgba(124, 161, 58, 0.35);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .ac-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding-top: 60px;
          }
          .ac-img-col {
            min-height: unset;
            height: 340px;
            margin-top: 32px;
          }
          .ac-img-wrapper {
            flex: unset;
            height: 100%;
          }
        }

        /* Mobile: full-bleed image */
        @media (max-width: 576px) {
          .ac-grid {
            display: block;
            padding: 48px 24px 0 24px;
          }
          .ac-img-col {
            height: 270px;
            margin-top: 24px;
            margin-left: -24px;
            margin-right: -24px;
            width: calc(100% + 48px);
          }
          .ac-img-wrapper {
            flex: unset;
            height: 100%;
            border-radius: 0;
          }
          .ac-badge {
            padding: 10px 18px;
            bottom: -12px;
            right: 16px;
          }
          .ac-badge .ac-badge-num {
            font-size: 24px !important;
          }
          .ac-badge .ac-badge-label {
            font-size: 10px !important;
          }
        }
        }
      `}</style>

      <div className="ac-grid">

        {/* Left: Text Content */}
        <div className="ac-text-col">
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            ABOUT ACME BRICKS &amp; BLOCKS
          </div>

          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '16px'
          }}>
            Reliable Construction Materials Manufactured for Strength and Durability
          </h2>

          <p className="about-company-desc" style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '16px',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            ACME Bricks &amp; Blocks is an established manufacturer and supplier of quality concrete products and masonry materials based in Coimbatore, Tamil Nadu. We specialize in producing Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks engineered for residential, commercial and industrial construction projects.
          </p>

          <p className="about-company-desc" style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '24px',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            Our modern manufacturing facility utilizes automated batching, high-pressure hydraulic compaction and systematic curing processes to ensure consistent compressive strength, dimensional accuracy and finish across all product batches.
          </p>

          {/* Bullets Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px 20px',
            marginBottom: '24px'
          }}>
            {bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'rgba(124, 161, 58, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {bullet.icon}
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3
                }}>
                  {bullet.text}
                </span>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: 0
          }}>
            At ACME Bricks &amp; Blocks, we continue to support construction projects with a broad range of bricks, blocks and paving products backed by manufacturing experience and customer-focused service.
          </p>
        </div>

        {/* Right: Image */}
        <div className="ac-img-col">
          <div className="ac-img-wrapper">
            <img
              src="/images/about-page/about.png"
              alt="ACME Bricks Factory"
            />
          </div>

          {/* Badge */}
          <div className="ac-badge">
            <span className="ac-badge-num" style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1 }}>11+</span>
            <span className="ac-badge-label" style={{ fontSize: '11.5px', fontWeight: 600, opacity: 0.95, marginTop: '4px' }}>Years of Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
