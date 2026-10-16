import fs from 'fs';
import path from 'path';

export const gallerySeoData = {
  flyash_blocks: [
    { raw: 'PON08774.jpg', name: 'acme-flyash-blocks-manufacturer-coimbatore-01', title: 'ACME Fly Ash Blocks Manufacturing', alt: 'ACME high-strength fly ash blocks manufactured at factory in Coimbatore' },
    { raw: 'PON08775.jpg', name: 'high-strength-flyash-building-blocks-coimbatore-02', title: 'High-Strength Fly Ash Blocks', alt: 'High-strength load-bearing fly ash building blocks stacked in curing yard Coimbatore' },
    { raw: 'PON08776.jpg', name: 'precision-molded-flyash-blocks-coimbatore-03', title: 'Precision-Molded Fly Ash Blocks', alt: 'Precision-molded uniform dimension fly ash blocks for modern masonry construction' },
    { raw: 'PON08777.jpg', name: 'eco-friendly-flyash-masonry-blocks-04', title: 'Eco-Friendly Fly Ash Masonry Blocks', alt: 'Eco-friendly sustainable fly ash masonry blocks manufactured by ACME Bricks' },
    { raw: 'PON08778.jpg', name: 'heavy-duty-flyash-blocks-stockyard-05', title: 'Heavy-Duty Fly Ash Blocks Stockyard', alt: 'Heavy-duty industrial fly ash blocks lined up in ACME Bricks stockyard Coimbatore' },
    { raw: 'PON08779.jpg', name: 'load-bearing-flyash-blocks-coimbatore-06', title: 'Load-Bearing Fly Ash Wall Blocks', alt: 'Certified load-bearing fly ash blocks for commercial and residential buildings' },
    { raw: 'PON08781.jpg', name: 'water-cured-flyash-blocks-factory-07', title: 'Water-Cured Fly Ash Blocks Factory', alt: 'Fully water-cured fly ash blocks undergoing quality inspection in Coimbatore factory' },
    { raw: 'PON08799.jpg', name: 'commercial-grade-flyash-blocks-08', title: 'Commercial-Grade Fly Ash Blocks', alt: 'Commercial grade fly ash blocks for multi-storey building construction in Tamil Nadu' },
    { raw: 'PON08800.jpg', name: 'quality-tested-flyash-blocks-coimbatore-09', title: 'Quality-Tested Fly Ash Blocks', alt: 'Lab quality tested high compressive strength fly ash blocks in Coimbatore' },
    { raw: 'PON08801.jpg', name: 'best-flyash-blocks-supplier-coimbatore-10', title: 'Fly Ash Blocks Ready for Dispatch', alt: 'ACME Bricks fly ash blocks palletized ready for wholesale site delivery in Coimbatore' }
  ],
  flyash_bricks: [
    { raw: 'PON08752.jpg', name: 'acme-flyash-bricks-manufacturer-coimbatore-01', title: 'ACME Class 1 Fly Ash Bricks', alt: 'ACME Class 1 machine-made fly ash bricks manufacturer in Coimbatore' },
    { raw: 'PON08754.jpg', name: 'flyash-bricks-manufacturing-in-coimbatore-02', title: 'Fly Ash Bricks Production Line', alt: 'Automated hydraulic fly ash bricks manufacturing in Coimbatore factory' },
    { raw: 'PON08755.jpg', name: 'acme-bricks-high-strength-flyash-bricks-03', title: 'High-Strength Fly Ash Bricks', alt: 'High-strength smooth finished fly ash bricks for residential construction' },
    { raw: 'PON08756.jpg', name: 'premium-flyash-bricks-coimbatore-04', title: 'Premium Quality Fly Ash Bricks', alt: 'Premium sharp-edged grey fly ash bricks ready for masonry work in Coimbatore' },
    { raw: 'PON08762.jpg', name: 'eco-friendly-flyash-bricks-manufacturing-05', title: 'Eco-Friendly Green Fly Ash Bricks', alt: 'Eco-friendly sustainable fly ash bricks produced with zero greenhouse emission' },
    { raw: 'PON08766.jpg', name: 'construction-grade-flyash-bricks-coimbatore-06', title: 'Construction-Grade Fly Ash Bricks', alt: 'Heavy-duty construction grade fly ash bricks stacked at ACME Bricks facility' },
    { raw: 'PON08768.jpg', name: 'quality-tested-flyash-bricks-stockyard-07', title: 'Fly Ash Bricks Stockyard Inventory', alt: 'Massive stockyard of cured fly ash bricks ready for prompt dispatch in Coimbatore' },
    { raw: 'PON08769.jpg', name: 'heavy-duty-flyash-bricks-coimbatore-08', title: 'Heavy-Duty Fly Ash Bricks', alt: 'Heavy-duty compressive strength fly ash bricks for boundary and load walls' },
    { raw: 'PON08770.jpg', name: 'smooth-finish-flyash-bricks-coimbatore-09', title: 'Smooth-Finish Fly Ash Bricks', alt: 'Uniform dimensions smooth finish fly ash bricks saving plastering mortar costs' },
    { raw: 'PON08771.jpg', name: 'thermal-resistant-flyash-bricks-10', title: 'Thermal-Resistant Fly Ash Bricks', alt: 'High thermal insulation fly ash bricks for cooler interior home temperatures' },
    { raw: 'PON08772.jpg', name: 'high-compressive-strength-flyash-bricks-11', title: 'Tested Compressive Strength Bricks', alt: 'IS code compliant high compressive strength fly ash bricks in Coimbatore' },
    { raw: 'PON08773.jpg', name: 'flyash-bricks-pallet-stacking-factory-12', title: 'Factory Pallet Stacking', alt: 'Wooden pallet stacked fly ash bricks awaiting warehouse forklift dispatch' },
    { raw: 'PON08786.jpg', name: 'certified-flyash-bricks-supplier-coimbatore-13', title: 'Certified Fly Ash Bricks Supplier', alt: 'ACME Bricks certified fly ash bricks wholesale supplier in Coimbatore' },
    { raw: 'PON08791.jpg', name: 'residential-construction-flyash-bricks-14', title: 'Residential Villa Fly Ash Bricks', alt: 'Fly ash bricks ideal for individual house, villa, and apartment construction' },
    { raw: 'PON08793.jpg', name: 'commercial-project-flyash-bricks-coimbatore-15', title: 'Commercial Project Bricks', alt: 'Bulk supply fly ash bricks for commercial complexes and factories in Coimbatore' },
    { raw: 'PON08794.jpg', name: 'acme-bricks-flyash-bricks-production-line-16', title: 'Advanced Machine Compaction', alt: 'High-tonnage hydraulic pressed fly ash bricks production in Coimbatore plant' },
    { raw: 'PON08795.jpg', name: 'bulk-supply-flyash-bricks-coimbatore-17', title: 'Bulk Wholesale Fly Ash Bricks', alt: 'Bulk order fly ash bricks storage and logistics at ACME Bricks Coimbatore' },
    { raw: 'PON08796.jpg', name: 'water-cured-flyash-bricks-stockyard-18', title: 'Sprinkler Cured Fly Ash Bricks', alt: 'Systematically water-sprinkled cured fly ash bricks ensuring optimal strength' },
    { raw: 'PON08797.jpg', name: 'mortar-saving-uniform-flyash-bricks-19', title: 'Uniform Mortar-Saving Bricks', alt: 'Exact dimensional tolerance fly ash bricks minimizing joint cement mortar' },
    { raw: 'PON08798.jpg', name: 'best-price-flyash-bricks-coimbatore-20', title: 'Direct Factory Price Fly Ash Bricks', alt: 'Best wholesale price fly ash bricks direct from Coimbatore manufacturer' },
    { raw: 'PON08802.jpg', name: 'cost-effective-flyash-bricks-masonry-21', title: 'Cost-Effective Masonry Bricks', alt: 'Cost-effective durable fly ash bricks for structural wall construction' },
    { raw: 'PON08803.jpg', name: 'standard-dimension-flyash-bricks-22', title: 'Standard Modular Fly Ash Bricks', alt: 'Standard modular dimensions fly ash bricks stacked in neat layers' },
    { raw: 'PON08804.jpg', name: 'acme-flyash-bricks-truck-loading-dispatch-23', title: 'Site Delivery Logistics', alt: 'ACME Bricks truck loading and safe transport dispatch across Tamil Nadu' },
    { raw: 'PON08805.jpg', name: 'top-rated-flyash-bricks-manufacturer-tamilnadu-24', title: 'Top-Rated Brick Manufacturer', alt: 'Top-rated fly ash brick manufacturer in Coimbatore serving Tamil Nadu' }
  ],
  interlock: [
    { raw: 'PON08830.jpg', name: 'acme-interlock-bricks-manufacturer-coimbatore-01', title: 'ACME Interlock Bricks Manufacturer', alt: 'ACME Interlock bricks manufacturer in Coimbatore factory' },
    { raw: 'PON08831.jpg', name: 'interlock-bricks-manufacturing-in-coimbatore-02', title: 'Interlock Bricks Production Line', alt: 'Automated soil-cement interlocking bricks manufacturing in Coimbatore' },
    { raw: 'PON08832.jpg', name: 'acme-bricks-interlocking-blocks-coimbatore-03', title: 'Precision Interlocking Blocks', alt: 'ACME Bricks precision molded interlocking blocks in Coimbatore' },
    { raw: 'PON08833.jpg', name: 'high-strength-interlocking-bricks-coimbatore-05', title: 'High-Strength Interlocking Bricks', alt: 'High compressive strength interlocking bricks for durable wall construction' },
    { raw: 'PON08834.jpg', name: 'eco-friendly-interlock-bricks-manufacturing-06', title: 'Eco-Friendly Interlock Bricks', alt: 'Eco-friendly sustainable interlock bricks manufacturing in Coimbatore' },
    { raw: 'PON08835.jpg', name: 'dry-stack-interlock-bricks-coimbatore-07', title: 'Dry-Stack Interlock Bricks', alt: 'Self-aligning dry stack interlock bricks for rapid mortarless masonry' },
    { raw: 'PON08836.jpg', name: 'acme-interlocking-wall-bricks-coimbatore-08', title: 'Interlocking Wall Bricks', alt: 'High-density interlocking wall bricks stacked at ACME Bricks facility' },
    { raw: 'PON08837.jpg', name: 'cost-effective-interlock-bricks-manufacturing-09', title: 'Cost-Effective Interlock Masonry', alt: 'Cost-effective interlock bricks eliminating wall plastering expenses' },
    { raw: 'PON08838.jpg', name: 'heavy-duty-interlocking-bricks-coimbatore-10', title: 'Heavy-Duty Interlocking Blocks', alt: 'Heavy-duty load-bearing interlocking cement blocks in Coimbatore' },
    { raw: 'PON08839.jpg', name: 'commercial-construction-interlock-bricks-coimbatore-14', title: 'Commercial Construction Interlock', alt: 'Commercial construction grade interlocking blocks for multi-storey buildings' },
    { raw: 'PON08840.jpg', name: 'acme-bricks-interlock-stockyard-coimbatore-15', title: 'Interlock Stockyard Storage', alt: 'Large inventory of cured interlock bricks in ACME Bricks Coimbatore stockyard' },
    { raw: 'PON08841.jpg', name: 'best-interlock-bricks-manufacturer-coimbatore-17', title: 'Best Interlock Manufacturer', alt: 'Best quality interlock bricks manufacturer in Coimbatore Tamil Nadu' },
    { raw: 'PON08842.jpg', name: 'soil-cement-interlocking-bricks-coimbatore-18', title: 'Soil-Cement Interlocking Bricks', alt: 'Stabilized soil-cement interlocking bricks cured under controlled moisture' },
    { raw: 'PON08843.jpg', name: 'mortarless-interlock-wall-construction-19', title: 'Mortarless Interlock Wall System', alt: 'Mortarless interlocking wall system enabling 3x faster construction' },
    { raw: 'PON08844.jpg', name: 'precision-locking-groove-interlock-bricks-20', title: 'Precision Locking Groove', alt: 'Precision tongue and groove interlock bricks ensuring seamless joint fit' },
    { raw: 'PON08845.jpg', name: 'aesthetic-elevation-interlock-bricks-coimbatore-21', title: 'Aesthetic Elevation Interlock', alt: 'Exposed modern aesthetic finish interlock bricks for front elevation' },
    { raw: 'PON08846.jpg', name: 'earthquake-resistant-interlocking-masonry-22', title: 'Earthquake-Resistant Masonry', alt: 'Earthquake resilient interlock brick masonry with vertical reinforcement channels' },
    { raw: 'PON08847.jpg', name: 'eco-smart-interlock-blocks-coimbatore-23', title: 'Eco-Smart Interlocking Blocks', alt: 'Energy-efficient eco-smart interlock blocks keeping rooms naturally insulated' },
    { raw: 'PON08848.jpg', name: 'interlock-bricks-water-curing-process-24', title: 'Hydraulic Water Curing Process', alt: 'Full cycle water curing process for maximum interlock block toughness' },
    { raw: 'PON08849.jpg', name: 'speedy-wall-construction-interlock-bricks-25', title: 'Rapid Wall Construction Bricks', alt: 'Interlock bricks designed for fast-track residential house projects' },
    { raw: 'PON08850.jpg', name: 'exposed-brickwork-interlock-finish-coimbatore-26', title: 'Exposed Brickwork Finish', alt: 'Architectural exposed brick finish interlocking blocks in Coimbatore' },
    { raw: 'PON08851.jpg', name: 'structural-tested-interlock-bricks-factory-27', title: 'Factory Quality Testing', alt: 'Rigorous compression load testing of interlock bricks at ACME plant' },
    { raw: 'PON08852.jpg', name: 'interlocking-bricks-wholesale-price-coimbatore-28', title: 'Wholesale Interlock Bricks Price', alt: 'Affordable wholesale price interlocking bricks direct from manufacturer' },
    { raw: 'PON08853.jpg', name: 'corner-interlock-bricks-alignment-29', title: 'Corner Interlock Block Alignment', alt: 'Special corner interlocking blocks for crisp 90-degree wall junctions' },
    { raw: 'PON08854.jpg', name: 'u-shaped-conduit-interlocking-blocks-30', title: 'U-Block Conduit Interlocking Blocks', alt: 'U-shaped lintel conduit interlocking blocks for wiring and beam casting' },
    { raw: 'PON08855.jpg', name: 'compound-wall-interlock-bricks-coimbatore-31', title: 'Compound Wall Interlock Bricks', alt: 'Durable boundary compound wall constructed using ACME interlock bricks' },
    { raw: 'PON08856.jpg', name: 'modern-villa-interlock-masonry-design-32', title: 'Modern Villa Interlock Design', alt: 'Contemporary villa architecture built with premium interlocking blocks' },
    { raw: 'PON08857.jpg', name: 'weather-resistant-interlock-building-bricks-33', title: 'Weather-Resistant Building Bricks', alt: 'Monsoon and heat resistant dense interlocking building blocks' },
    { raw: 'PON08858.jpg', name: 'durable-interlocking-blocks-curing-yard-34', title: 'Cured Blocks Ready for Delivery', alt: 'High density interlocking blocks neatly stacked in curing yard' },
    { raw: 'PON08859.jpg', name: 'acme-bricks-interlock-brick-pallet-stack-35', title: 'Palletized Interlock Bricks', alt: 'Secure palletized packaging of interlocking bricks for damage-free transit' },
    { raw: 'PON08860.jpg', name: 'high-density-interlock-blocks-coimbatore-36', title: 'High-Density Interlock Blocks', alt: 'Superior compaction high-density interlock blocks manufactured in Coimbatore' },
    { raw: 'PON08861.jpg', name: 'interlock-bricks-direct-factory-supply-37', title: 'Direct Factory Supply', alt: 'Direct from factory interlock bricks supply without middlemen commissions' },
    { raw: 'PON08862.jpg', name: 'thermal-efficient-interlock-bricks-wall-38', title: 'Thermal-Efficient Wall Masonry', alt: 'Natural temperature moderating interlocking brick masonry walls' },
    { raw: 'PON08863.jpg', name: 'zero-plastering-interlock-bricks-finish-39', title: 'Zero Plastering Wall Finish', alt: 'Zero plastering needed smooth face interlock blocks saving construction costs' },
    { raw: 'PON08864.jpg', name: 'farmhouse-interlock-bricks-construction-40', title: 'Farmhouse Interlock Construction', alt: 'Rustic and elegant farmhouse walls built with ACME interlock bricks' },
    { raw: 'PON08865.jpg', name: 'industrial-shed-interlock-wall-blocks-41', title: 'Industrial Shed Wall Blocks', alt: 'Fast erection industrial shed walling with heavy-duty interlock bricks' },
    { raw: 'PON08866.jpg', name: 'acme-interlock-bricks-ready-stock-coimbatore-42', title: 'Ready Stock Interlock Bricks', alt: 'Ready stock interlock blocks available for immediate loading in Coimbatore' },
    { raw: 'PON08867.jpg', name: 'smooth-surface-interlock-blocks-masonry-43', title: 'Smooth Surface Interlock Blocks', alt: 'Even surface finish interlock blocks for clean indoor partition walls' },
    { raw: 'PON08868.jpg', name: 'heavy-compression-interlocking-bricks-44', title: 'Heavy Compression Interlock Blocks', alt: 'Hydraulic compressed interlock blocks delivering high load endurance' },
    { raw: 'PON08869.jpg', name: 'interlocking-bricks-truck-dispatch-coimbatore-45', title: 'Truck Dispatch Logistics', alt: 'Reliable truck delivery of interlock bricks across Coimbatore and Pollachi' },
    { raw: 'PON08870.jpg', name: 'top-interlock-bricks-brand-coimbatore-46', title: 'Top Interlock Bricks Brand', alt: 'ACME Bricks - trusted brand for interlocking building blocks in Coimbatore' }
  ],
  pavers: [
    ...[
      'PON08706.jpg', 'PON08707.jpg', 'PON08708.jpg', 'PON08709.jpg', 'PON08710.jpg',
      'PON08711.jpg', 'PON08712.jpg', 'PON08713.jpg', 'PON08714.jpg', 'PON08715.jpg',
      'PON08716.jpg', 'PON08717.jpg', 'PON08718.jpg', 'PON08719.jpg', 'PON08720.jpg',
      'PON08721.jpg', 'PON08722.jpg', 'PON08723.jpg', 'PON08724.jpg', 'PON08725.jpg',
      'PON08726.jpg', 'PON08727.jpg', 'PON08728.jpg', 'PON08729.jpg', 'PON08730.jpg',
      'PON08731.jpg', 'PON08732.jpg', 'PON08733.jpg', 'PON08734.jpg', 'PON08735.jpg',
      'PON08736.jpg', 'PON08737.jpg', 'PON08738.jpg', 'PON08739.jpg', 'PON08740.jpg',
      'PON08741.jpg', 'PON08742.jpg', 'PON08743.jpg', 'PON08744.jpg', 'PON08745.jpg',
      'PON08746.jpg', 'PON08747.jpg', 'PON08748.jpg', 'PON08749.jpg', 'PON08750.jpg',
      'PON08751.jpg', 'PON08806.jpg', 'PON08807.jpg', 'PON08808.jpg', 'PON08809.jpg',
      'PON08810.jpg', 'PON08811.jpg', 'PON08812.jpg', 'PON08813.jpg', 'PON08814.jpg'
    ].map((file, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      const keywords = [
        'acme-paver-blocks-manufacturer-coimbatore',
        'heavy-duty-zigzag-paver-blocks-coimbatore',
        'i-shape-concrete-paver-blocks-coimbatore',
        '60mm-driveway-paver-blocks-coimbatore',
        '80mm-heavy-traffic-paver-blocks-coimbatore',
        'designer-interlocking-paver-blocks-coimbatore',
        'anti-skid-exterior-paver-blocks-coimbatore',
        'colored-red-yellow-grey-paver-blocks',
        'pathway-garden-paver-blocks-coimbatore',
        'commercial-parking-lot-paver-blocks',
        'petrol-bunk-heavy-duty-pavers-coimbatore',
        'industrial-stockyard-paver-blocks',
        'unipaver-interlocking-blocks-coimbatore',
        'cosmic-pattern-paver-blocks-coimbatore',
        'dumble-shape-paver-blocks-coimbatore',
        'hexagonal-paver-blocks-manufacturing',
        'high-abrasion-resistant-paver-blocks',
        'cured-paver-blocks-stockyard-coimbatore',
        'vibration-pressed-concrete-pavers',
        'residential-courtyard-paver-blocks'
      ];
      const baseKey = keywords[idx % keywords.length];
      const name = `${baseKey}-${num}`;
      return {
        raw: file,
        name,
        title: `ACME Paver Block Design ${idx + 1}`,
        alt: `ACME heavy-duty paver block ${idx + 1} for driveways and landscaping in Coimbatore`
      };
    })
  ],
  solid_blocks: [
    { raw: 'PON08815.jpg', name: 'acme-solid-blocks-manufacturer-coimbatore-01', title: 'ACME Solid Concrete Blocks', alt: 'ACME solid concrete blocks manufacturer in Coimbatore' },
    { raw: 'PON08816.jpg', name: 'heavy-duty-solid-concrete-blocks-coimbatore-02', title: 'Heavy-Duty Solid Concrete Blocks', alt: 'Heavy-duty solid concrete blocks for industrial foundations in Coimbatore' },
    { raw: 'PON08817.jpg', name: 'load-bearing-solid-blocks-construction-03', title: 'Load-Bearing Solid Blocks', alt: 'High load-bearing solid blocks for multi-storey masonry construction' },
    { raw: 'PON08818.jpg', name: '4-inch-solid-concrete-blocks-coimbatore-04', title: '4-Inch Solid Concrete Blocks', alt: '4-inch partition solid concrete blocks manufactured by ACME Bricks' },
    { raw: 'PON08819.jpg', name: '6-inch-solid-masonry-blocks-coimbatore-05', title: '6-Inch Solid Masonry Blocks', alt: '6-inch solid cement blocks for exterior structural boundary walls' },
    { raw: 'PON08820.jpg', name: '8-inch-heavy-duty-solid-blocks-06', title: '8-Inch Heavy-Duty Solid Blocks', alt: '8-inch heavy duty solid blocks for basement and retaining walls' },
    { raw: 'PON08821.jpg', name: 'industrial-foundation-solid-concrete-blocks-07', title: 'Foundation Solid Concrete Blocks', alt: 'Industrial foundation solid concrete blocks cured to perfection' },
    { raw: 'PON08822.jpg', name: 'acme-solid-blocks-curing-yard-coimbatore-08', title: 'Solid Blocks Curing Yard', alt: 'Extensive solid concrete blocks stockyard at ACME Bricks Coimbatore' },
    { raw: 'PON08823.jpg', name: 'high-compressive-strength-solid-blocks-09', title: 'High Compressive Strength Blocks', alt: 'Lab-tested high compressive strength solid blocks in Coimbatore' },
    { raw: 'PON08824.jpg', name: 'soundproof-solid-blocks-masonry-10', title: 'Soundproof Solid Blocks Masonry', alt: 'Dense acoustic soundproofing solid blocks for commercial buildings' },
    { raw: 'PON08825.jpg', name: 'vibration-compacted-solid-blocks-coimbatore-11', title: 'Vibration-Compacted Solid Blocks', alt: 'High frequency vibration compacted solid blocks with zero internal voids' },
    { raw: 'PON08826.jpg', name: 'quality-tested-solid-blocks-factory-12', title: 'Factory Quality Tested Blocks', alt: 'Certified solid concrete blocks batch inspection at ACME factory' },
    { raw: 'PON08827.jpg', name: 'commercial-partition-wall-solid-blocks-13', title: 'Commercial Partition Wall Blocks', alt: 'Fire-resistant solid blocks for commercial complexes and warehouses' },
    { raw: 'PON08828.jpg', name: 'acme-solid-blocks-wholesale-supplier-14', title: 'Wholesale Solid Blocks Supplier', alt: 'Wholesale solid blocks supplier offering direct factory delivery in Coimbatore' },
    { raw: 'PON08829.jpg', name: 'best-solid-blocks-manufacturer-tamilnadu-15', title: 'Top Solid Blocks Brand Tamil Nadu', alt: 'Top rated solid concrete blocks manufacturer in Coimbatore Tamil Nadu' }
  ]
};

console.log('Mapping summary:');
for (const k in gallerySeoData) {
  console.log(`${k}: ${gallerySeoData[k].length} items`);
}
