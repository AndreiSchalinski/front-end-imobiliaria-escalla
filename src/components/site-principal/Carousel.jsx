"use client"; // For Next.js App Router (if needed)

import { Row, Col, Card, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import icon from "../../assets/icons";
import { Box } from "@mui/material";
import Imagem1 from "../../assets/imgs/sun-beach-1-1729866902.jpeg";
import Imagem2 from "../../assets/imgs/sun-beach-11-1729866914.jpeg";
import Imagem3 from "../../assets/imgs/sun-beach-3-1729866903.jpeg";
import Imagem4 from "../../assets/imgs/sun-beach-4-1729866905.jpeg";
import Imagem5 from "../../assets/imgs/sun-beach-6-1729866907.jpeg";

export default function SiteCardCarousel() {
  return (
    <div style={{width:450}}>
      <Box
        sx={{
          padding: 0,
          margin:"0 10px",
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
          className="mySwiper"
        >
          <SwiperSlide
            style={{ height: "400px", backgroundColor: "lightblue" }}
          >
            <Image src={Imagem1} alt=""/>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "400px", backgroundColor: "lightblue" }}
          >
            <Image src={Imagem2} alt=""/>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "400px", backgroundColor: "lightblue" }}
          >
            <Image src={Imagem3} alt=""/>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "400px", backgroundColor: "lightblue" }}
          >
            <Image src={Imagem4} alt=""/>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "400px", backgroundColor: "lightblue" }}
          >
            <Image src={Imagem5} alt=""/>
          </SwiperSlide>
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
            <Col>{icon.iconLocation}</Col>
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
              <span>{icon.iconRuler} 149 m²</span>
            </Col>

            <Col>
              <span>{icon.iconCar} 3 vagas</span>
            </Col>

            <Col>
              <span>{icon.iconBed} 4 quartos</span>
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
