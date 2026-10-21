import React from 'react';
import { getProductCardSpecs } from '../../utils/productSpecs.js';

const PRODUCT_IMAGES_CONFIG = {
  '1': {
    src: '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp',
    alt: 'ACME fly ash brick manufacturer in Coimbatore'
  },
  '2': {
    src: '/images/products/fly-ash-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME fly ash block supplier in Coimbatore'
  },
  '3': {
    src: '/images/products/paver-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME paver blocks in Coimbatore'
  },
  '4': {
    src: '/images/products/interlock-brick-manufacturer-coimbatore-acme.webp',
    alt: 'ACME interlock bricks in Coimbatore'
  },
  '5': {
    src: '/images/products/solid-concrete-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME solid concrete blocks in Coimbatore'
  },
  '6': {
    src: '/images/products/aac-blocks-manufacturer-coimbatore-acme.webp',
    alt: 'AAC blocks manufacturer in Coimbatore – ACME Bricks & Blocks'
  }
};

const getProductImage = (prod) => {
  const idStr = String(prod.id);
  if (PRODUCT_IMAGES_CONFIG[idStr]) {
    return PRODUCT_IMAGES_CONFIG[idStr];
  }
  const name = (prod.name || '').toLowerCase();
  if (name.includes('fly ash brick')) return PRODUCT_IMAGES_CONFIG['1'];
  if (name.includes('fly ash block')) return PRODUCT_IMAGES_CONFIG['2'];
  if (name.includes('paver')) return PRODUCT_IMAGES_CONFIG['3'];
  if (name.includes('interlock')) return PRODUCT_IMAGES_CONFIG['4'];
  if (name.includes('solid')) return PRODUCT_IMAGES_CONFIG['5'];
  if (name.includes('aac')) return PRODUCT_IMAGES_CONFIG['6'];

  return {
    src: (prod.image || '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp').replace(/\.png$/, '.webp'),
    alt: prod.alt || `${prod.name || 'Product'} | ACME Bricks & Blocks`
  };
};

export default function FeaturedProductsSection({ products, onQuoteClick, onViewDetails }) {
  // Use first 4 products from backend if loaded, otherwise fall back to matching image specs
  const displayProducts = (products && products.length >= 4) ? products.slice(0, 4) : [
    {
      id: '1',
      name: 'Fly Ash Brick',
      image: '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp',
      alt: 'ACME fly ash brick manufacturer in Coimbatore',
      dimensions: { length: 230, width: 110, height: 75 },
      strength: '>= 7.5 N/mm²'
    },
    {
      id: '5',
      name: 'Solid Block',
      image: '/images/products/solid-concrete-block-manufacturer-coimbatore-acme.webp',
      alt: 'ACME solid concrete blocks in Coimbatore',
      dimensions: { length: 290, width: 190, height: 190 },
      strength: '>= 5 N/mm²'
    },
    {
      id: '3',
      name: 'Paver Block',
      image: '/images/products/paver-block-manufacturer-coimbatore-acme.webp',
      alt: 'ACME paver blocks in Coimbatore',
      dimensions: { length: 200, width: 100, height: 60 },
      strength: '>= 35 N/mm²'
    },
    {
      id: '4',
      name: 'Interlock Block',
      image: '/images/products/interlock-brick-manufacturer-coimbatore-acme.webp',
      alt: 'ACME interlock bricks in Coimbatore',
      dimensions: { length: 225, width: 112.5, height: 80 },
      strength: '>= 7.5 N/mm²'
    }
  ];

  return (
    <section style={{
      background: 'var(--bg-secondary)',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            FEATURED PRODUCTS
          </div>
        </div>

        {/* Products Grid (1x4) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {displayProducts.map((prod) => {
            // Standardize specs in case data is from backend
            const sizeStr = prod.dimensions 
              ? `Size: ${prod.dimensions.length} x ${prod.dimensions.width} x ${prod.dimensions.height} mm` 
              : 'Size: Custom dimensions';
            const strengthStr = prod.strength || (prod.characteristics && prod.characteristics[0]) || 'Compressive Strength: High';

            return (
              <div 
                key={prod.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                  transition: 'var(--transition)',
                  alignItems: 'stretch'
                }}
                className="featured-product-card"
              >
                {/* Product Image */}
                <div style={{
                  height: '130px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  background: 'transparent',
                  borderRadius: '6px',
                  padding: '4px',
                  overflow: 'hidden'
                }}>
                  {(() => {
                    const imgData = getProductImage(prod);
                    return (
                      <img 
                        src={imgData.src} 
                        alt={imgData.alt} 
                        loading="lazy"
                        decoding="async"
                        width="240"
                        height="130"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    );
                  })()}
                </div>

                {/* Product Name */}
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px'
                }}>
                  {prod.name}
                </h3>

                {/* Specs Column */}
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '20px',
                  background: '#f8faf5',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  lineHeight: 1.45,
                  flex: 1
                }}>
                  {getProductCardSpecs(prod).map((spec, sIdx) => (
                    <span key={sIdx} style={{ display: 'block', wordBreak: 'break-word' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{spec.label}:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{spec.val}</span>
                    </span>
                  ))}
                </div>

                {/* Buttons Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '8px'
                }}>
                  <button 
                    onClick={() => onViewDetails && onViewDetails(prod)}
                    className="btn btn-secondary featured-card-btn"
                    aria-label={`View details for ${prod.name}`}
                    style={{
                      padding: '8px 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      borderRadius: '4px',
                      textAlign: 'center'
                    }}
                  >
                    VIEW DETAILS
                  </button>
                  <button 
                    onClick={() => onQuoteClick(prod)}
                    className="btn btn-primary featured-card-btn"
                    aria-label={`Get a quote for ${prod.name}`}
                    style={{
                      padding: '8px 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      borderRadius: '4px',
                      textAlign: 'center'
                    }}
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
