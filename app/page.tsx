import Image from "next/image";
import ImageSlider from "./components/ImagesSlider";
import ProductSlider from "./components/ProductSlider";
import { Principal } from "./components/Principal";

export default function Home() {
  return (
    <>
      <Principal />

      <ImageSlider />

      <section className="bg-transparent py-14">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Ventajas de un Taco <span className="text-white"> 🌮</span>
        </h2>
        <div className="flex justify-center">
          <Image
            width={600}
            height={0}
            className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto rounded-lg shadow-lg"
            alt="Ventajas de un taco"
            src={"/Ventajas-taco.png"}
          />
        </div>
      </section>

      <h2 className="text-center text-4xl font-bold my-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
        Lo más pedido
      </h2>
      <ProductSlider />
    </>
  );
}
