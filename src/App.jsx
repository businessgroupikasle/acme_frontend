import React, { useState, useEffect } from 'react';
import TopBar from './components/home/TopBar.jsx';
import Header from './components/home/Header.jsx';
import HeroSection from './components/home/HeroSection.jsx';
import PartnerLogos from './components/home/PartnerLogos.jsx';
import AboutUs from './components/home/AboutUs.jsx';
import ProductCategories from './components/home/ProductCategories.jsx';
import WhyChooseUs from './components/home/WhyChooseUs.jsx';
import ManufacturingProcess from './components/home/ManufacturingProcess.jsx';
import FeaturedProductsSection from './components/home/FeaturedProductsSection.jsx';
import ProjectsTestimonials from './components/home/ProjectsTestimonials.jsx';
import CTASection from './components/home/CTASection.jsx';
import ContactForm from './components/ContactForm.jsx';
import BrickCalculator from './components/BrickCalculator.jsx';
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/home/Footer.jsx';
import AboutCompany from './components/about/AboutCompany.jsx';
import AboutJourney from './components/about/AboutJourney.jsx';
import AboutMissionVision from './components/about/AboutMissionVision.jsx';
import AboutWhyChoose from './components/about/AboutWhyChoose.jsx';
import AboutCredentials from './components/about/AboutCredentials.jsx';
import AboutCTA from './components/about/AboutCTA.jsx';
import AboutHero from './components/about/AboutHero.jsx';
import ProductsHero from './components/products/ProductsHero.jsx';
import ProductsSidebar from './components/products/ProductsSidebar.jsx';
import ProductsGrid from './components/products/ProductsGrid.jsx';
import ProductsTrustBar from './components/products/ProductsTrustBar.jsx';
import ProductsCTA from './components/products/ProductsCTA.jsx';
import ProductDetailsBreadcrumb from './components/products/ProductDetailsBreadcrumb.jsx';
import ProductDetailsMain from './components/products/ProductDetailsMain.jsx';
import ProductDetailsTabs from './components/products/ProductDetailsTabs.jsx';
import ProductDetailsRelated from './components/products/ProductDetailsRelated.jsx';
import ProductDetailsCTA from './components/products/ProductDetailsCTA.jsx';
import ContactHero from './components/contact/ContactHero.jsx';
import ContactMain from './components/contact/ContactMain.jsx';
import ContactMap from './components/contact/ContactMap.jsx';
import Gallery from './components/Gallery.jsx';
import Sitemap from './components/Sitemap.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import NotFound from './components/NotFound.jsx';
import FloatingContactWidget from './components/FloatingContactWidget.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Fallback seed catalog in case backend isn't loaded/running yet
const MOCK_CATALOG = [
  {
    "id": "1",
    "name": "Fly Ash Bricks",
    "type": "Fly Ash Bricks",
    "price": 1.25,
    "dimensions": { "length": 230, "width": 100, "height": 75 },
    "strength": "9.15-10.15",
    "application": ["residential", "commercial"],
    "characteristics": ["Size: 9 x 4 x 3 inch", "Compressive Strength: 9.15 - 10.15 N/mm²", "Indian Standard: IS 12894:2002", "Density: Approx. 1700–1850 kg/m³", "Water Absorption: <10% (Conforms to IS 12894)"],
    "image": "/images/products/flyash-bricks.png",
    "description": "ACME Fly Ash Bricks are manufactured using carefully selected fly ash, cement, sand and water to deliver strong, durable and dimensionally consistent building materials. Designed as an eco-friendly alternative to conventional clay bricks, our fly ash bricks offer excellent strength, low water absorption and a smooth, uniform finish.\n\nManufactured at our facility in Coimbatore, Tamil Nadu, ACME Fly Ash Bricks are suitable for residential, commercial and industrial construction projects across Coimbatore, Tamil Nadu and Kerala.",
    "stock": 25000,
    "popularity": 95
  },
  {
    "id": "2",
    "name": "Fly Ash Blocks",
    "type": "Fly Ash Blocks",
    "price": 6.80,
    "dimensions": { "length": 230, "width": 230, "height": 75 },
    "strength": "3.5-7.0",
    "application": ["infrastructure", "industrial", "residential", "commercial"],
    "characteristics": ["Size: 230 x 230 x 70/75 mm", "Compressive Strength: 3.5 - 7.0 N/mm²", "Indian Standard: IS 2185 (Part 1)", "Density: Approx. 1,600 - 1,850 kg/m³", "Water Absorption: <10%"],
    "image": "/images/products/ash-blocks.png",
    "description": "ACME Fly Ash Blocks are manufactured using quality-controlled materials to provide a durable and efficient solution for modern masonry construction. Designed for consistent dimensions, good strength and reliable performance, these blocks are suitable for residential, commercial and industrial building projects.\n\nOur fly ash blocks in Coimbatore are manufactured with a focus on dimensional accuracy, durability and efficient construction. They provide a practical alternative for wall construction and are supplied to projects across Coimbatore, Tamil Nadu and Kerala.",
    "stock": 8000,
    "popularity": 80
  },
  {
    "id": "3",
    "name": "Paver Blocks",
    "type": "Paver Blocks",
    "price": 3.80,
    "dimensions": { "length": 230, "width": 230, "height": 60 },
    "strength": "5.5-11.77",
    "application": ["residential", "infrastructure", "commercial"],
    "characteristics": ["Thickness Options: 60 mm, 80 mm", "Material: High-quality cement, pigments", "Manufacturing: Vibrocompaction and pressing", "Key Benefits: Versatile, Durable, Slip-Resistant"],
    "image": "/images/products/paver-block.png",
    "description": "ACME Paver Blocks are designed to provide a strong, attractive and practical surface solution for residential, commercial and infrastructure applications. Manufactured using quality cement, aggregates and colour pigments, our paver blocks offer durability, consistent dimensions and a range of applications.\n\nOur paver blocks in Coimbatore are suitable for driveways, parking areas, pathways, gardens, commercial spaces and other outdoor surfaces. We supply paving products across Coimbatore, Tamil Nadu and Kerala.",
    "stock": 3500,
    "popularity": 92
  },
  {
    "id": "4",
    "name": "Interlock Bricks",
    "type": "Interlock Bricks",
    "price": 5.50,
    "dimensions": { "length": 230, "width": 230, "height": 115 },
    "strength": "5.5-11.77",
    "application": ["infrastructure", "industrial", "residential", "commercial"],
    "characteristics": ["Size: 9\"x9\"x4.5\", 12\"x4\"x2\", 9\"x3\"x2\"", "Compressive Strength: 5.5 - 11.77 N/mm²", "Indian Standard: IS 15658", "Density: Approx. 1,600 kg/m³", "Water Absorption: 06% to 20%"],
    "image": "/images/products/interlock.png",
    "description": "ACME Interlock Bricks are designed to create strong, stable and visually appealing paved surfaces. Their interlocking design helps individual units work together to form a durable surface suitable for residential, commercial and outdoor applications.\n\nOur interlock bricks in Coimbatore are manufactured with consistent dimensions and are suitable for driveways, pathways, parking areas, landscaping and other paving requirements. We supply interlock paving products across Coimbatore, Tamil Nadu and Kerala.",
    "stock": 1200,
    "popularity": 85
  },
  {
    "id": "5",
    "name": "Solid Blocks",
    "type": "Solid Blocks",
    "price": 2.10,
    "dimensions": { "length": 400, "width": 200, "height": 200 },
    "strength": "4.0-5.0",
    "application": ["commercial", "industrial", "residential"],
    "characteristics": ["Size Options: 400x200x150/100/200/230 mm", "Compressive Strength: 4.0 - 5.0 N/mm²", "Indian Standard: IS 2185", "Density: Approx. >1,800 kg/m³", "Water Absorption: ~90 g/(m²·s⁰·⁵)"],
    "image": "/images/products/solid-blocks.png",
    "description": "ACME Solid Blocks are manufactured to provide strong and dependable masonry solutions for residential, commercial and industrial construction. With consistent dimensions and a solid concrete structure, these blocks are suitable for wall construction and other building applications where strength and durability are important.\n\nOur solid blocks in Coimbatore are available in multiple size options to suit different construction requirements. We supply solid concrete blocks across Coimbatore, Tamil Nadu and Kerala for builders, contractors and construction projects.",
    "stock": 14000,
    "popularity": 88
  },
  {
    "id": "6",
    "name": "AAC Blocks",
    "type": "AAC Blocks",
    "price": 4.25,
    "dimensions": { "length": 600, "width": 200, "height": 200 },
    "strength": "3.0-4.5",
    "application": ["residential", "commercial"],
    "characteristics": ["Size Options: 600 x 200 x 100/150/200/230 mm", "Compressive Strength: 3.0 - 4.5 N/mm²", "Indian Standard: IS 2185", "Density: Approx. 550 - 650 kg/m³", "Water Absorption: <15%"],
    "image": "/images/products/aac-blocks.png",
    "description": "ACME AAC Blocks are lightweight building blocks designed for efficient wall construction. Their cellular structure provides lower weight compared with conventional dense masonry materials while also offering useful thermal insulation properties.\n\nOur AAC blocks in Coimbatore are suitable for residential, commercial and modern building projects where lightweight construction, thermal comfort and construction efficiency are important. We supply AAC blocks for projects across Coimbatore, Tamil Nadu and Kerala.",
    "stock": 6000,
    "popularity": 90
  }
];

