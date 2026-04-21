import { motion } from 'motion/react';
import { HardHat, Cog, CircleDashed, Utensils, FlaskConical, Truck } from 'lucide-react';

const segments = [
  { name: "Metalúrgica e siderúrgica", icon: <HardHat className="w-6 h-6" /> },
  { name: "Máquinas e equipamentos", icon: <Cog className="w-6 h-6" /> },
  { name: "Borracha e plástico", icon: <CircleDashed className="w-6 h-6" /> },
  { name: "Alimentícia e bebidas", icon: <Utensils className="w-6 h-6" /> },
  { name: "Química e petroquímica", icon: <FlaskConical className="w-6 h-6" /> },
  { name: "Logística e armazenagem", icon: <Truck className="w-6 h-6" /> },
];

export default function Segments() {
  return (
    <section id="segmentos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mb-16 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase"
          >
            Segmentos atendidos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-lg font-normal leading-relaxed"
          >
            A Multionic atende diferentes contextos industriais e operacionais, com foco em aplicações que exigem desempenho, segurança e suporte técnico.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-brand-primary font-bold text-base md:text-lg">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
