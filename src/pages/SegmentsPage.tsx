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
    icon: <ClipboardCheck className="w-8 h-8 text-[#6DB0DF]" />,
    title: "Atendimento técnico especializado",
    description: "Orientação para identificar a solução mais adequada para cada aplicação e necessidade operacional."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#6DB0DF]" />,
    title: "Eficiência operacional",
    description: "Produtos desenvolvidos para aumentar produtividade, padronização e desempenho dos processos."
  },
  {
    icon: <Sliders className="w-8 h-8 text-[#6DB0DF]" />,
    title: "Soluções para diferentes desafios",
    description: "Formulações desenvolvidas para atender diferentes ambientes, superfícies e demandas operacionais."
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#6DB0DF]" />,
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
      <section className="py-16 md:py-24 bg-[#014486] relative overflow-hidden">
        {/* Background Industrial Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#014486]/85 z-10" />
          <img 
            src="https://pages.greatpages.com.br/www.multionic.com.br-sobre/1764934312/imagens/desktop/1301048_1_05014.jpg" 
            alt="Background Industrial" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container-custom relative z-20">
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase"
            >
              Soluções para diferentes operações industriais
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-base md:text-lg text-white/90 mb-3 leading-relaxed"
            >
              Cada segmento possui desafios específicos de limpeza, higienização e conservação. Por isso, desenvolvemos soluções adaptadas às necessidades de diferentes ambientes produtivos e operacionais.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-base md:text-lg text-white/70 leading-relaxed font-normal"
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
                whileHover={{ scale: 1.02 }}
                className="group bg-white p-6 rounded-none shadow-sm border border-transparent flex items-center space-x-6 hover:shadow-md transition-all cursor-pointer"
              >
                <Link to={card.link} className="flex items-center space-x-6 w-full">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-none bg-[#f0f3f5] text-[#6DB0DF] group-hover:bg-[#6DB0DF] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[#014486] font-bold text-base md:text-lg leading-tight">
                    {card.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE DIFERENCIAIS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014486] mb-4"
            >
              Conhecimento aplicado à realidade de cada segmento
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-base md:text-lg text-[#333333] leading-relaxed"
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
                className="bg-[#F0F3F5]/60 border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col justify-start text-left hover:border-[#6DB0DF]/30 transition-colors duration-300"
              >
                <div className="mb-5 p-3 rounded-lg bg-white w-fit border border-[#E5E7EB] shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#014486] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOCO DE CONVERSÃO */}
      <section className="py-16 md:py-20 bg-[#014486] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto e botão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Fale com um especialista Multionic
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed font-normal">
                Nossa equipe pode ajudar sua empresa a identificar a solução mais adequada para sua operação, aplicação ou segmento de atuação.
              </p>
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed font-normal">
                Receba orientação técnica e encontre a alternativa mais eficiente para a realidade da sua operação.
              </p>
              <div>
                <Link to="/contato">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-[#014486] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-base shadow-sm transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                  >
                    Solicitar orientação técnica
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Imagem industrial de apoio (sem texto visível) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/20 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Apoio técnico Multionic"
                className="w-full h-64 sm:h-72 md:h-[350px] object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
