/**
 * Lightweight product specifications utility
 * Decoupled from ProductsGrid to eliminate bundle bloat in the homepage entry point
 */

export const formatStrength = (strength) => {
  if (!strength) return '7.5 N/mm²';
  const str = String(strength).trim();
  if (str.includes('N/mm²') || str.includes('MPa') || str.includes('kg') || str.includes('thickness')) {
    return str;
  }
  return `${str} N/mm²`;
};

export const getProductCardSpecs = (prod) => {
  if (!prod) return [];
  const idStr = String(prod.id || '');
  const name = (prod.name || '').toLowerCase();
  const type = (prod.type || '').toLowerCase();

  // 1. Fly Ash Bricks (Matches details page specs)
  if (idStr === '1' || name.includes('fly ash brick') || type.includes('fly ash brick')) {
    return [
      { label: 'Size (L × B × H)', val: '9 × 3 × 4 inches' },
      { label: 'Compressive Strength', val: '9.15–10.15 N/mm²' }
    ];
  }

  // 2. Fly Ash Blocks
  if (idStr === '2' || name.includes('fly ash block') || type.includes('fly ash block')) {
    return [
      { label: 'Size (L × B × H)', val: '9 × 9 × 4 inches' },
      { label: 'Weight', val: '9.5–10 kg' }
    ];
  }

  // 3. Paver Blocks
  if (idStr === '3' || name.includes('paver') || type.includes('paver')) {
    return [
      { label: 'Thickness Options', val: '2.36 inches & 3.15 inches' },
      { label: 'Material', val: 'Cement & Colour Pigments' }
    ];
  }

  // 4. Interlock Bricks
  if (idStr === '4' || name.includes('interlock') || type.includes('interlock')) {
    return [
      { label: 'Available Sizes', val: '6-Inch & 8-Inch Blocks' },
      { label: 'Compressive Strength', val: '5.5–11.77 N/mm²' }
    ];
  }

  // 5. Solid Blocks
  if (idStr === '5' || name.includes('solid') || type.includes('solid')) {
    return [
      { label: 'Available Sizes', val: '4-Inch, 6-Inch & 8-Inch Blocks' },
      { label: 'Compressive Strength', val: '4.0–5.0 N/mm²' }
    ];
  }

  // 6. AAC Blocks
  if (idStr === '6' || name.includes('aac') || type.includes('aac')) {
    return [
      { label: 'Size Options', val: '600 × 200 × 100/150/200/230 mm' },
      { label: 'Compressive Strength', val: '3.0–4.5 N/mm²' }
    ];
  }

  // Default fallback
  return [
    { label: 'Size (L × B × H)', val: prod.dimensions ? `${prod.dimensions.length} × ${prod.dimensions.width} × ${prod.dimensions.height} mm` : '9 × 3 × 4 inches' },
    { label: 'Compressive Strength', val: formatStrength(prod.strength) }
  ];
};
