import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const routes = [
  { name: 'homepage', url: 'http://127.0.0.1:4180/' },
  { name: 'products', url: 'http://127.0.0.1:4180/products/' },
  { name: 'product-details', url: 'http://127.0.0.1:4180/fly-ash-bricks-manufacturer-coimbatore' },
  { name: 'gallery', url: 'http://127.0.0.1:4180/gallery/' },
  { name: 'contact', url: 'http://127.0.0.1:4180/contact/' }
];

const resultsDir = path.resolve('audit-results');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

process.env.CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const mode = process.argv[2] || 'baseline'; // 'baseline' or 'optimized'

const summary = [];

for (const route of routes) {
  for (const preset of ['mobile', 'desktop']) {
    const jsonFile = path.join(resultsDir, `${mode}-${route.name}-${preset}.json`);
    
    // If file already exists for baseline homepage, reuse it if valid
    if (fs.existsSync(jsonFile)) {
      try {
        const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
        if (raw.categories?.performance) {
          console.log(`Reusing existing audit: ${jsonFile}`);
          const p = raw.categories.performance;
          summary.push({
            mode,
            route: route.name,
            preset,
            score: Math.round(p.score * 100),
            fcp: raw.audits['first-contentful-paint']?.displayValue,
            lcp: raw.audits['largest-contentful-paint']?.displayValue,
            tbt: raw.audits['total-blocking-time']?.displayValue,
            cls: raw.audits['cumulative-layout-shift']?.displayValue
          });
          continue;
        }
      } catch (e) {}
    }

    console.log(`Auditing [${mode}] ${route.name} (${preset})...`);
    const presetFlag = preset === 'desktop' ? '--preset=desktop' : '';
    const cmd = `npx lighthouse "${route.url}" ${presetFlag} --output=json --output-path="${jsonFile}" --chrome-flags="--headless=new --no-sandbox --disable-gpu" --only-categories=performance --quiet`;
    
    try {
      execSync(cmd, { stdio: 'inherit' });
      const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
      const p = raw.categories.performance;
      summary.push({
        mode,
        route: route.name,
        preset,
        score: Math.round(p.score * 100),
        fcp: raw.audits['first-contentful-paint']?.displayValue,
        lcp: raw.audits['largest-contentful-paint']?.displayValue,
        tbt: raw.audits['total-blocking-time']?.displayValue,
        cls: raw.audits['cumulative-layout-shift']?.displayValue
      });
      console.log(`-> Score: ${Math.round(p.score * 100)}, LCP: ${raw.audits['largest-contentful-paint']?.displayValue}`);
    } catch (err) {
      console.error(`Failed to audit ${route.name} (${preset}):`, err.message);
    }
  }
}

const summaryFile = path.join(resultsDir, `${mode}-summary.json`);
fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
console.table(summary);
