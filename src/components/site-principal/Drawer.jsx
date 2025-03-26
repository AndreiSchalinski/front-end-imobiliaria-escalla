"use client";

import { Drawer } from "antd";
import Links from "./Link";

const styleIcon = {
  color: "white",
  fontSize: 44,
  position: "absolute",
  right: 10,
  top: 25,
};

const styleDrawer = { background: "#020617", color: "white", paddingLeft: 30 };

export default function DrawerSite({ open, onCloseDrawer }) {
  return (
    <Drawer
      onClose={onCloseDrawer}
      open={open}
      style={styleDrawer}
      closeIcon={
        <span
          className="icon-drawer-site material-symbols-outlined"
          style={styleIcon}
        >
          close
        </span>
      }
      placement="right"
      closable
      destroyOnClose
    >
      <p className="titles-drawer-links">Imóveis</p>
      <p className="titles-drawer-links-text">Imóveis à venda</p>
      <p className="titles-drawer-links-text">Empreendimentos</p>
      <p className="titles-drawer-links-text">Favoritos</p>
      <br />
      <br />
      <p className="titles-drawer-links">Serviços</p>
      <p className="titles-drawer-links-text">Anunciar imóvel</p>
      <p className="titles-drawer-links-text">Calculadora de Imóvel</p>
      <p className="titles-drawer-links-text">Encontre meu imóvel</p>
      <p className="titles-drawer-links-text">Como comprar</p>
      <p className="titles-drawer-links-text">Simular Financiamento</p>
      <br />
      <br />
      <p className="titles-drawer-links">Institucional</p>
      <p className="titles-drawer-links-text">Quem somos</p>
      <p className="titles-drawer-links-text">Contato</p>
      <p className="titles-drawer-links-text">Trabalhe Conosco</p>
      <p className="titles-drawer-links-text">Viva BC</p>
      <p className="titles-drawer-links-text">Viva Itajaí</p>
      <p className="titles-drawer-links-text">Blog</p>
      <p className="titles-drawer-links-text">(47) 3367-0990 </p>
      <p className="titles-drawer-links-text">(47) 99699-3030</p>
    </Drawer>
  );
}
