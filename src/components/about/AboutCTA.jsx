import React from 'react';
import { ArrowRight, Phone, MessageSquare, FileText } from 'lucide-react';

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
                <MessageSquare size={22} color="#25D366" style={{ marginBottom: '16px' }} />
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
