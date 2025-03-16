"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Principal = () => {
  return (
    <section className="relative h-screen w-full flex justify-center text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/479523267_1084297390375204_3396787990513745433_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K8CigIrED9UQ7kNvgEAZ06u&_nc_oc=AdhV9_MNBMQTzEZKkasE494bleYUs5UrEJ0B2Ys8vn7P92plEXfsvGDRrhRD8KNWx4tSe1PnUuAxoevWlpWqgcMJ&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=E3ieCesedHZ6QS1ZoRLKcA&oh=00_AYFrF2HD6AYl0SyFqPLO3JT--SqMhsER3Lyx5GaF3voiQg&oe=67DCB522"
          alt="Tacos de birria"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative  z-10 text-center  max-w-2xl">
        <div className="bg-black/70 p-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl   font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
          >
            La Tradición en Cada Bocado
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-4 text-lg bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
          >
            En <strong>Tacos El Abuelo</strong>, llevamos generaciones sirviendo
            la mejor birria de res, cocinada a fuego lento con nuestra receta
            secreta. Ven y prueba el auténtico sabor.
          </motion.p>
        </div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-6  flex gap-4 justify-center"
        >
          <Link href="/menu">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl shadow-lg transition-all">
              Ver Menú 🍽️
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-2xl shadow-lg transition-all">
              Contáctanos 📍
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
