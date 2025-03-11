"use client";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";

export default function Grouped() {
  const options = categoriasLista.map((option) => {
    const firstLetter = option.categoria[2].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <FormControl sx={{ m: 1, minWidth: "23.52%" }}>
      <Autocomplete
        options={options}
        groupBy={(option) => option.categoria}
        getOptionLabel={(option) => option.categoria}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
      />
    </FormControl>
  );
}


const categoriasLista = [
  {categoria:'Residencial', types:['Apartamento','Apartamento duplex','apartamento garden','Área','Casa','Chácara','Cobertura','Sobrado','Studio','Terreno']},
  {categoria:'Comercial', types:['Apartamento','Apartamento duplex','apartamento garden','Área']},
  {categoria:'Industrial', types:['Área','Terreno']},
  {categoria:'Rural', types:['Área','Casa','Chácara','Sobrado','Terreno']},
];
/*

Apartamento
Apartamento duplex
apartamento garden
Área
Casa
Chácara
Cobertura
Sobrado
Studio
Terreno
*/

/*

Residencial
Comercial
Industrial
Rural


*/


