import React, { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  {
    url: '/images/banner1.png',
    caption: 'Built Strong. Built to Last. - Premium Blocks & Bricks'
  }
];

export default function HeroSection({ onExploreClick, onQuoteClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (bannerImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="home-hero-section" style={{
      position: 'relative',
      minHeight: '650px',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <style>{`
        /* Desktop Default */
        .home-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center center;
          transition: opacity 1.2s ease-in-out;
          z-index: 1;
        }

        .home-hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .home-hero-subtitle {
          font-size: 17px;
          color: #e2e8f0;
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 700px;
        }

        .home-hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 40px;
        }

        .home-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Mobile View: Ensures full banner framing and perfect readability */
        @media (max-width: 768px) {
          .home-hero-section {
            min-height: 520px !important;
            padding: 20px 0 !important;
          }
          
          .home-hero-bg {
            background-position: 65% center !important;
            background-size: cover !important;
          }

          .home-hero-title {
            font-size: 28px !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }

          .home-hero-subtitle {
            font-size: 13.5px !important;
            line-height: 1.55 !important;
            margin-bottom: 24px !important;
          }

          .home-hero-features {
            gap: 14px 20px !important;
            margin-bottom: 26px !important;
          }

          .home-hero-buttons {
            gap: 12px !important;
          }

          .home-hero-buttons .btn {
            padding: 12px 22px !important;
            font-size: 13.5px !important;
          }
        }

        @media (max-width: 480px) {
          .home-hero-section {
            min-height: 480px !important;
          }

          .home-hero-bg {
            background-position: 70% bottom !important;
          }

          .home-hero-title {
            font-size: 24px !important;
          }

          .home-hero-features {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            margin-bottom: 22px !important;
          }
        }
      `}</style>

      {/* Background Images with smooth cross-fade transition */}
      {bannerImages.map((image, index) => (
        <div
          key={image.url}
          className="home-hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(18, 29, 36, 0.60), rgba(18, 29, 36, 0.75)), url('${image.url}')`,
            opacity: index === currentImageIndex ? 1 : 0
          }}
          role="img"
          aria-label={image.caption}
        />
      ))}

      {/* Decorative radial glows for premium depth */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(124, 161, 58, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Hero Content Container */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        paddingTop: '60px',
        paddingBottom: '80px',
        width: '100%'
      }}>
        <div style={{ maxWidth: '800px' }}>
          {/* Tagline */}
          <div style={{
            fontSize: '13px',
            fontWeight: 800,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '14px'
          }}>
            BRICKS &amp; BLOCKS MANUFACTURER IN COIMBATORE
          </div>

          {/* Heading */}
          <h1 className="home-hero-title">
            Building Stronger Foundations for Tomorrow
          </h1>

          {/* Subtitle */}
          <p className="home-hero-subtitle">
            ACME Bricks & Blocks is a trusted manufacturer and supplier of quality construction materials in Coimbatore, offering Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks for residential, commercial and industrial construction.
          </p>

          {/* Feature Icons Row */}
          <div className="home-hero-features">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.25)', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                <ShieldCheck size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px' }}>QUALITY ASSURED</div>
                <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}>Consistent Strength & Quality</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.25)', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                <Leaf size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px' }}>SUSTAINABLE SOLUTIONS</div>
                <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}>Smarter Building Materials</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.25)', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                <Clock size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px' }}>RELIABLE DELIVERY</div>
                <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}>Quality Products, Delivered on Time</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="home-hero-buttons">
            <button
              onClick={onExploreClick}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '6px' }}
            >
              EXPLORE PRODUCTS
            </button>
            <button
              onClick={onQuoteClick}
              className="btn"
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                borderRadius: '6px',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls - Arrows & Dots (only when multiple images) */}
      {bannerImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 29, 36, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 4,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(18, 29, 36, 0.5)'; }}
            aria-label="Previous banner"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 29, 36, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 4,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(18, 29, 36, 0.5)'; }}
            aria-label="Next banner"
          >
            <ChevronRight size={24} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            gap: '10px'
          }}>
            {bannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                style={{
                  width: idx === currentImageIndex ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentImageIndex ? 'var(--accent)' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`Go to banner ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
}

