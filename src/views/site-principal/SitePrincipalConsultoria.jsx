import ImgConsultoriaImovelProprio from "@/assets/consultoria-imovel-proprio.png";
import ImgConsultoriaCorretor from "@/assets/consultoria-corretor.png";

export default function SitePrincipalConsultoria() {
  return (
    <div className="container-site-principal-consultorias">
      <div
        className="container-site-principal-consultorias-vantagens"
        style={{
          backgroundImage: `url(${ImgConsultoriaImovelProprio.src})`,
        }}
      >
        <div className="button-consultores site-fifth">
          <p>Confira nossas vantagens</p>
        </div>
      </div>
      <div
        className="container-site-principal-consultorias-corretores"
        style={{
          backgroundImage: `url(${ImgConsultoriaCorretor.src})`,
        }}
      >
        <div className="button-consultores site-fifth">
          <p>Receba uma consultoria</p>
        </div>
      </div>
    </div>
  );
}
