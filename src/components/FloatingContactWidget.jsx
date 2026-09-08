import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function FloatingContactWidget() {
  const [hoveredSideIndex, setHoveredSideIndex] = useState(null);
  const [isWaHovered, setIsWaHovered] = useState(false);

  const sideContactItems = [
    {
      id: 'phone',
      label: 'Call Us Directly',
      sublabel: '+91 95008 51880',
      icon: (
        <Phone
          size={20}
          strokeWidth={2.2}
          color="#84cc16"
          style={{ transition: 'transform 0.2s ease' }}
        />
      ),
      href: 'tel:+919500851880',
      color: '#84cc16',
      bgColor: 'rgba(132, 204, 22, 0.15)'
    },
    {
      id: 'email',
      label: 'Send an Email',
      sublabel: 'info@acmebricks.in',
      icon: (
        <Mail
          size={20}
          strokeWidth={2.2}
          color="#38bdf8"
          style={{ transition: 'transform 0.2s ease' }}
        />
      ),
      href: 'mailto:info@acmebricks.in',
      color: '#38bdf8',
      bgColor: 'rgba(56, 189, 248, 0.15)'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes wa-side-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6), 0 4px 14px rgba(0, 0, 0, 0.28);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0), 0 6px 18px rgba(0, 0, 0, 0.32);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 4px 14px rgba(0, 0, 0, 0.28);
          }
        }
        .separate-side-wa-btn {
          animation: wa-side-pulse 2.2s infinite;
        }
        .separate-side-wa-btn:hover {
          animation: none;
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5), 0 4px 14px rgba(0, 0, 0, 0.35) !important;
        }
        @media (max-width: 991px) {
          .side-contact-dock-wrap {
            display: none !important;
          }
        }
      `}</style>

      {/* 1. Standalone WhatsApp Floating Button (Screen Bottom-Right) */}
      <div
        className="floating-wa-btn-wrap"
        style={{
          position: 'fixed',
          bottom: '26px',
          right: '26px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
        onMouseEnter={() => setIsWaHovered(true)}
        onMouseLeave={() => setIsWaHovered(false)}
      >
        {/* Tooltip on hover */}
        <div
          style={{
            position: 'absolute',
            right: '100%',
            marginRight: '14px',
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '7px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(37, 211, 102, 0.4)',
            opacity: isWaHovered ? 1 : 0,
            transform: isWaHovered ? 'translateX(0)' : 'translateX(10px)',
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            zIndex: 10000
          }}
        >
          <span>Chat on WhatsApp</span>
          <span style={{ fontSize: '11px', color: '#25D366', fontWeight: '700' }}>
            +91 95008 51880
          </span>
          {/* Arrow pointer */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '-5px',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              borderLeft: '5px solid #0f172a'
            }}
          />
        </div>

        {/* WhatsApp Circular Button */}
        <a
          href="https://wa.me/919500851880"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="separate-side-wa-btn"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            border: '3.5px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#ffffff"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.227-.563-1.834-.766-3.007-2.637-3.098-2.759-.092-.122-.74-1.002-.74-1.912 0-.91.464-1.357.63-1.541.166-.184.364-.23.486-.23.122 0 .244.002.35.007.112.005.262-.043.41.314.152.366.52 1.282.567 1.376.046.094.078.204.015.328-.063.125-.095.203-.188.312-.093.11-.197.245-.281.33-.094.094-.192.196-.083.384.11.188.489.807 1.05 1.306.722.643 1.332.842 1.52.936.188.094.298.079.408-.047.111-.126.474-.552.6-.74.126-.188.252-.157.424-.094.173.063 1.096.517 1.285.611.188.094.314.141.36.22.046.078.046.452-.098.857zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.435 5.178L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.688 0-3.255-.505-4.568-1.371l-.328-.218-2.97.779.793-2.898-.239-.38A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
          </svg>
        </a>
      </div>

      {/* 2. Side Contact Dock for Phone & Email (Center Right) */}
      <div
        className="side-contact-dock-wrap"
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            backgroundColor: '#1b263b',
            borderRadius: '10px 0 0 10px',
            boxShadow: '-3px 4px 20px rgba(0, 0, 0, 0.25), 0 0 1px rgba(255, 255, 255, 0.1) inset',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRight: 'none',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {sideContactItems.map((item, index) => {
            const isHovered = hoveredSideIndex === index;
            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  borderBottom:
                    index < sideContactItems.length - 1
                      ? '1px solid rgba(255, 255, 255, 0.12)'
                      : 'none'
                }}
                onMouseEnter={() => setHoveredSideIndex(index)}
                onMouseLeave={() => setHoveredSideIndex(null)}
              >
                {/* Tooltip on hover */}
                <div
                  style={{
                    position: 'absolute',
                    right: '100%',
                    marginRight: '12px',
                    backgroundColor: '#0f172a',
                    color: '#f8fafc',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                    border: `1px solid ${item.color}40`,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    zIndex: 10000
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontSize: '11px', color: item.color, fontWeight: '600' }}>
                    {item.sublabel}
                  </span>
                  {/* Arrow pointer */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-5px',
                      transform: 'translateY(-50%)',
                      width: 0,
                      height: 0,
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: '5px solid #0f172a'
                    }}
                  />
                </div>

                {/* Icon button */}
                <a
                  href={item.href}
                  aria-label={item.label}
                  style={{
                    width: '46px',
                    height: '46px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isHovered ? item.bgColor : 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    textDecoration: 'none'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    {item.icon}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
