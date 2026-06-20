import { motion } from 'framer-motion';
import { CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';
import heroImg from '../assets/hero-image.jpg';
import tentImg from '../assets/dell-tent-new.jpg';
import tabletImg from '../assets/dell-2.jpg';

const products = [
  { id: 1, title: 'Laptop Mode', desc: 'Standard typing and productivity.', img: heroImg },
  { id: 2, title: 'Tent Mode', desc: 'Perfect for watching videos and presentations.', img: tentImg },
  { id: 4, title: 'Tablet Mode', desc: 'Fold it back completely for reading or drawing.', img: tabletImg }
];

export default function ProductGrid() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-24">
      <div className="flex flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-dark uppercase tracking-wide mb-2">Explore<br className="md:hidden" /> Versatility</h2>
          <div className="w-12 h-0.5 bg-brand-purple"></div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full bg-white border border-brand-gray flex items-center justify-center hover:bg-gray-50 transition-colors">
            <CaretLeft weight="bold" size={20} className="text-brand-dark" />
          </button>
          <button className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center hover:bg-black transition-colors">
            <CaretRight weight="bold" size={20} className="text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-brand-gray rounded-2xl p-6 relative group hover:shadow-xl transition-all duration-300"
          >
            <div className="h-64 w-full mb-6 relative rounded-xl overflow-hidden bg-brand-dark border border-gray-800 flex items-center justify-center p-2">
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h4>
              <p className="font-medium text-brand-muted text-sm">{item.desc}</p>
            </div>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <ArrowRight weight="bold" size={16} className="text-brand-dark" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
