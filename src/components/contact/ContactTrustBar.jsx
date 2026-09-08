import React from 'react';
import { MessageSquare, ShieldCheck, Truck, IndianRupee, Users } from 'lucide-react';

export default function ContactTrustBar() {
  const trustItems = [
    {
      title: 'Quick Response',
      desc: 'We aim to reply within 24 hours',
      icon: <MessageSquare size={22} />
    },
    {
      title: 'Quality Products',
      desc: 'Certified & tested premium quality',
      icon: <ShieldCheck size={22} />
    },
    {
      title: 'Timely Delivery',
      desc: 'On time, every time across India',
      icon: <Truck size={22} />
    },
    {
      title: 'Best Prices',
      desc: 'Competitive prices for bulk orders',
      icon: <IndianRupee size={22} />
    },
    {
      title: 'Expert Support',
      desc: 'Professional support you can trust',
      icon: <Users size={22} />
    }
  ];

  return (
    <section className="contact-trust-bar">
      <div className="container">
        <div className="contact-trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="contact-trust-item">
              <div className="contact-trust-icon-wrapper">
                {item.icon}
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)', 
                  marginBottom: '4px',
                  lineHeight: 1.2
                }}>
                  {item.title}
                </h4>
                <p style={{ 
                  fontSize: '12px', 
                  color: 'var(--text-secondary)', 
                  lineHeight: 1.4,
                  maxWidth: '180px'
                }}>
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
