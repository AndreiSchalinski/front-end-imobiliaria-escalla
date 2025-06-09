"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import CardColaborador from "./CardColaborador";
import { useState, useEffect } from "react";
import { getColaboradores } from "@/services/service.colaboradores";

export default function CarouselColaboradores() {
  const [listColaboradores, setListColaboradores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respColaboradores = await getColaboradores();
      setListColaboradores(respColaboradores.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container-site-principal-consultores">
      <div className="container-site-principal-consultores-title">
        <p>Conheça a nossa equipe</p>
      </div>
      <Swiper
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
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={false}
        modules={[Pagination]}
        className="swiper-container-carousel-consultores"
      >
        {listColaboradores.map((colaborador, i) => (
          <SwiperSlide key={i}>
            {colaborador.imagem !== null ? (
              <CardColaborador colaborador={colaborador} key={i} />
            ) : undefined}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
