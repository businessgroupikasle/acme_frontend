import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery({ onHomeClick }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Fly Ash Bricks', 'Fly Ash Blocks', 'Paver Blocks', 'Interlock Bricks', 'Solid Blocks', 'AAC Blocks'];

  const originalItems = [
    {
      id: 3,
      image: '/images/about-page/about.png',
      category: 'Solid Blocks',
      title: 'Pre-curing Stacking Yard',
      desc: 'Cured solid blocks lined up in our secondary storage yard awaiting distribution.',
      colSpan: 'span-4',
      rowSpan: 'span-2',
      height: '420px'
    },
    {
      id: 4,
      image: '/images/about-page/oru-mission.png',
      category: 'Fly Ash Blocks',
      title: 'Fly Ash Blocks Automated Production',
      desc: 'Precision computerized dosing equipment for batch fly ash block compounds.',
      colSpan: 'span-8',
      rowSpan: 'span-1',
      height: '198px'
    },
    {
      id: 6,
      image: '/images/products/flyash-bricks.png',
      category: 'Fly Ash Bricks',
      title: 'Class 1 Fly Ash Bricks',
      desc: 'Precision-molded fly ash bricks showing consistent sharp edges and light grey coloring.',
      colSpan: 'span-4',
      rowSpan: 'span-1',
      height: '198px'
    },
    {
      id: 7,
      image: '/images/products/solid-blocks.png',
      category: 'Solid Blocks',
      title: 'Solid Concrete Blocks',
      desc: 'Heavy-duty 190mm solid blocks stacked for industrial partition walls.',
      colSpan: 'span-4',
      rowSpan: 'span-1',
      height: '198px'
    },
    {
      id: 8,
      image: '/images/products/paver-block.png',
      category: 'Paver Blocks',
      title: 'Designer Zig-Zag Paver',
      desc: '60mm red and grey zig-zag pavers curing on wooden palettes.',
      colSpan: 'span-6',
      rowSpan: 'span-1',
      height: '240px'
    },
    {
      id: 9,
      image: '/images/products/interlock.png',
      category: 'Interlock Bricks',
      title: 'Interlocking Wall Bricks',
      desc: 'Innovative dry-stack interlocking soil cement blocks showcasing high-precision locks.',
      colSpan: 'span-6',
      rowSpan: 'span-1',
      height: '240px'
    }
  ];

  const folderImages = [
    // Fly Ash Blocks
    ...[
      'IMG_0004.JPG', 'IMG_0005.JPG', 'IMG_0007.JPG', 'IMG_0008.JPG', 'IMG_0009.JPG',
      'IMG_0063.JPG', 'IMG_0064.JPG', 'IMG_0065.JPG', 'IMG_0083.JPG', 'IMG_0092.JPG'
    ].map((file, idx) => ({
      path: `/images/gallery/flyash_blocks/images/${file}`,
      category: 'Fly Ash Blocks',
      title: `Fly Ash Block Design ${idx + 1}`,
      desc: 'High-strength load-bearing block designed for maximum structural integrity.'
    })),

    // Fly Ash Bricks
    ...[
      'acme-flyash-bricks-manufacturer-coimbatore-01.jpg',
      'flyash-bricks-manufacturing-in-coimbatore-02.jpg',
      'acme-bricks-high-strength-flyash-bricks-03.jpg',
      'premium-flyash-bricks-coimbatore-04.jpg',
      'eco-friendly-flyash-bricks-manufacturing-05.jpg',
      'construction-grade-flyash-bricks-coimbatore-06.jpg',
      'quality-tested-flyash-bricks-stockyard-07.jpg'
    ].map((file, idx) => ({
      path: `/images/gallery/flyash_bricks/${file}`,
      category: 'Fly Ash Bricks',
      title: `Fly Ash Brick Setup ${idx + 1}`,
      desc: 'Eco-friendly and durable fly ash brick cured to perfection for modern masonry.'
    })),

    // Interlock Bricks
    ...[
      'acme-interlock-bricks-manufacturer-coimbatore-01.jpg',
      'interlock-bricks-manufacturing-in-coimbatore-02.jpg',
      'acme-bricks-interlocking-blocks-coimbatore-03.jpg',
      'premium-interlock-bricks-coimbatore-04.jpg',
      'high-strength-interlocking-bricks-coimbatore-05.jpg',
      'eco-friendly-interlock-bricks-manufacturing-06.jpg',
      'dry-stack-interlock-bricks-coimbatore-07.jpg',
      'acme-interlocking-wall-bricks-coimbatore-08.jpg',
      'cost-effective-interlock-bricks-manufacturing-09.jpg',
      'heavy-duty-interlocking-bricks-coimbatore-10.jpg',
      'precision-molded-interlock-bricks-coimbatore-11.jpg',
      'interlock-cement-bricks-manufacturing-coimbatore-12.jpg',
      'residential-building-interlock-bricks-13.jpg',
      'commercial-construction-interlock-bricks-coimbatore-14.jpg',
      'acme-bricks-interlock-stockyard-coimbatore-15.jpg',
      'quality-tested-interlocking-bricks-coimbatore-16.jpg',
      'best-interlock-bricks-manufacturer-coimbatore-17.jpg'
    ].map((file, idx) => ({
      path: `/images/gallery/interlock/${file}`,
      category: 'Interlock Bricks',
      title: `Interlock Brick Arrangement ${idx + 1}`,
      desc: 'Precision interlocking brick for rapid mortarless construction and walling.'
    })),

    // Paver Blocks
    ...Array.from({ length: 56 }, (_, i) => `acme-paver-${String(i + 1).padStart(2, '0')}.jpg`).map((file, idx) => ({
      path: `/images/gallery/pavers/${file}`,
      category: 'Paver Blocks',
      title: `Acme Paver Block ${idx + 1}`,
      desc: 'Heavy-duty exterior paving block ideal for driveways, pathways, and patios.'
    })),

    // Solid Blocks
    ...[
      'IMG_20250611_153156.jpg'
    ].map((file, idx) => ({
      path: `/images/gallery/solid_blocks/${file}`,
      category: 'Solid Blocks',
      title: `Solid Block Structure ${idx + 1}`,
      desc: 'Robust high-density solid concrete blocks suitable for load-bearing walls.'
    }))
  ];

  const dynamicItems = folderImages.map((item, index) => {
    const id = originalItems.length + index + 1;
    let colSpan = 'span-4';
    let rowSpan = 'span-1';
    let height = '198px';
    
    // Create alternating spans for a beautiful masonry look
    if (id % 9 === 1) {
      colSpan = 'span-8';
      rowSpan = 'span-2';
      height = '420px';
    } else if (id % 9 === 4 || id % 9 === 7) {
      colSpan = 'span-6';
      rowSpan = 'span-1';
      height = '240px';
    } else if (id % 9 === 3 || id % 9 === 6) {
      colSpan = 'span-4';
      rowSpan = 'span-2';
      height = '420px';
    }

    return {
      id,
      image: item.path,
      category: item.category,
      title: item.title,
      desc: item.desc,
      colSpan,
      rowSpan,
      height
    };
  });

  const galleryItems = [...originalItems, ...dynamicItems];

  const filteredItems = selectedFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery-page" style={{ paddingBottom: '90px', background: 'var(--bg-primary)' }}>
      {/* Dynamic CSS Styles */}
      <style>{`
        #gallery-page .gallery-hero {
          position: relative;
          background-image: linear-gradient(rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.8)), url('/images/banner1.png');
          background-size: cover;
          background-position: center;
          padding: 50px 0;
          color: #ffffff;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          cursor: pointer;
          border: 1px solid var(--border);
        }
        .gallery-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(124, 161, 58, 0.12);
          border-color: var(--accent-border);
        }
        .gallery-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item:hover img {
          transform: scale(1.04);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.3) 60%, rgba(15, 23, 42, 0.05) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-filter-btn {
          padding: 7px 16px;
          border-radius: 30px;
          font-size: 12.5px;
          font-weight: 650;
          border: 1.5px solid var(--border);
          background: #ffffff;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .gallery-filter-btn.active {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
          box-shadow: 0 4px 12px rgba(124, 161, 58, 0.25);
        }
        .gallery-filter-btn:hover:not(.active) {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(124, 161, 58, 0.05);
        }
        @media (max-width: 768px) {
          .gallery-filter-btn {
            padding: 5px 12px !important;
            font-size: 11.5px !important;
            font-weight: 600 !important;
          }
        }
        .lightbox-modal {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100000;
          color: #ffffff;
        }
        .lightbox-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.08);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .lightbox-nav-btn {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          font-size: 24px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100000;
        }
        .lightbox-nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.08);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .lightbox-nav-btn.prev {
          left: 32px;
        }
        .lightbox-nav-btn.next {
          right: 32px;
        }
        .lightbox-card {
          max-width: 900px;
          width: 95%;
          height: 600px;
          background: #0a0f1d;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 991px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px;
          }
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }
          .lightbox-nav-btn.prev {
            left: 12px;
          }
          .lightbox-nav-btn.next {
            right: 12px;
          }
          .lightbox-close-btn {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
          .lightbox-card {
            height: 450px;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .lightbox-card {
            height: 380px;
          }
        }
      `}</style>

      {/* Hero Header */}
      <div className="breadcrumb-hero-banner" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #111827 0%, #1e293b 50%, #0f172a 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 0',
        color: '#ffffff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(124, 161, 58, 0.15) 0%, rgba(124, 161, 58, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ textAlign: 'left', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Bricks &amp; Blocks Product Gallery
          </h1>
          <div style={{ fontSize: '13px', fontWeight: 500, color: '#cbd5e1', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onHomeClick}
              style={{
                background: 'none',
                border: 'none',
                color: '#cbd5e1',
                cursor: 'pointer',
                padding: 0,
                fontSize: 'inherit',
                fontWeight: 'inherit',
                textDecoration: 'none'
              }}
              className="breadcrumb-home-link"
            >
              Home
            </button>
            <span>&gt;</span>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Gallery</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '40px' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Our Product Gallery
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
            Explore Our Bricks &amp; Blocks
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '14px', lineHeight: 1.6 }}>
            Take a closer look at our range of Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks, manufactured for quality, strength and durability in Coimbatore.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '45px'
        }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`gallery-filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={`${item.title} - ${item.category} manufactured by ACME Bricks in Coimbatore`} 
                  loading="lazy" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphic Lightbox Preview Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          {/* Close trigger button */}
          <button 
            onClick={closeLightbox}
            className="lightbox-close-btn"
          >
            <X size={22} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            className="lightbox-nav-btn prev"
          >
            &#8249;
          </button>

          {/* Main Content Card with Blurred Background Fit */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="lightbox-card"
          >
            {/* Blurred Backdrop Image */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${filteredItems[lightboxIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(24px) brightness(0.4) saturate(1.2)',
                transform: 'scale(1.15)',
                zIndex: 1
              }}
            />

            {/* Foreground Image Wrapper (Full aspect ratio containment) */}
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                style={{ 
                  maxHeight: '92%', 
                  maxWidth: '92%', 
                  objectFit: 'contain',
                  borderRadius: '10px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            className="lightbox-nav-btn next"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
