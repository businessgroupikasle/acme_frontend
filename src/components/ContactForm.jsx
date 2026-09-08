import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact-section" style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1.2fr',
          gap: '50px'
        }}>
          {/* Info Details */}
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Let's Build Together</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Have custom specifications or placing a bulk order? Connect with our structural masonry consultancy team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.08)', width: '40px', height: '40px', borderRadius: '8px', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.3 }}>Email Address</h4>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>info@acmebricks.in</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.08)', width: '40px', height: '40px', borderRadius: '8px', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.3 }}>Phone Line</h4>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>+91 95008 51880</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.08)', width: '40px', height: '40px', borderRadius: '8px', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.3 }}>Headquarters</h4>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                    D No 1, SF NO 517/A, Thennampalayam Road,<br />
                    Serayampalayam, Vellanaipatti,<br />
                    Coimbatore, Tamil Nadu 641048
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '20px' }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Send size={24} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Thank you. An ACME engineering consultant will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="input-group">
                    <label className="input-label">Full Name</label>
                    <input 
                      type="text" required value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input" placeholder="e.g. Jane Doe" 
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <input 
                      type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input" placeholder="e.g. jane@domain.com" 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Phone Number</label>
                  <input 
                    type="tel" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="form-input" placeholder="e.g. +1 (555) 019-2834" 
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Project Details / Message</label>
                  <textarea 
                    rows="4" required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-textarea" placeholder="Tell us about your build..." 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
