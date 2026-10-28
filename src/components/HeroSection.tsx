import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  FileCheck2,
  Lock,
  ArrowRight,
  Send,
  Building2,
  Sparkles
} from 'lucide-react';
import {
  BUSINESS_CONFIG,
  DOCUMENT_CATEGORIES,
  POPULAR_CITIES,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/constants';
import { DocumentCategory, LeadFormData } from '../types';
import { UaeEmbassyStampSeal } from './UaeVisuals';

interface HeroSectionProps {
  selectedCategory?: DocumentCategory | '';
  onFormSubmitted?: (data: LeadFormData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCategory = '',
  onFormSubmitted,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    countryCode: '+91',
    mobileNumber: '',
    whatsappNumber: '',
    sameAsMobile: true,
    documentType: selectedCategory || '',
    currentCity: 'Bangalore',
    preferredContact: 'WhatsApp',
    message: '',
    consent: true,
  });

  const [formStarted, setFormStarted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [submittedLead, setSubmittedLead] = useState<{
    referenceId: string;
    data: LeadFormData;
  } | null>(null);

  // Sync category when parent pre-selects from a service card click
  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, documentType: selectedCategory }));
    }
  }, [selectedCategory]);

  const handleFieldChange = (field: keyof LeadFormData, value: any) => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('attestation_form_start', { initialField: field });
    }

    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'mobileNumber' && prev.sameAsMobile) {
        updated.whatsappNumber = value;
      }
      return updated;
    });

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.sameAsMobile) {
      const cleanWa = formData.whatsappNumber.replace(/\D/g, '');
      if (!cleanWa || cleanWa.length < 10) {
        errs.whatsappNumber = 'Please enter a valid WhatsApp number';
      }
    }
    if (!formData.documentType) {
      errs.documentType = 'Please select a document type';
    }
    if (!formData.consent) {
      errs.consent = 'Please agree to be contacted regarding this enquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refId = `GWA-UAE-${Math.floor(100000 + Math.random() * 900000)}`;
    trackEvent('attestation_form_submit', {
      referenceId: refId,
      documentType: formData.documentType,
      city: formData.currentCity,
      contactMethod: formData.preferredContact,
    });

    setSubmittedLead({ referenceId: refId, data: formData });
    if (onFormSubmitted) {
      onFormSubmitted(formData);
    }
  };

  const handleResetForm = () => {
    setSubmittedLead(null);
    setFormData({
      fullName: '',
      countryCode: '+91',
      mobileNumber: '',
      whatsappNumber: '',
      sameAsMobile: true,
      documentType: '',
      currentCity: 'Bangalore',
      preferredContact: 'WhatsApp',
      message: '',
      consent: true,
    });
    setFormStarted(false);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 border-b border-slate-200">
      {/* Background architectural mesh pattern */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Breadcrumb & Embassy Authority Context */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <span className="text-slate-900 font-semibold">India to UAE</span>
          <span aria-hidden="true">/</span>
          <span>MEA & Embassy Attestation</span>
          <span aria-hidden="true">/</span>
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            UAE Embassy New Delhi & Consulate Mumbai Support
          </span>
        </div>

        {/* 2-Column Split: Value Proposition (Left) + Lead Capture Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Narrative & Trust Proof */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#009BFF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7901]" />
                <span>Premier UAE Embassy & MEA Legalization Partner</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
                UAE Attestation Services in India
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#009BFF] tracking-tight">
                Get Your Documents Ready for Use in the UAE
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Goodway Attestation assists professionals, families, students, and businesses with authentic document authentication for the UAE. We coordinate the complete verification route across State Departments (HRD / Home / SDM), the Ministry of External Affairs (MEA India), and the UAE Embassy.
            </p>

            {/* Consular Authentication Protocol Badge */}
            <div className="pt-1">
              <UaeEmbassyStampSeal />
            </div>

            {/* 4 Concise Trust / Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#009BFF] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Document-Specific Guidance</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Exact requirements for educational, personal, and commercial certificates.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF7901] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">All Document Types Supported</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Degrees, diplomas, birth/marriage certificates, and commercial MOAs.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Transparent Fees & Timelines</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Clear upfront cost breakdowns with realistic government processing times.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">End-to-End Customer Support</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Direct phone, WhatsApp updates, and Malleshwaram Bengaluru walk-in desk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Primary (Vibrant Orange #FF7901), Secondary (WhatsApp), Call Helpline */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href="#quote-form"
                onClick={() => trackEvent('quote_cta_click', { placement: 'hero_primary' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FF7901] hover:bg-[#E56C00] active:scale-98 rounded-xl transition-all shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(formData.documentType, formData.currentCity, 'hero_secondary')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_cta_click', { placement: 'hero_secondary' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
                onClick={() => trackEvent('phone_cta_click', { placement: 'hero_call_primary' })}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-slate-800 hover:text-slate-950 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#009BFF]" />
                <span>Call: <span className="tabular-nums">{BUSINESS_CONFIG.phonePrimaryDisplay}</span></span>
              </a>
            </div>

            {/* Micro Reassurance with Malleshwaram Address Link */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                No obligation consultation
              </span>
              <a
                href={BUSINESS_CONFIG.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#009BFF] hover:underline font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                Malleshwaram Bengaluru Walk-ins (Google Maps)
              </a>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Pan-India Courier Pickup
              </span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-5" id="quote-form">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-lg shadow-slate-200/50 relative">
              
              <div className="border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">
                    Get a Free Attestation Quote
                  </h2>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Quick Response
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us which documents you need attested. Our team can help you understand the next steps.
                </p>
              </div>

              {submittedLead ? (
                /* Success Confirmation State */
                <div className="space-y-5 py-4 text-center">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">Quote Request Received!</h3>
                    <p className="text-xs text-slate-600">
                      Reference ID: <span className="font-mono font-bold text-slate-900">{submittedLead.referenceId}</span>
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl text-left text-xs space-y-1.5 border border-slate-200/80">
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Applicant Name:</span>
                      <span className="font-semibold">{submittedLead.data.fullName}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Document Type:</span>
                      <span className="font-semibold">{submittedLead.data.documentType}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">City / Location:</span>
                      <span className="font-semibold">{submittedLead.data.currentCity}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Preferred Contact:</span>
                      <span className="font-semibold">{submittedLead.data.preferredContact}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    A dedicated Goodway UAE attestation specialist is reviewing your document category and will reach out shortly with exact state department requirements, MEA fees, and courier arrangements.
                  </p>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={getWhatsAppUrl(submittedLead.data.documentType, submittedLead.data.currentCity, `lead_confirm_${submittedLead.referenceId}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp ({submittedLead.referenceId})</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-slate-500 hover:text-slate-800 underline py-1"
                    >
                      Submit another document enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile & WhatsApp Numbers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="mobileNumber">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex rounded-lg border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-slate-900">
                        <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-2 border-r border-slate-300 flex items-center tabular-nums">
                          +91
                        </span>
                        <input
                          id="mobileNumber"
                          type="tel"
                          maxLength={10}
                          placeholder="9876543210"
                          value={formData.mobileNumber}
                          onChange={(e) => handleFieldChange('mobileNumber', e.target.value)}
                          className="w-full px-2.5 py-2 text-sm focus:outline-none tabular-nums"
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-semibold text-slate-700" htmlFor="whatsappNumber">
                          WhatsApp Number
                        </label>
                        <label className="inline-flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.sameAsMobile}
                            onChange={(e) => handleFieldChange('sameAsMobile', e.target.checked)}
                            className="rounded text-slate-900 focus:ring-slate-900 w-3 h-3"
                          />
                          <span>Same</span>
                        </label>
                      </div>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        disabled={formData.sameAsMobile}
                        placeholder={formData.sameAsMobile ? formData.mobileNumber || 'Same as Mobile' : 'WhatsApp number'}
                        value={formData.sameAsMobile ? formData.mobileNumber : formData.whatsappNumber}
                        onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                          formData.sameAsMobile ? 'bg-slate-100 text-slate-500 border-slate-200' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Document Type Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="documentType">
                      Document Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="documentType"
                      value={formData.documentType}
                      onChange={(e) => handleFieldChange('documentType', e.target.value as DocumentCategory)}
                      className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                        errors.documentType ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white`}
                    >
                      <option value="">Select your document category...</option>
                      {DOCUMENT_CATEGORIES.map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                    {errors.documentType && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.documentType}</p>
                    )}
                  </div>

                  {/* Current City & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="currentCity">
                        Current City
                      </label>
                      <select
                        id="currentCity"
                        value={formData.currentCity}
                        onChange={(e) => handleFieldChange('currentCity', e.target.value)}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        {POPULAR_CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Preference
                      </label>
                      <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-lg">
                        <button
                          type="button"
                          onClick={() => handleFieldChange('preferredContact', 'WhatsApp')}
                          className={`py-1 text-xs font-semibold rounded-md transition-colors ${
                            formData.preferredContact === 'WhatsApp'
                              ? 'bg-white text-emerald-800 shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={() => handleFieldChange('preferredContact', 'Call')}
                          className={`py-1 text-xs font-semibold rounded-md transition-colors ${
                            formData.preferredContact === 'Call'
                              ? 'bg-white text-slate-900 shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Phone Call
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Brief Requirement or Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="message">
                      Brief Requirement or Message <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      placeholder="e.g., Degree issued from VTU Karnataka for Dubai employment visa..."
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleFieldChange('consent', e.target.checked)}
                        className="mt-0.5 rounded text-slate-900 focus:ring-slate-900 w-3.5 h-3.5 shrink-0"
                      />
                      <span>
                        I authorize Goodway Attestation to contact me via phone/WhatsApp regarding this attestation enquiry under applicable privacy terms.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>
                    )}
                  </div>

                  {/* Primary Form Submit Button in vibrant #FF7901 */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-sm font-extrabold text-white bg-[#FF7901] hover:bg-[#E56C00] active:scale-98 rounded-xl transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Get My Free Quote</span>
                  </button>

                  {/* Privacy Reassurance beneath button */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Your contact details are strictly kept private and used only to respond to this quote.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI / Trust Strip below Hero split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#009BFF] flex items-center justify-center font-black shrink-0 border border-sky-100">
              15+
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Years of Experience</p>
              <p className="text-xs text-slate-500">Established UAE attestation advisory</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF7901] flex items-center justify-center shrink-0 font-black tabular-nums border border-orange-100">
              50K+
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Documents Facilitated</p>
              <p className="text-xs text-slate-500">Educational, personal & commercial</p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:opacity-95"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#009BFF] flex items-center justify-center shrink-0 border border-sky-100 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-[#009BFF]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#009BFF] transition-colors">Malleshwaram Bengaluru Hub</p>
              <p className="text-xs text-slate-500">K.N Complex, Temple St (View Map)</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Chain-of-Custody Safety</p>
              <p className="text-xs text-slate-500">Insured express courier tracking</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
