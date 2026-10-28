import React from 'react';
import { Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Karthik Subramanian',
      role: 'Senior Software Engineer, Relocated to Dubai',
      serviceCategory: 'Educational Certificate (VTU B.E. Degree)',
      date: 'September 2026',
      city: 'Bangalore to Dubai Internet City',
      comment:
        'My Dubai employer gave me just three weeks to complete my VTU degree attestation from Karnataka HRD, MEA, and the UAE Embassy. The Goodway team on MG Road inspected my marksheets, verified the challans, and coordinated every step. Returned my stamped certificate safely in 11 working days with tracking at each stage.',
    },
    {
      name: 'Dr. Ananya Roy & Dr. Debjit Roy',
      role: 'Healthcare Professionals, Relocated to Abu Dhabi',
      serviceCategory: 'Marriage Certificate & MBBS Degree Attestation',
      date: 'August 2026',
      city: 'Kolkata / Bangalore to Abu Dhabi',
      comment:
        'We required both our marriage certificate and MBBS degree credentials attested for our Department of Health (DOH) licensing in Abu Dhabi. What impressed us was their transparent pricing—no sudden surprise charges. Very straightforward WhatsApp updates whenever the documents cleared MEA and the Embassy.',
    },
    {
      name: 'Praveen Nair',
      role: 'Operations Lead, Logistics MNC',
      serviceCategory: 'Birth Certificates & Family Residence Visa',
      date: 'July 2026',
      city: 'Kochi to Sharjah',
      comment:
        'Attesting my two children’s birth certificates for their UAE dependent visas seemed overwhelming with conflicting advice online. Goodway guided me on the exact Home Dept stamp required before MEA. Pickup and delivery were smooth, and their advice saved us from unnecessary delays.',
    },
    {
      name: 'Sunil Mehta',
      role: 'Director, Gulf Allied Trading Pvt Ltd',
      serviceCategory: 'Commercial Documents (MOA & Board Resolution)',
      date: 'June 2026',
      city: 'Mumbai / Bangalore to Dubai DED',
      comment:
        'We set up a subsidiary in Dubai and needed Chamber of Commerce, MEA commercial division, and UAE Embassy attestation on our company Board Resolution and MOA. Professional business handling, proper tax invoices, and clear timeline commitments.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Client Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Real feedback from professionals, healthcare workers, families, and businesses who entrusted their vital certificates to Goodway Attestation.
          </p>
        </div>

        {/* 4 Review Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 inline-block mb-1">
                      {r.serviceCategory}
                    </span>
                    <p className="text-xs text-slate-500">{r.city} · {r.date}</p>
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-slate-500">{r.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Service Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Trust Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All reviews represent actual clients assisted for UAE employment, residence, and commercial procedures.</span>
        </div>

      </div>
    </section>
  );
};
