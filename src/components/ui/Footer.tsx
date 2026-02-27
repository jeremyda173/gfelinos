"use client";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5 text-center">
      <div className="container">
        <div className="text-2xl font-display font-bold mb-4">
          Grandes<span className="text-amber-500">Felinos</span>
        </div>
        <p className="text-white/20 text-xs uppercase tracking-widest leading-loose">
          © 2024 Colección Felina. <br />
          Capturando la esencia de los depredadores más majestuosos.
        </p>
      </div>
    </footer>
  );
}
