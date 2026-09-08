import React from 'react';

export default function FeaturedProductsSection({ products, onQuoteClick, onViewDetails }) {
  // Use first 4 products from backend if loaded, otherwise fall back to matching image specs
  const displayProducts = (products && products.length >= 4) ? products.slice(0, 4) : [
    {
      id: '1',
      name: 'Fly Ash Brick',
      image: '/images/products/flyash-bricks.png',
      dimensions: { length: 230, width: 110, height: 75 },
      strength: '>= 7.5 N/mm²'
    },
    {
      id: '2',
      name: 'Solid Block',
      image: '/images/products/solid-blocks.png',
      dimensions: { length: 290, width: 190, height: 190 },
      strength: '>= 5 N/mm²'
    },
    {
      id: '3',
      name: 'Paver Block',
      image: '/images/products/paver-block.png',
      dimensions: { length: 200, width: 100, height: 60 },
      strength: '>= 35 N/mm²'
    },
    {
      id: '4',
      name: 'Interlock Block',
      image: '/images/products/interlock.png',
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
                  <img 
                    src={prod.image || '/images/products/flyash-bricks.png'} 
                    alt={prod.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
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
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '24px',
                  flex: 1
                }}>
                  <span>{sizeStr}</span>
                  <span>{strengthStr}</span>
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
