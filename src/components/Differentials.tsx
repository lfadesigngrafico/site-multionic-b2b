import { motion } from 'motion/react';
import { Award, Leaf, ShieldCheck, Microscope, User, Users } from 'lucide-react';

const differentials = [
  {
    title: "Excelência e Qualidade",
    text: "Buscamos sempre os mais altos padrões do mercado.",
    icon: <Award className="w-10 h-10" />
  },
  {
    title: "Compromisso com a Sustentabilidade",
    text: "Desenvolvemos produtos que minimizam impactos ambientais.",
    icon: <Leaf className="w-10 h-10" />
  },
  {
    title: "Parceria e Confiança",
    text: "Relacionamento sólido com clientes e parceiros.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "Inovação Contínua",
    text: "Investimos constantemente em tecnologia e pesquisa.",
    icon: <Microscope className="w-10 h-10" />
  },
  {
    title: "Responsabilidade Social",
    text: "Projetos que incentivam o bem-estar da comunidade.",
    icon: <User className="w-10 h-10" />
  },
  {
    title: "Protagonismo",
    text: "Antecipamos tendências e criamos soluções que elevam o mercado e geram valor para nossos clientes.",
    icon: <Users className="w-10 h-10" />
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-[#74a9e5]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase"
          >
            Por que empresas escolhem a Multionic
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {differentials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#3462ba] flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center pt-2">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 font-normal text-sm leading-relaxed max-w-[200px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
