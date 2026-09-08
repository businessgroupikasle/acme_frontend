import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function ProductDetailsCTA({ onQuoteClick }) {
  return (
    <div style={{
      background: 'var(--bg-dark)',
      color: '#ffffff',
      padding: '50px 0'
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
          <h2 style={{
            fontSize: '26px',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '8px'
          }}>
            Have a Project in Mind?
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#cbd5e1'
          }}>
            Get high-quality bricks delivered on time for your construction needs.
          </p>
        </div>

        {/* Right Side: Contact Options */}
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
