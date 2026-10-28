import React, { useState } from 'react';
import {
  GraduationCap,
  Heart,
  Briefcase,
  Building,
  Scale,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  Info
} from 'lucide-react';
import { trackEvent } from '../utils/constants';

interface RequirementGuidanceProps {
  onOpenQuote: () => void;
}

export const RequirementGuidance: React.FC<RequirementGuidanceProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('educational');

  const categories = [
    {
      id: 'educational',
      title: 'Educational Certificates',
      icon: GraduationCap,
      description: 'Degrees, diplomas, postgraduate certificates, MBBS/MD, nursing credentials, engineering degrees, and school transcripts.',
      requirements: [
        { label: 'Original Degree / Diploma', note: 'Mandatory original certificate issued by an approved UGC/AICTE/State university.' },
        { label: 'All Semester Marksheets', note: 'Clear copies or original consolidated marksheets as required by state HRD.' },
        { label: 'Applicant Passport Copies', note: 'First page and address page clear color copies.' },
        { label: 'State HRD Prerequisites', note: 'Some states (e.g. Karnataka, Maharashtra, Kerala) require direct university verification first.' },
      ],
      typicalRoute: 'Notary → State Higher Education / HRD Department → MEA New Delhi → UAE Embassy',
    },
    {
      id: 'personal',
      title: 'Personal & Vital Records',
      icon: Heart,
      description: 'Birth certificates, marriage certificates, affidavits, single status declarations, and death certificates.',
      requirements: [
        { label: 'Original Government Certificate', note: 'Issued by Municipal Corporation, Sub-Registrar, or Gram Panchayat with English translation if vernacular.' },
        { label: 'Passport Copies', note: 'For marriage certificates: both husband & wife passport copies. For birth: child + both parents.' },
        { label: 'Valid Photo ID', note: 'Aadhaar / Voter ID copy of the primary applicant.' },
        { label: 'Translation (if applicable)', note: 'Official notarized English translation if certificate is in a regional state language.' },
      ],
      typicalRoute: 'Notary → State Home Department / SDM (Delhi) → MEA → UAE Embassy',
    },
    {
      id: 'employment',
      title: 'Employment Documents',
      icon: Briefcase,
      description: 'Experience certificates, relieving letters, nursing council registrations, professional standing certificates.',
      requirements: [
        { label: 'Original Letter on Letterhead', note: 'Duly signed and stamped with authorized signatory name and designation.' },
        { label: 'Joining & Relieving Proofs', note: 'Supporting pay slips, appointment letters, or PF statement if requested by verifying authority.' },
        { label: 'Applicant Passport Copy', note: 'Valid passport copy matching name on experience letter.' },
      ],
      typicalRoute: 'Notary → Home Department / Chamber / SDM → MEA → UAE Embassy',
    },
    {
      id: 'commercial',
      title: 'Commercial & Corporate Documents',
      icon: Building,
      description: 'Memorandum of Association (MOA), Articles (AOA), Board Resolutions, Certificate of Incorporation, Trade Agreements.',
      requirements: [
        { label: 'Original / Certified True Copy', note: 'Signed by authorized director or company secretary with corporate seal.' },
        { label: 'Chamber of Commerce Attestation', note: 'Pre-authentication by the recognized local Chamber of Commerce in India.' },
        { label: 'Director Identification & Passport', note: 'KYC proof of signing authority.' },
        { label: 'Company PAN & Incorporation Copy', note: 'Supporting corporate records.' },
      ],
      typicalRoute: 'Chamber of Commerce → MEA (Commercial Division) → UAE Embassy Commercial Section',
    },
    {
      id: 'poa',
      title: 'Power of Attorney & Legal Deeds',
      icon: Scale,
      description: 'Special and General Power of Attorney, property sales authorization, child custody affidavits, and legal deeds.',
      requirements: [
        { label: 'Executed Deed on Non-Judicial Stamp', note: 'Signed before Notary Public with two witness signatures.' },
        { label: 'Principals & Agent Passport Copies', note: 'Clear identity proofs for all parties mentioned.' },
        { label: 'Sub-Registrar / SDM Endorsement', note: 'Depending on jurisdiction and purpose in UAE.' },
      ],
      typicalRoute: 'Notary → State Home Secretariat / SDM → MEA → UAE Embassy',
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="requirements" className="py-16 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Preparation Checklist
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            What Documents May Be Required?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Prerequisites vary depending on the certificate type and issuing state department. Review the typical checklist below to prepare your submission.
          </p>
        </div>

        {/* Interactive Tab Switcher (Functional buttons per frontend-design guidelines) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {currentCategory.description}
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
              Typical Pipeline: {currentCategory.typicalRoute}
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {currentCategory.requirements.map((req, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{req.label}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{req.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mandated Disclaimer Callout */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Important Checklist Notice:</p>
              <p className="text-amber-900 leading-relaxed">
                Document requirements vary by document type, issuing authority, and intended use. Confirm the current requirements with our team before submitting original documents.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Not sure which prerequisites apply to your state certificate?
            </span>
            <button
              onClick={() => {
                trackEvent('quote_cta_click', {
                  placement: 'requirements_tab_cta',
                  category: currentCategory.title,
                });
                onOpenQuote();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              <span>Check My Document Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
