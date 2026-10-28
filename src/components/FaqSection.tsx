import React, { useState } from 'react';
import { ChevronDown, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, trackEvent } from '../utils/constants';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. What is UAE document attestation?',
      a: 'UAE document attestation is the formal legal authentication of documents issued in India (such as educational degrees, marriage/birth certificates, or commercial deeds) by designated Indian government authorities, the Ministry of External Affairs (MEA), and the UAE Embassy or Consulate in India. This verifies the authenticity of the seals and signatures so that UAE governmental bodies and employers can legally accept them.',
    },
    {
      q: '2. Why might I need document attestation for the UAE?',
      a: 'You will need UAE attestation when applying for a UAE employment visa (MOHRE labor card), securing professional licensing (DHA/DOH/MOH for healthcare or engineering boards), sponsoring family members or children on dependent residence visas, enrolling in UAE schools/universities, or establishing a corporate branch/trade entity in the Emirates.',
    },
    {
      q: '3. Which documents can be submitted for UAE attestation?',
      a: 'Three broad categories can be submitted: (1) Educational certificates (Degrees, Diplomas, Transcripts, School TCs), (2) Personal/Non-educational certificates (Birth, Marriage, Police Clearance PCC, Affidavits, Medical certificates), and (3) Commercial documents (Memorandum of Association, Articles, Board Resolutions, Invoices, Trade Licenses, Power of Attorney).',
    },
    {
      q: '4. What is the process for educational certificate attestation?',
      a: 'The typical route starts with University Verification, followed by State Higher Education / HRD Department authentication in the state where the university is located, then Ministry of External Affairs (MEA, New Delhi) attestation, and finally the UAE Embassy in New Delhi or UAE Consulate in Mumbai. In certain urgent situations where State HRD takes excessive time, an SDM (Sub-Divisional Magistrate) route may be reviewed depending on employer acceptance.',
    },
    {
      q: '5. Is the process the same for birth and marriage certificates?',
      a: 'No. Birth and marriage certificates are non-educational personal records and are typically routed through the Notary Public, followed by the State Home Department (or SDM Delhi), then MEA India, and finally the UAE Embassy. They do not require State HRD/University verification.',
    },
    {
      q: '6. Which authorities may be involved in UAE attestation from India?',
      a: 'Depending on document type: (1) Notary Public, (2) Issuing University or Municipal Registrar, (3) State HRD or State Home Department / General Administration Department, (4) Sub-Divisional Magistrate (SDM), (5) Ministry of External Affairs (MEA, CPV Division, Government of India), (6) UAE Embassy in New Delhi or UAE Consulate General in Mumbai, and (7) MOFA in the UAE.',
    },
    {
      q: '7. How long does UAE attestation take?',
      a: 'Personal certificates usually take 5 to 8 working days. Educational degree attestation typically takes 8 to 14 working days because it involves state department verifications. Commercial documents take approximately 7 to 12 working days. We communicate exact current timelines based on the state of issuance before processing.',
    },
    {
      q: '8. How much does UAE document attestation cost?',
      a: 'Total charges depend on document category (educational, personal, commercial), state department challan fees, MEA fees, UAE Embassy consular tariffs, and optional insured return courier services. We provide an upfront, itemized quotation before taking custody of your documents so you know exactly what is charged.',
    },
    {
      q: '9. Can I request UAE attestation assistance from Bangalore?',
      a: 'Yes. Bengaluru is our head office and flagship operations hub. You can visit our office in Malleshwaram (#134, Shop No. 2, 1st Floor, K.N Complex, 11th Cross, Temple Street, Opp. Canara Bank) for in-person document intake, receipt, and guidance, or request our insured document pickup from your home or office across Bengaluru.',
    },
    {
      q: '10. Can I enquire about the process through WhatsApp?',
      a: 'Yes! WhatsApp is one of our primary support channels. You can send a picture or scan of your document, and our team will review the seals and explain the exact required steps, timelines, and costs directly.',
    },
    {
      q: '11. Do I need to submit original documents?',
      a: 'Yes. For UAE Embassy attestation, government ministries and the UAE Embassy physically apply legal stamps, hologram stickers, and seals onto the back of the original document. We also require a clear copy of the applicant’s valid passport.',
    },
    {
      q: '12. Can you assist with multiple documents in one enquiry?',
      a: 'Absolutely. Many clients relocating with family require a degree certificate, marriage certificate, and child’s birth certificate processed concurrently. We bundle these together to optimize timeline synchronisation and courier costs.',
    },
    {
      q: '13. What happens if my document requires additional authentication?',
      a: 'If a document requires prior university verification, state translation (for regional language birth/marriage certificates), or sub-registrar endorsement, our advisors inform you in advance and facilitate the required pre-requisite step.',
    },
    {
      q: '14. How can I check the status of my documents?',
      a: 'We provide structured status updates upon document receipt at our Bangalore office, upon MEA submission, upon UAE Embassy clearance, and upon return dispatch with the courier tracking Air Waybill (AWB) number.',
    },
    {
      q: '15. What should I do before submitting my documents?',
      a: 'Check that your original certificate has no severe tears, that names match your current passport spelling, and have high-resolution scans ready. Send scans to our team via form or WhatsApp for a free pre-check before handing over originals.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            Clear Answers
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Everything you need to know about UAE Embassy attestation in India, state authentication, timelines, and document security.
          </p>
        </div>

        {/* 15 Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory CTA beneath FAQ section */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Still Have Questions? Talk to Our Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our document advisors are available to assess your specific certificate requirements and clarify any procedural step.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimary}`}
              onClick={() => trackEvent('phone_cta_click', { placement: 'faq_cta_primary' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#009BFF] hover:bg-[#0084E0] rounded-xl transition-colors shadow-md shadow-sky-500/20"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Helpline: <span className="tabular-nums">{BUSINESS_CONFIG.phonePrimaryDisplay}</span></span>
            </a>

            <a
              href={getWhatsAppUrl(undefined, undefined, 'faq_bottom')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_cta_click', { placement: 'faq_cta' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#FF7901] hover:bg-[#E56C00] rounded-xl transition-colors shadow-md shadow-orange-500/20"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp: +91 91488 89444</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
