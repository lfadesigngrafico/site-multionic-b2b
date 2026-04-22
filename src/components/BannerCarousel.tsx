import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const banners = [
  {
    id: 1,
    url: "https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/desktop/1124971_1_17344573766761b8209bb54.jpg",
    alt: "Multionic Industrial Banner 1"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920&h=700",
    alt: "Laboratório e Inovação 2"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1532187863486-abf51ad9866e?auto=format&fit=crop&q=80&w=1920&h=700",
    alt: "Produtos Químicos de Alta Performance 3"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1558444479-c8a51e975209?auto=format&fit=crop&q=80&w=1920&h=700",
    alt: "Processo Industrial Moderno 4"
  }
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 mt-[80px]">
      <div className="w-full relative h-[400px] md:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={banners[current].url}
              alt={banners[current].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-none transition-all duration-300 ${
                current === idx ? 'bg-brand-secondary w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
