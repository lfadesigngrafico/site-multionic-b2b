import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HomeHeroVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-black mt-[80px]">
      <div className="w-full relative min-h-[620px] sm:min-h-[550px] md:min-h-0 md:h-[650px] lg:h-[700px] py-16 md:py-0 flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full grayscale brightness-50">
          <iframe
            src="https://player.vimeo.com/video/1100694146?autoplay=1&muted=1&loop=1&background=1&playsinline=1&dnt=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Multionic Industrial Video Hero"
          ></iframe>
        </div>
        
        {/* Darker Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Content Overlay */}
        <div className="container-custom relative w-full flex flex-col justify-center items-start z-20">
          <div className="max-w-4xl text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-[26px] font-bold uppercase text-white leading-tight mb-8"
            >
              Soluções químicas industriais<br />
              <span className="font-normal text-sm sm:text-base md:text-[20px] lg:text-[20px] block mt-2 whitespace-normal md:whitespace-nowrap">para operações que exigem eficiência, segurança e desempenho.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-10 max-w-2xl"
            >
              <p className="text-base md:text-[20px] text-white font-medium leading-relaxed">
                Há mais de 40 anos a Multionic desenvolve soluções técnicas para limpeza, higienização e eficiência operacional em indústrias, cozinhas industriais, lavanderias e operações profissionais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/produtos"
                className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white inline-flex items-center justify-center !px-12 !py-5 uppercase text-sm font-bold shadow-none rounded-none transform transition-transform duration-300 hover:scale-[1.05] transition-colors"
              >
                Conheça nossos produtos
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
