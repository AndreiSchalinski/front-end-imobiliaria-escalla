import { Button } from "@mui/material";
import { getIcon } from "@/assets/icons";

export default function SitePrincipalImoveisCarousel() {
  return (
    <div className="container-site-principal-informacoes-imovel">
      <div className="container-site-principal-informacoes-imovel-cliente">
        <ul className="container-site-principal-informacoes-imovel-cliente-icones-medidas">
          <li>Ícone</li>
          <li>Ícone</li>
          <li>Ícone</li>
          <li>Ícone</li>
          <li>Ícone</li>
        </ul>

        <div>
          <h3>O que você vai encontrar nesse imóvel:</h3>
          <p>
            Cozinha | integrada | Área de serviço | Suíte máster | Banheira de
            hidromassagem | Vista mar | Sacada integrada | Espaço gourmet |
            Lavabo Living integrado | Quadra mar
          </p>
        </div>

        <div>
          <h3>O que você vai encontrar nesse empreendimento:</h3>
          <p>
            Piscina | Playground | Salão de festas | Salão de jogos |
            Brinquedoteca | Espaço | Fitness | Espaço | Gourmet | Cinema | Sala
            de Massagem | Spa Sala de descanso | Sauna úmida
          </p>
        </div>

        <div>
          <h3>Sobre este imóvel</h3>
          <p>
            CONDIÇÃO ESPECIAL - Apartamento Duplex no Edifício Magnifique Tower
            em Balneário Camboriú com 227m² privativos, 03 suítes + 01 suíte
            master com banheira de hidromassagem, lavabo, living integrado com
            sala de estar e sala de jantar, amplo mezanino, cozinha, sacada
            integrada com espaço gourmet, área de serviço e 03 vagas de garagem.
          </p>
          <a href="">Exibir Mais +</a>
        </div>
      </div>
      <div className="container-site-principal-informacoes-imovel-cliente receber-informacoes">
        <div>
          <p>
            <p>R$ 3.200.000,00</p>
          </p>

          <Button
            variant="contained"
            sx={{
              background: "#FCE3E5",
              textTransform: "none",
              width: "80%",
              height: "56px",
              fontSize: 16,
              color: "#F5858D",
              fontWeight: "bold",
              borderRadius:50
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
