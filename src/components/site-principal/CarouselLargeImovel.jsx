"use client";

import { openFacyboxImages } from "@/services/fancybox.service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ButtonsLegendaImovel from "./ButtonsLegendaImovel";
import { useState } from "react";

export default function CarouselLargeImovel({ listImgs }) {
  const [indexImg, setIndexImg] = useState(null);

  const handleSlideChange = (swiper) => {
    setIndexImg(swiper.realIndex);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonsLegendaImovel listImgs={listImgs} index={indexImg} />

        <Swiper
          loop={true}
          slidesPerView={1.6}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          onSlideChange={handleSlideChange}
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
                cursor: "pointer",
              }}
            >
              <img
                src={img}
                alt={`Imagem ${i + 1}`}
                layout="intrinsic"
                width={"auto"}
                height={"auto"}
                style={{
                  borderRadius: 5,
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  openFacyboxImages(listImgs, i);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
