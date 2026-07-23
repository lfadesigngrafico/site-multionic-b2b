import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ContactForm() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column Text */}
          <div className="text-left flex flex-col justify-center h-full">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-[#3B529B] mb-4 uppercase leading-tight"
            >
              Não sabe qual solução usar na sua operação?
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-lg md:text-xl font-bold text-[#3B529B] mb-4 uppercase leading-tight"
            >
              Nem toda necessidade exige o mesmo produto
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-750 text-base md:text-lg font-normal mb-8 leading-relaxed"
            >
              Nossa equipe técnica ajuda sua empresa a encontrar a solução ideal para cada necessidade operacional.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4 mb-10 text-left"
            >
              {[
                "Atendimento consultivo",
                "Avaliação da necessidade",
                "Soluções para diferentes operações",
                "Suporte técnico especializado"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#6DB0DF] font-bold text-lg">✔</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">{bullet}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/contato"
                className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white inline-flex items-center justify-center !px-10 !py-4 uppercase text-sm font-bold shadow-md rounded-none transition-all w-full sm:w-auto text-center"
              >
                Solicitar avaliação técnica
              </Link>
            </motion.div>
          </div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-10 rounded-none border border-gray-100 shadow-sm"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Nome</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Nome completo" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">CNPJ</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="00.000.000/0000-00" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">E-mail</label>
                  <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="seuemail@exemplo.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Telefone</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Cidade/Estado</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Ex: Maringá / PR" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Segmento</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-xs outline-none focus:border-brand-secondary transition-colors">
                    <option>Selecione um segmento</option>
                    <option>Metalúrgica e siderúrgica</option>
                    <option>Máquinas e equipamentos</option>
                    <option>Alimentícia e bebidas</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Mensagem</label>
                <textarea className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors h-32" placeholder="Conte-nos como podemos ajudar sua operação..."></textarea>
              </div>

              <button className="bg-[#6DB0DF] hover:bg-[#5ca0cf] text-white w-full py-4 text-sm font-bold tracking-tight shadow-none border-none uppercase mt-4 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
