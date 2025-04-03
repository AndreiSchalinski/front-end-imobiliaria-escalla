import { Button } from "@mui/material";
import Image from "next/image";
import ImgLink from "@/assets/imgs-blog/Link.png";

export default function BlogHomePage() {
  return (
    <div className="container-blog-home">
      <ul className="container-blog-home-links">
        <li>
          <p>
            Auris Residenze: a nova era da construção sustentável em Balneário
            Camboriú
          </p>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              width: 174,
              height: 44,
              fontSize: 15,
              textTransform: "none",
              fontFamily: '"Sora", serif',
              letterSpacing: 2,
              marginTop: 3,
            }}
          >
            Ler artigo
          </Button>
        </li>
      </ul>
      <div>
        <Image
          src={ImgLink}
          alt=""
          layout="intrinsic"
          width={661.19}
          height={300}
        />
      </div>
    </div>
  );
}
