"use client";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function SelectOption({ isMultiple, hiddenCheckbox, iconLabel, label }) {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: "23.52%" }}>
      <InputLabel
        id="demo-multiple-checkbox-label"
        sx={{
          color: "#808080", // Cor inicial do label
          "&.Mui-focused": {
            color: "black", // Cor do label ao focar
          },
          display:"flex",
          alignItems:"center"
        }}
      >
       {iconLabel} {'\u2005'} {label}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple={isMultiple}
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Pretensão" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        sx={{
          borderRadius: 4,
          //height: 65,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // Cor padrão da borda
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid black", // Cor da borda ao passar o mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid black", // Cor da borda ao focar
          },
        }}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox
              checked={personName.includes(name)}
              sx={{
                color: "",
                "&.Mui-checked": { color: "black" },
                transform: "scale(1.2)", // Aumenta o tamanho
                borderRadius: "8px",
                display: hiddenCheckbox?'none':'block',
              }}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
