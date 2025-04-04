"use client";

import CardFeedbackCliente from "@/components/equipe/CardFeedbackCliente";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function EquipeFeedbacksPage() {
  return (
    <div className="container-equipe-feedbacks-clientes">
      <p className="container-equipe-feedbacks-clientes-title">
        O que dizem nossos clientes
      </p>
      <div>
        <Swiper
          loop={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper-container-carousel-equipe-feedbacks-clientes"
        >
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
          <SwiperSlide>
            <CardFeedbackCliente />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
