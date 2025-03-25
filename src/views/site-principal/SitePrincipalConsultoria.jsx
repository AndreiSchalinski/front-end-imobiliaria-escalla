import ImgConsultoriaImovelProprio from "@/assets/consultoria-imovel-proprio.png";
import ImgConsultoriaCorretor from "@/assets/consultoria-corretor.png";
import Image from "next/image";
import { Button } from "@mui/material";

export default function SitePrincipalConsultoria() {
  return (
    <div className="container-site-principal-consultorias">
      <div className="container-site-principal-consultorias-vantagens">
        <Image
          src={ImgConsultoriaImovelProprio}
          alt=""
          style={{ position: "absolute" }}
          layout="intrinsic"
          width={710}
          height={271}
        />
        <Button
          variant="contained"
          className="button-consultores site-fifth"
          sx={{
            background: "white",
            textTransform: "none",
            width: 343,
            height: 56,
            fontSize: 16,
            color: "black",
            margin: "15px 15px",
          }}
        >
          Confira nossas vantagens
        </Button>
      </div>
      <div className="container-site-principal-consultorias-corretores">
        <Image
          src={ImgConsultoriaCorretor}
          alt=""
          style={{ position: "absolute" }}
          layout="intrinsic"
          width={710}
          height={271}
        />
        <Button
          variant="contained"
          className="button-consultores site-fifth"
          sx={{
            background: "white",
            textTransform: "none",
            width: 343,
            height: 56,
            fontSize: 16,
            color: "black",
            margin: "15px 15px",
          }}
        >
          Receba uma consultoria
        </Button>
      </div>
    </div>
  );
}
