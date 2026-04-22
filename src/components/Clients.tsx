import { motion } from 'motion/react';

const logos = [
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312483831.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312423106.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312402319.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312406035.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312407761.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312409075.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312411338.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312414801.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312423278.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312424106.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312426003.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312432112.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312440815.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312444136.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312449793.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312453743.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312457044.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312457354.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312462106.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312467367.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312467607.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312473544.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312475676.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312478137.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312478865.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312480743.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312484571.jpg",
  "https://pages.greatpages.com.br/www.multionic.com.br-b2b-clientes-e-reputacao/1764875831/imagens/desktop/1301031_1_173929786312488125.jpg",
];

export default function Clients() {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-50">
      <div className="container-custom mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase"
        >
          Marcas que confiam na Multionic
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black text-base md:text-lg max-w-2xl mx-auto font-normal"
        >
          Empresas de diferentes segmentos já contam com a Multionic para elevar padrão de limpeza, segurança e desempenho operacional.
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden border-y border-gray-100 bg-gray-50/30">
        <div className="marquee-container flex py-12">
          <div className="marquee-content flex animate-scroll">
            {/* Set 1 */}
            {logos.map((logo, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0 px-12 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Client" 
                  className="h-12 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            {/* Set 2 (for loop) */}
            {logos.map((logo, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0 px-12 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Client" 
                  className="h-12 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
