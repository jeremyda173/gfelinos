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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4 glass-dark shadow-lg" : "py-8 bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          Grandes<span className="text-amber-500">Felinos</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Inicio", "Especies"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link === "Inicio" ? "" : link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-amber-500 transition-colors uppercase tracking-[0.2em]"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
