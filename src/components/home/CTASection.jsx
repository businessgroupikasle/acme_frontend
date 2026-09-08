import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function CTASection({ onQuoteClick }) {
  return (
    <div style={{
      background: 'var(--bg-dark)',
      color: '#ffffff',
      padding: '50px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {/* Left Side: Call to action Text */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="cta-main-title" style={{
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '12px'
          }}>
            <span style={{ display: 'block' }}>NEED QUALITY BRICKS &amp; BLOCKS</span>
            <span style={{ display: 'block' }}>FOR YOUR PROJECT?</span>
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#94a3b8'
          }}>
            Talk to ACME Bricks &amp; Blocks for Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks — product details, pricing and delivery on request.
          </p>
        </div>

        {/* Right Side: Quick Action buttons */}
        <div className="cta-actions-row" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'nowrap'
        }}>
          <button 
            onClick={onQuoteClick}
            className="btn btn-primary cta-btn"
            style={{
              padding: '12px 22px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '9999px',
              whiteSpace: 'nowrap'
            }}
          >
            GET A QUOTE
          </button>
          
          <a 
            href="tel:+919500851880"
            className="btn cta-btn"
            style={{
              padding: '12px 22px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '9999px',
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Phone size={14} color="var(--accent)" />
            <span>CALL NOW</span>
          </a>

          <a 
            href="https://wa.me/919500851880"
            target="_blank"
            rel="noopener noreferrer"
            className="btn cta-btn"
            style={{
              padding: '12px 22px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '9999px',
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <MessageSquare size={14} style={{ color: '#25D366' }} />
            <span>WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
