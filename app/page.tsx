import ImageSlider from "./components/ImagesSlider";
import ProductSlider from "./components/ProductSlider";

export default function Home() {
  return (
    <>
     
        <div>
          <ImageSlider />
        </div>
     

      <div>
        <h1 className="text-center text-4xl font-bold my-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Lo más pedido
        </h1>
        <ProductSlider />
      </div>

      
    </>
  );
}
