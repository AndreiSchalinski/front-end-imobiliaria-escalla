import SitePrincipalHomePage from "@/views/site-principal/SitePrincipalHomePage";
import SitePrincipalDestaques from "@/views/site-principal/SitePrincipalDestaques";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalConsultoria from "@/views/site-principal/SitePrincipalConsultoria";
import SitePrincipalConsultores from "@/views/site-principal/SitePrincipalConsultores";
import SitePrincipalDepoimentos from "@/views/site-principal/SitePrincipalDepoimentos";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";
import HeaderSite from "@/components/site-principal/Header";

export default function Home() {
  return (
    <>
      <HeaderSite/>
      <SitePrincipalHomePage />
      <SitePrincipalDestaques />
      <SitePrincipalCarouselDestaques />
      <SitePrincipalConsultoria />
      <SitePrincipalConsultores />
      <SitePrincipalDepoimentos />
      <SitePrincipalBlog />
      <SitePrincipalFooter />
    </>
  );
}
