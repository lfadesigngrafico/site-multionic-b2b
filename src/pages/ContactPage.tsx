import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Users, 
  CheckCircle, 
  Zap, 
  ChevronDown, 
  MapPin, 
  Clock,
  Shield,
  ShieldCheck
} from 'lucide-react';

const contactChannels = [
  {
    title: "Telefone corporativo",
    info: "+55 12 3686-1511",
    sub: "Atendimento de segunda a sexta-feira, das 8h às 17h.",
    icon: <Phone className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "WhatsApp",
    info: "+55 12 3686-1511",
    sub: "Fale com nossa equipe em dias úteis, das 8h às 17h.",
    icon: <MessageCircle className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "E-mail",
    info: "contato@multionic.com.br",
    sub: "Envie sua solicitação e receba o retorno do nosso time.",
    icon: <Mail className="w-8 h-8 text-brand-secondary" />
  }
];

const differentials = [
  {
    title: "Atendimento humanizado",
    text: "Nosso time está preparado para entender sua necessidade com proximidade, clareza e atenção ao contexto da operação.",
    icon: <Users className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Especialistas técnicos",
    text: "Quando a demanda exige mais profundidade, o atendimento evolui para uma análise mais técnica e cuidadosa.",
    icon: <CheckCircle className="w-8 h-8 text-brand-secondary" />
  },
  {
    title: "Eficiência",
    text: "Mais agilidade no primeiro retorno e melhor direcionamento para que sua solicitação avance com mais segurança.",
    icon: <Zap className="w-8 h-8 text-brand-secondary" />
  }
];

