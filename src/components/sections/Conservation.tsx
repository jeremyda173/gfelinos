"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-display font-bold text-accent mb-2">
        {count}%
      </div>
      <div className="text-white/60 uppercase tracking-[0.2em] text-sm">
        {label}
      </div>
    </div>
  );
};

export default function Conservation() {
  return (
    <section id="conservation" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 z-0" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold mb-10 leading-tight"
          >
            Nuestra Misión: <br />
            <span className="text-accent underline decoration-white/10 underline-offset-[12px]">Protegiendo el Mañana</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/60 leading-relaxed font-light"
          >
            La conservación no es solo una opción, es nuestro deber proteger a los que no tienen voz. 
            Juntos podemos asegurar que las futuras generaciones también puedan admirar nuestra increíble fauna endemicas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <Counter value={85} label="Áreas Protegidas" />
          <Counter value={42} label="Especies Recobrándose" />
          <Counter value={100} label="Compromiso Local" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-16 md:p-24 rounded-[3rem] border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 italic">¿Quieres ser parte del cambio?</h3>
          <p className="mb-12 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Únete a nuestra red de voluntarios y científicos trabajando en el terreno para la preservación de especies en peligro crítico. Tu apoyo marca la diferencia.
          </p>
          <div className="flex justify-center">
            <button className="px-12 py-5 bg-white text-black font-extrabold rounded-full hover:bg-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-500 uppercase tracking-widest text-sm">
              Involucrarse Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

