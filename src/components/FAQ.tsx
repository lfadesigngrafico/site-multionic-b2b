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
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase"
          >
            Dúvidas frequentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[12px] shadow-sm overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50/50"
              >
                <span className="font-bold text-brand-primary text-base md:text-lg">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-brand-secondary w-5 h-5" />
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
                    <div className="px-6 pb-6 text-black font-normal text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black mb-6 font-normal">Ainda com dúvidas? Fale com nossa equipe.</p>
          <button className="text-brand-secondary font-bold hover:underline">
            Central de atendimento →
          </button>
        </div>
      </div>
    </section>
  );
}
