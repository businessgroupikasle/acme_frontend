import React from 'react';
import { ArrowRight, Check, Grid as GridIcon, List } from 'lucide-react';

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
      image: '/images/products/flyash-bricks.png',
      dimensions: { length: 230, width: 100, height: 75 },
      strength: '9.15–10.15 N/mm²',
      shortDesc: 'High-strength and durable fly ash bricks suitable for residential, commercial and industrial wall construction.',
      characteristics: ['High Strength', 'Low Water Absorption']
    },
    {
      id: '2',
      name: 'Fly Ash Blocks',
      image: '/images/products/ash-blocks.png',
      dimensions: { length: 230, width: 230, height: 75 },
      strength: '3.5–7.0 N/mm²',
      shortDesc: 'Durable fly ash blocks designed for efficient masonry and strong wall construction.',
      characteristics: ['Durable Construction', 'Consistent Dimensions']
    },
    {
      id: '3',
      name: 'Paver Blocks',
      image: '/images/products/paver-block.png',
      dimensions: { length: 230, width: 230, height: 60 },
      strength: '60 mm / 80 mm thickness',
      shortDesc: 'Strong and attractive paver blocks for driveways, pathways, parking areas, gardens and commercial spaces.',
      characteristics: ['Durable & Weather Resistant', 'Suitable for Outdoor Applications']
    },
    {
      id: '4',
      name: 'Interlock Bricks',
      image: '/images/products/interlock.png',
      dimensions: { length: 230, width: 230, height: 115 },
      strength: '5.5–11.77 N/mm²',
      shortDesc: 'Precision-made interlock bricks for durable, attractive and low-maintenance paving applications.',
      characteristics: ['Strong Interlocking Design', 'Easy Installation']
    },
    {
      id: '5',
      name: 'Solid Blocks',
      image: '/images/products/solid-blocks.png',
      dimensions: { length: 400, width: 200, height: 150 },
      strength: '4.0–5.0 N/mm²',
      shortDesc: 'High-strength concrete solid blocks suitable for walls and structural construction applications.',
      characteristics: ['High Strength', 'Uniform Size & Finish']
    },
    {
      id: '6',
      name: 'AAC Blocks',
      image: '/images/products/aac-blocks.png',
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
        {displayProducts.map((prod) => {
          const isProminent = String(prod.id) === '1' || String(prod.id) === '3' || String(prod.id) === '4' ||
            prod.name.toLowerCase().includes('fly ash brick') ||
            prod.name.toLowerCase().includes('paver') ||
            prod.name.toLowerCase().includes('interlock');

          return (
            <div
              key={prod.id}
              style={{
                background: '#ffffff',
                border: isProminent ? '1.5px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isProminent ? '0 6px 20px rgba(124, 161, 58, 0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="products-catalog-card"
            >
              {/* Top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: isProminent ? '4px' : '3px', background: 'var(--accent)', borderRadius: '10px 10px 0 0' }} />

              {/* Prominent badge for Key Products */}
              {isProminent && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: '9.5px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '12px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  zIndex: 2
                }}>
                  Top Pick
                </div>
              )}

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
                <img
                  src={prod.image || '/images/products/flyash-bricks.png'}
                  alt={prod.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply'
                  }}
                />
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
              gap: '3px',
              marginBottom: '10px',
              background: '#f8faf5',
              borderRadius: '6px',
              padding: '8px 10px'
            }}>
              <span>Size: {prod.dimensions ? `${prod.dimensions.length} × ${prod.dimensions.width} × ${prod.dimensions.height}` : '190 × 90 × 90'} mm</span>
              <span>Strength: {prod.strength || '7.5 N/mm²'}</span>
            </div>

            {/* Green Checks Highlights */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              fontSize: '11px',
              color: '#16a34a',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              {(prod.characteristics || ['High Durability', 'Eco Friendly']).slice(0, 2).map((char, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Check size={11} strokeWidth={3} />
                  <span>{char}</span>
                </div>
              ))}
            </div>

            {/* Details trigger button/link row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px solid var(--border)'
            }}>
              <button
                onClick={() => onViewDetails(prod)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: 0,
                  letterSpacing: '0.04em'
                }}
              >
                VIEW DETAILS
              </button>

              <button
                onClick={() => onViewDetails(prod)}
                style={{
                  background: 'var(--accent)',
                  width: '28px',
                  height: '28px',
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
