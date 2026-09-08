import React from 'react';

export default function ProductDetailsBreadcrumb({ productName, categoryName = 'Bricks & Blocks', onHomeClick, onProductsClick }) {
  const getProductH1 = (name) => {
    const lower = (name || '').toLowerCase();
    if (lower.includes('fly ash brick')) return 'Fly Ash Bricks Manufacturer in Coimbatore';
    if (lower.includes('fly ash block')) return 'Fly Ash Blocks Manufacturer in Coimbatore';
    if (lower.includes('paver')) return 'Paver Blocks Manufacturer in Coimbatore';
    if (lower.includes('interlock')) return 'Interlock Bricks Manufacturer in Coimbatore';
    if (lower.includes('solid')) return 'Solid Concrete Blocks Manufacturer in Coimbatore';
    if (lower.includes('aac')) return 'AAC Blocks Supplier in Coimbatore';
    return `${name} in Coimbatore`;
  };

  const h1Title = getProductH1(productName);

  return (
    <div className="breadcrumb-hero-banner" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #111827 0%, #1e293b 50%, #0f172a 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '50px 0',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(124, 161, 58, 0.15) 0%, rgba(124, 161, 58, 0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div className="container" style={{ textAlign: 'left', position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: '38px',
          fontWeight: 800,
          marginBottom: '8px',
          letterSpacing: '-0.02em'
        }}>
          {h1Title}
        </h1>
        <div style={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#cbd5e1',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={onHomeClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              padding: 0,
              fontSize: 'inherit',
              fontWeight: 'inherit',
              textDecoration: 'none'
            }}
            className="breadcrumb-home-link"
          >
            Home
          </button>
          <span>&gt;</span>
          <button 
            onClick={onProductsClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              padding: 0,
              fontSize: 'inherit',
              fontWeight: 'inherit',
              textDecoration: 'none'
            }}
            className="breadcrumb-products-link"
          >
            Products
          </button>
          <span>&gt;</span>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{productName}</span>
        </div>
      </div>
    </div>
  );
}


