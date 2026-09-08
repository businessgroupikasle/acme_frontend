import React, { useEffect, useRef } from 'react';
import { Building, Settings, Layers, Trophy, Landmark, Flame } from 'lucide-react';

export default function AboutJourney() {
  const containerRef = useRef(null);

  const milestones = [
    {
      year: '2010',
      title: 'Company Established',
      description: 'Acme Bricks was founded in Coimbatore, starting our mission to manufacture high-strength fly ash materials.',
      icon: <Building size={20} color="var(--accent)" />
    },
    {
      year: '2013',
      title: 'First Automatic Plant',
      description: 'Commissioned our first state-of-the-art fully automatic block making machinery, increasing precision.',
      icon: <Settings size={20} color="var(--accent)" />
    },
    {
      year: '2016',
      title: 'Expanded Product Range',
      description: 'Broadened our catalog to include premium paver blocks, interlock tiles, and solid concrete blocks.',
      icon: <Layers size={20} color="var(--accent)" />
    },
    {
      year: '2019',
      title: 'Government & MSME Registrations',
      description: 'Secured official MSME registration and aligned our products with key Indian standards for reliable building solutions.',
      icon: <Trophy size={20} color="var(--accent)" />
    },
    {
      year: '2022',
      title: 'Expanded Capacity',
      description: 'Multiplied our factory footprint, adding high-capacity production lines to meet rising infrastructure demands.',
      icon: <Landmark size={20} color="var(--accent)" />
    },
    {
      year: '2025',
      title: 'Continuing Innovation',
      description: 'Pioneering eco-friendly carbon-negative blocks, driving sustainable construction for a better tomorrow.',
      icon: <Flame size={20} color="var(--accent)" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.journey-item');
      items.forEach((item) => observer.observe(item));

      const line = containerRef.current.querySelector('.journey-line');
      if (line) observer.observe(line);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      background: 'var(--bg-primary)',
      padding: '100px 0',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <style>{`
        .journey-timeline {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
          position: relative;
          margin-top: 80px;
          height: 380px; /* Ample height to allow alternating top/bottom cards */
          align-items: center;
        }
        .journey-line {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          left: 6%;
          right: 6%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 50%, var(--border) 100%);
          background-size: 200% 200%;
          animation: shimmerLine 4s ease infinite;
          z-index: 1;
          transform-origin: left;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .journey-line.animate-active {
          transform: translateY(-50%) scaleX(1);
        }
        @keyframes shimmerLine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .journey-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
          z-index: 2;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .journey-item.animate-active {
          opacity: 1;
          transform: translateY(0);
        }
        .journey-icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          z-index: 3;
        }
        .journey-icon-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(124, 161, 58, 0.35);
          animation: pulseIconGlow 2.5s infinite;
          pointer-events: none;
        }
        @keyframes pulseIconGlow {
          0% { box-shadow: 0 0 0 0 rgba(124, 161, 58, 0.35); }
          70% { box-shadow: 0 0 0 10px rgba(124, 161, 58, 0); }
          100% { box-shadow: 0 0 0 0 rgba(124, 161, 58, 0); }
        }
        .journey-item:hover .journey-icon-wrapper {
          border-color: var(--accent);
          background: var(--accent-glow);
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 8px 25px rgba(124, 161, 58, 0.2);
        }
        .journey-icon-ring {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1.5px dashed var(--accent-border);
          border-radius: 50%;
          animation: spinOuter 30s linear infinite;
          pointer-events: none;
        }
        @keyframes spinOuter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .journey-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 16px;
          width: 200px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.015);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
          position: absolute;
        }
        .journey-card.even {
          top: calc(50% + 45px); /* Positioned below icon */
        }
        .journey-card.odd {
          bottom: calc(50% + 45px); /* Positioned above icon */
        }
        .journey-item:hover .journey-card {
          border-color: var(--accent-border);
          box-shadow: 0 12px 30px rgba(124, 161, 58, 0.1);
        }
        .journey-card.even:hover {
          transform: translateY(6px);
        }
        .journey-card.odd:hover {
          transform: translateY(-6px);
        }
        .journey-card::before {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .journey-card.even::before {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 3px 3px 0 0;
        }
        .journey-card.odd::before {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 0 3px 3px;
        }
        .journey-card:hover::before {
          width: 60%;
        }

        /* Card Connection Triangles (Desktop) */
        .journey-card.even::after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px;
          border-style: solid;
          border-color: transparent transparent #ffffff transparent;
        }
        .journey-card.even::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 9px;
          border-style: solid;
          border-color: transparent transparent var(--border) transparent;
          z-index: -1;
        }
        .journey-card.odd::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px;
          border-style: solid;
          border-color: #ffffff transparent transparent transparent;
        }
        .journey-card.odd::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 9px;
          border-style: solid;
          border-color: var(--border) transparent transparent transparent;
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .journey-timeline {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-left: 30px;
            height: auto;
            align-items: stretch;
          }
          .journey-line {
            top: 0;
            bottom: 0;
            left: 30px;
            width: 3px;
            height: auto;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .journey-line.animate-active {
            transform: scaleY(1);
          }
          .journey-item {
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 24px;
            height: auto;
            transform: translateX(-30px);
          }
          .journey-item.animate-active {
            transform: translateX(0);
          }
          .journey-card {
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
            width: 100%;
            text-align: left;
            padding: 20px;
          }
          .journey-card.even:hover, .journey-card.odd:hover {
            transform: translateY(-6px);
          }
          /* Card connection triangles override for vertical layout */
          .journey-card.even::after, .journey-card.odd::after {
            top: 22px !important;
            bottom: auto !important;
            left: -16px !important;
            transform: none !important;
            border-color: transparent #ffffff transparent transparent !important;
          }
          .journey-card.even::before, .journey-card.odd::before {
            top: 21px !important;
            bottom: auto !important;
            left: -18px !important;
            transform: none !important;
            border-color: transparent var(--border) transparent transparent !important;
            z-index: -1 !important;
            width: 9px !important;
            height: 18px !important;
            background: transparent !important;
          }
          .journey-card.even::before {
            border-radius: 0 !important;
          }
          .journey-card.odd::before {
            border-radius: 0 !important;
          }
        }
      `}</style>

      <div className="container" ref={containerRef}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            ESTABLISHED IN 2010
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            position: 'relative',
            display: 'inline-block',
            paddingBottom: '12px'
          }}>
            Our Journey
          </h2>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'var(--accent)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Timeline Container */}
        <div className="journey-timeline">
          {/* Animated Line */}
          <div className="journey-line"></div>

          {milestones.map((milestone, idx) => {
            const isOdd = idx % 2 !== 0;
            return (
              <div 
                key={idx}
                className="journey-item"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Outer Dashed Ring & Icon Wrapper */}
                <div className="journey-icon-wrapper">
                  <div className="journey-icon-ring"></div>
                  {milestone.icon}
                </div>

                {/* Card Wrapper */}
                <div className={`journey-card ${isOdd ? 'odd' : 'even'}`}>
                  {/* Year Badge */}
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '100px',
                    marginBottom: '14px'
                  }}>
                    {milestone.year}
                  </span>

                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {milestone.title}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
