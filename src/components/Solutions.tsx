import { motion } from 'motion/react';
import { Beaker, Layers, Sparkles, ChefHat, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 1,
    title: "SABONETES",
    text: "Higiene e proteção com fórmulas suaves e eficientes. Conheça nossas opções para diferentes necessidades.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b950023172405940.jpg"
  },
  {
    id: 2,
    title: "DESENGRAXANTES",
    text: "Remova graxas e resíduos com máxima eficácia. Soluções poderosas para indústrias e oficinas.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9505e4483220872.jpg"
  },
  {
    id: 3,
    title: "COZINHA INDUSTRIAL",
    text: "Higienização segura e eficiente para cozinhas profissionais. Mantenha o padrão de qualidade do seu negócio.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952447433171858.jpg"
  },
  {
    id: 4,
    title: "LAVANDERIA",
    text: "Cuidado e performance para tecidos impecáveis. Descubra nossas soluções para lavagem profissional.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b952f9d683905738.jpg"
  },
  {
    id: 5,
    title: "LIMPEZA GERAL",
    text: "Produtos versáteis para uma limpeza completa e eficiente. Descubra nossa linha de soluções profissionais.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b9514d2822242195.jpg"
  },
  {
    id: 6,
    title: "TRATAMENTO DE PISOS",
    text: "Proteção e brilho para superfícies impecáveis. Encontre o produto ideal para o seu ambiente.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b95101a031881655.jpg"
  },
  {
    id: 7,
    title: "ESPECÍFICOS",
    text: "Soluções químicas avançadas para necessidades especiais. Eficiência e inovação a serviço da sua empresa.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b953650615921925.jpg"
  },
  {
    id: 8,
    title: "OUTROS",
    text: "Soluções especiais para demandas únicas. Produtos desenvolvidos para diferentes desafios de limpeza.",
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b-categorias/1764955387/imagens/desktop/1264715_1_1738097081679941b951ed2048352243.jpg"
  }
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-white">
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
            <Link key={item.id} to="/solucoes">
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
            to="/solucoes" 
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
      <div className="absolute inset-0 bg-[#0877E1]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Conteúdo Centralizado */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-[0.2em] pl-[0.2em] leading-tight transition-transform duration-500 group-hover:-translate-y-8">
          {item.title}
        </h3>
        
        <div className="absolute inset-x-6 bottom-12 md:bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <p className="text-white text-xs md:text-sm font-medium leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
