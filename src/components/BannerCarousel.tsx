import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    desktopUrl: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776899813/$5iasznmfyc",
    mobileUrl: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776899813/$jqj2utjqd8",
    alt: "Multionic Industrial Banner 1",
    link: "/solucoes"
  },
  {
    id: 2,
    desktopUrl: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776899813/$0demb93rhvem",
    mobileUrl: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776899813/$pxv0yimwww",
    alt: "Multionic Industrial Banner 2",
    link: "/contato"
  }
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 mt-[80px]">
      <div className="w-full relative h-[400px] md:h-[700px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Link to={banners[current].link} className="block w-full h-full cursor-pointer">
              <img
                src={isMobile ? banners[current].mobileUrl : banners[current].desktopUrl}
                alt={banners[current].alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </Link>
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
