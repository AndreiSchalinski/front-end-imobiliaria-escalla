"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function CarouselLargeImovel({listImgs}) {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={1.65}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="carousel-large-swiper"
      >
        {listImgs.map((img, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              border: "1px solid red",
            }}
          >
            <Image
              src={img}
              alt={`Imagem ${i + 1}`}
              layout="intrinsic"
              width={2000}
              height={1000}
              objectFit="cover"
              style={{ borderRadius: 5 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
