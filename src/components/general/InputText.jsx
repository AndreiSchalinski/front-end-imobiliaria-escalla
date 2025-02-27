import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default function InputText({ label }) {
  return (
    <Input
      className="myInput"
      size="small"
      placeholder={label}
      style={{ height: "60px", width: "300px" }}
      prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
      color="red"
    />
  );
}
