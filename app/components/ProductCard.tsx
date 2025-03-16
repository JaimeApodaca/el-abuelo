import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm bg-black/70 border border-gray-200 rounded-lg shadow-sm flex flex-col">
      <Link href={"/menu"} className="relative w-full h-[200px]">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover" // Asegura que la imagen cubra el espacio sin distorsión
          className="rounded-t-lg"
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white ">
          {title}
        </h5>

        <p className="mb-3 font-normal text-white dark:text-gray-400 flex-1">
          {description}
        </p>
        <Link
          href={"/menu"}
          className="inline-flex items-center justify-center px-3 py-2 font-medium text-center text-white border rounded-lg"
        >
          Menú
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
