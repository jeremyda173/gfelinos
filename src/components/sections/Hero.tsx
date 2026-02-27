"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { DRFlag } from "../ui/DRFlag";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Wildlife DR Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
          className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1]"
        >
          Descubre la Fauna de la <br />
          <span className="text-secondary flex items-center justify-center gap-4">
            República Dominicana
            <DRFlag className="w-16 md:w-24 h-auto rounded-md shadow-xl border border-white/10" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ opacity }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Especies únicas que solo existen en nuestra isla. Un tesoro de biodiversidad en el corazón del Caribe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ opacity }}
          className="flex justify-center"
        >
          <a
            href="#featured"
            className="group relative px-24 py-10 bg-white text-black font-extrabold rounded-full text-2xl transition-all duration-500 hover:tracking-[0.1em] uppercase tracking-[0.2em] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center justify-center hover:bg-accent"
          >
            <span className="relative z-10">Explorar Especies</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
        </motion.div>
      </div>



      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
