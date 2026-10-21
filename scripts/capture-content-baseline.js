import fs from 'fs';
import path from 'path';

// Extract key protected texts across the codebase
const baseline = {
  products: [],
  metaData: {},
  testimonials: [],
  productCategories: [],
  contactDetails: {
    phones: ['+91 95008 51880', '+91 73059 70966'],
    email: 'info@acmebricks.in',
    addressLines: [
      'ACME Bricks,',
      'SF No. 517, Thennampalayam Road,',
      'Serayampalayam (East), Vellanaipatti,',
      'Coimbatore, Tamil Nadu – 641048'
    ]
  },
  ctas: [
    'GET A QUOTE',
    'GET QUOTE',
    'VIEW DETAILS',
    'VIEW FLY ASH BRICKS',
    'VIEW FLY ASH BLOCKS',
    'VIEW PAVER BLOCKS',
    'VIEW Interlock BRICKS',
    'VIEW SOLID BLOCKS',
    'VIEW AAC BLOCKS',
    'ENQUIRE ON WHATSAPP',
    'Explore Products',
    'Know More About Us'
  ]
};

// 1. Read App.jsx for MOCK_CATALOG and SEO titles
const appFile = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');

// Extract products
const catalogMatch = appFile.match(/const MOCK_CATALOG = (\[[\s\S]*?\]);\s*\n\s*\/\/ SEO/);
if (catalogMatch) {
  try {
    baseline.products = JSON.parse(catalogMatch[1]);
  } catch (e) {
    console.error('Failed to parse MOCK_CATALOG JSON:', e.message);
  }
}

// Extract meta titles and descriptions
const seoRegex = /seoTitle\s*=\s*['"]([^'"]+)['"];\s*\n\s*seoDescription\s*=\s*['"]([^'"]+)['"]/g;
let m;
let count = 0;
while ((m = seoRegex.exec(appFile)) !== null) {
  baseline.metaData[`entry_${++count}`] = {
    title: m[1],
    description: m[2]
  };
}

// 2. Read Testimonials
const testFile = fs.readFileSync(path.resolve('src/components/home/ProjectsTestimonials.jsx'), 'utf8');
const testMatch = testFile.match(/const DEFAULT_TESTIMONIALS = (\[[\s\S]*?\]);\s*\n\s*const \[testimonials/);
if (testMatch) {
  try {
    // evaluate safely
    const fn = new Function(`return ${testMatch[1]}`);
    baseline.testimonials = fn();
  } catch (e) {
    console.error('Failed to parse DEFAULT_TESTIMONIALS:', e.message);
  }
}

// 3. Read Product Categories
const catFile = fs.readFileSync(path.resolve('src/components/home/ProductCategories.jsx'), 'utf8');
const catMatch = catFile.match(/const categories = (\[[\s\S]*?\]);\s*\n\s*return/);
if (catMatch) {
  try {
    const fn = new Function(`return ${catMatch[1]}`);
    baseline.productCategories = fn();
  } catch (e) {
    console.error('Failed to parse ProductCategories:', e.message);
  }
}

const outPath = path.resolve('content-baseline.json');
fs.writeFileSync(outPath, JSON.stringify(baseline, null, 2), 'utf8');
console.log('Successfully captured content baseline to content-baseline.json');
console.log(`- Products: ${baseline.products.length}`);
console.log(`- Meta Entries: ${Object.keys(baseline.metaData).length}`);
console.log(`- Testimonials: ${baseline.testimonials.length}`);
console.log(`- Categories: ${baseline.productCategories.length}`);
