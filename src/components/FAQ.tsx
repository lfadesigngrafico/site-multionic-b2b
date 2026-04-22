import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Como escolher a solução certa para a minha operação?",
    answer: "A escolha depende da aplicação, da superfície, do nível de sujidade e da exigência técnica do processo."
  },
  {
    question: "Posso solicitar ficha técnica?",
    answer: "Sim. Você pode solicitar a ficha técnica entrando em contato com nosso time através dos formulários ou WhatsApp no site."
  },
  {
    question: "A FISPQ fica disponível no site?",
    answer: "Esse material pode ser disponibilizado mediante solicitação para garantir que você receba a versão mais atualizada e específica para sua operação."
  },
  {
    question: "Posso falar com alguém antes de definir o produto?",
    answer: "Sim. Nosso time técnico-comercial pode orientar o próximo passo de acordo com a sua necessidade, garantindo a escolha mais eficiente."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#062e4c]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase"
          >
            Dúvidas frequentes
          </motion.h2>
        </div>

        <div className="space-y-1">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-[#97dcfe] border-none rounded-none overflow-hidden hover:opacity-95 transition-opacity">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
              >
                <span className="font-bold text-[#062e4c] text-base md:text-lg">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#062e4c] w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#062e4c] font-medium text-base leading-relaxed bg-[#97dcfe]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white mb-6 font-normal">Ainda com dúvidas? Fale com nossa equipe.</p>
          <button className="text-[#97dcfe] font-bold hover:underline">
            Central de atendimento →
          </button>
        </div>
      </div>
    </section>
  );
}
