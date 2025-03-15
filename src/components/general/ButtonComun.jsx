import Button from "@mui/material/Button";

export default function ButtonsC() {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 4,
        background: "black",
        padding: "0px 40px",
        fontSize: 17,
        height: 65,
        whiteSpace: "nowrap",
      }}
    >
      Encontrar imóveis
    </Button>
  );
}
