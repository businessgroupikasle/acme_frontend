import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>{`
        .tap-scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #7ca13a;
          color: #ffffff;
          border: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 8px 24px rgba(124, 161, 58, 0.4), 0 2px 8px rgba(0, 0, 0, 0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.85);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tap-scroll-top-btn.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .tap-scroll-top-btn:hover {
          background: #6b8d30;
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 12px 28px rgba(124, 161, 58, 0.5), 0 4px 12px rgba(0, 0, 0, 0.16);
        }

        .tap-scroll-top-btn:active {
          transform: translateY(-1px) scale(0.96);
        }

        @media (max-width: 768px) {
          .tap-scroll-top-btn {
            bottom: 22px;
            right: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
      
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Tap to scroll top"
        className={`tap-scroll-top-btn ${isVisible ? 'is-active' : ''}`}
      >
        <ChevronUp size={22} strokeWidth={2.6} />
      </button>
    </>
  );
}

