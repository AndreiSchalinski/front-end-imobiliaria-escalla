"use client";

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

export default function SelectOption({
  isMultiple,
  hiddenCheckbox,
  iconLabel,
  label,
}) {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ minWidth: 200, margin: "0 5px" }}>
      <InputLabel
        id="demo-multiple-checkbox-label"
        sx={{
          color: "#808080", // Cor inicial do label
          "&.Mui-focused": {
            color: "black", // Cor do label ao focar
          },
          position: "absolute",
          top: "50%",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
        shrink
      >
        {iconLabel} {"\u2005"} {label}
      </InputLabel>
      <Select
        autoWidth
        multiple={isMultiple}
        value={personName}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        sx={{
          borderRadius: 3,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // Cor padrão da borda
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none", // Cor da borda ao passar o mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none", // Cor da borda ao focar
          },
          background:'white'
        }}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox
              checked={personName.includes(name)}
              sx={{
                color: "",
                "&.Mui-checked": { color: "black" },
                transform: "scale(1.0)", // Aumenta o tamanho
                borderRadius: "8px",
                display: hiddenCheckbox ? "none" : "block",
              }}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
