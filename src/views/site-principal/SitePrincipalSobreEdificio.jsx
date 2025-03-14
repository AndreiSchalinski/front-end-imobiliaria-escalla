import CarouselGridImoveis from "@/components/site-principal/CarouselGridImoveis";
import { getIcon } from "@/assets/icons";
import { cloneElement } from "react";

const listCaracteristicas = [
  <p>{getIcon().iconBed}&nbsp; 3 ou 4 Dormitórios &nbsp; </p>,
  <p>{getIcon().iconShower}&nbsp; 3 ou 4 Suítes &nbsp; </p>,
  <p>{getIcon().iconRuler}&nbsp; de 160.21m² a 276m² &nbsp; </p>,
  <p>{getIcon().iconCar}&nbsp; 2 ou 3 vagas de garagem &nbsp; </p>,
  <p>{getIcon("#5783EB").iconHome}&nbsp; 3 Unidades disponíveis &nbsp; </p>,
  <p>
    {getIcon().iconLocation}&nbsp; Carlos Alberto Niehus 82, Praia Brava - SC
    &nbsp;{" "}
  </p>,
];

export default function SitePrincipalSobreEdificio() {
  return (
    <>
      <div className="container-site-principal-imoveis-informacoes-edificios">
        <div className="container-site-principal-imoveis-informacoes-edificios-detalhes">
          <h1>Sobre o Edifício Brava Aikon</h1>
          <p className="container-site-principal-imoveis-informacoes-edificios-detalhes-text-short">
            O que você vai encontrar:
          </p>
          <p className="container-site-principal-imoveis-informacoes-edificios-detalhes-text-short-2">
            Playground, Salão de festas, Salão de jogos, Espaço Fitness, Espaço
            Gourmet, Solarium
          </p>
          <div className="container-site-principal-imoveis-informacoes-edificios-detalhes-list-caracteristicas">
            {listCaracteristicas.map((el, i) => {
              return (
                <div key={i}>
                  {cloneElement(el, {
                    className:
                      "container-site-principal-imoveis-informacoes-edificios-detalhes-list-caracteristicas-p",
                  })}
                </div>
              );
            })}
          </div>
          <div>
            <span>Conheça o edifício</span>
          </div>
        </div>
        <div className="container-site-principal-imoveis-informacoes-edificios-detalhes">
          <CarouselGridImoveis />
        </div>
      </div>
    </>
  );
}
