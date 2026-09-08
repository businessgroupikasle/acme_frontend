import React from 'react';
import { Layers, Maximize2, Tag, ArrowRight } from 'lucide-react';

export default function ProductList({ products, loading, error, onEstimateClick }) {
  if (loading) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '3px solid rgba(234, 88, 12, 0.1)',
          borderTopColor: 'var(--accent-light)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
        <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>Loading premium materials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--danger)' }}>Error loading catalog: {error}</p>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>Please ensure backend server is started using npm run dev.</p>
      </div>
    );
  }

  return (
    <section id="catalog-section" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '12px' }}>Architectural Collection</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Browse our catalog of premium structural blocks, facial bricks, and refractory lining materials built for durability.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="premium-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* Visual Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <span className="badge badge-accent">{product.type}</span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-light)' }}>
                    ${product.price.toFixed(2)} <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 400 }}>/ pc</span>
                  </span>
                </div>

                {/* Simulated Product Image Container */}
                <div style={{
                  height: '160px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border)',
                  position: 'relative'
                }}>
                  <Layers size={48} style={{ opacity: 0.15, color: '#f97316' }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Maximize2 size={12} /> {product.dimensions.length}x{product.dimensions.width}x{product.dimensions.height} mm
                  </span>
                </div>

                {/* Text Metadata */}
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '8px' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', minHeight: '60px' }}>
                  {product.description}
                </p>

                {/* Attributes List */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '24px',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '16px'
                }}>
                  {product.characteristics.map((char, index) => (
                    <li key={index} style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '6px'
                    }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid var(--border)',
                paddingTop: '16px',
                marginTop: 'auto'
              }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Stock: <strong style={{ color: 'var(--text-secondary)' }}>{product.stock.toLocaleString()} pcs</strong>
                </span>
                
                <button 
                  className="btn btn-secondary" 
                  onClick={() => onEstimateClick(product)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '13px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Estimate <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
