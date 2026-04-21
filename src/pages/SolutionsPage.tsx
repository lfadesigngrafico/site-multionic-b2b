import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  Trash2, 
  ChefHat, 
  WashingMachine, 
  Sparkles, 
  Layers, 
  Focus, 
  PlusCircle,
  FileText,
  MessageCircle,
  Factory
} from 'lucide-react';

// Reusable Section components for the Solutions Page

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
    <div className="container-custom relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-brand-primary mb-6 uppercase leading-tight">
              Encontre a solução ideal para o seu negócio
            </h1>
            <p className="text-black text-lg md:text-xl font-normal leading-relaxed mb-8">
              Conheça nossa linha completa de produtos desenvolvidos para atender diferentes necessidades de limpeza industrial e institucional. Explore as categorias, encontre a solução mais adequada e escolha a embalagem ideal para a sua operação.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Technical chemical application" 
                className="w-full h-full object-cover rounded-none shadow-2xl grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-secondary/20 rounded-none blur-3xl"></div>
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
        Nossa linha contempla produtos para atender as mais diversas necessidades de limpeza industrial e institucional. Escolha a categoria que mais faz sentido para a sua operação e encontre a solução ideal.
      </motion.p>
    </div>
  </section>
);

const categories = [
  {
    title: "Sabonetes",
    text: "Soluções para assepsia, higiene profissional e cuidados em ambientes que exigem segurança e padronização.",
    icon: <Droplet className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/sabonetes"
  },
  {
    title: "Desengraxantes",
    text: "Produtos para limpeza técnica, remoção de óleos e graxas e alto desempenho em diferentes contextos industriais.",
    icon: <Trash2 className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/desengraxantes"
  },
  {
    title: "Cozinha industrial",
    text: "Soluções para ambientes que exigem controle, produtividade e limpeza pesada com mais segurança na operação.",
    icon: <ChefHat className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/cozinha"
  },
  {
    title: "Lavanderia",
    text: "Produtos para processos de lavagem profissional, com foco em desempenho, recorrência e praticidade de uso.",
    icon: <WashingMachine className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/lavanderia"
  },
  {
    title: "Limpeza geral",
    text: "Soluções versáteis para conservação, limpeza de rotina e manutenção de ambientes profissionais.",
    icon: <Sparkles className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/limpeza-geral"
  },
  {
    title: "Tratamento de pisos",
    text: "Produtos para conservação, proteção, restauração e melhor resultado na rotina de limpeza e manutenção de pisos.",
    icon: <Layers className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/pisos"
  },
  {
    title: "Específicos",
    text: "Soluções desenvolvidas para aplicações técnicas e necessidades mais direcionadas de limpeza profissional.",
    icon: <Focus className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/especificos"
  },
  {
    title: "Outros",
    text: "Produtos complementares para operações que demandam soluções específicas além das linhas principais.",
    icon: <PlusCircle className="w-8 h-8 text-brand-secondary" />,
    href: "/solucoes/outros"
  }
];

const CategoryGrid = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <Link key={idx} to={cat.href}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-none border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center hover:shadow-xl"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-none text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-4 uppercase">
                {cat.title}
              </h3>
              <p className="text-black text-sm font-normal leading-relaxed">
                {cat.text}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Packaging = () => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
            No tamanho certo para o seu negócio
          </h2>
          <p className="text-black text-lg font-normal leading-relaxed mb-8">
            A Multionic oferece soluções pensadas para operações de diferentes portes. Além de variedade de linhas, você encontra formatos e embalagens adequados para a realidade do seu negócio, ajudando a otimizar consumo, armazenagem e rotina de uso.
          </p>
          <ul className="space-y-4">
            {[
              "Embalagens para diferentes escalas de operação",
              "Mais praticidade no abastecimento",
              "Melhor adequação ao consumo do negócio",
              "Soluções para uso profissional e industrial"
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-secondary rounded-none"></div>
                <span className="text-black font-semibold text-base">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000" 
            alt="Packaging variety" 
            className="rounded-none shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const CommercialCTA = () => (
  <section className="py-24 bg-brand-primary text-white text-center">
    <div className="container-custom max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-8 uppercase"
      >
        Converse com nosso time comercial
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/80 text-lg md:text-xl font-normal leading-relaxed mb-6"
      >
        Se sua empresa precisa de apoio para escolher a melhor solução, entender uma aplicação específica ou avaliar qual produto faz mais sentido para a operação, nosso time está pronto para ajudar.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/60 text-base mb-12"
      >
        Nosso atendimento une visão comercial e direcionamento técnico para tornar a escolha mais segura e mais aderente à realidade do seu negócio.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-secondary text-white px-12 py-5 font-bold uppercase tracking-tight hover:bg-white hover:text-brand-primary transition-all shadow-xl"
      >
        Fale com um especialista
      </motion.button>
    </div>
  </section>
);

const FAQStrip = () => (
  <section className="py-12 bg-bg-light border-y border-gray-100">
    <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
      <h3 className="text-brand-primary font-bold text-xl uppercase text-center lg:text-left">
        Dúvidas como estas ou outras, chame nosso time ou acesse nossa FAQ
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="btn-primary py-4 px-8 whitespace-nowrap shadow-none rounded-none uppercase text-xs">
          Fale com um especialista
        </button>
        <button className="btn-outline py-4 px-8 whitespace-nowrap shadow-none rounded-none uppercase text-xs">
          Acessar nossa FAQ
        </button>
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
            src="https://images.unsplash.com/photo-1530124560676-547e1e40f368?auto=format&fit=crop&q=80&w=1000" 
            alt="Industrial production" 
            className="rounded-none grayscale shadow-lg"
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
);

const Form = () => (
  <section className="py-24 bg-gray-50">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
            Entre em contato com nosso time
          </h2>
          <p className="text-black text-lg font-normal leading-relaxed">
            Preencha o formulário e nos conte brevemente a sua necessidade. Assim, conseguimos direcionar o atendimento com mais contexto e agilidade.
          </p>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-none shadow-sm border border-gray-100">
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Nome</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="Nome completo" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">E-mail</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary" placeholder="seuemail@empresa.com" />
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

const SeoStrip = () => (
  <section className="py-20 bg-[#f0f3f5]">
    <div className="container-custom text-center">
      <h2 className="text-xl md:text-2xl font-bold text-brand-primary mb-4 uppercase">
        Soluções sob medida para cada necessidade
      </h2>
      <p className="text-black text-base md:text-lg mb-12 font-normal">
        Conheça nossa linha de produtos voltada para diferentes contextos de limpeza industrial e institucional.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          "Limpeza industrial", "Cozinha industrial", "Lavanderia", "Limpeza geral",
          "Tratamento de pisos", "Desinfetantes", "Detergentes", "Higiene pessoal"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-center bg-white p-4 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer border border-gray-100 uppercase tracking-tighter">
            {item}
          </div>
        ))}
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
      <FAQStrip />
      <PrivateLabel />
      <Form />
      <SeoStrip />
    </>
  );
}
