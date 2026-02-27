import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Grandes Felinos | Depredadores Majestuosos",
  description: "Una exhibición premium de los felinos más icónicos del mundo. Visuales cinematográficos y datos de conservación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

