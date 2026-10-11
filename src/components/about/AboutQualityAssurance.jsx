import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Droplets, 
  Layers, 
  FlaskConical, 
  BadgeCheck,
  FileCheck
} from 'lucide-react';

export default function AboutQualityAssurance() {
  const qualityPillars = [
    {
      code: 'IS 12894:2002',
      title: 'Fly Ash Bricks Specification',
      desc: 'Tested for compressive strength classes 7.5 to 10 N/mm² and non-efflorescence compliance under Bureau of Indian Standards specifications.',
      icon: <FileCheck size={24} color="var(--accent, #7ca13a)" />,
      badge: 'BIS Compliant'
    },
    {
      code: 'IS 2185 (Part 1 & 2)',
      title: 'Concrete Blocks Standard',
      desc: 'Uniform density and load-bearing consistency for concrete masonry units, ensuring exceptional structural safety for residential and commercial walls.',
      icon: <Layers size={24} color="var(--accent, #7ca13a)" />,
      badge: 'Certified'
    },
    {
      code: 'CTM Tested',
      title: 'Compressive Load Testing',
      desc: 'Every batch is calibrated on computerized compression testing machines to guarantee crush-resistance well above standard safety thresholds.',
      icon: <FlaskConical size={24} color="var(--accent, #7ca13a)" />,
      badge: 'Batch Validated'
    },
    {
      code: '< 12% Water Absorption',
      title: 'Moisture & Efflorescence Check',
      desc: 'Low water absorption prevents wall dampness, paint peeling, and salt crystallization, guaranteeing long-lasting facade durability.',
      icon: <Droplets size={24} color="var(--accent, #7ca13a)" />,
      badge: 'Zero Dampness'
    },
    {
      code: '±2mm Tolerance',
      title: 'Dimensional Consistency',
      desc: 'High-tonnage hydraulic vibro-compaction produces razor-sharp 90° edges, saving contractors up to 25% mortar during plastering and masonry.',
      icon: <BadgeCheck size={24} color="var(--accent, #7ca13a)" />,
      badge: 'High Precision'
    },
    {
      code: '21-Day Protocol',
      title: 'Scientific Water & Steam Curing',
      desc: 'Complete 21-day hydration protocol in monitored curing yards ensures optimal cement pozzolanic reactions for lifetime durability.',
      icon: <ShieldCheck size={24} color="var(--accent, #7ca13a)" />,
      badge: 'Full Curing'
    }
  ];

  const credentials = [
    {
      title: 'BUREAU OF INDIAN STANDARDS',
      sub: 'IS 12894 & IS 2185 COMPLIANT',
      desc: 'Strictly aligned with national masonry & brick strength specifications.'
    },
    {
      title: 'MSME REGISTERED',
      sub: 'GOVERNMENT OF INDIA',
      desc: 'Recognized manufacturing enterprise operating with modern automated machinery.'
    },
    {
      title: 'MAKE IN INDIA',
      sub: 'INDIGENOUS MANUFACTURING',
      desc: '100% locally produced construction materials supporting regional infrastructure.'
    }
  ];

  return (
    <section
      id="quality-assurance-section"
      style={{
        background: '#ffffff',
        padding: '90px 0 100px 0',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        scrollMarginTop: '100px'
      }}
    >
      {/* Anchor aliases for reliable deep linking */}
      <div id="quality-section" style={{ position: 'absolute', top: 0, left: 0 }} />
      <div id="standards-section" style={{ position: 'absolute', top: 0, left: 0 }} />

      <style>{`
        .qa-card-item {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 26px 22px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }
        .qa-card-item:hover {
          border-color: var(--accent, #7ca13a);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(124, 161, 58, 0.1);
        }
        .qa-cred-card {
          background: #fbfdf9;
          border: 1px solid rgba(124, 161, 58, 0.2);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .qa-cred-card:hover {
          background: #ffffff;
          border-color: var(--accent, #7ca13a);
          box-shadow: 0 8px 20px rgba(124, 161, 58, 0.08);
        }
        @media (max-width: 768px) {
          #quality-assurance-section {
            padding: 60px 0 70px 0 !important;
          }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 800,
            color: 'var(--accent, #7ca13a)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '16px', height: '2px', background: 'var(--accent, #7ca13a)' }} />
            QUALITY ASSURANCE &amp; STANDARDS
            <span style={{ width: '16px', height: '2px', background: 'var(--accent, #7ca13a)' }} />
          </div>

          <h2 style={{
            fontSize: '34px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '14px',
            letterSpacing: '-0.02em'
          }}>
            Engineered for Strength. Tested for Perfection.
          </h2>

          <p style={{
            fontSize: '15.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            margin: 0
          }}>
            Every brick and block manufactured at ACME strictly adheres to Indian Standards (IS 12894:2002 &amp; IS 2185). With computerized weigh-batching, high-tonnage vibro-compaction, and strict lab tests, we guarantee superior load-bearing capacity and durability.
          </p>
        </div>

        {/* 6 Quality Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '22px'
        }}>
          {qualityPillars.map((item, idx) => (
            <div key={idx} className="qa-card-item">
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(124, 161, 58, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent, #7ca13a)',
                    background: 'rgba(124, 161, 58, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(124, 161, 58, 0.2)'
                  }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'var(--accent, #7ca13a)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '4px'
                }}>
                  {item.code}
                </div>

                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Accreditations / Certifications Bar (Hidden) */}
        {/*
        <div style={{
          background: 'linear-gradient(135deg, #f7faf3 0%, #edf5e6 100%)',
          border: '1px solid rgba(124, 161, 58, 0.25)',
          borderRadius: '16px',
          padding: '36px 30px',
          boxShadow: '0 8px 24px rgba(124, 161, 58, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--accent, #7ca13a)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              OFFICIAL CERTIFICATIONS &amp; ACCREDITATIONS
            </span>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '4px',
              marginBottom: 0
            }}>
              Certified Quality Compliance for Institutional &amp; Government Projects
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px'
          }}>
            {credentials.map((cred, cIdx) => (
              <div key={cIdx} className="qa-cred-card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                  color: 'var(--accent, #7ca13a)'
                }}>
                  <Award size={20} />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
                    {cred.title}
                  </span>
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent, #7ca13a)',
                  marginBottom: '6px',
                  letterSpacing: '0.04em'
                }}>
                  {cred.sub}
                </div>
                <p style={{
                  fontSize: '12.5px',
                  color: '#64748b',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '26px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(124, 161, 58, 0.2)',
            fontSize: '13px',
            color: '#475569',
            fontWeight: 600,
            textAlign: 'center',
            flexWrap: 'wrap'
          }}>
            <CheckCircle2 size={16} color="var(--accent, #7ca13a)" />
            <span>Third-Party Lab Test Certificates &amp; Batch Reports available upon request for commercial projects.</span>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
