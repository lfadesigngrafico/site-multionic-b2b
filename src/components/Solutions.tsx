import { motion } from 'motion/react';
import { Beaker, Layers, Sparkles, ChefHat, Factory, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: "Desengraxantes industriais",
    text: "Soluções para limpeza técnica com eficiência, segurança e alto desempenho.",
    icon: <Factory className="w-8 h-8 text-brand-secondary" />,
    buttonText: "Ver soluções"
  },
  {
    id: 2,
    title: "Tratamento de pisos",
    text: "Produtos para conservação, proteção e melhor resultado na rotina de limpeza.",
    icon: <Layers className="w-8 h-8 text-brand-secondary" />,
    buttonText: "Ver soluções"
  },
  {
    id: 3,
    title: "Higiene das mãos",
    text: "Soluções para assepsia, higiene profissional e cuidados em ambientes de alta exigência.",
    icon: <Sparkles className="w-8 h-8 text-brand-secondary" />,
    buttonText: "Ver soluções"
  },
  {
    id: 4,
    title: "Cozinha industrial",
    text: "Produtos para ambientes que exigem controle, produtividade e limpeza pesada.",
    icon: <ChefHat className="w-8 h-8 text-brand-secondary" />,
    buttonText: "Ver soluções"
  },
  {
    id: 5,
    title: "Sua marca, nossa produção",
    text: "Estrutura industrial e capacidade produtiva para projetos sob demanda.",
    icon: <Beaker className="w-8 h-8 text-brand-secondary" />,
    buttonText: "Saiba mais"
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
            Soluções para diferentes necessidades da operação
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((item, idx) => (
            <SolutionCard key={item.id} item={item} delay={idx * 0.1} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.slice(3).map((item, idx) => (
            <SolutionCard key={item.id} item={item} delay={(idx + 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ item, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="mb-6 p-3 bg-brand-secondary/5 inline-block rounded-xl w-fit">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-brand-primary mb-4">
        {item.title}
      </h3>
      <p className="text-black mb-8 flex-grow font-normal leading-relaxed">
        {item.text}
      </p>
      <button className="flex items-center text-brand-secondary font-bold text-sm group hover:gap-2 transition-all">
        {item.buttonText}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}
