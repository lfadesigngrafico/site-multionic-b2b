import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#014486] text-white pt-20 pb-10">
      <div className="container-custom">
        {/* Top Section: Logo, Text, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16 pb-12 border-b border-white/10">
          <div className="flex-shrink-0">
            <img 
              src="https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/mobile/1124971_1_175079214239449921.png" 
              alt="Multionic" 
              className="h-10 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex-grow max-w-2xl text-center md:text-left">
            <p className="text-white/60 text-base font-normal leading-relaxed">
              Química e inovação criando o padrão de limpeza do futuro.<br />Tecnologia certificada para operações de alta exigência.
            </p>
          </div>

          <div className="flex space-x-4 flex-shrink-0">
            <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Middle Section: 6 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Institucional */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Institucional</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-white/60 hover:text-white transition-colors text-xs">Sobre a Multionic</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Nossa história</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Estrutura industrial</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Certificações e licenças</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Soluções</h4>
            <ul className="space-y-3">
              <li><Link to="/solucoes/desengraxantes" className="text-white/60 hover:text-white transition-colors text-xs">Desengraxantes industriais</Link></li>
              <li><Link to="/solucoes/pisos" className="text-white/60 hover:text-white transition-colors text-xs">Tratamento de pisos</Link></li>
              <li><Link to="/solucoes/sabonetes" className="text-white/60 hover:text-white transition-colors text-xs">Higiene das mãos</Link></li>
              <li><Link to="/solucoes/cozinha" className="text-white/60 hover:text-white transition-colors text-xs">Cozinha industrial</Link></li>
              <li><Link to="/solucoes/lavanderia" className="text-white/60 hover:text-white transition-colors text-xs">Lavanderia</Link></li>
              <li><Link to="/solucoes/limpeza-geral" className="text-white/60 hover:text-white transition-colors text-xs">Limpeza geral</Link></li>
              <li><Link to="/solucoes/outros" className="text-white/60 hover:text-white transition-colors text-xs">Sua marca, nossa produção</Link></li>
            </ul>
          </div>

          {/* Segmentos atendidos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Segmentos atendidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Metalúrgica e siderúrgica</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Máquinas e equipamentos</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Borracha e plástico</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Alimentícia e bebidas</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Química e petroquímica</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Logística e armazenagem</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Contato</h4>
            <ul className="space-y-3">
              <li><Link to="/contato" className="text-white/60 hover:text-white transition-colors text-xs">Fale com um especialista</Link></li>
              <li><Link to="/contato" className="text-white/60 hover:text-white transition-colors text-xs">Solicitar ficha técnica</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">WhatsApp</a></li>
            </ul>
          </div>

          {/* Apoio */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Apoio</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Dúvidas frequentes</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Conteúdo técnico</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Catálogo</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Política de privacidade</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">LGPD</a></li>
            </ul>
          </div>

          {/* Linha B2C */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Linha B2C</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Unik</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Raylin</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-normal">
            © {currentYear} Multionic Industrial. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/40 hover:text-white text-[10px] uppercase font-bold tracking-widest">Política de Privacidade</a>
            <a href="#" className="text-white/40 hover:text-white text-[10px] uppercase font-bold tracking-widest">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
