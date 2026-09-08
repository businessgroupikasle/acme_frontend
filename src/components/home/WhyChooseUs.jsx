import React from 'react';
import { ShieldCheck, Cpu, Leaf, Clock, BadgeDollarSign, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: 'Consistent Quality', desc: 'Quality-Focused Manufacturing', icon: <ShieldCheck size={24} color="var(--accent)" /> },
    { title: 'Modern Manufacturing', desc: 'Precision & Consistency', icon: <Cpu size={24} color="var(--accent)" /> },
    { title: 'Sustainable Solutions', desc: 'Responsible Building Materials', icon: <Leaf size={24} color="var(--accent)" /> },
    { title: 'Reliable Delivery', desc: 'Delivered on Schedule', icon: <Clock size={24} color="var(--accent)" /> },
    { title: 'Competitive Pricing', desc: 'Quality at the Right Value', icon: <BadgeDollarSign size={24} color="var(--accent)" /> },
    { title: 'Customer-First Service', desc: 'Support You Can Rely On', icon: <UserCheck size={24} color="var(--accent)" /> }
  ];

  return (
    <section id="why-choose-us" style={{
      background: 'var(--bg-secondary)',
      padding: '60px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            WHY CHOOSE ACME BRICKS &amp; BLOCKS?
          </div>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: '1.3',
            margin: 0
          }}>
            Built on Quality. Driven by Reliability.
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              style={{
                flex: '1 1 160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '10px 15px',
                borderRight: idx !== reasons.length - 1 ? '1px solid var(--border)' : 'none',
                minWidth: '150px'
              }}
              className="why-choose-card"
            >
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {reason.icon}
              </div>
              <h3 className="trustbar-item-title" style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.3
              }}>
                {reason.title}
              </h3>
              <p className="trustbar-item-desc" style={{
                fontSize: '12px',
                color: 'var(--text-secondary)',
                lineHeight: 1.4
              }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

