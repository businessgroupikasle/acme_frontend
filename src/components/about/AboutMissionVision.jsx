import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section className="about-mission-vision-section" style={{
      background: '#ffffff',
      padding: '70px 0',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <style>{`
        @media (max-width: 768px) {
          .about-mission-vision-section {
            padding: 36px 0 30px 0 !important;
          }
        }
        .mv-card {
          position: relative;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 32px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          cursor: pointer;
        }
        .mv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent);
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        .mv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(124, 161, 58, 0.08);
          border-color: rgba(124, 161, 58, 0.25);
        }
        .mv-card:hover::before {
          width: 8px;
        }
        .mv-icon-wrapper {
          background: rgba(124, 161, 58, 0.06);
          border-radius: 12px;
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          border: 1px solid rgba(124, 161, 58, 0.1);
        }
        .mv-card:hover .mv-icon-wrapper {
          background: var(--accent);
          transform: scale(1.08);
        }
        .mv-card:hover .mv-icon-wrapper svg {
          stroke: #ffffff !important;
        }
        .mv-watermark {
          position: absolute;
          bottom: -18px;
          right: -10px;
          font-size: 72px;
          font-weight: 900;
          color: rgba(124, 161, 58, 0.035);
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
          line-height: 1;
          text-transform: uppercase;
        }
        .mv-image-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mv-image-container:hover {
          transform: scale(1.02);
        }
        .mv-image-container::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to top, rgba(124, 161, 58, 0.15), transparent 60%);
          pointer-events: none;
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px'
          }}>
            PURPOSE & DRIVING FORCE
          </span>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Our Mission & Vision
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'center'
        }} className="about-mission-grid">

          {/* Left Column: Interactive Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Mission Card */}
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <Target size={24} color="var(--accent)" style={{ transition: 'stroke 0.3s ease' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  margin: 0
                }}>
                  To manufacture quality bricks, blocks and paving products that construction professionals can rely on for strength, durability and consistent performance. We strive to serve Coimbatore, Tamil Nadu and Kerala with dependable products, competitive value and timely delivery.
                </p>
              </div>
              <div className="mv-watermark">Mission</div>
            </div>

            {/* Vision Card */}
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <Eye size={24} color="var(--accent)" style={{ transition: 'stroke 0.3s ease' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}>
                  Our Vision
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  margin: 0
                }}>
                  To become a preferred name for bricks, blocks and construction materials in Coimbatore, trusted by builders, contractors and customers across Tamil Nadu and Kerala for quality, reliability and consistent service.
                </p>
              </div>
              <div className="mv-watermark">Vision</div>
            </div>

          </div>

          {/* Right Column: Warehouse Stockyard Image */}
          <div>
            <div className="mv-image-container">
              <img
                src="/images/about-page/oru-mission.png"
                alt="ACME Bricks Stacking Warehouse"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'all 0.5s ease' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
