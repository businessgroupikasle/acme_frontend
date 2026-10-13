import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeFavicon() {
  const favPath = path.resolve('public/images/favicon.png');
  const backupPath = path.resolve('public/images/favicon-original.png');
  const sourcePath = fs.existsSync(backupPath) ? backupPath : favPath;

  if (fs.existsSync(sourcePath)) {
    const favTrimmed = await sharp(sourcePath).trim().toBuffer({ resolveWithObject: true });
    const favSize = Math.max(favTrimmed.info.width, favTrimmed.info.height);
    const pad = Math.round(favSize * 0.06);

    const paddedFavicon = await sharp(favTrimmed.data)
      .extend({
        top: pad,
        bottom: pad,
        left: Math.round((favSize - favTrimmed.info.width) / 2) + pad,
        right: Math.round((favSize - favTrimmed.info.width) / 2) + pad,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // 128x128 crisp favicon.png
    await sharp(paddedFavicon)
      .resize(128, 128)
      .png({ compressionLevel: 9, quality: 95 })
      .toFile(favPath);
    console.log('Optimized public/images/favicon.png to 128x128');

    // 32x32 favicon-32x32.png
    await sharp(paddedFavicon)
      .resize(32, 32)
      .png({ compressionLevel: 9 })
      .toFile(path.resolve('public/images/favicon-32x32.png'));

    // 180x180 apple-touch-icon.png
    await sharp(paddedFavicon)
      .resize(180, 180)
      .png({ compressionLevel: 9, quality: 95 })
      .toFile(path.resolve('public/images/apple-touch-icon.png'));

    // 32x32 favicon.ico
    await sharp(paddedFavicon)
      .resize(32, 32)
      .png()
      .toFile(path.resolve('public/favicon.ico'));
    console.log('Generated all favicon variants (32x32, 128x128, 180x180, ico)');
  }
}

async function optimizeLogo() {
  const acmeLogoPath = path.resolve('public/images/ACME Logo.png');
  const logoBackupPath = path.resolve('public/images/logo-original.png');
  const logoPath = path.resolve('public/images/logo.png');
  const webpPath = path.resolve('public/images/logo.webp');

  if (fs.existsSync(acmeLogoPath)) {
    // Backup ACME Logo as logo-original.png
    fs.copyFileSync(acmeLogoPath, logoBackupPath);

    const meta = await sharp(acmeLogoPath).metadata();
    // Bounding box of ACME Logo content: minX: 290, maxX: 4219, minY: 1768, maxY: 2673
    const padY = 90;
    const padX = 140;
    const left = Math.max(0, 290 - padX);
    const top = Math.max(0, 1768 - padY);
    const width = Math.min(meta.width - left, 3930 + padX * 2);
    const height = Math.min(meta.height - top, 906 + padY * 2);

    const cropped = sharp(acmeLogoPath).extract({ left, top, width, height });

    // High-res WebP (target height 240px, crisp on Retina displays)
    await cropped.clone()
      .resize({ height: 240, withoutEnlargement: true })
      .webp({ quality: 95, effort: 6 })
      .toFile(webpPath);

    // High-res PNG (target height 240px)
    await cropped.clone()
      .resize({ height: 240, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 95 })
      .toFile(logoPath);

    console.log('Optimized public/images/logo.webp and public/images/logo.png from ACME Logo.png');
  } else if (fs.existsSync(logoBackupPath)) {
    const logoTrimmed = await sharp(logoBackupPath).trim().toBuffer({ resolveWithObject: true });
    const padH = Math.round(logoTrimmed.info.height * 0.04);
    const padW = Math.round(logoTrimmed.info.width * 0.02);

    const paddedLogo = await sharp(logoTrimmed.data)
      .extend({
        top: padH,
        bottom: padH,
        left: padW,
        right: padW,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    await sharp(paddedLogo)
      .resize({ height: 240, withoutEnlargement: true })
      .webp({ quality: 95, effort: 6 })
      .toFile(webpPath);

    await sharp(paddedLogo)
      .resize({ height: 240, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 95 })
      .toFile(logoPath);

    console.log('Optimized public/images/logo.webp and public/images/logo.png from backup');
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
  await optimizeLogo();
  await optimizeBanners();
  await optimizeProducts();
  await optimizeAboutImages();
  await optimizeGallery();
  console.log('Image optimization completed!');
}

run().catch(console.error);
