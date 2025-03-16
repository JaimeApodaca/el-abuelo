import Link from "next/link";

const RedesSociales = () => {
  return (
    <div className="pb-8 px-2 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
        Síguenos en nuestras redes sociales
      </h1>

      <section className="space-y-6 bg-black/70 text-white py-4">
        <p className="text-lg text-center ">
          ¡Mantente conectado con **Tacos El Abuelo**! Síguenos en nuestras
          redes sociales para estar al tanto de promociones, eventos y mucho
          más.
        </p>

        {/* Redes sociales */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://www.facebook.com/tacoselabue?rdid=JNrLZnUUaqHCpmG9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16Bkxedf95%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="text-lg font-bold text-white">Facebook</span>{" "}
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
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://www.instagram.com/tacoselabue/?igsh=Y3ZzdnBiNGJseWZ4#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="text-lg font-bold text-white">Instagram</span>{" "}
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

        {/* Beneficios */}
        <section className="text-center mt-6 font-bold">
          <h2 className="text-xl font-semibold mb-4">¿Por qué seguirnos?</h2>
          <ul className="space-y-2">
            <li>🌮 Promociones exclusivas para nuestros seguidores.</li>
            <li>🎉 Información sobre eventos especiales y fiestas.</li>
            <li>🍴 Noticias sobre nuevos platillos y menús.</li>
            <li>📸 Contenido visual exclusivo de Tacos El Abuelo.</li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default RedesSociales;
