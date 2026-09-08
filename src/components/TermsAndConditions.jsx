import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Package,
  Info,
  HelpCircle,
  DollarSign,
  Globe,
  Lock,
  CheckCircle,
  ExternalLink,
  Server,
  AlertTriangle,
  RefreshCw,
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight
} from 'lucide-react';

export default function TermsAndConditions({ onHomeClick, onNavigate }) {
  const [activeSection, setActiveSection] = useState('section-1');

  const sections = [
    { id: 'section-1', title: '1. About This Website', icon: <Globe size={18} /> },
    { id: 'section-2', title: '2. Our Products', icon: <Package size={18} /> },
    { id: 'section-3', title: '3. Product Information', icon: <Info size={18} /> },
    { id: 'section-4', title: '4. Product Enquiries', icon: <HelpCircle size={18} /> },
    { id: 'section-5', title: '5. Pricing and Quotations', icon: <DollarSign size={18} /> },
    { id: 'section-6', title: '6. Website Content', icon: <FileText size={18} /> },
    { id: 'section-7', title: '7. Intellectual Property', icon: <Lock size={18} /> },
    { id: 'section-8', title: '8. Acceptable Use', icon: <ShieldCheck size={18} /> },
    { id: 'section-9', title: '9. Third-Party Links', icon: <ExternalLink size={18} /> },
    { id: 'section-10', title: '10. Website Availability', icon: <Server size={18} /> },
    { id: 'section-11', title: '11. Limitation of Liability', icon: <AlertTriangle size={18} /> },
    { id: 'section-12', title: '12. Changes to These Terms', icon: <RefreshCw size={18} /> },
    { id: 'section-13', title: '13. Governing Law', icon: <Scale size={18} /> },
    { id: 'section-14', title: '14. Contact Us', icon: <Phone size={18} /> }
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
            Terms &amp; Conditions
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
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Terms &amp; Conditions</span>
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
              Welcome to ACME Bricks
            </h3>
            <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: 1.65, margin: 0 }}>
              By accessing and using this website, you agree to comply with these Terms &amp; Conditions. If you do not agree with these terms, please discontinue use of the website.
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
          
          {/* Sidebar Navigation (Sticky on desktop) */}
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
              Table of Contents
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
                  1. About This Website
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                The ACME Bricks website is a product information and enquiry website. It allows visitors to learn about our products, view product details, specifications, applications, and contact ACME Bricks for further information.
              </p>
              <div style={{
                background: '#f8fafc',
                borderLeft: '4px solid var(--accent, #7ca13a)',
                padding: '14px 18px',
                borderRadius: '0 8px 8px 0',
                marginBottom: '14px',
                color: '#334155',
                fontSize: '14px',
                lineHeight: 1.65
              }}>
                <strong>Important:</strong> The products displayed on this website are not available for direct online purchase. This website does not provide an online shopping cart, online checkout, or direct online ordering facility.
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Customers interested in our products can contact ACME Bricks directly for product availability, pricing, specifications, quantities, transportation, and other commercial details.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 2 */}
            <section id="section-2" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Package size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  2. Our Products
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '14px' }}>
                ACME Bricks provides information about products including:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
                marginBottom: '16px'
              }}>
                {[
                  'Fly Ash Bricks',
                  'Fly Ash Blocks',
                  'Paver Blocks',
                  'Interlock Bricks',
                  'Solid Blocks',
                  'AAC Blocks'
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
                    <CheckCircle size={15} color="var(--accent, #7ca13a)" />
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ color: '#64748b', fontSize: '13.5px', fontStyle: 'italic', margin: 0 }}>
                Product availability and specifications may vary depending on current production and business requirements.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 3 */}
            <section id="section-3" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Info size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  3. Product Information
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                We make reasonable efforts to ensure that product descriptions, specifications, dimensions, images, and other information published on this website are accurate and up to date.
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Product specifications, dimensions, appearance, availability, and other details may change without prior notice.</li>
                <li>Images displayed on the website may be for illustrative purposes, and the actual product may vary slightly in appearance.</li>
                <li>Customers are advised to contact ACME Bricks to confirm the latest product specifications, availability, pricing, and other details before making a purchase decision.</li>
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
                  4. Product Enquiries
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Visitors may contact ACME Bricks through the enquiry form, telephone, email, WhatsApp, or other contact methods provided on the website.
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', margin: 0 }}>
                <li>Submitting an enquiry does not constitute an order, purchase agreement, or confirmation of product availability.</li>
                <li>Any pricing, quantity, delivery arrangements, payment terms, and other commercial conditions will be discussed and confirmed directly between ACME Bricks and the customer.</li>
              </ul>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 5 */}
            <section id="section-5" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <DollarSign size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  5. Pricing and Quotations
                </h2>
              </div>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', margin: 0 }}>
                <li>Prices may vary based on product type, quantity, specifications, location, transportation, applicable taxes, and other requirements.</li>
                <li>Any price or quotation communicated by ACME Bricks is subject to confirmation and may change unless specifically agreed in writing.</li>
                <li>The website should not be considered a source of final or binding commercial pricing unless expressly stated otherwise.</li>
              </ul>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 6 */}
            <section id="section-6" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <FileText size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  6. Website Content
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                All content provided on this website is intended for general informational and business purposes.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                Although ACME Bricks makes reasonable efforts to maintain accurate information, we do not guarantee that every piece of information will always be complete, current, error-free, or available without interruption.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                ACME Bricks reserves the right to update, modify, remove, or add website content at any time without prior notice.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 7 */}
            <section id="section-7" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Lock size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  7. Intellectual Property
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                The content of this website, including text, product photographs, images, graphics, logos, designs, page layouts, and other materials, is owned by or used by ACME Bricks with appropriate authorization, unless otherwise stated.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                No material from this website may be copied, reproduced, modified, distributed, published, or commercially used without prior written permission from ACME Bricks.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 8 */}
            <section id="section-8" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <ShieldCheck size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  8. Acceptable Use
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                You agree to use this website only for lawful purposes. You must not:
              </p>
              <ul style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', paddingLeft: '20px', margin: 0 }}>
                <li>Attempt to gain unauthorized access to the website.</li>
                <li>Interfere with the website's operation or security.</li>
                <li>Introduce viruses, malware, or harmful code.</li>
                <li>Copy website content for unauthorized commercial purposes.</li>
                <li>Use information from the website for fraudulent or unlawful activities.</li>
                <li>Submit false, misleading, or fraudulent information through an enquiry form.</li>
              </ul>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 9 */}
            <section id="section-9" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <ExternalLink size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  9. Third-Party Links
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                The website may contain links to third-party websites or services, including mapping services and social or communication platforms.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                These links are provided for convenience and informational purposes. ACME Bricks does not control and is not responsible for the content, availability, security, or privacy practices of third-party websites.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 10 */}
            <section id="section-10" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Server size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  10. Website Availability
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                ACME Bricks makes reasonable efforts to keep the website accessible. However, we do not guarantee uninterrupted or error-free availability.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                The website may occasionally be unavailable due to maintenance, technical issues, hosting problems, updates, or circumstances beyond our reasonable control.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 11 */}
            <section id="section-11" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <AlertTriangle size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  11. Limitation of Liability
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                The information available on this website is provided in good faith for general informational purposes.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                To the extent permitted by applicable law, ACME Bricks shall not be liable for losses arising solely from reliance on website information, temporary website unavailability, technical errors, or third-party services linked from the website.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                For any actual purchase or supply of products, the specific commercial terms agreed between ACME Bricks and the customer will apply.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 12 */}
            <section id="section-12" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <RefreshCw size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  12. Changes to These Terms
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                ACME Bricks may update these Terms &amp; Conditions from time to time.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Any revised version will be published on this page with an updated "Last Updated" date.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 13 */}
            <section id="section-13" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Scale size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  13. Governing Law
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '12px' }}>
                These Terms &amp; Conditions shall be governed by and interpreted in accordance with the applicable laws of India.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', margin: 0 }}>
                Any dispute relating to the use of this website shall be subject to the jurisdiction of the appropriate courts having jurisdiction over ACME Bricks, subject to applicable law.
              </p>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0' }} />

            {/* Section 14: Contact Info Card */}
            <section id="section-14" style={{ scrollMarginTop: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(124, 161, 58, 0.12)', color: 'var(--accent, #7ca13a)', padding: '8px', borderRadius: '8px' }}>
                  <Phone size={20} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  14. Contact Us
                </h2>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14.5px', marginBottom: '20px' }}>
                For product enquiries, quotations, specifications, availability, or questions regarding these Terms &amp; Conditions, please contact us.
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
                    Send Direct Enquiry
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
