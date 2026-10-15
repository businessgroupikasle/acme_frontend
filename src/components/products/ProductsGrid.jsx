import React from 'react';
import { ArrowRight, Grid as GridIcon, List } from 'lucide-react';

const PRODUCT_HIGHLIGHTS = {
  '1': ['High Compressive Strength (IS 12894)', 'Low Water Absorption & Eco-Friendly'],
  '2': ['Uniform Dimensions & Sharp Edges', 'High Load-Bearing Masonry Block'],
  '3': ['Heavy-Duty & Weather Resistant', 'Slip-Resistant Outdoor Paving'],
  '4': ['Precision Interlock Design', 'Fast Construction & High Durability'],
  '5': ['High-Strength Solid Concrete', 'Available in 4", 6" & 8" Sizes'],
  '6': ['Lightweight Thermal Insulation', 'Fire Resistant & Energy Efficient (IS 2185)']
};

import { formatStrength, getProductCardSpecs } from '../../utils/productSpecs.js';
export { formatStrength, getProductCardSpecs };


const getHighlights = (prod) => {
  if (PRODUCT_HIGHLIGHTS[String(prod.id)]) {
    return PRODUCT_HIGHLIGHTS[String(prod.id)];
  }
  const name = (prod.name || '').toLowerCase();
  if (name.includes('fly ash brick')) return ['High Compressive Strength', 'Eco-Friendly & Durable'];
  if (name.includes('fly ash block')) return ['Uniform Dimensions & Finish', 'High Load-Bearing Block'];
  if (name.includes('paver')) return ['Heavy-Duty & Weather Resistant', 'Slip-Resistant Paving'];
  if (name.includes('interlock')) return ['Interlock Self-Aligning Design', 'Fast & Sturdy Construction'];
  if (name.includes('solid')) return ['High-Strength Solid Concrete', 'Uniform Size & Finish'];
  if (name.includes('aac')) return ['Lightweight Thermal Insulation', 'Fire Resistant & Energy Efficient'];
  return (prod.characteristics || ['High Durability', 'Eco Friendly']).slice(0, 2);
};

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

