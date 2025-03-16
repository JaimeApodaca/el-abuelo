import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tacos El Abuelo - Los Mochis | Tacos de Birria Tradicionales",
  description:
    "Disfruta de los mejores tacos de birria en Los Mochis, Sinaloa, en Tacos El Abuelo. Una tradición de sabor, carne de res cocinada a fuego lento y tortillas frescas. ¡Visítanos hoy mismo!",
  keywords:
    "tacos de birria, tacos Los Mochis, Tacos El Abuelo, comida en Los Mochis, birria de res, tacos tradicionales, restaurantes Los Mochis, comida mexicana, tacos cerca de mí",
  robots: "index, follow",
  // authors: [{ name: "Tacos El Abuelo", url: "https://www.tacoselabuelo.com" }],
  // openGraph: {
  //   title: "Tacos El Abuelo - Los Mochis | Tacos de Birria",
  //   description:
  //     "Los mejores tacos de birria en Los Mochis, preparados con carne de res a fuego lento y tortillas frescas. ¡Una experiencia gastronómica única!",
  //   url: "https://www.tacoselabuelo.com", // Asegúrate de poner la URL correcta de tu sitio
  //   type: "website",
  //   images: "/Logo-abuelo.png", // Pon la ruta a una imagen atractiva
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
