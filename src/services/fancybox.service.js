import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const openFacyboxImages = (listImagens, index) => {
  const items = listImagens.map((img) => ({
    src: `data:image/jpeg;base64,${img.dadosImagem}`,
    type: "image",
    opts: {
      zoom: true,
      caption: img.nomeArquivo || "Imagem ampliada",
      width: "1600px",
      height: "1200px",
    },
  }));

  NativeFancybox.show(items, {
    Carousel: {
      infinite: true,
    },
    startIndex: index,
  });
};
