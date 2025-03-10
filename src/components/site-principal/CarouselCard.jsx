"use client"; // For Next.js App Router (if needed)

import { openFacyboxImages } from "@/services/service.fancybox";
import { Row, Col, Card, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { getIcon } from "@/assets/icons";
import { Box } from "@mui/material";

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
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-7-1723828625.webp",
];

export default function SiteCardCarousel() {
  return (
    <div style={{ width: 450 }}>
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
          className="mySwiper"
          onClick={(e) => {
            e.preventDefault();
            openFacyboxImages(_, index);
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide
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
