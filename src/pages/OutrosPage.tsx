import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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

export default function OutrosPage() {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Sua marca, nossa produção | Multionic";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desenvolva produtos químicos com sua própria marca. Conte com fabricação, envase, suporte técnico e controle de qualidade da Multionic.");
    }
  }, []);

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
            src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784156031/$4nrwhl9ocn" 
            alt="Sua marca, nossa produção Banner"
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
                Sua Marca, Nossa Produção
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                Desenvolvemos e fabricamos soluções químicas para empresas que desejam criar ou expandir sua própria linha de produtos com suporte técnico e estrutura industrial especializada.
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
                    className={`text-white text-xs md:text-[13px] font-medium transition-colors transition-all whitespace-nowrap hover:text-brand-secondary ${cat.name === 'Sua marca, nossa produção' ? 'text-[#00D1FF] font-black' : ''}`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INTRODUÇÃO */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-visible">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda: Texto */}
            <div className="order-2 lg:order-1 text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase"
              >
                Estrutura industrial para apoiar o crescimento da sua marca
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black text-lg font-normal leading-relaxed"
              >
                A Multionic oferece soluções de fabricação e desenvolvimento para empresas que desejam atuar com marca própria.
                <br /><br />
                Com experiência produtiva, suporte técnico e estrutura industrial, apoiamos projetos em diferentes stages, do envase ao desenvolvimento completo de novos produtos.
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
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784156031/$zzbrmkz53gr" 
                alt="Estrutura industrial Multionic" 
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
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
                Soluções para diferentes escalas de operação
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                A Multionic oferece produtos em diferentes formatos e volumes para atender desde aplicações específicas até operações com alta demanda de consumo.
              </p>
              
              <ul className="space-y-4 mb-8 text-left">
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
          <div className="mb-12 text-left">
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

      {/* 8. FAQ SECTION */}
      <section id="outros-faq" className="py-24 bg-[#6DB0DF] border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "O que é fabricação de produtos químicos para marca própria?",
                a: "É o modelo em que uma empresa desenvolve ou comercializa produtos utilizando sua própria marca com apoio de uma estrutura industrial especializada."
              },
              {
                q: "A Multionic realiza apenas envase?",
                a: "Além do envase, podem ser avaliados projetos envolvendo fabricação e desenvolvimento de produtos."
              },
              {
                q: "Posso desenvolver uma formulação exclusiva?",
                a: "Dependendo do projeto, nossa equipe pode avaliar alternativas de desenvolvimento."
              },
              {
                q: "Quais segmentos podem trabalhar com marca própria?",
                a: "Distribuidores, atacadistas, redes varejistas, empresas de limpeza profissional e indústrias são alguns exemplos."
              },
              {
                q: "Como iniciar um projeto de marca própria?",
                a: "O primeiro passo é apresentar a necessidade para avaliação técnica e comercial. Nossa equipe pode te ajudar, entre em contato!"
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
