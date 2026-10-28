import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RequirementGuidance } from './components/RequirementGuidance';
import { PricingTimelineCalculator } from './components/PricingTimelineCalculator';
import { PurposesSection } from './components/PurposesSection';
import { BangaloreAndCoverageSection } from './components/BangaloreAndCoverageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LegalModal } from './components/LegalModals';
import { AnalyticsDrawer } from './components/AnalyticsDrawer';
import { DocumentCategory, LeadFormData } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory | ''>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToQuoteForm = (category?: DocumentCategory) => {
    if (category) {
      setSelectedCategory(category);
    }
    const formEl = document.getElementById('quote-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // highlight briefly
      const input = formEl.querySelector('input');
      if (input) input.focus();
    }
  };

  const handleSelectService = (category: DocumentCategory) => {
    scrollToQuoteForm(category);
  };

  const handleCalculatorPrefill = (category: DocumentCategory) => {
    scrollToQuoteForm(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Sticky Navigation Header */}
      <Header onOpenQuote={() => scrollToQuoteForm()} />

      <main className="flex-1">
        
        {/* 2. Hero Section with Lead Capture Form (Above the fold) */}
        <HeroSection
          selectedCategory={selectedCategory}
          onFormSubmitted={(data) => {
            console.log('Lead submitted to Goodway CRM:', data);
          }}
        />

        {/* 3. Trust & Credibility Section */}
        <TrustSection onOpenQuote={() => scrollToQuoteForm()} />

        {/* 4. UAE Attestation Services Overview (8 Document Categories) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. How Does UAE Document Attestation Work? (5-step timeline) */}
        <ProcessTimeline onOpenQuote={() => scrollToQuoteForm()} />

        {/* 6. Why Customers Choose Us (Truthful, compliant value propositions) */}
        <WhyChooseUs onOpenQuote={() => scrollToQuoteForm()} />

        {/* 7. What Documents May Be Required? (Preparation matrix & disclaimer) */}
        <RequirementGuidance onOpenQuote={() => scrollToQuoteForm()} />

        {/* 8. Understand Your Attestation Charges and Timeline (Estimator) */}
        <PricingTimelineCalculator onPrefillAndOpen={handleCalculatorPrefill} />

        {/* 9. UAE Attestation for Work, Family, Education and Business */}
        <PurposesSection onOpenQuote={() => scrollToQuoteForm()} />

        {/* 10. Service Coverage & Bangalore Operations Hub */}
        <BangaloreAndCoverageSection onOpenQuote={() => scrollToQuoteForm()} />

        {/* 11. Customer Reviews and Testimonials */}
        <TestimonialsSection />

        {/* 12. Frequently Asked Questions (All 15 questions) */}
        <FaqSection />

        {/* 13. Final Conversion Section (3 conversion pathways) */}
        <FinalCtaSection onOpenQuote={() => scrollToQuoteForm()} />

      </main>

      {/* 14. Comprehensive Footer with statutory disclaimer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenQuote={() => scrollToQuoteForm()}
      />

      {/* 15. Sticky & Floating Conversion: Desktop WhatsApp + Mobile bottom action bar */}
      <FloatingActions onOpenQuote={() => scrollToQuoteForm()} />

      {/* 16. Legal Modals (Privacy Policy & Terms/Disclaimer) */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />

      {/* 17. CRO Analytics & Conversion Tracker Drawer */}
      <AnalyticsDrawer />

    </div>
  );
}
