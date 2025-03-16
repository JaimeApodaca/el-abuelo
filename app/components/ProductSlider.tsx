"use client";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const products = [
  {
    imageUrl:
      "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/399314316_759752802829666_3184907423873330073_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xQSlWHKXTzQQ7kNvgH0qTp7&_nc_oc=AdgRFmjGoApbcfvmpial6edrYmvh9Lez_nnRtVVDkrOpcODMX8u5vDvtSmFw-npp69GnO2K5-1G9WVU8NYKLxfaN&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=x1Lw16GojYEp8QbJMoJ_Zg&oh=00_AYG6wfH5kluxglt1Ozncb_qT2TQyxol6LXSGCYDukdCh1A&oe=67DBC326",
    title: "Abuelaso",
    description: "Mixta de Harina o Maíz",
  },
  {
    imageUrl:
      "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/427024318_821987119939567_1176907138449472918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ko-hexbYUhwQ7kNvgFnvO4u&_nc_oc=AdgZuToU2MeTtU9qiuyviUzcJy_MbWjYc3cr8w4_oRuH9QEYwKNycw_oote5JnigUp9a_Xp2oHT1vtGPByB2Xxqy&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=NIyH9yvyk_m32IcNdROgBw&oh=00_AYGXhtwOZsQ9gKEk1B8dQ1SBdlZIG5JO9vYlFv6lXjTy_g&oe=67DBCB6D",
    title: "Tacos",
    description: "Tacos de Harina o Maíz.",
  },

  {
    imageUrl: "https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/371500039_717820467022900_1743186860668834837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1uT75yOQ3YAQ7kNvgHzA25w&_nc_oc=Adi9p4EZ7Fnv6LT8_FeAjJvc43PvhHKetS4_AMzs4SBmh-t8dljC4Ynntmnlos9VA1jnnhRq_QNqnRew97ogWAUk&_nc_zt=23&_nc_ht=scontent.fcul3-1.fna&_nc_gid=XoT34F8vc_NaCJ1DzvLhvw&oh=00_AYEELSJYxqiLtSrqR_jUprVALcNTfiUCqysozXEnbQ0nIQ&oe=67DBC5F8",
    title: "Sopes",
    description: "Masa, Asientos, Carne y Queso gratinado.",
  },
];

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 tarjetas por vez en desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia cada 3 segundos
    responsive: [
      {
        breakpoint: 1024, // En pantallas medianas (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // En móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
