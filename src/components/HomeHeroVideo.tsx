import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HomeHeroVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-black mt-[80px]">
      <div className="w-full relative h-[500px] md:h-[650px] lg:h-[700px]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full grayscale brightness-50">
          <iframe
            src="https://player.vimeo.com/video/1100694146?autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Multionic Industrial Video Hero"
          ></iframe>
        </div>
        
        {/* Darker Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Content Overlay */}
        <div className="container-custom relative h-full flex flex-col justify-center items-start z-20">
          <div className="max-w-4xl text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-[30px] lg:text-[30px] font-bold uppercase text-white leading-tight mb-8"
            >
              Química e inovação,<br />
              <span className="font-normal">criando o padrão de limpeza do futuro</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-10 max-w-2xl"
            >
              <p className="text-base md:text-[20px] text-white font-medium leading-relaxed">
                Soluções químicas de alta performance industrial, com grande eficiência e segurança operacional.
              </p>
              <p className="text-white/80 text-sm md:text-[17px] font-normal leading-relaxed">
                Se novas necessidades exigem novos produtos, a Multionic oferece competência técnica para as soluções mais adequadas para a sua empresa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/contato"
                className="btn-primary inline-flex items-center justify-center !px-12 !py-5 uppercase text-sm font-bold shadow-none rounded-none transform transition-transform duration-300 hover:scale-[1.05]"
              >
                Fale com um especialista
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
