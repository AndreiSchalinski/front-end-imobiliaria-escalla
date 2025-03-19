"use client";

import { openFacyboxImages } from "@/services/fancybox.service";
import Fancybox from "@/services/Facyboxs";
import { Row, Col, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getIcon } from "@/assets/icons";
import { Box } from "@mui/material";

export default function SiteCardCarousel({ imovel }) {
  return (
    <div style={{ width: 500 }}>
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
      <Box
        sx={{
          padding: 0,
          margin: "0 10px",
          borderRadius: 2,
          transition: "0.9s",
          "&:hover": {
            transition: "0.2s",
            transform: "translateY(-15px)",
            boxShadow: "0 15px 25px #08789a36",
          },
        }}
      >
        <Swiper
          style={{
            height: 300,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {imovel.imgs.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{ height: "400px", backgroundColor: "lightblue" }}
              >
                <img
                  src={image}
                  alt=""
                  onClick={(e) => {
                    e.preventDefault();
                    openFacyboxImages(images, index);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          sx={{
            borderLeft: "1px solid #00000019",
            borderBottom: "1px solid #00000019",
            borderRight: "1px solid #00000019",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 2,
          }}
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col>{getIcon().iconLocation}</Col>
            <Col>
              <h5>Testando título</h5>
            </Col>
          </Row>

          <Row>
            <p>
              Apartamento Duplex no Magnifique Tower em Balneário Camboriú com
              227m² privativos.
            </p>
          </Row>

          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Col>
              <span>{getIcon().iconRuler} 149 m²</span>
            </Col>

            <Col>
              <span>{getIcon().iconCar} 3 vagas</span>
            </Col>

            <Col>
              <span>{getIcon().iconBed} 4 quartos</span>
            </Col>
          </Row>

          <Row>
            <span>R$ 2.800.000,00</span>
          </Row>

          <Row style={{ marginTop: 40 }}>
            <Col style={{ width: "100%", display: "flex" }}>
              <Box sx={{ flexGrow: 1 }} />
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
            </Col>
          </Row>
        </Box>
      </Box>
    </div>
  );
}
