import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Rename flyash_bricks gallery files with SEO names
try {
  const dir = path.resolve('public/images/gallery/flyash_bricks');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).sort();
    const seoNames = [
      'acme-flyash-bricks-manufacturer-coimbatore-01.jpg',
      'flyash-bricks-manufacturing-in-coimbatore-02.jpg',
      'acme-bricks-high-strength-flyash-bricks-03.jpg',
      'premium-flyash-bricks-coimbatore-04.jpg',
      'eco-friendly-flyash-bricks-manufacturing-05.jpg',
      'construction-grade-flyash-bricks-coimbatore-06.jpg',
      'quality-tested-flyash-bricks-stockyard-07.jpg'
    ];

    const filesToRename = files.filter(f => f.startsWith('PON'));
    filesToRename.forEach((oldFile, idx) => {
      if (idx < seoNames.length) {
        const oldP = path.join(dir, oldFile);
        const newP = path.join(dir, seoNames[idx]);
        if (fs.existsSync(oldP) && !fs.existsSync(newP)) {
          fs.renameSync(oldP, newP);
        }
      }
    });
  }
} catch (e) {
  console.error('Rename error:', e);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    watch: {
      ignored: ['**/*.zip', '**/public/images/**']
    },
    proxy: {
      '/api': {
        target: 'https://acmebricks.ikasle.in',
        changeOrigin: true,
        secure: true,
        headers: {
          Host: 'acmebricks.ikasle.in',
          Origin: 'https://acmebricks.ikasle.in'
        },
        configure: (proxy, _options) => {
          proxy.on('error', (err, req, res) => {
            console.warn('[Vite Proxy Warning] Backend not reachable or SSL error:', err.message);
            if (res.writeHead && !res.headersSent) {
              res.writeHead(502, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ status: 'error', message: 'Proxy backend unavailable' }));
            }
          });
        }
      }
    }
  }
});
