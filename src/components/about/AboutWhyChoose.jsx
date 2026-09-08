import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Calendar, Leaf, Grid, Target, Trophy, Clock, Heart } from 'lucide-react';

export default function AboutWhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const qualities = [
    {
      title: 'Consistent Bricks & Blocks',
      label: 'QUALITY YOU CAN RELY ON',
      desc: 'We focus on consistent quality, strength, dimensions and finish across our range of construction products.',
      icon: <ShieldCheck size={24} color="var(--accent)" />
    },
    {
      title: 'Experience in Construction Materials',
      label: '11+ YEARS OF EXPERIENCE',
      desc: 'Since 2015, we have built experience in manufacturing and supplying bricks, blocks and paving products for diverse construction requirements.',
      icon: <Calendar size={24} color="var(--accent)" />
    },
    {
      title: 'Bricks, Blocks & Paving Products',
      label: 'WIDE PRODUCT RANGE',
      desc: 'From Fly Ash Bricks and Fly Ash Blocks to Paver Blocks, Interlocking Bricks, Solid Blocks and AAC Blocks, we offer products for different construction applications.',
      icon: <Grid size={24} color="var(--accent)" />
    },
    {
      title: 'Uniform Size & Finish',
      label: 'PRECISION & CONSISTENCY',
      desc: 'Our production processes focus on maintaining consistent dimensions and finish, helping support efficient handling and installation.',
      icon: <Target size={24} color="var(--accent)" />
    },
    {
      title: 'Dependable Delivery for Projects',
      label: 'RELIABLE SUPPLY',
      desc: 'We work to fulfil orders efficiently and coordinate delivery to help builders, contractors and customers maintain their construction schedules.',
      icon: <Clock size={24} color="var(--accent)" />
    },
    {
      title: 'Quality Products at Competitive Prices',
      label: 'COMPETITIVE VALUE',
      desc: 'We aim to provide reliable construction materials at competitive prices, offering practical value for individual and bulk requirements.',
      icon: <Leaf size={24} color="var(--accent)" />
    },
    {
      title: 'Serving Construction Projects Across Regions',
      label: '2,000+ PROJECTS',
      desc: 'Our products have been supplied for 2,000+ projects across Tamil Nadu and Kerala, reflecting our experience serving different construction requirements.',
      icon: <Trophy size={24} color="var(--accent)" />
    },
    {
      title: 'Support From Enquiry to Delivery',
      label: 'CUSTOMER-FOCUSED SERVICE',
      desc: 'We believe in clear communication, responsive support and dependable service throughout the product enquiry and ordering process.',
      icon: <Heart size={24} color="var(--accent)" />
    }
  ];

  return (
    <section ref={sectionRef} className={`why-choose-section-custom ${isVisible ? 'active' : ''}`}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center' }}>
          <div className="why-choose-badge">OUR STRENGTHS</div>
          <h2 className="why-choose-title">
            Why Choose <span>ACME Bricks &amp; Blocks</span>?
          </h2>
          <p className="why-choose-subtitle">
            With 11+ years of manufacturing experience, ACME Bricks &amp; Blocks supplies a wide range of bricks, blocks and paving products to construction projects across Coimbatore, Tamil Nadu and Kerala.
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="why-choose-grid-custom">
          {qualities.map((item, idx) => (
            <div 
              key={idx}
              className={`why-choose-card-custom ${isVisible ? 'active' : ''}`}
              style={{
                '--reveal-delay': `${idx * 80}ms`
              }}
            >
              {/* Decorative background number */}
              <div className="card-decor-number">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="card-icon-wrapper">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="card-content-wrapper">
                {item.label && (
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                )}
                <h3 className="card-title-custom">
                  {item.title}
                </h3>
                <p className="card-desc-custom">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

