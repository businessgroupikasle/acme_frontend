import React from 'react';
import { Award, Ruler, Droplet, Flame, Leaf, Coins } from 'lucide-react';

export default function ProductDetailsSpecsFeatures({ product }) {
  const sizeStr = product.dimensions ? `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} mm` : '190 x 90 x 90 mm';
  const strengthStr = product.strength || '7.5 N/mm²';
  const name = product.name || 'Fly Ash Brick';
  const isFlyAshBricks = name.toLowerCase().includes('fly ash brick');
  const isFlyAshBlocks = name.toLowerCase().includes('fly ash block');
  const isPaverBlocks = name.toLowerCase().includes('paver block');
  const isInterlockBricks = name.toLowerCase().includes('interlock brick');
  const isSolidBlocks = name.toLowerCase().includes('solid block');

  const specRows = isFlyAshBricks
    ? [
      { param: 'Size (L x B x H)', val: '9 x 4 x 3 inch' },
      { param: 'Compressive Strength', val: '9.15 - 10.15 N/mm²' },
      { param: 'Indian Standard', val: 'IS 12894:2002' },
      { param: 'Dry Density', val: 'Approx. 1700–1850 kg/m³' },
      { param: 'Water Absorption', val: '<10% (Conforms to IS 12894)' },
      { param: 'Efflorescence', val: 'Nil' },
      { param: 'Shape', val: 'Rectangular' },
      { param: 'Color', val: 'Grey' },
      { param: 'Eco Friendly', val: 'Yes' }
    ]
    : isFlyAshBlocks
      ? [
        { param: 'Size (L x B x H)', val: '230 mm x 230 mm x 70 mm (or 75 mm)' },
        { param: 'Compressive Strength', val: '3.5 - 7.0 N/mm²' },
        { param: 'Indian Standard', val: 'IS 2185 (PART 1) : 2005' },
        { param: 'Dry Density', val: 'Approx. 1,600 - 1,850 kg/m³' },
        { param: 'Water Absorption', val: '<10% (Conforms to IS 12894)' },
        { param: 'Efflorescence', val: 'Nil' },
        { param: 'Shape', val: 'Rectangular (Solid/Hollow)' },
        { param: 'Color', val: 'Grey' },
        { param: 'Eco Friendly', val: 'Yes' }
      ]
      : isPaverBlocks
        ? [
          { param: 'Thickness Options', val: '60 mm, 80 mm (custom thickness on request)' },
          { param: 'Material Composition', val: 'High-quality cement, fine aggregates, and colour pigments' },
          { param: 'Manufacturing Process', val: 'Vibrocompaction and hydraulic pressing' },
          { param: 'Key Benefits', val: 'Versatile Designs, High Durability, Slip-Resistant, Weatherproof, Eco-Drainage' },
          { param: 'Eco Friendly', val: 'Yes' }
        ]
        : isInterlockBricks
          ? [
            { param: 'Size (L x B x H)', val: '9"x9"x4.5", 12"x4"x2", 9"x3"x2"' },
            { param: 'Compressive Strength', val: '5.5 - 11.77 N/mm²' },
            { param: 'Indian Standard', val: 'IS 15658' },
            { param: 'Dry Density', val: 'Approx. 1,600 kg/m³' },
            { param: 'Water Absorption', val: '06% to 20%' },
            { param: 'Efflorescence', val: 'Nil' },
            { param: 'Shape', val: 'Interlocking Puzzle Shape' },
            { param: 'Color', val: 'Grey / Red' },
            { param: 'Eco Friendly', val: 'Yes (Compressed Stabilized Earth)' }
          ]
          : isSolidBlocks
            ? [
              { param: 'Size Options', val: '400x200x150 mm (6" thick), 400x200x100 mm (4" thick), 400x200x200 mm (8" thick), 400 x 200 x 230 mm (9" thick)' },
              { param: 'Compressive Strength', val: '4.0 - 5.0 N/mm²' },
              { param: 'Indian Standard', val: 'IS 2185' },
              { param: 'Dry Density', val: 'Approx. >1,800 kg/m³' },
              { param: 'Water Absorption', val: '~90 g/(m²·s⁰·⁵)' },
              { param: 'Efflorescence', val: 'Nil' },
              { param: 'Shape', val: 'Rectangular Solid' },
              { param: 'Color', val: 'Grey' },
              { param: 'Eco Friendly', val: 'Yes' }
            ]
            : [
              { param: 'Size (L x B x H)', val: sizeStr },
              { param: 'Dry Density', val: '1600 – 1800 kg/m³' },
              { param: 'Compressive Strength', val: `>= ${strengthStr}` },
              { param: 'Water Absorption', val: '< 12%' },
              { param: 'Efflorescence', val: 'Nil' },
              { param: 'Shape', val: 'Rectangular' },
              { param: 'Color', val: 'Grey' },
              { param: 'Eco Friendly', val: 'Yes' }
            ];

  const features = [
    { title: 'High Strength', desc: 'Provides high compressive strength for durable construction.', icon: <Award size={20} color="var(--accent)" /> },
    { title: 'Dimensional Accuracy', desc: 'Uniform size ensures smooth and faster construction.', icon: <Ruler size={20} color="var(--accent)" /> },
    { title: 'Low Water Absorption', desc: 'Low absorption rate for better performance and longer life.', icon: <Droplet size={20} color="var(--accent)" /> },
    { title: 'Fire Resistant', desc: 'Excellent fire resistance for safer structures.', icon: <Flame size={20} color="var(--accent)" /> },
    { title: 'Eco Friendly', desc: 'Made from fly ash which helps in reducing pollution.', icon: <Leaf size={20} color="var(--accent)" /> },
    { title: 'Cost Effective', desc: 'Provides great value and reduces overall construction cost.', icon: <Coins size={20} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: 'var(--bg-secondary)',
      padding: '70px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'start'
        }} className="product-details-specs-grid">

          {/* Left Column: Specifications Table */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              Specifications
            </h3>

            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 10px', color: 'var(--text-secondary)', fontWeight: 700 }}>Parameter</th>
                  <th style={{ textAlign: 'left', padding: '12px 10px', color: 'var(--text-secondary)', fontWeight: 700 }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid var(--border)',
                    background: idx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent'
                  }}>
                    <td style={{ padding: '12px 10px', color: 'var(--text-secondary)', fontWeight: 600 }}>{row.param}</td>
                    <td style={{ padding: '12px 10px', color: 'var(--text-primary)', fontWeight: 700 }}>{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Column: Key Features Grid */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              Key Features
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px 20px'
            }} className="key-features-inner-grid">
              {features.map((f, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--border)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {f.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
