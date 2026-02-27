"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="container relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
        >
          <span className="text-amber-500 font-bold uppercase tracking-[0.4em] mb-4 inline-block text-sm">
             Los depredadores más majestuosos
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-tight tracking-tight">
            Grandes Felinos
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Una colección visual de las cinco especies más emblemáticas de la naturaleza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
