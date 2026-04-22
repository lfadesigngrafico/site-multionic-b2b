import { motion } from 'motion/react';

export default function ContactBlock() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container-custom text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase"
        >
          Converse com nosso time comercial
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Se sua empresa busca uma solução técnica, precisa entender melhor uma aplicação ou quer avaliar qual produto faz mais sentido para a operação, fale com nosso time.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-secondary text-white px-8 py-4 text-sm font-bold tracking-tight rounded-none hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-none border-none"
          >
            Fale com um especialista
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gray px-8 py-4 text-sm font-bold tracking-tight rounded-none shadow-none"
          >
            Solicitar ficha técnica
          </motion.button>
        </div>
      </div>
    </section>
  );
}
