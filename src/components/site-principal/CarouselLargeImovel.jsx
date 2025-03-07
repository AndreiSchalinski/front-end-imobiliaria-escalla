"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import Imagem1 from "../../assets/testee.jpeg";
import Imagem2 from "../../assets/testee.jpeg";
import Imagem3 from "../../assets/testee.jpeg";
import Imagem4 from "../../assets/testee.jpeg";
import Imagem5 from "../../assets/testee.jpeg";
import Imagem6 from "../../assets/testee.jpeg";
import Imagem7 from "../../assets/testee.jpeg";
import Imagem8 from "../../assets/testee.jpeg";
import Imagem9 from "../../assets/testee.jpeg";
import Imagem10 from "../../assets/testee.jpeg";

const listImgs = [
  Imagem1,
  Imagem2,
  Imagem3,
  Imagem4,
  Imagem5,
  Imagem6,
  Imagem7,
  Imagem8,
  Imagem9,
  Imagem10,
];

export default function CarouselLargeImovel() {
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
