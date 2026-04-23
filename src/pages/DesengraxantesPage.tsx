import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Package, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';

const products = [
  {
    name: "Raylin Desengraxante Multiuso",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$751hst5yfa9",
    highlights: ["Ação imediata", "Baixa alcalinidade", "Base aquosa", "Com solvente glicólico"],
    description: "Desenvolvido para a remoção manual de óleos e graxas em máquinas, peças, equipamentos, veículos, pisos e superfícies laváveis. É uma solução de ação rápida, não inflamável, formulada para unir desempenho e segurança na rotina operacional.",
    indication: "Indicado para remoção imediata de óleos e graxas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Desengraxante Multiuso GF",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$30uu0u4skua",
    highlights: ["Limpeza de tintas gráficas", "Remove óleos e graxas", "Fórmula alcalina", "Base aquosa"],
    description: "Desengraxante multilimpador desenvolvido para potencializar a limpeza de tintas gráficas em chapas, rolos, molhadores, tinteiros, máquinas, peças e equipamentos em geral.",
    indication: "Indicado para limpeza de tintas gráficas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Desengraxante Multiuso LV",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$bx7zo9m6das",
    highlights: ["Baixa formação de espuma", "Pode ser usado em lavadoras", "pH neutro", "Remove óleos e graxas"],
    description: "Solução indicada para uso em lavadoras de alta pressão e aplicações que exigem baixa formação de espuma. Pode ser utilizada em alumínio e suas ligas.",
    indication: "Indicado para limpeza intensa de pisos, máquinas e equipamentos.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Limpeza Pesada",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$77vufmun6yi",
    highlights: ["Limpeza intensa", "Alta concentração", "Remove óleos e graxas com eficiência", "Fórmula alcalina de base aquosa"],
    description: "Desengraxante para limpeza manual intensa de máquinas, pisos, equipamentos e superfícies em geral.",
    indication: "Indicado para a remoção de óleos e graxas com máxima eficiência.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Limpeza Pesada SE",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$63ido4g5vj",
    highlights: ["Remoção eficaz de sujeira pesada", "Baixa formação de espuma", "Fórmula alcalina e concentrada", "Pode ser utilizado em máquinas lavadoras"],
    description: "Desengraxante indicado para remoção de sujeiras pesadas em máquinas, equipamentos e pisos.",
    indication: "Indicado para remoção eficaz de óleos e graxas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin DSE",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$xc6ce5xudrg",
    highlights: ["Limpeza intensa", "Baixa formação de espuma", "Alcalino", "Pode ser usado em lavadoras"],
    description: "Produto indicado para limpeza manual intensa com versatilidade operacional.",
    indication: "Indicado para uso em lavadoras de alta pressão.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin MSE-N",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$vu6jpk2mptl",
    highlights: ["Limpeza geral", "Baixa espuma", "Ideal para limpeza pesada", "Compatível com alumínio"],
    description: "Desengraxante indicado para limpeza de superfícies e operações com máquinas lavadoras.",
    indication: "Indicado para limpeza geral com uso mecanizado.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin SNT",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$qriae5c73xf",
    highlights: ["Alta rigidez dielétrica", "Rápida evaporação", "Não inflamável", "Remove óleos e graxas"],
    description: "Desengraxante para componentes elétricos e eletrônicos, mantendo isolamento e segurança.",
    indication: "Indicado para limpeza de motores, geradores e sistemas elétricos.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Multisolv-L",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$grec2oyrqe5",
    highlights: ["Não alcalino", "Não solúvel em água", "Baixa toxicidade", "Sem cheiro"],
    description: "Solvente sintético para limpeza intensa em aplicações que exigem solvente.",
    indication: "Indicado para desengraxe técnico de peças e equipamentos.",
    packaging: "Galão de 5L e bombona de 20L."
  }
];

const categories = [
  {
    title: "Sabonetes",
    text: "Soluções para assepsia, higiene profissional e cuidados em ambientes que exigem segurança e padronização.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$q4zmgv0vrp",
    href: "/solucoes/sabonetes"
  },
  {
    title: "Desengraxantes",
    text: "Produtos para limpeza técnica, remoção de óleos e graxas e alto desempenho em diferentes contextos industriais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$zglgyd5dg0s",
    href: "/solucoes/desengraxantes"
  },
  {
    title: "Cozinha industrial",
    text: "Soluções para ambientes que exigem controle, produtividade e limpeza pesada com mais segurança na operação.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$rkn1g5yuk1a",
    href: "/solucoes/cozinha"
  },
  {
    title: "Lavanderia",
    text: "Produtos para processos de lavagem profissional, com foco em desempenho, recorrência e praticidade de uso.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$ysa0c5u5b7",
    href: "/solucoes/lavanderia"
  },
  {
    title: "Limpeza geral",
    text: "Soluções versáteis para conservação, limpeza de rotina e manutenção de ambientes profissionais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$rlrsa0w6gop",
    href: "/solucoes/limpeza-geral"
  },
  {
    title: "Tratamento de pisos",
    text: "Produtos para conservação, proteção, restauração e melhor resultado na rotina de limpeza e manutenção de pisos.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$xvptwvqxjcd",
    href: "/solucoes/pisos"
  },
  {
    title: "Específicos",
    text: "Soluções desenvolvidas para aplicações técnicas e necessidades mais direcionadas de limpeza profissional.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$es6y6n9bweo",
    href: "/solucoes/especificos"
  },
  {
    title: "Outros",
    text: "Produtos complementares para operações que demandam soluções específicas além das linhas principais.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$hzt955zerli",
    href: "/solucoes/outros"
  }
];

