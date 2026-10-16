import React, { useState } from 'react';
import { Check, Download, FileText } from 'lucide-react';

export default function ProductDetailsTabs({ product, productName = 'Fly Ash Brick', onContactClick }) {
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = [
    'Description',
    'Product Highlights',
    'Specifications',
    'Features',
    'Applications',
    'Advantages',
    'Downloads'
  ];

  const name = product?.name || productName || 'Fly Ash Brick';
  const isFlyAshBricks = name.toLowerCase().includes('fly ash brick');
  const isFlyAshBlocks = name.toLowerCase().includes('fly ash block');
  const isPaverBlocks = name.toLowerCase().includes('paver block');
  const isInterlockBricks = name.toLowerCase().includes('interlock');
  const isSolidBlocks = name.toLowerCase().includes('solid block') || name.toLowerCase().includes('solid brick');
  const isAACBlocks = name.toLowerCase().includes('aac');

  const descriptionData = isFlyAshBricks
    ? {
      heading: 'Fly Ash Bricks for Residential, Commercial and Industrial Construction',
      paragraphs: [
        'ACME Bricks manufactures and supplies fly ash bricks in Coimbatore for residential buildings, commercial developments and industrial construction projects. We serve homeowners, builders, civil contractors, construction companies and developers looking for a reliable fly ash brick supplier for their projects.',
        'Based in the Coimbatore market, ACME Bricks caters to individual orders and bulk requirements, with supply enquiries welcomed from across Coimbatore, Tamil Nadu and Kerala.'
      ]
    }
    : isFlyAshBlocks
      ? {
        heading: 'Fly Ash Blocks for Residential, Commercial and Industrial Construction',
        paragraphs: [
          'ACME Bricks manufactures and supplies fly ash blocks in Coimbatore for residential buildings, commercial developments and industrial construction projects. We serve homeowners, builders, civil contractors, construction companies and developers looking for a reliable fly ash block supplier.',
          'We cater to individual orders and bulk requirements, with supply enquiries welcomed from across Coimbatore, Tamil Nadu and Kerala.'
        ]
      }
      : isPaverBlocks
        ? {
          heading: 'Durable Paver Blocks for Driveways, Pathways & Outdoor Spaces',
          paragraphs: [
            'ACME Paver Blocks are designed to provide a strong, attractive and practical surface solution for residential, commercial and infrastructure applications. Manufactured using quality cement, aggregates and colour pigments, our paver blocks offer durability, consistent dimensions and a range of applications.',
            'Our paver blocks in Coimbatore are suitable for driveways, parking areas, pathways, gardens, commercial spaces and other outdoor surfaces. We supply paving products across Coimbatore, Tamil Nadu and Kerala.'
          ]
        }
        : isInterlockBricks
          ? {
            heading: 'Strong Interlock Blocks for Durable Construction',
            paragraphs: [
              'ACME Bricks manufactures and supplies interlock bricks and Interlock blocks in Coimbatore for construction projects. Our product range includes 6-inch and 8-inch interlock blocks to meet different project requirements.',
              'We cater to builders, civil contractors, construction companies and bulk buyers across Coimbatore, Tamil Nadu and Kerala.'
            ]
          }
          : isSolidBlocks
            ? {
              heading: 'High-Strength Solid Blocks for Durable Masonry Construction',
              paragraphs: [
                'ACME Bricks manufactures and supplies solid concrete blocks in Coimbatore for residential, commercial and industrial construction projects. Our solid blocks are available in different sizes to meet varied masonry requirements. They are suitable for walls, partitions and other construction applications, depending on the project specifications.',
                'We supply solid blocks to builders, civil contractors, construction companies and bulk buyers across Coimbatore, with supply enquiries welcomed from Tamil Nadu and Kerala.'
              ]
            }
            : isAACBlocks
              ? {
                heading: 'Lightweight AAC Blocks for Faster & Efficient Construction',
                paragraphs: [
                  'ACME AAC Blocks are lightweight building blocks designed for efficient wall construction. Their cellular structure provides lower weight compared with conventional dense masonry materials while also offering useful thermal insulation properties.',
                  'Our AAC blocks in Coimbatore are suitable for residential, commercial and modern building projects where lightweight construction, thermal comfort and construction efficiency are important. We supply AAC blocks for projects across Coimbatore, Tamil Nadu and Kerala.'
                ]
              }
              : {
                heading: `ACME ${name}`,
                paragraphs: [
                  product?.description || `ACME ${name}s are manufactured using high-quality raw materials and advanced technology to ensure superior strength, durability and consistency. Ideal for all types of construction.`
                ]
              };

  // Bullet points for description tab
  const bulletPoints = isFlyAshBricks
    ? [
      'Consistent product dimensions',
      'Suitable for a wide range of masonry applications',
      'Options for individual and bulk orders',
      'Supply enquiries for residential and commercial projects'
    ]
    : isFlyAshBlocks
      ? [
        'Consistent product dimensions',
        'Suitable for masonry applications',
        'Available for individual and bulk orders',
        'Supply for residential and commercial projects'
      ]
      : isPaverBlocks
        ? [
          'Manufactured using quality cement and aggregates',
          'Available in different thickness options',
          'Durable and suitable for outdoor applications',
          'Consistent shape and surface finish',
          'Suitable for residential and commercial paving',
          'Available in different colours and patterns'
        ]
        : isInterlockBricks
          ? [
            'Strong and Durable',
            'Precision Dimensions',
            'Interlock Design',
            'Multiple Size Options',
            'Easy Installation',
            'Low Maintenance'
          ]
          : isSolidBlocks
            ? [
              'High Strength',
              'Uniform Dimensions',
              'Durable Construction',
              'Efficient Masonry',
              'Multiple Size Options',
              'Suitable for Construction Projects'
            ]
            : isAACBlocks
              ? [
                'Lightweight construction material',
                'Excellent thermal insulation',
                'Uniform size and shape',
                'Easy to handle and install',
                'Suitable for faster wall construction',
                'Suitable for residential and commercial buildings'
              ]
              : [
                'Manufactured using quality-controlled raw materials',
                'Uniform shape and smooth surface finish',
                'Excellent strength and durability',
                'Environment friendly and sustainable',
                'Suitable for all types of construction'
              ];

  const specRows = isFlyAshBricks
    ? [
      { param: 'Size (L × B × H)', val: '9 × 3 × 4 inches' },
      { param: 'Compressive Strength', val: '9.15–10.15 N/mm²' },
      { param: 'Dry Density', val: 'Approximately 1,700–1,850 kg/m³' },
      { param: 'Shape', val: 'Rectangular' },
      { param: 'Colour', val: 'Grey' },
      { param: 'Eco-Friendly', val: 'Yes' }
    ]
    : isFlyAshBlocks
      ? [
        { param: 'Size (L × B × H)', val: '9 × 9 × 4 inches' },
        { param: 'Weight', val: '9.5–10 kg' },
        { param: 'Compressive Strength', val: '3.5–7.0 N/mm²' },
        { param: 'Shape', val: 'Rectangular' },
        { param: 'Colour', val: 'Grey' },
        { param: 'Eco-Friendly', val: 'Yes' }
      ]
      : isPaverBlocks
        ? [
          { param: 'Thickness Options', val: '2.36 inches & 3.15 inches' },
          { param: 'Material', val: 'Cement, fine aggregates and colour pigments' },
          { param: 'Manufacturing Process', val: 'Vibrocompaction and hydraulic pressing' },
          {
            param: 'Key Benefits',
            val: (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontWeight: 600 }}>
                <span>• Multiple design options</span>
                <span>• Durable construction</span>
                <span>• Suitable for outdoor paving applications</span>
                <span>• Ideal for residential and commercial projects</span>
              </div>
            )
          }
        ]
        : isInterlockBricks
          ? [
            { param: 'Size (L x B x H)', val: '9"x9"x4.5", 12"x4"x2", 9"x3"x2"' },
            { param: 'Compressive Strength', val: '5.5 - 11.77 N/mm²' },
            { param: 'Indian Standard', val: 'IS 15658' },
            { param: 'Dry Density', val: 'Approx. 1,600 kg/m³' },
            { param: 'Water Absorption', val: '06% to 20%' },
            { param: 'Efflorescence', val: 'Nil' },
            { param: 'Shape', val: 'Interlock Puzzle Shape' },
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
            : isAACBlocks
              ? [
                { param: 'Available Sizes', val: '4-Inch, 6-Inch, 8-Inch & 9-Inch AAC Blocks' },
                { param: 'Compressive Strength', val: '3–5 N/mm²' },
                { param: '4-Inch Dimensions', val: '24 × 8 × 4 inches (L × W × H)' },
                { param: '6-Inch Dimensions', val: '24 × 8 × 6 inches (L × W × H)' },
                { param: '8-Inch Dimensions', val: '24 × 8 × 8 inches (L × W × H)' },
                { param: '9-Inch Dimensions', val: '24 × 9 × 8 inches (L × W × H)' },
                { param: 'Weight', val: '8–25 kg per block' }
              ]
              : [
                { param: 'Shape', val: 'Rectangular' },
                { param: 'Color', val: 'Grey' },
                { param: 'Eco Friendly', val: 'Yes' }
              ];

  const featuresList = isFlyAshBricks
    ? [
      'High Compressive Strength: Provides excellent strength and durability for reliable masonry construction.',
      'Dimensional Accuracy: Uniform size and shape help achieve better alignment and faster construction.',
      'Low Water Absorption: Low water absorption helps improve durability and long-term performance.',
      'Fire Resistant: Offers good resistance to fire, supporting safer building construction.',
      'Eco-Friendly: Manufactured using fly ash, helping reduce dependence on conventional clay bricks.',
      'Cost Effective: Consistent dimensions and efficient installation can help reduce material and construction costs.'
    ]
    : isFlyAshBlocks
      ? [
        'Good Compressive Strength: Provides reliable strength for durable wall construction and masonry applications.',
        'Dimensional Accuracy: Consistent dimensions help achieve better wall alignment and efficient installation.',
        'Durable Construction: Designed to withstand regular building conditions and provide long-lasting performance.',
        'Reduced Water Absorption: Controlled water absorption helps improve durability and overall performance.',
        'Eco-Friendly Material: Uses fly ash as a key raw material, supporting more sustainable construction practices.',
        'Cost Effective: Larger block sizes and efficient installation can help reduce construction time and masonry costs.'
      ]
      : isPaverBlocks
        ? [
          'High Durability: Designed to withstand regular pedestrian and vehicle traffic in suitable applications.',
          'Consistent Dimensions: Accurate manufacturing helps achieve better alignment and a neat finished surface.',
          'Weather Resistant: Suitable for outdoor applications and changing weather conditions when properly installed.',
          'Slip-Resistant Surface: Provides a practical surface solution for pathways, driveways and other outdoor areas.',
          'Multiple Designs: Available in different colours, patterns and layouts to complement various spaces.',
          'Easy Maintenance: Individual pavers can be removed and replaced when required, making maintenance practical.'
        ]
        : isInterlockBricks
          ? [
            'Interlock Design: The specially shaped units fit together to create a stable and well-aligned paved surface.',
            'High Strength: Designed to provide dependable performance for suitable pedestrian and vehicle-use applications.',
            'Dimensional Accuracy: Uniform manufacturing helps achieve proper alignment and a neat finished surface.',
            'Attractive Finish: Available in different shapes, colours and laying patterns for visually appealing spaces.',
            'Weather Suitable: Designed for outdoor applications and regular exposure to environmental conditions.',
            'Easy Maintenance: Individual units can be removed and replaced when maintenance is required.'
          ]
          : isSolidBlocks
            ? [
              'High Compressive Strength: Provides dependable strength for suitable wall and masonry applications.',
              'Solid Construction: The dense structure provides a strong and stable building material.',
              'Dimensional Accuracy: Uniform dimensions help improve wall alignment and construction efficiency.',
              'Durable Performance: Designed to provide long-term performance in suitable construction environments.',
              'Multiple Size Options: Different sizes are available to meet varying wall construction requirements.',
              'Easy Handling & Installation: Standardised dimensions help simplify measuring, alignment and masonry work.'
            ]
            : isAACBlocks
              ? [
                'Lightweight Construction: Lower weight helps reduce the load of masonry walls and makes handling easier during construction.',
                'Thermal Insulation: The cellular structure provides good thermal insulation, helping improve indoor comfort.',
                'Dimensional Accuracy: Uniform dimensions support accurate wall alignment and efficient installation.',
                'Easy Handling: Lightweight blocks are easier to transport, handle and position during masonry work.',
                'Faster Construction: Larger block sizes can help cover more wall area with fewer joints.',
                'Fire Resistant: AAC is a non-combustible building material and offers good fire resistance.'
              ]
              : [
                'High quality raw materials used',
                'Dimensional accuracy and consistency',
                'Strong and durable performance',
                'Eco-friendly manufacturing process',
                'Suitable for diverse masonry work'
              ];

  const applicationsList = isFlyAshBricks
    ? [
      'Residential Construction: Suitable for load-bearing and partition walls in houses, apartments and residential buildings.',
      'Commercial Buildings: Ideal for offices, shops, commercial complexes and institutional buildings.',
      'Industrial Construction: Suitable for warehouses, factories, industrial buildings and compound walls.',
      'Infrastructure Projects: Can be used for masonry work, enclosures, partitions and other construction applications.'
    ]
    : isFlyAshBlocks
      ? [
        'Residential Buildings: Suitable for external and internal walls in houses, apartments and residential projects.',
        'Commercial Buildings: Ideal for offices, shops, commercial complexes and institutional buildings.',
        'Industrial Projects: Suitable for factories, warehouses, workspaces and industrial structures.',
        'Compound & Partition Walls: Useful for compound walls, internal partitions and general masonry applications.'
      ]
      : isPaverBlocks
        ? [
          'Residential Driveways: Suitable for home entrances, driveways, parking areas and pathways.',
          'Gardens & Landscapes: Ideal for garden paths, walkways, courtyards and landscaped areas.',
          'Commercial Spaces: Suitable for hotels, shops, offices, commercial complexes and parking areas.',
          'Public & Infrastructure Areas: Can be used for walkways, parks, pedestrian areas and other paving applications.'
        ]
        : isInterlockBricks
          ? [
            'Driveways: Suitable for residential driveways, entrances and vehicle parking areas.',
            'Walkways & Pathways: Ideal for pedestrian paths, garden walkways and residential landscapes.',
            'Parking Areas: Suitable for selected residential and commercial parking applications.',
            'Commercial & Landscape Areas: Can be used around hotels, offices, shops, gardens and commercial properties.'
          ]
          : isSolidBlocks
            ? [
              'Residential Construction: Suitable for walls in houses, apartments and other residential buildings.',
              'Commercial Buildings: Ideal for offices, shops, commercial complexes and institutional projects.',
              'Industrial Buildings: Suitable for factories, warehouses and other industrial construction.',
              'Compound & Boundary Walls: Useful for compound walls, partitions and general masonry applications.'
            ]
            : isAACBlocks
              ? [
                'Residential Buildings: Suitable for external and internal walls in houses and apartment projects.',
                'Commercial Construction: Ideal for offices, commercial buildings, hotels and institutional projects.',
                'Partition Walls: Suitable for internal partition walls where lightweight construction is preferred.',
                'Multi-Storey Buildings: Can be used for suitable non-load-bearing wall applications in multi-storey construction.'
              ]
              : [
                'Residential buildings',
                'Commercial offices and shops',
                'Industrial yards and warehouses',
                'Boundary walls and general masonry'
              ];

  const advantagesList = isFlyAshBricks
    ? [
      'Reduced Mortar Consumption: Uniform brick dimensions can help reduce mortar requirements and improve construction efficiency.',
      'Strong & Durable Construction: High compressive strength provides dependable performance and helps create long-lasting masonry.',
      'Sustainable Building Solution: Fly ash-based construction materials offer an environmentally responsible alternative to conventional clay bricks.',
      'Better Thermal Performance: The properties of fly ash bricks can help improve thermal comfort within buildings.',
      'Resistance to Chemical Exposure: Suitable formulations can provide improved resistance to common chemical and sulphate-related exposure.',
      'Consistent Quality: Controlled manufacturing helps maintain uniform size, shape and performance across batches.'
    ]
    : isFlyAshBlocks
      ? [
        'Faster Masonry Work: Larger block dimensions can cover more wall area with fewer joints.',
        'Consistent Wall Finish: Uniform dimensions help achieve better alignment and a more consistent masonry finish.',
        'Reduced Joint Work: Larger blocks can reduce the number of masonry joints compared with smaller individual bricks.',
        'Long-Term Durability: Good strength and controlled manufacturing provide dependable performance.',
        'Sustainable Construction: Fly ash-based products help make better use of an industrial by-product in construction.'
      ]
      : isPaverBlocks
        ? [
          'Long-Lasting Surface: Durable paver blocks provide reliable performance when installed on a properly prepared base.',
          'Attractive Appearance: Different colours and patterns allow you to create visually appealing outdoor spaces.',
          'Easy Replacement: Damaged individual blocks can be replaced without removing the entire paved surface.',
          'Low Maintenance: Properly installed paver surfaces require relatively simple routine maintenance.',
          'Suitable for Different Applications: Available options can be selected based on pedestrian, residential or vehicle-use requirements.'
        ]
        : isInterlockBricks
          ? [
            'Stable Paved Surface: The Interlock design helps distribute loads across adjoining units.',
            'Better Installation Efficiency: Uniform units and repeatable patterns can make laying and alignment easier.',
            'Attractive Designs: Multiple laying patterns and colour combinations provide design flexibility.',
            'Easy Repair: Individual damaged units can be replaced without disturbing the complete paved area.',
            'Durable Outdoor Solution: Provides a practical paving option for long-term outdoor use when correctly installed.'
          ]
          : isSolidBlocks
            ? [
              'Strong Wall Construction: Solid concrete construction provides reliable strength and stability.',
              'Consistent Masonry: Uniform blocks help achieve better alignment and a cleaner wall finish.',
              'Reduced Construction Variations: Standardised manufacturing helps maintain consistency across different batches.',
              'Long-Term Value: Durable construction materials can provide reliable performance throughout the building\'s service life.',
              'Versatile Applications: Suitable for a wide range of residential, commercial and industrial masonry requirements.'
            ]
            : isAACBlocks
              ? [
                'Reduced Structural Load: The lightweight nature of AAC blocks can help reduce masonry load on the structure.',
                'Faster Wall Construction: Large block sizes allow greater wall coverage with fewer individual units.',
                'Better Thermal Comfort: Thermal insulation properties can help reduce heat transfer through walls.',
                'Easy Installation: Lightweight blocks are easier to cut, handle and install compared with heavier masonry materials.',
                'Reduced Mortar & Joint Work: Larger dimensions and thin-joint installation systems can help reduce mortar consumption when the appropriate adhesive and installation method are used.'
              ]
              : [
                'Highly cost-effective compared to traditional brickwork',
                'Superior strength and long term structural durability',
                'Zero wastage during transportation and handling',
                'Consistent supply and prompt delivery options'
              ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '50px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1.6fr 1fr',
          gap: '30px',
          alignItems: 'start'
        }} className="product-details-tabs-layout">

          {/* Left Column: Vertical Tabs Menu */}
          <div className="product-tabs-menu-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            overflow: 'hidden'
          }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`product-tab-pill-btn ${isActive ? 'active' : ''}`}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    border: 'none',
                    outline: 'none',
                    background: isActive ? 'var(--accent-glow)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    borderLeft: isActive ? '4px solid var(--accent)' : '4px solid transparent'
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Middle Column: Tab Content */}
          <div style={{ padding: '0 10px' }}>
            {activeTab === 'Description' && (
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '14px'
                }}>
                  {descriptionData.heading}
                </h3>
                {descriptionData.paragraphs.map((p, idx) => (
                  <p key={idx} style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    marginBottom: idx === descriptionData.paragraphs.length - 1 ? '0' : '14px',
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                  }}>
                    {p}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'Product Highlights' && (
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '18px'
                }}>
                  Product Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {bulletPoints.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--text-primary)', fontWeight: 550 }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        display: 'inline-block',
                        flexShrink: 0
                      }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Specifications' && (
              <div style={{ padding: '5px 0' }}>
                {(isFlyAshBlocks || isFlyAshBricks || isPaverBlocks || isInterlockBricks || isSolidBlocks) && (
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                    {isFlyAshBlocks
                      ? 'ACME Fly Ash Blocks – Technical Specifications'
                      : isFlyAshBricks
                        ? 'ACME Fly Ash Bricks – Technical Specifications'
                        : isPaverBlocks
                          ? 'Paver Blocks – Product Specifications'
                          : isInterlockBricks
                            ? 'ACME Interlock Blocks – Technical Specifications'
                            : 'ACME Solid Blocks – Technical Specifications'}
                  </h4>
                )}
                {isInterlockBricks ? (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--border)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>Specification</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>6-Inch Interlock</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>8-Inch Interlock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { spec: 'Length', six: '11 inches', eight: '11 inches' },
                        { spec: 'Width', six: '6 inches', eight: '8 inches' },
                        { spec: 'Height', six: '5 inches', eight: '5 inches' },
                        { spec: 'Weight', six: '10–12 kg', eight: '10–12 kg' }
                      ].map((row, idx) => (
                        <tr key={idx} style={{
                          borderBottom: '1px solid var(--border)',
                          background: idx % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent'
                        }}>
                          <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 600, width: '34%' }}>{row.spec}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700, width: '33%' }}>{row.six}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700, width: '33%' }}>{row.eight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : isSolidBlocks ? (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--border)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>Specification</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>4-Inch Solid Block</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>6-Inch Solid Block</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>8-Inch Solid Block</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { spec: 'Length', four: '15 inches', six: '15 inches', eight: '12 inches' },
                        { spec: 'Width', four: '4 inches', six: '6 inches', eight: '8 inches' },
                        { spec: 'Height', four: '8 inches', six: '8 inches', eight: '8 inches' },
                        { spec: 'Weight', four: '15–16 kg', six: '15–16 kg', eight: '20–23 kg' }
                      ].map((row, idx) => (
                        <tr key={idx} style={{
                          borderBottom: '1px solid var(--border)',
                          background: idx % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent'
                        }}>
                          <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 600, width: '28%' }}>{row.spec}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700, width: '24%' }}>{row.four}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700, width: '24%' }}>{row.six}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700, width: '24%' }}>{row.eight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--border)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                          {isPaverBlocks ? 'Specification' : 'Parameter'}
                        </th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 700 }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specRows.map((row, idx) => (
                        <tr key={idx} style={{
                          borderBottom: '1px solid var(--border)',
                          background: idx % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent'
                        }}>
                          <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', fontWeight: 600, width: '40%' }}>{row.param}</td>
                          <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 700 }}>{row.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {activeTab === 'Features' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '5px 0' }}>
                {featuresList.map((pt, i) => {
                  const parts = pt.split(':');
                  const title = parts[0]?.trim();
                  const desc = parts.slice(1).join(':')?.trim();
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        display: 'inline-block',
                        flexShrink: 0,
                        marginTop: '6px'
                      }} />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{title}</h4>
                        {desc && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'Applications' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '5px 0' }}>
                {applicationsList.map((app, i) => {
                  const parts = app.split(':');
                  const title = parts[0]?.trim();
                  const desc = parts.slice(1).join(':')?.trim();
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        marginTop: desc ? '6px' : '5px',
                        display: 'inline-block',
                        flexShrink: 0
                      }} />
                      <div>
                        {desc ? (
                          <>
                            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 3px 0' }}>{title}</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>{desc}</p>
                          </>
                        ) : (
                          <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 550 }}>{app}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'Advantages' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '5px 0' }}>
                {advantagesList.map((adv, i) => {
                  const parts = adv.split(':');
                  const title = parts[0]?.trim();
                  const desc = parts.slice(1).join(':')?.trim();
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        display: 'inline-block',
                        flexShrink: 0,
                        marginTop: '6px'
                      }} />
                      <div>
                        {desc ? (
                          <>
                            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 3px 0' }}>{title}</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>{desc}</p>
                          </>
                        ) : (
                          <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 550 }}>{adv}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'Downloads' && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 0',
                perspective: '1200px'
              }}>
                <a
                  href="/images/brochure.pdf"
                  download="ACME_Bricks_Brochure.pdf"
                  style={{
                    display: 'flex',
                    textDecoration: 'none',
                    transform: 'rotateY(-16deg) rotateX(6deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease',
                    boxShadow: '-10px 15px 30px rgba(0,0,0,0.15), 0 5px 15px rgba(124, 161, 58, 0.05)',
                    borderRadius: '4px',
                    overflow: 'visible',
                    cursor: 'pointer',
                    background: '#ffffff'
                  }}
                  className="creative-brochure-card"
                >
                  <style>{`
                    .creative-brochure-card:hover {
                      transform: rotateY(-6deg) rotateX(3deg) translateY(-8px) scale(1.03);
                      box-shadow: -15px 25px 40px rgba(0,0,0,0.22), 0 10px 20px rgba(124, 161, 58, 0.12);
                    }
                    .brochure-crease {
                      position: absolute;
                      left: 0;
                      top: 0;
                      bottom: 0;
                      width: 15px;
                      background: linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%);
                      z-index: 5;
                    }
                  `}</style>

                  <div style={{
                    position: 'relative',
                    width: '240px',
                    height: '280px',
                    background: '#f8fafc',
                    borderRadius: '4px 0 0 4px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxSizing: 'border-box'
                  }}>
                    {/* Spine crease shadow */}
                    <div className="brochure-crease" />

                    {/* Paper edge layers visible on the side for 3D thickness */}
                    <div style={{
                      position: 'absolute',
                      right: '-4px',
                      top: '2px',
                      bottom: '2px',
                      width: '4px',
                      background: '#e2e8f0',
                      borderRight: '1px solid #cbd5e1',
                      borderRadius: '0 2px 2px 0',
                      zIndex: -1
                    }} />
                    <div style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '4px',
                      bottom: '4px',
                      width: '4px',
                      background: '#f1f5f9',
                      borderRadius: '0 2px 2px 0',
                      zIndex: -2
                    }} />

                    {/* Front Cover Design */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#0d2a1d',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '4px 0 0 4px',
                      overflow: 'hidden',
                      position: 'relative',
                      fontFamily: 'sans-serif'
                    }}>
                      {/* Top Bar with Logo & Contact Info */}
                      <div style={{
                        padding: '12px 10px 8px 10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        zIndex: 2,
                        background: 'linear-gradient(180deg, rgba(13,42,29,1) 85%, rgba(13,42,29,0) 100%)'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          {/* Logo Image */}
                          <div style={{
                            background: '#0f1c13',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.15)'
                          }}>
                            <img
                              src="/images/logo.webp"
                              alt="ACME Logo"
                              style={{ height: '22px', objectFit: 'contain' }}
                            />
                          </div>

                          {/* Contact Info (Compact) */}
                          <div style={{
                            textAlign: 'right',
                            fontSize: '7.5px',
                            fontWeight: '700',
                            lineHeight: '1.2',
                            color: '#ebdcb9'
                          }}>
                            <div>+91 73059 70966</div>
                            <div>+91 95008 51880</div>
                          </div>
                        </div>

                        {/* Mfrs of: Subtext */}
                        <div style={{
                          fontSize: '7px',
                          color: '#a3e635',
                          fontWeight: '700',
                          lineHeight: '1.2'
                        }}>
                          Mfrs. of: Fly Ash Bricks & Blocks, Paver Blocks, Interlock Blocks, Solid Blocks, AAC Blocks
                        </div>
                      </div>

                      {/* Middle Section: The Product Image itself */}
                      <div style={{
                        flex: 1,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'stretch'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundImage: 'url("/images/about.webp")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />

                        {/* Overlay shadow to read text on top of image */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '50%',
                          background: 'linear-gradient(0deg, rgba(13,42,29,0.95) 0%, rgba(13,42,29,0) 100%)',
                          zIndex: 1
                        }} />
                      </div>

                      {/* Bottom Section: Address & Tagline */}
                      <div style={{
                        padding: '8px 10px',
                        background: '#0d2a1d',
                        zIndex: 2,
                        textAlign: 'center'
                      }}>
                        {/* Tagline */}
                        <div style={{
                          fontSize: '6.5px',
                          fontWeight: '700',
                          lineHeight: '1.3',
                          color: '#ffffff',
                          marginBottom: '4px',
                          textTransform: 'uppercase'
                        }}>
                          High-Strength Fly Ash Bricks with Thermal Insulation & Fire Resistance
                        </div>

                        {/* Address & website */}
                        <div style={{
                          fontSize: '6.5px',
                          color: '#ebdcb9',
                          fontWeight: '600'
                        }}>
                          www.acmebricks.in | Coimbatore
                        </div>
                      </div>

                      {/* Click ribbon at the very bottom */}
                      <div style={{
                        background: 'var(--accent)',
                        padding: '6px',
                        textAlign: 'center',
                        zIndex: 3,
                        fontSize: '8px',
                        fontWeight: '800',
                        color: '#ffffff',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}>
                        <Download size={9} strokeWidth={3} />
                        <span>CLICK TO DOWNLOAD BROCHURE</span>
                      </div>
                    </div>

                    {/* Badge on top */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--accent)',
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--accent-glow)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                      PDF FILE
                    </div>
                  </div>
                </a>

                {/* Nice description below the 3D Brochure */}
                <p style={{
                  marginTop: '16px',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Click brochure cover to download catalogue</span>
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Need Bulk Order Card */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '30px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
          }}>
            <div style={{
              background: 'rgba(124, 161, 58, 0.08)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <Check size={24} color="var(--accent)" />
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '10px',
              lineHeight: 1.3
            }}>
              {isFlyAshBricks
                ? 'Fly Ash Brick Supplier in Coimbatore, Tamil Nadu and Kerala'
                : isFlyAshBlocks
                  ? 'Fly Ash Block Supplier in Coimbatore, Tamil Nadu and Kerala'
                  : isPaverBlocks
                    ? 'Paver Blocks Manufacturer & Supplier in Coimbatore, Tamil Nadu and Kerala'
                    : isInterlockBricks
                      ? 'Interlock Bricks Supplier in Coimbatore'
                      : isSolidBlocks
                        ? 'Solid Blocks Supplier in Coimbatore'
                        : isAACBlocks
                          ? 'AAC Blocks Supplier in Coimbatore, Tamil Nadu and Kerala'
                          : 'Need Bulk Order?'}
            </h3>

            <p style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              {isFlyAshBricks
                ? 'Planning a new construction project? Contact ACME Bricks to enquire about fly ash brick pricing, bulk quantities, product availability and delivery arrangements for your location'
                : isFlyAshBlocks
                  ? 'Planning a construction project? Contact ACME Bricks for fly ash block pricing, bulk quantities, product availability and delivery enquiries.'
                  : isPaverBlocks
                    ? 'Planning a driveway, pathway, or parking area? Contact ACME Bricks to enquire about paver block prices, available designs, bulk orders, and delivery arrangements across Coimbatore, Tamil Nadu, and Kerala.'
                    : isInterlockBricks
                      ? 'Looking for interlock bricks in Coimbatore? ACME Bricks supplies interlock paving bricks for driveways, pathways, parking areas and outdoor spaces. Enquire for prices and bulk orders.'
                      : isSolidBlocks
                        ? 'Looking for solid concrete blocks in Coimbatore? ACME Bricks supplies 4-inch, 6-inch and 8-inch solid blocks for construction projects. Enquire about prices and bulk orders.'
                        : isAACBlocks
                          ? 'Planning a lightweight masonry project? Contact ACME Bricks for AAC block prices, specifications and bulk delivery.'
                          : 'We supply bricks & blocks in bulk for construction projects of all sizes.'}
            </p>

            <button
              onClick={onContactClick}
              className="btn btn-primary-outline"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '6px',
                background: 'transparent',
                color: 'var(--accent)',
                border: '1.5px solid var(--accent)'
              }}
            >
              CONTACT OUR TEAM
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
