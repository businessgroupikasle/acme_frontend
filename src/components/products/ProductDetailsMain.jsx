import React, { useState } from 'react';
import { Star, MessageSquare, Download, Share2, Shield, Leaf, Droplet, BadgeDollarSign, Maximize, ArrowRight } from 'lucide-react';

export default function ProductDetailsMain({ product, onQuoteClick }) {
  const [activeThumb, setActiveThumb] = useState(0);

  // Fallback specs in case they are missing from object
  const name = product.name || 'Fly Ash Brick';
  const image = product.image || '/images/products/flyash-bricks.png';
  const sizeStr = product.dimensions ? `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} mm` : '190 x 90 x 90 mm';
  const strengthStr = product.strength || '7.5 N/mm²';

  const thumbs = [image, image];

  const isFlyAshBricks = name.toLowerCase().includes('fly ash brick');
  const isFlyAshBlocks = name.toLowerCase().includes('fly ash block');
  const isPaverBlocks = name.toLowerCase().includes('paver block');
  const isInterlockBricks = name.toLowerCase().includes('interlock brick');
  const isSolidBlocks = name.toLowerCase().includes('solid block');
  const isAACBlocks = name.toLowerCase().includes('aac');

  const highlights = isFlyAshBricks
    ? [
        { text: 'High Compressive Strength', icon: <Shield size={14} color="var(--accent)" /> },
        { text: 'Low Water Absorption', icon: <Droplet size={14} color="var(--accent)" /> },
        { text: 'Uniform Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
        { text: 'Eco-Friendly Material', icon: <Leaf size={14} color="var(--accent)" /> }
      ]
    : isFlyAshBlocks
      ? [
          { text: 'Durable Construction', icon: <Shield size={14} color="var(--accent)" /> },
          { text: 'Consistent Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
          { text: 'Lower Water Absorption', icon: <Droplet size={14} color="var(--accent)" /> },
          { text: 'Cost-Effective Solution', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
        ]
      : isPaverBlocks
        ? [
            { text: 'High Durability', icon: <Shield size={14} color="var(--accent)" /> },
            { text: 'Consistent Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
            { text: 'Weather Resistant', icon: <Leaf size={14} color="var(--accent)" /> },
            { text: 'Versatile Applications', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
          ]
        : isInterlockBricks
          ? [
              { text: 'Strong & Durable', icon: <Shield size={14} color="var(--accent)" /> },
              { text: 'Interlocking Design', icon: <Maximize size={14} color="var(--accent)" /> },
              { text: 'Easy Installation', icon: <Leaf size={14} color="var(--accent)" /> },
              { text: 'Low Maintenance', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
            ]
          : isSolidBlocks
            ? [
                { text: 'High Strength', icon: <Shield size={14} color="var(--accent)" /> },
                { text: 'Uniform Dimensions', icon: <Maximize size={14} color="var(--accent)" /> },
                { text: 'Durable Construction', icon: <Leaf size={14} color="var(--accent)" /> },
                { text: 'Efficient Masonry', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
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
          ? 'INTERLOCK BLOCKS MANUFACTURER IN COIMBATORE'
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
    ? 'High-Strength Fly Ash Bricks for Residential & Commercial Construction'
    : isFlyAshBlocks
      ? 'Durable Fly Ash Blocks for Strong, Efficient Masonry Construction'
      : isPaverBlocks
        ? 'Durable Paver Blocks for Driveways, Pathways & Parking Areas'
        : isInterlockBricks
          ? 'Strong Interlocking Blocks for Durable Paving & Outdoor Construction'
          : isSolidBlocks
            ? 'High-Strength Solid Blocks for Durable Masonry Construction'
            : isAACBlocks
              ? 'Lightweight AAC Blocks for Faster & Efficient Building Construction'
              : 'High Quality, Strong & Durable Bricks for Modern Construction';

  const displayDescription = isFlyAshBricks
    ? 'ACME Bricks manufactures and supplies high-quality fly ash bricks in Coimbatore for residential, commercial and industrial construction. Made using fly ash, cement, sand and water, our fly ash bricks offer high compressive strength, consistent dimensions, low water absorption and durable performance for masonry applications. We supply fly ash bricks across Coimbatore, Tamil Nadu and Kerala for individual, contractor and bulk construction requirements.'
    : isFlyAshBlocks
      ? 'ACME Bricks manufactures and supplies fly ash blocks in Coimbatore for residential, commercial and industrial construction. Our fly ash blocks are designed to provide durability, dimensional consistency and reliable structural performance while supporting efficient masonry work. We supply fly ash blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors and bulk construction projects.'
      : isPaverBlocks
        ? 'ACME Bricks manufactures and supplies Paver Blocks in Coimbatore for residential, commercial, industrial and landscaping applications. Our paver blocks are designed for durability, consistent dimensions, attractive finishes and reliable outdoor performance. We supply Paver Blocks across Coimbatore, Tamil Nadu and Kerala for driveways, pathways, parking areas, courtyards and other paving requirements.'
        : isInterlockBricks
          ? 'ACME Bricks manufactures and supplies interlock blocks in Coimbatore for residential, commercial and outdoor construction requirements. Designed for accurate fitting, durability and efficient installation, our interlocking blocks are suitable for driveways, pathways, parking areas, landscaping and other paving applications. We supply interlock blocks across Coimbatore, Tamil Nadu and Kerala for contractors, builders and bulk projects.'
          : isSolidBlocks
            ? 'ACME Bricks manufactures and supplies solid blocks in Coimbatore for residential, commercial and industrial construction. Our solid concrete blocks are manufactured for strength, dimensional consistency and dependable masonry performance, making them suitable for walls, partitions and other construction applications. We supply solid blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors and bulk construction requirements.'
            : isAACBlocks
              ? 'ACME Bricks manufactures and supplies AAC Blocks in Coimbatore for residential, commercial and industrial construction. AAC blocks are lightweight building materials that can help reduce structural load while supporting faster masonry work, thermal insulation and efficient construction. We supply AAC Blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors, developers and bulk construction projects.'
              : `ACME ${name}s are manufactured using high-quality raw materials and advanced technology to ensure superior strength, durability and consistency. Ideal for all types of construction.`;

  const techSpecs = isFlyAshBricks
    ? [
      { label: 'Size', val: '9 x 4 x 3 inch' },
      { label: 'Compressive Strength', val: '9.15 - 10.15 N/mm²' },
      { label: 'Indian Standard', val: 'IS 12894:2002' },
      { label: 'Density', val: 'Approx. 1700–1850 kg/m³' },
      { label: 'Water Absorption', val: '<10% (Conforms to IS 12894)' }
    ]
    : isFlyAshBlocks
      ? [
        { label: 'Size', val: '230 mm x 230 mm x 70 mm (or 75 mm)' },
        { label: 'Compressive Strength', val: '3.5 - 7.0 N/mm²' },
        { label: 'Indian Standard', val: 'IS 2185 (PART 1) : 2005' },
        { label: 'Density', val: 'Approx. 1,600 - 1,850 kg/m³' },
        { label: 'Water Absorption', val: '<10% (Conforms to IS 12894)' }
      ]
      : isPaverBlocks
        ? [
          { label: 'Thickness Options', val: '60 mm, 80 mm (custom thickness on request)' },
          { label: 'Material', val: 'High-quality cement, fine aggregates, and colour pigments' },
          { label: 'Manufacturing', val: 'Vibrocompaction and hydraulic pressing' },
          { label: 'Key Benefits', val: 'Versatile Designs, High Durability, Slip-Resistant, Weatherproof, Eco-Drainage' }
        ]
        : isInterlockBricks
          ? [
            { label: 'Size', val: '9"x9"x4.5", 12"x4"x2", 9"x3"x2"' },
            { label: 'Compressive Strength', val: '5.5 - 11.77 N/mm²' },
            { label: 'Indian Standard', val: 'IS 15658' },
            { label: 'Density', val: 'Approx. 1,600 kg/m³' },
            { label: 'Water Absorption', val: '06% to 20%' }
          ]
          : isSolidBlocks
            ? [
              { label: 'Size Options', val: '400x200x150 mm (6" thick), 400x200x100 mm (4" thick), 400x200x200 mm (8" thick), 400 x 200 x 230 mm (9" thick)' },
              { label: 'Compressive Strength', val: '4.0 - 5.0 N/mm²' },
              { label: 'Indian Standard', val: 'IS 2185' },
              { label: 'Density', val: 'Approx. >1,800 kg/m³' },
              { label: 'Water Absorption', val: '~90 g/(m²·s⁰·⁵)' }
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
                src={thumbs[activeThumb]}
                alt={name}
                className="product-main-img"
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
                onClick={() => setActiveThumb((prev) => (prev === 0 ? thumbs.length - 1 : prev - 1))}
                style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                &lsaquo;
              </button>
              {thumbs.map((thumb, idx) => (
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
                  <img src={thumb} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              ))}
              <button
                onClick={() => setActiveThumb((prev) => (prev === thumbs.length - 1 ? 0 : prev + 1))}
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
                <div className="product-highlights-tags" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px 16px',
                  padding: '16px 0',
                  borderTop: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '24px'
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

                {/* Technical specs list */}
                <div className="product-specs-list" style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, auto) 16px 1fr',
                  rowGap: '12px',
                  columnGap: '0px',
                  marginBottom: '32px',
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
