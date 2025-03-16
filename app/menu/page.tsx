import Image from "next/image";

const menuItems = [
  {
    category: "Tacos",
    items: [
      { name: "Maíz Especial", price: "$50" },
      { name: "Harina Especial", price: "$70" },
    ],
    image:
      "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/484492138_2848292512008310_8441386884383802256_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-aYpcntBi-MQ7kNvgGj58c_&_nc_oc=AdjXEao9cHuZJjh5JNM1OvW5TCeNcGua-qer8C9FPh2y0JCXWa9YETkKnCH8luF_8ZZ8LkX0visWsPzuSjKqABJc&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=rXATePJZkIfu1Fjz0eRKkg&oh=00_AYGYKM_HvMbPnt7fcM55vYH9bVUQrBrJrVzFGLr9eg5LvA&oe=67DBF415",
  },
  {
    category: "Abuelaso",
    items: [
      { name: "Mixta de Harina", price: "$100" },
      { name: "Mixta de Maíz", price: "$70" },
    ],
    image:
      "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/475301593_1071235225014754_2936242990667690889_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e3gr8_15HUoQ7kNvgEiAxwi&_nc_oc=Adg2oksi_dtgJndAn5vd1onpKr7fN9ijway58QAEKvT6U0ZmlrBMaKXrv9_kypVi3fzcWisHdsx1YVXHM9IJQsJT&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=-Igvi88nj3TecnQm9MNGzw&oh=00_AYGh7iKc9wcv_PqHKX9-_LrqW6XS2Ly7s2gxPQr1JtYbRQ&oe=67DBF598",
  },
  {
    category: "Sopes",
    items: [{ name: "Masa, Asientos, Carne, Queso gratinado", price: "$70" }],
    image:
      "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/481975499_2832368820267346_8906568954509899748_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MfCnatGLsDIQ7kNvgF9xVSi&_nc_oc=Adi84cC7W36MRMUUKMWZmqZuXScExLeI8swUtM_r6K7Bh_skJ-EVAzRxJCCVnDIQdy2YQnTtAjH0KvdSJZ4ywUsi&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=ekjpDC_YVOjNSJlahH1yXQ&oh=00_AYH0IWYrssz_kQIZmUf5AQMRK_OxQviVcKOPFt6t57JfIQ&oe=67DBFAC4",
  },
  {
    category: "Tostadas",
    items: [
      {
        name: "Doble tortilla, Dorada, Asientos, Queso gratinado",
        price: "$70",
      },
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfB8A3TpZounZgx-Xumvu1DOzSt-lK_hZycK0iSh7qlp3DwvkxZunMzZKWOPaw4YOiT0&usqp=CAU",
  },
  {
    category: "Birrias",
    items: [
      { name: "Orden completa", price: "$120" },
      { name: "Media orden", price: "$100" },
      { name: "Tortilla con asientos", price: "$15" },
      { name: "Quesadilla de maíz", price: "$20" },
      { name: "Quesadilla de harina", price: "$25" },
    ],
  },
  {
    category: "Bebidas",
    items: [
      { name: "Refrescos de vidrio", price: "$25" },
      { name: "Jamaica", price: "$25" },
      { name: "Agua Ciel 1L", price: "$30" },
      { name: "Coca-Cola 600ml", price: "$30" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-4 md:p-10">
      <h1 className="text-center text-5xl font-bold text-white drop-shadow-lg mb-6">
        MENÚ
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((section, index) => (
          <div
            key={index}
            className="bg-black/70 p-5 rounded-lg shadow-md text-white"
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-3">
              {section.category}
            </h2>
            {section.image && (
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={section.image}
                  alt={section.category}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
            <ul>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b border-gray-500 py-2"
                >
                  <span>{item.name}</span>
                  <span className="font-bold text-orange-300">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
