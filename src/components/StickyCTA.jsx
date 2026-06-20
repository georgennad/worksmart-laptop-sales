import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export default function StickyCTA({ onOrderClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px (past the hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden"
        >
          <div className="bg-brand-dark/95 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-800">
            <div className="flex flex-col ml-2">
              <span className="text-white font-bold text-sm leading-tight">₦205,000</span>
              <del className="text-gray-400 text-[10px]">₦230,000</del>
            </div>
            
            <button 
              onClick={onOrderClick}
              className="bg-brand-lime hover:bg-[#bce000] text-brand-dark px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <ShoppingCart weight="fill" size={18} />
              Order Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
