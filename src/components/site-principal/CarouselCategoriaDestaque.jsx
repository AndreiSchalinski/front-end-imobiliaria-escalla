"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardCarousel from "@/components/site-principal/CarouselCard";

export default function CarouselDestaques({ categoria }) {
  
  return (
    <div className="container-carousel-destaques">
      <h1>{categoria.nome}</h1>

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
        className=" swiper-container-carousel"
      >
        {categoria.imoveis.map((imovel, j) => (
          <SwiperSlide key={j}>
            <CardCarousel key={j} imovel={imovel} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<p>{categoria.legenda}</p><div }>{JSON.stringify(imovel)}</div>
    
      */}
    </div>
  );
}
