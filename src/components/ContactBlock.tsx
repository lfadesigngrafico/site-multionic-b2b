import { motion } from 'motion/react';

export default function ContactBlock() {
  return (
    <section className="py-20 bg-brand-primary text-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Imagem com Overlap */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:-mt-40 lg:-mb-40"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776864450/$k9a95hfxy6f"
                alt="Multionic Soluções Técnicas" 
                className="w-full h-auto object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Coluna Direita: Texto e Botões */}
          <div className="text-left order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase text-white"
            >
              Converse com nosso time comercial
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl mb-10 font-normal leading-relaxed"
            >
              Se sua empresa busca uma solução técnica, precisa entender melhor uma aplicação ou quer avaliar qual produto faz mais sentido para a operação, fale com nosso time.
            </motion.p>
    
            <div className="flex flex-col sm:flex-row justify-start gap-4">
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
        </div>
      </div>
    </section>
  );
}
