import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeFavicon() {
  const favPath = path.resolve('public/images/favicon.png');
  const backupPath = path.resolve('public/images/favicon-original.png');
  if (fs.existsSync(favPath)) {
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(favPath, backupPath);
      console.log('Backed up original favicon to favicon-original.png');
    }
    // Create 128x128 crisp favicon.png (less than 15 KB)
    await sharp(backupPath)
      .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, quality: 90 })
      .toFile(favPath);
    console.log('Optimized public/images/favicon.png to 128x128');

    // Create 32x32 favicon-32.png
    await sharp(backupPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(path.resolve('public/images/favicon-32x32.png'));

    // Create 180x180 apple-touch-icon.png
    await sharp(backupPath)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(path.resolve('public/images/apple-touch-icon.png'));
  }
}

async function optimizeBanners() {
  const bannerPng = path.resolve('public/images/banner1.png');
  if (fs.existsSync(bannerPng)) {
    // Generate banner1.webp (desktop 1920w)
    await sharp(bannerPng)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.resolve('public/images/banner1.webp'));

    // Generate banner1-mobile.webp (mobile 768w)
    await sharp(bannerPng)
      .resize(768, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.resolve('public/images/banner1-mobile.webp'));

    // Generate banner1.jpg (so css url doesn't 404)
    await sharp(bannerPng)
      .resize(1920, null, { withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.resolve('public/images/banner1.jpg'));

    console.log('Generated banner1.webp, banner1-mobile.webp, and banner1.jpg');
  }
}

async function optimizeProducts() {
  const prodDir = path.resolve('public/images/products');
  if (!fs.existsSync(prodDir)) return;
  const files = fs.readdirSync(prodDir);

  for (const file of files) {
    if (file.endsWith('.png') && !file.includes('-thumb')) {
      const fullPath = path.join(prodDir, file);
      const baseName = file.replace(/\.png$/, '');
      const webpFull = path.join(prodDir, `${baseName}.webp`);
      const webpThumb = path.join(prodDir, `${baseName}-thumb.webp`);

      // Full size WebP (max width 800)
      await sharp(fullPath)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 84, effort: 6 })
        .toFile(webpFull);

      // Thumbnail WebP (max width 400)
      await sharp(fullPath)
        .resize(400, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(webpThumb);

      console.log(`Optimized product image: ${baseName} -> webp & thumb.webp`);
    }
  }
}

async function optimizeAboutImages() {
  const aboutPng = path.resolve('public/images/about.png');
  if (fs.existsSync(aboutPng)) {
    await sharp(aboutPng)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.resolve('public/images/about.webp'));
  }

  const aboutPageDir = path.resolve('public/images/about-page');
  if (fs.existsSync(aboutPageDir)) {
    const list = ['about.png', 'oru-mission.png'];
    for (const item of list) {
      const p = path.join(aboutPageDir, item);
      if (fs.existsSync(p)) {
        const outWebp = path.join(aboutPageDir, item.replace(/\.png$/, '.webp'));
        await sharp(p)
          .resize(1200, null, { withoutEnlargement: true })
          .webp({ quality: 82, effort: 6 })
          .toFile(outWebp);
        console.log(`Optimized about image: ${item} -> .webp`);
      }
    }
  }
}

async function optimizeGallery() {
  const galleryBase = path.resolve('public/images/gallery');
  if (!fs.existsSync(galleryBase)) return;

  const subdirs = ['flyash_blocks/images', 'flyash_bricks', 'interlock', 'pavers', 'solid_blocks'];

  for (const sub of subdirs) {
    const dir = path.join(galleryBase, sub);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if ((file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.png')) && !file.includes('-thumb') && !file.endsWith('.webp')) {
        const srcPath = path.join(dir, file);
        const baseName = path.parse(file).name;
        const webpThumb = path.join(dir, `${baseName}-thumb.webp`);
        const webpFull = path.join(dir, `${baseName}.webp`);

        try {
          if (!fs.existsSync(webpThumb)) {
            await sharp(srcPath)
              .resize(500, null, { withoutEnlargement: true })
              .webp({ quality: 78, effort: 5 })
              .toFile(webpThumb);
          }
          if (!fs.existsSync(webpFull)) {
            await sharp(srcPath)
              .resize(1200, null, { withoutEnlargement: true })
              .webp({ quality: 82, effort: 5 })
              .toFile(webpFull);
          }
        } catch (e) {
          console.warn(`Could not optimize gallery image ${file}:`, e.message);
        }
      }
    }
    console.log(`Processed gallery folder: ${sub}`);
  }
}

async function run() {
  console.log('Starting comprehensive image optimization...');
  await optimizeFavicon();
  await optimizeBanners();
  await optimizeProducts();
  await optimizeAboutImages();
  await optimizeGallery();
  console.log('Image optimization completed!');
}

run().catch(console.error);
