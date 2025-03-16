// components/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 bg-black/70">
        <div className="flex flex-wrap justify-between items-center">
          {/* Columna de información de la empresa */}
          <div className="w-full sm:w-1/2 md:w-1/3 my-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-4">Tacos El Abuelo</h3>
            {/* Columna de redes sociales */}
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/tacoselabue?rdid=JNrLZnUUaqHCpmG9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16Bkxedf95%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link
                  href="https://www.instagram.com/tacoselabue/?igsh=Y3ZzdnBiNGJseWZ4#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
            <p className="text-sm mt-2">
              Web creada por{" "}
              <span className="font-semibold">Tacos El Abuelo</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
