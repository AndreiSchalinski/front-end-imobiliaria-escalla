"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

export default function ArtigoHomePage({ artigo }) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !quillRef.current) {
      quillRef.current = new Quill(containerRef.current, {
        readOnly: true,
        theme: "bubble",
        modules: {
          toolbar: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (!quillRef.current || !artigo?.conteudo) return;

    let conteudo = artigo.conteudo;

    if (typeof conteudo === "string") {
      try {
        conteudo = JSON.parse(conteudo);
      } catch (error) {
        console.error("Erro ao parsear conteúdo do artigo:", error);
        return;
      }
    }

    if (conteudo) {
      quillRef.current.setContents(conteudo);
    }
  }, [artigo?.conteudo]);

  return (
    <div className="container-home-artigo">
      <p className="title">{artigo.nome}</p>

      <img
        src={artigo.imagem?.url}
        alt={artigo.imagem?.nomeArquivo}
        style={{ width: "100%", height: "auto", maxHeight: 600 }}
      />

      <div className="container-div-line"></div>

      <div ref={containerRef} className="quill-reader"></div>

      <div className="container-button-nav-artigos-nex-prev">
        <div className="buttons">
          <a href="">Prev</a>
        </div>
        <div className="buttons">
          <a href="">Next</a>
        </div>
      </div>
    </div>
  );
}
