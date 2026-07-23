import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  TrendingUp, 
  Sliders, 
  Building2,
  HardHat, 
  Cog, 
  Milk, 
  Utensils, 
  FlaskConical, 
  Truck 
} from 'lucide-react';

const segmentCards = [
  {
    name: "Metalúrgica e siderúrgica",
    icon: <HardHat className="w-6 h-6" />,
    link: "/contato"
  },
  {
    name: "Máquinas e equipamentos",
    icon: <Cog className="w-6 h-6" />,
    link: "/contato"
  },
  {
    name: "Borracha e plástico",
    icon: <Milk className="w-6 h-6" />,
    link: "/contato"
  },
  {
    name: "Alimentícia e bebidas",
    icon: <Utensils className="w-6 h-6" />,
    link: "/contato"
  },
  {
    name: "Química e petroquímica",
    icon: <FlaskConical className="w-6 h-6" />,
    link: "/contato"
  },
  {
    name: "Logística e armazenagem",
    icon: <Truck className="w-6 h-6" />,
    link: "/contato"
  }
];

const differentials = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Atendimento técnico especializado",
    description: "Orientação para identificar a solução mais adequada para cada aplicação e necessidade operacional."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Eficiência operacional",
    description: "Produtos desenvolvidos para aumentar produtividade, padronização e desempenho dos processos."
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Soluções para diferentes desafios",
    description: "Formulações desenvolvidas para atender diferentes ambientes, superfícies e demandas operacionais."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Experiência de mercado",
    description: "Décadas atendendo empresas dos mais diversos segmentos industriais e profissionais."
  }
];

export default function SegmentsPage() {
  return (
    <div className="font-sans bg-white text-[#333333]">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[700px] flex items-center overflow-hidden bg-[#014486] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://d335luupugsy2.cloudfront.net/cms/files/38500/1784768630/$pcj7w68q1y8')" 
        }}
      >
        <div className="absolute inset-0 bg-[#014486]/60 pointer-events-none" />
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Coluna esquerda - Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center text-left"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight whitespace-nowrap">
                Segmentos atendidos
              </h1>
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed mb-4">
                A Multionic atende diferentes segmentos industriais e profissionais com soluções desenvolvidas para aumentar eficiência operacional, segurança e padronização dos processos de limpeza e higienização.
              </p>
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed">
                Atuamos ao lado de empresas que precisam de desempenho, suporte técnico especializado e resultados consistentes em suas operações.
              </p>
            </motion.div>

            {/* Coluna direita - Mantida sem nenhuma imagem */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* 2. BLOCO DE SEGMENTOS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014486] mb-4 uppercase"
            >
              Soluções para diferentes operações industriais
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-base md:text-lg text-[#333333] mb-3 leading-relaxed"
            >
              Cada segmento possui desafios específicos de limpeza, higienização e conservação. Por isso, desenvolvemos soluções adaptadas às necessidades de diferentes ambientes produtivos e operacionais.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-base md:text-lg text-[#666666] leading-relaxed font-normal"
            >
              Selecione abaixo o segmento mais próximo da realidade da sua empresa.
            </motion.p>
          </div>

          {/* Cards dos segmentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-6 border border-slate-100 shadow-sm relative group flex items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20 text-left overflow-hidden cursor-pointer"
              >
                <Link to={card.link} className="flex items-center space-x-6 w-full">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-none bg-[#6DB0DF]/10 text-[#6DB0DF] group-hover:bg-[#6DB0DF] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[#3B529B] font-bold text-base md:text-lg leading-tight group-hover:text-[#6DB0DF] transition-colors duration-300">
                    {card.name}
                  </span>
                </Link>
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE DIFERENCIAIS */}
      <section className="py-16 md:py-24 bg-[#6DB0DF]">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Conhecimento aplicado à realidade de cada segmento
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-base md:text-lg text-white/90 leading-relaxed"
            >
              Nossos especialistas entendem os desafios de diferentes operações e ajudam empresas a encontrar soluções mais eficientes para seus processos.
            </motion.p>
          </div>

          {/* Grade de diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {differentials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-8 border border-slate-100 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20 text-left overflow-hidden"
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
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOCO DE CONVERSÃO */}
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
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1784810169/$menwtorqxq"
                alt="Fale com um especialista Multionic" 
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
                Fale com um especialista Multionic
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#333333] text-base md:text-lg font-normal leading-relaxed mb-4"
              >
                Nossa equipe pode ajudar sua empresa a identificar a solução mais adequada para sua operação, aplicação ou segmento de atuação.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-[#333333] text-base md:text-lg font-normal leading-relaxed mb-8"
              >
                Receba orientação técnica e encontre a alternativa mais eficiente para a realidade da sua operação.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Link to="/contato">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#6DB0DF] text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-[#014486] transition-all cursor-pointer"
                  >
                    Solicitar orientação técnica
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
