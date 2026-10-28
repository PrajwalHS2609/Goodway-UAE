import React, { useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, trackEvent } from '../utils/constants';

interface FloatingActionsProps {
  onOpenQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuote }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handlePhoneClick = () => {
    trackEvent('phone_cta_click', { placement: 'mobile_bottom_bar' });
  };

  const handleWhatsAppClick = (placement: string) => {
    trackEvent('whatsapp_cta_click', { placement });
  };

  const handleQuoteClick = () => {
    trackEvent('quote_cta_click', { placement: 'mobile_bottom_bar' });
    onOpenQuote();
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <div className="relative group flex items-center">
          
          {/* Tooltip speech bubble */}
          {showTooltip && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2 border border-slate-700">
              <span>Have UAE attestation questions? Chat now</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-slate-400 hover:text-white"
                title="Dismiss"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          <a
            href={getWhatsAppUrl(undefined, undefined, 'floating_desktop')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('floating_desktop')}
            className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            aria-label="Chat on WhatsApp with Goodway Attestation"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Mobile Fixed Bottom Action Bar (3 clearly distinguishable actions, <= 15% viewport height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* 1. Call Now */}
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
            onClick={handlePhoneClick}
            className="flex flex-col items-center justify-center py-1.5 px-1 bg-sky-50 border border-sky-200 hover:bg-sky-100 text-slate-900 rounded-lg transition-colors text-center"
          >
            <Phone className="w-4 h-4 text-[#009BFF] mb-0.5" />
            <span className="text-[11px] font-bold leading-tight">Call Now</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={getWhatsAppUrl(undefined, undefined, 'mobile_bottom_bar')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('mobile_bottom_bar')}
            className="flex flex-col items-center justify-center py-1.5 px-1 bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-lg transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
          </a>

          {/* 3. Get a Quote */}
          <button
            onClick={handleQuoteClick}
            className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#FF7901] hover:bg-[#E56C00] text-white rounded-lg transition-colors text-center cursor-pointer shadow-md shadow-orange-500/20"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-extrabold leading-tight">Get Quote</span>
          </button>

        </div>
      </div>
    </>
  );
};
