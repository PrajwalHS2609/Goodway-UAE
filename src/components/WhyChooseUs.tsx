import React from 'react';
import {
  FileCheck2,
  DollarSign,
  Clock,
  PhoneCall,
  Shield,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '../utils/constants';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const benefits = [
    {
      title: 'Clear Process Explanations',
      description: 'We demystify the multi-tier government pipeline without legal jargon so you understand exactly where your documents go.',
      icon: FileCheck2,
    },
    {
      title: 'Document-Specific Assessment',
      description: 'We review certificate scans first to confirm university and state department prerequisites before requesting originals.',
      icon: Layers,
    },
    {
      title: 'Upfront & Itemized Fee Quotes',
      description: 'No hidden surcharges. Government stamp duties, embassy consular fees, and courier logistics are disclosed clearly before starting.',
      icon: DollarSign,
    },
    {
      title: 'Realistic Processing Estimates',
      description: 'We provide honest timelines based on current Ministry and State Secretariat turnaround speeds rather than deceptive "instant" promises.',
      icon: Clock,
    },
    {
      title: 'Multi-Category Proficiency',
      description: 'Specialized handling for educational degrees, non-educational personal papers, corporate resolutions, and medical licenses.',
      icon: Shield,
    },
    {
      title: 'Direct Phone & WhatsApp Support',
      description: 'Reach human document specialists directly during business hours without dealing with endless automated telephone menus.',
      icon: PhoneCall,
    },
    {
      title: 'Bangalore Walk-in & Pan-India Courier',
      description: 'Drop off papers in person at our Bangalore MG Road office or schedule insured door-to-door courier dispatch across India.',
      icon: MapPin,
    },
    {
      title: 'Secure Chain-of-Custody Tracking',
      description: 'Every certificate is logged with tamper-evident serial envelopes, reducing handling risk across government departments.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Why Work With Goodway
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Why Customers Choose Us for UAE Attestation Assistance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We focus on ethical, transparent, and accurate facilitation. We make no exaggerated or misleading claims—just reliable service that protects your essential documents and honors your deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Have questions regarding your specific university or state?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak with a knowledgeable Bangalore advisor today.
            </p>
          </div>
          <button
            onClick={() => {
              trackEvent('quote_cta_click', { placement: 'why_choose_us_cta' });
              onOpenQuote();
            }}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Request Document Review
          </button>
        </div>

      </div>
    </section>
  );
};
