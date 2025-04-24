import { getIcon } from "@/assets/icons";

import { Button, Dropdown, Space } from "antd";

export default function Drops({ items }) {
  const enviarURLImovel = () => {
    console.log(items);
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button
            style={{
              color: "red",
              border: "none",
              background: "rgba(255, 255, 255, 0)",
            }}
            onClick={enviarURLImovel}
          >
            {getIcon().iconCompartilhamento}
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
}
