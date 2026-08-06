import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown,
  ChevronUp,
  ChevronRight, 
  CheckCircle2, 
  Package, 
  MessageSquare, 
  ArrowRight,
  Star
} from 'lucide-react';

const products = [
  {
    name: "Raylin Desinfetante",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias-limpeza-geral/1783443436/imagens/desktop/1295653_1_174767122933976863.png",
    highlights: ["Efeito bactericida.", "Ação limpadora e desodorizadora.", "Suave fragrância prolongada."],
    description: "Desinfetante líquido de efeito bactericida and ação limpadora e desodorizadora. Possui uma suave fragrância que deixa os ambientes perfumados por mais tempo. Sua propriedade bactericida é comprovada por laudos microbiológicos, os quais atestam a eficácia do produto. Fragrâncias disponíveis: Floral e Marine.",
    indication: "Indicada para efeito bactericida e ação limpadora e desodorizadora.",
    packaging: "Galão de 5L (caixa com 2 galões de 5L). Para outras litragens, consultar disponibilidade."
  },
  {
    name: "Raylin Detergente Neutro",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias-limpeza-geral/1783443436/imagens/desktop/1295653_1_174905711681841899.png",
    highlights: ["Remove sujeiras orgânicas.", "pH neutro.", "Alta ação desengordurante."],
    description: "Detergente líquido concentrado que remove sujeiras orgânicas, solúvel em água, e com tensoativo biodegradável. Indicado para uma limpeza manual completa de louças, panelas, talheres e pisos, sem agredir a pele (PH neutro). Apresenta elevado poder desengordurante. Consulte versões.",
    indication: "Indicado para uma limpeza manual completa de louças, panelas, talheres e pisos.",
    packaging: "Galão de 5L (caixa com 2 galões de 5L). Para outras litragens, consultar disponibilidade."
  },
  {
    name: "Raylin Limpa Vidros",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias-limpeza-geral/1783443436/imagens/desktop/1295653_1_174905713667342029.png",
    highlights: ["Limpeza de vidros.", "Brilhante e sem manchas.", "Fácil aplicação e alta eficácia."],
    description: "Produto indicado para limpeza de vidros em geral, garantindo vidros mais brilhantes e livres de manchas e sujeiras. Ideal para limpeza manual de superfícies removendo totalmente a sujeira de janelas e portas de vidro, sem atacar esquadrias e batentes. Não ataca pinturas nem superfícies esmaltadas. Sua fácil aplicação e poderosa eficácia surpreendem.",
    indication: "Indicado para limpeza de vidros em geral, dando brilho e tirando manchas.",
    packaging: "Galão de 5L (caixa com 2 galões de 5L). Para outras litragens, consultar disponibilidade."
  }
];

const categories = [
  {
    title: "SABONETES",
    text: "Higiene e proteção com fórmulas suaves e eficientes. Conheça nossas opções para diferentes necessidades.",
    image: "/images/categories/sabonetes.jpg",
    href: "/produtos/sabonetes"
  },
  {
    title: "DESENGRAXANTES",
    text: "Remova graxas e resíduos com máxima eficácia. Soluções poderosas para indústrias e oficinas.",
    image: "/images/categories/desengraxantes.jpg",
    href: "/produtos/desengraxantes"
  },
  {
    title: "COZINHA INDUSTRIAL",
    text: "Higienização segura e eficiente para cozinhas profissionais. Mantenha o padrão de qualidade do seu negócio.",
    image: "/images/categories/cozinha.jpg",
    href: "/produtos/cozinha"
  },
  {
    title: "LAVANDERIA",
    text: "Cuidado e performance para tecidos impecáveis. Descubra nossas soluções para lavagem profissional.",
    image: "/images/categories/lavanderia.jpg",
    href: "/produtos/lavanderia"
  },
  {
    title: "LIMPEZA GERAL",
    text: "Produtos versáteis para uma limpeza completa e eficiente. Descubra nossa linha de soluções profissionais.",
    image: "/images/categories/limpeza_geral.jpg",
    href: "/produtos/limpeza-geral"
  },
  {
    title: "TRATAMENTO DE PISOS",
    text: "Proteção e brilho para superfícies impecáveis. Encontre o produto ideal para o seu ambiente.",
    image: "/images/categories/pisos.jpg",
    href: "/produtos/pisos"
  },
  {
    title: "PRODUTOS ESPECÍFICOS",
    text: "Soluções químicas avançadas para necessidades especiais. Eficiência e inovação a serviço da sua empresa.",
    image: "/images/categories/especificos.jpg",
    href: "/produtos/especificos"
  },
  {
    title: "SUA MARCA, NOSSA PRODUÇÃO",
    text: "Transformamos sua visão em produtos de alta qualidade. Cuidamos de cada detalhe da fabricação para atender grandes demandas em terceirização, enquanto você foca no crescimento do seu negócio.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1779725014/$dx814ryzur",
    href: "/produtos/outros"
  }
];

