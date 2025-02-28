import CarouselGridImoveis from "@/components/site-principal/CarouselGridImoveis";

export default function SitePrincipalSobreEdificio() {
  return (
    <>
      <div className="container-site-principal-imoveis-informacoes-edificios">
        <div className="container-site-principal-imoveis-informacoes-edificios-detalhes">
          <h1>Sobre o Edifício Brava Aikon</h1>
          <p>O que você vai encontrar:</p>
          <p>
            Playground, Salão de festas, Salão de jogos, Espaço Fitness, Espaço
            Gourmet, Solarium
          </p>
          <div>
            <ul>
              <li>
                <p>3 ou 4 Dormitórios</p>
              </li>
              <li>
                <p>3 ou 4 Suítes</p>
              </li>
              <li>
                <p>de 160.21m² a 276m²</p>
              </li>
              <li>
                <p>2 ou 3 vagas de garagem</p>
              </li>
              <li>
                <p>3 Unidades disponíveis</p>
              </li>
              <li>
                <p>Carlos Alberto Niehus 82, Praia Brava - SC</p>
              </li>
              <li>
                <a href="">Conheça o edifício</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-site-principal-imoveis-informacoes-edificios-detalhes">
          <CarouselGridImoveis />
        </div>
      </div>
    </>
  );
}
