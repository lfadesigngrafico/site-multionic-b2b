import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FlaskConical, 
  Settings, 
  Package, 
  Factory, 
  ClipboardList, 
  Sliders, 
  ShieldCheck, 
  Rocket, 
  Award, 
  ChevronDown, 
  Truck, 
  Sparkles, 
  Store, 
  Lightbulb, 
  ArrowRight,
  Droplet,
  Layers,
  Hand,
  ChefHat,
  Tv,
  Brush,
  Zap,
  HelpCircle,
  FileText,
  UserCheck
} from 'lucide-react';

export default function SuaMarcaPage() {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Fabricação de Produtos com Marca Própria | Multionic";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desenvolva produtos químicos com sua própria marca. Conte com fabricação, envase, suporte técnico e controle de qualidade da Multionic.");
    }
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaqId(activeFaqId === idx ? null : idx);
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato-marca');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[700px] flex items-center overflow-hidden bg-[#014486] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://d335luupugsy2.cloudfront.net/cms/files/38500/1784768630/$9jkodpmj3sw')" 
        }}
      >
        <div className="absolute inset-0 bg-[#014486]/60 pointer-events-none" />
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Esquerda: Texto */}
            <div className="lg:col-span-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black text-white uppercase leading-tight tracking-tight mb-6">
                  Sua marca,<br />nossa produção.
                </h1>
                <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-6">
                  Desenvolvemos e fabricamos soluções químicas para empresas que desejam lançar, expandir ou fortalecer sua própria linha de produtos com suporte técnico, estrutura industrial e qualidade produtiva.
                </p>
                <p className="text-white/80 text-base leading-relaxed mb-8">
                  Da formulação ao envase, ajudamos marcas a transformar oportunidades em produtos prontos para o mercado.
                </p>
                <div>
                  <button 
                    onClick={handleScrollToContact}
                    className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-colors shadow-md inline-flex items-center gap-3 cursor-pointer"
                  >
                    Solicitar avaliação técnica
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Coluna Direita: Mantida sem nenhuma imagem */}
            <div className="hidden lg:block lg:col-span-6"></div>
          </div>
        </div>
      </section>

      {/* 2. PRODUÇÃO ESPECIALIZADA */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-brand-primary uppercase tracking-tight mb-6"
            >
              Produção especializada para marcas que querem crescer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-main text-lg font-medium leading-relaxed"
            >
              A Multionic apoia empresas em diferentes estágios de desenvolvimento, oferecendo desde envase até projetos completos de desenvolvimento e fabricação.
              <br className="hidden md:inline" />
              Você escolhe o nível de suporte ideal para sua operação.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784810169/$dlc3jbu83s4" 
                      alt="Envase" 
                      className="h-[64px] w-auto object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-light bg-gray-100 px-2.5 py-1 rounded-full">
                    Nível 1
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary uppercase mb-4">
                  Envase
                </h3>
                <p className="text-text-light text-base leading-relaxed mb-6">
                  Sua fórmula, nossa estrutura produtiva.
                </p>
              </div>
              <div className="border-t border-gray-50 pt-4 flex items-center text-brand-secondary text-xs font-bold uppercase tracking-widest">
                Utilizar estrutura existente
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784810169/$1g7x9ewbvo6" 
                      alt="Fabricação e envase" 
                      className="h-[64px] w-auto object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-light bg-gray-100 px-2.5 py-1 rounded-full">
                    Nível 2
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary uppercase mb-4">
                  Fabricação e envase
                </h3>
                <p className="text-text-light text-base leading-relaxed mb-6">
                  Produção completa com controle de qualidade e suporte técnico.
                </p>
              </div>
              <div className="border-t border-gray-50 pt-4 flex items-center text-brand-secondary text-xs font-bold uppercase tracking-widest">
                Garantia técnica e produtiva
              </div>
            </motion.div>

            {/* Card 3 (Destaque) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-brand-secondary rounded-2xl p-8 shadow-[0_10px_30px_rgba(8,119,225,0.08)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="absolute -top-3.5 right-6 bg-brand-secondary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Solução Completa
              </div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784810169/$ej0celioueu" 
                      alt="Desenvolvimento, fabricação e envase" 
                      className="h-[64px] w-auto object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary bg-brand-secondary/10 px-2.5 py-1 rounded-full">
                    Nível 3
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary uppercase mb-4">
                  Desenvolvimento, fabricação e envase
                </h3>
                <p className="text-text-light text-base leading-relaxed mb-6">
                  Construção de novos produtos desde a formulação até a entrega final.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center text-brand-secondary text-xs font-bold uppercase tracking-widest">
                Desenvolvimento personalizado
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POR QUE DESENVOLVER SUA LINHA COM A MULTIONIC? */}
      <section className="py-24 bg-[#75BFBA]">
        <div className="container-custom max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase"
            >
              Por que desenvolver sua linha com a Multionic?
            </motion.h2>
          </div>

          {/* Grid de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
            {[
              {
                title: "Estrutura industrial especializada",
                desc: "Capacidade produtiva preparada para diferentes volumes e necessidades de mercado.",
                icon: <Factory className="w-8 h-8 md:w-10 md:h-10" />
              },
              {
                title: "Suporte técnico durante o processo",
                desc: "Acompanhamento para apoiar decisões técnicas e produtivas.",
                icon: <ClipboardList className="w-8 h-8 md:w-10 md:h-10" />
              },
              {
                title: "Flexibilidade de produção",
                desc: "Projetos adaptados ao momento e à necessidade de cada marca.",
                icon: <Sliders className="w-8 h-8 md:w-10 md:h-10" />
              },
              {
                title: "Controle de qualidade",
                desc: "Processos voltados à consistência, segurança e confiabilidade dos produtos.",
                icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
              },
              {
                title: "Agilidade para colocar produtos no mercado",
                desc: "Redução de etapas e maior velocidade na implantação de novas linhas.",
                icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />
              },
              {
                title: "Experiência no segmento químico",
                desc: "Décadas atuando no desenvolvimento e fabricação de soluções profissionais.",
                icon: <Award className="w-8 h-8 md:w-10 md:h-10" />
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#018E6D] flex items-center justify-center text-white shadow-lg">
                  {benefit.icon}
                </div>
                <div className="flex flex-col justify-center pt-2 text-left">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90 font-normal text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-brand-primary uppercase tracking-tight mb-4"
            >
              Como funciona
            </motion.h2>
            <div className="w-20 h-1 bg-brand-secondary mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative mt-8">
            {/* Linha do conector (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-gray-200 z-0" />

            {/* Grid Etapas */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Entendimento do projeto",
                  desc: "Compreendemos seus objetivos, mercado e necessidades produtivas."
                },
                {
                  step: "02",
                  title: "Definição da solução",
                  desc: "Avaliamos o modelo mais adequado para sua marca."
                },
                {
                  step: "03",
                  title: "Desenvolvimento ou produção",
                  desc: "Formulação, fabricação ou envase conforme o escopo definido."
                },
                {
                  step: "04",
                  title: "Controle de qualidade",
                  desc: "Processos de validação e acompanhamento produtivo."
                },
                {
                  step: "05",
                  title: "Entrega e expansão",
                  desc: "Sua marca pronta para crescer com suporte de uma estrutura especializada."
                }
              ].map((etapa, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Círculo do número */}
                  <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center text-white font-black text-2xl shadow-md mb-6 transform group-hover:scale-105 transition-transform duration-300 relative">
                    {etapa.step}
                    {/* Linha vertical no mobile */}
                    <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-gray-200 last:hidden" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                    {etapa.title}
                  </h3>
                  <p className="text-text-light text-sm md:text-base leading-relaxed max-w-[280px] lg:max-w-none">
                    {etapa.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARA QUEM É ESSA SOLUÇÃO? */}
      <section className="py-24 bg-[#3B529B] relative overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white uppercase"
            >
              Para quem é essa solução?
            </motion.h2>
          </div>

          {/* Cards de segmentos (3 em cima, 2 centralizados embaixo no desktop) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Linha de 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Distribuidores",
                  desc: "Amplie seu portfólio com produtos de marca própria.",
                  icon: Truck
                },
                {
                  title: "Empresas de limpeza profissional",
                  desc: "Desenvolva soluções alinhadas às necessidades dos seus clientes.",
                  icon: Sparkles
                },
                {
                  title: "Redes e atacadistas",
                  desc: "Crie linhas exclusivas para fortalecer posicionamento e margem.",
                  icon: Store
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white p-8 border border-slate-100 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20 text-left"
                  >
                    <div>
                      <div className="w-12 h-12 bg-[#6DB0DF]/10 rounded-none flex items-center justify-center text-[#6DB0DF] mb-6 transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#3B529B] mb-3 group-hover:text-[#6DB0DF] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
                  </motion.div>
                );
              })}
            </div>

            {/* Linha de 2 cards centralizados (Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[800px] mx-auto w-full">
              {[
                {
                  title: "Indústrias",
                  desc: "Desenvolva produtos específicos para aplicações próprias ou comercialização.",
                  icon: Factory
                },
                {
                  title: "Empreendedores",
                  desc: "Transforme uma ideia em uma linha de produtos pronta para o mercado.",
                  icon: Lightbulb
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx + 3) * 0.08 }}
                    className="bg-white p-8 border border-slate-100 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20 text-left"
                  >
                    <div>
                      <div className="w-12 h-12 bg-[#6DB0DF]/10 rounded-none flex items-center justify-center text-[#6DB0DF] mb-6 transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#3B529B] mb-3 group-hover:text-[#6DB0DF] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. O QUE PODEMOS PRODUZIR */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#014486] uppercase tracking-tight mb-4"
            >
              O que podemos produzir
            </motion.h2>
            <div className="w-20 h-1 bg-[#6DB0DF] mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Desengraxantes industriais", icon: <Droplet size={20} /> },
              { title: "Tratamento de pisos", icon: <Layers size={20} /> },
              { title: "Higiene das mãos", icon: <Hand size={20} /> },
              { title: "Cozinha industrial", icon: <ChefHat size={20} /> },
              { title: "Lavanderia profissional", icon: <Tv size={20} /> },
              { title: "Limpeza geral", icon: <Brush size={20} /> },
              { 
                title: "Soluções específicas", 
                icon: <Zap size={20} />
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 border border-slate-100 shadow-sm relative group flex items-center text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20 overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#6DB0DF]/10 rounded-none flex items-center justify-center text-[#6DB0DF] group-hover:bg-[#6DB0DF] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {cat.icon}
                  </div>
                  <span className="font-bold text-sm md:text-base text-[#3B529B] group-hover:text-[#6DB0DF] transition-colors duration-300">
                    {cat.title}
                  </span>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERGUNTAS FREQUENTES (FAQ) */}
      <section id="marca-faq" className="py-24 bg-[#6DB0DF] border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">
              Perguntas frequentes
            </h2>
            <div className="w-16 h-1 bg-white mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "É possível produzir com minha própria marca?",
                a: "Sim. Desenvolvemos projetos de marca própria conforme a necessidade de cada cliente."
              },
              {
                q: "A Multionic pode fabricar produtos já desenvolvidos?",
                a: "Sim. Avaliamos cada projeto para definir o melhor modelo produtivo."
              },
              {
                q: "Vocês desenvolvem novas formulações?",
                a: "Sim. Dependendo do projeto, nossa equipe pode apoiar o desenvolvimento de novas soluções."
              },
              {
                q: "Existe volume mínimo?",
                a: "Os requisitos podem variar conforme a categoria e o tipo de projeto."
              },
              {
                q: "Como iniciar um projeto?",
                a: "Basta entrar em contato com nossa equipe para avaliarmos sua necessidade."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#3B529B] border-none rounded-none shadow-sm overflow-hidden text-left">
                <button 
                  onClick={() => toggleFaq(idx)}
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

      {/* FORMULÁRIO DE CONTATO / ÁREA DE SOLICITAÇÃO INTEGRADA */}
      <section id="contato-marca" className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column Text */}
            <div className="text-left flex flex-col justify-center h-full">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-black text-brand-primary mb-4 uppercase leading-tight"
              >
                Inicie sua Linha de Produtos
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text-main text-base md:text-lg font-medium mb-8 leading-relaxed"
              >
                Solicite uma avaliação técnica sem compromisso. Nossa equipe especialista avaliará sua demanda produtiva para entender o melhor modelo para o seu negócio.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-4 text-left"
              >
                {[
                  "Desenvolvimento de fórmulas de alta performance",
                  "Flexibilidade em litragens e tipos de embalagem",
                  "Estrutura industrial com tecnologia de ponta",
                  "Garantia de controle de qualidade laboratorial"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-brand-secondary font-bold text-lg">✔</span>
                    <span className="text-text-main text-sm md:text-base font-semibold">{bullet}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-none border border-gray-200 shadow-lg"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Nome</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Nome completo" />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">CNPJ</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="00.000.000/0000-00" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">E-mail</label>
                    <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="seuemail@exemplo.com" />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Telefone</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Cidade/Estado</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Ex: Maringá / PR" />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Interesse</label>
                    <select className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-xs outline-none focus:border-brand-secondary transition-colors">
                      <option>Selecione um nível</option>
                      <option>Apenas Envase (Fórmula Própria)</option>
                      <option>Fabricação e Envase</option>
                      <option>Desenvolvimento completo, fabricação e envase</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Mensagem</label>
                  <textarea className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors h-32" placeholder="Conte-nos sobre o seu projeto..."></textarea>
                </div>

                <button 
                  type="button" 
                  onClick={() => alert('Solicitação enviada com sucesso! Entraremos em contato em breve.')}
                  className="bg-brand-secondary hover:bg-brand-hover text-white w-full py-4 text-sm font-bold tracking-tight shadow-none border-none uppercase mt-4 transition-colors"
                >
                  Enviar Solicitação
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="pt-16 pb-0 lg:pt-20 lg:pb-0 bg-white text-[#333333] border-t border-[#E5E7EB] relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            {/* Coluna Esquerda: Imagem com Overlap no topo e alinhada na base */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:-mt-36 z-10 self-end flex items-end"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$rpcarbod4gh"
                alt="Transforme sua ideia em produto Multionic" 
                className="w-full h-auto object-contain object-bottom pointer-events-none block"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Coluna Direita: Texto */}
            <div className="text-left py-10 lg:py-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase text-[#014486]"
              >
                Transforme sua ideia em produto
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#333333] text-base md:text-lg font-normal leading-relaxed mb-8"
              >
                Conte com uma estrutura industrial preparada para apoiar o crescimento da sua marca.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <motion.button 
                  onClick={handleScrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#6DB0DF] text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-[#014486] transition-all cursor-pointer"
                >
                  Solicitar avaliação técnica
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
