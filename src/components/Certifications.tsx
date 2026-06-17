import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 uppercase"
          >
            Certificações e licenças
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-lg max-w-2xl mx-auto font-normal"
          >
            Conformidade, segurança e responsabilidade para atender operações com mais confiança.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 p-8 bg-gray-50 border border-gray-100 shadow-sm"
          >
            <div className="shrink-0" style={{ color: '#3B529B' }}>
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-black uppercase text-sm mb-2 tracking-wider" style={{ color: '#3B529B' }}>ISO 9001 e SGQ</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A Multionic atua de acordo com os rigorosos padrões de excelência da ISO 9001 e em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 p-8 bg-gray-50 border border-gray-100 shadow-sm"
          >
            <div className="shrink-0" style={{ color: '#3B529B' }}>
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-black uppercase text-sm mb-2 tracking-wider" style={{ color: '#3B529B' }}>Selo EURECICLO</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Seguindo nosso compromisso ambiental, conquistamos o selo EURECICLO.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
