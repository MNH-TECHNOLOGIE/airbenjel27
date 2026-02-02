import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import PaymentModal from './components/PaymentModal';
import WhyElanSection from './components/WhyElanSection';
import BenefitsSection from './components/BenefitsSection';
import ParcoursSection from './components/ParcoursSection';
import PricingSection from './components/PricingSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <ContactForm onSuccess={() => setShowPaymentModal(true)} />
      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
      <WhyElanSection />
      <BenefitsSection />
      <ParcoursSection />
      <PricingSection />
      <CommunitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default App;
