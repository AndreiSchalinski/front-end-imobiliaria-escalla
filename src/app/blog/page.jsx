import HeaderSite from "@/components/site-principal/Header";
import BlogHomePage from "@/views/blog/BlogHomePage";
import BlogDividirPage from "@/views/blog/BlogDividirPage";
import BlogArtigosPage from "@/views/blog/BlogArtigosPage";

export default function Home() {
  return (
    <>
      <HeaderSite />
      <BlogHomePage />
      <BlogDividirPage />
      <BlogArtigosPage />
    </>
  );
}
