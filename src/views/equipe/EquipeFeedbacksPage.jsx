"use client";

import CardFeedbackCliente from "@/components/equipe/CardFeedbackCliente";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getDepoimentos } from "@/services/service.depoimento";

export default function EquipeFeedbacksPage() {
  const [listDepoimentos, setListDepoimentos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respDepoimentos = await getDepoimentos();
      setListDepoimentos(respDepoimentos.data);
    };
    fetchData();
  }, []);

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
          {listDepoimentos.map((depoimento, i) => {
            return (
              <SwiperSlide key={i}>
                <CardFeedbackCliente key={i} depoimento={depoimento} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
