import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCardArtigo({ artigo }) {
  const redirect = (id) => {
    window.location.href = `/artigo/${id}`;
  };

  return (
    <Card className="card-artigo-blog">
      <div className="container-title-card-blog">
        <p>{artigo.cidade}</p>
      </div>

      <div style={{ marginTop: 10 }}>
        <img
          src={artigo.imagem.url}
          alt={artigo.imagem.nomeArquivo}
          layout="intrinsic"
          width={"100%"}
          height={"auto"}
        />
      </div>
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
          {artigo.nome}
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
          onClick={() => redirect(artigo.id)}
        >
          {` Saiba mais >`}
        </Button>
      </CardActions>
    </Card>
  );
}
