import { motion } from 'motion/react';

export default function Hero() {
  const titlePart1 = "Química e inovação,";
  const titlePart2 = "criando o padrão de limpeza do futuro";

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white text-center">
      <div className="container-custom relative z-10 w-full flex flex-col items-center">
        {/* Typewriter Title at the top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 w-full group"
        >
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-brand-primary cursor-default inline-block shimmer-text"
          >
            <div className="block">
              {titlePart1.split("").map((char, index) => (
                <motion.span
                  key={`p1-${index}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  transition={{ delay: index * 0.03, duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="block mt-2">
              {titlePart2.split("").map((char, index) => (
                <motion.span
                  key={`p2-${index}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  transition={{ delay: (titlePart1.length + index) * 0.03, duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 px-4 md:px-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-lg md:text-xl text-black font-normal mb-6 leading-relaxed">
              Soluções químicas de alta performance para empresas que buscam mais eficiência operacional, segurança e confiança na aplicação.
            </p>
            
            <p className="text-black text-base md:text-lg mb-10 max-w-xl font-normal">
              Quando o produto atual já não atende, surge uma nova exigência técnica ou a operação precisa revisar custo x performance, a Multionic ajuda sua empresa a encontrar a solução mais adequada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center whitespace-nowrap shadow-none"
              >
                Fale com um especialista
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gray flex items-center justify-center whitespace-nowrap shadow-none"
              >
                Solicitar ficha técnica
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column Visual (Video Player) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl aspect-video bg-black">
              <iframe 
                src="https://player.vimeo.com/video/1100694146?autoplay=0&controls=1" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Multionic Industrial Video"
              ></iframe>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-none blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/10 rounded-none blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
