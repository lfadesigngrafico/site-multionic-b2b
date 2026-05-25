import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQuestions = [
  {
    q: "Como escolher o produto certo para minha necessidade?",
    a: "A escolha do produto ideal depende de vários fatores: tipo de sujeira, superfície a ser limpa, equipamentos disponíveis e necessidade de compatibilidade química. Se tiver dúvidas, nossa equipe está pronta para indicar a melhor solução para sua realidade.\n\n✅ Descubra a Melhor Solução Para Sua Limpeza"
  },
  {
    q: "Quem é a Multionic e quais setores atende?",
    a: "Somos uma indústria química com mais de 40 anos de trajetória, referência no mercado B2B. Nossos produtos atendem empresas dos mais variados segmentos, desde indústrias de grande porte até negócios institucionais e comerciais. Nosso compromisso é desenvolver soluções que garantam higiene, eficiência e segurança em cada aplicação."
  },
  {
    q: "A Multionic oferece suporte técnico sobre os produtos?",
    a: "Sim! Nosso time técnico está disponível para esclarecer dúvidas sobre a aplicação dos produtos, melhores práticas e orientações específicas para sua empresa."
  },
  {
    q: "Como posso falar com o time comercial da Multionic?",
    a: "Basta clicar aqui → para ser direcionado ao WhatsApp do time comercial da Multionic. Você também pode entrar em contato por e-mail através do formulário na página do departamento comercial clicando aqui → .\n\nSe preferir, ligue para nós no telefone (12) 3686 1511. Nossa equipe está pronta para entender suas necessidades e oferecer as melhores soluções para o seu negócio."
  },
  {
    q: "Quais tipos de produtos a Multionic fabrica?",
    a: "Desenvolvemos soluções para limpeza institucional e industrial, além de uma linha voltada ao varejo. Nosso portfólio inclui desengraxantes, produtos para tratamento de pisos, desinfetantes, sabonetes, detergentes e outras formulações de alta performance."
  },
  {
    q: "Qual é o pedido mínimo para compras B2B?",
    a: "O volume mínimo varia conforme o tipo de produto e a complexidade da personalização. Entre em contato com nossa equipe para avaliar sua necessidade e oferecer a melhor solução para o seu negócio."
  }
];

export default function HomeFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveId(activeId === idx ? null : idx);
  };

  return (
    <section id="home-faq" className="py-24 bg-[#062e4c] border-t border-gray-100">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
            FAQ | Dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqQuestions.map((item, idx) => (
            <div key={idx} className="bg-[#97dcfe] border-none rounded-none shadow-sm overflow-hidden text-left">
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:opacity-95"
              >
                <span className="font-bold text-[#062e4c] text-base md:text-lg pr-4">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: activeId === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-[#062e4c] w-5 h-5" />
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
                    <div className="px-6 pb-6 text-[#062e4c] font-medium text-base leading-relaxed whitespace-pre-line">
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
            className="w-full sm:w-auto px-8 py-4 bg-[#97dcfe] text-[#062e4c] font-bold text-center uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2 transform hover:scale-[1.02]"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/contato#faq" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold text-center uppercase tracking-wider hover:bg-white hover:text-[#062e4c] hover:border-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
          >
            Acessar FAQ completa
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
