"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold mb-4">
              Fauna<span className="text-accent">RD</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest">
              Orgullosamente Dominicanos 🇩🇴
            </p>
          </div>

          <div className="flex gap-6">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: "#00ff88" }}
                className="text-white/40 hover:text-accent transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm text-white/40 mb-2">© 2024 FaunaRD. Todos los derechos reservados.</div>
            <div className="flex gap-4 justify-center md:justify-end text-xs uppercase tracking-widest text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 w-full h-[2px] bg-gradient-to-r from-blue-600 via-white to-red-600 opacity-20" />
      </div>
    </footer>
  );
}
