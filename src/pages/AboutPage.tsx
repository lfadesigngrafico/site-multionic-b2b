import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  FlaskConical, 
  Shield,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const structureImages = [
  "https://d335luupugsy2.cloudfront.net/cms/files/38500/1784732257/$ig9oz5u5x",
  "https://d335luupugsy2.cloudfront.net/cms/files/38500/1784732257/$302jxckc811",
  "https://d335luupugsy2.cloudfront.net/cms/files/38500/1784732257/$g3drix5fzx6",
  "https://d335luupugsy2.cloudfront.net/cms/files/38500/1784732257/$xdfwjks5ljm"
];

const timelineEvents = [
  { year: "1982", title: "Fundação da Multionic" },
  { year: "1984", title: "Lançamento da linha Unik" },
  { year: "1990", title: "Ampliação da capacidade industrial" },
  { year: "2005", title: "Expansão para os mercados institucional e profissional" },
  { year: "2019", title: "Modernização da operação produtiva" },
  { year: "2022", title: "Ampliação do portfólio de soluções" },
  { year: "2024", title: "Fortalecimento da presença nacional e transformação digital" },
  { year: "2025", title: "Consolidação da nova estratégia de crescimento" }
];

const values = [
  {
    icon: <TrendingUp className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Desenvolvimento contínuo",
    description: "Buscamos evoluir constantemente nossas soluções para acompanhar as necessidades do mercado."
  },
  {
    icon: <Users className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Parceria de longo prazo",
    description: "Valorizamos a construção de parcerias duradouras com clientes, distribuidores e colaboradores."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Responsabilidade",
    description: "Atuamos com comprometimento, ética e foco na qualidade dos processos."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Eficiência",
    description: "Desenvolvemos soluções voltadas para melhorar resultados operacionais."
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Inovação aplicada",
    description: "Acreditamos em inovação conectada à realidade e aos desafios dos nossos clientes."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#6DB0DF]" />,
    title: "Segurança",
    description: "Priorizamos processos, produtos e práticas que contribuam para operações mais seguras."
  }
];

const segmentList = [
  "Indústrias de transformação",
  "Metalúrgicas e siderúrgicas",
  "Máquinas e equipamentos",
  "Alimentícia e bebidas",
  "Logística e armazenagem",
  "Química e petroquímica",
  "Lavanderias profissionais",
  "Cozinhas industriais",
  "Facilities e ambientes institucionais"
];

const bigNumbers = [
  {
    value: "+40 anos",
    label: "de experiência no mercado"
  },
  {
    value: "+500 soluções",
    label: "para diferentes aplicações"
  },
  {
    value: "Presença nacional",
    label: "em diferentes segmentos e regiões"
  },
  {
    value: "Estrutura industrial própria",
    label: "para desenvolvimento e fabricação"
  }
];

