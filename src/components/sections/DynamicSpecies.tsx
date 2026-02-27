"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchSpeciesByCategory, Taxon } from "@/lib/inaturalist";
import Image from "next/image";
import { ChevronRight, RefreshCcw } from "lucide-react";

const CATEGORIES = ["Mamíferos", "Aves", "Reptiles", "Marinos"];

export default function DynamicSpecies() {
  const [activeCategory, setActiveCategory] = useState("Mamíferos");
  const [species, setSpecies] = useState<Taxon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchSpeciesByCategory(activeCategory, 6);
      setSpecies(data);
      setLoading(false);
    }
    loadData();
  }, [activeCategory]);

  return (
    <section id="dynamic-species" className="section-padding bg-zinc-950/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Datos en Tiempo Real
          </motion.h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            Consulta las especies más observadas en República Dominicana según el registro global de iNaturalist.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-accent text-black scale-105 shadow-lg shadow-accent/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-20"
              >
                <RefreshCcw className="w-10 h-10 animate-spin text-accent mb-4" />
                <span className="text-white/40 uppercase tracking-widest font-bold">Cargando datos...</span>
              </motion.div>
            ) : (
              species.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass group rounded-3xl overflow-hidden hover:border-accent/30 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {item.default_photo ? (
                      <Image
                        src={item.default_photo.medium_url}
                        alt={item.preferred_common_name || item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                        <span className="text-white/20">Sin imagen</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] uppercase font-extrabold tracking-widest text-accent">
                      {item.observations_count} Observaciones
                    </div>
                  </div>
                  <div className="p-10 md:p-12">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {item.preferred_common_name || item.name}
                    </h3>
                    <p className="text-white/40 italic text-base mb-8">{item.name}</p>
                    <a
                      href={item.wikipedia_url || `https://www.inaturalist.org/taxa/${item.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
                    >
                      Más información <ChevronRight size={14} />
                    </a>
                  </div>

                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
