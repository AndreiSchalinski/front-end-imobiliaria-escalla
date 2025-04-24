import CarouselLargeImovel from "@/components/site-principal/CarouselLargeImovel";

export default function SitePrincipalCarouselInformacoesImovel({ imovel }) {
  return (
    <div className="container-carousel-large-imovels">
      <CarouselLargeImovel imovel={imovel} />
    </div>
  );
}
