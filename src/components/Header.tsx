import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '/solucoes', type: 'internal' },
    { name: 'Segmentos atendidos', href: '/#segmentos', type: 'anchor' },
    { name: 'Sua marca, nossa produção', href: '/#marca-propria', type: 'anchor' },
    { name: 'Sobre a Multionic', href: '/#sobre', type: 'anchor' },
    { name: 'Contato', href: '/contato', type: 'internal' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="px-4 md:px-8 xl:px-12 flex items-center justify-between w-full">
        <div className="flex items-center space-x-32">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/mobile/1124971_1_175079214239449921.png" 
              alt="Multionic Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-16">
            {navLinks.map((link) => {
              const isAnchor = link.type === 'anchor';
              const isActive = isAnchor
                ? location.pathname === '/' && location.hash === link.href.substring(1) && location.hash !== ''
                : location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              return link.type === 'internal' ? (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`font-normal transition-colors text-[15px] tracking-wider whitespace-nowrap ${
                    isActive ? 'text-brand-secondary font-bold' : 'text-black hover:text-brand-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`font-normal transition-colors text-[15px] tracking-wider whitespace-nowrap ${
                    isActive ? 'text-brand-secondary font-bold' : 'text-black hover:text-brand-secondary'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="btn-gray px-4 py-2 text-[10px] font-bold tracking-tight shadow-none rounded-none transition-all duration-300">
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
              {navLinks.map((link) => {
                const isAnchor = link.type === 'anchor';
                const isActive = isAnchor
                  ? location.pathname === '/' && location.hash === link.href.substring(1) && location.hash !== ''
                  : location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

                return link.type === 'internal' ? (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className={`font-normal text-lg px-2 tracking-wide ${
                      isActive ? 'text-brand-secondary font-bold' : 'text-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className={`font-normal text-lg px-2 tracking-wide ${
                      isActive ? 'text-brand-secondary font-bold' : 'text-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col space-y-3 px-2">
                <button className="btn-gray px-6 py-4 text-sm font-bold tracking-tight shadow-none rounded-none transition-all duration-300 uppercase">
                  Solicitar ficha técnica
                </button>
                <button className="btn-primary w-full py-4 text-sm font-bold tracking-tight shadow-none rounded-none uppercase">
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