// SEO Friendly URL Slugs Configuration
const PRODUCT_SLUGS = {
  '1': '/fly-ash-bricks/',
  '2': '/fly-ash-blocks/',
  '3': '/paver-blocks/',
  '4': '/interlock-bricks/',
  '5': '/solid-blocks/',
  '6': '/aac-blocks/'
};

const SLUG_TO_PRODUCT_ID = {
  'fly-ash-bricks': '1',
  'fly-ash-blocks': '2',
  'paver-blocks': '3',
  'interlock-bricks': '4',
  'interlocking-bricks': '4',
  'solid-blocks': '5',
  'aac-blocks': '6'
};

const PAGE_SLUGS = {
  'home': '/',
  'about': '/about/',
  'products': '/products/',
  'gallery': '/gallery/',
  'contact': '/contact/',
  'calculator': '/calculator/',
  'sitemap': '/sitemap/',
  'terms': '/terms-and-conditions/',
  'privacy': '/privacy-policy/',
  'admin': '/admin/',
  '404': '/404/'
};

const getRouteFromUrl = (catalog = MOCK_CATALOG) => {
  if (typeof window === 'undefined') return { tab: 'home', product: null };
  
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  // 1. Direct Product Slug match (e.g. /fly-ash-bricks/ or fly-ash-bricks)
  if (SLUG_TO_PRODUCT_ID[pathname]) {
    const prodId = SLUG_TO_PRODUCT_ID[pathname];
    const prod = catalog.find(p => String(p.id) === String(prodId)) || null;
    if (prod) {
      return { tab: 'product-details', product: prod };
    }
  }

  // 2. Direct Page Slug match
  if (pathname === '' || pathname === 'home') {
    return { tab: 'home', product: null };
  }
  if (pathname === 'about' || pathname === 'about-us') {
    return { tab: 'about', product: null };
  }
  if (pathname === 'products') {
    return { tab: 'products', product: null };
  }
  if (pathname === 'gallery') {
    return { tab: 'gallery', product: null };
  }
  if (pathname === 'contact' || pathname === 'contact-us') {
    return { tab: 'contact', product: null };
  }
  if (pathname === 'calculator') {
    return { tab: 'calculator', product: null };
  }
  if (pathname === 'sitemap') {
    return { tab: 'sitemap', product: null };
  }
  if (pathname === 'terms' || pathname === 'terms-and-conditions' || pathname === 'terms-conditions' || pathname === 'terms-of-service') {
    return { tab: 'terms', product: null };
  }
  if (pathname === 'privacy' || pathname === 'privacy-policy') {
    return { tab: 'privacy', product: null };
  }
  if (pathname === 'admin') {
    return { tab: 'admin', product: null };
  }
  if (pathname === '404' || pathname === 'not-found' || pathname === 'page-not-found') {
    return { tab: '404', product: null };
  }

  // 3. Fallback for query parameters if someone accesses via old link (?page=...)
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  if (page === 'product' && params.get('id')) {
    const prodId = params.get('id');
    const prod = catalog.find(p => String(p.id) === String(prodId)) || null;
    if (prod) {
      return { tab: 'product-details', product: prod };
    }
    return { tab: '404', product: null };
  }
  if (page && ['home', 'about', 'products', 'gallery', 'contact', 'calculator', 'sitemap', 'terms', 'privacy', 'admin'].includes(page)) {
    return { tab: page, product: null };
  }
  if (page === '404') {
    return { tab: '404', product: null };
  }

  // Unrecognized route -> 404 Page Not Found
  return { tab: '404', product: null };
};

