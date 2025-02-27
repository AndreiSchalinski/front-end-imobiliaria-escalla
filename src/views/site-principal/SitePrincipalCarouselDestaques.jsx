import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";

export default function SitePrincipalCarouselDestaques() {
  return (
    <>
      <CarouselDestaques categoriaDestaque={'Imóveis com alta procura'} legenda={''}/>
      <CarouselDestaques categoriaDestaque={'Imóveis frente mar'} legenda={'Um cenário à altura das suas conquistas.'}/>
      <CarouselDestaques categoriaDestaque={'Imóveis na planta'} legenda={'A melhor parte da sua vida já está nos nossos planos.'}/>
    </>
  );
}
