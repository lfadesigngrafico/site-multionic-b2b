import { motion } from 'motion/react';
import { Headset, FlaskConical, Coins, Layers, Award } from 'lucide-react';

const differentials = [
  {
    title: "Suporte técnico especializado",
    text: "Nossa equipe ajuda empresas a encontrar soluções mais eficientes para cada necessidade operacional.",
    icon: <Headset className="w-10 h-10" />
  },
  {
    title: "Soluções desenvolvidas para diferentes aplicações",
    text: "Produtos formulados para atender rotinas de limpeza, higienização e manutenção em ambientes industriais e institucionais.",
    icon: <FlaskConical className="w-10 h-10" />
  },
  {
    title: "Mais rendimento e economia operacional",
    text: "Produtos concentrados e orientações técnicas que ajudam a otimizar consumo e reduzir desperdícios.",
    icon: <Coins className="w-10 h-10" />
  },
  {
    title: "Portfólio para diferentes necessidades",
    text: "Linhas desenvolvidas para limpeza industrial, cozinhas profissionais, lavanderias, tratamento de pisos e muito mais.",
    icon: <Layers className="w-10 h-10" />
  },
  {
    title: "Mais de 40 anos desenvolvendo soluções",
    text: "Experiência acumulada atendendo diferentes segmentos e desafios operacionais.",
    icon: <Award className="w-10 h-10" />
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-[#75BFBA]">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase"
          >
            Por que empresas escolhem a Multionic?
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          {differentials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-start gap-6 ${idx >= 3 ? 'lg:col-span-1 lg:translate-x-[50%]' : ''}`}
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#018E6D] flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center pt-2">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 font-normal text-sm leading-relaxed max-w-md">
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
