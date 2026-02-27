"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, TreePine, Waves, Sun } from "lucide-react";

const ecosystems = [
  {
    name: "Bosques de Nubes",
    description: "Zonas de alta montaña donde la niebla alimenta una biodiversidad única y helechos gigantes.",
    icon: <TreePine className="w-6 h-6" />,
  },
  {
    name: "Litorales y Manglares",
    description: "Cunas de vida marina que protegen nuestras costas y sirven de refugio a los manatíes.",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Zonas Áridas",
    description: "Desiertos tropicales hogar de iguanas únicas y cactus endémicos en el suroeste de la isla.",
    icon: <Sun className="w-6 h-6" />,
  },
];

export default function Ecosystems() {
  return (
    <section id="ecosystems" className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/ecosystems.png"
              alt="Ecosistemas DR"
              fill
              className="object-cover brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-accent" />
                <span className="text-sm font-bold uppercase tracking-widest text-accent">Hábitats Críticos</span>
              </div>
              <h3 className="text-4xl font-display font-bold max-w-xs">Donde la Vida Encuentra su Hogar</h3>
            </div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Nuestros Ecosistemas</h2>
              <p className="text-white/50 text-xl font-light leading-relaxed">
                La República Dominicana posee una de las variedades geográficas más impresionantes del Caribe, desde picos que superan los 3,000 metros hasta salares bajo el nivel del mar.
              </p>
            </motion.div>

            <div className="flex flex-col gap-10">
              {ecosystems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{item.name}</h4>
                    <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <button className="flex items-center gap-3 px-10 py-5 bg-accent text-black font-bold rounded-full hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                <Compass className="w-5 h-5" /> Explorar Mapa de Biodiversidad
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
