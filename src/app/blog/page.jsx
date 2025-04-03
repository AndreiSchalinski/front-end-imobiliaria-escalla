import HeaderSite from "@/components/site-principal/Header";
import BlogHomePage from "@/views/blog/BlogHomePage";
import BlogDividirPage from "@/views/blog/BlogDividirPage";
import BlogArtigosPage from "@/views/blog/BlogArtigosPage";
import BlogArtigosMaisLidos from "@/views/blog/BlogArtigosMaisLidos";
import SitePrincipalFooter from "@/components/site-principal/Footer";

export default function Home() {
  return (
    <>
      <HeaderSite />
      <BlogHomePage />
      <BlogDividirPage />
      <BlogArtigosPage />
      <BlogArtigosMaisLidos />
      <SitePrincipalFooter />
    </>
  );
}
