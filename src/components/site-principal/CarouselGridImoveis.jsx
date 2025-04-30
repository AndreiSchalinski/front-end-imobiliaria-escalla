"use client";

import { openFacyboxImages } from "@/services/fancybox.service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function SiteCardCarouselFotos({ listImagens }) {
  const [slidesPerView, setSlidesPerView] = useState(2);

  const handleResize = () => {
    if (window.innerWidth <= 1300) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-carousel-grid-edificio-imovel">
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="swiper-grid"
      >
        {listImagens.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              alt={`Imagem ${i + 1}`}
              src={img.url}
              width="100% "
              height="auto"
              style={{
                display: "block",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                openFacyboxImages(listImagens, i);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
