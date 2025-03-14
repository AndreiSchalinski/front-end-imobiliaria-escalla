import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default function InputText({ label }) {
  return (
    <Input
      className="myInput"
      size="small"
      placeholder={label}
      style={{width: "31%", height:65, margin:'0 0px 0 5px' }}
      prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
      color="red"
    />
  );
}
