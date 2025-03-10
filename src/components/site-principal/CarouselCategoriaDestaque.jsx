"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardCarousel from "@/components/site-principal/CarouselCard";

export default function CarouselDestaques({ categoriaDestaque, legenda }) {
  return (
    <div className="container-carousel-destaques">
      <h1>{categoriaDestaque}</h1>
      <p>{legenda}</p>
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper-container-carousel"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "",
              padding: "70px 0",
            }}
            
          >
            <CardCarousel />
            <CardCarousel />
            <CardCarousel />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
