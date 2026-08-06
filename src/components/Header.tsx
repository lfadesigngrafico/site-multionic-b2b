import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface SubCategory {
  name: string;
  href: string;
  image?: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  type: 'internal' | 'anchor';
  subcategories?: SubCategory[];
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (isMobileMenuOpen) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks: NavItem[] = [
    { name: 'Home', href: '/', type: 'internal' },
    { 
      name: 'Produtos', 
      href: '/produtos', 
      type: 'internal',
      subcategories: [
        { 
          name: 'Sabonetes e Higiene Pessoal', 
          href: '/produtos/sabonetes',
          description: 'Higiene e proteção para mãos e corpo'
        },
        { 
          name: 'Desengraxantes Industriais', 
          href: '/produtos/desengraxantes',
          description: 'Remoção de graxas e óleos pesados'
        },
        { 
          name: 'Linha Cozinha', 
          href: '/produtos/cozinha',
          description: 'Limpeza de cozinhas industriais'
        },
        { 
          name: 'Linha Lavanderia', 
          href: '/produtos/lavanderia',
          description: 'Cuidado profissional para enxovais'
        },
        { 
          name: 'Limpeza Geral', 
          href: '/produtos/limpeza-geral',
          description: 'Detergentes e desinfetantes multiuso'
        },
        { 
          name: 'Tratamento de Pisos', 
          href: '/produtos/pisos',
          description: 'Proteção e brilho para grandes áreas'
        },
        { 
          name: 'Produtos Específicos', 
          href: '/produtos/especificos',
          description: 'Formulações químicas sob demanda'
        },
        { 
          name: 'Outras Soluções', 
          href: '/produtos/outros',
          description: 'Complementos e soluções customizadas'
        },
      ]
    },
    { name: 'Segmentos atendidos', href: '/segmentos', type: 'internal' },
    { name: 'Sua marca, nossa produção', href: '/b2b/sua-marca-nossa-producao', type: 'internal' },
    { name: 'Sobre a Multionic', href: '/sobre', type: 'internal' },
    { name: 'Contato', href: '/contato', type: 'internal' },
  ];

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu(prev => prev === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || location.pathname !== '/' || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-12 flex items-center justify-between w-full max-w-[1536px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo variant="header" />
        </Link>

        {/* Desktop Menu (1024px and up) */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2 xl:space-x-4 2xl:space-x-6">
          {navLinks.map((link) => {
            const isAnchor = link.type === 'anchor';
            const isActive = !isAnchor && (
              location.pathname === link.href || 
              (link.href !== '/' && location.pathname.startsWith(link.href))
            );
            const hasSub = !!link.subcategories;

            return (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => hasSub && setActiveDropdown(link.name)}
                onMouseLeave={() => hasSub && setActiveDropdown(null)}
              >
                <div className="flex items-center">
                  <Link 
                    to={link.href}
                    className={`font-medium transition-colors text-[12px] xl:text-[13px] 2xl:text-[14px] tracking-normal xl:tracking-wide whitespace-nowrap px-1.5 py-1 rounded hover:text-brand-secondary ${
                      isActive ? 'text-brand-secondary font-bold' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>

                  {hasSub && (
                    <button 
                      type="button"
                      className="ml-0.5 text-black hover:text-brand-secondary focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                      }}
                      aria-label={`Expandir ${link.name}`}
                    >
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-brand-secondary' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Desktop Mega Dropdown */}
                {hasSub && (
                  <AnimatePresence>
                    {(activeDropdown === link.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full -left-12 mt-2 w-[640px] bg-white rounded-none shadow-2xl border border-gray-100 p-5 z-50"
                      >
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                          <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                            Linhas de Produtos
                          </span>
                          <Link 
                            to="/produtos"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[11px] font-bold text-[#3B529B] hover:text-[#018E6D] transition-colors flex items-center gap-1"
                          >
                            Ver todos os produtos <ArrowRight size={12} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {link.subcategories?.map((sub) => {
                            const isSubActive = location.pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className={`flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-all group ${
                                  isSubActive ? 'bg-blue-50/50 border-l-2 border-brand-primary' : ''
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex flex-col min-w-0">
                                  <span className={`text-xs font-bold transition-colors group-hover:text-brand-primary truncate ${
                                    isSubActive ? 'text-brand-primary' : 'text-gray-800'
                                  }`}>
                                    {sub.name}
                                  </span>
                                  {sub.description && (
                                    <span className="text-[10px] text-gray-500 line-clamp-1 leading-tight mt-0.5">
                                      {sub.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link to="/contato">
            <button className="btn-primary px-3 py-2 xl:px-4 xl:py-2 text-[10px] xl:text-[11px] font-bold tracking-tight shadow-none rounded-none uppercase whitespace-nowrap">
              Fale com um especialista
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button (1023px and below) */}
        <button 
          className="lg:hidden text-brand-primary p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel (1023px and below) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="container-custom py-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                const hasSub = !!link.subcategories;
                const isSubOpen = openMobileSubmenu === link.name;

                return (
                  <div key={link.name} className="border-b border-gray-50 pb-2">
                    <div className="flex items-center justify-between py-1">
                      <Link 
                        to={link.href}
                        className={`font-medium text-base md:text-lg tracking-wide ${
                          isActive ? 'text-brand-secondary font-bold' : 'text-gray-900'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>

                      {hasSub && (
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(link.name)}
                          className="p-2 text-gray-500 hover:text-brand-secondary focus:outline-none"
                          aria-label={`Toggle ${link.name} submenus`}
                        >
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform duration-200 ${isSubOpen ? 'rotate-180 text-brand-secondary' : ''}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Accordion Submenu */}
                    {hasSub && (
                      <AnimatePresence>
                        {isSubOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-2 my-2 space-y-2"
                          >
                            <Link
                              to="/produtos"
                              className="block py-2 px-3 text-xs font-bold text-brand-primary bg-blue-50/50 rounded uppercase tracking-wider"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              → Ver catálogo completo
                            </Link>
                            {link.subcategories?.map((sub) => {
                              const isSubActive = location.pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className={`flex items-center gap-3 py-2 px-2 rounded text-sm transition-colors ${
                                    isSubActive ? 'text-brand-primary font-bold bg-gray-50' : 'text-gray-700 hover:text-brand-primary'
                                  }`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-semibold text-xs text-gray-900 truncate">{sub.name}</span>
                                    {sub.description && (
                                      <span className="text-[10px] text-gray-500 line-clamp-1">{sub.description}</span>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 px-1">
                <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn-primary w-full py-3.5 text-xs font-bold tracking-tight shadow-none rounded-none uppercase text-center">
                    Fale com um especialista
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
