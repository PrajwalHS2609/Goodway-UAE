import { AnalyticsEvent, DocumentCategory } from '../types';

export const BUSINESS_CONFIG = {
  companyName: 'Goodway Attestation',
  tagline: 'UAE Embassy Attestation Services in India',
  phonePrimaryDisplay: '+91 91488 89666',
  phonePrimary: '+919148889666',
  phoneSecondaryDisplay: '+91 91488 89444',
  phoneSecondary: '+919148889444',
  phoneNumber: '+919148889666',
  phoneDisplay: '+91 91488 89666',
  whatsappNumber: '919148889444',
  whatsappDisplay: '+91 91488 89444',
  email: 'info@goodwayattestation.com',
  supportEmail: 'support@goodwayattestation.com',
  address: {
    shop: '#134 (Shop No. 2), 1st Floor, K.N Complex',
    street: '11th Cross, Temple Street, Opp. Canara Bank',
    locality: 'Malleshwaram',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560003',
    country: 'India',
    fullFormatted:
      '#134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/goodwayattestation.india/',
    facebook: 'https://www.facebook.com/goodwayattestation',
    twitter: 'https://twitter.com/Goodway_India',
    linkedin: 'https://www.linkedin.com/company/goodway-attestation/',
    quora: 'https://www.quora.com/profile/Goodway-Attestation-1',
    googleMaps:
      'https://maps.google.com/?cid=6603265156837663165&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF',
  },
  operatingHours: 'Mon – Sat: 9:30 AM to 6:30 PM (IST)',
  verifiedYears: '15+ Years',
  hubCity: 'Malleshwaram, Bengaluru (Pan-India Express Service)',
};

export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  'Educational Certificates',
  'Degree Certificates',
  'Diploma Certificates',
  'Birth Certificates',
  'Marriage Certificates',
  'Experience Certificates',
  'Personal Documents',
  'Commercial Documents',
  'Power of Attorney',
  'Other Documents',
];

export const POPULAR_CITIES = [
  'Bangalore',
  'Mumbai',
  'Delhi NCR',
  'Hyderabad',
  'Chennai',
  'Kochi / Trivandrum',
  'Pune',
  'Kolkata',
  'Ahmedabad',
  'Chandigarh',
  'Other City',
];

// Helper to generate context-aware WhatsApp URL
export function getWhatsAppUrl(documentType?: string, city?: string, source: string = 'landing_page'): string {
  const docText = documentType ? `for ${documentType}` : 'for my documents';
  const cityText = city ? ` from ${city}` : ' in India';
  const text = encodeURIComponent(
    `Hello Goodway Attestation, I need assistance with UAE document attestation ${docText}${cityText} (via ${source}). Please share the requirements, timeline, and fee breakdown.`
  );
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${text}`;
}

// In-memory event store for analytics simulation
let eventListeners: ((event: AnalyticsEvent) => void)[] = [];
const eventLog: AnalyticsEvent[] = [];

export function trackEvent(
  eventName: AnalyticsEvent['eventName'],
  details?: Record<string, string | number | boolean>
): AnalyticsEvent {
  const event: AnalyticsEvent = {
    id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    eventName,
    timestamp: new Date().toLocaleTimeString(),
    details,
  };
  eventLog.unshift(event);
  if (eventLog.length > 50) eventLog.pop();
  eventListeners.forEach((listener) => listener(event));
  return event;
}

export function getEventLog(): AnalyticsEvent[] {
  return [...eventLog];
}

export function subscribeToEvents(listener: (event: AnalyticsEvent) => void): () => void {
  eventListeners.push(listener);
  return () => {
    eventListeners = eventListeners.filter((l) => l !== listener);
  };
}
