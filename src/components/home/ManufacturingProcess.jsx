import React, { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  Sparkles,
  Droplets,
  BadgeCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Award,
  Zap
} from 'lucide-react';

/* Custom hydraulic press / molding SVG icon */
const PressMoldIcon = ({ size = 28, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 3v8" />
    <path d="M8 11h16" />
    <path d="M10 8h12" />
    <path d="M5 15v13h22V15" />
    <rect x="8" y="19" width="16" height="9" rx="1.5" style={{ fill: 'rgba(124, 161, 58, 0.2)', stroke: color, strokeWidth: 1.5 }} />
    <circle cx="16" cy="23.5" r="1.5" fill={color} />
  </svg>
);

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const steps = [
    {
      num: '01',
      tag: 'Raw Sourcing',
      title: 'Raw Material Selection',
      desc: 'High-grade fly ash, 53-grade cement, and quartz sand tested for maximum strength and purity.',
      metric: '99.8% Purity',
      icon: <Leaf size={28} />,
      color: '#7ca13a'
    },
    {
      num: '02',
      tag: 'Batching',
      title: 'Precision Mixing',
      desc: 'Computerized pneumatic weigh-batchers proportion fly ash & water with 100% homogeneity.',
      metric: 'Digital Control',
      icon: <Sparkles size={28} />,
      color: '#7ca13a'
    },
    {
      num: '03',
      tag: 'Molding',
      title: 'Hydraulic Compression',
      desc: 'Heavy-duty 350+ ton hydraulic compression delivers ultra-dense bricks with sharp edges.',
      metric: '350T Pressure',
      icon: <PressMoldIcon size={28} />,
      color: '#7ca13a'
    },
    {
      num: '04',
      tag: 'Hydration',
      title: 'Steam & Water Curing',
      desc: '21 days of continuous humidity curing chambers to achieve peak compressive load capacity.',
      metric: '21-Day Strength',
      icon: <Droplets size={28} />,
      color: '#7ca13a'
    },
    {
      num: '05',
      tag: 'Testing',
      title: 'Quality Inspection',
      desc: 'Tested for compressive strength (IS 2185/1077), <12% water absorption, and zero defects.',
      metric: 'IS 2185 Verified',
      icon: <BadgeCheck size={28} />,
      color: '#7ca13a'
    },
    {
      num: '06',
      tag: 'Delivery',
      title: 'Palletized Dispatch',
      desc: 'Strapped on wooden pallets with stretch film and delivered safely via GPS-tracked fleet.',
      metric: 'Zero Damage',
      icon: <Truck size={28} />,
      color: '#7ca13a'
    }
  ];

  return (
    <section
      id="process-section"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f7faf3 50%, #ffffff 100%)',
        padding: '90px 0 100px 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <style>{`
        /* --- Circular Process Styling --- */
        .circle-pipeline-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1240px;
          margin: 60px auto 0 auto;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1100px) {
          .circle-pipeline-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 20px;
          }
          .circle-flow-arrow {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .circle-pipeline-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px 12px !important;
            margin-top: 36px !important;
          }
          .circle-orb-wrapper {
            width: 105px !important;
            height: 105px !important;
            margin-bottom: 12px !important;
          }
          .circle-main-orb {
            width: 105px !important;
            height: 105px !important;
          }
          .circle-tag-label {
            font-size: 10px !important;
            line-height: 14px !important;
            margin-bottom: 2px !important;
          }
          .circle-title-label,
          .circle-step-item h3 {
            font-size: 13.5px !important;
            line-height: 18px !important;
            margin-bottom: 4px !important;
          }
          .circle-desc-label,
          .circle-step-item p {
            font-size: 11px !important;
            line-height: 15px !important;
            max-width: 140px !important;
          }
        }

        /* Circular Node Wrapper */
        .circle-step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          cursor: pointer;
        }

        /* 3D Orb / Circle Structure */
        .circle-orb-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .circle-step-item:hover .circle-orb-wrapper,
        .circle-step-item.is-selected .circle-orb-wrapper {
          transform: scale(1.1) translateY(-6px);
        }

        /* Outer Orbiting Dashed Ring */
        .circle-orbit-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px dashed rgba(124, 161, 58, 0.35);
          animation: orbitRotate 20s linear infinite;
          pointer-events: none;
        }

        .circle-step-item:hover .circle-orbit-ring,
        .circle-step-item.is-selected .circle-orbit-ring {
          border-color: #7ca13a;
          border-style: dashed;
          animation: orbitRotate 10s linear infinite;
        }

        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Outer Gradient Glow Circle */
        .circle-main-orb {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 
            0 12px 28px rgba(124, 161, 58, 0.12),
            0 2px 6px rgba(0, 0, 0, 0.04),
            inset 0 2px 4px rgba(255, 255, 255, 0.9);
          border: 3px solid #eef2e6;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .circle-step-item:hover .circle-main-orb,
        .circle-step-item.is-selected .circle-main-orb {
          border-color: #7ca13a;
          box-shadow: 
            0 18px 36px rgba(124, 161, 58, 0.25),
            0 0 0 6px rgba(124, 161, 58, 0.12);
        }

        /* Step Number Floating Pill */
        .circle-num-badge {
          position: absolute;
          top: 10px;
          background: #f1f5e9;
          color: #7ca13a;
          font-size: 11px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 12px;
          letter-spacing: 0.04em;
          border: 1px solid rgba(124, 161, 58, 0.2);
          transition: all 0.3s ease;
        }

        .circle-step-item:hover .circle-num-badge,
        .circle-step-item.is-selected .circle-num-badge {
          background: #7ca13a;
          color: #ffffff;
        }

        /* Center Icon */
        .circle-icon-center {
          color: #7ca13a;
          margin-top: 12px;
          transition: transform 0.3s ease;
        }

        .circle-step-item:hover .circle-icon-center,
        .circle-step-item.is-selected .circle-icon-center {
          transform: scale(1.15);
        }

        /* Connecting Flow Arrow */
        .circle-flow-arrow {
          position: absolute;
          top: 70px;
          right: -24px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(124, 161, 58, 0.25);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7ca13a;
          z-index: 4;
          animation: arrowPulse 2s infinite ease-in-out;
        }

        @keyframes arrowPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(124, 161, 58, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 6px rgba(124, 161, 58, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(124, 161, 58, 0); }
        }

        /* Text Block Under Circle */
        .circle-tag-label {
          font-size: 11.5px;
          font-weight: 800;
          color: #7ca13a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .circle-title-label {
          font-size: 14.5px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 6px;
        }

        .circle-desc-label {
          font-size: 12px;
          color: #64748b;
          line-height: 1.55;
          max-width: 170px;
          margin: 0 auto;
        }
      `}</style>

      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 800,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '16px', height: '2px', background: 'var(--accent)' }} />
            OUR MANUFACTURING PROCESS
            <span style={{ width: '16px', height: '2px', background: 'var(--accent)' }} />
          </div>

          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Step by Step Towards Perfection
          </h2>

          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            margin: 0
          }}>
            From carefully selected raw materials to on-time delivery, every milestone is executed with automated precision and uncompromising quality checks.
          </p>
        </div>

        {/* --- 6 Connected Animated Circles --- */}
        <div className="circle-pipeline-container">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                className={`circle-step-item ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* 3D Orb with Orbiting Dashed Ring */}
                <div className="circle-orb-wrapper">
                  <div className="circle-orbit-ring" />

                  <div className="circle-main-orb">
                    {/* Floating Step Number */}
                    <div className="circle-num-badge">{step.num}</div>

                    {/* Icon */}
                    <div className="circle-icon-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Flow Arrow to next circle (except last) */}
                  {idx < steps.length - 1 && (
                    <div className="circle-flow-arrow">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  )}
                </div>

                {/* Text below Circle */}
                <div className="circle-tag-label">{step.tag}</div>
                <h3 className="circle-title-label">{step.title}</h3>
                <p className="circle-desc-label">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



