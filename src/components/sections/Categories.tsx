"use client";

import { motion } from "framer-motion";
import { Squirrel, Bird, Shell, Bug } from "lucide-react";

const categories = [
  {
    name: "Mamíferos",
    icon: <Squirrel className="w-8 h-8" />,
    description: "Desde el esquivo Solenodonte hasta las ballenas jorobadas.",
    color: "from-orange-500/20 to-orange-500/0",
  },
  {
    name: "Aves",
    icon: <Bird className="w-8 h-8" />,
    description: "Más de 300 especies, incluyendo nuestra nacional Cigua Palmera.",
    color: "from-blue-500/20 to-blue-500/0",
  },
  {
    name: "Reptiles",
    icon: <Bug className="w-8 h-8" />,
    description: "Iguanas rinoceronte y cocodrilos en lagos sagrados.",
    color: "from-green-500/20 to-green-500/0",
  },
  {
    name: "Marinos",
    icon: <Shell className="w-8 h-8" />,
    description: "Manatíes y vida coralina en aguas cristalinas.",
    color: "from-cyan-500/20 to-cyan-500/0",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="section-padding relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Biodiversidad Local</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Explora los diferentes grupos que componen nuestro ecosistema único y las maravillas que habitan en cada rincón.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(0, 255, 136, 0.3)" 
              }}
              className="glass p-10 rounded-3xl border border-white/5 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col items-center text-center h-full"
            >
              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${category.color} opacity-30`} />
              
              <div className="relative z-10 flex flex-col items-center flex-grow">
                <div className="mb-8 p-5 rounded-2xl bg-white/5 group-hover:bg-accent group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>
              <div className="relative z-10 mt-auto w-full pt-6 border-t border-white/5 group-hover:border-accent/30 transition-colors">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent/0 group-hover:text-accent transition-all duration-500">
                  Explorar
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

