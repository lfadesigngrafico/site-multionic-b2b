import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-primary/5 border-t border-gray-100 overflow-hidden relative">
      <div className="container-custom text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-6 uppercase"
        >
          Construa uma operação mais eficiente com a Multionic
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
            className="btn-outline px-10 py-5 text-sm font-bold tracking-tight rounded-none shadow-none"
          >
            Solicitar ficha técnica
          </motion.button>
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 L0 100 Z" fill="#014486" />
        </svg>
      </div>
    </section>
  );
}
