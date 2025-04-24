"use client";

import SitePrincipalHomePage from "@/views/site-principal/SitePrincipalHomePage";
import SitePrincipalDestaques from "@/views/site-principal/SitePrincipalDestaques";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalConsultoria from "@/views/site-principal/SitePrincipalConsultoria";
import SitePrincipalConsultores from "@/views/site-principal/SitePrincipalConsultores";
import SitePrincipalDepoimentos from "@/views/site-principal/SitePrincipalDepoimentos";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";
import HeaderSite from "@/components/site-principal/Header";
import { getImoveisDestaques } from "@/services/service.imoveis.destaque";
import { useEffect, useState } from "react";

export default function Home() {
  const [listCategorias, setListCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getImoveisDestaques();
      setListCategorias(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderSite />
      <SitePrincipalHomePage />
      <SitePrincipalDestaques/>
      <SitePrincipalCarouselDestaques
        listCategoriasImoveis={listCategorias}
      />
      <SitePrincipalConsultoria />
      <SitePrincipalConsultores />
      <SitePrincipalDepoimentos />
      <SitePrincipalBlog />
      <SitePrincipalFooter />
    </>
  );
}
