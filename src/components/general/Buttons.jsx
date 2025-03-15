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
        background: "white",
        height: 40,
        textTransform: "none",
        fontSize: 15,
        margin: "0 10px",
        whiteSpace: "nowrap",
        width: 150,
      }}
      endIcon={<FilterListIcon />}
      onClick={onClick}
    >
      {legenda}
    </Button>
  );
}
