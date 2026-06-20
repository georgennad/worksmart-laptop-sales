import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WhatsappLogo, CreditCard, LockKey } from '@phosphor-icons/react';

export default function OrderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const message = `Hello, I want to order the Dell 3190.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Address:* ${formData.address}`;
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank');
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    // Redirect to Paystack payment link
    // The Thank You page URL should be configured inside the Paystack dashboard
    window.location.href = "https://paystack.com/pay/worksmart-laptop";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div 
              className="flex min-h-full items-center justify-center p-4"
              onClick={onClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl border-2 border-brand-gray"
              >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X weight="bold" size={20} className="text-brand-dark" />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-2">Order Details</h2>
                <p className="text-brand-muted text-sm">Please fill in your details to complete your order for the Dell 3190.</p>
              </div>

              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-brand-gray/30 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-purple transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-brand-gray/30 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-purple transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wide mb-2">Delivery Address</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full delivery address"
                    rows="3"
                    className="w-full bg-brand-gray/30 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-purple transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <WhatsappLogo weight="fill" size={22} />
                    Order via WhatsApp
                  </button>
                  
                  <button 
                    onClick={handlePayNow}
                    className="w-full bg-brand-dark hover:bg-black text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <CreditCard weight="fill" size={22} />
                    Pay Now
                  </button>
                </div>

                <div className="mt-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mb-3">
                    <LockKey weight="fill" size={14} />
                    <span>Guaranteed Safe & Secure Checkout</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    {/* Placeholder for Paystack/Flutterwave/Card logos */}
                    <div className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-600 border border-gray-200">PAYSTACK</div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-600 border border-gray-200">FLUTTERWAVE</div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-600 border border-gray-200">VISA</div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-600 border border-gray-200">MASTERCARD</div>
                  </div>
                </div>
              </form>
            </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
