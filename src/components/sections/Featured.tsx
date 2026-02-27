"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const animals = [
  {
    name: "Solenodonte",
    image: "/images/solenodonte.png",
    description: "Un fósil viviente, mamífero nocturno con saliva venenosa endémico de la isla.",
    type: "Mamífero",
  },
  {
    name: "Iguana Rinoceronte",
    image: "/images/iguana.png",
    description: "Llamada así por los cuernos en su nariz, es una especie icónica de nuestras zonas áridas.",
    type: "Reptil",
  },
  {
    name: "Cigua Palmera",
    image: "/images/cigua.png",
    description: "Nuestra ave nacional, conocida por sus grandes nidos comunales en las palmas reales.",
    type: "Ave",
  },
  {
    name: "Manatí Antillano",
    image: "/images/manati.png",
    description: "Gentiles gigantes marinos que habitan en nuestras costas y manglares protegidos.",
    type: "Marino",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="section-padding bg-black/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Especies Destacadas</h2>
            <p className="text-white/60 text-lg">
              Estas criaturas son guardianes de nuestra historia natural y necesitan nuestra protección para seguir habitando nuestra isla.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-3 text-accent font-bold hover:gap-5 transition-all duration-300 text-lg group"
          >
            Ver catálogo completo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {animals.map((animal, i) => (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 group"
            >
              <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-2xl">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 glass px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] z-10">
                  {animal.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-5 group-hover:text-accent transition-colors duration-300">
                  {animal.name}
                </h3>
                <p className="text-white/50 mb-8 leading-relaxed text-lg max-w-xl">
                  {animal.description}
                </p>
                <button className="flex items-center gap-3 px-10 py-4 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-black transition-all duration-500 font-bold uppercase tracking-widest text-sm">
                  Explorar Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

