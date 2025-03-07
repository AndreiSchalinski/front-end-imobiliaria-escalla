import { getIcon } from "@/assets/icons";

import { Button, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        K
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        L
      </a>
    ),
  },
];

export default function Drops() {
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
          >
            {getIcon().iconCompartilhamento}
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
}
