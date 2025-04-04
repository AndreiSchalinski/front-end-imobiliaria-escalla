"use client";

import BlogCardArtigoMaisVendido from "@/components/blog/BlogCardArtigoMaisVendido";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function BlogArtigosMaisLidos() {
  return (
    <div className="container-artigos-mais-lidos-blog">
      <div
        className="container-artigos-mais-lidos-blog-title"
        style={{ width: "59.09%" }}
      >
        <p>Artigos mais lidos</p>
      </div>

      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1500: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation]}
        className="swiper-container-carousel-artigos-mais-lidos-blog"
      >
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={
              "Imóveis em SantaCatarina: vale a dflkmgdofga asdmapsmdoasmdoamsoamsdo"
            }
            legenda={
              "Santa Catarina é um dos melhores estados do Brasil para se viver, e o primeiro quando o assunto é turismo. Ao analisar métricas como educação, dflkmgdofga asdmapsmdoasmdoamsoamsdo dflkmgdofga asdmapsmdoasmdoamsoamsdo dflkmgdofga asdmapsmdoasmdoamsoamsdo dflkmgdofga asdmapsmdoasmdoamsoamsdo"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Vale a pena investir em Itajaí?"}
            legenda={
              "Itajaí é uma cidade realmente fantástica, e continua crescendo rapidamente ano após ano. Localizada em Santa Catarina, no litoral do estado, é uma referência em"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Melhores bares em Porto Belo"}
            legenda={
              "Saber sobre os melhores bares em Porto Belo é uma boa forma de planejar quais os próximos lugares para visitar. Porto Belo possui muitas coisas"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Melhores bares em Porto Belo"}
            legenda={
              "Saber sobre os melhores bares em Porto Belo é uma boa forma de planejar quais os próximos lugares para visitar. Porto Belo possui muitas coisas"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Melhores bares em Porto Belo"}
            legenda={
              "Saber sobre os melhores bares em Porto Belo é uma boa forma de planejar quais os próximos lugares para visitar. Porto Belo possui muitas coisas"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Melhores bares em Porto Belo"}
            legenda={
              "Saber sobre os melhores bares em Porto Belo é uma boa forma de planejar quais os próximos lugares para visitar. Porto Belo possui muitas coisas"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCardArtigoMaisVendido
            titulo={"Melhores bares em Porto Belo"}
            legenda={
              "Saber sobre os melhores bares em Porto Belo é uma boa forma de planejar quais os próximos lugares para visitar. Porto Belo possui muitas coisas"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
