import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HardHat, Cog, Milk, Utensils, FlaskConical, Truck } from 'lucide-react';

const segments = [
  { name: "Metalúrgica e siderúrgica", icon: <HardHat className="w-6 h-6" /> },
  { name: "Máquinas e equipamentos", icon: <Cog className="w-6 h-6" /> },
  { name: "Borracha e plástico", icon: <Milk className="w-6 h-6" /> },
  { name: "Alimentícia e bebidas", icon: <Utensils className="w-6 h-6" /> },
  { name: "Química e petroquímica", icon: <FlaskConical className="w-6 h-6" /> },
  { name: "Logística e armazenagem", icon: <Truck className="w-6 h-6" /> },
];

export default function Segments() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section id="segmentos" ref={targetRef} className="py-20 bg-[#014486] relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-x-0 -top-40 -bottom-40 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[#014486] opacity-50 z-10" />
        <img 
          src="https://pages.greatpages.com.br/www.multionic.com.br-sobre/1764934312/imagens/desktop/1301048_1_05014.jpg" 
          alt="Background Industrial" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl mb-16 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase"
          >
            Segmentos atendidos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-normal leading-relaxed"
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
              className="bg-white p-6 rounded-none shadow-sm border border-transparent flex items-center space-x-6 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-none bg-[#f0f3f5] text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
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
