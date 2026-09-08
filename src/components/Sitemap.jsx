import React, { useState } from 'react';
import { 
  Home, 
  Info, 
  Package, 
  Image as ImageIcon, 
  Calculator, 
  Phone, 
  MapPin, 
  FileCode, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Factory, 
  ExternalLink,
  CheckCircle2,
  FileText,
  Lock,
  AlertTriangle
} from 'lucide-react';

export default function Sitemap({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: <Layers size={20} color="var(--accent, #7ca13a)" />,
      badge: 'Core',
      links: [
        {
          name: 'Home',
          url: '/',
          description: 'Official ACME Bricks homepage featuring company overview, key benefits, and product categories.',
          icon: <Home size={16} />,
          action: () => onNavigate && onNavigate('home')
        },
        {
          name: 'About Us',
          url: '/about/',
          description: 'Company background, mission, vision, manufacturing facility, and quality standards.',
          icon: <Info size={16} />,
          action: () => onNavigate && onNavigate('about')
        },
        {
          name: 'Products Catalog',
          url: '/products/',
          description: 'Full range of eco-friendly bricks, blocks, and interlocking pavers manufactured in Coimbatore.',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products')
        },
        {
          name: 'Gallery',
          url: '/gallery/',
          description: 'High-resolution images of our factory, manufacturing equipment, and finished projects.',
          icon: <ImageIcon size={16} />,
          action: () => onNavigate && onNavigate('gallery')
        },
        {
          name: 'Brick & Block Calculator',
          url: '/calculator/',
          description: 'Interactive construction estimator to calculate bricks, blocks, and mortar volume needed.',
          icon: <Calculator size={16} />,
          action: () => onNavigate && onNavigate('calculator')
        },
        {
          name: 'Contact Us',
          url: '/contact/',
          description: 'Factory location, phone numbers, WhatsApp, map directions, and quote inquiry form.',
          icon: <Phone size={16} />,
          action: () => onNavigate && onNavigate('contact')
        }
      ]
    },
    {
      title: 'Products & Specifications',
      icon: <Package size={20} color="var(--accent, #7ca13a)" />,
      badge: '6 Products',
      links: [
        {
          name: 'Fly Ash Bricks',
          url: '/fly-ash-bricks/',
          description: 'Standard 9x4x3 inch high-density fly ash bricks conforming to IS 12894:2002 standard.',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'Fly Ash Bricks')
        },
        {
          name: 'Fly Ash Blocks',
          url: '/fly-ash-blocks/',
          description: 'Durable masonry blocks sized 230x230x70/75 mm conforming to IS 2185 (Part 1).',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'Fly Ash Blocks')
        },
        {
          name: 'Paver Blocks',
          url: '/paver-blocks/',
          description: '60mm and 80mm heavy-duty decorative paver blocks for driveways, parking, and pathways.',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'Paver Blocks')
        },
        {
          name: 'Interlock Bricks',
          url: '/interlock-bricks/',
          description: 'Self-locking masonry bricks engineered for high structural strength (IS 15658).',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'Interlock Bricks')
        },
        {
          name: 'Solid Blocks',
          url: '/solid-blocks/',
          description: 'Solid concrete building blocks (400x200x150/200mm) for heavy-load bearing walls.',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'Solid Blocks')
        },
        {
          name: 'AAC Blocks',
          url: '/aac-blocks/',
          description: 'Lightweight Autoclaved Aerated Concrete blocks with superior thermal and acoustic insulation.',
          icon: <Package size={16} />,
          action: () => onNavigate && onNavigate('products', null, 'AAC Blocks')
        }
      ]
    },
    {
      title: 'Company Highlights & Sections',
      icon: <Building2 size={20} color="var(--accent, #7ca13a)" />,
      badge: 'Explore',
      links: [
        {
          name: 'Manufacturing Process',
          url: '/about/',
          description: 'Modern automated hydraulic batching, vibro-compaction, and scientific curing process.',
          icon: <Factory size={16} />,
          action: () => onNavigate && onNavigate('about')
        },
        {
          name: 'Quality Assurance & Standards',
          url: '/about/',
          description: 'IS 12894:2002 & IS 2185 compliance with strict compressive and water absorption tests.',
          icon: <ShieldCheck size={16} />,
          action: () => onNavigate && onNavigate('about')
        },
        {
          name: 'Why Choose ACME',
          url: '/about/',
          description: 'Direct factory pricing, on-time delivery across Tamil Nadu & Kerala, high dimensional consistency.',
          icon: <Sparkles size={16} />,
          action: () => onNavigate && onNavigate('about')
        },
        {
          name: 'Client Testimonials & Projects',
          url: '/',
          description: 'Proven track record of supplying builders, contractors, and home builders since 2015.',
          icon: <CheckCircle2 size={16} />,
          action: () => onNavigate && onNavigate('home', 'projects-section')
        }
      ]
    },
    {
      title: 'Legal & Policy Documents',
      icon: <ShieldCheck size={20} color="var(--accent, #7ca13a)" />,
      badge: 'Policies',
      links: [
        {
          name: 'Terms & Conditions',
          url: '/terms-and-conditions/',
          description: 'Terms of website use, commercial enquiry guidelines, acceptable use, and governing laws.',
          icon: <FileText size={16} />,
          action: () => onNavigate && onNavigate('terms')
        },
        {
          name: 'Privacy Policy',
          url: '/privacy-policy/',
          description: 'How ACME Bricks collects, uses, protects personal enquiry data, and customer privacy rights.',
          icon: <Lock size={16} />,
          action: () => onNavigate && onNavigate('privacy')
        }
      ]
    },
    {
      title: 'Technical & Machine Readable Sitemaps',
      icon: <FileCode size={20} color="var(--accent, #7ca13a)" />,
      badge: 'SEO & Robots',
      links: [
        {
          name: 'XML Sitemap (sitemap.xml)',
          url: '/sitemap.xml',
          description: 'Machine-readable XML sitemap formatted for Google, Bing, and search engine indexers.',
          icon: <FileCode size={16} />,
          isExternal: true,
          externalUrl: '/sitemap.xml'
        },
        {
          name: '404 Error Page',
          url: '/404/',
          description: 'Custom Page Not Found error handler with product finder and quick navigation.',
          icon: <AlertTriangle size={16} />,
          action: () => onNavigate && onNavigate('404')
        }
      ]
    }
  ];

  // Filter sections by search query if user types
  const filteredSections = sitemapSections.map(section => {
    const matchingLinks = section.links.filter(link => 
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.url.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...section,
      links: matchingLinks
    };
  }).filter(section => section.links.length > 0);

  return (
    <div style={{ background: '#f8fafc', minHeight: '80vh', paddingBottom: '70px' }}>
      {/* Hero Header */}
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
            ACME Bricks &amp; Blocks Sitemap
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
              onClick={() => onNavigate && onNavigate('home')}
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
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Sitemap</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '40px' }}>
        {/* Search & Filter Toolbar */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '16px 20px',
          border: '1px solid var(--border, #e2e8f0)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '35px'
        }}>
          <div style={{
            position: 'relative',
            flex: '1',
            minWidth: '260px'
          }}>
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8'
              }} 
            />
            <input
              type="text"
              placeholder="Search sitemap pages, products, or sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                background: '#f8fafc'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent, #7ca13a)'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                borderRadius: '8px',
                background: 'rgba(124, 161, 58, 0.1)',
                color: 'var(--accent, #7ca13a)',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(124, 161, 58, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent, #7ca13a)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124, 161, 58, 0.1)';
                e.currentTarget.style.color = 'var(--accent, #7ca13a)';
              }}
            >
              <FileCode size={15} />
              <span>View XML Sitemap</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Sitemap Sections Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '35px'
        }}>
          {filteredSections.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <Search size={40} style={{ color: '#cbd5e1', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                No matching pages found
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>
                We couldn't find any section matching "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  background: 'var(--accent, #7ca13a)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredSections.map((section, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '28px 24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}
              >
                {/* Section Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '16px',
                  marginBottom: '20px',
                  borderBottom: '1px solid #f1f5f9'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(124, 161, 58, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {section.icon}
                    </div>
                    <h2 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0f172a',
                      letterSpacing: '-0.01em',
                      margin: 0
                    }}>
                      {section.title}
                    </h2>
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#64748b',
                    background: '#f1f5f9',
                    padding: '4px 10px',
                    borderRadius: '20px'
                  }}>
                    {section.badge}
                  </span>
                </div>

                {/* Cards Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                  gap: '18px'
                }}>
                  {section.links.map((link, linkIdx) => {
                    const isDirectAction = !link.isExternal;
                    return (
                      <a
                        key={linkIdx}
                        href={link.isExternal ? link.externalUrl : link.url}
                        target={link.isExternal ? '_blank' : '_self'}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(e) => {
                          if (isDirectAction) {
                            e.preventDefault();
                            if (link.action) link.action();
                          }
                        }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '18px',
                          borderRadius: '10px',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'all 0.25s ease',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                        className="sitemap-card-link"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent, #7ca13a)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(124, 161, 58, 0.08)';
                          e.currentTarget.style.background = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = '#f8fafc';
                        }}
                      >
                        <div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '10px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent, #7ca13a)'
                              }}>
                                {link.icon}
                              </div>
                              <span style={{
                                fontSize: '15px',
                                fontWeight: 700,
                                color: '#1e293b'
                              }}>
                                {link.name}
                              </span>
                            </div>
                            <code style={{
                              fontSize: '11px',
                              color: '#64748b',
                              background: '#edf2f7',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontFamily: 'monospace'
                            }}>
                              {link.url}
                            </code>
                          </div>

                          <p style={{
                            fontSize: '12.5px',
                            color: '#64748b',
                            lineHeight: 1.5,
                            margin: 0,
                            marginBottom: '14px'
                          }}>
                            {link.description}
                          </p>
                        </div>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--accent, #7ca13a)',
                          paddingTop: '8px',
                          borderTop: '1px dashed #e2e8f0'
                        }}>
                          <span>Visit page</span>
                          <ArrowRight size={13} style={{ transition: 'transform 0.2s ease' }} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
