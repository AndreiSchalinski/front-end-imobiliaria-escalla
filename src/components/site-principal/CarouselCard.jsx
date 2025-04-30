import { openFacyboxImages } from "@/services/fancybox.service";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getIcon } from "@/assets/icons";

export default function SiteCardCarousel({ imovel }) {

  const redirectToImoveis = (imovel) => {
    window.location.href = `/imoveis/${imovel.id}`;
  };

  const fazerLista = () => {
    return imovel.caracteristicas.split(",").map((item) => item.trim());
  };

  const getImageSrc = (img) => {
    return `data:image/jpeg;base64,${img}`;
  };

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
          {fazerLista().map((el, i) => {
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
          {imovel.imagens.map((image, index) => {
            return (
              <SwiperSlide key={index} style={{ backgroundColor: "lightblue" }}>
                <img
                  src={image.url}
                  alt=""
                  style={{ objectFit: "cover" }}
                  layout="intrinsic"
                  onClick={(e) => {
                    e.preventDefault();
                    openFacyboxImages(imovel.imagens, index);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="card-imove-legendas">
          <div className="card-imove-legendas-1">
            {getIcon().iconLocation} <p>{imovel?.localizacao}</p>
          </div>

          <div className="card-imove-legendas-5">
            {imovel?.tituloAnuncio} &nbsp;{" "}
            <span style={{color:'#83B1C1', fontWeight:'bold'}}>{imovel.imovelCod}</span>
          </div>

          <ul className="card-imove-legendas-3">
            <li>
              <p>
                {getIcon().iconRuler}&nbsp;&nbsp;
                {imovel.metragemApartamento} m²
              </p>
            </li>

            <li>
              <p>
                {getIcon().iconCar}&nbsp;&nbsp;{imovel.qtdVagasGaragem} vagas
              </p>
            </li>

            <li>
              <p>
                {getIcon().iconBed}&nbsp;&nbsp;{imovel.qtdDormitorios} quartos
              </p>
            </li>
          </ul>

          <div className="card-imove-legendas-4">
            <p> {imovel.preco}</p>
          </div>

          <ul style={{ padding: "10px 10px" }}>
            <li style={{ width: "100%", display: "flex" }}>
              <div style={{ flexGrow: 1 }}></div>

              <Button
                variant="contained"
                sx={{
                  borderRadius: 20,
                  background: "#cfd8fd",
                  fontWeight: "bold",
                  padding: "3px 20px",
                  fontSize: 15,
                  color: "#0057b8",
                  border: "none",
                  letterSpacing: "2px",
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "none",
                    color: "rgb(74, 199, 240)",
                    transition: "0.3s",
                  },
                }}
                onClick={() => redirectToImoveis(imovel)}
              >
                Ver detalhes
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
