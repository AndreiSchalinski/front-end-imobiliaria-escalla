"use client";

import { openFacyboxImages } from "@/services/fancybox.service";
import Fancybox from "@/services/Facyboxs";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getIcon } from "@/assets/icons";

export default function SiteCardCarousel({ imovel }) {
  return (
    <div style={{ width: "100%" }}>
      <div className="card-imovel">
        <ul
          style={{
            position: "absolute",
            zIndex: 2,
            fontSize: 12,
            margin: "5px 0 0 5px",
          }}
        >
          {imovel.legendas.map((el, i) => {
            return (
              <div style={{ display: "flex" }} key={i}>
                <li
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    background: "black",
                    color: "white",
                    margin: "2.5px 0",
                    borderRadius: 12,
                    padding: "3px 8px",
                    fontFamily: '"Sora", sans-serif',
                    fontSize: 12,
                  }}
                >
                  <div>{el}</div>
                </li>
              </div>
            );
          })}
        </ul>
        <Swiper
          style={{
            height: "auto",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            width: "100%",
          }}
          navigation={true}
          modules={[Navigation]}
          className="card-imovel-swiper"
        >
          {imovel.imgs.map((image, index) => {
            return (
              <SwiperSlide key={index} style={{ backgroundColor: "lightblue" }}>
                <img
                  src={image}
                  alt=""
                  style={{ objectFit: "cover" }}
                  layout="intrinsic"
                  onClick={(e) => {
                    e.preventDefault();
                    openFacyboxImages(imovel.imgs, index);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div ssName="card-imove-legendas">
          <ul className="card-imove-legendas-1">
            <li>{getIcon().iconLocation}</li>
            <li>
              <h5>Testando título</h5>
            </li>
          </ul>

          <div className="card-imove-legendas-2">
            <p>
              Apartamento Duplex no Magnifique Tower em Balneário Camboriú com
              227m² privativos.&nbsp;&nbsp;
              <span className="cod-imovel">IM06103</span>
            </p>
          </div>

          <ul className="card-imove-legendas-3">
            <li>
              <p>{getIcon().iconRuler}&nbsp;&nbsp;149 m²</p>
            </li>

            <li>
              <p>{getIcon().iconCar}&nbsp;&nbsp;3 vagas</p>
            </li>

            <li>
              <p>{getIcon().iconBed}&nbsp;&nbsp;4 quartos</p>
            </li>
          </ul>

          <div className="card-imove-legendas-4">
            <p>R$ 2.800.000,00</p>
          </div>

          <ul style={{ padding: "10px 10px" }}>
            <li style={{ width: "100%", display: "flex" }}>
              <div style={{ flexGrow: 1 }}></div>
              <Button
                style={{
                  borderRadius: 20,
                  background: "#cfd8fd",
                  fontWeight: "bold",
                  padding: "3px 20px",
                  fontSize: 14,
                  color: "#0057b8",
                  border: "none",
                  letterSpacing: "2px",
                }}
              >
                VER DETALHES
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
