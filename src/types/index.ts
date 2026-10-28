export type DocumentCategory =
  | 'Educational Certificates'
  | 'Degree Certificates'
  | 'Diploma Certificates'
  | 'Birth Certificates'
  | 'Marriage Certificates'
  | 'Experience Certificates'
  | 'Personal Documents'
  | 'Commercial Documents'
  | 'Power of Attorney'
  | 'Other Documents';

export interface LeadFormData {
  fullName: string;
  countryCode: string;
  mobileNumber: string;
  whatsappNumber: string;
  sameAsMobile: boolean;
  documentType: DocumentCategory | '';
  currentCity: string;
  preferredContact: 'Call' | 'WhatsApp';
  message: string;
  consent: boolean;
}

export interface AnalyticsEvent {
  id: string;
  eventName:
    | 'attestation_form_start'
    | 'attestation_form_submit'
    | 'phone_cta_click'
    | 'whatsapp_cta_click'
    | 'quote_cta_click'
    | 'service_prefill_click';
  timestamp: string;
  details?: Record<string, string | number | boolean>;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: DocumentCategory;
  shortDesc: string;
  details: string;
  targetAudience: string;
  typicalTimeline: string;
  prerequisites: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Timeline & Cost' | 'Submission';
}
