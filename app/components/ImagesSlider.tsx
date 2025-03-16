"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    {
      src: "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/480939824_1105225694949040_5412542293986501058_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5rGCd4w9_qUQ7kNvgGMtPqQ&_nc_oc=AdhcWpkaLSUyTFwuLlKzgs8X5iFvyGfvRYuSka3GAbLjfNlxC6uJ2N8piB6r4Z4c9KyB_O9mWea0DKSO5ydoIizo&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=3KIjYMotjr2QOAR9D8cx5A&oh=00_AYGaGiNoYgivo0ROzAO8hnJjVQcyOfToqQXAEBs_NGKLAQ&oe=67DBAC96",
      alt: "Imagen 1",
    },
    {
      src: "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/481666875_1097982919006651_3359229951254710567_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yQbZDURUpgwQ7kNvgH5T5xJ&_nc_oc=AdjC5ch8sPPrKSPlsABRa9cA8VlXBnq0kypuyyCzOrQIYIVw46-pVVsHEAUCARrmnqExT3cbMi8m7dZiLHLQivqf&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=aZXiKJns27p-3VDFaKV62w&oh=00_AYHu6GBLQkGnOFIPkpxCSBUoEX-iogtOuj76YcGV-U6p4Q&oe=67DBA369",
      alt: "Imagen 2",
    },
    {
      src: "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/448927656_910515321086746_210294432489540201_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=om7OI0Tj69EQ7kNvgE0O6LX&_nc_oc=AdhLQZEK2itXHICO1E09zUrFq-N7fhEvGaTE8uxoUlbAx8TzOepM_gn5jycYatebNhxV-QaYnn9nDU5FWP6XRQlO&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=jwCiTUiHuobFP8G0E5BRHA&oh=00_AYGCj5bbLex2H6yOxabcHjtFEt44gXyokSmGHqOo1SPanQ&oe=67DBB21E",
      alt: "Imagen 3",
    },
    // Agrega más imágenes según lo necesites
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia cada 7 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  // Cambiar manualmente
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
        Nuestros Productos
      </h2>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg">
        {/* Slider de imágenes */}
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill" // Para que la imagen ocupe todo el contenedor
            objectFit="cover" // Para cubrir todo el espacio sin distorsionar
            objectPosition="center"
          />
        </div>

        {/* Puntos de navegación */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
