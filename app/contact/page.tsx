// pages/visit-us.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VisitUs = () => {
  const restaurantInfo = {
    name: "Tacos El Abuelo",
    address: "Santos Degollado #1110 Colonia Insurgentes, Los Mochis, Mexico",
    phone: "+52 668 165 3526",
    hours: "Martes a Domingo: 7:00 AM - 02:00 PM",
  };

  return (
    <>
      <section className="bg-transparent pb-6">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Servicio a Domicilio <span className="text-white"> 🌮</span>
        </h2>

        {/* Contenedor relativo para posicionar la imagen y el texto */}
        <div className="relative">
          <Image
            width={600}
            height={0}
            className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto rounded-lg shadow-lg"
            alt="Servicio a domicilio"
            src="/ServicioDomicilio.png"
          />

          {/* Texto sobre la imagen */}
          <div className="absolute top-0 left-0 text-white  px-4 mx-2 font-bold bg-black/70">
            <div>
              <p className="text-xl">
                ¡Disfruta de nuestras deliciosas opciones desde la comodidad de
                tu hogar!
              </p>
            </div>
            <div>
              <p className="text-xl">ORDENA: +52 668 165 3526</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Visítanos
        </h1>
        <div className="bg-black/70">
          <div className="mt-8 ">
            <h2 className="text-xl font-semibold text-gray-700 text-white">
              Dirección
            </h2>
            <p className="text-gray-600 text-white">{restaurantInfo.address}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 text-white">
              Horario
            </h2>
            <p className="text-gray-600 text-white">{restaurantInfo.hours}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 text-white">
              Teléfono
            </h2>
            <p className="text-gray-600 text-white">{restaurantInfo.phone}</p>
            <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 text-white">
            Mapa de Ubicación
          </h2>
            </div>
          </div>
        </div>
        <div className="mt-4 pb-6">
          <Link href={"https://maps.app.goo.gl/tN672FnjDJzQV7fJ8"}>
            <div className="w-full h-64 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.5446961014408!2d-108.99581137666748!3d25.779971016632405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba2f5fa507cb21%3A0xf9859a47e60b02dd!2sTacos%20El%20Abuelo!5e0!3m2!1ses-419!2smx!4v1742148941965!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VisitUs;
