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

const faqGroups = [
  {
    title: "SOBRE A MULTIONIC",
    questions: [
      { q: "Quem é a Multionic e quais setores atende?", a: "Somos uma indústria química com mais de 40 anos de trajetória, referência no mercado B2B. Nossos produtos atendem empresas dos mais variados segmentos, desde indústrias de grande porte até negócios institucionais e comerciais. Nosso compromisso é desenvolver soluções que garantam higiene, eficiência e segurança em cada aplicação." },
      { q: "Por que a Multionic é diferente das outras empresas do setor?", a: "Somos mais do que uma indústria química. Somos um parceiro estratégico para nossos clientes, oferecendo não apenas produtos de alta performance, mas também suporte consultivo, inovação contínua e uma estrutura produtiva ágil e escalável. Nosso diferencial está na flexibilidade e na capacidade de personalização para cada demanda. Além disso, somos uma empresa tradicional com mais 40 anos ininterruptos atendendo grandes marcas que têm os mais rigorosos padrões de exigência e qualidade.\n\nSão mais de 4 décadas criando histórias e parcerias confiáveis de longa data." },
      { q: "Em que regiões do Brasil a Multionic atua?", a: "Nossa operação abrange todo o território nacional, assegurando entregas ágeis e eficientes para empresas de diversos setores." }
    ]
  },
  {
    title: "PRODUTOS E SOLUÇÕES",
    questions: [
      { q: "Quais tipos de produtos a Multionic fabrica?", a: "Desenvolvemos soluções para limpeza institucional e industrial, além de uma linha voltada ao varejo. Nosso portfólio inclui desengraxantes, produtos para tratamento de pisos, desinfetantes, sabonetes, detergentes e outras formulações de alta performance." },
      { q: "Os produtos Multionic possuem certificações de qualidade?", a: "Sim, seguimos rigorosos padrões de controle de qualidade e estamos em conformidade com todas as regulamentações vigentes. Nossa produção segue normas internacionais para garantir máxima eficiência, segurança e respeito ao meio ambiente." },
      { q: "Posso solicitar amostras dos produtos?", a: "Entre em contato com nossa equipe e informe sua necessidade. Nosso time técnico avaliará seu contexto e recomendará as melhores soluções, com possibilidade de envio de amostras para testes." }
    ]
  },
  {
    title: "TERCEIRIZAÇÃO",
    questions: [
      { q: "O que significa terceirizar a produção com a Multionic?", a: "Significa transformar seu projeto em um produto de alta qualidade, sem a necessidade de investir em infraestrutura própria. Oferecemos todo o suporte necessário para desenvolver ou expandir produtos de sua linha. Com nossa expertise e tecnologia, você pode focar no crescimento da sua marca, enquanto nós gerenciamos toda a produção com qualidade e segurança. A terceirização é parte fundamental da Multionic desde sua fundação na década de 1980." },
      { q: "Quais são os modelos de terceirização disponíveis?", a: "Oferecemos três formatos para atender diferentes necessidades:\n\n1️⃣ Envase: Se você já possui a fórmula, cuidamos do envase com o padrão de qualidade Multionic.\n\n2️⃣ Fabricação + Envase: Produzimos e envasamos seus produtos, seguindo nossos rigorosos padrões técnicos.\n\n3️⃣ Desenvolvimento, Fabricação e Envase: Criamos a fórmula ideal para seu negócio, fabricamos e entregamos o produto pronto para o mercado." },
      { q: "Minha empresa pode colocar sua própria marca nos produtos? Vocês fazem Private Label?", a: "Sim! Trabalhamos com Private Label, garantindo que sua marca esteja presente em produtos de alta performance fabricados pela Multionic. Além disso, oferecemos suporte consultivo para criação de embalagens e personalização estratégica." },
      { q: "Minha empresa pode colocar sua própria marca nos produtos?", a: "Sim, oferecemos soluções para sua marca própria, permitindo que sua empresa comercialize produtos de alta performance fabricados pela Multionic." }
    ]
  },
  {
    title: "PEDIDOS E LOGÍSTICA",
    questions: [
      { q: "Qual é o pedido mínimo para compras B2B?", a: "O volume mínimo varia conforme o tipo de produto e a complexidade da personalização. Entre em contato com nossa equipe para avaliar sua necessidade e oferecer a melhor solução para o seu negócio." },
      { q: "Quais são os prazos médios de entrega?", a: "Nosso prazo de entrega varia conforme a demanda e a localização do cliente, mas trabalhamos com uma logística eficiente para garantir agilidade e segurança. Consulte nossa equipe comercial para prazos específicos." },
      { q: "A Multionic realiza entregas para fora do Brasil?", a: "Atualmente, nosso foco está no mercado nacional, mas para demandas especiais, podemos estudar a viabilidade de exportação. Entre em contato para saber mais." }
    ]
  },
  {
    title: "ATENDIMENTO COMERCIAL E SUPORTE",
    questions: [
      { q: "Como posso falar com o time comercial da Multionic?", a: "Basta clicar aqui → para ser direcionado ao WhatsApp do time comercial da Multionic. Você também pode entrar em contato por e-mail através do formulário na página do departamento comercial clicando aqui → .\n\nSe preferir, ligue para nós no telefone (12) 3686 1511. Nossa equipe está pronta para entender suas necessidades e oferecer as melhores soluções para o seu negócio." },
      { q: "Quais os horários de atendimento?", a: "Nosso atendimento comercial funciona de segunda a sexta-feira, das 8h às 18h. Mas se precisar de suporte fora desse horário, não se preocupe! Contamos com a Ray, nossa inteligência artificial exclusiva, que está disponível 24 horas por dia, 7 dias por semana, 365 dias por ano via WhatsApp, oferecendo um atendimento conversacional, humanizado e altamente eficiente.\n\nAlém disso, nosso bot de atendimento no Instagram também está sempre ativo, pronto para esclarecer dúvidas, direcionar soluções e agilizar sua experiência, independente do dia ou horário. Nossa tecnologia garante que sua empresa tenha suporte e respostas em tempo real, sem filas de espera e com a qualidade que você merece." },
      { q: "A Multionic oferece suporte técnico sobre os produtos?", a: "Sim! Nosso time técnico está disponível para esclarecer dúvidas sobre a aplicação dos produtos, melhores práticas e orientações específicas para sua empresa." },
      { q: "A Multionic assegura a qualidade de seus produtos?", a: "Sim! Todos os produtos da Multionic são desenvolvidos com alto rigor técnico e passam por um controle de qualidade criterioso. Garantimos a conformidade com as especificações técnicas e padrões regulatórios do setor. Caso identifique qualquer inconsistência, nossa equipe está pronta para avaliar e fornecer suporte imediato, assegurando a melhor experiência para sua empresa.\n\nAlém disso, oferecemos suporte técnico especializado para orientar sobre o uso correto dos produtos, garantindo máxima eficiência e segurança em cada aplicação." }
    ]
  },
  {
    title: "ALGUMAS DÚVIDAS TÉCNICAS COMUNS",
    questions: [
      { q: "O que significa um produto ser alcalino, não alcalino ou pH neutro?", a: "O pH de um produto indica seu nível de acidez ou alcalinidade, influenciando diretamente sua eficácia e aplicação:\n\nAlcalino: Indicado para remoção de sujeiras pesadas, como óleos e graxas. Muito utilizado em indústrias e limpeza de equipamentos.\nNão Alcalino: Menos agressivo, indicado para superfícies delicadas ou materiais que podem ser danificados por produtos alcalinos.\npH Neutro: Equilibrado, ideal para limpezas que exigem suavidade sem comprometer a eficácia, como em ambientes hospitalares ou superfícies sensíveis.\n\n✅ Saiba Qual pH é Ideal Para Você\nEntre em contato para saber mais." },
      { q: "O que é BTX e o que significa BTX-Free?", a: "BTX se refere a compostos químicos como Benzeno, Tolueno e Xileno, substâncias que podem ser agressivas à saúde e ao meio ambiente. Produtos BTX-Free são formulações mais seguras, ideais para locais que exigem menor toxicidade e menor impacto ambiental, sem perder a eficiência na limpeza." },
      { q: "O que são tensoativos e por que são importantes?", a: "Tensoativos são substâncias que reduzem a tensão superficial entre dois líquidos ou entre um líquido e uma superfície, facilitando a remoção de sujeiras e resíduos. Eles são fundamentais em produtos de limpeza, pois ajudam a dispersar e remover partículas oleosas ou insolúveis em água.\n\n✅ Entenda Como Tensoativos Melhoram a Limpeza\nEntre em contato para saber mais." },
      { q: "O que é solvente glicólico e qual seu impacto na limpeza?", a: "O solvente glicólico é um poderoso agente de limpeza, altamente eficaz na remoção de óleos, graxas e sujeiras pesadas. Ele oferece alto poder de penetração e dissolução, sendo utilizado em desengraxantes industriais e produtos para limpeza de máquinas, motores e superfícies contaminadas com resíduos difíceis.\n\n✅ Saiba Mais Sobre Solventes Glicólicos" },
      { q: "Produtos com ou sem espuma: qual escolher?", a: "A escolha entre um produto com ou sem espuma depende do seu tipo de aplicação:\n\nCom espuma: Ideal para limpezas em que a espuma ajuda a prolongar o tempo de contato do produto com a superfície, melhorando a remoção de sujeira.\nSem espuma: Indicado para sistemas automatizados e máquinas lavadoras industriais, onde a espuma pode comprometer a eficiência dos equipamentos.\n\n✅ Descubra a Melhor Opção Para o Seu Negócio" },
      { q: "Há negociação para compras de grandes volumes?", a: "Para empresas que utilizam grandes quantidades de produtos químicos, a compra em volume oferece benefícios como preços mais competitivos, frete otimizado e redução de custos operacionais. A Multionic também pode oferecer condições exclusivas para compras em larga escala, distribuidores e revendedores.\n\n✅ Solicite uma Cotação Personalizada" },
      { q: "Quantidade x Preço: como escolher a melhor opção para minha empresa?", a: "Cada operação tem necessidades diferentes. Se sua empresa consome grandes volumes, comprar em maior quantidade pode ser mais vantajoso. No entanto, se precisa testar um produto ou tem menor consumo, oferecemos opções em diferentes tamanhos. Nossa equipe comercial pode ajudar a calcular o melhor custo-benefício para você.\n\n✅ Fale Com Um Especialista e Otimize Seus Custos" },
      { q: "Como escolher o produto certo para minha necessidade?", a: "A escolha do produto ideal depende de vários fatores: tipo de sujeira, superfície a ser limpa, equipamentos disponíveis e necessidade de compatibilidade química. Se tiver dúvidas, nossa equipe está pronta para indicar a melhor solução para sua realidade.\n\n✅ Descubra a Melhor Solução Para Sua Limpeza" }
    ]
  }
];

export default function ContactPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

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
                    <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="exemplo@exemplo.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">Telefone / WhatsApp</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest pl-1">CNPJ</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-black text-sm outline-none focus:border-brand-secondary transition-colors" placeholder="00.000.000/0000-00" />
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
      <section id="faq" className="py-24 bg-[#062e4c] border-y border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              FAQ | Dúvidas frequentes
            </h2>
          </div>

          <div className="space-y-12">
            {faqGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.questions.map((item, idx) => {
                    const itemId = `${groupIdx}-${idx}`;
                    return (
                      <div key={idx} className="bg-[#97dcfe] border-none rounded-none shadow-sm overflow-hidden">
                        <button 
                          onClick={() => toggleAccordion(itemId)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:opacity-95"
                        >
                          <span className="font-bold text-[#062e4c] text-base md:text-lg">
                            {item.q}
                          </span>
                          <motion.div
                            animate={{ rotate: activeId === itemId ? 180 : 0 }}
                          >
                            <ChevronDown className="text-[#062e4c] w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeId === itemId && (
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
                    );
                  })}
                </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}
