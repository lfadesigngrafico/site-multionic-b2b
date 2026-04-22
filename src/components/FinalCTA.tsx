import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  const ctaText = "Construa uma operação mais eficiente com a Multionic";

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative group">
      {/* Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
        <ShieldCheck size={450} strokeWidth={1} className="text-[#014486]" />
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-6 uppercase cursor-default inline-block shimmer-text"
        >
          {ctaText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ delay: index * 0.03, duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black text-lg md:text-xl max-w-3xl mx-auto mb-12 font-normal leading-relaxed"
        >
          Mais segurança na escolha, suporte técnico e soluções preparadas para a realidade da sua operação.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-10 py-5 text-sm font-bold tracking-tight rounded-none shadow-none"
          >
            Solicite nosso contato
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gray px-10 py-5 text-sm font-bold tracking-tight rounded-none shadow-none"
          >
            Solicitar ficha técnica
          </motion.button>
        </div>
      </div>
    </section>
  );
}
