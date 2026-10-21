import fs from 'fs';
import path from 'path';

const baseline = JSON.parse(fs.readFileSync(path.resolve('content-baseline.json'), 'utf8'));

// Check 1: Products in App.jsx
const appFile = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');
const catalogMatch = appFile.match(/const MOCK_CATALOG = (\[[\s\S]*?\]);\s*\n\s*\/\/ SEO/);
if (!catalogMatch) {
  console.error('FAIL: Could not find MOCK_CATALOG in src/App.jsx');
  process.exit(1);
}

const currentProducts = JSON.parse(catalogMatch[1]);
if (JSON.stringify(currentProducts) !== JSON.stringify(baseline.products)) {
  console.error('FAIL: MOCK_CATALOG content differs from baseline!');
  process.exit(1);
}
console.log('PASS: All product names, descriptions, characteristics and prices preserved.');

// Check 2: SEO Meta Titles and Descriptions
const seoRegex = /seoTitle\s*=\s*['"]([^'"]+)['"];\s*\n\s*seoDescription\s*=\s*['"]([^'"]+)['"]/g;
let m;
let count = 0;
const currentMeta = {};
while ((m = seoRegex.exec(appFile)) !== null) {
  currentMeta[`entry_${++count}`] = {
    title: m[1],
    description: m[2]
  };
}

if (JSON.stringify(currentMeta) !== JSON.stringify(baseline.metaData)) {
  console.error('FAIL: SEO meta titles or descriptions differ from baseline!');
  console.error('Current:', currentMeta);
  console.error('Baseline:', baseline.metaData);
  process.exit(1);
}
console.log('PASS: All SEO meta titles and descriptions preserved.');

// Check 3: Testimonials
const testFile = fs.readFileSync(path.resolve('src/components/home/ProjectsTestimonials.jsx'), 'utf8');
const testMatch = testFile.match(/const DEFAULT_TESTIMONIALS = (\[[\s\S]*?\]);\s*\n\s*const \[testimonials/);
const currentTestimonials = new Function(`return ${testMatch[1]}`)();
if (JSON.stringify(currentTestimonials) !== JSON.stringify(baseline.testimonials)) {
  console.error('FAIL: Testimonials content differs from baseline!');
  process.exit(1);
}
console.log('PASS: All customer testimonials and reviews preserved.');

// Check 4: Product Categories in ProductCategories.jsx
const catFile = fs.readFileSync(path.resolve('src/components/home/ProductCategories.jsx'), 'utf8');
const catMatch = catFile.match(/const categories = (\[[\s\S]*?\]);\s*\n\s*return/);
const currentCategories = new Function(`return ${catMatch[1]}`)();
if (JSON.stringify(currentCategories) !== JSON.stringify(baseline.productCategories)) {
  console.error('FAIL: Product categories text differs from baseline!');
  process.exit(1);
}
console.log('PASS: All product categories text, taglines, descriptions and CTA labels preserved.');

console.log('\n========================================');
console.log('CONTENT PRESERVATION VERIFICATION: 100% PASS');
console.log('========================================');
