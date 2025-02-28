

import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";

export default function SitePrincipalCarouselDestaques({
  listImoveisDestaques,
}) {
  return (
    <>
      {listImoveisDestaques.map((el,i) => (
        <CarouselDestaques key={i} categoriaDestaque={el.titulo} legenda={el.legenda} />
      ))}
    </>
  );
}
