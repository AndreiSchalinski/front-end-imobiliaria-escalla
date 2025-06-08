"use client";

import BlogCardArtigo from "@/components/blog/BlogCardArtigo";
import Button from "@mui/material/Button";
import { getArtigos } from "@/services/service.artigos";
import { useEffect, useState } from "react";

export default function BlogArtigosPage() {
  const [listArtigos, setListArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respArtigos = await getArtigos();
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
        {listArtigos.map((artigo, i) =>
          artigo.imagem !== null ? (
            <BlogCardArtigo key={i} artigo={artigo} />
          ) : null
        )}
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