export default function AboutPage() {
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const [structureImageIndex, setStructureImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStructureImageIndex((prev) => (prev + 1) % structureImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineScrollRef.current) {
      const scrollAmount = 340;
      timelineScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans bg-white text-[#333333]">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[700px] flex items-center overflow-hidden bg-[#014486] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://d335luupugsy2.cloudfront.net/cms/files/38500/1784768630/$ixbfrbmcsan')" }}
      >
        <div className="absolute inset-0 bg-[#014486]/60 pointer-events-none" />
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna esquerda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center text-left"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                Mais de 40 anos<br />
                <span className="text-xl md:text-2xl lg:text-3xl font-normal block mt-2 max-w-xl leading-snug">
                  desenvolvendo soluções para operações profissionais
                </span>
              </h1>
              <p className="text-base md:text-lg text-white mb-4 leading-relaxed font-normal">
                Desde 1982, a Multionic desenvolve soluções químicas para limpeza, higienização e eficiência operacional, atendendo diferentes segmentos industriais, institucionais e profissionais em todo o Brasil.
              </p>
              <p className="text-base md:text-lg text-white mb-8 leading-relaxed font-normal">
                Nossa trajetória é construída sobre desenvolvimento técnico, proximidade com o cliente e compromisso com a evolução contínua das operações que atendemos.
              </p>
              <div>
                <Link to="/produtos">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white font-bold uppercase text-sm tracking-tight px-10 py-5 transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-none rounded-none"
                  >
                    Conheça nossas soluções
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Coluna direita - mantida sem nenhuma informação */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="py-16 md:py-24 bg-white border-y border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014486] mb-6">
                Quem somos
              </h2>
              <p className="text-base md:text-lg text-[#333333] mb-4 leading-relaxed font-normal">
                A Multionic é uma indústria química especializada no desenvolvimento e fabricação de soluções para limpeza, higienização, conservação e eficiência operacional.
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-4 leading-relaxed font-normal">
                Ao longo de mais de quatro décadas, construímos uma trajetória baseada em qualidade, desenvolvimento técnico e relacionamento próximo com clientes que buscam mais desempenho, segurança e confiabilidade em suas operações.
              </p>
              <p className="text-base md:text-lg text-[#333333] leading-relaxed font-normal">
                Hoje, atendemos diferentes segmentos com soluções que apoiam desde processos industriais até ambientes institucionais e profissionais.
              </p>
            </motion.div>

            {/* Coluna Vídeo Vimeo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full aspect-video overflow-hidden border border-[#E5E7EB] shadow-md bg-black"
            >
              <iframe
                src="https://player.vimeo.com/video/1100694146?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Vídeo institucional Multionic"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. NOSSA HISTÓRIA EM EVOLUÇÃO */}
      <section className="py-16 md:py-24 bg-[#6DB0DF] text-white overflow-hidden relative">
        <div className="container-custom">
          {/* Header + Nav Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <span className="text-white/80 font-semibold text-xs md:text-sm uppercase tracking-widest block mb-2">
                Linha do Tempo
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Nossa história em evolução
              </h2>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTimeline('left')}
                className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-[#6DB0DF] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollTimeline('right')}
                className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-[#6DB0DF] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Timeline Connected Horizontal Carousel */}
          <div className="relative">
            {/* Connected horizontal line behind the cards */}
            <div className="absolute top-[32px] left-0 right-0 h-[2px] bg-white/30 z-0 hidden md:block" />

            <div 
              ref={timelineScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 relative z-10 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {timelineEvents.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start bg-white text-[#333333] p-6 sm:p-8 border border-white/20 shadow-lg relative flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div>
                    {/* Calendar Icon above Year */}
                    <div className="w-12 h-12 bg-[#6DB0DF]/10 text-[#6DB0DF] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#6DB0DF] group-hover:text-white">
                      <Calendar className="w-6 h-6" />
                    </div>

                    {/* Year */}
                    <div className="text-3xl font-extrabold text-[#014486] mb-3">
                      {item.year}
                    </div>

                    {/* Event Description */}
                    <p className="text-sm sm:text-base font-semibold text-[#333333] leading-relaxed">
                      {item.title}
                    </p>
                  </div>

                  {/* Subtle accent bar on bottom */}
                  <div className="w-full h-1 bg-[#6DB0DF]/20 group-hover:bg-[#6DB0DF] transition-colors duration-300 mt-6" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. O QUE NOS MOVE */}
      <section className="py-24 bg-[#3B529B] relative overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white uppercase"
            >
              O que nos move
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((item, idx) => (
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
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#3B529B] mb-3 group-hover:text-[#6DB0DF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative hover elements */}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAIS DO QUE PRODUTOS, SOLUÇÕES PARA DIFERENTES OPERAÇÕES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014486] mb-6 leading-tight">
                Mais do que produtos, soluções para diferentes operações
              </h2>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed font-normal">
                A Multionic atende empresas de diferentes segmentos com soluções desenvolvidas para apoiar processos de limpeza, higienização, conservação e manutenção.
              </p>
              <p className="text-base md:text-lg font-semibold text-[#014486] mb-4">
                Nosso trabalho está presente em:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {segmentList.map((segment, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#6DB0DF] flex-shrink-0 mt-0.5" />
                    <span>{segment}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link to="/segmentos">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#014486] hover:bg-[#6DB0DF] text-white font-bold px-8 py-4 rounded-lg text-base shadow-sm transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                  >
                    Conheça os segmentos atendidos
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Coluna imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full flex justify-center items-center"
            >
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1780606643/$bkp4vewjqnl"
                alt="Soluções operacionais Multionic"
                className="w-full max-w-lg h-auto object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. ESTRUTURA PREPARADA PARA CRESCER JUNTO COM NOSSOS CLIENTES */}
      <section className="py-16 md:py-24 bg-[#75BFBA] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Estrutura preparada para crescer junto com nossos clientes
              </h2>
              <p className="text-base md:text-lg text-white/95 mb-4 leading-relaxed font-normal">
                Investimos continuamente em processos, tecnologia e capacidade produtiva para garantir qualidade, segurança e consistência em cada solução desenvolvida.
              </p>
              <p className="text-base md:text-lg text-white/95 leading-relaxed font-normal">
                Nossa estrutura permite atender diferentes demandas de mercado, desde linhas próprias até projetos de fabricação sob demanda.
              </p>
            </motion.div>

            {/* Coluna carrossel de imagens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full h-72 sm:h-80 md:h-[380px] overflow-hidden rounded-xl md:rounded-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={structureImageIndex}
                  src={structureImages[structureImageIndex]}
                  alt="Estrutura fabril Multionic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover pointer-events-none absolute inset-0"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. NOSSOS NÚMEROS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014486]"
            >
              Nossos números
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bigNumbers.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative overflow-hidden group bg-[#6DB0DF] p-6 md:p-8 flex flex-col justify-center text-left border border-white/20 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Shine effect on hover */}
                <div className="absolute top-0 -left-[100%] w-[75%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none" />

                <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-3 leading-none relative z-10">
                  {item.value}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-snug font-normal relative z-10">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRESENÇA QUE ACOMPANHA O DESENVOLVIMENTO DO BRASIL */}
      <section className="py-16 md:py-24 bg-[#6DB0DF] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Presença que acompanha o desenvolvimento do Brasil
              </h2>
              <p className="text-base md:text-lg text-white/95 mb-4 leading-relaxed font-normal">
                Atendemos empresas em diferentes regiões do país, levando soluções desenvolvidas para apoiar operações que exigem desempenho, segurança e eficiência.
              </p>
              <p className="text-base md:text-lg text-white/95 leading-relaxed font-normal">
                Nossa atuação nacional nos permite compreender diferentes realidades e necessidades operacionais, oferecendo suporte próximo e soluções adequadas para cada contexto.
              </p>
            </motion.div>

            {/* Coluna imagem / mapa estilizado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full flex justify-center items-center"
            >
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784732257/$4qjscdorena"
                alt="Operação logística e presença nacional Multionic"
                className="w-full max-w-xl h-auto object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. BLOCO FINAL DE CONVERSÃO */}
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
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$3jzz3494k36"
                alt="Solicitar avaliação técnica Multionic" 
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
                Solicite uma avaliação técnica
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#333333] text-base md:text-lg font-normal leading-relaxed mb-8"
              >
                Nossa equipe está preparada para entender sua necessidade e indicar a solução mais adequada para sua operação.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Link to="/contato">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#6DB0DF] text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-[#014486] transition-all cursor-pointer"
                  >
                    Solicitar avaliação técnica
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
