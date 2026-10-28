import React from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Baby,
  FileSignature,
  Building,
  Scale,
  FileQuestion,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { DocumentCategory, ServiceItem } from '../types';
import { trackEvent } from '../utils/constants';

interface ServicesSectionProps {
  onSelectService: (category: DocumentCategory) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services: ServiceItem[] = [
    {
      id: 'educational',
      title: 'Educational Certificate Attestation',
      category: 'Educational Certificates',
      shortDesc:
        'Degrees (B.Tech, MBBS, B.Com, MBA), diplomas, and school marksheets required for UAE employment visas, professional licensing, or university admission.',
      details:
        'Typically involves University Verification, State HRD / Higher Education Department authentication, MEA New Delhi, and UAE Embassy.',
      targetAudience: 'Job seekers, engineers, doctors, nurses & students',
      typicalTimeline: '8–14 working days (subject to state HRD)',
      prerequisites: ['Original degree / certificate', 'All semester marksheets', 'Passport copy'],
      ctaLabel: 'Enquire About Educational Attestation',
    },
    {
      id: 'personal',
      title: 'Personal Document Attestation',
      category: 'Personal Documents',
      shortDesc:
        'Non-educational certificates including affidavits, single status certificates, medical fitness certificates, and police clearances for UAE residency.',
      details:
        'Processed via Notary Public, State Home Department / Sub-Divisional Magistrate (SDM), MEA India, and UAE Embassy.',
      targetAudience: 'Individuals applying for UAE residence & relocation',
      typicalTimeline: '5–8 working days',
      prerequisites: ['Original certificate', 'Applicant passport copy'],
      ctaLabel: 'Get Personal Document Assistance',
    },
    {
      id: 'employment',
      title: 'Employment-Related Certificate Attestation',
      category: 'Experience Certificates',
      shortDesc:
        'Work experience letters, professional registrations, salary slips, and qualification transcripts demanded by UAE employers and regulatory bodies.',
      details:
        'Verification of employer issuance, state home or chamber validation, MEA, and UAE consular stamps for official job contract compliance.',
      targetAudience: 'Corporate transferees, IT professionals, healthcare workers',
      typicalTimeline: '6–9 working days',
      prerequisites: ['Original experience letter on company letterhead', 'Passport copy'],
      ctaLabel: 'Check My Certificate Requirements',
    },
    {
      id: 'birth',
      title: 'Birth Certificate Attestation',
      category: 'Birth Certificates',
      shortDesc:
        'Essential for children’s dependent residency visa sponsorship, UAE school admissions, newborn insurance registration, and family residence files.',
      details:
        'Authenticated by State Home Department / SDM, Ministry of External Affairs, and UAE Embassy in India before submission to UAE immigration.',
      targetAudience: 'Parents moving with children or sponsoring dependents in UAE',
      typicalTimeline: '5–7 working days',
      prerequisites: ['Original birth certificate', 'Parents’ passport copies', 'Visa copies'],
      ctaLabel: 'Enquire About Birth Certificate Attestation',
    },
    {
      id: 'marriage',
      title: 'Marriage Certificate Attestation',
      category: 'Marriage Certificates',
      shortDesc:
        'Mandatory for sponsoring your spouse on a UAE family residence visa, registering joint tenancy agreements, and banking paperwork in Dubai or Abu Dhabi.',
      details:
        'Sub-Registrar marriage certificate authentication through State Home Dept, MEA New Delhi, and UAE Embassy / Consulate.',
      targetAudience: 'Couples relocating together or sponsoring spouses',
      typicalTimeline: '5–8 working days',
      prerequisites: ['Original marriage certificate', 'Both spouses’ passport copies'],
      ctaLabel: 'Get Marriage Certificate Guidance',
    },
    {
      id: 'commercial',
      title: 'Commercial Document Attestation',
      category: 'Commercial Documents',
      shortDesc:
        'Corporate paperwork including Memorandum of Association (MOA), Articles of Association (AOA), Board Resolutions, Invoices, and Trade Licenses.',
      details:
        'Chamber of Commerce attestation, Ministry of External Affairs (MEA), and UAE Embassy commercial section attestation.',
      targetAudience: 'Businesses expanding into UAE, branch offices, export firms',
      typicalTimeline: '7–12 working days',
      prerequisites: ['Original company documents', 'Chamber certification', 'Director identification'],
      ctaLabel: 'Discuss Commercial Documents',
    },
    {
      id: 'poa',
      title: 'Power of Attorney Attestation',
      category: 'Power of Attorney',
      shortDesc:
        'Authorizing representatives or legal counsels in the UAE to execute financial, property, or corporate transactions on your behalf.',
      details:
        'Sub-registrar / Notarization, Home Department, MEA, and UAE Embassy legal attestation before MOFA countersigning in UAE.',
      targetAudience: 'Property investors, legal representatives, NRIs',
      typicalTimeline: '6–10 working days',
      prerequisites: ['Original executed POA document', 'Passport & address identification'],
      ctaLabel: 'Enquire About Power of Attorney',
    },
    {
      id: 'other',
      title: 'Other Document Attestation',
      category: 'Other Documents',
      shortDesc:
        'Specialized documents including divorce decrees, death certificates, migration certificates, court orders, or veterinary health papers.',
      details:
        'Case-by-case procedural roadmap with tailored verification depending on the issuing government department and UAE ministry requirements.',
      targetAudience: 'Any client with unique document authentication needs',
      typicalTimeline: 'Custom timeline based on document nature',
      prerequisites: ['Document scan for preliminary assessment', 'Passport copy'],
      ctaLabel: 'Discuss Your Requirements',
    },
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'educational':
        return <GraduationCap className="w-5 h-5 text-blue-700" />;
      case 'personal':
        return <HeartHandshake className="w-5 h-5 text-rose-700" />;
      case 'employment':
        return <Briefcase className="w-5 h-5 text-amber-700" />;
      case 'birth':
        return <Baby className="w-5 h-5 text-emerald-700" />;
      case 'marriage':
        return <FileSignature className="w-5 h-5 text-purple-700" />;
      case 'commercial':
        return <Building className="w-5 h-5 text-slate-800" />;
      case 'poa':
        return <Scale className="w-5 h-5 text-indigo-700" />;
      default:
        return <FileQuestion className="w-5 h-5 text-teal-700" />;
    }
  };

  const handleCardClick = (service: ServiceItem) => {
    trackEvent('service_prefill_click', {
      serviceId: service.id,
      category: service.category,
    });
    onSelectService(service.category);
  };

  return (
    <section id="services" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Comprehensive Service Catalog
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              UAE Attestation Services for Different Document Types
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your document category to prefill your enquiry. Requirements vary according to document type, issuing authority, and intended UAE purpose.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 p-3 rounded-lg max-w-xs">
            <span className="font-semibold text-slate-800">Note: </span>
            Every category links directly to the quote builder with prefilled document details.
          </div>
        </div>

        {/* 8 Clean Structured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {service.typicalTimeline}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-[#009BFF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Prerequisites checklist */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <p className="text-[11px] font-semibold text-slate-500">Typical requirements:</p>
                  {service.prerequisites.map((prereq, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle className="w-3 h-3 text-[#009BFF] shrink-0 mt-0.5" />
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button in brand styling */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleCardClick(service)}
                  className="w-full py-2.5 px-3 text-xs font-bold text-slate-900 bg-sky-50 hover:bg-[#FF7901] hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Reminder */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            <strong className="text-slate-800">Important Advisory: </strong>
            Document requirements vary by document type, issuing authority, and intended use. Confirm current requirements with our team before submitting original documents.
          </p>
          <a
            href="#quote-form"
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline whitespace-nowrap shrink-0"
          >
            Check Your Exact Case
          </a>
        </div>

      </div>
    </section>
  );
};
