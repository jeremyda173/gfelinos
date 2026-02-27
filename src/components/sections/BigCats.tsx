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
    <section id="especies" className="section-padding bg-black">
      <div className="container">
        <div className="flex flex-col gap-32">
          {bigCats.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32`}
            >
              {/* Image Container */}
              <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-1000"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                 <span className="text-amber-500 font-bold uppercase tracking-[0.3em] mb-4 inline-block text-xs">
                    Colección Especies
                 </span>
                 <h3 className="text-4xl md:text-7xl font-display font-bold mb-4">{cat.name}</h3>
                 <p className="text-white/40 italic font-mono mb-8 text-sm">{cat.scientific}</p>
                 <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                    {cat.description}
                 </p>
                 <div className="w-20 h-1 bg-amber-500 mx-auto md:mx-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
