"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Drops from "./Dropdowns";
import Image from "next/image";
import { getIcon } from "@/assets/icons";

export default function CarouselLargeImovel({ listImgs }) {
  return (
    <>
      {/* Contêiner do carrossel com position relative */}
      <div style={{  width: "100%", height: "100%", position:'relative', display:'flex', justifyContent:'center'}}>
        <div
          style={{
            position:'absolute',
            color: "white", // Cor do texto
            zIndex: 2, // Garante que o h1 fique sobre as imagens
            display: "flex",
            justifyContent:'flex-end',
            paddingTop:6,
            paddingRight:10,
            marginLeft:30,
            border:'1px solid red',
            width:'59.9%',
            margin:'auto',
            background:'rgba(0, 0, 0, 0)'
          }}
        >
          {getIcon().iconSave}
          <Drops />
          {getIcon().iconAmplitude}
        </div>
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
    </>
  );
}
