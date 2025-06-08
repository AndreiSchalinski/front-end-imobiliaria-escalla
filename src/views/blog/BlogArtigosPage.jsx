"use client";

import BlogCardArtigo from "@/components/blog/BlogCardArtigo";
import ImgArtigo from "@/assets/imgs-blog/Link.png";
import Button from "@mui/material/Button";
import { getArtigos } from "@/services/service.artigos";
import { useEffect, useState } from "react";

export default function BlogArtigosPage() {
  const [listArtigos, setListArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respArtigos = await getArtigos();
      console.log(respArtigos.data);
      setListArtigos(respArtigos.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container-blog-artigos">
      <div style={{ width: "59.09%" }}>
        <p>Artigos recentes</p>
      </div>

      <div className="container-blog-artigos-cards">
        {listArtigos.map((artigo, i) => (
          artigo.imagem !== null ? (
            <BlogCardArtigo
              key={i}
              img={artigo.imagem}
              cidade={artigo.cidade}
              titulo={artigo.nome}
              legenda={""}
            />
          ) : null
        ))}
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
