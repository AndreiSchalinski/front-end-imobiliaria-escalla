import Drops from "./Dropdowns";
import { getIcon } from "@/assets/icons";

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

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        {getIcon("blue").iconCopyFolha}
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
        {getIcon("blue").iconWhats}
      </a>
    ),
  },
];

export default function ButtonsLegendaImovel() {
  return (
    <div className="container-legenda-vantagens-imovel">
      <ul className="legenda-list">
        {listLegends.map((el, i) => (
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
        <li className="icon-list-3">{getIcon().iconAmplitude}</li>
      </ul>
    </div>
  );
}
