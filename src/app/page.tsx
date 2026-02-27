"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Featured from "@/components/sections/Featured";
import Conservation from "@/components/sections/Conservation";
import Footer from "@/components/ui/Footer";

// Lazy load components that are not needed immediately or are heavy
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });
const Particles = dynamic(() => import("@/components/ui/Particles"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Particles />
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 bg-background">
        <Categories />
        <Featured />
        <Conservation />
      </div>

      <Footer />
    </main>
  );
}
