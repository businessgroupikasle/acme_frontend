import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductCategories({ onCategorySelect }) {

  const categories = [
    {
      name: 'Fly Ash Bricks',
      tagline: 'Durable Bricks for Modern Construction',
      desc: 'Manufactured for consistent strength, dimensional accuracy and durability, our fly ash bricks are suitable for residential, commercial and industrial construction.',
      image: '/images/products/flyash-bricks.png',
      btnText: 'VIEW FLY ASH BRICKS'
    },
    {
      name: 'Fly Ash Blocks',
      tagline: 'Reliable Blocks for Efficient Masonry',
      desc: 'Fly ash blocks designed for durable masonry construction, offering consistent dimensions and dependable performance across a range of building applications.',
      image: '/images/products/ash-blocks.png',
      btnText: 'VIEW FLY ASH BLOCKS'
    },
    {
      name: 'Paver Blocks',
      tagline: 'Durable Paving for Outdoor Spaces',
      desc: 'Paver blocks designed for driveways, walkways, pathways, parking areas and other residential and commercial paving applications.',
      image: '/images/products/paver-block.png',
      btnText: 'VIEW PAVER BLOCKS'
    },
    {
      name: 'Interlocking Bricks',
      tagline: 'Precision-Made for Efficient Construction',
      desc: 'Interlocking bricks manufactured with consistent dimensions for efficient installation and durable performance in suitable construction applications.',
      image: '/images/products/interlock.png',
      btnText: 'VIEW INTERLOCKING BRICKS'
    },
    {
      name: 'Solid Blocks',
      tagline: 'Strong Blocks for Durable Structures',
      desc: 'Solid concrete blocks manufactured for consistent strength and dimensions, suitable for masonry and structural construction applications.',
      image: '/images/products/solid-blocks.png',
      btnText: 'VIEW SOLID BLOCKS'
    },
    {
      name: 'AAC Blocks',
      tagline: 'Lightweight Blocks for Modern Building',
      desc: 'Lightweight Autoclaved Aerated Concrete blocks designed to help reduce structural load while supporting efficient construction and thermal performance.',
      image: '/images/products/aac-blocks.png',
      btnText: 'VIEW AAC BLOCKS'
    }
  ];

  return (
    <section id="categories-section" style={{
      background: '#ffffff',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <style>{`
        .categories-carousel-wrapper {
          position: relative;
          padding: 0 55px;
        }
        #categories-section .swiper {
          padding: 15px 6px 50px 6px;
        }
        .categories-nav-btn {
          position: absolute;
          top: 48%;
          transform: translateY(-50%);
          color: var(--accent);
          background: #ffffff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.25s ease;
        }
        .categories-nav-btn:hover {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 6px 18px rgba(124, 161, 58, 0.3);
        }
        .categories-nav-prev {
          left: 0px;
        }
        .categories-nav-next {
          right: 0px;
        }
        #categories-section .swiper-pagination-bullet {
          background: var(--text-muted);
          opacity: 0.3;
        }
        #categories-section .swiper-pagination-bullet-active {
          background: var(--accent);
          opacity: 1;
          width: 22px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        #categories-section .swiper-slide {
          width: 290px !important;
        }
        #categories-section .category-card {
          border: 1px solid var(--border);
          border-radius: 12px;
          background: #ffffff;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #categories-section .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          border-color: var(--accent);
        }
        #categories-section .category-card:hover .product-img-hover {
          transform: scale(1.05);
        }
        #categories-section .category-card:hover .arrow-btn {
          background: var(--accent);
          transform: translateX(4px);
        }
        #categories-section .category-card:hover .view-action-text {
          color: var(--accent);
        }
        @media (max-width: 767px) {
          .categories-carousel-wrapper {
            padding: 0;
          }
          #categories-section .swiper {
            padding: 10px 0px 45px 0px;
          }
          #categories-section .swiper-slide {
            width: 270px !important;
          }
          .categories-nav-btn {
            display: none;
          }
        }
      `}</style>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px', maxWidth: '780px', margin: '0 auto 45px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            OUR PRODUCT CATEGORIES
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: '1.25',
            marginBottom: '14px'
          }}>
            Quality Bricks &amp; Blocks for Every Construction Need
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            margin: 0
          }}>
            Explore ACME&apos;s range of Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks, manufactured for residential, commercial and industrial construction.
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="categories-carousel-wrapper">

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            className="categories-swiper"
          >
            {categories.map((cat, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex', padding: '10px 0' }}>
                <div
                  onClick={() => onCategorySelect && onCategorySelect(cat.name)}
                  className="category-card"
                >
                  {/* Image Container */}
                  <div style={{
                    height: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    padding: '10px',
                    background: 'transparent'
                  }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{
                        maxHeight: '120px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        transition: 'transform 0.3s ease'
                      }}
                      className="product-img-hover"
                    />
                  </div>

                  {/* Text content */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {cat.name}
                    </h3>

                    {cat.tagline && (
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        marginBottom: '8px',
                        lineHeight: '1.4'
                      }}>
                        {cat.tagline}
                      </div>
                    )}

                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.55',
                      marginBottom: '18px'
                    }}>
                      {cat.desc}
                    </p>
                  </div>

                  {/* Bottom View Action */}
                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <span
                      className="view-action-text"
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {cat.btnText}
                    </span>
                    <div
                      className="arrow-btn"
                      style={{
                        background: 'var(--accent)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(124, 161, 58, 0.25)',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '8px'
                      }}
                    >
                      <ArrowRight size={14} color="#fff" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}
