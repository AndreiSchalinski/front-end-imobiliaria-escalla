import HeaderSite from "@/components/site-principal/Header";
import SitePrincipalCarouselInformacoesImovel from "@/views/site-principal/SitePrincipalCarouselInformacoesImovel";
import SitePrincipalButtonsApresentacao from "@/views/site-principal/SitePrincipalButtonsApresentacao";
import SitePrincipalImovelInformacoes from "@/views/site-principal/SitePrincipalImovelInformacoes";
import SitePrincipalSobreEdificio from "@/views/site-principal/SitePrincipalSobreEdificio";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";
import {
  getImoveisDestaques,
  getImovel,
} from "@/services/service.imoveis.destaque";

export default async function ImoveisPage({ params }) {

  const { id } = await params;

  const imovelRes = await getImovel(id);
  const destaquesRes = await getImoveisDestaques();

  return (
    <>
      <HeaderSite />
      <SitePrincipalCarouselInformacoesImovel imovel={imovelRes.data} />
      <SitePrincipalButtonsApresentacao />
      <SitePrincipalImovelInformacoes imovel={imovelRes.data} />
      {imovelRes.data.empreendimento !== null ? (
        <SitePrincipalSobreEdificio
          empreendimento={imovelRes.data.empreendimento}
        />
      ) : (
        ""
      )}
      <SitePrincipalCarouselDestaques
        listCategoriasImoveis={destaquesRes.data}
      />
      <SitePrincipalBlog />
      <SitePrincipalFooter />
    </>
  );
}
