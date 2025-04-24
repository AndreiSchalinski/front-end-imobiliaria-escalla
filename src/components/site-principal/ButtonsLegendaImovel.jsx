"use client";

import Drops from "./Dropdowns";
import { getIcon } from "@/assets/icons";
import { openFacyboxImages } from "@/services/fancybox.service";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";

const listLegends = [
  "Cozinha integrada",
  "Área de serviço",
  "Suíte máster",
  //"Banheira de hidromassagem",
  //"Vista mar",
  //"Sacada integrada",
  //"Espaço gourmet",
  //"Living integrado"
];

export default function ButtonsLegendaImovel({ listImgs, index, listCaracteristicas }) {
  const caracteristicasEmpreendimento = () => {
    return listCaracteristicas.split(",").map((item) => item.trim());
  };

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
  });

  const { vertical, horizontal, open, message } = state;

  const handleClick = (newState, message) => {
    setState({ ...newState, open: true, message });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setState((prev) => ({ ...prev, open: false }));
  };

  const [whatsUrl, setWhatsUrl] = useState("");

  useEffect(() => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      "Confira esse imóvel anunciado na Escalla imóveis: " +
        window.location.href
    )}`;
    setWhatsUrl(url);
  }, []);

  const copyUrl = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() =>
        handleClick(
          { vertical: "bottom", horizontal: "center" },
          "URL copiada!"
        )
      )
      .catch((err) => console.error("Erro ao copiar:", err));
  };

  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={copyUrl}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {getIcon("blue").iconCopyFolha}
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href={whatsUrl}>
          {getIcon("blue").iconWhats}
        </a>
      ),
    },
  ];

  return (
    <div className="container-legenda-vantagens-imovel">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={3000}
        ContentProps={{
          sx: {
            backgroundColor: "#5783eb",
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />

      <ul className="legenda-list">
        {caracteristicasEmpreendimento().map((el, i) => (
          <li key={i} className="legenda-item">
            {el}
          </li>
        ))}
      </ul>
      <ul className="icon-list">
        <li className="icon-list-1">{getIcon().iconSave}</li>
        <li className="icon-list-2">
          <Drops items={items} />
        </li>
        <li
          className="icon-list-3"
          onClick={(e) => {
            e.preventDefault();
            openFacyboxImages(listImgs, index);
          }}
        >
          {getIcon().iconAmplitude}
        </li>
      </ul>
    </div>
  );
}
