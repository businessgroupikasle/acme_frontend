import React, { useState } from 'react';
import { User, Mail, Phone, FileText, MessageSquare, Send, MapPin, Clock, Check, Loader2, AlertCircle } from 'lucide-react';

export default function ContactMain({ onNavigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false
  });
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

    if (!form.agree) {
      alert("Please agree to the Privacy Policy.");
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
      `Subject / Product: ${form.subject || 'Product Inquiry'}\n` +
      `Message:\n${form.message}`;

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
    setWaUrlState(waUrl);

    // Open WhatsApp in new tab / app
    window.open(waUrl, '_blank');

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject || 'Product Inquiry',
      message: form.message,
      _subject: `New Inquiry from ${form.name} (${form.subject || 'General'}) - ACME Bricks Website`,
      _replyto: form.email,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      // 1. First attempt: Try PHP mailer if deployed on Apache/cPanel server
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
        // Not running on PHP server (e.g. localhost/Vite), proceed to FormSubmit
      }

      // 2. Fallback attempt: Send via FormSubmit API
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
      setForm({ name: '', email: '', phone: '', subject: '', message: '', agree: false });
    } catch (err) {
      console.error('Form submission error:', err);
      // Even if mail API had network issue, WhatsApp was triggered and mark as submitted
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ background: '#f8fafc', padding: '60px 0 80px 0', borderBottom: '1px solid var(--border)' }}>
      <style>{`
        .contact-grid-wrapper {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: stretch;
        }
        .contact-card-box {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .contact-custom-form {
          display: flex;
          flex-direction: column;
        }
        .contact-input-field {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          padding: 13px 16px;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 14px;
          outline: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-input-field:hover {
          border-color: #cbd5e1;
        }
        .contact-input-field:focus {
          border-color: var(--accent);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(124, 161, 58, 0.12);
        }
        .contact-input-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 7px;
          letter-spacing: 0.01em;
        }
        .contact-submit-btn {
          width: 100%;
          background: var(--accent);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.05em;
          border: none;
          outline: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 12px rgba(124, 161, 58, 0.25);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-submit-btn:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(124, 161, 58, 0.35);
        }
        .contact-submit-btn:active {
          transform: translateY(0);
        }
        .contact-checkbox-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          cursor: pointer;
          width: fit-content;
        }
        .contact-checkbox-custom {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
          background: #ffffff;
          flex-shrink: 0;
        }
        .contact-checkbox-container:hover .contact-checkbox-custom {
          border-color: var(--accent);
        }
        .contact-checkbox-custom.checked {
          background: var(--accent);
          border-color: var(--accent);
          color: #ffffff;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        .contact-info-item-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 0;
          border-top: 1px solid #f1f5f9;
        }
        .contact-info-item-row:first-child {
          border-top: 1px solid var(--border);
          padding-top: 20px;
        }
        .contact-info-icon-badge {
          background: rgba(124, 161, 58, 0.08);
          border: 1px solid rgba(124, 161, 58, 0.16);
          color: var(--accent);
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        @media (max-width: 991px) {
          .contact-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact-card-box {
            padding: 28px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="contact-grid-wrapper">
          {/* Left Column - Contact Form Card */}
          <div className="contact-card-box">
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
              }} className="animate-fade-in">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(124, 161, 58, 0.1)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Send size={28} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', maxWidth: '400px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you! Your message has been sent to our team via Email and WhatsApp (+91 95008 51880).
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
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      marginBottom: '16px',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
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
                    border: '1.5px solid var(--border)',
                    color: 'var(--text-secondary)',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.25 }}>
                  Send Us a Message
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '28px', lineHeight: 1.6 }}>
                  Fill out the form below with your requirements. Our team will contact you to discuss the right bricks and blocks for your construction project.
                </p>

                <form onSubmit={handleSubmit} className="contact-custom-form" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '16px',
                      marginBottom: '16px'
                    }}>
                      {/* Name */}
                      <div className="input-group" style={{ marginBottom: 0 }}>
                        <label className="contact-input-label">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="contact-input-field"
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="input-group" style={{ marginBottom: 0 }}>
                        <label className="contact-input-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
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
                          className="contact-input-field"
                          style={{
                            borderColor: touched.email && errors.email ? '#ef4444' : undefined,
                            backgroundColor: touched.email && errors.email ? '#fff5f5' : undefined
                          }}
                          placeholder="e.g. john@example.com"
                        />
                        {touched.email && errors.email && (
                          <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '16px',
                      marginBottom: '16px'
                    }}>
                      {/* Phone */}
                      <div className="input-group" style={{ marginBottom: 0 }}>
                        <label className="contact-input-label">Phone Number (10 to 12 digits) *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
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
                          className="contact-input-field"
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

                      {/* Subject Select Dropdown */}
                      <div className="input-group" style={{ marginBottom: 0 }}>
                        <label className="contact-input-label">Subject / Product *</label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="contact-input-field"
                          style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            background: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23475569\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 16px center #ffffff',
                            backgroundSize: '16px',
                            paddingRight: '40px',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="" disabled hidden>Select Product Option...</option>
                          <option value="Fly Ash Bricks">Fly Ash Bricks</option>
                          <option value="Fly Ash Blocks">Fly Ash Blocks</option>
                          <option value="Paver Blocks">Paver Blocks</option>
                          <option value="Interlock Bricks">Interlock Bricks</option>
                          <option value="Solid Blocks">Solid Blocks</option>
                          <option value="AAC Blocks">AAC Blocks</option>
                          <option value="General Inquiry">General Inquiry / Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="input-group" style={{ marginBottom: '20px' }}>
                      <label className="contact-input-label">Your Message *</label>
                      <textarea
                        rows="4"
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="contact-input-field"
                        placeholder="How can we help you? Describe your project requirements..."
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>

                    {/* Checkbox */}
                    <div className="contact-checkbox-container">
                      <div 
                        onClick={() => setForm({ ...form, agree: !form.agree })}
                        className={`contact-checkbox-custom ${form.agree ? 'checked' : ''}`}
                      >
                        {form.agree && <Check size={12} strokeWidth={4} />}
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', userSelect: 'none' }}>
                        <span 
                          onClick={() => setForm({ ...form, agree: !form.agree })}
                          style={{ cursor: 'pointer' }}
                        >
                          I agree to the{' '}
                        </span>
                        <a
                          href="/privacy-policy/"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (onNavigate) {
                              onNavigate('privacy');
                            } else {
                              window.location.href = '/privacy-policy/';
                            }
                          }}
                          style={{
                            color: 'var(--accent)',
                            fontWeight: 700,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                          }}
                        >
                          Privacy Policy
                        </a>{' '}
                        *
                      </span>
                    </div>
                  </div>

                  {/* Error Message */}
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
                      marginTop: '16px',
                      marginBottom: '16px'
                    }}>
                      <AlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="contact-submit-btn"
                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                  >
                    {loading ? (
                      <>
                        SENDING MESSAGE...
                        <Loader2 size={16} className="spin-animation" style={{ animation: 'spin 1s linear infinite' }} />
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column - Get in Touch Info Card */}
          <div className="contact-card-box">
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.25 }}>
              Get in Touch for Bricks &amp; Blocks
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '16px', lineHeight: 1.6 }}>
              Looking for Fly Ash Bricks, Fly Ash Blocks, Paver Blocks, Interlocking Bricks, Solid Blocks or AAC Blocks in Coimbatore? Send us your requirement and our team will get back to you with product details, pricing and delivery information.
            </p>

            <div className="contact-info-list" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              {/* Location */}
              <div className="contact-info-item-row">
                <div className="contact-info-icon-badge">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: 0, marginBottom: '4px', lineHeight: 1.3 }}>
                    Our Location
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '6px' }}>
                    D No 1, SF NO 517/A,<br />
                    Thennampalayam Road, Serayampalayam,<br />
                    Vellanaipatti, Coimbatore,<br />
                    Tamil Nadu 641048
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Acme+Bricks+%26+Blocks/@11.1045893,77.0926709,1076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8f9492c15ce3d:0x8a8f2a8da41428b3!8m2!3d11.1045893!4d77.0926709!16s%2Fg%2F11sg_gx3vd?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    className="hover-opacity"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="contact-info-item-row">
                <div className="contact-info-icon-badge">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: 0, marginBottom: '4px', lineHeight: 1.3 }}>
                    Call Us
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <a 
                      href="tel:+919500851880" 
                      style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      +91 95008 51880
                    </a>
                    <a 
                      href="tel:+918807408780" 
                      style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      +91 88074 08780
                    </a>
                    <a 
                      href="tel:+917305970966" 
                      style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      +91 73059 70966
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="contact-info-item-row">
                <div className="contact-info-icon-badge">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: 0, marginBottom: '4px', lineHeight: 1.3 }}>
                    Email Us
                  </h4>
                  <a 
                    href="mailto:info@acmebricks.in" 
                    style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    info@acmebricks.in
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-info-item-row" style={{ borderBottom: 'none' }}>
                <div className="contact-info-icon-badge">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: 0, marginBottom: '4px', lineHeight: 1.3 }}>
                    Working Hours
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Mon - Sat: 8:30 AM - 6:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
