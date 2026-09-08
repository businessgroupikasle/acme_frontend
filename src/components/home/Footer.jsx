import React from 'react';
import { Layers, Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about/' },
    { label: 'Products', url: '/products/' },
    { label: 'Projects', url: '/' },
    { label: 'Gallery', url: '/gallery/' },
    { label: 'Contact Us', url: '/contact/' }
  ];

  const productsLinks = [
    { label: 'Fly Ash Bricks', url: '/fly-ash-bricks/' },
    { label: 'Fly Ash Blocks', url: '/fly-ash-blocks/' },
    { label: 'Paver Blocks', url: '/paver-blocks/' },
    { label: 'Interlock Bricks', url: '/interlock-bricks/' },
    { label: 'Solid Blocks', url: '/solid-blocks/' },
    { label: 'AAC Blocks', url: '/aac-blocks/' }
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Columns Grid (4 cols on desktop: Brand | Quick Links | Our Products | Contact) */}
        <div className="footer-columns-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col-brand">
            <div
              onClick={() => onNavigate && onNavigate('home')}
              className="footer-brand-logo-wrap"
              style={{ display: 'flex', alignItems: 'center', marginBottom: '18px', cursor: 'pointer' }}
            >
              <img
                src="/images/logo.webp"
                alt="ACME Bricks Logo"
                style={{
                  height: '42px',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const textLogo = e.target.nextSibling;
                  if (textLogo) textLogo.style.display = 'flex';
                }}
              />
              {/* Fallback Text Logo */}
              <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Layers size={18} color="#fff" />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  ACME<span style={{ color: 'var(--accent)' }}>BRICKS</span>
                </span>
              </div>
            </div>
            <p className="footer-brand-desc">
              ACME Bricks manufactures and supplies quality fly ash bricks, fly ash blocks, paver blocks, interlock blocks, solid blocks and AAC blocks for residential, commercial and industrial construction.
            </p>
            {/* Social handles */}
            <div className="footer-social-wrap">
              <a href="https://www.facebook.com/acmebricks" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/acmeb_ricks" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/919500851880" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-link">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.908 14.058.882 11.43.882c-5.438 0-9.863 4.42-9.867 9.858-.001 1.9.497 3.753 1.44 5.362l-.944 3.447 3.53-.925zm11.367-7.405c-.293-.146-1.737-.857-2.007-.956-.27-.099-.465-.148-.659.146-.195.298-.754.956-.926 1.155-.171.198-.344.223-.637.076-.293-.146-1.24-.457-2.36-1.458-.873-.78-1.463-1.742-1.635-2.04-.171-.297-.018-.459.13-.606.13-.133.293-.347.44-.52.146-.173.196-.297.293-.495.097-.198.05-.371-.025-.52-.075-.148-.659-1.591-.902-2.177-.237-.57-.497-.492-.676-.502-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.742.347-.256.278-.976.953-.976 2.327 0 1.373.999 2.701 1.139 2.888.14.188 1.966 3.003 4.764 4.21.665.286 1.184.457 1.587.585.67.213 1.28.183 1.762.112.537-.08 1.653-.675 1.884-1.328.23-6.53.23-1.213.16-1.328-.07-.113-.264-.178-.556-.328z" />
              </svg>
            </a>
            <a href="https://www.google.com/maps/place/Acme+Bricks+%26+Blocks/@11.1045893,77.0926709,1076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8f9492c15ce3d:0x8a8f2a8da41428b3!8m2!3d11.1045893!4d77.0926709!16s%2Fg%2F11sg_gx3vd?entry=ttu" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="footer-social-link">
              <MapPin size={15} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col-links">
          <h4 className="footer-col-title">
            QUICK LINKS
          </h4>
          <div className="footer-links-list">
            {quickLinks.map((link) => {
              const handleClick = (e) => {
                e.preventDefault();
                if (!onNavigate) return;
                if (link.label === 'Home') onNavigate('home');
                else if (link.label === 'About Us') onNavigate('about');
                else if (link.label === 'Products') onNavigate('products');
                else if (link.label === 'Projects') onNavigate('home', 'projects-section');
                else if (link.label === 'Gallery') onNavigate('gallery');
                else if (link.label === 'Contact Us') onNavigate('contact');
              };
              return (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={handleClick}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 3: Products */}
        <div className="footer-col-products">
          <h4 className="footer-col-title">
            OUR PRODUCTS
          </h4>
          <div className="footer-links-list">
            {productsLinks.map((link) => {
              const handleClick = (e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('products', null, link.label);
                }
              };
              return (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={handleClick}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col-contact">
          <h4 className="footer-col-title">
            CONTACT INFO
          </h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" />
              <a
                href="https://www.google.com/maps/place/Acme+Bricks+%26+Blocks/@11.1045893,77.0926709,1076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8f9492c15ce3d:0x8a8f2a8da41428b3!8m2!3d11.1045893!4d77.0926709!16s%2Fg%2F11sg_gx3vd?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link footer-address-link"
              >
                ACME Bricks,<br />
                D No 1, SF NO 517/A,<br />
                Thennampalayam Road, Serayampalayam,<br />
                Vellanaipatti, Coimbatore - 641048
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:+919500851880" className="footer-contact-link">+91 95008 51880</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--accent)" className="footer-contact-icon">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.908 14.058.882 11.43.882c-5.438 0-9.863 4.42-9.867 9.858-.001 1.9.497 3.753 1.44 5.362l-.944 3.447 3.53-.925zm11.367-7.405c-.293-.146-1.737-.857-2.007-.956-.27-.099-.465-.148-.659.146-.195.298-.754.956-.926 1.155-.171.198-.344.223-.637.076-.293-.146-1.24-.457-2.36-1.458-.873-.78-1.463-1.742-1.635-2.04-.171-.297-.018-.459.13-.606.13-.133.293-.347.44-.52.146-.173.196-.297.293-.495.097-.198.05-.371-.025-.52-.075-.148-.659-1.591-.902-2.177-.237-.57-.497-.492-.676-.502-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.742.347-.256.278-.976.953-.976 2.327 0 1.373.999 2.701 1.139 2.888.14.188 1.966 3.003 4.764 4.21.665.286 1.184.457 1.587.585.67.213 1.28.183 1.762.112.537-.08 1.653-.675 1.884-1.328.23-6.53.23-1.213.16-1.328-.07-.113-.264-.178-.556-.328z" />
              </svg>
              <a href="https://wa.me/919500851880" target="_blank" rel="noopener noreferrer" className="footer-contact-link">+91 95008 51880 (WhatsApp)</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="footer-contact-icon" />
              <a href="mailto:info@acmebricks.in" className="footer-contact-link">info@acmebricks.in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="footer-bottom-bar">
        <span className="footer-copyright">© 2026 ACME Bricks. All Rights Reserved.</span>
        <span className="footer-credits">
          Crafted and Maintained by{' '}
          <a
            href="https://ikasleinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-agency-link"
          >
            Ikaslé Business Group
          </a>
        </span>
        <div className="footer-bottom-links">
          <a
            href="/privacy-policy/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('privacy');
            }}
            className="footer-bottom-link"
          >
            Privacy Policy
          </a>
          <span style={{ color: '#475569' }}>•</span>
          <a
            href="/terms-and-conditions/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('terms');
            }}
            className="footer-bottom-link"
          >
            Terms &amp; Conditions
          </a>
          <span style={{ color: '#475569' }}>•</span>
          <a
            href="/sitemap/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('sitemap');
            }}
            className="footer-bottom-link"
          >
            Sitemap
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}
