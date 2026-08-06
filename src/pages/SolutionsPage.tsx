import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FileText,
  Factory,
  ArrowRight
} from 'lucide-react';

// Reusable Section components for the Solutions Page

const Hero = () => (
  <section 
    className="relative h-[700px] flex items-center overflow-hidden bg-[#014486] bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('https://d335luupugsy2.cloudfront.net/cms/files/38500/1784768630/$w3cs44emwy')" 
    }}
  >
    <div className="absolute inset-0 bg-[#014486]/60 pointer-events-none" />
    <div className="container-custom relative z-10 w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 uppercase leading-tight">
              Nossos Produtos
            </h1>
            <p className="text-white text-lg md:text-xl font-normal leading-relaxed mb-8">
              Conheça as soluções desenvolvidas pela Multionic para atender diferentes necessidades de limpeza, higienização e eficiência operacional em ambientes industriais, institucionais e profissionais.
              <br /><br />
              Explore as categorias e encontre a solução mais adequada para a sua operação.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative flex justify-center">
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$zgrm3k6b72f" 
                alt="Solução ideal Multionic" 
                className="w-full max-w-full h-auto max-h-[550px] object-contain rounded-none shadow-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Intro = () => (
  <section className="py-16 bg-bg-light/50 border-y border-gray-100">
    <div className="container-custom text-center max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase"
      >
        Navegue pelas categorias
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-black text-lg font-normal leading-relaxed"
      >
        Soluções desenvolvidas para diferentes aplicações, processos e necessidades operacionais. Selecione a categoria mais alinhada à realidade da sua operação.
      </motion.p>
    </div>
  </section>
);

const categories = [
  {
    title: "SABONETES",
    text: "Soluções para assepsia e higienização das mãos em ambientes industriais, institucionais e profissionais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1786050495/$kono40e4c1d",
    href: "/produtos/sabonetes"
  },
  {
    title: "DESENGRAXANTES",
    text: "Produtos para remoção de óleos, graxas e resíduos industriais em equipamentos, peças, máquinas e superfícies operacionais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$zglgyd5dg0s",
    href: "/produtos/desengraxantes"
  },
  {
    title: "COZINHA INDUSTRIAL",
    text: "Soluções para higienização de cozinhas profissionais, áreas de manipulação de alimentos e operações de food service.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$rkn1g5yuk1a",
    href: "/produtos/cozinha"
  },
  {
    title: "LAVANDERIA",
    text: "Produtos para lavagem, higienização e padronização de processos em lavanderias profissionais e industriais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$ysa0c5u5b7",
    href: "/produtos/lavanderia"
  },
  {
    title: "LIMPEZA GERAL",
    text: "Soluções para limpeza e manutenção de ambientes profissionais, institucionais e operacionais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$rlrsa0w6gop",
    href: "/produtos/limpeza-geral"
  },
  {
    title: "TRATAMENTO DE PISOS",
    text: "Produtos para conservação, proteção, restoration e manutenção de pisos submetidos a diferentes níveis de tráfego e utilização.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$xvptwvqxjcd",
    href: "/produtos/pisos"
  },
  {
    title: "PRODUTOS ESPECÍFICOS",
    text: "Soluções desenvolvidas para aplicações técnicas e necessidades operacionais específicas.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$es6y6n9bweo",
    href: "/produtos/especificos"
  },
  {
    title: "SUA MARCA, NOSSA PRODUÇÃO",
    text: "Desenvolvimento e fabricação de soluções químicas para empresas que desejam ampliar seu portfólio com marca própria e suporte industrial especializado.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$qevk7jvr9bq",
    href: "/produtos/outros"
  }
];

