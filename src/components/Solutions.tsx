import { motion } from 'motion/react';
import { Beaker, Layers, Sparkles, ChefHat, Factory, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: "Desengraxantes industriais",
    text: "Soluções para limpeza técnica com eficiência, segurança e alto desempenho.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$zglgyd5dg0s",
    buttonText: "Ver soluções"
  },
  {
    id: 2,
    title: "Tratamento de pisos",
    text: "Produtos para conservação, proteção e melhor resultado na rotina de limpeza.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$xvptwvqxjcd",
    buttonText: "Ver soluções"
  },
  {
    id: 3,
    title: "Higiene das mãos",
    text: "Soluções para assepsia, higiene profissional e cuidados em ambientes de alta exigência.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$q4zmgv0vrp",
    buttonText: "Ver soluções"
  },
  {
    id: 4,
    title: "Cozinha industrial",
    text: "Produtos para ambientes que exigem controle, produtividade e limpeza pesada.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$rkn1g5yuk1a",
    buttonText: "Ver soluções"
  },
  {
    id: 5,
    title: "Sua marca, nossa produção",
    text: "Estrutura industrial e capacidade produtiva para projetos sob demanda.",
    image: "https://d335luupugsy2.cloudfront.net/cms/files/38500/1776808282/$qevk7jvr9bq",
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
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase shimmer-text cursor-default inline-block"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {solutions.map((item, idx) => (
            <SolutionCard key={item.id} item={item} delay={idx * 0.1} />
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
      whileHover={{ y: -5 }}
      className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden"
    >
      <div className="w-full aspect-square overflow-hidden bg-white">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm md:text-base font-bold text-brand-primary mb-3 uppercase tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-black text-xs md:text-sm mb-6 flex-grow font-normal leading-relaxed overflow-hidden">
          {item.text}
        </p>
        <button className="flex items-center text-brand-secondary font-bold text-[10px] md:text-xs group hover:gap-2 transition-all uppercase tracking-wider mt-auto">
          {item.buttonText}
          <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
