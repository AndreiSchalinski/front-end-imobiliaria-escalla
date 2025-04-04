import HeaderSite from "@/components/site-principal/Header";
import EquipeHomePage from "@/views/equipe/EquipeHomePage";
import EquipeServicosPage from "@/views/equipe/EquipeServicosPage";
import EquipeFeedbacksPage from "@/views/equipe/EquipeFeedbacksPage";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalConsultores from "@/views/site-principal/SitePrincipalConsultores";
import SitePrincipalFooter from "@/components/site-principal/Footer";

export default function Home() {
  return (
    <>
      <HeaderSite />
      <EquipeHomePage />
      <EquipeServicosPage />
      <EquipeFeedbacksPage />
      <SitePrincipalConsultores />;
      <div style={{margin:'100px 0'}}>
        <SitePrincipalBlog />
      </div>
      <SitePrincipalFooter />
    </>
  );
}
