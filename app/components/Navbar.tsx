"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuOptions {
  title: string;
  icon: string;
  link: string;
}

export const menuOptions: MenuOptions[] = [
  {
    title: "Inicio",
    icon: "🏡",
    link: "/",
  },
  {
    title: "Nuestro Menú",
    icon: "🍽️",
    link: "/menu",
  },
  {
    title: "Contáctanos",
    icon: "📍",
    link: "/contact",
  },
  {
    title: "Siguenos",
    icon: "📲",
    link: "/socialmedia",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú
  };

  return (
    <nav
      className={`relative top-0 left-0 w-full z-50000 ${
        isOpen ? "bg-black/90" : "bg-transparent"
      }  shadow  transition-all duration-300 ease-in-out`}
    >
      <div className="container px-6 py-4 mx-auto ">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Menú en Desktop (visible siempre en pantalla grande) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuOptions.map(({ title, icon, link }) => (
              <Link
                key={title}
                href={link}
                onClick={handleLinkClick}
                className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{icon}</span>
                  <span>{title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between">
            {/* Botón del menú móvil */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-600 focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
            <a href="#">
              <Image
                src="/Logo-abuelo.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </a>
          </div>

          {/* Menú desplegable */}
          <div
            className={`lg:hidden absolute inset-x-0  z-20 w-full px-6 transition-all duration-300 ease-in-out shadow-lg lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } h-[calc(100vh-4rem)]`}
          >
            <div className="bg-black flex flex-col h-full -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {menuOptions.map(({ title, icon, link }) => (
                <Link
                  key={title}
                  href={link}
                  onClick={() => handleLinkClick()}
                  className="px-3 py-2 mx-3 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100 border-b-2 border-[#cc5127]"
                >
                  <div className="flex items-center space-x-2 text-color py-2">
                    <span className="text-3xl">{icon}</span>
                    <span className="text-3xl font-bold text-white">
                      {title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
