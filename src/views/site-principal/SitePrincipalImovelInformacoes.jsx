"use client";

import { Button } from "@mui/material";
import { getIcon } from "@/assets/icons";
import { useState } from "react";
import CardDescription from "./CardDescription";

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

export default function SitePrincipalImoveisCarousel() {
  const [showFade, setShowFade] = useState(true);

  return (
    <div className="container-site-principal-informacoes-imovel">
      <div
        className={`container-site-principal-informacoes-imovel-cliente .card-description ${
          showFade ? "expanded" : ""
        } `}
      >
        <ul className="container-site-principal-informacoes-imovel-cliente-icones-medidas">
          <li>{getIcon("#83B1C1").iconRuler} 228m²</li>
          <li>{getIcon("#83B1C1").iconShower} 4 suítes</li>
          <li>{getIcon("#83B1C1").iconBed} 4 quartos</li>
          <li>{getIcon("#83B1C1").iconCar} 3 vagas</li>
        </ul>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts">
          <h3>O que você vai encontrar nesse imóvel:</h3>
          {listChecksImovel.map((el) => {
            return (
              <p>
                &nbsp; {getIcon().iconCircleCheck}
                &nbsp; &nbsp;
                {el}
              </p>
            );
          })}
        </div>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts">
          <h3>O que você vai encontrar nesse empreendimento:</h3>
          {listChecksEmpreendimento.map((el) => {
            return (
              <p>
                &nbsp; {getIcon().iconCircleCheck}
                &nbsp; &nbsp;
                {el}
              </p>
            );
          })}
        </div>

        <div className="container-site-principal-informacoes-imovel-cliente-icones-medidas-texts">
          <h3>Sobre este imóvel</h3>

          <p>
            ANDAR ALTO VISTA MAR FINAMENTE MOBILIADO - Apartamento no Edifício
            Alameda Jardins em Balneário Camboriú com 228,00m² privativos, 04
            suítes sendo uma máster com closet, finamente mobiliado pela
            Kitchens, jacuzzi no living, sala de estar, sala de jantar, home
            office, lavabo, cozinha, área de serviço, vista mar e 03 vagas de
            garagem.
          </p>

          <CardDescription />
        </div>
      </div>
      <div className="container-site-principal-informacoes-imovel-cliente receber-informacoes">
        <div className="container-button-preco-informacoes-imoveis">
          <p>R$ 3.200.000,00</p>

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

        <p>Apartamento no Edifício Brava Aikon na Praia Brava. IM23685</p>

        <p>Localização</p>

        <p>5/5 (3 avaliações)</p>

        <Button
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
