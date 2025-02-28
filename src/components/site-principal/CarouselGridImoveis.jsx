"use client";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const images = [
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-26-1723828636.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-22-1723828635.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-28-1723828636.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-25-1723828634.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-24-1723828634.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-20-1723828633.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-23-1723828633.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-19-1723828632.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-12-1723828628.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-18-1723828631.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-11-1723828627.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-17-1723828630.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-16-1723828630.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-9-1723828626.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-7-1723828625.webp",
];

const openFancybox = (index) => {
  const items = images.map((src) => ({
    src,
    type: "image",
  }));

  NativeFancybox.show(items, {
    Carousel: {
      infinite: true,
    },
    startIndex: index,
  });
};

export default function SiteCardCarouselFotos() {
  const caixa = images.map((urlImage, i) => (
    <SwiperSlide key={i}>
      <a data-fancybox="gallery" href={urlImage}>
        <img
          alt=""
          src={urlImage}
          width="100%"
          height=""
          style={{
            display: "block",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          onClick={(e) => {
            e.preventDefault();
            openFancybox(i);
          }}
        />
      </a>
    </SwiperSlide>
  ));

  const carousel = (
    <Swiper
      loop={true}
      slidesPerView={2}
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="kk"
    >
      {caixa}
    </Swiper>
  );

  return <div style={{ maxWidth: "600px", margin: "auto" }}>{carousel}</div>;
}
