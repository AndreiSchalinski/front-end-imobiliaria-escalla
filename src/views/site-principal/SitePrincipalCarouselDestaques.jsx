import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";

export default function SitePrincipalCarouselDestaques({
  listImoveisDestaques,
}) {
  return (
    <>
      {listImoveisDestaques.map((el) => (
        <CarouselDestaques categoriaDestaque={el.titulo} legenda={el.legenda} />
      ))}
    </>
  );
}
