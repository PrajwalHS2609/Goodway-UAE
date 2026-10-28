import React from 'react';
import { FileText, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, trackEvent } from '../utils/constants';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle radial emerald backdrop */}
      <div className="absolute inset-0 bg-radial-[at_bottom_left] from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Start Your UAE Authentication Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
          Need UAE Attestation for Your Documents?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us which documents you need to attest, where they were issued, and how you plan to use them. Our team can help you understand the applicable requirements and next steps.
        </p>

        {/* 3 Clear Conversion Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
          
          {/* Option 1: Request a Quote */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-[#FF7901]/40 flex items-center justify-center text-white mb-4">
                <FileText className="w-5 h-5 text-[#FF7901]" />
              </div>
              <p className="text-xs font-semibold text-slate-400 mb-1">Option 1: Online Form</p>
              <h3 className="text-base font-bold text-white mb-2">Request a Quote</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fill our 1-minute quote form with document details for a tailored breakdown.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <button
                onClick={() => {
                  trackEvent('quote_cta_click', { placement: 'final_cta_option1' });
                  onOpenQuote();
                }}
                className="w-full py-2.5 px-3 text-xs font-extrabold text-white bg-[#FF7901] hover:bg-[#E56C00] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/25"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Option 2: WhatsApp Enquiry */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-slate-400 mb-1">Option 2: Direct Chat</p>
              <h3 className="text-base font-bold text-white mb-2">WhatsApp Enquiry</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send scans or questions directly to <span className="font-semibold text-emerald-400">+91 91488 89444</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <a
                href={getWhatsAppUrl(undefined, undefined, 'final_cta_option2')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_cta_click', { placement: 'final_cta_option2' })}
                className="w-full py-2.5 px-3 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Option 3: Direct Phone Call */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white mb-4">
                <Phone className="w-5 h-5 text-[#009BFF]" />
              </div>
              <p className="text-xs font-semibold text-slate-400 mb-1">Option 3: Phone Support</p>
              <h3 className="text-base font-bold text-white mb-2">Direct Phone Call</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Helpline: <span className="font-semibold text-white">{BUSINESS_CONFIG.phonePrimaryDisplay}</span> / <span className="font-semibold text-white">{BUSINESS_CONFIG.phoneSecondaryDisplay}</span>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col gap-1.5">
              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
                onClick={() => trackEvent('phone_cta_click', { placement: 'final_cta_option3_primary' })}
                className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#009BFF] hover:bg-[#0084E0] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Call {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Malleshwaram In-Person Drop-off Reassurance */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>Walk-in: <strong className="text-white">{BUSINESS_CONFIG.address.shop}, {BUSINESS_CONFIG.address.locality}, Bengaluru</strong></span>
          <span className="hidden sm:inline">·</span>
          <span>{BUSINESS_CONFIG.operatingHours}</span>
          <span className="hidden sm:inline">·</span>
          <a
            href={BUSINESS_CONFIG.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#009BFF] hover:underline font-bold"
          >
            Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
