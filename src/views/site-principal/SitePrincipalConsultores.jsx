import Image from "next/image";
import Image1 from "@/assets/Background1.png";
import Image2 from "@/assets/Background2.png";
import Image3 from "@/assets/Background3.png";
import Image4 from "@/assets/Background4.png";
import { getIcon } from "@/assets/icons";

export default function SitePrincipalConsultores() {
  return (
    <div className="container-site-principal-consultores">
      <div className="container-site-principal-consultor">
        <Image src={Image1} alt="" className="container-site-principal-consultor-imagem"/>
        <div className="container-site-principal-consultor-button">
          <p>Anderson</p>
          {getIcon('white').iconSum}
        </div>
      </div>
      <div className="container-site-principal-consultor">
        <Image src={Image2} alt="" className="container-site-principal-consultor-imagem"/>
        <div className="container-site-principal-consultor-button">
          <p>Barbara</p>
          {getIcon('white').iconSum}
        </div>
      </div>
      <div className="container-site-principal-consultor">
        <Image src={Image3} alt="" className="container-site-principal-consultor-imagem"/>
        <div className="container-site-principal-consultor-button">
          <p>Bianca</p>
          {getIcon('white').iconSum}
        </div>
      </div>
      <div className="container-site-principal-consultor">
        <Image src={Image4} alt="" className="container-site-principal-consultor-imagem"/>
        <div className="container-site-principal-consultor-button">
          <p>Brianna</p>
          {getIcon('white').iconSum}
        </div>
      </div>
    </div>
  );
}
