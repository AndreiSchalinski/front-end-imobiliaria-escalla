import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";

export default function SitePrincipalCarouselDestaques({
  listCategoriasImoveis,
}) {
  return (
    <>
      {listCategoriasImoveis.map((categoriaImovel, i) => (
        <CarouselDestaques key={i} categoria={categoriaImovel} />
      ))}
    </>
  );
}
