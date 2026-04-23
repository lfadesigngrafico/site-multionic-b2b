import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Segments from '../components/Segments';
import ContactBlock from '../components/ContactBlock';

export default function SegmentsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section for Segments */}
      <section className="bg-brand-primary py-24 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
              Segmentos atendidos
            </h1>
            <p className="text-xl opacity-90 leading-relaxed font-normal">
              A Multionic atende diferentes contextos industriais e operacionais, com foco em aplicações que exigem desempenho, segurança e suporte técnico especializado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Segments Grid */}
      <Segments />

      {/* Additional Content */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 uppercase">Acompanhamos o ritmo da sua indústria</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            Nossos especialistas entendem a fundo os desafios de cada setor, oferecendo formulações químicas que otimizam processos, aumentam a vida útil de equipamentos e garantem a máxima eficiência operacional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Segurança", text: "Produtos testados e certificados para uso industrial." },
              { title: "Eficiência", text: "Aumento da produtividade e redução de paradas." },
              { title: "Suporte", text: "Consultoria técnica dedicada para cada segmento." },
              { title: "Qualidade", text: "Excelência em cada litro produzido." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 bg-gray-50">
                <h3 className="font-bold text-brand-primary mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </div>
  );
}
