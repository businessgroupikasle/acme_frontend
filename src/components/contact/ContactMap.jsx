import React from 'react';

export default function ContactMap() {
  return (
    <section style={{ padding: '60px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="contact-map-section">

          {/* Interactive Map Iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=Acme%20Bricks%20%26%20Blocks,%2011.1045893,77.0926709&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Acme Bricks & Blocks Location Map"
            className="contact-map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
