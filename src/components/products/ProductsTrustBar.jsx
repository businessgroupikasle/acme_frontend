import React from 'react';
import { ShieldCheck, Cpu, Leaf, Truck, BadgeDollarSign, Headphones } from 'lucide-react';

export default function ProductsTrustBar() {
  const trustItems = [
    { title: 'Quality Products', desc: 'Consistent strength, dimensions & finish', icon: <ShieldCheck size={22} color="var(--accent)" /> },
    { title: '11+ Years Experience', desc: 'Manufacturing since 2015', icon: <Cpu size={22} color="var(--accent)" /> },
    { title: 'Wide Product Range', desc: 'Bricks, blocks & paving products', icon: <Leaf size={22} color="var(--accent)" /> },
    { title: 'Reliable Supply', desc: 'Dependable delivery for projects', icon: <Truck size={22} color="var(--accent)" /> },
    { title: 'Competitive Pricing', desc: 'Practical value for bulk & individual orders', icon: <BadgeDollarSign size={22} color="var(--accent)" /> },
    { title: 'Customer Support', desc: 'Responsive assistance from enquiry to delivery', icon: <Headphones size={22} color="var(--accent)" /> }
  ];

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '50px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '24px'
        }} className="trustbar-container">
          {trustItems.map((item, idx) => (
            <div 
              key={idx}
              style={{
                flex: '1 1 150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '140px',
                borderRight: idx !== trustItems.length - 1 ? '1px solid var(--border)' : 'none'
              }}
              className="trustbar-item"
            >
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px'
              }}>
                {item.icon}
              </div>
              <h4 className="trustbar-item-title" style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.3
              }}>
                {item.title}
              </h4>
              <p className="trustbar-item-desc" style={{
                fontSize: '12px',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                maxWidth: '140px'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
