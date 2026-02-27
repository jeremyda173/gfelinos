"use client";

import { motion } from "framer-motion";
import { Squirrel, Bird, Shell, Bug } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Mamíferos",
    image: "/images/cat-mammals.png",
    icon: <Squirrel className="w-6 h-6" />,
    description: "Desde el esquivo Solenodonte hasta las ballenas jorobadas.",
    color: "accent",
  },
  {
    name: "Aves",
    image: "/images/cat-birds.png",
    icon: <Bird className="w-6 h-6" />,
    description: "Más de 300 especies, incluyendo nuestra nacional Cigua Palmera.",
    color: "blue-500",
  },
  {
    name: "Reptiles",
    image: "/images/cat-reptiles.png",
    icon: <Bug className="w-6 h-6" />,
    description: "Iguanas rinoceronte y cocodrilos en lagos sagrados.",
    color: "green-500",
  },
  {
    name: "Marinos",
    image: "/images/cat-marine.png",
    icon: <Shell className="w-6 h-6" />,
    description: "Manatíes y vida coralina en aguas cristalinas.",
    color: "cyan-500",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Diversidad Única</h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Explora las maravillas de nuestra tierra a través de sus categorías más fascinantes. Cada una guarda tesoros biológicos inigualables.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer h-[500px]"
            >
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900">
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="p-3 w-fit rounded-xl bg-accent text-black mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-8 line-clamp-3">
                    {category.description}
                  </p>

                  <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                    Explorar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
