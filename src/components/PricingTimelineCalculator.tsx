import React, { useState } from 'react';
import {
  Calculator,
  Clock,
  Coins,
  CheckCircle2,
  ArrowRight,
  Info,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import {
  DOCUMENT_CATEGORIES,
  POPULAR_CITIES,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/constants';
import { DocumentCategory } from '../types';

interface PricingTimelineCalculatorProps {
  onPrefillAndOpen: (docType: DocumentCategory, city: string) => void;
}

export const PricingTimelineCalculator: React.FC<PricingTimelineCalculatorProps> = ({
  onPrefillAndOpen,
}) => {
  const [docCategory, setDocCategory] = useState<DocumentCategory>('Degree Certificates');
  const [docCount, setDocCount] = useState<number>(1);
  const [issuingState, setIssuingState] = useState<string>('Karnataka');
  const [purpose, setPurpose] = useState<string>('Employment Visa (UAE)');
  const [selectedCity, setSelectedCity] = useState<string>('Bangalore');

  // Realistic estimates based on Indian state department procedures
  const getTimelineEstimate = () => {
    if (docCategory.includes('Commercial')) {
      return {
        stateVerification: '2–4 working days (Chamber)',
        meaTime: '2–3 working days',
        embassyTime: '3–5 working days',
        totalWorkingDays: '8–12 working days',
      };
    }
    if (issuingState === 'Karnataka' || issuingState === 'Maharashtra') {
      return {
        stateVerification: '3–6 working days (State HRD/Home)',
        meaTime: '2–3 working days',
        embassyTime: '3–4 working days',
        totalWorkingDays: '8–14 working days',
      };
    }
    return {
      stateVerification: '4–8 working days (Home / SDM)',
      meaTime: '2–3 working days',
      embassyTime: '3–4 working days',
      totalWorkingDays: '9–15 working days',
    };
  };

  const timeline = getTimelineEstimate();

  const handleRequestQuote = () => {
    trackEvent('quote_cta_click', {
      placement: 'pricing_calculator',
      category: docCategory,
      count: docCount,
      state: issuingState,
      city: selectedCity,
    });
    onPrefillAndOpen(docCategory, selectedCity);
  };

  return (
    <section id="calculator" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Transparent Estimates
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Understand Your Attestation Charges and Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Attestation fees are governed by official consular and ministry tariffs. Rather than misleading one-size-fits-all prices, explore the genuine factors that govern costs and timelines.
          </p>
        </div>

        {/* 2-Column Calculator & Cost Drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Cost Driver Matrix & Timeline Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-600" />
                <span>What Influences Your Total Attestation Fee?</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">1. Document Nature</p>
                  <p className="text-slate-600">
                    Commercial documents carry higher UAE Embassy consular tariffs than individual educational or personal certificates.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">2. Issuing State HRD Fees</p>
                  <p className="text-slate-600">
                    Different states charge specific treasury stamp fees or university verification challans (e.g. VTU, Mumbai Univ).
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">3. MEA India Tariffs</p>
                  <p className="text-slate-600">
                    Ministry of External Affairs official e-Sanad and apostille/attestation verification stamp costs.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">4. Logistics & Handling</p>
                  <p className="text-slate-600">
                    Bangalore walk-in submission vs insured return courier dispatch with tracking to your doorstep.
                  </p>
                </div>
              </div>

              {/* Dynamic Estimated Timeline Box */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    Estimated Stage Timelines ({issuingState} / {docCategory})
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {timeline.totalWorkingDays}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 text-slate-600">
                    <span>State Authentication / Verification:</span>
                    <span className="font-semibold text-slate-800 tabular-nums">{timeline.stateVerification}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 text-slate-600">
                    <span>Ministry of External Affairs (MEA):</span>
                    <span className="font-semibold text-slate-800 tabular-nums">{timeline.meaTime}</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-slate-600">
                    <span>UAE Embassy / Consular Stamp:</span>
                    <span className="font-semibold text-slate-800 tabular-nums">{timeline.embassyTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 bg-emerald-50/60 border border-emerald-200 p-3 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>We provide itemized invoices separating official government receipts from handling charges.</span>
            </div>

          </div>

          {/* Right: Personalized Quote Estimator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg">
              
              <div className="border-b border-slate-800 pb-4 mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <span>Request an Itemized Quote</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Configure your certificates to get an accurate cost sheet and timeline roadmap.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Document Type */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Document Category
                  </label>
                  <select
                    value={docCategory}
                    onChange={(e) => setDocCategory(e.target.value as DocumentCategory)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {DOCUMENT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Certificates */}
                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Number of Documents:</span>
                    <span className="font-mono text-emerald-400 font-bold">{docCount} Certificate{docCount > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, '5+'].map((num) => {
                      const val = typeof num === 'string' ? 5 : num;
                      const isSelected = docCount === val;
                      return (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setDocCount(val)}
                          className={`flex-1 py-1.5 rounded-md font-semibold transition-colors ${
                            isSelected
                              ? 'bg-[#009BFF] text-white'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Issuing State */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Issuing State in India
                  </label>
                  <select
                    value={issuingState}
                    onChange={(e) => setIssuingState(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#009BFF]"
                  >
                    <option value="Karnataka">Karnataka (Bengaluru / Mangaluru)</option>
                    <option value="Maharashtra">Maharashtra (Mumbai / Pune)</option>
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu (Chennai)</option>
                    <option value="Telangana">Telangana / Andhra Pradesh</option>
                    <option value="West Bengal">West Bengal (Kolkata)</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Other">Other Indian State</option>
                  </select>
                </div>

                {/* Intended Purpose */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Intended UAE Purpose
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#009BFF]"
                  >
                    <option value="Employment Visa (UAE)">UAE Employment / Work Visa</option>
                    <option value="Family Residence Visa">Family / Spouse / Child Residence</option>
                    <option value="Higher Education Admission">UAE University / School Admission</option>
                    <option value="Commercial / Branch Setup">Company Formation / Business Expansion</option>
                    <option value="Medical Licensing (DHA/MOH)">DHA / DOH / MOH Healthcare Licensing</option>
                    <option value="Other Purpose">Other Legal Purpose</option>
                  </select>
                </div>

                {/* Current City */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Current Submission Location
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#009BFF]"
                  >
                    {POPULAR_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action CTA in #FF7901 */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleRequestQuote}
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-[#FF7901] hover:bg-[#E56C00] active:scale-98 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/25"
                  >
                    <span>Request a Personalized Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Takes you to the prefilled quotation form above with zero obligation.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
