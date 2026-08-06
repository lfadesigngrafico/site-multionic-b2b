import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "SABONETES", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$80eaiks4abk" },
  { name: "DESENGRAXANTES", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$25n6px0c5lz" },
  { name: "COZINHA INDUSTRIAL", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$2jf97akfrt3" },
  { name: "LAVANDERIA", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$dzc7ne5kwhj" },
  { name: "LIMPEZA GERAL", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$ruwf1m2e67l" },
  { name: "TRATAMENTO DE PISOS", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$f3czf9txgof" },
  { name: "PRODUTOS ESPECÍFICOS", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786045308/$bksrbhml83m" },
  { name: "SUA MARCA, NOSSA PRODUÇÃO", image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1779725014/$dx814ryzur" }
];

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary uppercase tracking-tight"
          >
            SOLUÇÕES DESENVOLVIDAS PARA:
          </motion.h2>
        </div>

        <div className="relative flex justify-center items-center px-4">
          {/* Navigation Arrows */}
          <div className="absolute left-0 lg:left-10 z-40 hidden md:block">
            <button 
              onClick={prevSlide}
              className="p-4 text-[#3B529B] hover:scale-125 transition-transform duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={64} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="absolute right-0 lg:right-10 z-40 hidden md:block">
            <button 
              onClick={nextSlide}
              className="p-4 text-[#3B529B] hover:scale-125 transition-transform duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={64} strokeWidth={2.5} />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div className="relative flex justify-center items-center w-full max-w-6xl h-[280px] md:h-[400px]">
            {categories.map((item, index) => {
              // Calculate relative position to currentIndex
              let position = index - currentIndex;
              
              // Handle infinite loop positioning
              if (position < -Math.floor(categories.length / 2)) position += categories.length;
              if (position > Math.floor(categories.length / 2)) position -= categories.length;

              const isCenter = position === 0;
              const isSide = Math.abs(position) === 1;
              const isHidden = Math.abs(position) > 1;

              return (
                <motion.div
                  key={item.name}
                  initial={false}
                  animate={{
                    x: position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 250),
                    scale: isCenter ? 1 : 0.75,
                    opacity: isHidden ? 0 : 1,
                    filter: isCenter ? 'blur(0px)' : 'blur(6px)',
                    zIndex: 30 - Math.abs(position) * 10,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.32, 0.72, 0, 1] 
                  }}
                  className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] overflow-hidden shadow-2xl"
                >
                  <Link to="/produtos" className="block w-full h-full">
                    <div className="relative w-full h-full group">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover brightness-[0.65] contrast-125 transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                        <h3 className="text-white text-center text-lg md:text-2xl font-bold uppercase tracking-[0.15em] pl-[0.15em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-8 mt-12 md:hidden">
          <button 
            onClick={prevSlide}
            className="p-3 bg-gray-100 rounded-full text-[#3B529B] active:scale-95"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-gray-100 rounded-full text-[#3B529B] active:scale-95"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
