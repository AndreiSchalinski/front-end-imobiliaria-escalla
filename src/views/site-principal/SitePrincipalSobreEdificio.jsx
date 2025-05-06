import CarouselGridImoveis from "@/components/site-principal/CarouselGridImoveis";
import { getIcon } from "@/assets/icons";
import { cloneElement } from "react";

export default function SitePrincipalSobreEdificio({ empreendimento }) {
  const listCaracteristicas = [
    <p>
      {getIcon().iconBed}&nbsp; {empreendimento.qtdDormitorios} &nbsp;{" "}
    </p>,
    <p>
      {getIcon().iconShower}&nbsp; {empreendimento.qtdSuites} &nbsp;{" "}
    </p>,
    <p>
      {getIcon().iconRuler}&nbsp; {empreendimento.vlrMetragem} &nbsp;{" "}
    </p>,
    <p>
      {getIcon().iconCar}&nbsp; {empreendimento.qtdGaragem} &nbsp;{" "}
    </p>,
    <p>
      {getIcon("#5783EB").iconHome}&nbsp; {empreendimento.unidadesDisponiveis}{" "}
      Unidades disponíveis &nbsp;{" "}
    </p>,
    <p>
      {getIcon().iconLocation}&nbsp; {empreendimento.localizacao}
      &nbsp;{" "}
    </p>,
  ];

  return (
    <>
      <div className="container-site-principal-imoveis-informacoes-edificios">
        <div className="container-site-principal-imoveis-informacoes-edificios-detalhes">
          <h1>Sobre o {empreendimento.nomeEmpreendimento}</h1>
          <p className="container-site-principal-imoveis-informacoes-edificios-detalhes-text-short">
            O que você vai encontrar:
          </p>
          <p className="container-site-principal-imoveis-informacoes-edificios-detalhes-text-short-2">
            {empreendimento.opcoesLazer}
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
          <CarouselGridImoveis listImagens={empreendimento.imagens} />
        </div>
      </div>
    </>
  );
}
