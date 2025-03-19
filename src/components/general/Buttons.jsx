import FilterListIcon from "@mui/icons-material/FilterList";

import Button from "@mui/material/Button";

export default function Buttons({ onClick, legenda }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 20,
        color: "black",
        border: "none",
        background:
          legenda !== "Buscar por código"
            ? "white"
            : "rgba(255, 255, 255, 0.65)",
        height: 40,
        textTransform: "none",
        fontSize: 15,
        margin: legenda !== "Buscar por código" ?"0 10px":'auto',
        whiteSpace: "nowrap",
        width: legenda !== "Buscar por código" ? 150 : 170,
      }}
      endIcon={legenda !== "Buscar por código" ? <FilterListIcon /> : null}
      onClick={onClick}
      className="input-filtro-imoveis-fifltros-adicionais"
    >
      {legenda}
    </Button>
  );
}
