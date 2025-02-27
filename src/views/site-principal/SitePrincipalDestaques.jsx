import Image from "next/image";
import ImagemDestaque from "@/assets/image-destaque.png";

export default function Destaques() {
  return (
    <section className="container-site-principal-destaques">
      <h1>Destaques</h1>
      <div className="container-site-principal-informacoes-destaques">
        <div className="container-site-principal-lista-informacoes">
          <Image src={ImagemDestaque} alt=""/>
        </div>
        <div className="container-site-principal-lista-informacoes">
          <ul>
            <li>
              <p>2 ou 4 Dormitórios</p>
            </li>
            <li>
              <p>2 ou 4 Suítes</p>
            </li>
            <li>
              <p>de 147m a 328m</p>
            </li>
            <li>
              <p>2 ou 4 vagas de garagem</p>
            </li>
            <li>
              <p>3140 202, Balneário Camboriú - SC</p>
            </li>
          </ul>

          <ul>
            <li>4.5/5(10 avaliações)</li>
            <li>Estrelinhas</li>
          </ul>

          <ul>
            <li>
              <p>
                O edifício Sun Beach em Balneário Camboriú é o empreendimento
                ideal para você que quer comprar seu apartamento na planta. Com
                localização privilegiada no Camboriú você e sua família vão
                estar sempre perto de tudo.
              </p>
            </li>
            <li>
              <p>
                Além das várias opções de comércios e serviços que vão facilitar
                muito o dia a dia da sua família, o empreendimento fica
                localizado a poucos metros do mar da Praia Central . Dessa
                forma, além da praticidade para fazer suas tarefas diárias, você
                ainda vai estar perto das melhores opções de lazer.
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Exibir Mais+</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
