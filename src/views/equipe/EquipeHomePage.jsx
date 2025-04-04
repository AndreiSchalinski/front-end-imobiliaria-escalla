import Image from "next/image";
import ImgEquipe from "@/assets/equipe/Section.png";
import { Button } from "@mui/material";

export default function EquipeHomePage() {
  return (
    <div className="container-equipe-home">
      <ul className="container-links-equipe-home">
        <li>
          <p className="container-links-equipe-home-title">
            A imobiliária mais alto-astral do litoral catarinense
          </p>
        </li>
        <li>
          <p className="container-links-equipe-home-legenda">Conheça a história da Escalla</p>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              width: 120,
              height: 50,
              fontSize: 14,
              textTransform: "none",
              fontFamily: '"Sora", serif',
              letterSpacing: 1,
              marginTop: 3,
              background:'#0057B8'
            }}
          >
            Saiba mais
          </Button>
        </li>
      </ul>
      <Image src={ImgEquipe} alt="" layout="intrinsic" />
    </div>
  );
}
