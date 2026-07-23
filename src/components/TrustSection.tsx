import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function TrustSection() {
  const [shineActive, setShineActive] = useState(true);

  useEffect(() => {
    // Ensure shine triggers on initial load
    setShineActive(true);
  }, []);

  const handleMouseEnter = () => {
    setShineActive(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShineActive(true);
      });
    });
  };

  return (
    <section className="relative w-full -mt-6 md:-mt-28 z-10 px-4">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* Left Column: Title Block with Glassmorphism and Hover Shine Text */}
          <div 
            onMouseEnter={handleMouseEnter}
            className="md:col-span-5 backdrop-blur-md bg-[#3B529B]/98 border border-white/20 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left shadow-2xl rounded-none relative overflow-hidden cursor-pointer min-h-[300px] md:min-h-full transition-all duration-300 hover:border-white/30"
          >
            <style>{`
              @keyframes textShine {
                0% {
                  background-position: 200% center;
                }
                100% {
                  background-position: -200% center;
                }
              }
              .shine-text {
                background: linear-gradient(
                  120deg,
                  #ffffff 35%,
                  #97dcfe 48%,
                  #ffffff 50%,
                  #97dcfe 52%,
                  #ffffff 65%
                );
                background-size: 250% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-position: -200% center;
              }
              .shine-active {
                animation: textShine 3s ease-out forwards;
              }
            `}</style>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[45px] font-black uppercase tracking-tighter leading-[1.1] shine-text ${shineActive ? 'shine-active' : ''}`}
            >
              Força,<br />
              experiência<br />
              e confiança<br />
              para sua<br />
              operação
            </motion.h3>
          </div>
          
          {/* Right Column: Stacked Sector Cards with Glassmorphism */}
          <div className="md:col-span-7 flex flex-col gap-4 lg:gap-5">
            {/* Industry Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 backdrop-blur-md bg-[#6DB0DF]/98 border border-white/10 p-6 md:p-8 flex flex-col items-center text-center justify-center shadow-xl rounded-none transition-all duration-300 hover:scale-[1.01] hover:border-white/20"
            >
              <span className="text-white/80 text-xs md:text-sm tracking-[0.2em] font-semibold uppercase mb-2">Indústria</span>
              <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-black mb-2 uppercase leading-none tracking-tighter">
                +500 SOLUÇÕES
              </h4>
              <p className="text-white/90 text-xs md:text-sm font-normal">
                Desenvolvidas para alta performance industrial
              </p>
            </motion.div>
            
            {/* Retail Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 backdrop-blur-md bg-[#7FBFD1]/98 border border-white/10 p-6 md:p-8 flex flex-col items-center text-center justify-center shadow-xl rounded-none transition-all duration-300 hover:scale-[1.01] hover:border-white/20"
            >
              <span className="text-white/80 text-xs md:text-sm tracking-[0.2em] font-semibold uppercase mb-2">Varejo</span>
              <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-black mb-2 uppercase leading-none tracking-tighter">
                40 ANOS DE MERCADO
              </h4>
              <p className="text-white/90 text-xs md:text-sm font-normal">
                Inovação contínua no varejo
              </p>
            </motion.div>
            
            {/* Outsourcing Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 backdrop-blur-md bg-[#75BFBA]/98 border border-white/10 p-6 md:p-8 flex flex-col items-center text-center justify-center shadow-xl rounded-none transition-all duration-300 hover:scale-[1.01] hover:border-white/20"
            >
              <span className="text-white/80 text-xs md:text-sm tracking-[0.2em] font-semibold uppercase mb-2">Terceirização</span>
              <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-black mb-2 uppercase leading-none tracking-tighter">
                CONFIANÇA DO MERCADO
              </h4>
              <p className="text-white/90 text-xs md:text-sm font-normal">
                A escolha de quem é referência
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
