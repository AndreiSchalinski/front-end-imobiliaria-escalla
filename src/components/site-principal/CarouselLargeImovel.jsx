"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import Imagem1 from "../../assets/testee.jpeg";
import Imagem2 from "../../assets/imgs/sun-beach-11-1729866914.jpeg";
import Imagem3 from "../../assets/imgs/sun-beach-3-1729866903.jpeg";
import Imagem4 from "../../assets/imgs/sun-beach-4-1729866905.jpeg";
import Imagem5 from "../../assets/imgs/sun-beach-6-1729866907.jpeg";
import Imagem6 from "../../assets/imgs/sun-beach-1-1729866902.jpeg";
import Imagem7 from "../../assets/imgs/sun-beach-11-1729866914.jpeg";
import Imagem8 from "../../assets/imgs/sun-beach-3-1729866903.jpeg";
import Imagem9 from "../../assets/imgs/sun-beach-4-1729866905.jpeg";
import Imagem10 from "../../assets/imgs/sun-beach-6-1729866907.jpeg";

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
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        loop={true}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="carousel-large-swiper"
      >
        {[...Array(listImgs.length)].map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%", // Faz a imagem ocupar toda a largura
              height: "100%", // Faz a imagem ocupar toda a altura
              objectFit: "cover", // Garante que a imagem não se distorça
              border: "1px solid blue",
              borderRadius: 5,
            }}
          >
            <h1>kkkkkkkkkkkk</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
