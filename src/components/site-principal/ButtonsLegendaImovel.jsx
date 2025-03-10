import Drops from "./Dropdowns";
import { getIcon } from "@/assets/icons";

const listLegends = [
  "Cozinha integrada",
  "Área de serviço",
  "Suíte máster",
  "Banheira de hidromassagem",
  "Vista mar",
  "Sacada integrada",
  "Espaço gourmet",
  "Living integrado"
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
        <li>{getIcon().iconSave}</li>
        <li>
          <Drops />
        </li>
        <li>{getIcon().iconAmplitude}</li>
      </ul>
    </div>
  );
}
