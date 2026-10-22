import React from 'react';
import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function AboutCTA({ onQuoteClick }) {
  return (
    <section style={{
      background: 'var(--bg-dark)',
      color: '#ffffff',
      padding: '80px 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.8fr',
          gap: '50px',
          alignItems: 'center'
        }} className="about-cta-grid">

          {/* Left Column: Heading and description */}
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              Let's Build Something Great Together
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: 1.6
            }}>
              Have a project in mind? Get in touch with us today for the best quality bricks and blocks.
            </p>
          </div>

          {/* Right Column: 3 Contact Widget Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px'
          }} className="cta-widgets-container">

            {/* Card 1: Get a Quote (Green background) */}
            <div
              onClick={onQuoteClick}
              style={{
                background: 'var(--accent)',
                borderRadius: '8px',
                padding: '24px 20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px',
                boxShadow: '0 4px 15px rgba(124, 161, 58, 0.25)',
                transition: 'var(--transition)'
              }}
              className="about-cta-card"
            >
              <div>
                <FileText size={22} color="#ffffff" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Get a Quote
                </h3>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>
                  Request a free quote for your requirement.
                </p>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                transition: 'var(--transition)'
              }} className="about-cta-arrow">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </div>

            {/* Card 2: Call Us Now (Dark background) */}
            <a
              href="tel:+919500851880"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '24px 20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px',
                transition: 'var(--transition)'
              }}
              className="about-cta-card"
            >
              <div>
                <Phone size={22} color="var(--accent)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Call Us Now
                </h3>
                <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.3 }}>
                  +91 95008 51880
                </p>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                transition: 'var(--transition)'
              }} className="about-cta-arrow">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </a>

            {/* Card 3: WhatsApp Us (Dark background) */}
            <a
              href="https://wa.me/919500851880"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '24px 20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px',
                transition: 'var(--transition)'
              }}
              className="about-cta-card"
            >
              <div>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="#25D366"
                  style={{ marginBottom: '16px', display: 'block' }}
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.227-.563-1.834-.766-3.007-2.637-3.098-2.759-.092-.122-.74-1.002-.74-1.912 0-.91.464-1.357.63-1.541.166-.184.364-.23.486-.23.122 0 .244.002.35.007.112.005.262-.043.41.314.152.366.52 1.282.567 1.376.046.094.078.204.015.328-.063.125-.095.203-.188.312-.093.11-.197.245-.281.33-.094.094-.192.196-.083.384.11.188.489.807 1.05 1.306.722.643 1.332.842 1.52.936.188.094.298.079.408-.047.111-.126.474-.552.6-.74.126-.188.252-.157.424-.094.173.063 1.096.517 1.285.611.188.094.314.141.36.22.046.078.046.452-.098.857zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.435 5.178L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.688 0-3.255-.505-4.568-1.371l-.328-.218-2.97.779.793-2.898-.239-.38A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
                </svg>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  WhatsApp Us
                </h3>
                <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.3 }}>
                  Chat with our experts instantly.
                </p>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                transition: 'var(--transition)'
              }} className="about-cta-arrow">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
