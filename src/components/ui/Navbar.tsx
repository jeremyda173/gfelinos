"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700",
        scrolled ? "py-5 glass-dark shadow-2xl backdrop-blur-xl" : "py-10 bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter"
        >
          GRANDES<span className="text-amber-500">FELINOS</span>
        </motion.div>

        <div className="flex items-center gap-12">
          {["Inicio", "Especies"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link === "Inicio" ? "" : link.toLowerCase()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative text-[10px] font-bold text-white/70 hover:text-white uppercase tracking-[0.4em] transition-colors group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}

