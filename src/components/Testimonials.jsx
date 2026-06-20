import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretRight, Star } from '@phosphor-icons/react';

const reviews = [
  {
    name: "Chinedu Okafor",
    role: "University Student",
    text: "This Dell 3190 is exactly what I needed for my final year project. The battery life easily lasts me through back-to-back lectures without needing to plug in. Highly recommended!",
    rating: 5
  },
  {
    name: "Amina Yusuf",
    role: "Freelance Writer",
    text: "I love how lightweight and compact it is. I can slip it into my tote bag and work from any cafe in Lagos. The keyboard is also surprisingly comfortable for long typing sessions.",
    rating: 5
  },
  {
    name: "Oluwaseun Adebayo",
    role: "Small Business Owner",
    text: "For the price, the performance is unmatched. The 8GB RAM handles all my inventory software and spreadsheets smoothly. Best investment for my shop this year.",
    rating: 4
  },
  {
    name: "Nneka Eze",
    role: "High School Teacher",
    text: "I bought this for my online classes and it has been perfect. The camera is clear, and the rugged build gives me peace of mind when my kids are around it.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    hidden: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  return (
    <section className="px-6 lg:px-12 pb-24 relative z-30 overflow-hidden">
      <div className="flex flex-col items-center mb-12">
        <p className="text-brand-purple font-bold text-[10px] tracking-widest uppercase mb-4">Testimonials</p>
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark uppercase tracking-wide mb-2 text-center">What Our Customers Say</h2>
        <div className="w-12 h-0.5 bg-brand-lime"></div>
      </div>

      <div className="max-w-4xl mx-auto relative px-8 lg:px-16">
        <div className="relative min-h-[320px] md:min-h-[256px] h-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center text-center justify-center bg-white rounded-3xl shadow-xl p-8 border border-brand-gray"
            >
              <div className="flex gap-1 text-brand-lime mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} weight="fill" size={20} />
                ))}
              </div>
              <p className="text-brand-dark text-lg md:text-xl italic mb-6 font-medium leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-bold text-brand-dark">{reviews[currentIndex].name}</h4>
                <p className="text-brand-muted text-sm">{reviews[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={slidePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark hover:bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
        >
          <CaretLeft weight="bold" size={24} />
        </button>
        <button 
          onClick={slideNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark hover:bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
        >
          <CaretRight weight="bold" size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-purple' : 'w-2 bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
