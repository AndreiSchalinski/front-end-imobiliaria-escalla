import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ImgMediaCard({ img, titulo, legenda }) {
  return (
    <Card sx={{ maxWidth: 345, border: "1px solid black", padding: "4px 4px" }}>
      <div>
        <Image src={img} alt="" layout="intrinsic"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {legenda}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>20 / 09 / 2024</Typography>
        <Button
          size="small"
          sx={{ color: "black", textTransform: "none", fontWeight: "bold" }}
        >
          Leia mais
        </Button>
      </CardActions>
    </Card>
  );
}
