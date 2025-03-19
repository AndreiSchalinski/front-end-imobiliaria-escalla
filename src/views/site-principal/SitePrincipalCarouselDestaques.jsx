import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";

export default function SitePrincipalCarouselDestaques({
  listImoveisDestaques,
}) {
  return (
    <>
      {listImoveisDestaques.map((imovel, i) => (
        <CarouselDestaques
          key={i}
          categoriaDestaque={imovel.titulo}
          legenda={imovel.legenda}
          listaCategorias={imovel.listaCategorias}
        />
      ))}
    </>
  );
}
