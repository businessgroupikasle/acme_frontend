import React, { useState } from 'react';
import { Layers, Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onCategorySelect }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    'Fly Ash Bricks',
    'Fly Ash Blocks',
    'Paver Blocks',
    'Interlock Bricks',
    'Solid Blocks',
    'AAC Blocks'
  ];

  const getCategoryPath = (cat) => {
    const catMap = {
      'Fly Ash Bricks': '/fly-ash-bricks/',
      'Fly Ash Blocks': '/fly-ash-blocks/',
      'Paver Blocks': '/paver-blocks/',
      'Interlock Bricks': '/interlock-bricks/',
      'Solid Blocks': '/solid-blocks/',
      'AAC Blocks': '/aac-blocks/'
    };
    return catMap[cat] || '/products/';
  };

  const navigateToSection = (tab, sectionId) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', action: () => navigateToSection('home'), highlight: activeTab === 'home', path: '/' },
    { label: 'About Us', action: () => navigateToSection('about'), highlight: activeTab === 'about', path: '/about/' },
    { label: 'Products', action: () => navigateToSection('products'), highlight: activeTab === 'products', path: '/products/' },
    { label: 'Gallery', action: () => navigateToSection('gallery'), highlight: activeTab === 'gallery', path: '/gallery/' },
    { label: 'Contact Us', action: () => navigateToSection('contact'), highlight: activeTab === 'contact', path: '/contact/' }
  ];

  return (
    <nav className="site-header-navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      transition: 'var(--transition)'
    }}>
      <style>{`
        .nav-dropdown-container:hover .nav-dropdown-menu {
          display: block !important;
          opacity: 1 !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        .dropdown-item-btn:hover {
          background: #f1f5f9 !important;
          color: var(--accent) !important;
        }
        .nav-dropdown-container:hover .dropdown-arrow-icon {
          transform: rotate(180deg) !important;
        }
        @media (max-width: 991px) {
          .site-header-navbar {
            min-height: 84px !important;
          }
          .header-container {
            padding-top: 18px !important;
            padding-bottom: 18px !important;
            min-height: 84px !important;
          }
          .header-logo-img {
            height: 48px !important;
            max-height: 48px !important;
          }
        }
        @media (max-width: 480px) {
          .site-header-navbar {
            min-height: 86px !important;
          }
          .header-container {
            padding-top: 18px !important;
            padding-bottom: 18px !important;
            min-height: 86px !important;
          }
          .header-logo-img {
            height: 48px !important;
            max-height: 48px !important;
          }
        }
      `}</style>
      <div className="container header-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 24px'
      }}>
        {/* Brand Logo */}
        <a 
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection('home');
          }}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
        >
          <img 
            src="/images/logo.webp" 
            alt="ACME Bricks Logo" 
            className="header-logo-img"
            style={{
              height: '46px',
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
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
              ACME<span style={{ color: 'var(--accent)' }}>BRICKS</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navLinks.map((link) => {
            if (link.label === 'Products') {
              return (
                <div key={link.label} className="nav-dropdown-container" style={{ position: 'relative' }}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      link.action();
                    }}
                    style={{
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px',
                      fontWeight: link.highlight ? '700' : '500',
                      color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      padding: '14px 0',
                      transition: 'var(--transition)',
                      borderBottom: link.highlight ? '2px solid var(--accent)' : '2px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    className="nav-link-btn"
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} style={{ opacity: 0.7, transition: 'transform 0.2s ease' }} className="dropdown-arrow-icon" />
                  </a>
                  {/* Dropdown Menu */}
                  <div className="nav-dropdown-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(0)',
                    background: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    minWidth: '170px',
                    padding: '4px 0',
                    zIndex: 200,
                    display: 'none'
                  }}>
                    {categories.map((cat) => (
                      <a
                        key={cat}
                        href={getCategoryPath(cat)}
                        onClick={(e) => {
                          e.preventDefault();
                          if (onCategorySelect) {
                            onCategorySelect(cat);
                          } else {
                            link.action();
                          }
                        }}
                        style={{
                          display: 'block',
                          textDecoration: 'none',
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          outline: 'none',
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          cursor: 'pointer'
                        }}
                        className="dropdown-item-btn"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  link.action();
                }}
                style={{
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  fontWeight: link.highlight ? '700' : '500',
                  color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '6px 0',
                  transition: 'var(--transition)',
                  borderBottom: link.highlight ? '2px solid var(--accent)' : '2px solid transparent'
                }}
                className="nav-link-btn"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Get a Quote Button */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('contact');
            }}
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile Hamburger menu */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'none',
            color: 'var(--text-primary)',
            padding: '6px'
          }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
        }}>
          {navLinks.map((link) => {
            if (link.label === 'Products') {
              return (
                <div key={link.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      link.action();
                    }}
                    style={{
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '8px 0',
                      fontSize: '15px',
                      fontWeight: link.highlight ? '700' : '500',
                      color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      borderBottom: '1px solid #f1f5f9',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} style={{ opacity: 0.6 }} />
                  </a>
                  {/* Indented mobile sub-links */}
                  <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px', borderLeft: '2px solid var(--accent-glow)', marginTop: '4px' }}>
                    {categories.map((cat) => (
                      <a
                        key={cat}
                        href={getCategoryPath(cat)}
                        onClick={(e) => {
                          e.preventDefault();
                          if (onCategorySelect) {
                            onCategorySelect(cat);
                          } else {
                            link.action();
                          }
                          setMobileMenuOpen(false);
                        }}
                        style={{
                          textDecoration: 'none',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          padding: '8px 0',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          width: '100%'
                        }}
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  link.action();
                }}
                style={{
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '8px 0',
                  fontSize: '15px',
                  fontWeight: link.highlight ? '700' : '500',
                  color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f1f5f9',
                  width: '100%'
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('contact');
            }}
            className="btn btn-primary"
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginTop: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </nav>
  );
}
