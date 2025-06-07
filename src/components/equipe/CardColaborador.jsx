import Image from "next/image";

import { getIcon } from "@/assets/icons";

export default function CardColaborador({ colaborador }) {
  return (
    <div className="container-site-principal-consultor">
      <img
        src={colaborador.imagem.url}
        alt={colaborador.imagem.nomeArquivo}
        className="container-site-principal-consultor-imagem"
      />
      <div className="container-site-principal-consultor-button">
        <p>{colaborador.nome}</p>
        {getIcon("white").iconSum}
      </div>
    </div>
  );
}
