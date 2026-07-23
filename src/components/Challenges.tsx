import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  TrendingUp, 
  ClipboardList, 
  Trash2, 
  Clock, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: "Excesso de sujeira em equipamentos",
    description: "O acúmulo de resíduos em máquinas, equipamentos e superfícies pode comprometer a produtividade, a segurança e a eficiência da operação.",
    icon: Droplet,
  },
  {
    id: 2,
    title: "Desperdício de produtos na limpeza",
    description: "Diluições incorretas e produtos inadequados aumentam custos sem garantir melhores resultados.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Resultados diferentes a cada limpeza",
    description: "A falta de processos e produtos adequados dificulta manter um padrão consistente na operação.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Dificuldade na remoção de resíduos",
    description: "Graxa, óleo, incrustações e resíduos difíceis exigem soluções específicas para cada aplicação.",
    icon: Trash2,
  },
  {
    id: 5,
    title: "Limpeza demorada e improdutiva",
    description: "Processos pouco eficientes aumentam o tempo de parada e reduzem a produtividade da equipe.",
    icon: Clock,
  },
  {
    id: 6,
    title: "Desgaste prematuro de equipamentos e superfícies",
    description: "A utilização de produtos inadequados pode comprometer materiais, aumentar custos de manutenção e reduzir a vida útil dos equipamentos.",
    icon: AlertTriangle,
  }
];

export default function Challenges() {
  return (
    <section className="py-24 bg-[#3B529B] relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white uppercase"
          >
            Sua operação enfrenta algum destes desafios?
          </motion.h2>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-8 border border-slate-100 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6DB0DF]/20"
              >
                <div>
                  <div className="w-12 h-12 bg-[#6DB0DF]/10 rounded-none flex items-center justify-center text-[#6DB0DF] mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#3B529B] mb-3 group-hover:text-[#6DB0DF] transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                
                {/* Decorative hover elements */}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6DB0DF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            to="/produtos"
            className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white inline-flex items-center gap-3 justify-center !px-12 !py-5 uppercase text-sm font-bold shadow-lg rounded-none transform transition-transform duration-300 hover:scale-[1.05] group transition-colors"
          >
            Encontrar a solução ideal
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
