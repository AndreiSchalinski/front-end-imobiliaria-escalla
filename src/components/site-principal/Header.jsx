"use client";

import "../../style/site-principal.css";
import Links from "./Link";
import LogoEscalla from "../../assets/logo-escalla.png";
import { getIcon } from "../../assets/icons";
import Image from "next/image";
import DrawerSite from "./Drawer";
import { Space, Button } from "antd";
import { useState, useEffect } from "react";

export default function HeaderSite() {
  const [open, setOpen] = useState(false);

  const [header, setHeader] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 830 ? setHeader("header-height") : setHeader("");
    };
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={`header-site ${header}`}>
      <div>
        <Button
          className="button-drawer-text-left button-drawer-text"
          type="text"
          onClick={showDrawer}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 30 }}>
            menu
          </span>
        </Button>
        <DrawerSite open={open} onCloseDrawer={onClose} />
      </div>
      <h1></h1>
      <Space
        className="space-img"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "0.8s",
        }}
      >
        <Image src={LogoEscalla} alt="" height={50} width={200} />
      </Space>
      <Space style={{ display: "flex", marginRight: 40 }}>
        <Links
          dropdown={true}
          label={"Ver imóveis"}
          href={"/#"}
          color={"#6d6d6d"}
          colorHover={"#000000"}
        />
        <div
          className="container-link-icon-header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Links
            dropdown={false}
            label={"Meus favoritos"}
            href={"/favoritos"}
            color={"#6d6d6d"}
            colorHover={"#000000"}
            className={"link"}
          />
          <div className="icon">{getIcon().iconSwitch}</div>
        </div>
        <div>
          <Button
            className="button-drawer-text-right button-drawer-text"
            type="text"
            onClick={showDrawer}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              menu
            </span>
          </Button>
          <DrawerSite open={open} onCloseDrawer={onClose} />
        </div>
      </Space>
    </header>
  );
}
