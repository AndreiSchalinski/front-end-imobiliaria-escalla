import { Button } from "@mui/material";
import Image from "next/image";
import ImgEquipe from "@/assets/equipe/equipe.png";

export default function EquipeServicosPage() {
  return (
    <div className="container-equipe-servicos">
      <Image src={ImgEquipe} alt="" layout="" width={521} height={347.33} />
      <ul className="container-equipe-servicos-informacoes">
        <li>
          <p className="container-equipe-servicos-informacoes-title">
            Conheça a maior imobiliária de Santa Catarina!
          </p>
        </li>
        <li>
          <p className="container-equipe-servicos-informacoes-texts">
            A história da Felicità começa com uma parceria de sucesso: Brayann
            Germano — referência em Gestão de Equipes no Mercado Imobiliário — e
            Jeferson Tilchlher — corretor experiente e amplamente reconhecido.
          </p>
        </li>
        <li>
          <p className="container-equipe-servicos-informacoes-texts">
            Pouco tempo depois, a chegada de Fernando Menon — especialista em
            Gestão de tráfego e estratégias de marketing imobiliário — e Bruna
            Eleutério – corretora de imóveis especialista em lançamentos,
            permitiu que a Felicità desse um grande passo para o sucesso, a
            abertura de uma sala em um dos melhores locais de BC.
          </p>
        </li>
        <li>
          <p className="container-equipe-servicos-informacoes-texts">
            A partir desse momento, nossa imobiliária passou a crescer de forma
            exponencial, tornando-se referência no mercado de Santa Catarina.
            Atualmente, funcionamos com três lojas — duas em BC e uma em Itajaí
            — para atender cada vez melhor às suas necessidades.
          </p>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              width: 160,
              height: 50,
              fontSize: 13,
              textTransform: "none",
              fontFamily: '"Sora", serif',
              letterSpacing: 1,
              marginTop: 3,
              background: "#FFC24B",
              color: "black",
            }}
          >
            Nossos serviços
          </Button>
        </li>
      </ul>
    </div>
  );
}
