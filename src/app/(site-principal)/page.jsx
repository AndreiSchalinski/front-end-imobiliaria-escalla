
"use client"

import SitePrincipalHomePage from "@/views/site-principal/SitePrincipalHomePage";
import SitePrincipalDestaques from "@/views/site-principal/SitePrincipalDestaques";
import SitePrincipalCarouselDestaques from "@/views/site-principal/SitePrincipalCarouselDestaques";
import SitePrincipalConsultoria from "@/views/site-principal/SitePrincipalConsultoria";
import SitePrincipalConsultores from "@/views/site-principal/SitePrincipalConsultores";
import SitePrincipalDepoimentos from "@/views/site-principal/SitePrincipalDepoimentos";
import SitePrincipalBlog from "@/views/site-principal/SitePrincipalBlog";
import SitePrincipalFooter from "@/components/site-principal/Footer";
import HeaderSite from "@/components/site-principal/Header";
import { getImoveisAltaProcura } from "@/data/imoveisAltaProcura";
import { getImoveisFrenteAoMar } from "@/data/imoveisFrenteAoMar";
import { getImoveisNaPlanta } from "@/data/imoveisNaPlanta";
import { getImoveisDestaques } from "@/services/service.imoveis.destaque";
import { useEffect } from "react";

const listImoveisDestaques = [
  {
    titulo: "Imóveis com alta procura",
    legenda: "",
    listaCategorias: getImoveisAltaProcura(),
  },
  {
    titulo: "Imóveis frente mar",
    legenda: "Um cenário à altura das suas conquistas.",
    listaCategorias: getImoveisFrenteAoMar(),
  },
  {
    titulo: "Imóveis na planta",
    legenda: "A melhor parte da sua vida já está nos nossos planos.",
    listaCategorias: getImoveisNaPlanta(),
  },
];

export default function Home() {
  
  useEffect(() => {
    const fetchData = async () => {
      await getImoveisDestaques();
    };
  
    fetchData();
  }, []);

  return (
    <>
      <HeaderSite />
      <SitePrincipalHomePage />
      <SitePrincipalDestaques />
      <SitePrincipalCarouselDestaques
        listImoveisDestaques={listImoveisDestaques}
      />
      <SitePrincipalConsultoria />
      <SitePrincipalConsultores />
      <SitePrincipalDepoimentos />
      <SitePrincipalBlog />
      <SitePrincipalFooter />
    </>
  );
}
