import { motion } from 'motion/react';
import { Award, Headset, Zap, Target } from 'lucide-react';

const differentials = [
  {
    title: "Qualidade de produto",
    text: "Soluções pensadas para entregar resultado no uso real.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Atendimento consultivo",
    text: "Apoio comercial e técnico para direcionar melhor cada necessidade.",
    icon: <Headset className="w-8 h-8" />
  },
  {
    title: "Agilidade comercial",
    text: "Mais rapidez no primeiro direcionamento e no atendimento inicial.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Capacidade de solução",
    text: "Mais do que vender produtos, a Multionic ajuda a encontrar a melhor solução.",
    icon: <Target className="w-8 h-8" />
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-[#0877e1]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase"
          >
            Por que empresas escolhem a Multionic
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-none shadow-sm border border-transparent flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-[#f0f3f5] rounded-none text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">
                {item.title}
              </h3>
              <p className="text-black font-normal text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
