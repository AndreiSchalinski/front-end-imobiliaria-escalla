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
      <ul
        style={{
          position: "absolute",
          zIndex: 2,
          fontSize: 12,
          margin: "5px 0 0 20px",
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
      <div className="card-imovel">
        <Swiper
          style={{
            height: "auto",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
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
        <div
          style={{
            borderLeft: "1px solid #00000019",
            borderBottom: "1px solid #00000019",
            borderRight: "1px solid #00000019",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 2,
          }}
        >
          <ul style={{ display: "flex", alignItems: "center" }}>
            <li>{getIcon().iconLocation}</li>
            <li>
              <h5>Testando título</h5>
            </li>
          </ul>

          <div>
            <p>
              Apartamento Duplex no Magnifique Tower em Balneário Camboriú com
              227m² privativos.
            </p>
          </div>

          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <li>
              <span>{getIcon().iconRuler} 149 m²</span>
            </li>

            <li>
              <span>{getIcon().iconCar} 3 vagas</span>
            </li>

            <li>
              <span>{getIcon().iconBed} 4 quartos</span>
            </li>
          </ul>

          <div>
            <span>R$ 2.800.000,00</span>
          </div>

          <ul style={{ marginTop: 40 }}>
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
