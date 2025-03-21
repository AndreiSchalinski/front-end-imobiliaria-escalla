import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default function InputText({ label, margin }) {
  return (
    <Input
      style={{ width: 350, margin: margin !== undefined ? margin : null }}
      className="input-filtro-imoveis myInput"
      placeholder={label}
      prefix={<SearchOutlined style={{ fontSize: "18px", color: "black" }} />}
      color="red"
    />
  );
}
