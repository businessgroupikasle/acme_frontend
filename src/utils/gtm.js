/**
 * Google Tag Manager & GA4 Event Tracking Helper
 * Container: GTM-N5BB2ZGL | GA4 Measurement ID: G-QJT76BH69E
 */

export const pushToDataLayer = (data) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  // Optional debug logging in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[GTM dataLayer Event]:', data);
  }
};

/**
 * Track SPA virtual page views
 * @param {string} pagePath e.g. '/products/' or '/contact/'
 * @param {string} pageTitle Page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  pushToDataLayer({
    event: 'virtual_page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};

/**
 * Track CTA button clicks
 * @param {string} ctaName e.g. 'Get a Quote', 'Explore Collection'
 * @param {string} ctaLocation e.g. 'Header', 'Hero', 'Footer', 'ProductsGrid'
 * @param {string} destination Destination path or action
 */
export const trackCtaClick = (ctaName, ctaLocation, destination = '') => {
  pushToDataLayer({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: ctaLocation,
    destination_url: destination
  });
};

/**
 * Track Form Submissions
 * @param {string} formName e.g. 'Contact Form', 'Quote Request'
 * @param {string} productOrSubject Inquired product or subject
 * @param {string} status 'success' | 'failed'
 */
export const trackFormSubmission = (formName, productOrSubject = 'General', status = 'success') => {
  pushToDataLayer({
    event: 'form_submission',
    form_name: formName,
    form_subject: productOrSubject,
    form_status: status
  });
  // Also push GA4 standard 'generate_lead' event for conversions
  if (status === 'success') {
    pushToDataLayer({
      event: 'generate_lead',
      currency: 'INR',
      value: 0
    });
  }
};

/**
 * Track WhatsApp engagement
 * @param {string} source Source where WhatsApp was clicked e.g. 'Floating Widget', 'Contact Page', 'TopBar'
 */
export const trackWhatsAppClick = (source = 'Unknown') => {
  pushToDataLayer({
    event: 'whatsapp_click',
    contact_channel: 'WhatsApp',
    click_source: source
  });
};

/**
 * Track Phone Call button clicks
 * @param {string} phoneNumber Phone number called
 * @param {string} source Source where phone was clicked e.g. 'TopBar', 'Contact Page'
 */
export const trackPhoneCall = (phoneNumber, source = 'Unknown') => {
  pushToDataLayer({
    event: 'phone_call_click',
    contact_channel: 'Phone',
    phone_number: phoneNumber,
    click_source: source
  });
};
