import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Package, 
  MessageSquare, 
  ArrowRight,
  Droplet,
  ChefHat,
  WashingMachine,
  Sparkles,
  Layers,
  Focus,
  PlusCircle
} from 'lucide-react';

const products = [
  {
    name: "Raylin Desengraxante Multiuso",
    highlights: ["Ação imediata", "Baixa alcalinidade", "Base aquosa", "Com solvente glicólico"],
    description: "Desenvolvido para a remoção manual de óleos e graxas em máquinas, peças, equipamentos, veículos, pisos e superfícies laváveis. É uma solução de ação rápida, não inflamável, formulada para unir desempenho e segurança na rotina operacional.",
    indication: "Indicado para remoção imediata de óleos e graxas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Desengraxante Multiuso GF",
    highlights: ["Limpeza de tintas gráficas", "Remove óleos e graxas", "Fórmula alcalina", "Base aquosa"],
    description: "Desengraxante multilimpador desenvolvido para potencializar a limpeza de tintas gráficas em chapas, rolos, molhadores, tinteiros, máquinas, peças e equipamentos em geral.",
    indication: "Indicado para limpeza de tintas gráficas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Desengraxante Multiuso LV",
    highlights: ["Baixa formação de espuma", "Pode ser usado em lavadoras", "pH neutro", "Remove óleos e graxas"],
    description: "Solução indicada para uso em lavadoras de alta pressão e aplicações que exigem baixa formação de espuma. Pode ser utilizada em alumínio e suas ligas.",
    indication: "Indicado para limpeza intensa de pisos, máquinas e equipamentos.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Limpeza Pesada",
    highlights: ["Limpeza intensa", "Alta concentração", "Remove óleos e graxas com eficiência", "Fórmula alcalina de base aquosa"],
    description: "Desengraxante para limpeza manual intensa de máquinas, pisos, equipamentos e superfícies em geral.",
    indication: "Indicado para a remoção de óleos e graxas com máxima eficiência.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin Limpeza Pesada SE",
    highlights: ["Remoção eficaz de sujeira pesada", "Baixa formação de espuma", "Fórmula alcalina e concentrada", "Pode ser utilizado em máquinas lavadoras"],
    description: "Desengraxante indicado para remoção de sujeiras pesadas em máquinas, equipamentos e pisos.",
    indication: "Indicado para remoção eficaz de óleos e graxas.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin DSE",
    highlights: ["Limpeza intensa", "Baixa formação de espuma", "Alcalino", "Pode ser usado em lavadoras"],
    description: "Produto indicado para limpeza manual intensa com versatilidade operacional.",
    indication: "Indicado para uso em lavadoras de alta pressão.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin MSE-N",
    highlights: ["Limpeza geral", "Baixa espuma", "Ideal para limpeza pesada", "Compatível com alumínio"],
    description: "Desengraxante indicado para limpeza de superfícies e operações com máquinas lavadoras.",
    indication: "Indicado para limpeza geral com uso mecanizado.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Raylin SNT",
    highlights: ["Alta rigidez dielétrica", "Rápida evaporação", "Não inflamável", "Remove óleos e graxas"],
    description: "Desengraxante para componentes elétricos e eletrônicos, mantendo isolamento e segurança.",
    indication: "Indicado para limpeza de motores, geradores e sistemas elétricos.",
    packaging: "Galão de 5L, bombona de 20L, bombona de 50L, tambor de 200L e container de 1000L (IBC)."
  },
  {
    name: "Multisolv-L",
    highlights: ["Não alcalino", "Não solúvel em água", "Baixa toxicidade", "Sem cheiro"],
    description: "Solvente sintético para limpeza intensa em aplicações que exigem solvente.",
    indication: "Indicado para desengraxe técnico de peças e equipamentos.",
    packaging: "Galão de 5L e bombona de 20L."
  }
];

const otherCategories = [
  { title: "Sabonetes", href: "/solucoes/sabonetes", icon: <Droplet className="w-5 h-5" /> },
  { title: "Cozinha industrial", href: "/solucoes/cozinha", icon: <ChefHat className="w-5 h-5" /> },
  { title: "Lavanderia", href: "/solucoes/lavanderia", icon: <WashingMachine className="w-5 h-5" /> },
  { title: "Limpeza geral", href: "/solucoes/limpeza-geral", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Tratamento de pisos", href: "/solucoes/pisos", icon: <Layers className="w-5 h-5" /> },
  { title: "Específicos", href: "/solucoes/especificos", icon: <Focus className="w-5 h-5" /> },
  { title: "Outros", href: "/solucoes/outros", icon: <PlusCircle className="w-5 h-5" /> },
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
                  <button className="btn-outline py-5 px-10 uppercase text-xs font-bold shadow-none rounded-none ring-1 ring-gray-200">
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
                    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" 
                    alt="Industrial cleaning application" 
                    className="rounded-none shadow-2xl grayscale"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUÇÃO */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container-custom max-w-4xl">
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
                className="bg-white border border-gray-100 rounded-none p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BLOCO COMERCIAL */}
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
            Se sua empresa precisa de soluções de alto desempenho para remoção de óleos, graxas e sujeiras pesadas, nosso time está pronto para entender a sua necessidade e indicar a melhor opção para a sua operação.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base mb-12"
          >
            Atendemos diferentes contextos de uso, do desengraxe manual às aplicações mais técnicas e específicas.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-secondary text-white px-10 py-5 font-bold uppercase tracking-tight hover:bg-white hover:text-brand-primary transition-all">
              Fale com um especialista
            </button>
            <button className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-10 py-5 font-bold uppercase tracking-tight hover:bg-white hover:text-brand-primary transition-all">
              Solicitar ficha técnica
            </button>
          </div>
        </div>
      </section>

      {/* 6. BLOCO DE EMBALAGENS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase">
              No tamanho certo para o seu negócio
            </h2>
            <p className="text-black text-lg font-normal max-w-2xl mx-auto">
              Escolha entre diferentes formatos e volumes para atender melhor a rotina da sua empresa, com mais eficiência, economia e logística inteligente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Galão de 5L", "Bombona de 20L", "Bombona de 50L", "Tambor de 200L", "Container de 1000L"
            ].map((size, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-none flex flex-col items-center text-center border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <Package className="w-10 h-10 text-brand-secondary mb-4" />
                <span className="text-brand-primary font-bold text-xs uppercase tracking-tighter">{size}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-[10px] mt-8 uppercase font-bold tracking-widest">
            * Para produtos específicos, a disponibilidade pode variar conforme a linha.
          </p>
        </div>
      </section>

      {/* 7. NAVEGAÇÃO ENTRE CATEGORIAS */}
      <section className="py-24 bg-bg-light border-y border-gray-100">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-primary uppercase mb-2">Navegue pelas categorias</h2>
            <p className="text-black text-lg">Conheça outras soluções da linha institucional e industrial da Multionic.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCategories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={cat.href}
                className="flex items-center space-x-4 bg-white p-6 border border-gray-100 hover:border-brand-secondary hover:shadow-md transition-all group"
              >
                <div className="text-brand-secondary group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-brand-primary font-bold text-sm uppercase tracking-tight">{cat.title}</span>
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
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
    </div>
  );
}
