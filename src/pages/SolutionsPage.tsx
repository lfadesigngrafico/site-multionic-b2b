import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FileText,
  MessageCircle,
  Factory,
  ArrowRight
} from 'lucide-react';

// Reusable Section components for the Solutions Page

const Hero = () => (
  <section className="relative h-[700px] flex items-center overflow-hidden bg-[#014486]">
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
              Conheça nossa linha completa de produtos desenvolvidos para atender diferentes necessidades de limpeza industrial e institucional. Explore as categorias, encontre a solução mais adequada e escolha a embalagem ideal para a sua operação.
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
        Nossa linha contempla produtos para atender as mais diversas necessidades de limpeza industrial e institucional. Escolha a categoria que mais faz sentido para a sua operação e encontre a solução ideal.
      </motion.p>
    </div>
  </section>
);

const categories = [
  {
    title: "SABONETES",
    text: "Higiene e proteção com fórmulas suaves e eficientes. Conheça nossas opções para diferentes necessidades.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b950023172405940.jpg",
    href: "/solucoes/sabonetes"
  },
  {
    title: "DESENGRAXANTES",
    text: "Remova graxas e resíduos com máxima eficácia. Soluções poderosas para indústrias e oficinas.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9505e4483220872.jpg",
    href: "/solucoes/desengraxantes"
  },
  {
    title: "COZINHA INDUSTRIAL",
    text: "Higienização segura e eficiente para cozinhas profissionais. Mantenha o padrão de qualidade do seu negócio.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952447433171858.jpg",
    href: "/solucoes/cozinha"
  },
  {
    title: "LAVANDERIA",
    text: "Cuidado e performance para tecidos impecáveis. Descubra nossas soluções para lavagem profissional.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952f9d683905738.jpg",
    href: "/solucoes/lavanderia"
  },
  {
    title: "LIMPEZA GERAL",
    text: "Produtos versáteis para uma limpeza completa e eficiente. Descubra nossa linha de soluções profissionais.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9514d2822242195.jpg",
    href: "/solucoes/limpeza-geral"
  },
  {
    title: "TRATAMENTO DE PISOS",
    text: "Proteção e brilho para superfícies impecáveis. Encontre o produto ideal para o seu ambiente.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b95101a031881655.jpg",
    href: "/solucoes/pisos"
  },
  {
    title: "ESPECÍFICOS",
    text: "Soluções químicas avançadas para necessidades especiais. Eficiência e inovação a serviço da sua empresa.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b953650615921925.jpg",
    href: "/solucoes/especificos"
  },
  {
    title: "OUTROS",
    text: "Soluções especiais para demandas únicas. Produtos desenvolvidos para diferentes desafios de limpeza.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b951ed2048352243.jpg",
    href: "/solucoes/outros"
  }
];

const CategoryGrid = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
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
              <div className="absolute inset-0 bg-[#0877E1]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Conteúdo Centralizado */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-[0.2em] pl-[0.2em] leading-tight transition-transform duration-500 group-hover:-translate-y-8">
                  {cat.title}
                </h3>
                
                <div className="absolute inset-x-6 bottom-12 md:bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-xs md:text-sm font-medium leading-relaxed">
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
            No tamanho certo para o seu negócio
          </h2>
          <p className="text-white/90 text-lg font-normal leading-relaxed mb-8">
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
                <div className="w-2 h-2 bg-[#97DCFE] rounded-none"></div>
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
            Converse com nosso time comercial
          </motion.h2>
          <div className="space-y-4 mb-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-lg md:text-xl font-normal leading-relaxed"
            >
              Se sua empresa precisa de apoio para escolher a melhor solução, entender uma aplicação específica ou avaliar qual produto faz mais sentido para a operação, nosso time está pronto para ajudar.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-base font-normal leading-relaxed"
            >
              Nosso atendimento une visão comercial e direcionamento técnico para tornar a escolha mais segura e mais aderente à realidade do seu negócio.
            </motion.p>
          </div>
  
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-secondary text-white px-8 py-4 text-sm font-bold tracking-tight rounded-none hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-none border-none flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Fale com um especialista
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
          <p className="text-black text-lg font-normal leading-relaxed mb-8">
            Preencha o formulário e nos conte brevemente a sua necessidade. Assim, conseguimos direcionar o atendimento com mais contexto e agilidade.
          </p>
          <div className="mt-8">
            <img 
              src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$7exmnl7opjk" 
              alt="Suporte Multionic" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
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
