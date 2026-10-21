import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductCardSpecs } from './ProductsGrid';

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

const DEFAULT_PRODUCTS = [
  {
    id: '1',
    name: 'Fly Ash Bricks',
    image: '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp',
    alt: 'ACME fly ash brick manufacturer in Coimbatore',
    dimensions: { length: 230, width: 100, height: 75 },
    strength: '9.15 - 10.15 N/mm²'
  },
  {
    id: '2',
    name: 'Fly Ash Blocks',
    image: '/images/products/fly-ash-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME fly ash block supplier in Coimbatore',
    dimensions: { length: 230, width: 230, height: 75 },
    strength: '3.5 - 7.0 N/mm²'
  },
  {
    id: '3',
    name: 'Paver Blocks',
    image: '/images/products/paver-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME paver blocks in Coimbatore',
    dimensions: { length: 230, width: 230, height: 60 },
    strength: '5.5 - 11.77 N/mm²'
  },
  {
    id: '4',
    name: 'Interlock Bricks',
    image: '/images/products/interlock-brick-manufacturer-coimbatore-acme.webp',
    alt: 'ACME interlock bricks in Coimbatore',
    dimensions: { length: 230, width: 230, height: 115 },
    strength: '5.5 - 11.77 N/mm²'
  },
  {
    id: '5',
    name: 'Solid Blocks',
    image: '/images/products/solid-concrete-block-manufacturer-coimbatore-acme.webp',
    alt: 'ACME solid concrete blocks in Coimbatore',
    dimensions: { length: 400, width: 200, height: 200 },
    strength: '4.0 - 5.0 N/mm²'
  },
  {
    id: '6',
    name: 'AAC Blocks',
    image: '/images/products/aac-blocks-manufacturer-coimbatore-acme.webp',
    alt: 'AAC blocks manufacturer in Coimbatore – ACME Bricks & Blocks',
    dimensions: { length: 600, width: 200, height: 200 },
    strength: '3.0 - 4.5 N/mm²'
  }
];

export default function ProductDetailsRelated({ products, onProductClick, currentProductId }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Use passed products or fallback catalog
  const catalog = products && products.length > 0 ? products : DEFAULT_PRODUCTS;
  
  // Filter out the current active product
  const relatedList = catalog.filter(p => String(p.id) !== String(currentProductId));

  const updateScrollState = React.useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  }, []);

  React.useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, relatedList]);

  // Reset scroll position when the active product changes
  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
      updateScrollState();
    }
  }, [currentProductId, updateScrollState]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector('.related-product-card');
      const computedGap = parseFloat(window.getComputedStyle(sliderRef.current).gap) || 20;
      const step = firstCard ? (firstCard.offsetWidth + computedGap) : sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
      setTimeout(updateScrollState, 350);
    }
  };

  return (
    <section style={{
      background: '#ffffff',
      padding: '70px 0',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <div className="container">

        {/* Section Header */}
        <div className="related-section-header">
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
              disabled={!canScrollLeft}
              title="Previous"
              aria-label="Previous Products"
              className="related-carousel-nav-btn"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              title="Next"
              aria-label="Next Products"
              className="related-carousel-nav-btn"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div 
          ref={sliderRef}
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onProductClick(prod);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${prod.name}`}
                className="related-product-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  boxSizing: 'border-box'
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
                  {(() => {
                    const imgData = getProductImage(prod);
                    return (
                      <img
                        src={imgData.src}
                        alt={imgData.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    );
                  })()}
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
                  color: 'var(--text-muted)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '16px',
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