export default function App() {
  const [products, setProducts] = useState(MOCK_CATALOG);
  
  // Initialize route from current URL path
  const initialRoute = getRouteFromUrl(MOCK_CATALOG);
  const [activeTab, setActiveTab] = useState(initialRoute.tab);
  const [selectedProductDetail, setSelectedProductDetail] = useState(initialRoute.product);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [calculatorPreselect, setCalculatorPreselect] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOption, setSortOption] = useState('latest');

  // Effect to sync state changes to clean SEO URL paths (No query parameters)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let targetPath = '/';
    if (activeTab === 'home') {
      targetPath = '/';
    } else if (activeTab === 'product-details' && selectedProductDetail) {
      targetPath = PRODUCT_SLUGS[selectedProductDetail.id] || `/products/`;
    } else if (activeTab === '404') {
      targetPath = window.location.pathname && window.location.pathname !== '/' ? window.location.pathname : '/404/';
    } else if (PAGE_SLUGS[activeTab]) {
      targetPath = PAGE_SLUGS[activeTab];
    } else {
      targetPath = `/${activeTab}/`;
    }
    
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ activeTab, productId: selectedProductDetail?.id }, '', targetPath);
    }
  }, [activeTab, selectedProductDetail]);

  // Effect to handle browser back/forward buttons (popstate changes)
  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromUrl(products);
      if (route.tab === 'product-details' && route.product) {
        setSelectedProductDetail(route.product);
        setActiveTab('product-details');
      } else {
        setSelectedProductDetail(null);
        setActiveTab(route.tab);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [products]);

  // Effect for Dynamic SEO Metadata & JSON-LD Structured Data
  useEffect(() => {
    // 1. Define metadata values based on current active tab and product details
    let seoTitle = 'Fly Ash Bricks, Paver & Interlocking Bricks Manufacturer in Coimbatore | ACME';
    let seoDescription = 'ACME Bricks manufactures fly ash bricks, paver blocks and interlocking bricks in Coimbatore, supplying quality construction materials across Tamil Nadu and Kerala.';
    let seoKeywords = 'bricks manufacturer in Coimbatore, blocks manufacturer in Coimbatore, fly ash bricks Coimbatore, paver blocks Coimbatore, interlocking bricks Coimbatore, construction material supplier Coimbatore';
    let canonicalUrl = 'https://acmebricks.in/';
    let schemaMarkup = null;

    const baseBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ACME Bricks",
      "image": "https://acmebricks.in/images/about.png",
      "@id": "https://acmebricks.in/#localbusiness",
      "url": "https://acmebricks.in/",
      "telephone": "+919500851880",
      "email": "info@acmebricks.in",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "D No 1, SF NO 517/A, Thennampalayam Road, Serayampalayam, Vellanaipatti",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641048",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.1045849,
        "longitude": 77.0926739
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/acmebricks",
        "https://www.instagram.com/acmeb_ricks"
      ]
    };

    if (activeTab === 'home') {
      seoTitle = 'Fly Ash Bricks, Paver & Interlocking Bricks Manufacturer in Coimbatore | ACME';
      seoDescription = 'ACME Bricks manufactures fly ash bricks, paver blocks and interlocking bricks in Coimbatore, supplying quality construction materials across Tamil Nadu and Kerala.';
      seoKeywords = 'bricks manufacturer in Coimbatore, blocks manufacturer in Coimbatore, fly ash bricks Coimbatore, paver blocks Coimbatore, interlocking bricks Coimbatore, construction material supplier Coimbatore';
      canonicalUrl = 'https://acmebricks.in/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://acmebricks.in/#organization",
            "name": "ACME Bricks",
            "url": "https://acmebricks.in/",
            "logo": {
              "@type": "ImageObject",
              "@id": "https://acmebricks.in/#logo",
              "url": "https://acmebricks.in/images/logo.webp",
              "caption": "ACME Bricks"
            },
            "image": {
              "@id": "https://acmebricks.in/#logo"
            }
          },
          baseBusinessSchema
        ]
      };
    } else if (activeTab === 'about') {
      seoTitle = 'About ACME Bricks & Blocks | Construction Materials Manufacturer';
      seoDescription = 'Learn about ACME Bricks & Blocks, a Coimbatore-based manufacturer and supplier of fly ash bricks, paver blocks, interlocking bricks and other construction materials since 2015.';
      seoKeywords = 'About ACME Bricks, ACME Coimbatore Manufacturer, brick manufacturer Coimbatore, construction materials supplier Tamil Nadu, established 2015 bricks company';
      canonicalUrl = 'https://acmebricks.in/about/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://acmebricks.in/#about",
        "url": "https://acmebricks.in/about/",
        "name": "About ACME Bricks & Blocks",
        "description": seoDescription,
        "mainEntity": baseBusinessSchema
      };
    } else if (activeTab === 'products') {
      seoTitle = 'Bricks & Blocks | Fly Ash, Paver, Interlock & AAC | ACME Bricks';
      seoDescription = 'Explore ACME Bricks\' range of fly ash bricks, fly ash blocks, paver blocks, interlocking bricks, solid blocks and AAC blocks manufactured and supplied from Coimbatore.';
      seoKeywords = 'bricks manufacturer in Coimbatore, blocks manufacturer in Coimbatore, construction material supplier Coimbatore, fly ash bricks, paver blocks, interlock bricks, AAC blocks, solid blocks';
      canonicalUrl = 'https://acmebricks.in/products/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://acmebricks.in/#products",
        "url": "https://acmebricks.in/products/",
        "name": "ACME Bricks Product Catalog",
        "description": seoDescription
      };
    } else if (activeTab === 'product-details' && selectedProductDetail) {
      const prod = selectedProductDetail;
      const lower = (prod.name || '').toLowerCase();
      
      if (lower.includes('fly ash brick')) {
        seoTitle = 'Fly Ash Bricks Manufacturer in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks manufactures high-strength fly ash bricks in Coimbatore for residential, commercial and industrial construction. Bulk supply available across Tamil Nadu and Kerala.';
        seoKeywords = 'fly ash bricks in Coimbatore, fly ash brick supplier Coimbatore, fly ash brick manufacturers Tamil Nadu, fly ash bricks supplier, fly ash bricks price Coimbatore, eco friendly bricks Coimbatore';
        canonicalUrl = 'https://acmebricks.in/fly-ash-bricks/';
      } else if (lower.includes('fly ash block')) {
        seoTitle = 'Fly Ash Blocks Manufacturer in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks manufactures and supplies durable fly ash blocks in Coimbatore for masonry and building construction. Bulk orders available across Tamil Nadu and Kerala.';
        seoKeywords = 'fly ash blocks in Coimbatore, fly ash block supplier Coimbatore, fly ash blocks manufacturer Tamil Nadu, fly ash concrete blocks, fly ash blocks supplier';
        canonicalUrl = 'https://acmebricks.in/fly-ash-blocks/';
      } else if (lower.includes('paver')) {
        seoTitle = 'Paver Blocks Manufacturer in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks manufactures durable paver blocks in Coimbatore for driveways, pathways, parking areas and landscaping. Bulk supply available across Tamil Nadu and Kerala.';
        seoKeywords = 'paver blocks in Coimbatore, paver block supplier Coimbatore, paver block manufacturers Tamil Nadu, concrete paver blocks Coimbatore, interlock paver blocks, paver blocks price Coimbatore, driveway paver blocks';
        canonicalUrl = 'https://acmebricks.in/paver-blocks/';
      } else if (lower.includes('interlock')) {
        seoTitle = 'Interlock Bricks Manufacturer in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks manufactures interlock bricks in Coimbatore for durable construction and masonry applications. Quality products and bulk supply across Tamil Nadu and Kerala.';
        seoKeywords = 'interlock bricks Coimbatore, interlocking bricks supplier Coimbatore, interlock bricks manufacturer Tamil Nadu, interlock blocks Coimbatore, interlocking blocks, interlock bricks price Coimbatore';
        canonicalUrl = 'https://acmebricks.in/interlock-bricks/';
      } else if (lower.includes('solid')) {
        seoTitle = 'Solid Concrete Blocks Manufacturer in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks manufactures solid concrete blocks in Coimbatore for residential, commercial and industrial construction. Durable blocks available for bulk orders.';
        seoKeywords = 'solid blocks Coimbatore, solid concrete blocks Coimbatore, solid block supplier Coimbatore, concrete blocks manufacturer Tamil Nadu, solid blocks for construction';
        canonicalUrl = 'https://acmebricks.in/solid-blocks/';
      } else if (lower.includes('aac')) {
        seoTitle = 'AAC Blocks Supplier in Coimbatore | ACME Bricks';
        seoDescription = 'ACME Bricks supplies lightweight AAC blocks in Coimbatore for residential, commercial and industrial construction. Enquire for quality products and bulk supply.';
        seoKeywords = 'AAC blocks Coimbatore, AAC block supplier Coimbatore, AAC blocks Tamil Nadu, lightweight concrete blocks, AAC block supplier';
        canonicalUrl = 'https://acmebricks.in/aac-blocks/';
      } else {
        seoTitle = `${prod.name} Manufacturer in Coimbatore | ACME Bricks`;
        seoDescription = `${prod.description} High compressive strength of ${prod.strength} N/mm². Manufactured in Coimbatore by ACME Bricks.`;
        seoKeywords = `${prod.name}, ${prod.type}, ${prod.name} Coimbatore, ${prod.name} supplier`;
        canonicalUrl = `https://acmebricks.in/products/?id=${prod.id}`;
      }
      
      schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://acmebricks.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://acmebricks.in/products/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": prod.name,
                "item": canonicalUrl
              }
            ]
          },
          {
            "@type": "Product",
            "@id": `${canonicalUrl}#product`,
            "name": prod.name,
            "image": `https://acmebricks.in${prod.image || '/images/products/flyash-bricks.png'}`,
            "description": prod.description,
            "sku": `PROD-00${prod.id}`,
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": prod.price,
              "highPrice": prod.price * 1.5,
              "offerCount": "1",
              "price": prod.price,
              "priceValidUntil": "2027-12-31",
              "availability": "https://schema.org/InStock",
              "url": canonicalUrl
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Compressive Strength",
                "value": `${prod.strength} N/mm²`
              },
              {
                "@type": "PropertyValue",
                "name": "Dimensions",
                "value": `${prod.dimensions.length}x${prod.dimensions.width}x${prod.dimensions.height} mm`
              }
            ],
            "brand": {
              "@type": "Brand",
              "name": "ACME Bricks"
            }
          }
        ]
      };
    } else if (activeTab === 'calculator') {
      seoTitle = 'Brick & Block Estimator Calculator | ACME Bricks';
      seoDescription = 'Estimate the number of bricks, blocks, and mortar volume needed for your construction projects with our easy-to-use brick calculator.';
      seoKeywords = 'brick calculator, concrete block estimator, calculate bricks required, mortar estimator, wall area calculator';
      canonicalUrl = 'https://acmebricks.in/?page=calculator';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": "https://acmebricks.in/#calculator",
        "url": "https://acmebricks.in/?page=calculator",
        "name": "ACME Brick Calculator",
        "applicationCategory": "ConstructionCalculator",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "description": seoDescription
      };
    } else if (activeTab === 'gallery') {
      seoTitle = 'Bricks & Blocks Gallery | Fly Ash, Paver & Interlock | ACME Bricks';
      seoDescription = 'View ACME Bricks\' product gallery featuring fly ash bricks, fly ash blocks, paver blocks, interlocking bricks, solid blocks and AAC blocks manufactured in Coimbatore.';
      seoKeywords = 'Product Gallery ACME, Fly ash bricks gallery, paver blocks pictures, interlock bricks photos, Coimbatore bricks project gallery';
      canonicalUrl = 'https://acmebricks.in/gallery/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "@id": "https://acmebricks.in/#gallery",
        "url": "https://acmebricks.in/gallery/",
        "name": "ACME Bricks Project Gallery",
        "description": seoDescription
      };
    } else if (activeTab === 'contact') {
      seoTitle = 'Contact ACME Bricks & Blocks | Coimbatore';
      seoDescription = 'Contact ACME Bricks & Blocks in Coimbatore for fly ash bricks, paver blocks, interlocking bricks, fly ash blocks, solid blocks and AAC blocks. Enquire for bulk orders.';
      seoKeywords = 'Contact ACME Bricks, ACME bricks Coimbatore, bricks manufacturer contact, paver blocks Coimbatore inquiry, fly ash bricks quote';
      canonicalUrl = 'https://acmebricks.in/contact/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://acmebricks.in/#contact",
        "url": "https://acmebricks.in/contact/",
        "name": "Contact ACME Bricks & Blocks",
        "description": seoDescription,
        "mainEntity": baseBusinessSchema
      };
    } else if (activeTab === 'sitemap') {
      seoTitle = 'Sitemap | ACME Bricks & Blocks Coimbatore';
      seoDescription = 'Explore the complete sitemap of ACME Bricks & Blocks. Find links to all pages, products, calculators, specifications, and contact details.';
      seoKeywords = 'ACME Bricks sitemap, site index, brick manufacturer sitemap Coimbatore, products catalog index';
      canonicalUrl = 'https://acmebricks.in/sitemap/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://acmebricks.in/#sitemap",
        "url": "https://acmebricks.in/sitemap/",
        "name": "ACME Bricks Sitemap",
        "description": seoDescription
      };
    } else if (activeTab === 'terms') {
      seoTitle = 'Terms & Conditions | ACME Bricks & Blocks Coimbatore';
      seoDescription = 'Review the official Terms & Conditions for ACME Bricks & Blocks website, product enquiry procedures, intellectual property and commercial policies.';
      seoKeywords = 'Terms and Conditions, ACME Bricks terms, product enquiry terms, Coimbatore building materials supplier terms';
      canonicalUrl = 'https://acmebricks.in/terms-and-conditions/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://acmebricks.in/#terms",
        "url": "https://acmebricks.in/terms-and-conditions/",
        "name": "Terms & Conditions - ACME Bricks",
        "description": seoDescription,
        "mainEntity": baseBusinessSchema
      };
    } else if (activeTab === 'privacy') {
      seoTitle = 'Privacy Policy | ACME Bricks & Blocks Coimbatore';
      seoDescription = 'Read the Privacy Policy of ACME Bricks & Blocks. Learn how we handle product enquiries, data security, user rights, and privacy protection.';
      seoKeywords = 'Privacy Policy, ACME Bricks privacy, data protection, customer enquiry privacy, Coimbatore bricks manufacturer privacy';
      canonicalUrl = 'https://acmebricks.in/privacy-policy/';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://acmebricks.in/#privacy",
        "url": "https://acmebricks.in/privacy-policy/",
        "name": "Privacy Policy - ACME Bricks",
        "description": seoDescription,
        "mainEntity": baseBusinessSchema
      };
    } else if (activeTab === '404') {
      seoTitle = '404 - Page Not Found | ACME Bricks & Blocks Coimbatore';
      seoDescription = 'The page you are looking for does not exist or has been moved. Explore ACME Bricks products, brick calculator, gallery, and construction materials in Coimbatore.';
      seoKeywords = '404 not found, ACME Bricks, construction materials Coimbatore';
      canonicalUrl = 'https://acmebricks.in/404/';
      schemaMarkup = null;
    }

    // 2. Update Document Head Title
    document.title = seoTitle;

    // 3. Update Meta Description Tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seoDescription);

    // 4. Update Meta Keywords Tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoKeywords);

    // Update Robots Meta Tag (noindex for 404)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', activeTab === '404' ? 'noindex, follow' : 'index, follow');

    // 5. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. Update Open Graph / Twitter Tags
    const updateMetaTag = (property, value, attribute = 'property') => {
      let el = document.querySelector(`meta[${attribute}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    updateMetaTag('og:title', seoTitle);
    updateMetaTag('og:description', seoDescription);
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('twitter:title', seoTitle);
    updateMetaTag('twitter:description', seoDescription);
    updateMetaTag('twitter:url', canonicalUrl);

    if (activeTab === 'product-details' && selectedProductDetail) {
      const prod = selectedProductDetail;
      const imageUrl = `https://acmebricks.in${prod.image || '/images/products/flyash-bricks.png'}`;
      updateMetaTag('og:image', imageUrl);
      updateMetaTag('twitter:image', imageUrl);
    } else {
      updateMetaTag('og:image', 'https://acmebricks.in/images/about.png');
      updateMetaTag('twitter:image', 'https://acmebricks.in/images/about.png');
    }

    // 7. Inject JSON-LD Schema
    let schemaScript = document.getElementById('seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'seo-schema');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    
    if (schemaMarkup) {
      schemaScript.textContent = JSON.stringify(schemaMarkup, null, 2);
    } else {
      schemaScript.textContent = '';
    }
  }, [activeTab, selectedProductDetail]);
  

  const handleViewDetails = (product) => {
    setSelectedProductDetail(product);
    setActiveTab('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryName) => {
    if (!categoryName) {
      setSelectedCategory(null);
      return;
    }
    const matchedProduct = products.find(p => p.type.toLowerCase().includes(categoryName.toLowerCase()) || p.name.toLowerCase().includes(categoryName.toLowerCase()));
    if (matchedProduct) {
      setSelectedProductDetail(matchedProduct);
      setActiveTab('product-details');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSelectedCategory(categoryName);
      setActiveTab('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRedirectToContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterToggle = (filterId) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId]
    }));
  };

  const handleResetFilters = () => {
    setActiveFilters({});
    setSelectedCategory(null);
  };

  const API_URL = window.location.hostname === 'localhost' ? '' : (import.meta.env.VITE_API_URL || '');

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      if (!API_URL && window.location.hostname === 'localhost') {
        // Use static catalog for local development
        setProducts(MOCK_CATALOG);
        setLoading(false);
        return;
      }
      const res = await fetch(`${API_URL}/api/products`);
      if (!res.ok) {
        throw new Error('API server returned status ' + res.status);
      }
      const data = await res.json();
      if (data && data.status === 'success' && Array.isArray(data.data)) {
        const allowedCategories = [
          'Fly Ash Bricks',
          'Fly Ash Blocks',
          'Paver Blocks',
          'Interlock Bricks',
          'Solid Blocks',
          'AAC Blocks'
        ];
        const filtered = data.data.filter(p => allowedCategories.includes(p.type));
        if (filtered.length > 0) {
          setProducts(filtered);
        }
      }
    } catch (err) {
      // Quietly retain static mock catalog
      setProducts(prev => {
        const allowedCategories = [
          'Fly Ash Bricks',
          'Fly Ash Blocks',
          'Paver Blocks',
          'Interlock Bricks',
          'Solid Blocks',
          'AAC Blocks'
        ];
        const base = prev.length ? prev : MOCK_CATALOG;
        return base.filter(p => allowedCategories.includes(p.type));
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEstimateSelect = (product) => {
    setCalculatorPreselect(product);
    setActiveTab('calculator');
  };

  // Add Product CRUD
  const handleAddProduct = async (newProduct) => {
    try {
      const res = await fetch(`${API_URL}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not add to server');
      }
    } catch (err) {
      console.warn('Backend sync failed, adding locally.');
      const localProduct = {
        ...newProduct,
        id: String(Date.now()),
        image: 'clay_brick.png'
      };
      setProducts(prev => [...prev, localProduct]);
    }
  };

  // Update Product CRUD
  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not update on server');
      }
    } catch (err) {
      console.warn('Backend sync failed, updating locally.');
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    }
  };

  // Delete Product CRUD
  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to remove this brick variant from the catalog?')) return;
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not delete on server');
      }
    } catch (err) {
      console.warn('Backend sync failed, deleting locally.');
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleScrollToContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterNavigation = (tab, sectionId = null, categoryName = null) => {
    if (categoryName) {
      const matchedProduct = products.find(p =>
        (p.type && p.type.toLowerCase().includes(categoryName.toLowerCase())) ||
        (p.name && p.name.toLowerCase().includes(categoryName.toLowerCase()))
      );
      if (matchedProduct) {
        setSelectedProductDetail(matchedProduct);
        setActiveTab('product-details');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setSelectedCategory(categoryName);
    }
    setActiveTab(tab);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1. Calculate Dynamic Category Counts
  const categoriesList = [
    'Fly Ash Bricks',
    'Fly Ash Blocks',
    'Paver Blocks',
    'Interlock Bricks',
    'Solid Blocks',
    'AAC Blocks'
  ];

  const categoryCounts = {};
  categoriesList.forEach(cat => {
    categoryCounts[cat] = products.filter(p => p.type === cat).length;
  });

  // 2. Calculate Dynamic Filter Counts
  const filterCounts = {
    residential: products.filter(p => p.application && p.application.includes('residential')).length,
    commercial: products.filter(p => p.application && p.application.includes('commercial')).length,
    industrial: products.filter(p => p.application && p.application.includes('industrial')).length,
    infrastructure: products.filter(p => p.application && p.application.includes('infrastructure')).length,
    size1: products.filter(p => p.dimensions && p.dimensions.length === 190 && p.dimensions.width === 90 && p.dimensions.height === 90).length,
    size2: products.filter(p => p.dimensions && p.dimensions.length === 190 && p.dimensions.width === 90 && p.dimensions.height === 75).length,
    size3: products.filter(p => p.dimensions && p.dimensions.length === 390 && p.dimensions.width === 190 && p.dimensions.height === 190).length,
    strength1: products.filter(p => p.strength === '3.5').length,
    strength2: products.filter(p => p.strength === '5').length,
    strength3: products.filter(p => p.strength === '7.5').length,
    strength4: products.filter(p => p.strength === '10').length
  };

  // 3. Filter products
  const filteredProducts = products.filter(prod => {
    // Only show allowed product categories
    if (!categoriesList.includes(prod.type)) {
      return false;
    }

    // Category Filter
    if (selectedCategory && prod.type !== selectedCategory) {
      return false;
    }

    // Application Filters
    const appFilters = ['residential', 'commercial', 'industrial', 'infrastructure'];
    const activeAppFilters = appFilters.filter(f => activeFilters[f]);
    if (activeAppFilters.length > 0) {
      const matchesApp = prod.application && prod.application.some(app => activeFilters[app]);
      if (!matchesApp) return false;
    }

    // Size Filters
    const sizeFilters = ['size1', 'size2', 'size3'];
    const activeSizeFilters = sizeFilters.filter(f => activeFilters[f]);
    if (activeSizeFilters.length > 0) {
      let matchesSize = false;
      if (activeFilters.size1 && prod.dimensions && prod.dimensions.length === 190 && prod.dimensions.width === 90 && prod.dimensions.height === 90) {
        matchesSize = true;
      }
      if (activeFilters.size2 && prod.dimensions && prod.dimensions.length === 190 && prod.dimensions.width === 90 && prod.dimensions.height === 75) {
        matchesSize = true;
      }
      if (activeFilters.size3 && prod.dimensions && prod.dimensions.length === 390 && prod.dimensions.width === 190 && prod.dimensions.height === 190) {
        matchesSize = true;
      }
      if (!matchesSize) return false;
    }

    // Strength Filters
    const strengthFilters = ['strength1', 'strength2', 'strength3', 'strength4'];
    const activeStrengthFilters = strengthFilters.filter(f => activeFilters[f]);
    if (activeStrengthFilters.length > 0) {
      let matchesStrength = false;
      if (activeFilters.strength1 && prod.strength === '3.5') matchesStrength = true;
      if (activeFilters.strength2 && prod.strength === '5') matchesStrength = true;
      if (activeFilters.strength3 && prod.strength === '7.5') matchesStrength = true;
      if (activeFilters.strength4 && prod.strength === '10') matchesStrength = true;
      if (!matchesStrength) return false;
    }

    return true;
  });

  // 4. Sort products in exact requested order
  const PRODUCT_DISPLAY_ORDER = [
    'Fly Ash Bricks',
    'Fly Ash Blocks',
    'Paver Blocks',
    'Interlock Bricks',
    'Solid Blocks',
    'AAC Blocks'
  ];

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const indexA = PRODUCT_DISPLAY_ORDER.findIndex(cat =>
      (a.type && a.type.toLowerCase() === cat.toLowerCase()) ||
      (a.name && a.name.toLowerCase().includes(cat.toLowerCase()))
    );
    const indexB = PRODUCT_DISPLAY_ORDER.findIndex(cat =>
      (b.type && b.type.toLowerCase() === cat.toLowerCase()) ||
      (b.name && b.name.toLowerCase().includes(cat.toLowerCase()))
    );

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return Number(a.id) - Number(b.id);
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <TopBar />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} onCategorySelect={handleCategorySelect} />

      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <>
            <HeroSection
              onExploreClick={handleScrollToProducts}
              onQuoteClick={handleScrollToContact}
            />
            <PartnerLogos />
            <AboutUs onKnowMoreClick={() => setActiveTab('about')} />
            <ProductCategories onCategorySelect={handleCategorySelect} />
            <WhyChooseUs />
            <FeaturedProductsSection
              products={products}
              onQuoteClick={handleScrollToContact}
              onViewDetails={handleViewDetails}
            />
            <ProjectsTestimonials />
            {/* <div id="contact-section">
              <ContactForm />
            </div> */}
          </>
        )}

        {activeTab === 'about' && (
          <>
            <AboutHero onHomeClick={() => setActiveTab('home')} />
            <AboutCompany />
            {/* <AboutJourney /> */}
            <ManufacturingProcess />
            <AboutMissionVision />
            <AboutWhyChoose />
            {/* <AboutCredentials /> */}
          </>
        )}

        {activeTab === 'products' && (
          <>
            <ProductsHero onHomeClick={() => setActiveTab('home')} />
            <div className="container" style={{
              paddingTop: '40px',
              paddingBottom: '60px'
            }}>
              {/* Products Sidebar / Filter Section Hidden as requested */}
              {/* <ProductsSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategorySelect}
                activeFilters={activeFilters}
                onFilterToggle={handleFilterToggle}
                onResetFilters={handleResetFilters}
                categoryCounts={categoryCounts}
                filterCounts={filterCounts}
              /> */}
              <ProductsGrid
                products={sortedProducts}
                onViewDetails={handleViewDetails}
                sortOption={sortOption}
                onSortChange={setSortOption}
              />
            </div>
            <ProductsTrustBar />
          </>
        )}

        {activeTab === 'product-details' && selectedProductDetail && (
          <>
            <ProductDetailsBreadcrumb
              productName={selectedProductDetail.name}
              categoryName={selectedProductDetail.type || 'Bricks & Blocks'}
              onHomeClick={() => setActiveTab('home')}
              onProductsClick={() => setActiveTab('products')}
            />
            <ProductDetailsMain
              product={selectedProductDetail}
              onQuoteClick={handleRedirectToContact}
            />
            <ProductDetailsTabs
              product={selectedProductDetail}
              productName={selectedProductDetail.name}
              onContactClick={handleRedirectToContact}
            />
            <ProductDetailsRelated
              products={products}
              onProductClick={handleViewDetails}
              currentProductId={selectedProductDetail.id}
            />
          </>
        )}

        {activeTab === 'calculator' && (
          <BrickCalculator
            products={products}
            preselectedProduct={calculatorPreselect}
          />
        )}

        {activeTab === 'admin' && (
          <Dashboard
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            refreshCatalog={fetchProducts}
          />
        )}

        {activeTab === 'contact' && (
          <>
            <ContactHero onHomeClick={() => setActiveTab('home')} />
            <ContactMain onNavigate={handleFooterNavigation} />
            <ContactMap />
            {/* <ContactTrustBar /> */}
          </>
        )}

        {activeTab === 'gallery' && (
          <Gallery onHomeClick={() => setActiveTab('home')} />
        )}

        {activeTab === 'sitemap' && (
          <Sitemap onNavigate={handleFooterNavigation} />
        )}

        {activeTab === 'terms' && (
          <TermsAndConditions
            onHomeClick={() => setActiveTab('home')}
            onNavigate={handleFooterNavigation}
          />
        )}

        {activeTab === 'privacy' && (
          <PrivacyPolicy
            onHomeClick={() => setActiveTab('home')}
            onNavigate={handleFooterNavigation}
          />
        )}

        {activeTab === '404' && (
          <NotFound
            onHomeClick={() => setActiveTab('home')}
            onNavigate={handleFooterNavigation}
          />
        )}
      </main>

      {activeTab !== 'admin' && activeTab !== '404' && (
        <CTASection onQuoteClick={activeTab === 'home' ? handleScrollToContact : handleRedirectToContact} />
      )}
      <Footer onNavigate={handleFooterNavigation} />

      {/* Floating Side Contact Bar (WhatsApp, Call, Email) across all pages */}
      <FloatingContactWidget />

      {/* Floating Tap to Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}

