import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <img 
              src="https://pages.greatpages.com.br/www.multionic.com.br-b2b/1764936323/imagens/mobile/1124971_1_175079214239449921.png" 
              alt="Multionic" 
              className="h-10 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <p className="text-white/60 text-sm font-normal leading-relaxed mb-6">
              Química e inovação criando o padrão de limpeza do futuro. Tecnologia certificada para operações de alta exigência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Institucional</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-white/60 hover:text-white transition-colors text-sm">Sobre a Multionic</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Nossa história</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Estrutura industrial</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Certificações e licenças</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><a href="#solucoes" className="text-white/60 hover:text-white transition-colors text-sm">Desengraxantes industriais</a></li>
              <li><a href="#solucoes" className="text-white/60 hover:text-white transition-colors text-sm">Tratamento de pisos</a></li>
              <li><a href="#solucoes" className="text-white/60 hover:text-white transition-colors text-sm">Higiene das mãos</a></li>
              <li><a href="#solucoes" className="text-white/60 hover:text-white transition-colors text-sm">Cozinha industrial</a></li>
              <li><a href="#solucoes" className="text-white/60 hover:text-white transition-colors text-sm">Sua marca, nossa produção</a></li>
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Segmentos</h4>
            <ul className="space-y-4">
              <li><a href="#segmentos" className="text-white/60 hover:text-white transition-colors text-sm">Metalúrgica e siderúrgica</a></li>
              <li><a href="#segmentos" className="text-white/60 hover:text-white transition-colors text-sm">Máquinas e equipamentos</a></li>
              <li><a href="#segmentos" className="text-white/60 hover:text-white transition-colors text-sm">Alimentícia e bebidas</a></li>
              <li><a href="#segmentos" className="text-white/60 hover:text-white transition-colors text-sm">Química e petroquímica</a></li>
              <li><a href="#segmentos" className="text-white/60 hover:text-white transition-colors text-sm">Logística e armazenagem</a></li>
            </ul>
          </div>

          {/* Contato & Apoio */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-secondary" />
                <span className="text-white/60 text-sm">0800 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-secondary" />
                <span className="text-white/60 text-sm">contato@multionic.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-brand-secondary" />
                <span className="text-white/60 text-sm">Taubaté - São Paulo</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/5">
              <Link to="/contato" className="btn-primary w-full py-3 text-[10px] uppercase font-bold tracking-widest text-center block">Fale Conosco</Link>
            </div>
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
