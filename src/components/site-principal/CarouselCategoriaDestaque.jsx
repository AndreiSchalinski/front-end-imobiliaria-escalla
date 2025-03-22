"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardCarousel from "@/components/site-principal/CarouselCard";

export default function CarouselDestaques({
  categoriaDestaque,
  legenda,
  listaCategorias,
}) {
  return (
    <div className="container-carousel-destaques">
      <h1>{categoriaDestaque}</h1>
      <p>{legenda}</p>

      <Swiper
        loop={false}
        breakpoints={{
          1300: {
            slidesPerView: 3,
          },

          900: {
            slidesPerView: 2,
          },

          576: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper-container-carousel"
      >
        {listaCategorias.map((imovel, index) => (
          <SwiperSlide key={index}>
            <CardCarousel key={index} imovel={imovel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
