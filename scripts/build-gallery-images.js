import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { gallerySeoData } from './gallery-seo-data.js';

async function processGallery() {
  const baseDir = path.resolve('public/images/gallery');
  console.log('Processing gallery images with Sharp into SEO WebP, Thumbnails, and JPG fallbacks...');

  let processedCount = 0;
  let totalCount = 0;

  for (const cat in gallerySeoData) {
    totalCount += gallerySeoData[cat].length;
  }

  for (const cat in gallerySeoData) {
    const dir = path.join(baseDir, cat);
    const items = gallerySeoData[cat];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const srcPath = path.join(dir, item.raw);

      if (!fs.existsSync(srcPath)) {
        console.warn(`[WARN] Source file not found: ${srcPath}`);
        continue;
      }

      const outJpg = path.join(dir, `${item.name}.jpg`);
      const outWebp = path.join(dir, `${item.name}.webp`);
      const outThumb = path.join(dir, `${item.name}-thumb.webp`);

      try {
        const pipeline = sharp(srcPath);

        // 1. Generate full-display WebP (max 1400px width, crisp quality)
        if (!fs.existsSync(outWebp)) {
          await pipeline
            .clone()
            .resize(1400, null, { withoutEnlargement: true })
            .webp({ quality: 82, effort: 4 })
            .toFile(outWebp);
        }

        // 2. Generate fast thumbnail WebP (max 500px width)
        if (!fs.existsSync(outThumb)) {
          await pipeline
            .clone()
            .resize(500, null, { withoutEnlargement: true })
            .webp({ quality: 78, effort: 4 })
            .toFile(outThumb);
        }

        // 3. Generate SEO JPG fallback (max 1400px width)
        if (!fs.existsSync(outJpg)) {
          await pipeline
            .clone()
            .resize(1400, null, { withoutEnlargement: true })
            .jpeg({ quality: 84, mozjpeg: true })
            .toFile(outJpg);
        }

        processedCount++;
        if (processedCount % 10 === 0 || processedCount === totalCount) {
          console.log(`[Progress] ${processedCount}/${totalCount} images processed...`);
        }
      } catch (err) {
        console.error(`Error processing ${srcPath}:`, err.message);
      }
    }
  }

  console.log(`Successfully completed! Processed: ${processedCount}/${totalCount} gallery images.`);
}

processGallery().catch(console.error);
