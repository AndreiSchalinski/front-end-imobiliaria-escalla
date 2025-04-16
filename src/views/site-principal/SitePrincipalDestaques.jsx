import Image from "next/image";
import ImagemDestaque from "@/assets/image-destaque.png";
import Ratings from "@/components/site-principal/Ratings";
import { getIcon } from "@/assets/icons";
import { imovelDestaque } from "@/data/imovelDestaque";

export default function Destaques({imDestaque}) {
  return (
    <section className="container-site-principal-destaques">
      <h1>Imóveis em destaque</h1>
      <div className="container-site-principal-informacoes-destaques">
        <div className="container-site-principal-lista-informacoes">
          <Image
            src={ImagemDestaque}
            alt=""
            height={655.53}
            width={588}
            layout="intrinsic"
          />
        </div>
        <div className="container-site-principal-lista-informacoes">
          <ul>
            <li>
              <p>
                {getIcon("#000000").iconBed}&nbsp;&nbsp;
                {imDestaque.quantidadeDormitorios}
              </p>
            </li>
            <li>
              <p>
                {getIcon("#000000").iconShower}&nbsp;&nbsp;
                {imDestaque.quantidadeSuites}
              </p>
            </li>
            <li>
              <p>
                {getIcon("#000000").iconRuler}&nbsp;&nbsp;de{" "}
                {imDestaque.metragemApartamentos}
              </p>
            </li>
            <li>
              <p>
                {getIcon("#000000").iconCar}&nbsp;&nbsp;
                {imDestaque.vagasGaragemMin} ou{" "}
                {imDestaque.vagasGaragemMax} vagas de garagem
              </p>
            </li>
            <li>
              <p>
                {getIcon("#000000").iconLocation}&nbsp;&nbsp;
                {imDestaque.localizacao}
              </p>
            </li>
          </ul>

          <ul className="container-site-principal-lista-informacoes-avaliacoes">
            <li>
              <Ratings />
            </li>
          </ul>

          <ul>
            <li>
              <p>{imovelDestaque.legenda[0]}</p>
            </li>
            <li>
              <p>{imovelDestaque.legenda[1]}</p>
            </li>
          </ul>

          <ul className="container-site-principal-lista-informacoes-avaliacoes-exibirmais">
            <li>
              <p>Exibir Mais+</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
