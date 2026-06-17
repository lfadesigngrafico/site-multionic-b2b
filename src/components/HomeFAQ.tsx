import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQuestions = [
  {
    q: "Como escolher o produto certo para minha necessidade?",
    a: "Nossa equipe pode avaliar sua aplicação e indicar a solução mais adequada para o tipo de sujeira, superfície e processo operacional."
  },
  {
    q: "Quem é a Multionic e quais setores atende?",
    a: "A Multionic desenvolve soluções para limpeza, higienização e manutenção utilizadas por indústrias, cozinhas profissionais, lavanderias, empresas de serviços e diversos ambientes profissionais."
  },
  {
    q: "A Multionic oferece suporte técnico sobre os produtos?",
    a: "Sim. Nossa equipe oferece orientação técnica para auxiliar na escolha e utilização das soluções mais adequadas para cada operação."
  },
  {
    q: "Como posso falar com o time comercial da Multionic?",
    a: "Você pode preencher o formulário de contato ou falar diretamente com nossa equipe pelos canais disponíveis no site."
  },
  {
    q: "Quais tipos de produtos a Multionic fabrica?",
    a: "A Multionic possui linhas para limpeza geral, desengraxantes, sabonetes, cozinhas industriais, lavanderias, tratamento de pisos e soluções desenvolvidas para necessidades específicas."
  },
  {
    q: "Qual o pedido mínimo para compras B2B?",
    a: "O pedido mínimo pode variar conforme a linha de produtos e a região de atendimento. Nossa equipe comercial poderá orientar sobre as condições aplicáveis."
  }
];

export default function HomeFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveId(activeId === idx ? null : idx);
  };

  return (
    <section id="home-faq" className="py-24 bg-[#6DB0DF] border-t border-gray-100">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
            FAQ | Dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqQuestions.map((item, idx) => (
            <div key={idx} className="bg-[#3B529B] border-none rounded-none shadow-sm overflow-hidden text-left">
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:opacity-95"
              >
                <span className="font-bold text-white text-base md:text-lg pr-4">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: activeId === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-white w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeId === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white font-medium text-base leading-relaxed whitespace-pre-line">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/contato" 
            className="w-full sm:w-auto px-8 py-4 bg-[#3B529B] text-white font-bold text-center uppercase tracking-wider hover:bg-[#2c407c] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 transform hover:scale-[1.02]"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/contato#faq" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold text-center uppercase tracking-wider hover:bg-white hover:text-[#3B529B] hover:border-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
          >
            Acessar FAQ completa
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
