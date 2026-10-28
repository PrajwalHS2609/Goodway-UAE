import React, { useState } from 'react';
import {
  MapPin,
  Building,
  Truck,
  CheckCircle2,
  Clock,
  Phone,
  Search,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG, POPULAR_CITIES, trackEvent } from '../utils/constants';

interface BangaloreAndCoverageSectionProps {
  onOpenQuote: () => void;
}

export const BangaloreAndCoverageSection: React.FC<BangaloreAndCoverageSectionProps> = ({
  onOpenQuote,
}) => {
  const [cityQuery, setCityQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleCitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityQuery.trim()) return;

    setSearchResult(
      `Service Available: We provide doorstep insured courier pickup and delivery in ${cityQuery.trim()}, coordinated via our Bangalore central operations hub.`
    );
  };

  return (
    <section id="bangalore-hub" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12" id="malleshwaram-hub">
          <p className="text-xs font-bold uppercase tracking-wider text-[#009BFF] mb-2">
            Walk-in Center & Service Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Malleshwaram Bengaluru Office & Pan-India Service
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Headquartered in Malleshwaram, Bengaluru with direct administrative coordination across State Secretariats, the Ministry of External Affairs, and the UAE Embassy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Dedicated Malleshwaram Flagship Office Spotlight */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-wider mb-3">
                <Building className="w-4 h-4 text-[#FF7901]" />
                <span>Malleshwaram Walk-in Consultation Center</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Goodway Attestation - Bengaluru Head Office
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Clients in Bengaluru and across Karnataka can visit our physical office in Malleshwaram. Bring your original educational degrees, marriage certificates, or commercial papers for on-the-spot document inspection, verification guidance, and formal physical intake receipt.
              </p>

              <div className="space-y-3.5 text-xs bg-slate-800/90 p-5 rounded-xl border border-slate-700 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF7901] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-sm block mb-1">
                      Goodway Attestation (Shop No. 2)
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {BUSINESS_CONFIG.address.fullFormatted}
                    </p>
                    <span className="text-[11px] text-amber-300 font-semibold block mt-1">
                      Landmark: Opp. Canara Bank, 11th Cross, Temple Street
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2.5 border-t border-slate-700/80 text-slate-300">
                  <Clock className="w-4 h-4 text-[#009BFF] shrink-0" />
                  <span>{BUSINESS_CONFIG.operatingHours}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2.5 border-t border-slate-700/80 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#009BFF] shrink-0" />
                    <span>Helpline:</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-white tabular-nums">
                    <a href={`tel:${BUSINESS_CONFIG.phonePrimary}`} className="text-[#009BFF] hover:underline">
                      {BUSINESS_CONFIG.phonePrimaryDisplay}
                    </a>
                    <span>/</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneSecondary}`} className="text-[#009BFF] hover:underline">
                      {BUSINESS_CONFIG.phoneSecondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-[11px] text-slate-300 mb-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Official physical receipt provided</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free scan assessment at desk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Near Sampige Road / Metro accessible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Fireproof safe document custody</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
              <a
                href={BUSINESS_CONFIG.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('phone_cta_click', { placement: 'google_maps_directions' })}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
                onClick={() => trackEvent('phone_cta_click', { placement: 'bangalore_hub_desk' })}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#009BFF]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right: Pan-India Coverage & Courier Arrangements */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Truck className="w-4 h-4 text-emerald-700" />
                <span>Pan-India Courier Network</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Secure Document Handling Nationwide
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                If you are located outside Bangalore, you don’t need to travel to state capitals or Delhi. We coordinate insured courier collections and deliveries across all major cities and tier-2 districts in India.
              </p>

              {/* Major Cities Pills */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-700 mb-2">Key Regular Pickup Locations:</p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_CITIES.map((city) => (
                    <span
                      key={city}
                      className="text-xs bg-white text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-md"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive City Availability Checker */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4">
                <p className="text-xs font-bold text-slate-900 mb-2">
                  Check Service Availability in My City
                </p>
                <form onSubmit={handleCitySearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter your city or pin code (e.g. Pune, Kochi, Jaipur)..."
                      value={cityQuery}
                      onChange={(e) => {
                        setCityQuery(e.target.value);
                        setSearchResult(null);
                      }}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg whitespace-nowrap cursor-pointer transition-colors"
                  >
                    Check
                  </button>
                </form>

                {searchResult && (
                  <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{searchResult}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Insured return courier with live Air Waybill tracking</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Direct physical submission at MEA and UAE Embassy counters</span>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6">
              <button
                onClick={() => {
                  trackEvent('quote_cta_click', { placement: 'coverage_check_cta' });
                  onOpenQuote();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-900 bg-slate-200 hover:bg-slate-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Arrange Document Pickup / Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
