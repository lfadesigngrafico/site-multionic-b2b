import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column Text */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase leading-tight"
            >
              Ou, se preferir, utilize nosso formulário de contato
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black text-lg font-normal mb-8 leading-relaxed"
            >
              Preencha seus dados e nos conte brevemente sua necessidade. Se sua demanda envolve uma aplicação técnica específica, descreva o contexto de uso.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$7exmnl7opjk" 
                alt="Multionic Soluções" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
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
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Empresa</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Razão social ou nome fantasia" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">E-mail</label>
                  <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="seuemail@empresa.com" />
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

              <button className="btn-primary w-full py-4 text-sm font-bold tracking-tight shadow-none border-none uppercase mt-4">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
