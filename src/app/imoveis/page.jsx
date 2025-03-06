import HeaderSite from "@/components/site-principal/Header";
import SitePrincipalButtonsApresentacao from "@/views/site-principal/SitePrincipalButtonsApresentacao";
import SitePrincipalImovelInformacoes from "@/views/site-principal/SitePrincipalImovelInformacoes";
import SitePrincipalSobreEdificio from "@/views/site-principal/SitePrincipalSobreEdificio";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";

const listImoveisDestaques = [
  { titulo: "Imóveis com alta procura", legenda: "" },
  {
    titulo: "Imóveis frente mar",
    legenda: "Um cenário à altura das suas conquistas.",
  },
  {
    titulo: "Imóveis na planta",
    legenda: "A melhor parte da sua vida já está nos nossos planos.",
  },
];

export default function Imoveis() {
  return (
    <>
      <HeaderSite />
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
