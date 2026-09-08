import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function ProductsCTA({ onQuoteClick }) {
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
            Looking for Bricks or Blocks for Your Project?
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#cbd5e1'
          }}>
            Get product specifications, pricing and bulk order assistance from ACME Bricks.
          </p>
        </div>

        {/* Right Side: Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
            <button 
            onClick={onQuoteClick}
            className="btn btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '6px'
            }}
          >
            GET A QUOTE
          </button>
          
          <a 
            href="/contact"
            className="btn"
            style={{
              padding: '12px 24px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '6px',
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <PhoneCall size={14} color="var(--accent)" />
            <span>CONTACT US</span>
          </a>
        </div>
      </div>
    </div>
  );
}
