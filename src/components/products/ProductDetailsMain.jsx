import React, { useState } from 'react';
import { Star, MessageSquare, Download, Share2, Shield, Leaf, Droplet, BadgeDollarSign, Maximize, ArrowRight } from 'lucide-react';

export default function ProductDetailsMain({ product, onQuoteClick }) {
  const [activeThumb, setActiveThumb] = useState(0);

  // Fallback specs in case they are missing from object
  const name = product.name || 'Fly Ash Brick';
  const image = (product.image || '/images/products/flyash-bricks.webp').replace(/\.png$/, '.webp');
  const sizeStr = product.dimensions ? `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} mm` : '190 x 90 x 90 mm';
  const strengthStr = product.strength || '7.5 N/mm²';

  const isFlyAshBricks = name.toLowerCase().includes('fly ash brick');
  const isFlyAshBlocks = name.toLowerCase().includes('fly ash block');
  const isPaverBlocks = name.toLowerCase().includes('paver block');
  const isInterlockBricks = name.toLowerCase().includes('interlock brick');
  const isSolidBlocks = name.toLowerCase().includes('solid block');
  const isAACBlocks = name.toLowerCase().includes('aac');

  const imagesList = isFlyAshBricks
    ? [
      {
        src: '/images/products/fly-ash-brick-manufacturer-coimbatore-acme.webp',
        alt: 'ACME fly ash brick manufacturer in Coimbatore'
      },
      {
        src: '/images/products/fly-ash-brick-sizes-and-dimensions-acme.webp',
        alt: 'ACME fly ash brick sizes and dimensions'
      }
    ]
    : isAACBlocks
      ? [
        {
          src: '/images/products/aac-blocks-manufacturer-coimbatore-acme.png',
          alt: 'AAC blocks manufacturer in Coimbatore – ACME Bricks & Blocks'
        },
        {
          src: '/images/products/aac-concrete-blocks-supplier-coimbatore-acme.png',
          alt: 'AAC concrete blocks supplied by ACME Bricks & Blocks in Coimbatore'
        }
      ]
      : [
        {
          src: image,
          alt: `${name} Manufacturer in Coimbatore | ACME Bricks`
        },
        {
          src: image.replace(/\.webp$/, '-thumb.webp'),
          alt: `${name} sizes and dimensions`
        }
      ];

  const highlights = isFlyAshBricks
    ? [
      { text: 'Consistent product dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
      { text: 'Suitable for a wide range of masonry applications', icon: <Shield size={14} color="var(--accent)" /> },
      { text: 'Options for individual and bulk orders', icon: <BadgeDollarSign size={14} color="var(--accent)" /> },
      { text: 'Supply enquiries for residential and commercial projects', icon: <Leaf size={14} color="var(--accent)" /> }
    ]
    : isFlyAshBlocks
      ? [
        { text: 'Consistent product dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
        { text: 'Suitable for masonry applications', icon: <Shield size={14} color="var(--accent)" /> },
        { text: 'Available for individual and bulk orders', icon: <BadgeDollarSign size={14} color="var(--accent)" /> },
        { text: 'Supply for residential and commercial projects', icon: <Leaf size={14} color="var(--accent)" /> }
      ]
      : isPaverBlocks
        ? [
          { text: 'High Durability', icon: <Shield size={14} color="var(--accent)" /> },
          { text: 'Consistent Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
          { text: 'Suitable for Outdoor Applications', icon: <Leaf size={14} color="var(--accent)" /> },
          { text: 'Versatile Designs', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
        ]
        : isInterlockBricks
          ? [
            { text: 'Strong and Durable', icon: <Shield size={14} color="var(--accent)" /> },
            { text: 'Precision Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
            { text: 'Interlock Design', icon: <Leaf size={14} color="var(--accent)" /> },
            { text: 'Multiple Size Options', icon: <BadgeDollarSign size={14} color="var(--accent)" /> },
            { text: 'Easy Installation', icon: <ArrowRight size={14} color="var(--accent)" /> },
            { text: 'Low Maintenance', icon: <Shield size={14} color="var(--accent)" /> }
          ]
          : isSolidBlocks
            ? [
              { text: 'High Strength', icon: <Shield size={14} color="var(--accent)" /> },
              { text: 'Uniform Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
              { text: 'Durable Construction', icon: <Leaf size={14} color="var(--accent)" /> },
              { text: 'Efficient Masonry', icon: <BadgeDollarSign size={14} color="var(--accent)" /> },
              { text: 'Multiple Size Options', icon: <Maximize size={14} color="var(--accent)" /> },
              { text: 'Suitable for Construction Projects', icon: <Shield size={14} color="var(--accent)" /> }
            ]
            : [
              { text: 'Lightweight Construction', icon: <Shield size={14} color="var(--accent)" /> },
              { text: 'Thermal Insulation', icon: <Leaf size={14} color="var(--accent)" /> },
              { text: 'Faster Installation', icon: <Maximize size={14} color="var(--accent)" /> },
              { text: 'Uniform Dimensions', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
            ];

  const displayCategoryLabel = isFlyAshBricks
    ? 'FLY ASH BRICKS MANUFACTURER IN COIMBATORE'
    : isFlyAshBlocks
      ? 'FLY ASH BLOCKS MANUFACTURER IN COIMBATORE'
      : isPaverBlocks
        ? 'PAVER BLOCKS MANUFACTURER IN COIMBATORE'
        : isInterlockBricks
          ? 'INTERLOCK BRICKS MANUFACTURER IN COIMBATORE'
          : isSolidBlocks
            ? 'SOLID BLOCKS MANUFACTURER IN COIMBATORE'
            : isAACBlocks
              ? 'AAC BLOCKS MANUFACTURER IN COIMBATORE'
              : null;

  const displayTitle = isFlyAshBricks
    ? 'ACME Fly Ash Bricks'
    : isFlyAshBlocks
      ? 'ACME Fly Ash Blocks'
      : isPaverBlocks
        ? 'ACME Paver Blocks'
        : isInterlockBricks
          ? 'ACME Interlock Blocks'
          : isSolidBlocks
            ? 'ACME Solid Blocks'
            : isAACBlocks
              ? 'ACME AAC Blocks'
              : name;

  const displaySubtitle = isFlyAshBricks
    ? 'Fly Ash Bricks for Residential, Commercial and Industrial Construction'
    : isFlyAshBlocks
      ? 'Fly Ash Blocks for Residential, Commercial and Industrial Construction'
      : isPaverBlocks
        ? 'Durable Paver Blocks for Driveways, Pathways & Parking Areas'
        : isInterlockBricks
          ? 'Strong Interlock Blocks for Durable Construction'
          : isSolidBlocks
            ? 'High-Strength Solid Blocks for Durable Masonry Construction'
            : isAACBlocks
              ? 'Lightweight AAC Blocks for Faster & Efficient Building Construction'
              : 'High Quality, Strong & Durable Bricks for Modern Construction';

  const displayDescription = isFlyAshBricks
    ? 'ACME Bricks manufactures and supplies fly ash bricks in Coimbatore for residential buildings, commercial developments and industrial construction projects. We serve homeowners, builders, civil contractors, construction companies and developers looking for a reliable fly ash brick supplier for their projects.\n\nBased in the Coimbatore market, ACME Bricks caters to individual orders and bulk requirements, with supply enquiries welcomed from across Coimbatore, Tamil Nadu and Kerala.'
    : isFlyAshBlocks
      ? 'ACME Bricks manufactures and supplies fly ash blocks in Coimbatore for residential buildings, commercial developments and industrial construction projects. We serve homeowners, builders, civil contractors, construction companies and developers looking for a reliable fly ash block supplier.\n\nWe cater to individual orders and bulk requirements, with supply enquiries welcomed from across Coimbatore, Tamil Nadu and Kerala.'
      : isPaverBlocks
        ? 'ACME Bricks manufactures and supplies paver blocks in Coimbatore for residential, commercial, industrial and landscaping applications. Our paver blocks are available in different colours and thickness options to suit a variety of outdoor paving requirements. We cater to driveways, pathways, parking areas, courtyards and other paving projects across Coimbatore, Tamil Nadu and Kerala.'
        : isInterlockBricks
          ? 'ACME Bricks manufactures and supplies interlock bricks and Interlock blocks in Coimbatore for construction projects. Our product range includes 6-inch and 8-inch interlock blocks to meet different project requirements. We cater to builders, civil contractors, construction companies and bulk buyers across Coimbatore, Tamil Nadu and Kerala.'
          : isSolidBlocks
            ? 'ACME Bricks manufactures and supplies solid blocks in Coimbatore for residential, commercial and industrial construction. Our solid concrete blocks are manufactured for strength, dimensional consistency and dependable masonry performance, making them suitable for walls, partitions and other construction applications. We supply solid blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors and bulk construction requirements.'
            : isAACBlocks
              ? 'ACME Bricks manufactures and supplies AAC Blocks in Coimbatore for residential, commercial and industrial construction. AAC blocks are lightweight building materials that can help reduce structural load while supporting faster masonry work, thermal insulation and efficient construction. We supply AAC Blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors, developers and bulk construction projects.'
              : `ACME ${name}s are manufactured using high-quality raw materials and advanced technology to ensure superior strength, durability and consistency. Ideal for all types of construction.`;

  const techSpecs = isFlyAshBricks
    ? [
      { label: 'Size', val: '9 × 3 × 4 inches' },
      { label: 'Shape', val: 'Rectangular' },
      { label: 'Colour', val: 'Grey' }
    ]
    : isFlyAshBlocks
      ? [
        { label: 'Size', val: '9 × 9 × 4 inches' },
        { label: 'Weight', val: '9.5–10 kg' },
        { label: 'Shape', val: 'Rectangular' },
        { label: 'Colour', val: 'Grey' }
      ]
      : isPaverBlocks
        ? [
          { label: 'Thickness Options', val: '2.36 inches and 3.15 inches' },
          { label: 'Material', val: 'Cement, fine aggregates and colour pigments' },
          { label: 'Manufacturing Process', val: 'Vibrocompaction and hydraulic pressing' },
          { label: 'Key Benefits', val: 'Multiple design options, Durable construction, Suitable for outdoor paving applications, Ideal for residential and commercial projects' }
        ]
        : isInterlockBricks
          ? [
            { label: 'Available Sizes', val: '6-Inch & 8-Inch Interlock Blocks' },
            { label: '6-Inch Dimensions', val: '11 × 6 × 5 inches (L × W × H)' },
            { label: '8-Inch Dimensions', val: '11 × 8 × 5 inches (L × W × H)' },
            { label: 'Weight', val: '10–12 kg' }
          ]
          : isSolidBlocks
            ? [
              { label: 'Available Sizes', val: '4-Inch, 6-Inch & 8-Inch Solid Blocks' },
              { label: '4-Inch Dimensions', val: '15 × 4 × 8 inches (Weight: 15–16 kg)' },
              { label: '6-Inch Dimensions', val: '15 × 6 × 8 inches (Weight: 15–16 kg)' },
              { label: '8-Inch Dimensions', val: '12 × 8 × 8 inches (Weight: 20–23 kg)' }
            ]
            : isAACBlocks
              ? [
                { label: 'Material Composition', val: 'Autoclaved Aerated Concrete' },
                { label: 'Size Options', val: '600 x 200 x 100/150/200/230 mm' },
                { label: 'Compressive Strength', val: '3.0 - 4.5 N/mm²' },
                { label: 'Dry Density', val: 'Approx. 550 - 650 kg/m³' },
                { label: 'Features', val: 'Lightweight, Fire resistant, Thermal insulation, Soundproof' }
              ]
              : [
                { label: 'Size', val: sizeStr },
                { label: 'Strength', val: strengthStr },
                { label: 'Water Absorption', val: '< 12%' },
                { label: 'Compressive Strength', val: `>= ${strengthStr}` },
                { label: 'Color', val: 'Grey' }
              ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '60px 0 40px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'start'
        }} className="product-details-main-grid">

          {/* Left Column: Image Gallery Slider */}
          <div>
            <div className="product-main-img-box" style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '380px'
            }}>


              {/* Maximize Icon */}
              <button style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                zIndex: 2
              }}>
                <Maximize size={14} color="var(--text-primary)" />
              </button>

              <img
                src={imagesList[activeThumb].src}
                alt={imagesList[activeThumb].alt}
                className="product-main-img"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="500"
                height="380"
                style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Thumbnail Selectors Slider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px'
            }}>
              <button
                onClick={() => setActiveThumb((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1))}
                style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                &lsaquo;
              </button>
              {imagesList.map((imgItem, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  style={{
                    width: '56px',
                    height: '56px',
                    background: '#ffffff',
                    border: activeThumb === idx ? '2px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={imgItem.src}
                    alt={imgItem.alt}
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              ))}
              <button
                onClick={() => setActiveThumb((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1))}
                style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                &rsaquo;
              </button>
            </div>
          </div>

          {/* Right Column: Title, Ratings, Specs and CTA buttons */}
          <div>
            {/* Title & Subtitle */}
            {displayCategoryLabel && (
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px'
              }}>
                {displayCategoryLabel}
              </div>
            )}
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: isAACBlocks ? '24px' : '8px', letterSpacing: '-0.02em' }}>
              {displayTitle}
            </h2>
            {!isAACBlocks && (
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 550, marginBottom: '16px' }}>
                {displaySubtitle}
              </p>
            )}



            {/* Paragraph description */}
            <p className="product-details-desc" style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '24px',
              whiteSpace: 'pre-line',
              textAlign: 'justify',
              textJustify: 'inter-word'
            }}>
              {displayDescription}
            </p>

            {isAACBlocks ? (
              /* Two-column bullet points list for AAC Blocks matching the second image layout */
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px 24px',
                padding: '24px 0',
                borderTop: '1px solid var(--border)',
                marginBottom: '32px'
              }} className="aac-features-grid">
                {[
                  'Lightweight and easy to handle',
                  'Excellent thermal insulation',
                  'Soundproof and fire resistant',
                  'Faster construction process',
                  'Reduces structural load',
                  'Eco-friendly and energy efficient'
                ].map((text, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 650, color: 'var(--text-primary)' }}>
                    <ArrowRight size={16} color="var(--accent)" strokeWidth={2.5} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Highlight tags */}
                <div style={{
                  padding: '16px 0',
                  borderTop: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '24px'
                }}>
                  {(isFlyAshBricks || isFlyAshBlocks || isPaverBlocks) && (
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      Why Choose ACME Bricks?
                    </div>
                  )}
                  <div className="product-highlights-tags" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px 16px'
                  }}>
                    {highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {h.icon}
                        </div>
                        <span>{h.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical specs list */}
                <div style={{ marginBottom: '32px' }}>
                  {(isFlyAshBricks || isFlyAshBlocks || isPaverBlocks || isInterlockBricks || isSolidBlocks) && (
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      {isFlyAshBricks
                        ? 'Fly Ash Brick Specifications'
                        : isFlyAshBlocks
                          ? 'Fly Ash Block Specifications'
                          : isPaverBlocks
                            ? 'Paver Blocks – Product Specifications'
                            : isInterlockBricks
                              ? 'ACME Interlock Blocks – Technical Specifications'
                              : 'ACME Solid Blocks – Technical Specifications'}
                    </div>
                  )}
                  <div className="product-specs-list" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(140px, auto) 16px 1fr',
                    rowGap: '12px',
                    columnGap: '0px',
                    alignItems: 'baseline'
                  }}>
                    {techSpecs.map((item, i) => (
                      <React.Fragment key={i}>
                        <span className="spec-label" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '13px', lineHeight: 1.4 }}>
                          {item.label}
                        </span>
                        <span className="spec-colon" style={{ color: 'var(--text-muted)', textAlign: 'left', fontSize: '13px', fontWeight: 600 }}>
                          :
                        </span>
                        <span className="spec-value" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '13px', lineHeight: 1.4 }}>
                          {item.val}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Action buttons grid (2x2) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }} className="actions-button-grid">

              <button
                onClick={onQuoteClick}
                className="btn btn-primary"
                style={{ padding: '12px', fontSize: '13px', fontWeight: 700, borderRadius: '6px' }}
              >
                GET A QUOTE
              </button>

              <a
                href="https://wa.me/919500851880"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1.5px solid var(--border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={14} style={{ color: '#25D366' }} />
                <span>ENQUIRE ON WHATSAPP</span>
              </a>

              <a
                href="/images/brochure.pdf"
                download="ACME_Bricks_Brochure.pdf"
                className="btn"
                style={{
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1.5px solid var(--border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <Download size={14} color="var(--accent)" />
                <span>DOWNLOAD BROCHURE</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
