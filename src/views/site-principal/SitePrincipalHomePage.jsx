"use client";

import SelectOption from "@/components/general/Select";
import Grouped from "@/components/general/Autocomplite";
import InputText from "@/components/general/InputText";
import Buttons from "@/components/general/Buttons";
import ButtonsC from "@/components/general/ButtonComun";
import { getIcon } from "@/assets/icons";
import { useState } from "react";

export default function HomePage() {
  const [openInputs, setOpenInputs] = useState(false);

  const handleToggleInputs = () => {
    setOpenInputs((prev) => !prev); // Alterna o estado entre true e false
  };

  return (
    <div className="home-page-site-principal">
      <div className="home-page-site-principal-container-informations">
        <div className="home-page-site-principal-container-text-title">
          <h1>A melhor experiência é morar e investir bem!</h1>
          <h3>Cidade. Campo. Litoral</h3>
        </div>
        <div className="home-page-container-filters">
          <SelectOption
            hiddenCheckbox={true}
            isMultiple={false}
            label={"Pretensão"}
          />
          <SelectOption
            hiddenCheckbox={false}
            isMultiple={true}
            iconLabel={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 19 }}
              >
                {getIcon().iconHome}
              </span>
            }
            label={"Tipo imóvel"}
          />
          {/*<Grouped />*/}
          <InputText label={"Digite condomínio, região, bairro, cidade"} />
          <Buttons onClick={handleToggleInputs} />
          <ButtonsC />

          <div
            style={{
              width: "100%",
              display: openInputs ? "none" : "flex",
              marginTop:20,
              
            }}
          >
            <SelectOption
              hiddenCheckbox={true}
              isMultiple={false}
              label={"Preço de venda"}
              disable={openInputs}
            />

            <SelectOption
              hiddenCheckbox={true}
              isMultiple={false}
              label={"Em condomínio fechado"}
              disable={openInputs}
            />

            <SelectOption
              hiddenCheckbox={true}
              isMultiple={false}
              label={"Suítes"}
              disable={openInputs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
