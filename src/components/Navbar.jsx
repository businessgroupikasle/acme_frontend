import React from 'react';
import { Layers, Calculator, ShieldAlert, Home } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      padding: '16px 0',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          <img 
            src="/images/logo.webp" 
            alt="ACME Bricks Logo" 
            style={{
              height: '40px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              const textLogo = e.target.nextSibling;
              if (textLogo) textLogo.style.display = 'flex';
            }}
          />
          {/* Fallback Text Logo */}
          <div style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #ea580c, #9a3412)',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(234, 88, 12, 0.2)'
            }}>
              <Layers size={20} color="#fff" />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #f1f5f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ACME<span style={{ color: '#f97316' }}>BRICKS</span>
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('home')}
            className={`btn ${activeTab === 'home' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '8px' }}
          >
            <Home size={16} />
            <span>Home</span>
          </button>

          {/* <button 
            onClick={() => setActiveTab('calculator')}
            className={`btn ${activeTab === 'calculator' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '8px' }}
          >
            <Calculator size={16} />
            <span>Calculator</span>
          </button> */}

          <button
            onClick={() => setActiveTab('admin')}
            className={`btn ${activeTab === 'admin' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '8px' }}
          >
            <ShieldAlert size={16} />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
