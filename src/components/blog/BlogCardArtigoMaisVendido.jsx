import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCardArtigoMaisVendido({ titulo, legenda }) {
  return (
    <Card className="card-artigo-mais-lido-carousel-blog">
      <CardContent
        style={{
          marginTop: 13,
          padding: "20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            lineHeight: 1.3,
          }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            lineHeight: 1.3,
          }}
        >
          {legenda}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "auto",
        }}
      >
        <Button
          size="large"
          sx={{
            color: "#0057B8",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          {` Saiba mais >`}
        </Button>
      </CardActions>
    </Card>
  );
}