export default function ProductsGrid({
  products = [],
  onViewDetails,
  sortOption,
  onSortChange
}) {
  // Use mock products if list is empty
  const displayProducts = (products && products.length > 0) ? products : [
    {
      id: '1',
      name: 'Fly Ash Bricks',
      image: '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp',
      alt: 'ACME fly ash brick manufacturer in Coimbatore',
      dimensions: { length: 230, width: 100, height: 75 },
      strength: '9.15–10.15 N/mm²',
      shortDesc: 'High-strength and durable fly ash bricks suitable for residential, commercial and industrial wall construction.',
      characteristics: ['High Strength', 'Low Water Absorption']
    },
    {
      id: '2',
      name: 'Fly Ash Blocks',
      image: '/images/products/fly-ash-block-manufacturer-coimbatore-acme.webp',
      alt: 'ACME fly ash block supplier in Coimbatore',
      dimensions: { length: 230, width: 230, height: 100 },
      strength: '9.5–10 kg',
      shortDesc: 'Durable fly ash blocks for residential, commercial and industrial construction.',
      characteristics: ['Consistent Dimensions', 'Masonry Applications']
    },
    {
      id: '3',
      name: 'Paver Blocks',
      image: '/images/products/paver-block-manufacturer-coimbatore-acme.webp',
      alt: 'ACME paver blocks in Coimbatore',
      dimensions: { length: 230, width: 230, height: 60 },
      strength: '2.36 inches & 3.15 inches thickness',
      shortDesc: 'Strong and attractive paver blocks for driveways, pathways, parking areas, gardens and commercial spaces.',
      characteristics: ['Durable & Weather Resistant', 'Suitable for Outdoor Applications']
    },
    {
      id: '4',
      name: 'Interlock Bricks',
      image: '/images/products/interlock-brick-manufacturer-coimbatore-acme.webp',
      alt: 'ACME interlock bricks in Coimbatore',
      dimensions: { length: 230, width: 230, height: 115 },
      strength: '5.5–11.77 N/mm²',
      shortDesc: 'Precision-made interlock bricks for durable, attractive and low-maintenance paving applications.',
      characteristics: ['Strong Interlock Design', 'Easy Installation']
    },
    {
      id: '5',
      name: 'Solid Blocks',
      image: '/images/products/solid-concrete-block-manufacturer-coimbatore-acme.webp',
      alt: 'ACME solid concrete blocks in Coimbatore',
      dimensions: { length: 400, width: 200, height: 150 },
      strength: '4.0–5.0 N/mm²',
      shortDesc: 'High-strength concrete solid blocks suitable for walls and structural construction applications.',
      characteristics: ['High Strength', 'Uniform Size & Finish']
    },
    {
      id: '6',
      name: 'AAC Blocks',
      image: '/images/products/aac-blocks-manufacturer-coimbatore-acme.webp',
      alt: 'AAC blocks manufacturer in Coimbatore – ACME Bricks & Blocks',
      dimensions: { length: 600, width: 200, height: 200 },
      strength: '3.5 MPa',
      shortDesc: 'Lightweight AAC blocks designed for efficient wall construction with excellent thermal insulation.',
      characteristics: ['Lightweight Construction', 'Excellent Thermal Insulation']
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>

      {/* Grid Header options (Hidden as requested) */}
      {/* <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        background: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '12px 20px'
      }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Showing 1-{displayProducts.length} of {displayProducts.length} products
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <GridIcon size={14} color="#ffffff" />
            </button>
            <button style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <List size={14} color="var(--text-primary)" />
            </button>
          </div>
        </div>
      </div> */}

      {/* Grid of Product Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {displayProducts.map((prod, index) => {
          return (
            <div
              key={prod.id}
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--accent)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'var(--transition)',
                position: 'relative'
              }}
              className="products-catalog-card"
            >

              {/* Card Image */}
              <div style={{
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                background: 'transparent',
                borderRadius: '8px',
                padding: '4px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
                onClick={() => onViewDetails(prod)}
              >
                {(() => {
                  const imgData = getProductImage(prod);
                  return (
                    <img
                      src={imgData.src}
                      alt={imgData.alt}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      width="240"
                      height="140"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  );
                })()}
              </div>

              {/* Product Title */}
              <h3 style={{
                fontSize: '15px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '6px'
              }}>
                {prod.name}
              </h3>

              {/* Short description */}
              {prod.shortDesc && (
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '10px', flex: 1 }}>
                  {prod.shortDesc}
                </p>
              )}

              {/* Product Specs */}
              <div style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginBottom: '10px',
                background: '#f8faf5',
                borderRadius: '6px',
                padding: '8px 10px',
                lineHeight: 1.45
              }}>
                {getProductCardSpecs(prod).map((spec, sIdx) => (
                  <span key={sIdx} style={{ display: 'block', wordBreak: 'break-word' }}>
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{spec.label}:</strong>{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>{spec.val}</span>
                  </span>
                ))}
              </div>

              {/* Green Checks Highlights */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '16px',
                minHeight: '44px'
              }}>
                {getHighlights(prod).map((char, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      display: 'inline-block',
                      flexShrink: 0,
                      marginTop: '5px'
                    }} />
                    <span style={{ fontSize: '11.5px', color: 'var(--accent)', fontWeight: 600, lineHeight: 1.4 }}>
                      {char}
                    </span>
                  </div>
                ))}
              </div>

              {/* Details trigger button/link row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                marginTop: 'auto',
                borderTop: '1px solid var(--border)'
              }}>
                <button
                  onClick={() => onViewDetails(prod)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    padding: 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  View Details
                </button>

                <button
                  onClick={() => onViewDetails(prod)}
                  style={{
                    background: 'var(--accent)',
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(124, 161, 58, 0.25)'
                  }}
                  className="grid-card-arrow"
                >
                  <ArrowRight size={12} color="#ffffff" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Pagination Widget */}
      {displayProducts.length > 9 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '20px'
        }}>
          <button style={{
            background: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 700
          }}>&lt;</button>

          <button style={{
            background: 'var(--accent)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 800
          }}>1</button>

          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              {page}
            </button>
          ))}

          <span style={{ fontSize: '14px', color: 'var(--text-muted)', width: '20px', textAlign: 'center' }}>..</span>

          <button style={{
            background: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}>6</button>

          <button style={{
            background: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 700
          }}>&gt;</button>
        </div>
      )}

    </div>
  );
}
