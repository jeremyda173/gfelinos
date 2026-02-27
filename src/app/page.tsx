"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import BigCats from "@/components/sections/BigCats";
import Footer from "@/components/ui/Footer";

// Lazy load components that are not needed immediately or are heavy
const Particles = dynamic(() => import("@/components/ui/Particles"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Particles />
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10">
        <BigCats />
      </div>

      <Footer />
    </main>
  );
}
