import { Button } from "@mui/material";
import { getIcon } from "@/assets/icons";

export default function SitePrincipalButtonsApresentacao() {
  return (
    <div className="container-site-principal-buttons-apresentacao">
      <Button
        variant="outlined"
        sx={{
          width: "101px",
          height: "56px",
          fontSize: 11,
          color: "#83B1C1",
          border: "2px solid #83B1C1",
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
        Planta
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "187.33px",
          height: "56px",
          fontSize: 11,
          color: "#83B1C1",
          border: "2px solid #83B1C1",
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
        {getIcon().iconVideo}&nbsp;Conheça o bairro
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "101px",
          height: "56px",
          fontSize: 11,
          color: "#83B1C1",
          border: "2px solid #83B1C1",
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
        {getIcon().iconVideo}&nbsp;Vídeo
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "101px",
          height: "56px",
          fontSize: 11,
          color: "#83B1C1",
          border: "2px solid #83B1C1",
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
       {getIcon().iconFolhaMap}&nbsp;Mapa
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "101px",
          height: "56px",
          fontSize: 11,
          color: "#83B1C1",
          border: "2px solid #83B1C1",
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
       {getIcon().iconAvatar}&nbsp;Rua
      </Button>
    </div>
  );
}
