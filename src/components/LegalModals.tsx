import React from 'react';
import { X, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/constants';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
              <Shield className="w-5 h-5 text-emerald-700" />
              <span>Privacy Policy</span>
            </div>
            <p className="text-slate-500 text-xs">Last updated: October 2026</p>

            <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
            <p>
              When you submit a quote request or contact Goodway Attestation via phone, WhatsApp, or website forms, we collect your name, phone number, city, and information regarding the documents you require attested. We do not collect sensitive credentials, credit card details, or unnecessary personal records through initial lead forms.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">2. Use of Information</h4>
            <p>
              Your contact details are used exclusively to evaluate your document requirements, prepare an itemized quote, provide procedural advice, and coordinate document handover and courier tracking. We do not sell or rent user details to third-party marketing brokers.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">3. Document Custody & Safety</h4>
            <p>
              Original certificates entrusted to us for state HRD, Home Department, MEA, and UAE Embassy processing are handled with strict chain-of-custody protocols, tamper-evident security folders, and verified transit receipts.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">4. Communications</h4>
            <p>
              By submitting an enquiry, you consent to receive direct operational communications regarding your quotation via phone call, SMS, or WhatsApp from a Goodway Attestation consultant.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">5. Contact Us</h4>
            <p>
              For privacy queries or data removal requests, contact {BUSINESS_CONFIG.supportEmail} or visit our Bengaluru office at {BUSINESS_CONFIG.address.fullFormatted}.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
              <Shield className="w-5 h-5 text-emerald-700" />
              <span>Terms of Service & Disclaimer</span>
            </div>
            <p className="text-slate-500 text-xs">Last updated: October 2026</p>

            <h4 className="font-bold text-slate-900 text-sm">1. Nature of Services</h4>
            <p>
              Goodway Attestation is an independent professional document processing consultancy based in India. We assist individuals and corporations in navigating the administrative and logistical steps required to submit documents to Indian state authorities, the Ministry of External Affairs (MEA), and the Embassy or Consulate of the United Arab Emirates.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">2. Non-Governmental Entity Disclaimer</h4>
            <p>
              Goodway Attestation is an independent private consultancy and is NOT the Embassy of the United Arab Emirates, NOT a diplomatic mission, and NOT a division of the Ministry of External Affairs or any state government in India. Official requirements, acceptance criteria, validity of seals, and government tariffs are solely determined by the relevant government and consular authorities.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">3. Timelines & Turnaround</h4>
            <p>
              All stated timelines are estimates based on standard working days and usual government secretariat functioning. Timelines can be influenced by gazetted government holidays, university archive verifications, technical system maintenance at state HRD/MEA portals, or diplomatic consular scheduling.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">4. Client Responsibility for Document Authenticity</h4>
            <p>
              The client warrants that all submitted certificates, diplomas, and records are genuine and lawfully issued by legitimate academic institutions or statutory bodies. We do not process fabricated or tampered paperwork.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
