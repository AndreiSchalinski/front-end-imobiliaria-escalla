import HeaderSite from "@/components/site-principal/Header";
import SitePrincipalCarouselInformacoesImovel from "@/views/site-principal/SitePrincipalCarouselInformacoesImovel";
import SitePrincipalButtonsApresentacao from "@/views/site-principal/SitePrincipalButtonsApresentacao";
import SitePrincipalImovelInformacoes from "@/views/site-principal/SitePrincipalImovelInformacoes";
import SitePrincipalSobreEdificio from "@/views/site-principal/SitePrincipalSobreEdificio";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";
import { getImoveisAltaProcura } from "@/data/imoveisAltaProcura";
import { getImoveisFrenteAoMar } from "@/data/imoveisFrenteAoMar";
import { getImoveisNaPlanta } from "@/data/imoveisNaPlanta";

const listImoveisDestaques = [
  {
    titulo: "Imóveis com alta procura",
    legenda: "",
    listaCategorias: getImoveisAltaProcura(),
  },
  {
    titulo: "Imóveis frente mar",
    legenda: "Um cenário à altura das suas conquistas.",
    listaCategorias: getImoveisFrenteAoMar(),
  },
  {
    titulo: "Imóveis na planta",
    legenda: "A melhor parte da sua vida já está nos nossos planos.",
    listaCategorias: getImoveisNaPlanta(),
  },
];

export default function Imoveis() {
  return (
    <>
      <HeaderSite />
      <SitePrincipalCarouselInformacoesImovel />
      <SitePrincipalButtonsApresentacao />
      <SitePrincipalImovelInformacoes />
      <SitePrincipalSobreEdificio />
      <SitePrincipalCarouselDestaques
        listImoveisDestaques={listImoveisDestaques}
      />
      <SitePrincipalBlog />
      <SitePrincipalFooter />
    </>
  );
}
