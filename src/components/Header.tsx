import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Segmentos atendidos', href: '#segmentos' },
    { name: 'Sua marca, nossa produção', href: '#marca-propria' },
    { name: 'Sobre a Multionic', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="px-4 md:px-8 xl:px-12 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img 
            src="https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/mobile/1124971_1_175079214239449921.png" 
            alt="Multionic Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-black font-normal hover:text-brand-secondary transition-colors text-[11px] tracking-tight whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="bg-bg-light text-brand-primary border-none px-4 py-2 text-[10px] font-bold tracking-tight shadow-none rounded-none transition-all duration-300 hover:bg-brand-primary hover:text-white">
            Solicitar ficha técnica
          </button>
          <button className="btn-primary px-4 py-2 text-[10px] font-bold tracking-tight shadow-none rounded-none">
            Fale com um especialista
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-black font-normal text-lg px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-2">
                <button className="bg-bg-light text-brand-primary border-none px-6 py-4 text-sm font-bold tracking-tight shadow-none rounded-none transition-all duration-300 hover:bg-brand-primary hover:text-white">
                  Solicitar ficha técnica
                </button>
                <button className="btn-primary w-full py-4 text-sm font-bold tracking-tight shadow-none rounded-none">
                  Fale com um especialista
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
