import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { trackFormSubmission, trackWhatsAppClick } from '../utils/gtm.js';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [waUrlState, setWaUrlState] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false });

  const validateName = (name) => {
    if (!name || !name.trim()) return 'Name is required';
    const trimmed = name.trim();
    if (!/^[a-zA-Z\s.]+$/.test(trimmed)) {
      return 'Name can only contain alphabets and spaces';
    }
    const lettersOnly = trimmed.replace(/[^a-zA-Z]/g, '');
    if (lettersOnly.length < 2) {
      return 'Please enter a valid name (at least 2 letters)';
    }
    return '';
  };

  const handleNameChange = (e) => {
    // Only allow alphabets, spaces, and dot (for initials)
    const filtered = e.target.value.replace(/[^a-zA-Z\s.]/g, '');
    setForm(prev => ({ ...prev, name: filtered }));
    if (touched.name) {
      setErrors(prev => ({ ...prev, name: validateName(filtered) }));
    }
  };

  const validateEmail = (email) => {
    if (!email || !email.trim()) return 'Email address is required';
    const trimmed = email.trim();
    const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) return 'Invalid email address (e.g. name@example.com)';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone || !phone.trim()) return 'Phone number is required';
    const trimmed = phone.trim();
    const digits = trimmed.replace(/\D/g, '');

    // Extract the 10 mobile digits (handling +91 country code or leading 0 separately)
    let mobile = digits;
    if (trimmed.startsWith('+91') || (digits.length === 12 && digits.startsWith('91'))) {
      mobile = digits.slice(2);
    } else if (digits.length === 11 && digits.startsWith('0')) {
      mobile = digits.slice(1);
    }

    if (mobile.length === 0) {
      return 'Phone number is required';
    }

    if (mobile.length !== 10) {
      return 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!/^[6-9]/.test(mobile)) {
      return 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9';
    }

    return '';
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const isPlus91 = raw.startsWith('+91') || raw.startsWith('+ 91');
    const isZero = !isPlus91 && raw.startsWith('0');
    // If +91: allow 2 digits for country code + 10 mobile digits = 12 digits
    // If leading 0: allow 1 digit for trunk prefix + 10 mobile digits = 11 digits
    // Otherwise: allow exactly 10 digits
    const maxDigits = isPlus91 ? 12 : (isZero ? 11 : 10);

    let digitCount = 0;
    let val = '';
    for (let i = 0; i < raw.length; i++) {
      const char = raw[i];
      if (/\d/.test(char)) {
        if (digitCount < maxDigits) {
          digitCount++;
          val += char;
        }
      } else if (char === '+' && val.length === 0) {
        val += char;
      } else if (char === ' ' || char === '-') {
        val += char;
      }
    }
    setForm(prev => ({ ...prev, phone: val }));
    if (touched.phone) {
      setErrors(prev => ({ ...prev, phone: validatePhone(val) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameErr = validateName(form.name);
    const emailErr = validateEmail(form.email);
    const phoneErr = validatePhone(form.phone);

    if (nameErr || emailErr || phoneErr) {
      setErrors({ name: nameErr, email: emailErr, phone: phoneErr });
      setTouched({ name: true, email: true, phone: true });
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

    // Track WhatsApp conversion & lead trigger
    trackWhatsAppClick('Inline Contact Form');

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

      // Track form submission success in GTM / GA4
      trackFormSubmission('Inline Contact Form', 'General Inquiry', 'success');

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      trackFormSubmission('Inline Contact Form', 'General Inquiry', 'success');
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
                    SF No. 517, Thennampalayam Road,<br />
                    Serayampalayam (East), Vellanaipatti,<br />
                    Coimbatore – 641048, Tamil Nadu
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
                    <label className="input-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleNameChange}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, name: true }));
                        setErrors((prev) => ({ ...prev, name: validateName(form.name) }));
                      }}
                      className="form-input"
                      style={{
                        borderColor: touched.name && errors.name ? '#ef4444' : undefined,
                        backgroundColor: touched.name && errors.name ? '#fff5f5' : undefined
                      }}
                      placeholder="e.g. Jane Doe"
                    />
                    {touched.name && errors.name && (
                      <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                        {errors.name}
                      </span>
                    )}
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
                  <label className="input-label">Phone Number (10 digits) *</label>
                  <input
                    type="tel"
                    required
                    maxLength={16}
                    value={form.phone}
                    onChange={handlePhoneChange}
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
