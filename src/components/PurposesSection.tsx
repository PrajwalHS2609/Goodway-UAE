import React from 'react';
import {
  Briefcase,
  Users,
  GraduationCap,
  Building2,
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '../utils/constants';

interface PurposesSectionProps {
  onOpenQuote: () => void;
}

export const PurposesSection: React.FC<PurposesSectionProps> = ({ onOpenQuote }) => {
  const purposes = [
    {
      title: 'Employment & Career Relocation',
      icon: Briefcase,
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      description:
        'UAE Ministry of Human Resources and Emiratisation (MOHRE) mandates degree and qualification attestation for issuing skilled employment visas, labor cards, and professional titles across Dubai, Abu Dhabi, and Sharjah.',
      keyDocs: ['Engineering & Degree Certificates', 'MBBS, Nursing & Medical Registrations', 'Experience Letters'],
    },
    {
      title: 'Family & Dependent Residence',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description:
        'Sponsoring your spouse or children on a UAE residency visa requires authenticated vital records. The General Directorate of Residency and Foreigners Affairs (GDRFA) requires embassy-attested birth and marriage certificates.',
      keyDocs: ['Marriage Certificates', 'Children’s Birth Certificates', 'Affidavits & Sponsorship Undertakings'],
    },
    {
      title: 'Higher Education & Schooling',
      icon: GraduationCap,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      description:
        'Students enrolling in UAE universities, colleges, or private schools need their prior marksheets, transfer certificates (TC), and diploma credentials authenticated by the Ministry of External Affairs and UAE authorities.',
      keyDocs: ['School Transfer Certificates (TC)', 'Senior Secondary Marksheets', 'Undergraduate Diplomas & Transcripts'],
    },
    {
      title: 'Business & Commercial Setup',
      icon: Building2,
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      description:
        'Foreign corporate entities, free zone startups, and branch offices expanding into the UAE must authenticate foundational business agreements before registering with UAE Department of Economy and Tourism (DET).',
      keyDocs: ['Memorandum of Association (MOA)', 'Board Resolutions & Power of Attorney', 'Certificate of Incorporation'],
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Target Purpose Pathways
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            UAE Attestation for Work, Family, Education and Business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            The precise verification prerequisites depend strictly on the receiving UAE government department or corporate entity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${p.color} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 mb-2">Common Documents:</p>
                    <ul className="space-y-1">
                      {p.keyDocs.map((doc, idx) => (
                        <li key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      trackEvent('quote_cta_click', {
                        placement: 'purposes_card_cta',
                        purpose: p.title,
                      });
                      onOpenQuote();
                    }}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tell Us What You Need</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
