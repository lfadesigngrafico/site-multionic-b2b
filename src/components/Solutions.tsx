import { motion } from 'motion/react';
import { Beaker, Layers, Sparkles, ChefHat, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 1,
    title: "SABONETES",
    text: "Higiene e proteção com fórmulas suaves e eficientes. Conheça nossas opções para diferentes necessidades.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b950023172405940.jpg",
    href: "/produtos/sabonetes"
  },
  {
    id: 2,
    title: "DESENGRAXANTES",
    text: "Remova graxas e resíduos com máxima eficácia. Soluções poderosas para indústrias e oficinas.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9505e4483220872.jpg",
    href: "/produtos/desengraxantes"
  },
  {
    id: 3,
    title: "COZINHA INDUSTRIAL",
    text: "Higienização segura e eficiente para cozinhas profissionais. Mantenha o padrão de qualidade do seu negócio.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952447433171858.jpg",
    href: "/produtos/cozinha"
  },
  {
    id: 4,
    title: "LAVANDERIA",
    text: "Cuidado e performance para tecidos impecáveis. Descubra nossas soluções para lavagem profissional.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952f9d683905738.jpg",
    href: "/produtos/lavanderia"
  },
  {
    id: 5,
    title: "LIMPEZA GERAL",
    text: "Produtos versáteis para uma limpeza completa e eficiente. Descubra nossa linha de soluções profissionais.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9514d2822242195.jpg",
    href: "/produtos/limpeza-geral"
  },
  {
    id: 6,
    title: "TRATAMENTO DE PISOS",
    text: "Proteção e brilho para superfícies impecáveis. Encontre o produto ideal para o seu ambiente.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b95101a031881655.jpg",
    href: "/produtos/pisos"
  },
  {
    id: 7,
    title: "PRODUTOS ESPECÍFICOS",
    text: "Soluções químicas avançadas para necessidades especiais. Eficiência e inovação a serviço da sua empresa.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b953650615921925.jpg",
    href: "/produtos/especificos"
  },
  {
    id: 8,
    title: "SUA MARCA, NOSSA PRODUÇÃO",
    text: "Transformamos sua visão em produtos de alta qualidade. Cuidamos de cada detalhe da fabricação para atender grandes demandas em terceirização, enquanto você foca no crescimento do seu negócio.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1779725014/$dx814ryzur",
    href: "/produtos/outros"
  }
];

export default function Solutions() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase"
          >
            Produtos para diferentes necessidades da operação
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-lg max-w-2xl mx-auto font-normal"
          >
            Conheça as principais frentes da Multionic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {solutions.map((item, idx) => (
            <Link key={item.id} to={item.href}>
              <SolutionCard item={item} delay={idx * 0.05} />
            </Link>
          ))}
        </div>

        {/* Novo Link Ver Todas as Soluções */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link 
            to="/produtos" 
            className="flex items-center gap-2 text-brand-secondary font-black text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 group"
          >
            Ver todos os produtos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionCard({ item, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative aspect-square overflow-hidden group cursor-pointer"
    >
      {/* Imagem de Fundo */}
      <img 
        src={item.image} 
        alt={item.title}
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
          {item.title}
        </h3>
        
        <div className="absolute inset-0 p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
          <p className="text-white text-xs md:text-sm font-medium leading-relaxed max-w-[90%] whitespace-pre-line">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
