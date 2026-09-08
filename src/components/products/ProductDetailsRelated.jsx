import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_PRODUCTS = [
  {
    id: '1',
    name: 'Fly Ash Bricks',
    image: '/images/products/flyash-bricks.png',
    dimensions: { length: 230, width: 100, height: 75 },
    strength: '9.15 - 10.15 N/mm²'
  },
  {
    id: '2',
    name: 'Fly Ash Blocks',
    image: '/images/products/ash-blocks.png',
    dimensions: { length: 230, width: 230, height: 75 },
    strength: '3.5 - 7.0 N/mm²'
  },
  {
    id: '3',
    name: 'Paver Blocks',
    image: '/images/products/paver-block.png',
    dimensions: { length: 230, width: 230, height: 60 },
    strength: '5.5 - 11.77 N/mm²'
  },
  {
    id: '4',
    name: 'Interlock Bricks',
    image: '/images/products/interlock.png',
    dimensions: { length: 230, width: 230, height: 115 },
    strength: '5.5 - 11.77 N/mm²'
  },
  {
    id: '5',
    name: 'Solid Blocks',
    image: '/images/products/solid-blocks.png',
    dimensions: { length: 400, width: 200, height: 200 },
    strength: '4.0 - 5.0 N/mm²'
  },
  {
    id: '6',
    name: 'AAC Blocks',
    image: '/images/products/aac-blocks.png',
    dimensions: { length: 600, width: 200, height: 200 },
    strength: '3.0 - 4.5 N/mm²'
  }
];

export default function ProductDetailsRelated({ products, onProductClick, currentProductId }) {
  const sliderRef = useRef(null);

  // Use passed products or fallback catalog
  const catalog = products && products.length > 0 ? products : DEFAULT_PRODUCTS;
  
  // Filter out the current active product
  const relatedList = catalog.filter(p => String(p.id) !== String(currentProductId));

  const scroll = (direction) => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector('.related-product-card');
      const step = firstCard ? firstCard.offsetWidth + 20 : 270;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section style={{
      background: '#ffffff',
      padding: '70px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '36px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: 0
          }}>
            You May Also Like
          </h3>

          {/* Slide navigation buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => scroll('left')}
              title="Previous"
              aria-label="Previous Products"
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent, #9e2a2b)';
                e.currentTarget.style.background = '#fcf8f8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <ChevronLeft size={18} color="var(--text-primary)" />
            </button>
            <button 
              onClick={() => scroll('right')}
              title="Next"
              aria-label="Next Products"
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent, #9e2a2b)';
                e.currentTarget.style.background = '#fcf8f8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <ChevronRight size={18} color="var(--text-primary)" />
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div 
          ref={sliderRef}
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '16px',
            paddingTop: '6px',
            paddingLeft: '2px',
            paddingRight: '2px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }} 
          className="related-products-slider"
        >
          {relatedList.map((prod) => {
            const length = prod.dimensions?.length || 230;
            const width = prod.dimensions?.width || 100;
            const height = prod.dimensions?.height || 75;
            const strengthVal = prod.strength ? (String(prod.strength).includes('N/mm²') ? prod.strength : `${prod.strength} N/mm²`) : 'Standard';

            return (
              <div
                key={prod.id}
                onClick={() => onProductClick(prod)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                  scrollSnapAlign: 'start',
                  flex: '0 0 260px',
                  minWidth: '260px'
                }}
                className="related-product-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'var(--accent, #9e2a2b)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  background: '#fbfbfb',
                  borderRadius: '6px',
                  padding: '8px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Product Title */}
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                  lineHeight: '1.3'
                }}>
                  {prod.name}
                </h4>

                {/* Specs */}
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  <span>Size: {length} x {width} x {height} mm</span>
                  <span>Strength: {strengthVal}</span>
                </div>

                {/* View Details Link */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border)'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.5px' }}>VIEW DETAILS</span>
                  <ArrowRight size={14} color="var(--accent, #9e2a2b)" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
