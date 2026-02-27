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
      
      <div className="container relative z-10 flex flex-col items-center">
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
            className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mx-auto"
          >
            La conservación no es solo una opción, es nuestro deber proteger a los que no tienen voz. 
            Juntos podemos asegurar que las futuras generaciones también puedan admirar nuestra increíble fauna endemicas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full">
          <Counter value={85} label="Áreas Protegidas" />
          <Counter value={42} label="Especies Recobrándose" />
          <Counter value={100} label="Compromiso Local" />
        </div>
      </div>
    </section>
  );
}

