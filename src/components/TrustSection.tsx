import { motion } from 'motion/react';

export default function TrustSection() {
  return (
    <section className="relative w-full -mt-12 z-10">
      <div className="container-custom max-w-7xl">
        <div className="flex flex-col shadow-2xl overflow-hidden">
          {/* Top Row */}
          <div className="bg-[#0877E1] py-8 px-6 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight"
            >
              Força, experiência e confiança do mercado:
            </motion.h3>
          </div>
          
          {/* Bottom Row / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Industry */}
            <div className="bg-[#014486] p-10 flex flex-col items-center text-center justify-center min-h-[250px]">
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest mb-3">Indústria</span>
              <h4 className="text-white text-2xl lg:text-3xl font-black mb-4 uppercase leading-tight tracking-tighter">
                +500 SOLUÇÕES
              </h4>
              <p className="text-white/90 text-sm font-normal">
                Desenvolvidas para alta performance industrial
              </p>
            </div>
            
            {/* Retail */}
            <div className="bg-[#013b7a] p-10 flex flex-col items-center text-center justify-center min-h-[250px] border-y md:border-y-0 md:border-x border-white/10">
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest mb-3">Varejo</span>
              <h4 className="text-white text-2xl lg:text-3xl font-black mb-4 uppercase leading-tight tracking-tighter">
                40 ANOS DE MERCADO
              </h4>
              <p className="text-white/90 text-sm font-normal">
                Inovação contínua no varejo
              </p>
            </div>
            
            {/* Outsourcing */}
            <div className="bg-[#014486] p-10 flex flex-col items-center text-center justify-center min-h-[250px]">
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest mb-3">Terceirização</span>
              <h4 className="text-white text-2xl lg:text-3xl font-black mb-4 uppercase leading-tight tracking-tighter">
                CONFIANÇA DO MERCADO
              </h4>
              <p className="text-white/90 text-sm font-normal">
                Produzindo para quem é referência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
