import BlogCardArtigo from "@/components/blog/BlogCardArtigo";
import ImgArtigo from "@/assets/imgs-blog/Link.png";

export default function BlogArtigosPage() {
  return (
    <div className="container-blog-artigos">
      <p>Artigos recentes</p>
      <div className="container-blog-artigos-cards">
        <BlogCardArtigo
          img={ImgArtigo}
          titulo={"Auris Residenze: a nova era da construção sdofsodnfosdinfosdasdasda asdasdasdasdasd"}
          legenda={""}
        />
        <BlogCardArtigo
          img={ImgArtigo}
          titulo={
            "Senna Tower em Balneário Camboriú o sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          titulo={
            "Roteiro perfeito para encontrar o seu paraís sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
      </div>
    </div>
  );
}