const faqs = [
  { q: "Quais são os horários de atendimento?", a: "Nosso atendimento acontece de segunda a sexta-feira, das 8h às 17h. Fora desse horário, você pode enviar sua solicitação pelo formulário, WhatsApp ou e-mail para retorno no próximo período útil." },
  { q: "Posso visitar a Multionic?", a: "Visitas podem ser avaliadas conforme a necessidade e o contexto do atendimento." },
  { q: "Como faço para comprar produtos?", a: "O primeiro passo é entrar em contato com nosso time e apresentar sua necessidade." },
  { q: "Posso falar com alguém antes de definir o produto?", a: "Sim. Nosso time pode orientar o melhor caminho antes da definição." },
  { q: "Como solicitar ficha técnica?", a: "Você pode solicitar pelos canais desta página, como o botão \"Solicitar ficha técnica\" em nossas seções comerciais." },
  { q: "A FISPQ fica disponível?", a: "Disponibilizada mediante solicitação oficial para garantir a versão correta." },
  { q: "Posso solicitar amostra?", a: "Depende de análise técnica e comercial específica para cada projeto." },
  { q: "Atendimento fora de SP?", a: "Sim, atendemos empresas em todo o território nacional conforme o contexto da operação." },
  { q: "É possível visita técnica?", a: "Em casos específicos e após uma triagem inicial, visitas técnicas podem ser agendadas via avaliação." },
  { q: "Melhor canal?", a: "Para agilidade imediata, recomendamos o WhatsApp. Para demandas mais detalhadas ou técnicas, o formulário e e-mail são ideais." },
];

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative h-[500px] w-full overflow-hidden mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$6swkurl6vlh" 
            alt="Contato e Localização" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay para legibilidade */}
          <div className="absolute inset-0 bg-brand-primary/40" />
        </div>

        <div className="container-custom h-full relative z-10 flex flex-col justify-center">
          <div className="max-w-3xl text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight"
            >
              Contato & localização
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-lg md:text-xl font-normal leading-relaxed"
            >
              Temos orgulho de estar sempre próximos dos nossos clientes, oferecendo suporte técnico, atendimento consultivo e soluções sob medida para o seu negócio. Escolha o canal ideal e fale com nosso time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. CHAMADA PRINCIPAL */}
      <section className="py-8 bg-[#0877e1] text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
          Fale conosco e construa uma parceria de sucesso
        </h2>
      </section>

      {/* 3. BLOCO DE FORMULÁRIO (PRINCIPAL) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase leading-tight">
                Preencha o formulário e receba o retorno técnico de nossa equipe
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                Conte brevemente sua necessidade e nossa equipe fará o direcionamento mais adequado para o seu atendimento.
              </p>
              <div className="mt-8">
                <img 
                  src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$7exmnl7opjk" 
                  alt="Suporte Multionic" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

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
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Nome" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Sobrenome</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Sobrenome" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Seu melhor e-mail</label>
                    <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="exemplo@empresa.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Telefone / WhatsApp</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Empresa</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Nome da empresa" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Cidade / Estado</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="Ex: Taubaté / SP" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Mensagem</label>
                  <textarea className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors h-32" placeholder="Como podemos ajudar sua operação?"></textarea>
                </div>

                <div className="flex items-start space-x-3 py-2">
                  <input type="checkbox" id="lgpd" className="mt-1 w-4 h-4 text-brand-secondary border-gray-300 rounded focus:ring-brand-secondary transition-all" />
                  <label htmlFor="lgpd" className="text-xs text-gray-500 font-normal leading-tight">
                    Autorizo que meus dados sejam utilizados de acordo com a Política de Privacidade da Multionic.
                  </label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full py-4 text-sm font-bold tracking-tight shadow-none border-none uppercase mt-2"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CANAIS DE ATENDIMENTO */}
      <section className="py-24 bg-[#0877e1]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              Atendimento técnico e eficiente
            </h2>
            <p className="text-white text-lg font-normal mb-1">Escolha seu melhor canal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-none border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-gray-50 rounded-none">
                  {channel.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3 uppercase tracking-tight">
                  {channel.title}
                </h3>
                <p className="text-xl font-bold text-brand-secondary mb-3">
                  {channel.info}
                </p>
                <p className="text-black text-sm font-normal leading-relaxed opacity-60">
                  {channel.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS DO ATENDIMENTO */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase">
              Diferenciais do atendimento Multionic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start space-y-4"
              >
                <div className="p-3 bg-brand-secondary/10 rounded-none text-brand-secondary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-black text-base font-normal leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOCO COMERCIAL */}
      <section className="py-20 bg-brand-primary text-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda: Imagem com Overlap */}
            <div className="relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:-mt-40 lg:-mb-40"
              >
                <img 
                  src="https://d335luupugsy2.cloudfront.net/cms/files/38500/1776874436/$rpcarbod4gh"
                  alt="Multionic Soluções Técnicas" 
                  className="w-full h-auto object-contain pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Coluna Direita: Texto e Botões */}
            <div className="text-left order-1 lg:order-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase text-white"
              >
                Converse com nosso time comercial
              </motion.h2>
              <div className="space-y-4 mb-10">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/80 text-lg md:text-xl font-normal leading-relaxed"
                >
                  Sua empresa precisa de soluções de alto desempenho capazes de otimizar sua rotina operacional?
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-base font-normal leading-relaxed"
                >
                  Estamos prontos para analisar suas necessidades e oferecer opções que tragam resultados reais para o seu negócio.
                </motion.p>
              </div>
      
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-secondary text-white px-8 py-4 text-sm font-bold tracking-tight rounded-none hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-none border-none flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chamar no WhatsApp
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gray px-8 py-4 text-sm font-bold tracking-tight rounded-none shadow-none"
                >
                  Solicitar ficha técnica
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BLOCO DE LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 uppercase">
                Nossa localização
              </h2>
              <p className="text-black text-lg font-normal leading-relaxed mb-8">
                Estamos em Taubaté/SP, com estrutura para atender empresas que buscam soluções químicas profissionais e industriais.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-50 rounded-none flex items-center justify-center text-brand-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary uppercase text-xs tracking-widest mb-1">Sede Multionic</h4>
                    <p className="text-black font-normal">Rua Carlos Pedroso da Silveira, 4.900<br />Taubaté/SP — 12043-000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-50 rounded-none flex items-center justify-center text-brand-secondary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary uppercase text-xs tracking-widest mb-1">Horário de funcionamento</h4>
                    <p className="text-black font-normal">Segunda a sexta-feira<br />das 8h às 17h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square bg-gray-100 rounded-none overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.538562308678!2d-45.5217431!3d-23.0163351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf9cd74b5379b%3A0x673b5e40a1d355ef!2sR.%20Carlos%20Pedroso%20da%20Silveira%2C%204900%20-%20Taubat%C3%A9%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1713693456789!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-none"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQ COMPLETA */}
      <section className="py-24 bg-[#062e4c] border-y border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              FAQ | Dúvidas frequentes
            </h2>
          </div>

          <div className="space-y-1">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-[#97dcfe] border-none rounded-none shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:opacity-95"
                >
                  <span className="font-bold text-[#062e4c] text-base md:text-lg">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === idx ? 180 : 0 }}
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
                      <div className="px-6 pb-6 text-[#062e4c] font-medium text-base leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative group">
        {/* Background Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
          <ShieldCheck size={450} strokeWidth={1} className="text-[#014486]" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-6 uppercase"
          >
            Tem uma necessidade específica?<br />Nosso time pode ajudar.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-lg md:text-xl max-w-3xl mx-auto mb-12 font-normal leading-relaxed"
          >
            Fale com a Multionic para receber direcionamento comercial e técnico com mais segurança, clareza e agilidade.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-secondary text-white px-12 py-5 font-bold uppercase tracking-tight hover:bg-brand-primary transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gray px-12 py-5 font-bold uppercase tracking-tight"
            >
              Solicitar ficha técnica
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
