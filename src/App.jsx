import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Guarantees from './components/Guarantees';
import WhyChoose from './components/WhyChoose';
import ProductGrid from './components/ProductGrid';
import WhoIsItFor from './components/WhoIsItFor';
import StatsBanner from './components/StatsBanner';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import ThankYou from './components/ThankYou';
import StickyCTA from './components/StickyCTA';

function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <main className="flex-1 w-full relative overflow-hidden">
      <Header onOrderClick={handleOrderClick} />
      <Hero onOrderClick={handleOrderClick} />
      <Guarantees />
      <WhyChoose />
      <WhoIsItFor />
      <ProductGrid />
      <StatsBanner />
      <Testimonials />
      <FAQSection />
      <CTASection onOrderClick={handleOrderClick} />
      <StickyCTA onOrderClick={handleOrderClick} />
      <Footer />
      
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </main>
  );
}

function App() {
  return (
    <div className="flex min-h-screen selection:bg-brand-purple/30">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
