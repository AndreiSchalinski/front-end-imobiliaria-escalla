import HeaderSite from "@/components/site-principal/Header";
import { getArtigo } from "@/services/service.artigos";
import ArtigoFolhaPage from "@/views/artigo/ArtigoFolhaPage";

export default async function Home({ params }) {
  const { id } = params;
  const { data: artigo } = await getArtigo(id); 

  return (
    <>
      <HeaderSite />
      <ArtigoFolhaPage artigo={artigo} />
    </>
  );
}
