import { Link } from "@mui/material";
import { Button, Dropdown } from "antd";

export default function Links({
  dropdown,
  color,
  colorHover,
  label,
  href,
  className,
}) {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Ver todos os imóveis
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Abaixo do preço
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Vazio
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Na planta
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Sala comercial
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Terreno
        </a>
      ),
    },
  ];

  const component = !dropdown ? (
    <Link
      className={className}
      href={href}
      underline="none"
      sx={{
        transition: "0.4s",
        color: color,
        "&:hover": {
          color: colorHover,
        },
        cursor: "pointer",
      }}
    >
      {label}
    </Link>
  ) : (
    <div>
      <Dropdown
        className="dropdown-header"
        menu={{
          items,
        }}
        placement="bottom"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <Button type="link" style={{ padding: "10px" }}>
          {label}
        </Button>
      </Dropdown>
    </div>
  );

  return component;
}