"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother feel
      } 
    }
  };


  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
         variants={container}
         initial="hidden"
         animate="show"
         className="container relative z-10 flex flex-col items-center text-center"
      >
        <motion.span 
          variants={item}
          className="text-amber-500 font-bold uppercase tracking-[0.5em] mb-6 block text-xs md:text-sm"
        >
           Los depredadores más majestuosos
        </motion.span>
        
        <motion.h1 
          variants={item}
          className="text-7xl md:text-[12rem] font-display font-black mb-10 leading-[0.8] tracking-tighter"
        >
          Grandes<br />
          <span className="text-white/10 outline-text">Felinos</span>
        </motion.h1>

        <motion.p 
          variants={item}
          className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Una colección visual de las cinco especies <br className="hidden md:block" />
          más emblemáticas de la naturaleza.
        </motion.p>

        <motion.div 
          variants={item}
          className="mt-16 w-px h-24 bg-gradient-to-b from-amber-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

