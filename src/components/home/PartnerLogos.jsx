import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function PartnerLogos() {
  const logos = Array.from({ length: 10 }, (_, i) => `/images/clients_logo/${i + 1}.webp`);

  return (
    <div style={{
      background: '#ffffff',
      padding: '45px 0',
      borderBottom: '1px solid #f1f5f9',
      overflow: 'hidden'
    }}>
      <style>{`
        .partner-logos-swiper {
          width: 100%;
          overflow: hidden;
        }
        .partner-logos-swiper .swiper-wrapper {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          transition-timing-function: linear !important;
        }
        .partner-logos-swiper .swiper-slide {
          flex-shrink: 0 !important;
          width: 160px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .partner-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 65px;
          width: 100%;
        }
        .partner-logo-image {
          max-height: 100%;
          max-width: 170px;
          object-fit: contain;
          transition: all 0.3s ease;
        }
      `}</style>
      <div className="container">
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '35px'
        }}>
          TRUSTED BY LEADING COMPANIES
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          className="partner-logos-swiper"
        >
          {logos.map((src, idx) => (
            <SwiperSlide key={idx} style={{ width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="partner-logo-wrapper">
                <img 
                  src={src} 
                  alt={`Partner ${idx + 1}`} 
                  className="partner-logo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
