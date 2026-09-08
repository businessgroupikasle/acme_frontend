import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Globe,
  Database,
  Eye,
  HelpCircle,
  Phone,
  Mail,
  Cookie,
  BarChart2,
  MapPin,
  Share2,
  HardDrive,
  Calendar,
  UserCheck,
  Smile,
  ExternalLink,
  RefreshCw,
  Clock,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function PrivacyPolicy({ onHomeClick, onNavigate }) {
  const [activeSection, setActiveSection] = useState('section-1');

  const sections = [
    { id: 'section-1', title: '1. About Our Website', icon: <Globe size={18} /> },
    { id: 'section-2', title: '2. Information We May Collect', icon: <Database size={18} /> },
    { id: 'section-3', title: '3. How We Use Your Information', icon: <Eye size={18} /> },
    { id: 'section-4', title: '4. Enquiry Forms', icon: <HelpCircle size={18} /> },
    { id: 'section-5', title: '5. Phone, Email & WhatsApp', icon: <Phone size={18} /> },
    { id: 'section-6', title: '6. Cookies', icon: <Cookie size={18} /> },
    { id: 'section-7', title: '7. Website Analytics', icon: <BarChart2 size={18} /> },
    { id: 'section-8', title: '8. Google Maps & Third-Party', icon: <MapPin size={18} /> },
    { id: 'section-9', title: '9. Sharing of Information', icon: <Share2 size={18} /> },
    { id: 'section-10', title: '10. Data Security', icon: <Lock size={18} /> },
    { id: 'section-11', title: '11. Data Retention', icon: <Calendar size={18} /> },
    { id: 'section-12', title: '12. Your Privacy Rights', icon: <UserCheck size={18} /> },
    { id: 'section-13', title: '13. Children’s Privacy', icon: <Smile size={18} /> },
    { id: 'section-14', title: '14. External Websites', icon: <ExternalLink size={18} /> },
    { id: 'section-15', title: '15. Changes to This Policy', icon: <RefreshCw size={18} /> },
    { id: 'section-16', title: '16. Contact Us', icon: <Mail size={18} /> }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '80vh', paddingBottom: '70px' }}>
      {/* Header Banner */}
      <div className="breadcrumb-hero-banner" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #111827 0%, #1e293b 50%, #0f172a 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 0',
        color: '#ffffff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(124, 161, 58, 0.15) 0%, rgba(124, 161, 58, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ textAlign: 'left', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '38px',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            Privacy Policy
          </h1>

          {/* Breadcrumbs */}
          <div style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#cbd5e1',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onHomeClick}
              style={{
                background: 'none',
                border: 'none',
                color: '#cbd5e1',
                cursor: 'pointer',
                padding: 0,
                fontSize: 'inherit',
                fontWeight: 'inherit',
                textDecoration: 'none'
              }}
              className="breadcrumb-home-link"
            >
              Home
            </button>
            <span>&gt;</span>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '40px' }}>
        {/* Intro Highlight Box */}
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
          border: '1px solid rgba(124, 161, 58, 0.25)',
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '35px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-start'
        }}>
          <div style={{
            background: 'rgba(124, 161, 58, 0.15)',
            color: 'var(--accent, #7ca13a)',
            padding: '12px',
            borderRadius: '12px',
            flexShrink: 0
          }}>
            <ShieldCheck size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Your Privacy Matters to ACME Bricks
            </h3>
            <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: 1.65, margin: 0 }}>
              At ACME Bricks, we respect your privacy and are committed to protecting the personal information you provide when you use our website or contact us. This Privacy Policy explains what information we may collect, how we use it, and how we protect it.
            </p>
          </div>
        </div>

        {/* 2-Column Layout with Sticky Table of Contents on Desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '35px',
          alignItems: 'flex-start'
        }} className="legal-page-grid">
          
          {/* Sidebar Navigation */}
          <aside style={{
            position: 'sticky',
            top: '90px',
            background: '#ffffff',
            borderRadius: '14px',
            padding: '20px 16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto'
          }} className="legal-sidebar">
            <h4 style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#0f172a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '14px',
              paddingLeft: '8px'
            }}>
              Policy Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeSection === sec.id ? 'rgba(124, 161, 58, 0.12)' : 'transparent',
                    color: activeSection === sec.id ? 'var(--accent, #7ca13a)' : '#475569',
                    fontWeight: activeSection === sec.id ? 700 : 500,
                    fontSize: '13px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== sec.id) {
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.color = '#0f172a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== sec.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  <span style={{ color: activeSection === sec.id ? 'var(--accent, #7ca13a)' : '#94a3b8', flexShrink: 0 }}>
                    {sec.icon}
                  </span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sec.title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Legal Content Body */}
          <main style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
          }} className="legal-content-card">

            {/* Section 1 */}
            <section id="section-1" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Globe size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  1. About Our Website
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                The ACME Bricks website is primarily a product information and enquiry website. Visitors can view our products, learn about their specifications and applications, and contact us for product enquiries.
              </p>
              <div style={{
                background: '#f8fafc',
                borderLeft: '4px solid var(--accent, #7ca13a)',
                padding: '14px 18px',
                borderRadius: '0 8px 8px 0',
                color: '#334155',
                fontSize: '14px',
                lineHeight: 1.65
              }}>
                Our website does not provide direct online purchasing, online checkout, or online payment facilities.
              </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 2 */}
            <section id="section-2" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Database size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  2. Information We May Collect
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '14px' }}>
                When you contact ACME Bricks through our website or other communication channels, we may collect information such as:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '10px',
                marginBottom: '16px'
              }}>
                {[
                  'Name',
                  'Company or business name',
                  'Phone number',
                  'Email address',
                  'City or location',
                  'Product requirement',
                  'Quantity or project requirement',
                  'Enquiry details',
                  'Any other voluntary details'
                ].map((item) => (
                  <div key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#1e293b'
                  }}>
                    <CheckCircle2 size={15} color="var(--accent, #7ca13a)" />
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ color: '#475569', fontSize: '14px', fontStyle: 'italic', margin: 0 }}>
                We collect this information primarily to understand and respond to your enquiry.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 3 */}
            <section id="section-3" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Eye size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  3. How We Use Your Information
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We may use the information you provide to:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', margin: 0 }}>
                <li>Respond to product enquiries.</li>
                <li>Provide product information and specifications.</li>
                <li>Provide pricing or quotations.</li>
                <li>Understand your product requirements.</li>
                <li>Contact you regarding your enquiry.</li>
                <li>Provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Maintain website security.</li>
                <li>Maintain necessary business records.</li>
                <li>Comply with applicable legal requirements.</li>
              </ul>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 4 */}
            <section id="section-4" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <HelpCircle size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  4. Enquiry Forms
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                If you submit an enquiry through our website, the information you provide may be used by ACME Bricks to contact you regarding your enquiry.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We may contact you using the details you provide, including through:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Phone calls</li>
                <li>Email</li>
                <li>WhatsApp messages</li>
                <li>Other appropriate business communication methods</li>
              </ul>
              <p style={{ color: '#64748b', fontSize: '13.5px', fontStyle: 'italic', margin: 0 }}>
                Submitting an enquiry does not create an obligation to purchase any product.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 5 */}
            <section id="section-5" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Phone size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  5. Phone, Email and WhatsApp
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                If you contact ACME Bricks through telephone, email, WhatsApp, or another communication channel, we may retain relevant contact details and communications for enquiry management, customer service, business communication, and record-keeping purposes.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Third-party platforms such as WhatsApp, email providers, and telecommunications providers may process information according to their respective privacy policies.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 6 */}
            <section id="section-6" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Cookie size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  6. Cookies
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Our website may use cookies and similar technologies to improve functionality and understand website usage. Cookies may help us:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Understand website traffic.</li>
                <li>Improve website performance.</li>
                <li>Improve user experience.</li>
                <li>Remember certain preferences.</li>
                <li>Identify technical issues.</li>
              </ul>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                You can manage or disable cookies through your browser settings. Disabling cookies may affect certain website features.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 7 */}
            <section id="section-7" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <BarChart2 size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  7. Website Analytics
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We may use analytics tools to understand general website traffic and visitor behaviour. This may include information such as:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '8px',
                marginBottom: '14px'
              }}>
                {[
                  'Pages visited',
                  'Browser type',
                  'Device type',
                  'Operating system',
                  'Approximate location',
                  'Referring website',
                  'Date and time of visits',
                  'General website usage'
                ].map((item) => (
                  <div key={item} style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', color: '#475569', border: '1px solid #f1f5f9' }}>
                    • {item}
                  </div>
                ))}
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Where third-party analytics services are used, those services may process information according to their own privacy policies.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 8 */}
            <section id="section-8" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <MapPin size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  8. Google Maps and Third-Party Services
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Our website may provide a link to Google Maps to help visitors locate our business.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                When you use an external service or follow a third-party link, that service may collect information according to its own privacy policy and terms. ACME Bricks does not control the privacy practices of third-party websites and services.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 9 */}
            <section id="section-9" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Share2 size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  9. Sharing of Information
                </h2>
              </div>
              <div style={{
                background: '#f0fdf4',
                border: '1px solid rgba(124, 161, 58, 0.3)',
                padding: '12px 18px',
                borderRadius: '8px',
                marginBottom: '14px',
                fontWeight: 700,
                color: '#166534',
                fontSize: '14px'
              }}>
                ACME Bricks does not sell or rent your personal information.
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We may share information where reasonably necessary with:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', margin: 0 }}>
                <li>Service providers supporting our website or business operations.</li>
                <li>Website hosting or technical service providers.</li>
                <li>Professional advisers where necessary.</li>
                <li>Government authorities where required by law.</li>
                <li>Law-enforcement authorities where legally required.</li>
                <li>Other parties where necessary to protect our legal rights or business interests.</li>
              </ul>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 10 */}
            <section id="section-10" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Lock size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  10. Data Security
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We take reasonable measures to protect personal information from unauthorized access, misuse, alteration, disclosure, or destruction.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 11 */}
            <section id="section-11" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Calendar size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  11. Data Retention
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We may retain personal information for as long as reasonably necessary to:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Respond to enquiries.</li>
                <li>Maintain business records.</li>
                <li>Provide customer support.</li>
                <li>Resolve disputes.</li>
                <li>Meet legal or regulatory requirements.</li>
                <li>Protect our legitimate business interests.</li>
              </ul>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                The retention period may vary depending on the nature and purpose of the information.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 12 */}
            <section id="section-12" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <UserCheck size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  12. Your Privacy Rights
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Depending on applicable law, you may have rights relating to your personal information, including requesting access to, correction of, or deletion of certain information.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                For privacy-related requests, you may contact ACME Bricks using the contact details provided below.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 13 */}
            <section id="section-13" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Smile size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  13. Children’s Privacy
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                This website is intended primarily for general business and commercial audiences.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                ACME Bricks does not knowingly collect personal information from children for marketing purposes.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 14 */}
            <section id="section-14" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <ExternalLink size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  14. External Websites
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Our website may contain links to external websites, platforms, or services. ACME Bricks is not responsible for the privacy practices, content, security, or policies of external websites.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                We recommend reviewing the privacy policy of any third-party website before providing personal information.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 15 */}
            <section id="section-15" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <RefreshCw size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  15. Changes to This Privacy Policy
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                ACME Bricks may update this Privacy Policy periodically to reflect changes in our website, services, technology, or applicable legal requirements.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Any updated version will be published on this page with a revised "Last Updated" date.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 16: Contact Us */}
            <section id="section-16" style={{ scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Mail size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  16. Contact Us
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '20px' }}>
                If you have questions about this Privacy Policy or wish to make a privacy-related request, please contact us.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                borderRadius: '14px',
                padding: '28px 24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent, #7ca13a)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    <MapPin size={16} />
                    Registered Factory Address
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.6, margin: 0 }}>
                    <strong>ACME Bricks</strong><br />
                    D No 1, SF No 517/A,<br />
                    Thennampalayam Road, Serayampalayam,<br />
                    Vellanaipatti, Coimbatore,<br />
                    Tamil Nadu – 641048
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent, #7ca13a)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    <Phone size={16} />
                    Direct Contact Numbers
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a href="tel:+919500851880" style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>+91 95008 51880</a>
                    <a href="tel:+918807408780" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13.5px' }}>+91 88074 08780</a>
                    <a href="tel:+917305970966" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13.5px' }}>+91 73059 70966</a>
                  </div>

                  <div style={{ marginTop: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent, #7ca13a)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      <Mail size={14} />
                      Email Address
                    </div>
                    <a href="mailto:info@acmebricks.in" style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '13.5px' }}>info@acmebricks.in</a>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent, #7ca13a)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    <Clock size={16} />
                    Factory Working Hours
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                    <strong>Monday – Saturday:</strong><br />
                    8:30 AM – 6:30 PM<br />
                    <strong>Sunday:</strong> Closed
                  </p>

                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    style={{
                      background: 'var(--accent, #7ca13a)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    Contact ACME Team
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