export default function DesengraxantesPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* 2. BREADCRUMB */}
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6 uppercase tracking-widest font-bold">
                  <span>Você está em</span>
                  <ChevronRight size={10} />
                  <Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link>
                  <ChevronRight size={10} />
                  <Link to="/solucoes" className="hover:text-brand-secondary transition-colors">Soluções</Link>
                  <ChevronRight size={10} />
                  <span className="text-brand-primary">Desengraxantes industriais</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 uppercase leading-tight">
                  Desengraxantes industriais para limpeza técnica de alta performance
                </h1>
                <p className="text-black text-lg md:text-xl font-normal leading-relaxed mb-10">
                  Soluções desenvolvidas para remover óleos, graxas e sujeiras pesadas com eficiência, segurança e melhor desempenho em diferentes aplicações industriais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary py-5 px-10 uppercase text-xs font-bold shadow-none rounded-none">
                    Fale com um especialista
                  </button>
                  <button className="btn-gray py-5 px-10 uppercase text-xs font-bold shadow-none rounded-none">
                    Solicitar ficha técnica
                  </button>
                </div>
              </motion.div>
              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img 
                    src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$751hst5yfa9" 
                    alt="Industrial cleaning application" 
                    className="rounded-none shadow-none"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUÇÃO */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda: Imagem com Overlap */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:-mt-24 lg:-mb-24 z-10"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776950389/$ka5fbsbl96n" 
                alt="Potência de Limpeza Multionic" 
                className="w-full h-auto rounded-none shadow-xl pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Coluna Direita: Texto */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase"
              >
                Potência de limpeza para operações que exigem resultado
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black text-lg font-normal leading-relaxed"
              >
                Os desengraxantes Multionic foram desenvolvidos para atender demandas de limpeza técnica em ambientes industriais, operacionais e profissionais. São soluções pensadas para remover resíduos oleosos, graxas e sujeiras pesadas com mais eficiência, segurança e adequação ao contexto de uso. Fórmulas voltadas ao uso industrial, automotivo e operacional que garantem limpeza profunda mesmo em graxas difíceis.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRADE DE PRODUTOS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white border border-gray-100 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                <div className="w-full aspect-square overflow-hidden bg-white border-b border-gray-50 p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-brand-primary uppercase">
                      {product.name}
                    </h3>
                  </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary bg-brand-secondary/5 px-2 py-1 rounded">
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-black text-sm font-normal leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="bg-gray-50/50 p-4 rounded-none mb-6 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Indicação principal</span>
                  <p className="text-brand-primary font-bold text-sm">{product.indication}</p>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-2">Disponível em</span>
                  <div className="flex items-start space-x-2">
                    <Package size={14} className="text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-[11px] text-gray-500 font-normal leading-tight">{product.packaging}</p>
                  </div>
                </div>

                <button className="btn-primary w-full py-4 uppercase font-bold text-xs shadow-none border-none tracking-tight">
                  Solicitar orçamento
                </button>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* 5. BLOCO COMERCIAL */}
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
                Converse com nosso time comercial
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white text-lg md:text-xl font-normal leading-relaxed mb-6"
              >
                Se sua empresa precisa de soluções de alto desempenho para remoção de óleos, graxas e sujeiras pesadas, nosso time está pronto para entender a sua necessidade e indicar a melhor opção para a sua operação.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white text-base mb-12"
              >
                Atendemos diferentes contextos de uso, do desengraxe manual às aplicações mais técnicas e específicas.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <button className="bg-brand-secondary text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-white hover:text-brand-primary transition-all">
                  Fale com um especialista
                </button>
                <button className="btn-gray px-10 py-5 font-bold uppercase tracking-tight">
                  Solicitar ficha técnica
                </button>
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
                No tamanho certo para o seu negócio
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                Escolha entre diferentes formatos e volumes para atender melhor a rotina da sua empresa, com mais eficiência, economia e logística inteligente.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Galão de 5L", 
                  "Bombona de 20L", 
                  "Bombona de 50L", 
                  "Tambor de 200L", 
                  "Container de 1000L"
                ].map((size, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-secondary rounded-none"></div>
                    <span className="text-brand-primary font-bold text-sm uppercase">{size}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                * Para produtos específicos, a disponibilidade pode variar conforme a linha.
              </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <Link key={idx} to={cat.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-none border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden hover:shadow-xl"
                >
                  <div className="w-full aspect-square overflow-hidden bg-white">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                    <h3 className="text-lg font-bold text-brand-primary mb-4 uppercase tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-black text-sm font-normal leading-relaxed mb-6 flex-grow">
                      {cat.text}
                    </p>
                    <div className="flex items-center text-brand-secondary font-bold text-xs group hover:gap-2 transition-all uppercase tracking-wider mt-auto">
                      Ver soluções
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
    </div>
  );
}
