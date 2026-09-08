import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  Search, 
  HelpCircle, 
  ArrowRight, 
  Calculator, 
  Compass, 
  Phone, 
  MessageSquare, 
  Image as ImageIcon,
  Sparkles,
  Layers
} from 'lucide-react';

export default function NotFound({ onHomeClick, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchableItems = [
    { name: 'Fly Ash Bricks', tab: 'products', categoryName: 'Fly Ash Bricks', icon: '🧱' },
    { name: 'Fly Ash Blocks', tab: 'products', categoryName: 'Fly Ash Blocks', icon: '🧱' },
    { name: 'Paver Blocks', tab: 'products', categoryName: 'Paver Blocks', icon: '🛣️' },
    { name: 'Interlocking Bricks', tab: 'products', categoryName: 'Interlock Bricks', icon: '🧩' },
    { name: 'Solid Concrete Blocks', tab: 'products', categoryName: 'Solid Blocks', icon: '🏗️' },
    { name: 'AAC Lightweight Blocks', tab: 'products', categoryName: 'AAC Blocks', icon: '🏢' },
    { name: 'Brick & Mortar Calculator', tab: 'calculator', icon: '🧮' },
    { name: 'Factory Project Gallery', tab: 'gallery', icon: '📸' },
    { name: 'Contact & Quotation', tab: 'contact', icon: '📞' }
  ];

  const filteredItems = searchQuery.trim() === '' ? [] : searchableItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '70px 20px'
    }}>

      {/* Dynamic Keyframe Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-4deg); }
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .clean-pill-btn {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .clean-pill-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(26, 51, 35, 0.25) !important;
        }
        .creative-chip {
          transition: all 0.2s ease;
        }
        .creative-chip:hover {
          background: #1a3323 !important;
          color: #ffffff !important;
          border-color: #1a3323 !important;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Soft Ambient Decorative Shapes */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '-70px',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(124, 161, 58, 0.12) 0%, rgba(241, 245, 249, 0.4) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'subtleGlow 8s infinite ease-in-out'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '-80px',
        width: '360px',
        height: '360px',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, rgba(124, 161, 58, 0.06) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'subtleGlow 10s infinite ease-in-out'
      }} />

      {/* Floating Animated Geometric Bricks in Background */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '12%',
        width: '64px',
        height: '36px',
        background: 'rgba(124, 161, 58, 0.15)',
        border: '1.5px dashed rgba(124, 161, 58, 0.4)',
        borderRadius: '8px',
        pointerEvents: 'none',
        animation: 'floatSlow 5s infinite ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: 700,
        color: '#7ca13a'
      }}>
        🧱
      </div>

      <div style={{
        position: 'absolute',
        bottom: '22%',
        left: '10%',
        width: '72px',
        height: '40px',
        background: 'rgba(26, 51, 35, 0.06)',
        border: '1.5px solid rgba(26, 51, 35, 0.15)',
        borderRadius: '8px',
        pointerEvents: 'none',
        animation: 'floatReverse 6s infinite ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: '#1a3323'
      }}>
        📐
      </div>

      {/* Main Centered Content */}
      <div style={{
        maxWidth: '680px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* 1. Brand Logo */}
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/logo.webp"
            alt="ACME Bricks Logo"
            style={{
              height: '54px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* 2. Central Magnifier Circle with Floating Badge */}
        <div style={{
          position: 'relative',
          display: 'inline-block',
          marginBottom: '20px',
          animation: 'floatSlow 4s ease-in-out infinite'
        }}>
          {/* Main Dark Green Circle with Search Icon */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a3323 0%, #0d1e14 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 16px 36px rgba(26, 51, 35, 0.28)',
            margin: '0 auto',
            border: '3px solid rgba(255, 255, 255, 0.8)'
          }}>
            <Search size={44} color="#ffffff" strokeWidth={2.5} />
          </div>

          {/* Floating Orange Question Mark Badge */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            border: '3px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 6px 14px rgba(234, 88, 12, 0.4)',
            animation: 'badgePulse 3s infinite ease-in-out'
          }}>
            <HelpCircle size={16} strokeWidth={2.5} />
          </div>
        </div>

        {/* 3. Big Bold 404 with Subtle Gradient */}
        <h1 style={{
          fontSize: 'clamp(85px, 15vw, 128px)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #1a3323 20%, #305e41 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          margin: '0 0 16px 0',
          textShadow: '0 2px 20px rgba(26, 51, 35, 0.06)'
        }}>
          404
        </h1>

        {/* 4. Headline & Friendly Description */}
        <h2 style={{
          fontSize: 'clamp(24px, 4.5vw, 32px)',
          fontWeight: 800,
          color: '#1e293b',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Oops! This page went missing
        </h2>

        <p style={{
          fontSize: '16px',
          color: '#64748b',
          maxWidth: '520px',
          margin: '0 auto 28px auto',
          lineHeight: 1.6
        }}>
          Looks like this page doesn't exist or has been moved. Let's get you back on solid ground.
        </p>

        {/* 5. Clean Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '28px'
        }}>
          {/* Primary Button */}
          <button
            onClick={() => onNavigate ? onNavigate('home') : onHomeClick && onHomeClick()}
            className="clean-pill-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1a3323',
              color: '#ffffff',
              border: 'none',
              padding: '14px 34px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(26, 51, 35, 0.25)'
            }}
          >
            <Home size={18} /> Back to Home
          </button>

          {/* Secondary Outline Button */}
          <button
            onClick={() => onNavigate && onNavigate('products')}
            className="clean-pill-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: '#1a3323',
              border: '2px solid #1a3323',
              padding: '13px 32px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            <Package size={18} /> Browse Products
          </button>
        </div>

        {/* 6. Creative Smart Mini Search Bar */}
        <div style={{
          maxWidth: '440px',
          margin: '0 auto 24px auto',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '50px',
            padding: '6px 16px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
            transition: 'border-color 0.2s ease'
          }}>
            <Search size={16} color="#7ca13a" style={{ marginRight: '8px', flexShrink: 0 }} />
            <input 
              type="text"
              placeholder="Search bricks, pavers, calculator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                width: '100%',
                fontSize: '13px',
                color: '#1e293b',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: '#64748b',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Dynamic Search Dropdown Results */}
          {filteredItems.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              marginTop: '8px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              zIndex: 30,
              maxHeight: '220px',
              overflowY: 'auto',
              textAlign: 'left'
            }}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(item.tab, null, item.categoryName);
                    }
                    setSearchQuery('');
                  }}
                  style={{
                    padding: '10px 16px',
                    borderBottom: index < filteredItems.length - 1 ? '1px solid #f8fafc' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#1e293b',
                    fontWeight: 600,
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <ArrowRight size={14} color="#7ca13a" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 7. Creative Quick Navigation Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, marginRight: '4px' }}>
            Quick Links:
          </span>
          {[
            { label: 'Fly Ash Bricks', action: () => onNavigate && onNavigate('products', null, 'Fly Ash Bricks') },
            { label: 'Paver Blocks', action: () => onNavigate && onNavigate('products', null, 'Paver Blocks') },
            { label: 'Brick Calculator', action: () => onNavigate && onNavigate('calculator') },
            { label: 'Factory Gallery', action: () => onNavigate && onNavigate('gallery') }
          ].map((chip, idx) => (
            <button
              key={idx}
              onClick={chip.action}
              className="creative-chip"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50px',
                padding: '5px 14px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#475569',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
