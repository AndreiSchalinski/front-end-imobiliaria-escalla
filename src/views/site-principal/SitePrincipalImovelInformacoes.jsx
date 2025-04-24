"use client";

import { Button } from "@mui/material";
import { getIcon } from "@/assets/icons";
import Ratings from "@/components/site-principal/Ratings";
import CardDescription from "../../components/site-principal/CardDescription";

const listChecksImovel = [
  "Cozinha",
  "integrada",
  "Área de serviço",
  "Suíte máster",
  "Banheira de hidromassagem",
  "Vista mar",
  "Sacada integrada",
  "Espaço gourmet",
  "Lavabo",
  "Living integrado",
  "Quadra mar",
];

const listChecksEmpreendimento = [
  "Piscina",
  "Playground",
  "Salão de festas",
  "Salão de jogos",
  "Brinquedoteca",
  "Espaço",
  "Fitness",
  "Espaço",
  "Gourmet",
  "Cinema",
  "Sala de Massagem",
  "Spa",
  "Sala de descanso",
  "Sauna úmida",
];

export default function SitePrincipalImoveisCarousel({ imovel }) {
  const caracteristicasList = () => {
    return imovel.caracteristicas.split(",").map((item) => item.trim());
  };

  const caracteristicasEmpreendimento = () => {
    return imovel.empreendimento.opcoesLazer
      .split(",")
      .map((item) => item.trim());
  };

  return (
    <div className="container-site-principal-informacoes-imovel">
      <div className="container-site-principal-informacoes-imovel-cliente">
        <ul className="container-site-principal-informacoes-imovel-cliente-icones-medidas">
          <li>
            {getIcon("#83B1C1").iconRuler} {imovel.metragemApartamento}m²
          </li>
          <li>
            {getIcon("#83B1C1").iconShower} {imovel.qtdSuites} suítes
          </li>
          <li>
            {getIcon("#83B1C1").iconBed} {imovel.qtdDormitorios} quartos
          </li>
          <li>
            {getIcon("#83B1C1").iconCar} {imovel.qtdVagasGaragem} vagas
          </li>
        </ul>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts">
          <h3>O que você vai encontrar nesse imóvel:</h3>
          {caracteristicasList().map((el, index) => {
            return (
              <p key={index}>
                &nbsp; {getIcon().iconCircleCheck}
                &nbsp; &nbsp;
                {el}
              </p>
            );
          })}
        </div>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts">
          <h3>O que você vai encontrar nesse empreendimento:</h3>
          {caracteristicasEmpreendimento().map((el, index) => {
            return (
              <p key={index}>
                &nbsp; {getIcon().iconCircleCheck}
                &nbsp; &nbsp;
                {el}
              </p>
            );
          })}
        </div>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts-container-2">
          <h3>Sobre este imóvel</h3>

          <p>{imovel.informacoesGerais}</p>

          <CardDescription />
        </div>
      </div>
      <div className="container-site-principal-informacoes-imovel-cliente receber-informacoes">
        <div className="container-button-preco-informacoes-imoveis">
          <p>{imovel.preco}</p>

          <Button
            variant="contained"
            sx={{
              background: "#FCE3E5",
              textTransform: "none",
              width: "240px",
              height: "56px",
              fontSize: 14,
              color: "#F5858D",
              fontWeight: "bold",
              borderRadius: 50,
            }}
          >
            {getIcon().iconBells} &nbsp; Condições de pagamento
          </Button>
        </div>

        <div style={{ display: "flex" }}>
          <p>{imovel.tituloAnuncio} &nbsp;</p>
          <p style={{color:'#83B1C1'}}>{imovel.imovelCod}</p>
        </div>

        <p style={{ display: "flex", margin: "20px 0 20px 0" }}>
          {getIcon().iconLocation} {imovel.localizacao}
        </p>

        <div style={{ margin: "30px 0 30px 0" }}>
          <Ratings colorRating={"#0057B8"} />
        </div>

        <Button
          className="button-informacoes site-fift"
          variant="contained"
          sx={{
            background: "#0057B8",
            textTransform: "none",
            width: "100%",
            height: "56px",
            fontSize: 16,
          }}
        >
          Receber informações
        </Button>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            width: "100%",
            height: "56px",
            fontSize: 16,
            marginTop: 2,
            border: "1px solid #3CC359",
            color: "#3CC359",
            fontWeight: "bold",
          }}
        >
          {getIcon("#3CC359").iconWhats} &nbsp; Condições de pagamento
        </Button>
      </div>
    </div>
  );
}
