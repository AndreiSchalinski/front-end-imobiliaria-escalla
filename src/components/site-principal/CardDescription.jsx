"use client";

import { useState } from "react";

export default function CardDescription() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ display: `${isOpen ? "initial" : "none"}` }}>
        <p>
          Empreendimento com área de lazer completa, localizado na Avenida
          Brasil, barra norte de Balneário Camboriú.
        </p>
        <p>Imóvel disponível para visitação.</p>

        <p>
          Agende uma visita agora mesmo e venha conhecer este lindo imóvel.{" "}
        </p>

        <p>Os valores estão sujeitos a alteração sem aviso prévio. </p>

        <ul>
          <li>Cidade: Balneário Camboriú</li>
          <li>Bairro: Centro</li>
          <li>Tipo do imóvel: Apartamento</li>
          <li>Empreendimento: Edifício Alameda Jardins Residence</li>
        </ul>
      </div>

      <span
        onClick={() => setIsOpen(!isOpen)}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "#5783eb",
          fontSize: 18,
          fontFamily: "Sora",
        }}
      >
        Exibir mais+
      </span>
    </>
  );
}
