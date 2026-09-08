import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectsTestimonials() {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const DEFAULT_TESTIMONIALS = [
    {
      paragraph: 'The fly ash bricks from Acme Bricks exceeded our expectations. The quality, strength, and timely delivery made our construction process smooth and hassle-free.',
      name: 'Ramesh Kumar',
      city: 'Coimbatore',
      avatar: ''
    },
    {
      paragraph: 'We purchased paver blocks for our residential project, and the finish was excellent. Their team was supportive and delivered exactly as promised.',
      name: 'Prakash S',
      city: 'Tiruppur',
      avatar: ''
    },
    {
      paragraph: 'Acme Bricks offers premium-quality concrete blocks at competitive prices. We are highly satisfied with both the product quality and customer service.',
      name: 'Arun Raj',
      city: 'Erode',
      avatar: ''
    },
    {
      paragraph: "We've been sourcing construction materials from Acme Bricks for several projects. Their products are durable, eco-friendly, and always delivered on schedule.",
      name: 'Karthik R',
      city: 'Salem',
      avatar: ''
    },
    {
      paragraph: 'Excellent solid blocks with high compressive strength. Perfect dimensional accuracy that helped us reduce mortar consumption significantly.',
      name: 'Senthil Nathan',
      city: 'Coimbatore',
      avatar: ''
    },
    {
      paragraph: 'Prompt customer support and reliable fleet delivery. The interlocking bricks have made our boundary and pathway projects effortless.',
      name: 'Murugan K',
      city: 'Pollachi',
      avatar: ''
    }
  ];

  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID || 'ChIJPS4VzEn5qDoRsygUpI0q-Io';

    if (apiKey) {
      fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.result?.reviews && data.result.reviews.length > 0) {
            const googleReviews = data.result.reviews.map((rev) => ({
              paragraph: rev.text || 'Excellent quality bricks and blocks. Highly recommended!',
              name: rev.author_name,
              city: 'Google Reviewer',
              avatar: rev.profile_photo_url
            }));
            setTestimonials([...googleReviews, ...DEFAULT_TESTIMONIALS]);
          }
        })
        .catch((err) => console.warn('Could not fetch reviews from Google API.', err));
    }
  }, []);

  // Helper to extract initials
  const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return name[0] || '';
  };

  return (
    <section id="testimonials-section" style={{
      background: '#ffffff',
      padding: '85px 0',
      borderBottom: '1px solid var(--border)',
      position: 'relative'
    }}>
      <style>{`
        .testimonials-carousel-wrapper {
          position: relative;
          padding: 0 55px;
        }
        #testimonials-section .swiper {
          padding: 15px 6px 50px 6px;
        }
        .testimonials-nav-btn {
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
        .testimonials-nav-btn:hover {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 6px 18px rgba(124, 161, 58, 0.3);
        }
        .testimonials-nav-prev {
          left: 0px;
        }
        .testimonials-nav-next {
          right: 0px;
        }
        #testimonials-section .swiper-pagination-bullet {
          background: var(--text-muted);
          opacity: 0.3;
        }
        #testimonials-section .swiper-pagination-bullet-active {
          background: var(--accent);
          opacity: 1;
          width: 22px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        .testimonial-carousel-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
          min-height: 250px;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.02);
        }
        .testimonial-carousel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          border-color: rgba(124, 161, 58, 0.4);
        }
        @media (max-width: 767px) {
          .testimonials-carousel-wrapper {
            padding: 0;
          }
          #testimonials-section .swiper {
            padding: 10px 0px 45px 0px;
          }
          .testimonials-nav-btn {
            display: none;
          }
        }
      `}</style>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px', maxWidth: '750px', margin: '0 auto 45px auto' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            WHAT OUR CLIENTS SAY
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: '1.25',
            marginBottom: '12px'
          }}>
            Trusted by Builders, Contractors &amp; Customers
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            margin: 0
          }}>
            Hear from our satisfied customers across Tamil Nadu who rely on ACME for consistent quality and on-time delivery.
          </p>
        </div>

        {/* Testimonials Swiper Carousel */}
        <div className="testimonials-carousel-wrapper">
          <button
            ref={prevRef}
            className="testimonials-nav-btn testimonials-nav-prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            className="testimonials-swiper"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex', padding: '10px 0' }}>
                <div className="testimonial-carousel-card" style={{ width: '100%' }}>
                  {/* Top: Stars & Quote Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#eab308" color="#eab308" />
                      ))}
                    </div>
                    <Quote size={24} color="var(--accent)" style={{ opacity: 0.35 }} />
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-primary)',
                    fontStyle: 'italic',
                    lineHeight: '1.65',
                    marginBottom: '22px',
                    flex: 1
                  }}>
                    &ldquo;{item.paragraph}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border)'
                  }}>
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid var(--accent)'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const initialsNode = e.target.nextSibling;
                          if (initialsNode) initialsNode.style.display = 'flex';
                        }}
                      />
                    ) : null}

                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(124, 161, 58, 0.12)',
                      border: '1.5px solid var(--accent)',
                      display: item.avatar ? 'none' : 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      fontSize: '14px',
                      flexShrink: 0
                    }}>
                      {getInitials(item.name)}
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '2px',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'
                      }}>
                        {item.name}
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {item.city}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={nextRef}
            className="testimonials-nav-btn testimonials-nav-next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Google Reviews Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '16px 24px',
          maxWidth: '680px',
          margin: '20px auto 0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <svg viewBox="0 0 24 24" width="22" height="22" style={{ display: 'block', flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.2' }}>
                Google Business Rating
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>5.0</span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>(Verified Reviews)</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/ACME+Brick+%7C+Flyash+Bricks+%7C+Paver+Blocks+%7C+Interlock+Bricks+Manufacturers/@11.1045849,77.0926739,17z/data=!4m8!3m7!1s0x3ba8f9492c15ce3d:0x8a8f2a8da41428b3!8m2!3d11.1045849!4d77.0926739!9m1!1b1!16s%2Fg%2F11sg_gx3vd?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#ffffff',
              background: 'var(--accent)',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'var(--transition)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            className="hover-opacity"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}