const CategoryGrid = () => (
  <section className="py-24 bg-[#F8F9FA] border-b border-gray-100">
    <div className="container-custom">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link key={idx} to={cat.href} className="group flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Imagem */}
              <div className="relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-50">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informações */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-[16px] md:text-[18px] font-bold text-brand-primary uppercase mb-4 tracking-tight">
                  {cat.title}
                </h3>
                
                <p className="text-gray-650 text-sm font-normal leading-relaxed mb-6 whitespace-pre-line">
                  {cat.text}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-brand-secondary font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300">
                    Ver soluções
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Packaging = () => (
  <section className="py-24 bg-[#333333] text-white relative">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
            SOLUÇÕES ADEQUADAS PARA DIFERENTES ESCALAS DE OPERAÇÃO
          </h2>
          <p className="text-white/90 text-lg font-normal leading-relaxed mb-8">
            A Multionic oferece produtos em diferentes formatos e volumes para atender desde operações específicas até ambientes com alto consumo e grande demanda operacional.
          </p>
          <ul className="space-y-4">
            {[
              "Embalagens para diferentes níveis de consumo",
              "Melhor aproveitamento e controle operacional",
              "Soluções para aplicações profissionais e industriais"
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <span className="text-[#97DCFE] font-bold text-lg">✔</span>
                <span className="text-white font-semibold text-base">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <img 
            src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776864450/$5owot05o0ax" 
            alt="Variedade de Embalagens Multionic" 
            className="w-full h-auto max-w-[120%] lg:scale-110 object-contain rounded-none shadow-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const CommercialCTA = () => (
  <section className="py-20 bg-brand-primary text-white relative">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Esquerda: Imagem com Overlap Padrão */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:-mt-40 lg:-mb-40 z-10"
          >
            <img 
              src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$9i1aakymrga"
              alt="Atendimento Multionic" 
              className="w-full h-auto object-contain pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Coluna Direita: Texto e Botões */}
        <div className="text-left order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase text-white"
          >
            Fale com um especialista Multionic
          </motion.h2>
          <div className="space-y-4 mb-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-lg md:text-xl font-normal leading-relaxed"
            >
              Nossa equipe está preparada para auxiliar na escolha da solução mais adequada para sua aplicação, processo ou necessidade operacional.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-base font-normal leading-relaxed"
            >
              Receba orientação técnica e encontre a melhor alternativa para a realidade da sua empresa.
            </motion.p>
          </div>
  
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-secondary text-white px-8 py-4 text-sm font-bold tracking-tight rounded-none hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-none border-none flex items-center justify-center"
            >
              Solicitar avaliação técnica
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrivateLabel = () => (
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
            alt="Laboratório Multionic" 
            className="w-full h-auto rounded-none shadow-none"
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
            Transforme sua ideia em uma linha própria de produtos com o suporte industrial, técnico e produtivo da Multionic.
            <br /><br />
            Desenvolvemos soluções para empresas que buscam ampliar seu portfólio com qualidade, segurança e capacidade produtiva especializada.
          </p>
          <button className="btn-primary py-5 px-10 shadow-none rounded-none uppercase font-bold text-xs">
            Saiba mais sobre terceirização
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Form = () => (
  <section className="py-24 bg-gray-50">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
            Entre em contato com nosso time
          </h2>
          <p className="text-black text-lg font-normal leading-relaxed mb-8">
            Preencha o formulário e nossa equipe retornará para entender sua necessidade e indicar a solução mais adequada para a sua operação.
            <br /><br />
            Com mais contexto, conseguimos oferecer um atendimento mais rápido, assertivo e alinhado à sua realidade.
          </p>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-none shadow-sm border border-gray-100">
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Nome</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="Nome completo" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">CNPJ</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="00.000.000/0000-00" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">E-mail</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="seuemail@exemplo.com" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Telefone</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Mensagem</label>
              <textarea className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary h-32" placeholder="Conte-nos brevemente sua necessidade..."></textarea>
            </div>
            <button className="btn-primary w-full py-4 uppercase font-bold tracking-tight shadow-none border-none mt-4">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default function SolutionsPage() {
  return (
    <>
      <Hero />
      <Intro />
      <CategoryGrid />
      <Packaging />
      <CommercialCTA />
      <PrivateLabel />
      <Form />
    </>
  );
}
