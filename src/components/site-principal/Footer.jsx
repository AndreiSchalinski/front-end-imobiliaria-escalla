import { getIcon } from "@/assets/icons";
import Link from "@/assets/Link.png";
import Image from "next/image";

export default function SitePrincipalFooter() {
  return (
    <>
      <div className="container-site-principal-footer">
        <div className="container-site-principal-footer-row1">
          <ul>
            <li>
              <h3>Horário de funcionamento</h3>
            </li>
            <li>
              <p>{getIcon().iconRelogio} Segunda à Domingo 8h - 19h</p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Imóveis</h3>
            </li>
            <li>
              <p>Imóveis à venda</p>
            </li>
            <li>
              <p>Empreendimentos</p>
            </li>
            <li>
              <p>Favoritos</p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Serviços</h3>
            </li>
            <li>
              <p>Anunciar imóvel</p>
            </li>
            <li>
              <p>Encontre meu imóvel</p>
            </li>
            <li>
              <p>Como comprar</p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Institucional</h3>
            </li>
            <li>
              <p>Quem somos</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
            <li>
              <p>Trabalhe conosco</p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Redes sociais</h3>
            </li>
            <li>
              <p>
                {getIcon().iconInstagran} {getIcon().iconFacebook}
                {getIcon().iconLinkedin} {getIcon().iconWhatsBackground}
              </p>
            </li>

            <li style={{marginTop:30}}>
              <h3>Contato</h3>
            </li>
            <li>
              <p>{getIcon().iconWhats} (47) 9 9999 - 9999</p>
            </li>
            <li>
              <p>{getIcon().iconTelefone} (47) 9999 - 9999</p>
            </li>
            <li>
              <p>{getIcon().iconEmail} contato@escallaimoveis.com.br</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-barra-footer">
        <ul>
          <li>
            <h1>ESCALLA</h1>
          </li>
          <li>Escalla Imóveis | CRECI 5790 - J</li>
        </ul>

        <ul>
          <li>Acessar a área do corretor</li>
          <li>
            <Image src={Link} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
