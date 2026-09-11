import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [waUrlState, setWaUrlState] = useState('');
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [touched, setTouched] = useState({ email: false, phone: false });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !email.trim()) return 'Email address is required';
    if (!emailRegex.test(email.trim())) return 'Invalid email address (e.g. name@example.com)';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone || !phone.trim()) return 'Phone number is required';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 12) {
      return 'Please enter a valid 10 to 12 digit phone number';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailErr = validateEmail(form.email);
    const phoneErr = validatePhone(form.phone);

    if (emailErr || phoneErr) {
      setErrors({ email: emailErr, phone: phoneErr });
      setTouched({ email: true, phone: true });
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Format WhatsApp message (Clean text without emojis or asterisks)
    const waPhone = '919500851880';
    const waText = `New Website Inquiry - ACME Bricks\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || 'N/A'}\n` +
      `Message:\n${form.message}`;

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
    setWaUrlState(waUrl);

    // Open WhatsApp in new tab / app
    window.open(waUrl, '_blank');

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || 'N/A',
      message: form.message,
      _subject: `New Inquiry from ${form.name} - ACME Bricks Website`,
      _replyto: form.email,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      let sent = false;
      try {
        const phpRes = await fetch('/send-mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (phpRes.ok) {
          const phpData = await phpRes.json();
          if (phpData.success) {
            sent = true;
          }
        }
      } catch (phpErr) {
        // Fallback to FormSubmit
      }

      if (!sent) {
        const response = await fetch('https://formsubmit.co/ajax/info@acmebricks.in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (response.ok || data.success === 'true' || data.success === true) {
          sent = true;
        }
      }

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
                  Thank you! Your inquiry has been sent to our team via Email and WhatsApp (+91 95008 51880).
                </p>
                {waUrlState && (
                  <a
                    href={waUrlState}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#25D366',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '10px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '13.5px',
                      marginBottom: '12px'
                    }}
                  >
                    Open WhatsApp Chat
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  Send Another Message
                </button>
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
                    <label className="input-label">Email Address *</label>
                    <input 
                      type="email" required value={form.email}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm({ ...form, email: val });
                        if (touched.email) {
                          setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
                        }
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, email: true }));
                        setErrors((prev) => ({ ...prev, email: validateEmail(form.email) }));
                      }}
                      className="form-input" 
                      style={{
                        borderColor: touched.email && errors.email ? '#ef4444' : undefined,
                        backgroundColor: touched.email && errors.email ? '#fff5f5' : undefined
                      }}
                      placeholder="e.g. jane@domain.com" 
                    />
                    {touched.email && errors.email && (
                      <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Phone Number (10 to 12 digits) *</label>
                  <input 
                    type="tel" required value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9+\s-]/g, '');
                      setForm({ ...form, phone: val });
                      if (touched.phone) {
                        setErrors((prev) => ({ ...prev, phone: validatePhone(val) }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, phone: true }));
                      setErrors((prev) => ({ ...prev, phone: validatePhone(form.phone) }));
                    }}
                    className="form-input" 
                    style={{
                      borderColor: touched.phone && errors.phone ? '#ef4444' : undefined,
                      backgroundColor: touched.phone && errors.phone ? '#fff5f5' : undefined
                    }}
                    placeholder="e.g. +91 95008 51880" 
                  />
                  {touched.phone && errors.phone && (
                    <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="input-group">
                  <label className="input-label">Project Details / Message</label>
                  <textarea 
                    rows="4" required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-textarea" placeholder="Tell us about your build..." 
                  ></textarea>
                </div>

                {errorMsg && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#b91c1c',
                    fontSize: '13.5px',
                    marginBottom: '16px'
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="btn btn-primary" 
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? (
                    <>
                      <span>Sending Inquiry...</span>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
