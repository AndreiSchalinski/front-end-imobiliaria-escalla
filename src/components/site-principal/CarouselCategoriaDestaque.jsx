"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardCarousel from "@/components/site-principal/CarouselCard";

export default function CarouselDestaques({
  categoriaDestaque,
  legenda,
  listaCategorias,
}) {
  const divideIntoChunks = (arr, chunkSize) => {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const listaEmChunks = divideIntoChunks(listaCategorias, 3);

  return (
    <div className="container-carousel-destaques">
      <h1>{categoriaDestaque}</h1>
      <p>{legenda}</p>

      <Swiper
        loop={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper-container-carousel"
      >
        {listaEmChunks.map((grupo, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: grupo.length > 2 ? "center" : "flex-start",
              paddingLeft: grupo.length > 2 ? "initial" : 55,
            }}
          >
            {grupo.map((imovel, idx) => (
              <CardCarousel key={idx} imovel={imovel} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/*

<Swiper
        loop={true}
        e
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper-container-carousel"
      >
        {listaCategorias.map((imovel, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <CardCarousel imovel={imovel} />
          </SwiperSlide>
        ))}
      </Swiper>




*/
