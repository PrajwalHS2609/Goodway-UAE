import React from 'react';
import {
  Compass,
  FileCheck,
  Receipt,
  Headphones,
  Smartphone,
  Workflow,
  Shield,
  Building,
  CheckCircle2
} from 'lucide-react';
import { trackEvent } from '../utils/constants';

interface TrustSectionProps {
  onOpenQuote: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenQuote }) => {
  const trustCards = [
    {
      title: 'Process Guidance',
      description:
        'Comprehensive step-by-step roadmap explaining notary, State HRD/Home Department, Ministry of External Affairs (MEA), and UAE Embassy protocols.',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    },
    {
      title: 'Document-Specific Support',
      description:
        'Individualized review based on document nature—degrees, provisional certificates, marksheets, marriage, birth, or company board resolutions.',
      icon: FileCheck,
      color: 'bg-blue-50 text-blue-800 border-blue-100',
    },
    {
      title: 'Transparent Communication',
      description:
        'Complete clarity on applicable government stamp fees, embassy attestation fees, courier logistics, and honest working-day timeline estimates.',
      icon: Receipt,
      color: 'bg-amber-50 text-amber-800 border-amber-100',
    },
    {
      title: 'Dedicated Customer Assistance',
      description:
        'Direct phone and WhatsApp touchpoints so you can ask document preparation questions without going through frustrating automated bots.',
      icon: Headphones,
      color: 'bg-indigo-50 text-indigo-800 border-indigo-100',
    },
    {
      title: 'Convenient Enquiry Options',
      description:
        'Enquire via our online quote builder, direct phone line, instant WhatsApp chat, or walk directly into our Bangalore office on MG Road.',
      icon: Smartphone,
      color: 'bg-teal-50 text-teal-800 border-teal-100',
    },
    {
      title: 'Service Coordination',
      description:
        'Systematic handling from initial physical document pickup to authentication submissions and insured return dispatch with tracking.',
      icon: Workflow,
      color: 'bg-slate-100 text-slate-800 border-slate-200',
    },
  ];

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Confidence & Compliance
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Your UAE Attestation Process, Explained Clearly
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Navigating embassy attestation can feel daunting due to shifting state department mandates, university verifications, and diplomatic requirements. Goodway Attestation provides structured, honest support to ensure your original certificates are authenticated safely and accurately.
          </p>
        </div>

        {/* 6 Clean Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                  <span>Standardized handling protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verifiable Credentials Banner */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold tracking-wide uppercase">
              <Shield className="w-4 h-4" />
              <span>Verifiable Physical Office & Support Desk</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Based in Bangalore, Assisting Clients Across India
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Original documents are handled strictly inside tamper-evident security pouches with unique tracking numbers and logged custody records.
            </p>
          </div>

          <button
            onClick={() => {
              trackEvent('quote_cta_click', { placement: 'trust_section_banner' });
              onOpenQuote();
            }}
            className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            Check Your Attestation Route
          </button>
        </div>

      </div>
    </section>
  );
};
