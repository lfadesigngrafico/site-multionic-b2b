import { motion } from 'motion/react';
import { ShieldCheck, ClipboardCheck, FileCheck, CheckCircle2 } from 'lucide-react';

const certs = [
  { name: "Licença Ambiental", icon: <ShieldCheck className="w-12 h-12" /> },
  { name: "Alvará Sanitário", icon: <ClipboardCheck className="w-12 h-12" /> },
  { name: "Certificado de Conformidade", icon: <FileCheck className="w-12 h-12" /> },
  { name: "Normas Técnicas ABNT", icon: <CheckCircle2 className="w-12 h-12" /> },
];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="text-brand-primary mb-4">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-tighter text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
