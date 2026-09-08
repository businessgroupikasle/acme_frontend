import React from 'react';
import { Award, Building, Heart, Users } from 'lucide-react';


export default function AboutUs({ onKnowMoreClick }) {
  const stats = [
    { value: '11+', label: 'Years of Experience', icon: <Award size={24} color="var(--accent)" /> },
    { value: '250+', label: 'Projects Completed', icon: <Building size={24} color="var(--accent)" /> },
    { value: '200+', label: 'Happy Customers', icon: <Heart size={24} color="var(--accent)" /> },
    { value: '25+', label: 'Team Members', icon: <Users size={24} color="var(--accent)" /> }
  ];

  return (
    <section id="about-section" style={{
      background: 'var(--bg-secondary)',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Column 1: Image with Play Video Button */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              position: 'relative',
              cursor: 'pointer'
            }} className="image-hover-zoom">
              <img
                src="/images/about-page/about.png"
                alt="ACME Bricks & Blocks Facility"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

            </div>
          </div>

          {/* Column 2: Corporate Details */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              ABOUT ACME BRICKS & BLOCKS
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Quality Bricks & Blocks, Built on 11+ Years of Experience
            </h2>
            <p className="about-desc" style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '30px',
              textAlign: 'justify',
              textJustify: 'inter-word'
            }}>
              Established in 2015, ACME Bricks & Blocks is a manufacturer and supplier of construction materials in Coimbatore, serving residential, commercial and industrial projects across Tamil Nadu and Kerala.
            </p>
            <button
              onClick={onKnowMoreClick}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '13px', fontWeight: 600, borderRadius: '6px' }}
            >
              KNOW MORE ABOUT US
            </button>
          </div>

          {/* Column 3: Metrics Grid (2x2) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  transition: 'var(--transition)'
                }}
                className="stat-card"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.2
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
