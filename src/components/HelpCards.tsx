import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const cards = [
  {
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/desktop/1124971_1_17344573766761b820a18c5566926827.jpg",
    content: (
      <>
        <p className="text-[#333333] text-base md:text-lg leading-relaxed">
          Preciso de um desengraxante para máquinário, <span className="font-bold">mas que não ataque borrachas.</span>
        </p>
        <p className="text-[#0877e1] text-base md:text-lg font-medium leading-relaxed">
          Precisa de segurança técnica na escolha do produto?
        </p>
        <p className="text-[#333333] text-base md:text-lg font-black tracking-tight pt-2">
          Nossos especialistas podem te ajudar.
        </p>
      </>
    ),
    highlight: false
  },
  {
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/desktop/1124971_1_17344573766761b820a1b9d190769909.jpg",
    content: (
      <>
        <p className="text-white text-base md:text-lg font-bold leading-relaxed">
          Alcalino, Não Alcalino, PH Neutro, com Espuma, sem Espuma, BTX ou BTX Free, Glicólico, Tensoativo, etc?
        </p>
        <p className="text-white text-base md:text-lg leading-relaxed">
          Pode ser complicado entender toda esta nomenclatura. Mas fique tranquilo.
        </p>
        <p className="text-white text-base md:text-lg font-black tracking-tight pt-2">
          Nossa equipe está a disposição.
        </p>
      </>
    ),
    highlight: true
  },
  {
    image: "https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/desktop/1124971_1_17344573766761b820a1684260717082.jpg",
    content: (
      <>
        <p className="text-[#333333] text-base md:text-lg leading-relaxed">
          Devo <span className="font-bold">comprar em quantidade?</span> Consigo <span className="font-bold">preço de atacado?</span> E para <span className="font-bold">quantidades menores?</span>
        </p>
        <p className="text-[#0877e1] text-base md:text-lg font-bold leading-relaxed">
          Quero entender a relação quantidade X preço. Há negociação para grandes volumes?
        </p>
        <p className="text-[#333333] text-base md:text-lg font-black tracking-tight pt-2">
          Estamos aqui para te ajudar.
        </p>
      </>
    ),
    highlight: false
  }
];

export default function HelpCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02] ${
                card.highlight ? 'bg-[#4084e3]' : 'bg-[#f4f4f4]'
              }`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt="Dúvidas técnicas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay color match from screenshot */}
                <div className={`absolute inset-0 opacity-40 ${card.highlight ? 'bg-[#0877e1]' : 'bg-[#014486]'}`} />
              </div>
              <div className="p-8 md:p-10 flex flex-col space-y-6 flex-grow">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-12 uppercase leading-tight"
          >
            DÚVIDAS COMO ESTAS OU OUTRAS,<br />
            <span className="font-normal text-black">CHAME NOSSO TIME OU ACESSE NOSSA FAQ</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contato"
              className="btn-primary w-full sm:w-auto px-10 py-5 uppercase text-xs font-bold shadow-none rounded-none text-center transform transition-transform duration-300 hover:scale-[1.05]"
            >
              Fale com um Especialista
            </Link>
            <Link 
              to="/contato#faq"
              className="btn-gray w-full sm:w-auto px-10 py-5 uppercase text-xs font-bold shadow-none rounded-none text-center transform transition-transform duration-300 hover:scale-[1.05]"
            >
              Acessar nossa FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
