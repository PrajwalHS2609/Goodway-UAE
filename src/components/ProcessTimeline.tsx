import React from 'react';
import {
  FileText,
  UserCheck,
  PackageCheck,
  Building2,
  Truck,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { trackEvent } from '../utils/constants';

interface ProcessTimelineProps {
  onOpenQuote: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      summary: 'Submit your document details',
      description:
        'Share the document category, issuing state or university (e.g. Karnataka, Maharashtra, Delhi), and intended UAE purpose (employment, visa, study, business).',
      icon: FileText,
      badge: 'Step 1: Assessment',
    },
    {
      step: '02',
      title: 'Receive Document-Specific Guidance',
      summary: 'Custom roadmap & fee quote',
      description:
        'Our attestation advisor reviews your certificate scans, explains the exact state verification route, outlines all government & embassy fees, and provides realistic timelines.',
      icon: UserCheck,
      badge: 'Step 2: Advisory',
    },
    {
      step: '03',
      title: 'Prepare & Submit Documents',
      summary: 'Secure submission options',
      description:
        'Submit original certificates and passport copies via our Bangalore office walk-in (MG Road) or book an insured, trackable courier pickup from anywhere in India.',
      icon: PackageCheck,
      badge: 'Step 3: Handover',
    },
    {
      step: '04',
      title: 'Authentication & Attestation Stages',
      summary: 'Multi-tier verification pipeline',
      description:
        'We coordinate each sequential stage: Notary Public → State HRD / Home Department / SDM → Ministry of External Affairs (MEA, New Delhi) → UAE Embassy / Consulate in India.',
      icon: Building2,
      badge: 'Step 4: Government Processing',
    },
    {
      step: '05',
      title: 'Receive Processed Documents',
      summary: 'Insured delivery or pickup',
      description:
        'Collect your verified original certificates stamped with official MEA and UAE Embassy attestation seals from our Bangalore office or receive them via insured express courier.',
      icon: Truck,
      badge: 'Step 5: Completion',
    },
  ];

  return (
    <section id="process" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Sequential Roadmap
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            How Does UAE Document Attestation Work?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            The UAE attestation workflow follows a rigorous legal hierarchy. While exact stages depend on whether the document is educational, personal, or commercial, this 5-step journey guides every client seamlessly.
          </p>
        </div>

        {/* 5-Step Numbered Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between relative hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-950 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-2">
                    {item.summary}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-400">
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span className="text-[10px] text-slate-500 font-medium">Logged & tracked</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Pipeline Detail: Notary -> State -> MEA -> UAE Embassy -> MOFA */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>The Legal Authentication Chain (India to UAE)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center">
            
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-500 block mb-1">Tier 1</span>
              <p className="text-xs font-bold text-slate-900">Notary Public</p>
              <p className="text-[11px] text-slate-600 mt-1">Initial certificate verification & advocate notarization</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-500 block mb-1">Tier 2</span>
              <p className="text-xs font-bold text-slate-900">State HRD / Home / SDM</p>
              <p className="text-[11px] text-slate-600 mt-1">State Education Dept, Home Secretariat, or SDM Delhi</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-500 block mb-1">Tier 3</span>
              <p className="text-xs font-bold text-slate-900">MEA India (CPV Division)</p>
              <p className="text-[11px] text-slate-600 mt-1">Ministry of External Affairs official stamp & sticker</p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-[10px] font-mono text-emerald-800 font-bold block mb-1">Tier 4</span>
              <p className="text-xs font-bold text-emerald-950">UAE Embassy / Consulate</p>
              <p className="text-[11px] text-emerald-800 mt-1">Diplomatic seal by Embassy in Delhi or Mumbai Consulate</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-500 block mb-1">Tier 5 (In UAE)</span>
              <p className="text-xs font-bold text-slate-900">MOFA (UAE)</p>
              <p className="text-[11px] text-slate-600 mt-1">Ministry of Foreign Affairs final stamp in the Emirates</p>
            </div>

          </div>

          <div className="mt-5 flex items-start gap-2.5 text-xs text-slate-600 bg-amber-50/60 p-3 rounded-lg border border-amber-200/60">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Procedural Note: </strong>
              The required stages depend strictly on your document type, state of issue, and receiving UAE employer or immigration authority. We confirm the exact, valid route for your specific certificate before taking custody.
            </p>
          </div>

          {/* CTA beneath the timeline */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                trackEvent('quote_cta_click', { placement: 'process_timeline_cta' });
                onOpenQuote();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              <span>Get Guidance for My Documents</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
