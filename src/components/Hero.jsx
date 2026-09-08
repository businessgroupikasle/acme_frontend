import React from 'react';
import { ChevronRight, Percent, Award, ArrowUpRight } from 'lucide-react';

export default function Hero({ onExploreClick, onCalculatorClick }) {
  return (
    <header className="animate-fade-in" style={{
      position: 'relative',
      padding: '100px 0 80px 0',
      overflow: 'hidden'
    }}>
      {/* Background glowing spheres */}
      <div className="glow-spot" style={{ top: '-10%', left: '5%' }}></div>
      <div className="glow-spot" style={{ bottom: '0', right: '5%', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, transparent 60%)' }}></div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Content */}
        <div>
          <div style={{ display: 'inline-flex', gap: '8px', marginBottom: '20px' }}>
            <span className="badge badge-accent">
              <Award size={13} style={{ marginRight: '5px' }} /> Premium Quality Masonry
            </span>
          </div>

          <h1 style={{
            fontSize: '56px',
            lineHeight: '1.1',
            marginBottom: '24px',
            fontWeight: 800
          }}>
            Crafting the Foundations <br />
            <span className="text-gradient">of Tomorrow</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '36px',
            maxWidth: '580px',
            fontWeight: '300'
          }}>
            ACME Bricks manufactures premium, high-strength structural bricks and clay products engineered to withstand the test of time. Discover our curated catalog and use our advanced estimator tool.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={onExploreClick}>
              Explore Collection <ChevronRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={onCalculatorClick}>
              Estimate Calculator <Percent size={16} />
            </button>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'flex',
            gap: '40px',
            marginTop: '60px',
            borderTop: '1px solid var(--border)',
            paddingTop: '32px'
          }}>
            <div>
              <h3 style={{ fontSize: '28px', color: '#fff' }}>75+ MPa</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Class A Engineering Grade</p>
            </div>
            <div>
              <h3 style={{ fontSize: '28px', color: '#fff' }}>100%</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Natural Red Clay & Shale</p>
            </div>
            <div>
              <h3 style={{ fontSize: '28px', color: '#fff' }}>30k+</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Orders Processed Globally</p>
            </div>
          </div>
        </div>

        {/* Right Content - Visual card decoration */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            maxWidth: '380px',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(27, 30, 41, 0.9) 0%, rgba(19, 21, 28, 0.9) 100%)'
          }}>
            {/* Visual preview header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Spotlight Material</span>
              <ArrowUpRight size={18} color="var(--text-secondary)" />
            </div>

            {/* Brick Art Rendering (CSS Art) */}
            <div style={{
              height: '140px',
              background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
              borderRadius: '12px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Stacked bricks pattern */}
              <div style={{ position: 'absolute', opacity: 0.15, width: '120%', height: '120%', background: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 80px)' }}></div>
              <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 1, border: '1px solid rgba(255,255,255,0.3)', padding: '6px 12px', borderRadius: '20px', backdropFilter: 'blur(4px)' }}>
                Premium Firebrick
              </span>
            </div>

            <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '8px' }}>Refractory Amber Block</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Engineered to withstand temperatures up to 1400°C. Perfect for ovens, fireplaces, and industrial lining.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#f97316' }}>$3.80 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/ pc</span></span>
              <span style={{ fontSize: '12px', color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--success)', borderRadius: '50%' }}></span> In Stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
