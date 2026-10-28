import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, trackEvent } from '../utils/constants';
import { GoodwayLogo } from './GoodwayLogo';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePhoneClick = (phone: string) => {
    trackEvent('phone_cta_click', { placement: 'header', phone });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_cta_click', { placement: 'header' });
  };

  const handleQuoteClick = () => {
    trackEvent('quote_cta_click', { placement: 'header' });
    onOpenQuote();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro announcement bar with dual phone numbers & Malleshwaram hub */}
      <div className="bg-[#009BFF] text-white text-[11px] py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-200" />
              <span>Malleshwaram, Bengaluru Office: #134, K.N Complex, 11th Cross</span>
            </span>
            <span className="text-blue-100">|</span>
            <span>UAE Embassy & MEA Attestation Specialists</span>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <span className="text-blue-100">Helpline:</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
              onClick={() => handlePhoneClick(BUSINESS_CONFIG.phonePrimary)}
              className="hover:text-amber-200 transition-colors flex items-center gap-1 tabular-nums"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_CONFIG.phonePrimaryDisplay}</span>
            </a>
            <span className="text-blue-100">/</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneSecondary}`}
              onClick={() => handlePhoneClick(BUSINESS_CONFIG.phoneSecondary)}
              className="hover:text-amber-200 transition-colors tabular-nums"
            >
              {BUSINESS_CONFIG.phoneSecondaryDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 h-16 sm:h-18 md:h-20">
          
          {/* Zone 1: Brand Wordmark & Dynamic Logo */}
          <a
            href="#"
            className="flex items-center shrink-0 hover:opacity-95 transition-opacity"
            title="Goodway Attestation - UAE Embassy Services"
          >
            <GoodwayLogo />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              UAE Services
            </a>
            <a href="#process" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              How It Works
            </a>
            <a href="#requirements" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              Requirements
            </a>
            <a href="#calculator" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              Timeline & Fees
            </a>
            <a href="#malleshwaram-hub" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              Bengaluru Office
            </a>
            <a href="#faqs" className="hover:text-[#009BFF] transition-colors whitespace-nowrap shrink-0">
              FAQs
            </a>
          </nav>

          {/* Zone 3: Primary Actions & Contact */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Quick Call Button with Primary Phone */}
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
              onClick={() => handlePhoneClick(BUSINESS_CONFIG.phonePrimary)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors whitespace-nowrap"
              title="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#009BFF]" />
              <span className="tabular-nums">{BUSINESS_CONFIG.phonePrimaryDisplay}</span>
            </a>

            {/* Quick WhatsApp Link */}
            <a
              href={getWhatsAppUrl(undefined, undefined, 'header')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action Button in Vibrant Orange #FF7901 */}
            <button
              onClick={handleQuoteClick}
              className="px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-[#FF7901] hover:bg-[#E56C00] active:scale-98 rounded-lg transition-all whitespace-nowrap shadow-md shadow-orange-500/20 cursor-pointer"
            >
              Get Free Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3 px-2 space-y-1 bg-white">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              UAE Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              How It Works
            </a>
            <a
              href="#requirements"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              Document Requirements
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              Timeline & Fees Calculator
            </a>
            <a
              href="#malleshwaram-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              Malleshwaram Office & Map
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-sky-50 rounded-md"
            >
              FAQs
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
                onClick={() => handlePhoneClick(BUSINESS_CONFIG.phonePrimary)}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold text-slate-900 bg-sky-50 border border-sky-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#009BFF]" />
                <span>Call {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneSecondary}`}
                onClick={() => handlePhoneClick(BUSINESS_CONFIG.phoneSecondary)}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Alt: {BUSINESS_CONFIG.phoneSecondaryDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl(undefined, undefined, 'mobile_menu')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp (+91 91488 89444)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
