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
    title: "Excesso de gordura industrial",
    description: "Acúmulo severo de sujidades brutas e óleos que comprometem a segurança e a integridade de equipamentos industriais modernos.",
    icon: Droplet,
  },
  {
    id: 2,
    title: "Alto consumo de produtos químicos",
    description: "Desperdício e diluições incorretas elevando custos operacionais desnecessariamente sem entregar o resultado esperado.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Baixa padronização operacional",
    description: "Falta de processos definidos de higienização que geram irregularidade na qualidade e riscos sanitários graves.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Dificuldade de remoção de resíduos",
    description: "Incrustações persistentes de difícil eliminação que demandam esforço mecânico desgastante e excessivo.",
    icon: Trash2,
  },
  {
    id: 5,
    title: "Tempo excessivo de limpeza",
    description: "Equipes de manutenção com rotinas de higienização lentas, gerando paradas indesejadas na produção.",
    icon: Clock,
  },
  {
    id: 6,
    title: "Produtos sem performance técnica",
    description: "Uso de químicos genéricos ineficientes que não atingem as especificações técnicas de setores regulados.",
    icon: AlertTriangle,
  }
];

export default function Challenges() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-slate-50 to-white relative overflow-hidden border-t border-gray-100">
      <div className="container-custom max-w-7xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#014486] uppercase"
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
                className="bg-white p-8 border border-slate-100 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#0877E1]/20"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0877E1]/10 rounded-none flex items-center justify-center text-[#0877E1] mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#014486] mb-3 group-hover:text-[#0877E1] transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                
                {/* Decorative hover elements */}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0877E1] group-hover:w-full transition-all duration-500" />
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
            to="/solucoes"
            className="btn-primary inline-flex items-center gap-3 justify-center !px-12 !py-5 uppercase text-sm font-bold shadow-lg rounded-none transform transition-transform duration-300 hover:scale-[1.05] group"
          >
            Encontrar a solução ideal
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
