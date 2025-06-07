import CarouselDestaques from "@/components/site-principal/CarouselCategoriaDestaque";
import { getImoveisDestaques } from "@/services/service.imoveis.destaque";
import { useEffect, useState } from "react";

export default function SitePrincipalCarouselDestaques() {
  const [listCategorias, setListCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respImoveis = await getImoveisDestaques();
      setListCategorias(respImoveis.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {listCategorias.map((categoriaImovel, i) => (
        <CarouselDestaques key={i} categoria={categoriaImovel} />
      ))}
    </>
  );
}
