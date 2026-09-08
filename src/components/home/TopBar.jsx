import React from 'react';
import { Home, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar-wrapper" style={{
      background: 'var(--bg-dark)',
      color: '#e2e8f0',
      fontSize: '13px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <style>{`
        @media (max-width: 1024px) {
          .topbar-wrapper {
            display: none !important;
          }
        }
      `}</style>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Welcome message */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Home size={14} style={{ color: 'var(--accent)' }} />
          <span>Welcome to ACME Bricks</span>
        </div>

        {/* Contact info and Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:info@acmebricks.in" style={{ display: 'flex', alignItems: 'center', gap: '6px', hover: { color: 'var(--accent)' } }}>
            <Mail size={14} style={{ color: 'var(--accent)' }} />
            <span>info@acmebricks.in</span>
          </a>
          <a href="tel:+919500851880" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={14} style={{ color: 'var(--accent)' }} />
            <span>+91 95008 51880</span>
          </a>
          <a href="https://wa.me/919500851880" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--accent)">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.908 14.058.882 11.43.882c-5.438 0-9.863 4.42-9.867 9.858-.001 1.9.497 3.753 1.44 5.362l-.944 3.447 3.53-.925zm11.367-7.405c-.293-.146-1.737-.857-2.007-.956-.27-.099-.465-.148-.659.146-.195.298-.754.956-.926 1.155-.171.198-.344.223-.637.076-.293-.146-1.24-.457-2.36-1.458-.873-.78-1.463-1.742-1.635-2.04-.171-.297-.018-.459.13-.606.13-.133.293-.347.44-.52.146-.173.196-.297.293-.495.097-.198.05-.371-.025-.52-.075-.148-.659-1.591-.902-2.177-.237-.57-.497-.492-.676-.502-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.742.347-.256.278-.976.953-.976 2.327 0 1.373.999 2.701 1.139 2.888.14.188 1.966 3.003 4.764 4.21.665.286 1.184.457 1.587.585.67.213 1.28.183 1.762.112.537-.08 1.653-.675 1.884-1.328.23-6.53.23-1.213.16-1.328-.07-.113-.264-.178-.556-.328z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '15px' }}>
            <a href="https://www.facebook.com/acmebricks" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ opacity: 0.8 }}><Facebook size={14} /></a>
            <a href="https://www.instagram.com/acmeb_ricks" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ opacity: 0.8 }}><Instagram size={14} /></a>

            <a href="https://wa.me/919500851880" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ opacity: 0.8 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.908 14.058.882 11.43.882c-5.438 0-9.863 4.42-9.867 9.858-.001 1.9.497 3.753 1.44 5.362l-.944 3.447 3.53-.925zm11.367-7.405c-.293-.146-1.737-.857-2.007-.956-.27-.099-.465-.148-.659.146-.195.298-.754.956-.926 1.155-.171.198-.344.223-.637.076-.293-.146-1.24-.457-2.36-1.458-.873-.78-1.463-1.742-1.635-2.04-.171-.297-.018-.459.13-.606.13-.133.293-.347.44-.52.146-.173.196-.297.293-.495.097-.198.05-.371-.025-.52-.075-.148-.659-1.591-.902-2.177-.237-.57-.497-.492-.676-.502-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.742.347-.256.278-.976.953-.976 2.327 0 1.373.999 2.701 1.139 2.888.14.188 1.966 3.003 4.764 4.21.665.286 1.184.457 1.587.585.67.213 1.28.183 1.762.112.537-.08 1.653-.675 1.884-1.328.23-6.53.23-1.213.16-1.328-.07-.113-.264-.178-.556-.328z"/>
              </svg>
            </a>
            <a href="https://www.google.com/maps/place/Acme+Bricks+%26+Blocks/@11.1045893,77.0926709,1076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8f9492c15ce3d:0x8a8f2a8da41428b3!8m2!3d11.1045893!4d77.0926709!16s%2Fg%2F11sg_gx3vd?entry=ttu" target="_blank" rel="noopener noreferrer" aria-label="Google Maps/My Business" style={{ opacity: 0.8 }}><MapPin size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
