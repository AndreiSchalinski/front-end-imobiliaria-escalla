"use client";

import { useEffect, useRef } from "react";
import "quill/dist/quill.bubble.css";

export default function ArtigoHomePage({ artigo }) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    const initQuill = async () => {
      if (containerRef.current && !quillRef.current) {
        const Quill = (await import("quill")).default;

        quillRef.current = new Quill(containerRef.current, {
          readOnly: true,
          theme: "bubble",
          modules: {
            toolbar: false,
          },
        });

        let conteudo = artigo?.conteudo;

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
      }
    };

    initQuill();
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

      <div className="spacer-text-reader"></div>
    </div>
  );
}
