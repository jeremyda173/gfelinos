"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bigCats = [
  {
    name: "León",
    scientific: "Panthera leo",
    image: "/images/lion.png",
    description: "El rey de la selva y el felino más social de todos.",
  },
  {
    name: "Tigre",
    scientific: "Panthera tigris",
    image: "/images/tiger.png",
    description: "El felino más grande del mundo y un cazador solitario.",
  },
  {
    name: "Leopardo",
    scientific: "Panthera pardus",
    image: "/images/leopard.png",
    description: "Un acróbata forestal con una capacidad de camuflaje perfecta.",
  },
  {
    name: "Pantera",
    scientific: "Panthera onca",
    image: "/images/panther.png",
    description: "La elegancia pura en las sombras de la selva.",
  },
  {
    name: "Jaguar",
    scientific: "Panthera onca",
    image: "/images/jaguar.png",
    description: "El tercer felino más grande, con la mordida más potente de todas.",
  },
];

export default function BigCats() {
  return (
    <section id="especies" className="section-padding bg-black relative">
      <div className="container">
        <div className="flex flex-col gap-48">
          {bigCats.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-20 md:gap-40`}
            >
              {/* Image Container */}
              <div className="relative w-full md:w-3/5 aspect-[16/10] rounded-[3rem] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/5 text-center md:text-left flex flex-col items-center md:items-start">
                 <span className="text-amber-500 font-bold uppercase tracking-[0.5em] mb-4 text-[10px]">
                    0{i + 1} / Especie
                 </span>
                 <h3 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter">{cat.name}</h3>

                 <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md">
                    {cat.description}
                 </p>
                 <motion.div 
                   whileHover={{ width: 100 }}
                   className="w-24 h-[1px] bg-amber-500 flex-shrink-0" 
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

