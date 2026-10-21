import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const routes = [
  { name: 'homepage', url: 'http://127.0.0.1:4180/' },
  { name: 'about', url: 'http://127.0.0.1:4180/about/' },
  { name: 'products', url: 'http://127.0.0.1:4180/products/' },
  { name: 'product-details', url: 'http://127.0.0.1:4180/fly-ash-bricks-manufacturer-coimbatore' },
  { name: 'gallery', url: 'http://127.0.0.1:4180/gallery/' },
  { name: 'contact', url: 'http://127.0.0.1:4180/contact/' }
];

const resultsDir = path.resolve('audit-results/full-audits');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

process.env.CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const targetRoute = process.argv[2]; // optional filter, e.g. 'homepage'
const targetPreset = process.argv[3]; // optional filter, e.g. 'mobile' or 'desktop'

const filteredRoutes = targetRoute 
  ? routes.filter(r => r.name.toLowerCase() === targetRoute.toLowerCase())
  : routes;

const presets = targetPreset ? [targetPreset] : ['mobile', 'desktop'];

const summary = [];

for (const route of filteredRoutes) {
  for (const preset of presets) {
    const jsonFile = path.join(resultsDir, `${route.name}-${preset}.json`);
    const presetFlag = preset === 'desktop' ? '--preset=desktop' : '';
    console.log(`\n========================================`);
    console.log(`Auditing ${route.name} (${preset})...`);
    console.log(`URL: ${route.url}`);
    
    const cmd = `npx lighthouse "${route.url}" ${presetFlag} --output=json --output-path="${jsonFile}" --chrome-flags="--headless=new --no-sandbox --disable-gpu" --quiet`;
    
    try {
      execSync(cmd, { stdio: 'inherit' });
      const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
      const cats = raw.categories;
      const perf = Math.round((cats.performance?.score || 0) * 100);
      const a11y = Math.round((cats.accessibility?.score || 0) * 100);
      const bp = Math.round((cats['best-practices']?.score || 0) * 100);
      const seo = Math.round((cats.seo?.score || 0) * 100);

      const fcp = raw.audits['first-contentful-paint']?.displayValue || 'N/A';
      const lcp = raw.audits['largest-contentful-paint']?.displayValue || 'N/A';
      const tbt = raw.audits['total-blocking-time']?.displayValue || 'N/A';
      const cls = raw.audits['cumulative-layout-shift']?.displayValue || 'N/A';

      const entry = {
        route: route.name,
        preset,
        Performance: perf,
        Accessibility: a11y,
        BestPractices: bp,
        SEO: seo,
        FCP: fcp,
        LCP: lcp,
        TBT: tbt,
        CLS: cls
      };
      summary.push(entry);
      console.log(`RESULTS: Perf=${perf} | A11y=${a11y} | BestPractices=${bp} | SEO=${seo} | LCP=${lcp} | TBT=${tbt} | CLS=${cls}`);
    } catch (err) {
      console.error(`Failed to audit ${route.name} (${preset}):`, err.message);
    }
  }
}

const summaryFile = path.join(resultsDir, `summary-${Date.now()}.json`);
fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
console.log('\n=== FINAL FULL AUDIT SUMMARY ===');
console.table(summary);