const ProductCard: React.FC<{ 
  product: any; 
  idx: number; 
  maxTagsHeight: number; 
  onHeightMeasured: (idx: number, height: number) => void; 
}> = ({ product, idx, maxTagsHeight, onHeightMeasured }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tagsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (tagsRef.current) {
      const handleResize = () => {
        if (tagsRef.current) {
          onHeightMeasured(idx, tagsRef.current.clientHeight);
        }
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [idx, onHeightMeasured]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 3) * 0.1 }}
      className="bg-[#F8F9FA] border border-gray-100 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* 1. Imagem e Tag LÍDER DE VENDAS */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#F8F9FA] border-b border-gray-50 p-4">
        {product.isBestSeller && (
          <div className="absolute top-0 right-0 z-10 flex items-center gap-2.5 bg-brand-secondary text-white px-5 py-4 rounded-bl-[25px] shadow-xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/40">
              <Star size={14} fill="white" strokeWidth={0} />
            </div>
            <div className="flex flex-col leading-[1]">
              <span className="text-[14px] font-bold uppercase tracking-tight opacity-90">LÍDER DE</span>
              <span className="text-[16px] font-black uppercase tracking-tight">VENDAS</span>
            </div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Conteúdo Fixo e Descrição */}
      <div className="p-8 pb-6 flex flex-col">
        <h3 className="text-xl font-bold text-brand-primary uppercase mb-6 md:min-h-[4rem] flex items-center">
          {product.name}
        </h3>

        <div 
          className="flex flex-wrap gap-2 mb-4 content-start"
          style={{ minHeight: maxTagsHeight > 0 ? `${maxTagsHeight}px` : undefined }}
        >
          <div ref={tagsRef} className="flex flex-wrap gap-2 w-full">
            {product.highlights.map((h: string, i: number) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary bg-brand-secondary/5 px-2 py-1 rounded">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Descrição em 3 linhas + Saiba Mais discreto */}
        <div className="pt-2">
          <p className={`text-black text-sm font-normal leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {product.description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-bold text-[#3B529B] hover:text-[#6DB0DF] transition-colors inline-flex items-center gap-1 cursor-pointer py-1"
          >
            <span>{isExpanded ? 'Mostrar menos' : 'Saiba mais'}</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* 3. Restante do Card (Visível ao expandir) */}
      {isExpanded && (
        <div className="p-8 pt-0 flex flex-col flex-grow border-t border-gray-100 mt-2">
          <div className="bg-white p-6 rounded-none my-6 border border-gray-100 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 block mb-2 tracking-widest">Indicação principal</span>
            <p className="text-brand-primary font-bold text-base leading-snug">{product.indication}</p>
          </div>

          <div className="mb-8">
            <span className="text-[10px] uppercase font-bold text-gray-400 block mb-3 tracking-widest">Disponível em</span>
            <div className="flex items-start space-x-3">
              <Package size={18} className="text-gray-400 flex-shrink-0" />
              <p className="text-[12px] text-gray-500 font-medium leading-tight">{product.packaging}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 mt-auto">
            <button className="btn-primary w-full py-4 uppercase font-bold text-xs shadow-none border-none tracking-widest">
              Solicitar orçamento
            </button>
            <button className="btn-gray w-full py-4 uppercase font-bold text-xs shadow-none border-none tracking-widest">
              Solicitar ficha técnica
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function LimpezaGeralPage() {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  const [measuredHeights, setMeasuredHeights] = useState<Record<number, number>>({});

  const handleHeightMeasured = React.useCallback((idx: number, height: number) => {
    setMeasuredHeights(prev => {
      if (prev[idx] === height) return prev;
      return { ...prev, [idx]: height };
    });
  }, []);

  const maxTagsHeight = Math.max(0, ...(Object.values(measuredHeights) as number[]));

  const toggleFaqAccordion = (idx: number) => {
    setActiveFaqId(activeFaqId === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO / BANNER PRINCIPAL */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias-limpeza-geral/1783443436/imagens/desktop/1295653_1_173895075667a64864df94e.jpg" 
            alt="Limpeza Geral Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-[1200px] text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] mb-3 opacity-90">
                CATEGORIAS
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight mb-8">
                Limpeza Geral
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                Soluções para limpeza e manutenção de ambientes profissionais, institucionais e operacionais. Eficiência para diferentes rotinas de conservação.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MENU DE CATEGORIAS (OVERLAP) */}
      <div className="relative z-20 -mt-12 mb-12">
        <div className="container-custom px-0 md:px-4">
          <div className="bg-[#014486] shadow-2xl py-6 px-4 md:px-10">
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-4 w-full text-center">
                OUTRAS CATEGORIAS
              </span>
              
              <div className="flex flex-nowrap items-center justify-start md:justify-center gap-x-4 md:gap-x-8 overflow-x-auto w-full scrollbar-hide pb-2 md:pb-0">
                {[
                  { name: "Sabonetes", href: "/produtos/sabonetes" },
                  { name: "Desengraxantes", href: "/produtos/desengraxantes" },
                  { name: "Cozinha industrial", href: "/produtos/cozinha" },
                  { name: "Lavanderia", href: "/produtos/lavanderia" },
                  { name: "Limpeza geral", href: "/produtos/limpeza-geral" },
                  { name: "Tratamento de pisos", href: "/produtos/pisos" },
                  { name: "Específicos", href: "/produtos/especificos" },
                  { name: "Sua marca, nossa produção", href: "/produtos/outros" }
                ].map((cat, i) => (
                  <Link 
                    key={i} 
                    to={cat.href}
                    className={`text-white text-xs md:text-[13px] font-medium transition-colors transition-all whitespace-nowrap hover:text-brand-secondary ${cat.name === 'Limpeza geral' ? 'text-[#00D1FF] font-black' : ''}`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. GRADE DE PRODUTOS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {products.map((product, idx) => (
              <ProductCard 
                key={idx} 
                product={product} 
                idx={idx} 
                maxTagsHeight={maxTagsHeight}
                onHeightMeasured={handleHeightMeasured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRODUÇÃO */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-visible">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda: Texto */}
            <div className="order-2 lg:order-1">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase"
              >
                Soluções para a rotina de limpeza profissional
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black text-lg font-normal leading-relaxed"
              >
                A linha de limpeza geral Multionic reúne produtos desenvolvidos para apoiar processos de conservação e higienização em diferentes ambientes.
                <br /><br />
                Com aplicações versáteis, auxilia operações que buscam eficiência, praticidade e padronização nos processos de limpeza.
              </motion.p>
            </div>

            {/* Coluna Direita: Imagem com Overlap */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:mb-[-8rem] z-10 order-1 lg:order-2"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784341811/$2g8z6hho4ms" 
                alt="Potência de Limpeza Multionic" 
                className="w-full h-auto rounded-none shadow-xl pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BLOCO COMERCIAL */}
      <section className="py-20 bg-brand-primary text-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Coluna Esquerda: Imagem com Overlap */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:-mt-40 lg:-mb-40 z-10"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$3jzz3494k36"
                alt="Atendimento Comercial Multionic" 
                className="w-full h-auto object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Coluna Direita: Texto */}
            <div className="text-left py-10 lg:py-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold mb-8 uppercase text-white"
              >
                Precisa de ajuda para escolher a solução ideal?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white text-lg md:text-xl font-normal leading-relaxed mb-12"
              >
                Nossa equipe está preparada para entender sua necessidade e indicar o produto mais adequado para a sua operação.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Link to="/contato">
                  <button className="bg-brand-secondary text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-white hover:text-brand-primary transition-all">
                    Solicitar avaliação técnica
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOCO DE EMBALAGENS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Coluna Esquerda: Texto e Lista */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
                Soluções para diferentes escalas de operação
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                A Multionic oferece produtos em diferentes formatos e volumes para atender desde aplicações específicas até operações com alta demanda de consumo.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Embalagens para diferentes necessidades operacionais",
                  "Melhor aproveitamento e controle de estoque",
                  "Soluções para uso profissional e industrial",
                  "Opções adequadas para diferentes volumes de consumo"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-brand-secondary font-bold text-lg">✔</span>
                    <span className="text-brand-primary font-semibold text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Coluna Direita: Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776864450/$5owot05o0ax" 
                alt="Variedade de Embalagens Multionic" 
                className="w-full h-auto max-w-[110%] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. NAVEGAÇÃO ENTRE CATEGORIAS */}
      <section className="py-24 bg-bg-light border-y border-gray-100">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-primary uppercase mb-2">Navegue pelas categorias</h2>
            <p className="text-black text-lg">Conheça outras soluções da linha institucional e industrial da Multionic.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {categories.map((cat, idx) => (
              <Link key={idx} to={cat.href}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                >
                  {/* Imagem de Fundo */}
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Escurecido Padrão */}
                  <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:opacity-0" />
                  
                  {/* Overlay Azul de Hover */}
                  <div className="absolute inset-0 bg-[#3B529B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Conteúdo Centralizado */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-[0.2em] pl-[0.2em] leading-tight transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                      {cat.title}
                    </h3>
                    
                    <div className="absolute inset-0 p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                      <p className="text-white text-xs md:text-sm font-medium leading-relaxed max-w-[90%] whitespace-pre-line">
                        {cat.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BLOCO SUA MARCA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$vzhrrrp39mr" 
                alt="Produção Industrial Multionic" 
                className="w-full h-auto rounded-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
                Sua marca, nossa produção
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                Também atuamos com soluções sob demanda para empresas que buscam estrutura industrial, capacidade produtiva e apoio para projetos com marca própria.
              </p>
              <button className="btn-primary py-5 px-10 shadow-none rounded-none uppercase font-bold text-xs">
                Saiba mais sobre nossas soluções de terceirização
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Mesmo estilo e cores que HomeFAQ) */}
      <section id="limpeza-geral-faq" className="py-24 bg-[#6DB0DF] border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quais ambientes podem utilizar os produtos de limpeza geral?",
                a: "As soluções podem ser aplicadas em diferentes ambientes profissionais, institucionais e operacionais."
              },
              {
                q: "Os produtos são indicados para limpeza de manutenção?",
                a: "Sim. Existem opções voltadas para rotinas frequentes de conservação e higienização."
              },
              {
                q: "Como reduzir desperdícios em operações de limpeza?",
                a: "A utilização correta dos produtos e orientações de aplicação contribuem para maior eficiência operacional."
              },
              {
                q: "Como escolher o produto ideal para cada ambiente?",
                a: "A escolha depende do tipo de superfície, nível de sujeira e objetivo da limpeza."
              },
              {
                q: "A Multionic oferece suporte técnico?",
                a: "Sim. Nossa equipe pode auxiliar na identificação da solução mais adequada."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#3B529B] border-none rounded-none shadow-sm overflow-hidden text-left">
                <button 
                  onClick={() => toggleFaqAccordion(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:opacity-95"
                >
                  <span className="font-bold text-white text-base md:text-lg pr-4">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: activeFaqId === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-white w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaqId === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white font-medium text-base leading-relaxed whitespace-pre-line">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
