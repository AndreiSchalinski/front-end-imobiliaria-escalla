import Image from "next/image";
import ImgArtigoHome from "@/assets/imgs-artigo/image-artigo.png";
import ImgArtigoSection from "@/assets/imgs-artigo/image-artigo-section.png";

const artigo = {
  titulo:
    "Auris Residenze: a nova era da construção sustentável em Balneário Camboriú",
  imagemCapa: ImgArtigoHome,
  introducao: {
    titulo: "",
    imagem: ImgArtigoSection,
    textos: [
      `Auris Residenze, o novo empreendimento do Fischer Group, em Balneário
        Camboriú, é um convite para respirar ar puro no futuro. Desenvolvido em
        parceria com o renomado escritório de arquitetura italiano Archea
        Associati, o “Edifício Árvore” promete revolucionar o mercado
        imobiliário da região.`,
      `Inspirado na natureza, o projeto do Auris Residenze traz um novo
        conceito de prédio residencial, envolvendo saúde e bem estar de uma
        forma integrativa e em total conexão com a natureza. Apelidado de
        “Edifício Árvore”, o projeto foi cuidadosamente elaborado para minimizar
        o impacto ambiental e proporcionar aos moradores uma experiência de vida
        saudável e harmoniosa.`,
      `Com tecnologias inovadoras, o empreendimento garante um ambiente interno
        com ar mais puro do que o externo, graças a sistemas de filtragem e
        renovação do ar. Além disso, o uso de energia solar e a coleta e
        tratamento de água da chuva contribuem para a redução do consumo de
        recursos naturais.`,
      `O design do Auris Residenze, assinado pelo arquiteto italiano Marco
        Cassamonti, é um convite à tranquilidade e ao bem-estar. A fachada em
        concreto aparente pigmentado e brises, além de proporcionar um visual
        moderno e elegante, contribui para a eficiência energética do edifício,
        pois reduz a influência solar, proporcionando conforto térmico e
        dificultando a necessidade do uso de ar condicionado em até 42%.`,
      `Os apartamentos, com metragens generosas e pé-direito duplo, oferecem um
        ambiente amplo e arejado, perfeito para quem busca conforto e
        sofisticação. A personalização dos espaços, com a consultoria de Marco
        Cassamonti, permite que cada morador crie um ambiente único e exclusivo.`,
    ],
  },
  sections: [
    { titulo: "Os diferenciais do Auris Residenze:", imagem: "", texto: "" },
  ],
};

export default function ArtigoHomePage() {

  return (
    <div className="container-home-artigo">
      <p>{artigo.titulo}</p>

      <Image src={artigo.imagemCapa} alt="" layout="instrinsic" />

      <div className="border-div"></div>

      <div>
        <iframe
          src={'http://localhost:3001/'}
          width="100%"
          height="600"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
