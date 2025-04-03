import BlogCardArtigo from "@/components/blog/BlogCardArtigo";
import ImgArtigo from "@/assets/imgs-blog/Link.png";
import Button from "@mui/material/Button";

export default function BlogArtigosPage() {
  return (
    <div className="container-blog-artigos">
      <div style={{width:'59.09%'}}>
        <p>Artigos recentes</p>
      </div>
      <div className="container-blog-artigos-cards">
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Balneário Camboriú"}
          titulo={
            "Auris Residenze: a nova era da construção sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
          legenda={""}
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Joinville"}
          titulo={
            "Senna Tower em Balneário Camboriú o sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Balneário Camboriú"}
          titulo={
            "Roteiro perfeito para encontrar o seu paraís sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Florianópolis"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Curitiba"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Balneário Camboriú"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"São Francisco do Sul"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Itapema"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Balneário Camboriú"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
        <BlogCardArtigo
          img={ImgArtigo}
          cidade={"Itapoá"}
          titulo={
            "Lotisa entrega primeira etapa do Home Clube sdofsodnfosdinfosdasdasda asdasdasdasdasd"
          }
        />
      </div>
      <div className="card-artigo-blog-container-button">
        <Button
          variant="contained"
          size="large"
          sx={{
            width: 180,
            height: 44,
            textTransform: "none",
            fontSize: 14,
          }}
        >
          Mostrar mais artigos
        </Button>
      </div>
    </div>
  );
}
