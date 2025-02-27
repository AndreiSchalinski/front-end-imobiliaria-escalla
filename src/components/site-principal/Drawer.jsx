"use client";

import { Drawer } from "antd";

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
      <p>Imóveis à venda</p>
      <p>Empreendimentos</p>
      <p>Favoritos</p>
      <br />
      <br />
      <p className="titles-drawer-links">Serviços</p>
      <p>Anunciar imóvel</p>
      <p>Calculadora de Imóvel</p>
      <p>Encontre meu imóvel</p>
      <p>Como comprar</p>
      <p>Simular Financiamento</p>
      <br />
      <br />
      <p className="titles-drawer-links">Institucional</p>
      <p>Quem somos</p>
      <p>Contato</p>
      <p>Trabalhe Conosco</p>
      <p>Viva BC</p>
      <p>Viva Itajaí</p>
      <p>Blog</p>
      <p>(47) 3367-0990 </p>
      <p>(47) 99699-3030</p>
    </Drawer>
  );
}
