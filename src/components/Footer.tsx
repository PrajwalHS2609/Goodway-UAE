import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  AlertCircle,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Compass
} from 'lucide-react';
import { BUSINESS_CONFIG, DOCUMENT_CATEGORIES, getWhatsAppUrl, trackEvent } from '../utils/constants';
import { GoodwayLogo } from './GoodwayLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenQuote,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <GoodwayLogo variant="white" />

            <p className="text-slate-400 leading-relaxed text-xs">
              Premier document facilitation consultancy in India specializing in UAE Embassy attestation, State HRD & Home Department authentications, MEA endorsements, and commercial certifications.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7901] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Bengaluru Head Office:</span>
                  <p className="text-slate-300 leading-relaxed">
                    {BUSINESS_CONFIG.address.fullFormatted}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#009BFF] hover:underline mt-1 font-semibold"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#009BFF] shrink-0" />
                <div className="tabular-nums space-x-2">
                  <a
                    href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
                    onClick={() => trackEvent('phone_cta_click', { placement: 'footer_primary' })}
                    className="hover:text-white transition-colors font-semibold"
                  >
                    {BUSINESS_CONFIG.phonePrimaryDisplay}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneSecondary}`}
                    onClick={() => trackEvent('phone_cta_click', { placement: 'footer_secondary' })}
                    className="hover:text-white transition-colors font-semibold"
                  >
                    {BUSINESS_CONFIG.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl(undefined, undefined, 'footer')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_cta_click', { placement: 'footer' })}
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +{BUSINESS_CONFIG.whatsappNumber} ({BUSINESS_CONFIG.whatsappDisplay})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#009BFF] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-300 block mb-2">Connect With Us:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={BUSINESS_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#FF7901] hover:text-[#FF7901] flex items-center justify-center text-slate-400 transition-colors"
                  title="Follow Goodway Attestation on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#009BFF] hover:text-[#009BFF] flex items-center justify-center text-slate-400 transition-colors"
                  title="Follow Goodway Attestation on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 flex items-center justify-center text-slate-400 transition-colors"
                  title="Follow Goodway Attestation on Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-400 hover:text-blue-400 flex items-center justify-center text-slate-400 transition-colors"
                  title="Follow Goodway Attestation on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.quora}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-400 hover:text-red-400 flex items-center justify-center text-slate-400 transition-colors text-xs font-bold"
                  title="Goodway Attestation on Quora"
                >
                  Q
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Document Attestation Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">UAE Attestation Services</h4>
            <ul className="space-y-2">
              {DOCUMENT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      trackEvent('quote_cta_click', { placement: 'footer_service_link', category: cat });
                      onOpenQuote();
                    }}
                    className="hover:text-[#009BFF] transition-colors text-left cursor-pointer"
                  >
                    {cat} Attestation
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Procedural Stages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm">Verification Chain</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Notary Public India</li>
              <li>State HRD (Higher Education)</li>
              <li>State Home Department</li>
              <li>Sub-Divisional Magistrate (SDM)</li>
              <li>MEA (Ministry of External Affairs)</li>
              <li>UAE Embassy New Delhi</li>
              <li>UAE Consulate Mumbai</li>
              <li>MOFA Counter-Attestation</li>
            </ul>
          </div>

          {/* Column 4: Key Service Hubs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Malleshwaram Hub Hours</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Walk-in processing in Malleshwaram, Bengaluru. Door-to-door insured courier pickup across Mumbai, Delhi NCR, Hyderabad, Chennai, Kochi, Pune, Kolkata, and all 28 states.
            </p>
            <div className="pt-2 bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] font-semibold text-[#FF7901] block mb-1">
                Office Hours:
              </span>
              <span className="text-slate-300 block">{BUSINESS_CONFIG.operatingHours}</span>
              <a
                href={BUSINESS_CONFIG.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#009BFF] hover:underline font-bold mt-2 inline-flex items-center gap-1"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Statutory Legal Disclaimer Notice */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-300 mb-1">Statutory Legal Disclaimer:</p>
              <p>
                Goodway Attestation is a private, independent document assistance and administrative facilitation company in India. We are not an embassy, consulate, or official division of the Government of India or the Government of the United Arab Emirates. Official requirements, approval standards, fee tariffs, and embassy processing timelines are solely established and governed by the relevant issuing state departments, the Ministry of External Affairs (MEA), and diplomatic missions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Goodway Attestation Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <a
              href="#faqs"
              className="hover:text-white transition-colors"
            >
              FAQs
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
