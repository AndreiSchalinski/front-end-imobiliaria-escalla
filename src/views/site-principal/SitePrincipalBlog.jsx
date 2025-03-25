import Button from "@mui/material/Button";
import Card from "@/components/site-principal/Card";
import ImgBlog1 from "@/assets/blog-2.png";
import ImgBlog2 from "@/assets/blog-4.png";
import ImgBlog3 from "@/assets/blog-5.png";

export default function SitePrincipalBlog() {
  return (
    <div className="container-site-principal-blog">
      <ul className="container-site-principal-blog-link">
        <li>
          <h1>Quer acompanhar as novidades?</h1>
        </li>
        <li>
          <p>
            Descubra conteúdos sobre apartamentos, tendências e mais assuntos do
            seu interesse.
          </p>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              background: "black",
              textTransform: "none",
              width: 245,
              height: 48,
              fontSize: 16,
            }}
          >
            Acesse nosso Blog
          </Button>
        </li>
      </ul>

      <ul className="container-site-principal-blog-cards">
        <li>
          <Card
            img={ImgBlog1}
            titulo={"long established"}
            legenda={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
            }
          />
        </li>
        <li>
          <Card
            img={ImgBlog2}
            titulo={"long established"}
            legenda={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
            }
          />
        </li>
        <li>
          <Card
            img={ImgBlog3}
            titulo={"long established"}
            legenda={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
            }
          />
        </li>
      </ul>
    </div>
  );
}
