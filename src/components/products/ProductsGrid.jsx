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

const formatStrength = (strength) => {
  if (!strength) return '7.5 N/mm²';
  const str = String(strength).trim();
  if (str.includes('N/mm²') || str.includes('MPa') || str.includes('kg') || str.includes('thickness')) {
    return str;
  }
  return `${str} N/mm²`;
};

export const getProductCardSpecs = (prod) => {
  if (!prod) return [];
  const idStr = String(prod.id || '');
  const name = (prod.name || '').toLowerCase();
  const type = (prod.type || '').toLowerCase();

  // 1. Fly Ash Bricks (Matches details page specs)
  if (idStr === '1' || name.includes('fly ash brick') || type.includes('fly ash brick')) {
    return [
      { label: 'Size (L × B × H)', val: '9 × 3 × 4 inches' },
      { label: 'Compressive Strength', val: '9.15–10.15 N/mm²' }
    ];
  }

  // 2. Fly Ash Blocks
  if (idStr === '2' || name.includes('fly ash block') || type.includes('fly ash block')) {
    return [
      { label: 'Size (L × B × H)', val: '9 × 9 × 4 inches' },
      { label: 'Weight', val: '9.5–10 kg' }
    ];
  }

  // 3. Paver Blocks
  if (idStr === '3' || name.includes('paver') || type.includes('paver')) {
    return [
      { label: 'Thickness Options', val: '2.36 inches & 3.15 inches' },
      { label: 'Material', val: 'Cement & Colour Pigments' }
    ];
  }

  // 4. Interlock Bricks
  if (idStr === '4' || name.includes('interlock') || type.includes('interlock')) {
    return [
      { label: 'Available Sizes', val: '6-Inch & 8-Inch Blocks' },
      { label: 'Compressive Strength', val: '5.5–11.77 N/mm²' }
    ];
  }

  // 5. Solid Blocks
  if (idStr === '5' || name.includes('solid') || type.includes('solid')) {
    return [
      { label: 'Available Sizes', val: '4-Inch, 6-Inch & 8-Inch Blocks' },
      { label: 'Compressive Strength', val: '4.0–5.0 N/mm²' }
    ];
  }

  // 6. AAC Blocks
  if (idStr === '6' || name.includes('aac') || type.includes('aac')) {
    return [
      { label: 'Size Options', val: '600 × 200 × 100/150/200/230 mm' },
      { label: 'Compressive Strength', val: '3.0–4.5 N/mm²' }
    ];
  }

  // Default fallback
  return [
    { label: 'Size (L × B × H)', val: prod.dimensions ? `${prod.dimensions.length} × ${prod.dimensions.width} × ${prod.dimensions.height} mm` : '9 × 3 × 4 inches' },
    { label: 'Compressive Strength', val: formatStrength(prod.strength) }
  ];
};


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
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="products-catalog-card"
            >
              {/* Top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--accent)', borderRadius: '10px 10px 0 0' }} />

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
