import { useState, Suspense, lazy } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Guarantees from '../components/Guarantees';
import WhyChoose from '../components/WhyChoose';
import ProductGrid from '../components/ProductGrid';
import WhoIsItFor from '../components/WhoIsItFor';
import StatsBanner from '../components/StatsBanner';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';

// Lazy load the modal since it is not needed on initial load
const OrderModal = lazy(() => import('../components/OrderModal'));

export default function Home() {
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
      
      <Suspense fallback={null}>
        <OrderModal 
          isOpen={isOrderModalOpen} 
          onClose={() => setIsOrderModalOpen(false)} 
        />
      </Suspense>
    </main>
  );
}
